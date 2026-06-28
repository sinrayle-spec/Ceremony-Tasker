import React, { useState, useEffect, useRef } from 'react';

export default function TimerSection({ tasks, activeTaskId, setActiveTaskId }) {
  const [mode, setMode] = useState('stopwatch'); // 'stopwatch' or 'countdown'
  const [time, setTime] = useState(0); // 秒単位
  const [isRunning, setIsRunning] = useState(false);
  const [countdownStart, setCountdownStart] = useState(600); // デフォルト10分 (600秒)
  
  const timerRef = useRef(null);
  const audioCtxRef = useRef(null);

  // モード切り替え時の処理
  useEffect(() => {
    setIsRunning(false);
    if (timerRef.current) clearInterval(timerRef.current);
    
    if (mode === 'stopwatch') {
      setTime(0);
    } else {
      setTime(countdownStart);
    }
  }, [mode, countdownStart]);

  // タイマー動作処理
  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => {
          if (mode === 'stopwatch') {
            return prevTime + 1;
          } else {
            if (prevTime <= 1) {
              // カウントダウン終了
              setIsRunning(false);
              clearInterval(timerRef.current);
              triggerAlarm();
              return 0;
            }
            return prevTime - 1;
          }
        });
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isRunning, mode]);

  // Web Audio API による電子アラーム音の合成
  const playAlarmSound = () => {
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      
      const audioCtx = audioCtxRef.current;
      const now = audioCtx.currentTime;
      
      const playBeep = (startTime) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        
        osc.type = 'square'; // はっきりとしたピピピ音
        osc.frequency.setValueAtTime(880, startTime); // A5 (880Hz)
        
        gain.gain.setValueAtTime(0, startTime);
        gain.gain.linearRampToValueAtTime(0.2, startTime + 0.02);
        gain.gain.setValueAtTime(0.2, startTime + 0.12);
        gain.gain.linearRampToValueAtTime(0, startTime + 0.15);
        
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        
        osc.start(startTime);
        osc.stop(startTime + 0.15);
      };

      // 1サイクル 0.8秒で 3回のビープを5サイクル (約4秒間) 再生
      for (let cycle = 0; cycle < 5; cycle++) {
        const base = now + cycle * 0.8;
        playBeep(base);
        playBeep(base + 0.2);
        playBeep(base + 0.4);
      }
    } catch (e) {
      console.error("サウンド再生エラー:", e);
    }
  };

  // バイブレーションの発動
  const triggerVibration = () => {
    if ('vibrate' in navigator) {
      // 500ms振動、250ms停止、500ms振動...を繰り返す
      navigator.vibrate([500, 250, 500, 250, 500, 250, 500]);
    }
  };

  // アラームトリガー (音 + バイブ + ダイアログ)
  const triggerAlarm = () => {
    playAlarmSound();
    triggerVibration();
    
    // システム通知（パーミッションが許可されていれば）
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('Ceremony Tasker', {
        body: '設定時間になりました。進行を確認してください。',
        icon: '/icon.svg'
      });
    }

    alert('【Ceremony Tasker アラーム】\n設定時間になりました。進行を確認してください。');
  };

  const handleStartStop = () => {
    // Web Audio APIの初期化（ユーザー操作に紐づける必要があるため）
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
    }
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    if (mode === 'stopwatch') {
      setTime(0);
    } else {
      setTime(countdownStart);
    }
  };

  const handleQuickTime = (seconds) => {
    setIsRunning(false);
    setCountdownStart(seconds);
    setTime(seconds);
  };

  // 時間フォーマット (MM:SS または HH:MM:SS)
  const formatTime = (totalSeconds) => {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    
    const pad = (n) => n.toString().padStart(2, '0');
    
    if (hrs > 0) {
      return `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
    }
    return `${pad(mins)}:${pad(secs)}`;
  };

  // 選択中のタスク取得
  const selectedTask = tasks.find(t => t.id === activeTaskId);

  return (
    <div className="timer-section fade-in">
      {/* 連携する案件の選択 */}
      <div className="task-selector-wrapper">
        <label className="selector-label">現在進行中の案件 (タイマー連携)</label>
        <select 
          value={activeTaskId || ''} 
          onChange={(e) => setActiveTaskId(e.target.value || null)}
          className="task-select"
        >
          <option value="">-- 選択しない (単体タイマーとして使用) --</option>
          {tasks.filter(t => t.status !== 'completed').map((task) => (
            <option key={task.id} value={task.id}>
              {task.title} ({task.category || '未分類'})
            </option>
          ))}
        </select>
      </div>

      {/* 選択中の案件表示カード */}
      {selectedTask && (
        <div 
          className="active-task-display-card"
          style={{ borderLeftColor: `var(--color-${selectedTask.color || 'blue'})` }}
        >
          <div className="card-top">
            <span className="task-badge" style={{ backgroundColor: `var(--color-${selectedTask.color || 'blue'})` }}>
              {selectedTask.category || '案件'}
            </span>
            <span className="task-date">📅 {selectedTask.date} {selectedTask.time || ''}</span>
          </div>
          <div className="task-title-main">{selectedTask.title}</div>
          {selectedTask.notes && <div className="task-desc">{selectedTask.notes}</div>}
        </div>
      )}

      {/* タイマーモード切り替え */}
      <div className="timer-mode-selector">
        <button 
          className={`mode-tab ${mode === 'stopwatch' ? 'active' : ''}`}
          onClick={() => setMode('stopwatch')}
        >
          経過時間 (ストップウォッチ)
        </button>
        <button 
          className={`mode-tab ${mode === 'countdown' ? 'active' : ''}`}
          onClick={() => setMode('countdown')}
        >
          残り時間 (カウントダウン)
        </button>
      </div>

      {/* タイマー表示本体 */}
      <div className="timer-display-container">
        <div className={`timer-ring ${isRunning ? 'running' : ''}`}>
          <div className="timer-time-text">{formatTime(time)}</div>
          <div className="timer-mode-sublabel">{mode === 'stopwatch' ? 'ELAPSED' : 'REMAINING'}</div>
        </div>
      </div>

      {/* カウントダウン時間クイック設定 */}
      {mode === 'countdown' && (
        <div className="quick-time-buttons">
          <button onClick={() => handleQuickTime(180)} className="quick-time-btn">3分</button>
          <button onClick={() => handleQuickTime(300)} className="quick-time-btn">5分</button>
          <button onClick={() => handleQuickTime(600)} className="quick-time-btn">10分</button>
          <button onClick={() => handleQuickTime(1800)} className="quick-time-btn">30分</button>
          <button onClick={() => handleQuickTime(3600)} className="quick-time-btn">60分</button>
        </div>
      )}

      {/* 操作ボタン */}
      <div className="timer-controls">
        <button onClick={handleReset} className="control-btn reset-btn">
          リセット
        </button>
        <button 
          onClick={handleStartStop} 
          className={`control-btn start-btn ${isRunning ? 'stop' : 'start'}`}
        >
          {isRunning ? '一時停止' : '開始'}
        </button>
      </div>

      <style>{`
        .timer-section {
          padding: 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          flex: 1;
        }

        .task-selector-wrapper {
          width: 100%;
          margin-bottom: 12px;
        }

        .selector-label {
          font-size: 11px;
          font-weight: 700;
          color: var(--text-secondary);
          display: block;
          margin-bottom: 6px;
          text-transform: uppercase;
        }

        .task-select {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          padding: 10px 14px;
          border-radius: 8px;
          font-size: 14px;
          width: 100%;
        }

        .active-task-display-card {
          width: 100%;
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-left: 4px solid var(--color-blue);
          border-radius: 12px;
          padding: 12px 16px;
          margin-bottom: 20px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }

        .card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 6px;
        }

        .task-badge {
          font-size: 9px;
          font-weight: 700;
          padding: 2px 6px;
          border-radius: 4px;
          color: white;
        }

        .task-date {
          font-size: 11px;
          color: var(--text-secondary);
        }

        .task-title-main {
          font-size: 15px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .task-desc {
          font-size: 12px;
          color: var(--text-muted);
          line-height: 1.4;
        }

        .timer-mode-selector {
          display: flex;
          background-color: var(--bg-secondary);
          padding: 4px;
          border-radius: 20px;
          width: 100%;
          margin-bottom: 24px;
          border: 1px solid var(--border-color);
        }

        .mode-tab {
          flex: 1;
          padding: 8px 12px;
          border-radius: 16px;
          font-size: 12px;
          font-weight: 600;
          text-align: center;
          color: var(--text-secondary);
        }

        .mode-tab.active {
          background-color: var(--bg-tertiary);
          color: var(--text-primary);
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
          border: 1px solid rgba(255,255,255,0.05);
        }

        .timer-display-container {
          margin: 10px 0 24px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .timer-ring {
          width: 180px;
          height: 180px;
          border-radius: 50%;
          border: 6px solid var(--border-color);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: rgba(30, 41, 59, 0.2);
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
          position: relative;
        }

        .timer-ring.running {
          border-color: var(--color-gold);
          box-shadow: 0 0 30px var(--border-glow);
          animation: pulse 2s infinite ease-in-out;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }

        .timer-time-text {
          font-size: 36px;
          font-weight: 700;
          font-family: monospace;
          color: var(--text-primary);
          letter-spacing: -0.5px;
        }

        .timer-mode-sublabel {
          font-size: 9px;
          font-weight: 700;
          color: var(--text-muted);
          letter-spacing: 2px;
          margin-top: 4px;
        }

        .quick-time-buttons {
          display: flex;
          gap: 8px;
          margin-bottom: 24px;
          width: 100%;
          justify-content: center;
        }

        .quick-time-btn {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          padding: 6px 12px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 600;
        }

        .quick-time-btn:active {
          border-color: var(--color-gold);
          color: var(--text-primary);
        }

        .timer-controls {
          display: flex;
          gap: 16px;
          width: 100%;
          max-width: 320px;
          margin-bottom: 20px;
        }

        .control-btn {
          flex: 1;
          height: 48px;
          border-radius: 24px;
          font-size: 15px;
          font-weight: 700;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }

        .reset-btn {
          background-color: var(--bg-secondary);
          color: var(--text-secondary);
          border: 1px solid var(--border-color);
        }

        .start-btn.start {
          background: linear-gradient(135deg, var(--color-gold), var(--color-gold-dark));
          color: white;
        }

        .start-btn.stop {
          background: linear-gradient(135deg, var(--color-red), #991b1b);
          color: white;
        }
      `}</style>
    </div>
  );
}
