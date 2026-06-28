import React, { useState, useEffect, useRef } from 'react';

export default function TimerSection({ tasks, activeTaskId, setActiveTaskId }) {
  const [timeLeft, setTimeLeft] = useState(0); // 秒単位の残り時間
  const [isAlarmActive, setIsAlarmActive] = useState(false);
  const timerRef = useRef(null);
  const audioCtxRef = useRef(null);

  // 選択中の案件を取得
  const selectedTask = tasks.find(t => t.id === activeTaskId);

  // 案件の期限までの残り時間を計算する関数
  const calculateTimeLeft = () => {
    if (!selectedTask || !selectedTask.date) return 0;
    
    // 期限の日時文字列を作成 (日付 + 時間)
    const timeStr = selectedTask.time || '00:00';
    const deadline = new Date(`${selectedTask.date}T${timeStr}:00`);
    const now = new Date();
    
    const diffMs = deadline.getTime() - now.getTime();
    return diffMs > 0 ? Math.floor(diffMs / 1000) : 0;
  };

  // 案件が変更された、またはタイマーが走るときの処理
  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    setIsAlarmActive(false);

    if (selectedTask) {
      const initialLeft = calculateTimeLeft();
      setTimeLeft(initialLeft);

      if (initialLeft > 0) {
        timerRef.current = setInterval(() => {
          const left = calculateTimeLeft();
          setTimeLeft(left);
          
          if (left <= 0) {
            clearInterval(timerRef.current);
            triggerAlarm();
          }
        }, 1000);
      } else {
        // すでに期限を過ぎている場合
        setTimeLeft(0);
      }
    } else {
      setTimeLeft(0);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [activeTaskId, tasks]);

  // Web Audio API による電子アラーム音の合成
  const playAlarmSound = () => {
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }
      
      const audioCtx = audioCtxRef.current;
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }
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
      navigator.vibrate([500, 250, 500, 250, 500, 250, 500]);
    }
  };

  // アラームトリガー
  const triggerAlarm = () => {
    setIsAlarmActive(true);
    playAlarmSound();
    triggerVibration();
    
    // システム通知
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('Ceremony Tasker', {
        body: `【期限通知】「${selectedTask.title}」の時刻になりました。`,
        icon: '/icon.svg'
      });
    }
  };

  const stopAlarm = () => {
    setIsAlarmActive(false);
  };

  // 時間フォーマット (DD日 HH時間 MM分 SS秒)
  const formatCountdown = (totalSeconds) => {
    if (totalSeconds <= 0) return "00:00:00";
    
    const days = Math.floor(totalSeconds / 86400);
    const hrs = Math.floor((totalSeconds % 86400) / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    
    const pad = (n) => n.toString().padStart(2, '0');
    
    if (days > 0) {
      return `${days}日 ${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
    }
    return `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
  };

  // Web Audio APIの初期化（ブラウザ制限回避用）
  const initAudio = () => {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
    }
  };

  return (
    <div className="timer-section fade-in" onClick={initAudio}>
      {/* 連携する案件の選択 */}
      <div className="task-selector-wrapper">
        <label className="selector-label">カウントダウンする案件を選択</label>
        <select 
          value={activeTaskId || ''} 
          onChange={(e) => {
            initAudio();
            setActiveTaskId(e.target.value || null);
          }}
          className="task-select"
        >
          <option value="">-- 選択してください --</option>
          {tasks.filter(t => t.status !== 'completed').map((task) => (
            <option key={task.id} value={task.id}>
              {task.title} ({task.date} {task.time || '時間未設定'})
            </option>
          ))}
        </select>
      </div>

      {selectedTask ? (
        <div className="active-task-timer-container">
          {/* 選択中の案件表示カード */}
          <div 
            className="active-task-display-card"
            style={{ borderLeftColor: `var(--color-${selectedTask.color || 'blue'})` }}
          >
            <div className="card-top">
              <span className="task-badge" style={{ backgroundColor: `var(--color-${selectedTask.color || 'blue'})` }}>
                {selectedTask.category || '案件'}
              </span>
              <span className="task-date">期限: 📅 {selectedTask.date} {selectedTask.time || '00:00'}</span>
            </div>
            <div className="task-title-main">{selectedTask.title}</div>
            {selectedTask.notes && <div className="task-desc">{selectedTask.notes}</div>}
          </div>

          {/* カウントダウン表示本体 */}
          <div className="timer-display-container">
            <div className={`timer-ring ${timeLeft > 0 ? 'running' : 'expired'} ${isAlarmActive ? 'alarm-active' : ''}`}>
              <div className="timer-time-text">{formatCountdown(timeLeft)}</div>
              <div className="timer-mode-sublabel">
                {isAlarmActive ? 'ALARM ACTIVE' : timeLeft > 0 ? 'TIME UNTIL DEADLINE' : 'DEADLINE PASSED'}
              </div>
            </div>
          </div>

          {/* アラーム停止ボタン */}
          {isAlarmActive && (
            <button onClick={stopAlarm} className="control-btn stop-alarm-btn">
              アラーム停止
            </button>
          )}

          {timeLeft <= 0 && !isAlarmActive && (
            <div className="deadline-passed-notice">
              ⚠️ この案件の期限はすでに経過しています。
            </div>
          )}
        </div>
      ) : (
        <div className="select-task-placeholder">
          <svg className="placeholder-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
          <p>カウントダウンする案件を選択してください。</p>
          <span>カレンダーまたは案件タブから選択できます。</span>
        </div>
      )}

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
          margin-bottom: 20px;
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
          padding: 12px 14px;
          border-radius: 8px;
          font-size: 14px;
          width: 100%;
        }

        .active-task-timer-container {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .active-task-display-card {
          width: 100%;
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-left: 4px solid var(--color-blue);
          border-radius: 12px;
          padding: 12px 16px;
          margin-bottom: 30px;
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

        .timer-display-container {
          margin: 10px 0 30px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .timer-ring {
          width: 220px;
          height: 220px;
          border-radius: 50%;
          border: 6px solid var(--border-color);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: rgba(30, 41, 59, 0.2);
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
          transition: all 0.3s ease;
          position: relative;
        }

        .timer-ring.running {
          border-color: var(--color-gold);
          box-shadow: 0 0 30px var(--border-glow);
        }

        .timer-ring.expired {
          border-color: var(--border-color);
          opacity: 0.7;
        }

        .timer-ring.alarm-active {
          border-color: var(--color-red);
          box-shadow: 0 0 30px rgba(225, 29, 72, 0.4);
          animation: ringPulse 0.5s infinite ease-in-out;
        }

        @keyframes ringPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.04); }
        }

        .timer-time-text {
          font-size: 28px;
          font-weight: 700;
          font-family: monospace;
          color: var(--text-primary);
          letter-spacing: -0.5px;
          text-align: center;
        }

        .timer-mode-sublabel {
          font-size: 9px;
          font-weight: 700;
          color: var(--text-muted);
          letter-spacing: 1px;
          margin-top: 6px;
        }

        .control-btn {
          width: 100%;
          max-width: 200px;
          height: 48px;
          border-radius: 24px;
          font-size: 15px;
          font-weight: 700;
          box-shadow: 0 4px 6px rgba(0,0,0,0.15);
        }

        .stop-alarm-btn {
          background: linear-gradient(135deg, var(--color-red), #991b1b);
          color: white;
        }

        .deadline-passed-notice {
          color: var(--text-muted);
          font-size: 12px;
          font-weight: 500;
          margin-top: 10px;
        }

        /* プレースホルダー */
        .select-task-placeholder {
          text-align: center;
          color: var(--text-secondary);
          padding: 60px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          flex: 1;
        }

        .placeholder-icon {
          width: 48px;
          height: 48px;
          color: var(--text-muted);
          margin-bottom: 16px;
        }

        .select-task-placeholder p {
          font-size: 14px;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .select-task-placeholder span {
          font-size: 11px;
          color: var(--text-muted);
        }
      `}</style>
    </div>
  );
}
