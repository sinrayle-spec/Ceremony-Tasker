import React, { useState, useEffect, useRef } from 'react';
import { createWorker } from 'tesseract.js';
import ImageEditorModal from './ImageEditorModal';

export default function TaskSection({ tasks, onAddTask, onUpdateTask, onDeleteTask }) {
  const [isAdding, setIsAdding] = useState(false);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [activeTab, setActiveTab] = useState('active'); // 'active' or 'completed'
  
  // 完了済みの表示フィルター ('recent' = 直近30日, 'all' = すべて)
  const [archiveFilter, setArchiveFilter] = useState('recent');

  // フォーム状態
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [time, setTime] = useState('');
  const [category, setCategory] = useState('打合せ');
  const [color, setColor] = useState('blue');
  const [notes, setNotes] = useState('');
  const [taskImages, setTaskImages] = useState([]);
  
  // OCR（文字読み取り）の状態
  const [ocrLoading, setOcrLoading] = useState(false);
  const [ocrProgress, setOcrProgress] = useState(0);
  const [ocrResult, setOcrResult] = useState('');
  const [showOcrPanel, setShowOcrPanel] = useState(false);

  // 拡大プレビュー用の状態
  const [previewImageObj, setPreviewImageObj] = useState(null);

  // 赤入れ（画像編集）モーダルの状態
  const [editingImageObj, setEditingImageObj] = useState(null);

  // --- カウントダウンタイマー ＆ アラーム制御 ---
  const [now, setNow] = useState(new Date());
  const [ringingTaskIds, setRingingTaskIds] = useState([]);
  const [rungTaskIds, setRungTaskIds] = useState([]);

  const audioCtxRef = useRef(null);
  const beepIntervalRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      const current = new Date();
      setNow(current);
      
      tasks.forEach(task => {
        if (task.status !== 'completed' && task.date && task.time) {
          const taskTime = new Date(`${task.date}T${task.time}:00`).getTime();
          
          if (current.getTime() >= taskTime && 
              current.getTime() - taskTime < 60000 && 
              !rungTaskIds.includes(task.id) && 
              !ringingTaskIds.includes(task.id)) {
            
            setRingingTaskIds(prev => [...prev, task.id]);
            setRungTaskIds(prev => [...prev, task.id]);
            
            if ('vibrate' in navigator) {
              navigator.vibrate([500, 250, 500, 250, 500]);
            }
          }
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [tasks, rungTaskIds, ringingTaskIds]);

  useEffect(() => {
    if (ringingTaskIds.length > 0) {
      if (!beepIntervalRef.current) {
        const playBeep = () => {
          try {
            if (!audioCtxRef.current) {
              audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
            }
            const ctx = audioCtxRef.current;
            if (ctx.state === 'suspended') ctx.resume();
            
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = 'square';
            osc.frequency.setValueAtTime(880, ctx.currentTime);
            
            gain.gain.setValueAtTime(0, ctx.currentTime);
            gain.gain.linearRampToValueAtTime(0.2, ctx.currentTime + 0.02);
            gain.gain.setValueAtTime(0.2, ctx.currentTime + 0.15);
            gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.2);
            
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 0.2);
          } catch (e) {
            console.error("アラーム再生失敗:", e);
          }
        };

        playBeep();
        beepIntervalRef.current = setInterval(playBeep, 1000);
      }
    } else {
      if (beepIntervalRef.current) {
        clearInterval(beepIntervalRef.current);
        beepIntervalRef.current = null;
      }
    }

    return () => {
      if (beepIntervalRef.current) {
        clearInterval(beepIntervalRef.current);
        beepIntervalRef.current = null;
      }
    };
  }, [ringingTaskIds]);

  const stopTaskAlarm = (id) => {
    setRingingTaskIds(prev => prev.filter(tid => tid !== id));
  };

  const initAudio = () => {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
    }
  };

  const getCountdownText = (task) => {
    if (!task.date || !task.time) return '時間未設定';
    
    const taskTime = new Date(`${task.date}T${task.time}:00`).getTime();
    const diffMs = taskTime - now.getTime();
    
    if (diffMs <= 0) {
      return '⚠️ 期限超過';
    }

    const totalSeconds = Math.floor(diffMs / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hrs = Math.floor((totalSeconds % 86400) / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    const pad = (n) => n.toString().padStart(2, '0');
    
    if (days > 0) {
      return `${days}日 ${pad(hrs)}時間 ${pad(mins)}分`;
    }
    if (hrs > 0) {
      return `${pad(hrs)}時間 ${pad(mins)}分 ${pad(secs)}秒`;
    }
    return `${pad(mins)}分 ${pad(secs)}秒`;
  };

  // --- 写真＆赤入れ・アノテーション ---

  const compressImage = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        const img = new Image();
        img.src = event.target.result;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          let width = img.width;
          let height = img.height;
          
          const MAX_WIDTH = 800;
          if (width > MAX_WIDTH) {
            height = Math.round((height * MAX_WIDTH) / width);
            width = MAX_WIDTH;
          }
          
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, width, height);
          
          const compressedBase64 = canvas.toDataURL('image/jpeg', 0.6);
          resolve(compressedBase64);
        };
      };
    });
  };

  const handleMultipleImagesChange = async (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    const newCompressedList = await Promise.all(
      files.map(async (file) => {
        const base64 = await compressImage(file);
        return {
          id: `img_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
          data: base64
        };
      })
    );

    setTaskImages(prev => [...prev, ...newCompressedList]);
  };

  const handleOcrFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    setOcrLoading(true);
    setOcrProgress(0);
    setOcrResult('');
    
    try {
      const compressedBase64 = await compressImage(file);
      const newImgObj = {
        id: `img_${Date.now()}`,
        data: compressedBase64
      };
      setTaskImages(prev => [...prev, newImgObj]);

      const worker = await createWorker('jpn', 1, {
        logger: m => {
          if (m.status === 'recognizing text') {
            setOcrProgress(Math.floor(m.progress * 100));
          }
        }
      });
      
      const { data: { text } } = await worker.recognize(compressedBase64);
      setOcrResult(text);
      await worker.terminate();
    } catch (error) {
      console.error("OCR処理エラー:", error);
      alert("文字認識に失敗しました。");
    } finally {
      setOcrLoading(false);
    }
  };

  const removeAttachedImage = (id) => {
    setTaskImages(prev => prev.filter(img => img.id !== id));
  };

  const startImageEdit = (imgObj) => {
    setEditingImageObj(imgObj);
  };

  const saveEditedImage = (editedBase64) => {
    setTaskImages(prev => 
      prev.map(img => img.id === editingImageObj.id ? { ...img, data: editedBase64 } : img)
    );
    setEditingImageObj(null);
  };

  const getTaskImagesArray = (task) => {
    if (task.images && Array.isArray(task.images)) {
      return task.images;
    }
    if (task.imageData) {
      return [{ id: 'img_migrated', data: task.imageData }];
    }
    return [];
  };

  // --- カテゴリー色分けの拡張 (8色対応) ---
  const handleCategoryChange = (cat) => {
    setCategory(cat);
    switch (cat) {
      case '施行': setColor('red'); break;
      case '搬送': setColor('orange'); break;
      case '打合せ': setColor('blue'); break;
      case '事前相談': setColor('green'); break;
      case '法要': setColor('purple'); break;
      case 'アフター': setColor('pink'); break;
      case '社内業務': setColor('gray'); break;
      case '見積': setColor('yellow'); break;
      default: setColor('blue');
    }
  };

  // --- タスク操作 ＆ 送信 ---

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    if (editingTaskId) {
      onUpdateTask(editingTaskId, {
        title,
        date,
        time,
        category,
        color,
        notes,
        images: taskImages,
        hasImage: taskImages.length > 0
      });
      setEditingTaskId(null);
    } else {
      onAddTask({
        title,
        date,
        time,
        category,
        color,
        notes,
        images: taskImages,
        hasImage: taskImages.length > 0,
        status: 'active'
      });
      setIsAdding(false);
    }

    resetForm();
  };

  const resetForm = () => {
    setTitle('');
    setDate(new Date().toISOString().split('T')[0]);
    setTime('');
    setCategory('打合せ');
    setColor('blue');
    setNotes('');
    setTaskImages([]);
    setOcrResult('');
    setShowOcrPanel(false);
  };

  const startEdit = (task) => {
    setEditingTaskId(task.id);
    setTitle(task.title);
    setDate(task.date);
    setTime(task.time || '');
    setCategory(task.category || '打合せ');
    setColor(task.color || 'blue');
    setNotes(task.notes || '');
    setTaskImages(getTaskImagesArray(task));
    setIsAdding(true);
  };

  const cancelEdit = () => {
    setEditingTaskId(null);
    setIsAdding(false);
    resetForm();
  };

  const toggleComplete = (task) => {
    onUpdateTask(task.id, {
      status: task.status === 'completed' ? 'active' : 'completed'
    });
  };

  const getTaskTimestamp = (task) => {
    if (!task.date) return Infinity;
    const timeStr = task.time || '00:00';
    return new Date(`${task.date}T${timeStr}:00`).getTime();
  };

  // --- アーカイブ（過去ログ）フィルタリング & ソート ---
  const getFilteredAndSortedTasks = () => {
    // 1. 完了・未完了での基本フィルタ
    let list = tasks.filter(t => 
      activeTab === 'active' ? t.status !== 'completed' : t.status === 'completed'
    );

    // 2. 完了済タブかつ「直近30日」フィルターがオンの場合、30日より前のタスクを除外
    if (activeTab === 'completed' && archiveFilter === 'recent') {
      const thirtyDaysAgo = now.getTime() - (30 * 24 * 60 * 60 * 1000);
      list = list.filter(t => {
        const taskTime = getTaskTimestamp(t);
        // 期限設定がない場合は直近として表示、ある場合は30日以内
        return taskTime === Infinity || taskTime >= thirtyDaysAgo;
      });
    }

    // 3. 期限が近い順にソート (完了済みの場合は期限が新しいもの順)
    return list.sort((a, b) => {
      const timeA = getTaskTimestamp(a);
      const timeB = getTaskTimestamp(b);
      
      if (activeTab === 'completed') {
        // 完了済みは直近のもの（新しい日付）が上に来るように降順ソート
        return timeB - timeA;
      }
      // 未完了は期限が近い（古い日付）が上に来るように昇順ソート
      return timeA - timeB;
    });
  };

  const displayTasks = getFilteredAndSortedTasks();

  return (
    <div className="task-section fade-in" onClick={initAudio}>
      {!isAdding ? (
        <>
          {/* タスク一覧ヘッダー */}
          <div className="task-header-controls">
            <div className="task-tabs">
              <button 
                className={`task-tab ${activeTab === 'active' ? 'active' : ''}`}
                onClick={() => setActiveTab('active')}
              >
                未完了 ({tasks.filter(t => t.status !== 'completed').length})
              </button>
              <button 
                className={`task-tab ${activeTab === 'completed' ? 'active' : ''}`}
                onClick={() => setActiveTab('completed')}
              >
                完了済 ({tasks.filter(t => t.status === 'completed').length})
              </button>
            </div>
            
            {/* 完了済タブのアクティブ時に表示するアーカイブフィルター */}
            {activeTab === 'completed' && (
              <div className="archive-filter-row">
                <span className="filter-label">履歴の表示範囲:</span>
                <div className="archive-toggle-group">
                  <button 
                    className={`archive-toggle-btn ${archiveFilter === 'recent' ? 'active' : ''}`}
                    onClick={() => setArchiveFilter('recent')}
                  >
                    直近30日分
                  </button>
                  <button 
                    className={`archive-toggle-btn ${archiveFilter === 'all' ? 'active' : ''}`}
                    onClick={() => setArchiveFilter('all')}
                  >
                    すべての過去ログ
                  </button>
                </div>
              </div>
            )}
            
            <button onClick={() => { setIsAdding(true); setEditingTaskId(null); }} className="add-task-trigger-btn">
              ＋ 新規案件登録
            </button>
          </div>

          <div className="tasks-list-container">
            {displayTasks.length === 0 ? (
              <p className="no-tasks-placeholder">
                {activeTab === 'completed' && archiveFilter === 'recent'
                  ? '直近30日間に完了した案件はありません。古い記録は「すべての過去ログ」から確認できます。'
                  : '登録されている案件はありません。'}
              </p>
            ) : (
              displayTasks.map((task) => {
                const isRinging = ringingTaskIds.includes(task.id);
                const hasTime = task.date && task.time;
                const countdown = getCountdownText(task);
                const isExpired = countdown === '⚠️ 期限超過';
                const currentImages = getTaskImagesArray(task);

                return (
                  <div 
                    key={task.id} 
                    className={`task-card 
                      ${task.status === 'completed' ? 'completed' : ''} 
                      ${isRinging ? 'alarm-ringing' : ''}
                    `}
                    style={{ borderLeftColor: `var(--color-${task.color || 'blue'})` }}
                  >
                    {isRinging && <div className="alarm-flashing-overlay" />}

                    <div className="task-card-header">
                      <span className="task-card-title">{task.title}</span>
                      
                      <div className="task-card-actions">
                        {isRinging && (
                          <button onClick={() => stopTaskAlarm(task.id)} className="card-alarm-stop-btn">
                            🔕 音を止める
                          </button>
                        )}
                        <button 
                          onClick={() => toggleComplete(task)} 
                          className={`status-toggle-btn ${task.status === 'completed' ? 'reopen' : 'done'}`}
                        >
                          {task.status === 'completed' ? '未完了に戻す' : '完了'}
                        </button>
                        <button onClick={() => startEdit(task)} className="edit-icon-btn" title="編集">
                          ✏️
                        </button>
                        <button onClick={() => onDeleteTask(task.id)} className="delete-btn" title="削除">
                          🗑️
                        </button>
                      </div>
                    </div>
                    
                    <div className="task-card-meta">
                      <span className="meta-item">📅 {task.date} {task.time ? `🕒 ${task.time}` : '🕒 時間未指定'}</span>
                      <span className={`badge badge-${task.color || 'blue'}`}>{task.category}</span>
                    </div>

                    {/* カウントダウン表示タイマー */}
                    {task.status !== 'completed' && hasTime && (
                      <div className={`task-card-countdown-timer ${isExpired ? 'expired' : ''}`}>
                        <svg className="timer-icon-inline" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        <span className="countdown-time-label">
                          {isExpired ? '期限を超過しています' : `期限まで: ${countdown}`}
                        </span>
                      </div>
                    )}

                    {task.notes && <p className="task-card-notes">{task.notes}</p>}
                    
                    {/* 複数書面サムネイル */}
                    {currentImages.length > 0 && (
                      <div className="task-card-image-attachment">
                        <div className="attachment-label">📎 添付書面（{currentImages.length}枚 - タップで拡大）:</div>
                        <div className="task-thumbnails-scroll-container">
                          {currentImages.map((imgObj, index) => (
                            <div 
                              key={imgObj.id || index} 
                              className="task-thumbnail-wrapper-multiple" 
                              onClick={() => setPreviewImageObj(imgObj)}
                            >
                              <img src={imgObj.data} alt={`添付書面 ${index + 1}`} className="task-card-thumbnail" />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </>
      ) : (
        /* 新規追加 ＆ 編集フォーム */
        <div className="add-task-form-container">
          <div className="form-header">
            <h2>{editingTaskId ? '案件情報の編集' : '新規案件登録'}</h2>
            <button onClick={editingTaskId ? cancelEdit : () => setIsAdding(false)} className="close-form-btn">キャンセル</button>
          </div>

          <form onSubmit={handleSubmit} className="task-form">
            <div className="form-group">
              <label>案件名（故人名/家名など）*</label>
              <input 
                type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                placeholder="例：山田家 葬儀" 
                required 
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>日付 (期限)</label>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
              </div>
              <div className="form-group">
                <label>時間 (アラーム時刻)</label>
                <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
              </div>
            </div>

            <div className="form-group">
              <label>カテゴリ</label>
              <select value={category} onChange={(e) => handleCategoryChange(e.target.value)}>
                <option value="施行">施行 (赤)</option>
                <option value="搬送">搬送・お迎え (橙)</option>
                <option value="打合せ">打合せ (青)</option>
                <option value="事前相談">事前相談 (緑)</option>
                <option value="法要">法要 (紫)</option>
                <option value="アフター">アフター (桃)</option>
                <option value="社内業務">社内業務 (灰)</option>
                <option value="見積">見積・事務 (黄)</option>
              </select>
            </div>

            <div className="form-group">
              <label>打ち合わせメモ / 備考</label>
              <textarea 
                rows="4" 
                value={notes} 
                onChange={(e) => setNotes(e.target.value)} 
                placeholder="打合せの要点や注意事項を入力..."
              />
            </div>

            <div className="ocr-upload-section">
              <div className="section-title-row">
                <h3>打合せ書面（写真）の添付</h3>
                <button 
                  type="button" 
                  onClick={() => setShowOcrPanel(!showOcrPanel)} 
                  className="ocr-toggle-link"
                >
                  {showOcrPanel ? '写真を普通に添付する' : 'ローカルAIで写真の文字を読み取る'}
                </button>
              </div>

              {showOcrPanel ? (
                <div className="ocr-panel">
                  <div className="ocr-desc">
                    カメラで書面を撮影すると、ローカルAIが文字を抽出し、フォームに転記できます。画像も自動添付されます。
                  </div>
                  
                  <div className="file-input-wrapper">
                    <input 
                      type="file" 
                      accept="image/*" 
                      capture="environment" 
                      onChange={handleOcrFileChange} 
                      id="ocr-file-picker" 
                    />
                    <label htmlFor="ocr-file-picker" className="file-picker-label">
                      📷 カメラ起動 / 写真を選択
                    </label>
                  </div>

                  {ocrLoading && (
                    <div className="ocr-progress-bar-container">
                      <div className="ocr-loading-spinner" />
                      <div className="ocr-progress-text">文字認識中... ({ocrProgress}%)</div>
                      <div className="ocr-progress-track">
                        <div className="ocr-progress-fill" style={{ width: `${ocrProgress}%` }} />
                      </div>
                    </div>
                  )}

                  {ocrResult && (
                    <div className="ocr-result-container">
                      <label>AI読み取り結果（タップで転記）</label>
                      <textarea 
                        rows="5" 
                        value={ocrResult} 
                        readOnly 
                        className="ocr-result-textarea"
                      />
                      <div className="ocr-action-buttons">
                        <button 
                          type="button" 
                          onClick={() => {
                            setTitle(ocrResult.slice(0, 30).replace(/\n/g, ' '));
                          }}
                          className="ocr-fill-btn"
                        >
                          案件名に設定
                        </button>
                        <button 
                          type="button" 
                          onClick={() => {
                            setNotes(prev => prev ? `${prev}\n\n【読み取りテキスト】\n${ocrResult}` : ocrResult);
                          }}
                          className="ocr-fill-btn"
                        >
                          備考に追記
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="normal-upload-panel">
                  <div className="file-input-wrapper">
                    <input 
                      type="file" 
                      accept="image/*" 
                      multiple 
                      onChange={handleMultipleImagesChange} 
                      id="normal-file-picker" 
                    />
                    <label htmlFor="normal-file-picker" className="file-picker-label">
                      📁 写真を追加添付 / カメラで複数撮影
                    </label>
                  </div>

                  {taskImages.length > 0 && (
                    <div className="form-images-preview-list">
                      {taskImages.map((imgObj, idx) => (
                        <div key={imgObj.id} className="preview-image-item-wrapper">
                          <img src={imgObj.data} alt="サムネイル" className="form-preview-thumb" />
                          <div className="preview-actions-overlay">
                            <button 
                              type="button" 
                              onClick={() => startImageEdit(imgObj)} 
                              className="img-edit-action-btn"
                            >
                              ✏️ 赤入れ
                            </button>
                            <button 
                              type="button" 
                              onClick={() => removeAttachedImage(imgObj.id)} 
                              className="img-remove-action-btn"
                            >
                              ✕
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            <button type="submit" className="submit-task-btn">
              {editingTaskId ? '変更を保存する' : '案件を保存する'}
            </button>
          </form>
        </div>
      )}

      {/* インライン画像拡大モーダル */}
      {previewImageObj && (
        <div className="preview-modal-overlay" onClick={() => setPreviewImageObj(null)}>
          <div className="preview-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="preview-modal-header">
              <span className="preview-modal-title">添付書面 拡大プレビュー</span>
              <button className="preview-modal-close" onClick={() => setPreviewImageObj(null)}>✕</button>
            </div>
            <div className="preview-modal-img-container">
              <img src={previewImageObj.data} alt="拡大書面" className="preview-modal-img" />
            </div>
            <div className="preview-modal-footer">
              ピンチイン・アウト、またはドラッグでスクロールしてご確認いただけます。
            </div>
          </div>
        </div>
      )}

      {/* 画像編集（赤入れ・注釈）モーダル */}
      {editingImageObj && (
        <ImageEditorModal
          imageData={editingImageObj.data}
          onSave={saveEditedImage}
          onClose={() => setEditingImageObj(null)}
        />
      )}

      <style>{`
        .task-section {
          padding: 16px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .task-header-controls {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 16px;
        }

        .task-tabs {
          display: flex;
          background-color: var(--bg-secondary);
          border-radius: 8px;
          padding: 2px;
          border: 1px solid var(--border-color);
        }

        .task-tab {
          flex: 1;
          padding: 8px;
          font-size: 14px;
          font-weight: 600;
          color: var(--text-secondary);
          text-align: center;
          border-radius: 6px;
        }

        .task-tab.active {
          background-color: var(--bg-tertiary);
          color: var(--text-primary);
        }

        /* 完了アーカイブ用トグル */
        .archive-filter-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background-color: rgba(255,255,255,0.02);
          border: 1px solid var(--border-color);
          padding: 8px 12px;
          border-radius: 10px;
          margin-top: 4px;
        }

        .filter-label {
          font-size: 12px;
          font-weight: 700;
          color: var(--text-secondary);
        }

        .archive-toggle-group {
          display: flex;
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 6px;
          padding: 2px;
        }

        .archive-toggle-btn {
          font-size: 11px;
          font-weight: 700;
          padding: 4px 10px;
          color: var(--text-secondary);
          border-radius: 4px;
        }

        .archive-toggle-btn.active {
          background-color: var(--bg-tertiary);
          color: var(--text-primary);
          box-shadow: 0 1px 3px rgba(0,0,0,0.2);
        }

        .add-task-trigger-btn {
          background: linear-gradient(135deg, var(--color-gold), var(--color-gold-dark));
          color: white;
          padding: 14px;
          border-radius: 8px;
          font-weight: 700;
          font-size: 16px; /* 14px -> 16px */
          text-align: center;
          box-shadow: 0 4px 6px rgba(0,0,0,0.15);
        }

        .tasks-list-container {
          display: flex;
          flex-direction: column;
          gap: 12px;
          overflow-y: auto;
          flex: 1;
        }

        .no-tasks-placeholder {
          text-align: center;
          color: var(--text-secondary);
          font-size: 14px;
          padding: 40px 16px;
          line-height: 1.5;
        }

        .task-card {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-left: 5px solid var(--color-blue); /* 4px -> 5px */
          border-radius: 12px;
          padding: 18px; /* 16px -> 18px */
          position: relative;
          box-shadow: 0 2px 5px rgba(0,0,0,0.05);
          transition: all 0.2s ease;
          overflow: hidden;
        }

        .task-card.completed {
          opacity: 0.5;
        }

        .task-card.alarm-ringing {
          border-color: var(--color-red) !important;
          box-shadow: 0 0 15px rgba(225, 29, 72, 0.4);
          animation: cardShake 0.4s infinite ease-in-out;
        }

        @keyframes cardShake {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-0.5deg); }
          75% { transform: rotate(0.5deg); }
        }

        .alarm-flashing-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(225, 29, 72, 0.05);
          pointer-events: none;
          animation: flashRed 1s infinite alternate;
          z-index: 1;
        }

        @keyframes flashRed {
          from { opacity: 0.2; }
          to { opacity: 0.8; }
        }

        .task-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 8px;
          gap: 10px;
          position: relative;
          z-index: 2;
        }

        /* 文字サイズの大幅拡大 */
        .task-card-title {
          font-size: 20px; /* 16px -> 20px */
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.3;
        }

        .task-card-actions {
          display: flex;
          gap: 10px;
          align-items: center;
          flex-shrink: 0;
        }

        .status-toggle-btn {
          font-size: 12px; /* 11px -> 12px */
          font-weight: 700;
          padding: 6px 10px; /* 余白拡大 */
          border-radius: 6px;
        }

        .status-toggle-btn.done {
          background-color: rgba(217, 119, 6, 0.1);
          color: var(--color-gold-light);
          border: 1px solid rgba(217, 119, 6, 0.3);
        }

        .status-toggle-btn.reopen {
          background-color: var(--bg-tertiary);
          color: var(--text-secondary);
        }

        .card-alarm-stop-btn {
          background: linear-gradient(135deg, var(--color-red), #991b1b);
          color: white;
          font-size: 12px;
          font-weight: 700;
          padding: 6px 12px;
          border-radius: 6px;
          animation: bounce 1s infinite alternate;
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }

        @keyframes bounce {
          from { transform: scale(0.95); }
          to { transform: scale(1.05); }
        }

        .edit-icon-btn, .delete-btn {
          background: none;
          border: none;
          font-size: 16px; /* 14px -> 16px */
          cursor: pointer;
        }

        .task-card-meta {
          display: flex;
          gap: 10px;
          align-items: center;
          margin-bottom: 12px;
          position: relative;
          z-index: 2;
        }

        .meta-item {
          font-size: 14px; /* 12px -> 14px */
          font-weight: 500;
          color: var(--text-secondary);
        }

        /* カウントダウン表示タイマーの拡大 */
        .task-card-countdown-timer {
          display: flex;
          align-items: center;
          gap: 8px;
          background-color: rgba(217, 119, 6, 0.06);
          border: 1px solid rgba(217, 119, 6, 0.2);
          padding: 8px 12px;
          border-radius: 8px;
          margin-bottom: 12px;
          color: var(--color-gold-light);
          position: relative;
          z-index: 2;
        }

        .task-card-countdown-timer.expired {
          background-color: rgba(225, 29, 72, 0.06);
          border-color: rgba(225, 29, 72, 0.2);
          color: var(--color-red);
        }

        .timer-icon-inline {
          width: 16px;
          height: 16px;
        }

        .countdown-time-label {
          font-size: 15px; /* 12px -> 15px */
          font-weight: 700;
          font-family: monospace;
        }

        /* メモ文字の拡大 */
        .task-card-notes {
          font-size: 16px; /* 13px -> 16px */
          color: var(--text-primary);
          line-height: 1.5; /* 読みやすさ向上 */
          margin-bottom: 12px;
          background-color: rgba(255,255,255,0.015);
          padding: 10px 12px;
          border-radius: 6px;
          border-left: 3px solid var(--border-color);
          white-space: pre-wrap;
          position: relative;
          z-index: 2;
        }

        /* 複数書面カルーセル */
        .task-card-image-attachment {
          margin-top: 12px;
          border-top: 1px solid rgba(255,255,255,0.05);
          padding-top: 8px;
          position: relative;
          z-index: 2;
        }

        .attachment-label {
          font-size: 13px; /* 11px -> 13px */
          color: var(--text-secondary);
          margin-bottom: 8px;
        }

        .task-thumbnails-scroll-container {
          display: flex;
          gap: 10px;
          overflow-x: auto;
          padding-bottom: 6px;
          -webkit-overflow-scrolling: touch;
        }

        .task-thumbnail-wrapper-multiple {
          flex-shrink: 0;
          width: 100px;
          height: 80px;
          border-radius: 6px;
          overflow: hidden;
          border: 1px solid var(--border-color);
          cursor: pointer;
          background-color: #000;
        }

        .task-card-thumbnail {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* 登録フォーム */
        .add-task-form-container {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 20px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.3);
        }

        .form-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 12px;
        }

        .form-header h2 {
          font-size: 18px;
          font-weight: 700;
        }

        .close-form-btn {
          font-size: 13px;
          color: var(--text-secondary);
        }

        .task-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-group label {
          font-size: 12px;
          font-weight: 600;
          color: var(--text-secondary);
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .ocr-upload-section {
          background-color: rgba(255,255,255,0.01);
          border: 1px dashed var(--border-color);
          border-radius: 12px;
          padding: 16px;
          margin-top: 10px;
        }

        .section-title-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .section-title-row h3 {
          font-size: 13px;
          font-weight: 700;
        }

        .ocr-toggle-link {
          font-size: 11px;
          color: var(--color-gold-light);
          text-decoration: underline;
        }

        .ocr-panel {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .ocr-desc {
          font-size: 11px;
          color: var(--text-secondary);
          line-height: 1.4;
        }

        .file-input-wrapper {
          position: relative;
          text-align: center;
        }

        .file-input-wrapper input[type="file"] {
          position: absolute;
          left: 0;
          top: 0;
          opacity: 0;
          width: 100%;
          height: 100%;
          cursor: pointer;
        }

        .file-picker-label {
          display: block;
          background-color: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          padding: 12px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
        }

        .form-images-preview-list {
          display: flex;
          gap: 10px;
          overflow-x: auto;
          padding: 12px 0 4px;
        }

        .preview-image-item-wrapper {
          position: relative;
          flex-shrink: 0;
          width: 100px;
          height: 80px;
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid var(--border-color);
          background-color: #000;
        }

        .form-preview-thumb {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .preview-actions-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0,0,0,0.5);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 4px;
          opacity: 0;
          transition: opacity 0.15s;
        }

        .preview-image-item-wrapper:hover .preview-actions-overlay,
        .preview-image-item-wrapper:active .preview-actions-overlay {
          opacity: 1;
        }

        .img-edit-action-btn {
          width: 100%;
          background-color: var(--color-gold);
          color: white;
          font-size: 10px;
          font-weight: 700;
          padding: 4px 0;
          border-radius: 4px;
          text-align: center;
        }

        .img-remove-action-btn {
          position: absolute;
          top: 4px;
          right: 4px;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background-color: var(--color-red);
          color: white;
          font-size: 10px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .submit-task-btn {
          background: linear-gradient(135deg, var(--color-gold), var(--color-gold-dark));
          color: white;
          padding: 14px;
          border-radius: 12px;
          font-weight: 700;
          font-size: 15px;
          margin-top: 10px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.15);
        }

        /* 拡大モーダル */
        .preview-modal-overlay {
          position: fixed;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          max-width: 480px;
          height: 100vh;
          background-color: rgba(0,0,0,0.85);
          backdrop-filter: blur(5px);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
        }

        .preview-modal-content {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          width: 100%;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0,0,0,0.5);
        }

        .preview-modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px;
          border-bottom: 1px solid var(--border-color);
        }

        .preview-modal-title {
          font-size: 14px;
          font-weight: 700;
        }

        .preview-modal-close {
          background: none;
          border: none;
          color: var(--text-secondary);
          font-size: 16px;
          cursor: pointer;
        }

        .preview-modal-img-container {
          flex: 1;
          overflow: auto;
          background-color: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 300px;
        }

        .preview-modal-img {
          max-width: 100%;
          height: auto;
          display: block;
        }

        .preview-modal-footer {
          padding: 12px;
          font-size: 11px;
          color: var(--text-muted);
          text-align: center;
          border-top: 1px solid var(--border-color);
          background-color: rgba(0,0,0,0.05);
        }
      `}</style>
    </div>
  );
}
