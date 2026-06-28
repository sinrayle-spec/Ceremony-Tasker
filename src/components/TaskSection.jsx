import React, { useState } from 'react';
import { createWorker } from 'tesseract.js';

export default function TaskSection({ tasks, onAddTask, onUpdateTask, onDeleteTask }) {
  const [isAdding, setIsAdding] = useState(false);
  const [activeTab, setActiveTab] = useState('active'); // 'active' or 'completed'
  
  // フォームの状態
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [time, setTime] = useState('');
  const [category, setCategory] = useState('打合せ');
  const [color, setColor] = useState('blue');
  const [notes, setNotes] = useState('');
  const [imageData, setImageData] = useState(null); // 圧縮済みのBase64画像
  
  // OCR（文字読み取り）の状態
  const [ocrLoading, setOcrLoading] = useState(false);
  const [ocrProgress, setOcrProgress] = useState(0);
  const [ocrResult, setOcrResult] = useState('');
  const [showOcrPanel, setShowOcrPanel] = useState(false);

  // カテゴリ変更時に自動でカラーを設定する
  const handleCategoryChange = (cat) => {
    setCategory(cat);
    switch (cat) {
      case '施行': setColor('red'); break;
      case '打合せ': setColor('blue'); break;
      case '事前相談': setColor('green'); break;
      case '法要': setColor('purple'); break;
      default: setColor('blue');
    }
  };

  // 画像の圧縮とBase64変換
  const compressAndSetImage = (file) => {
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
          
          // 最大幅を 800px に制限して軽量化 (LocalStorage容量対策)
          const MAX_WIDTH = 800;
          if (width > MAX_WIDTH) {
            height = Math.round((height * MAX_WIDTH) / width);
            width = MAX_WIDTH;
          }
          
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, width, height);
          
          // JPEG圧縮画質 0.6
          const compressedBase64 = canvas.toDataURL('image/jpeg', 0.6);
          resolve(compressedBase64);
        };
      };
    });
  };

  // 写真選択時の処理
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const compressed = await compressAndSetImage(file);
    setImageData(compressed);
  };

  // OCR用ファイルの処理
  const handleOcrFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    setOcrLoading(true);
    setOcrProgress(0);
    setOcrResult('');
    
    try {
      // ローカルで画像を圧縮
      const compressedBase64 = await compressAndSetImage(file);
      setImageData(compressedBase64); // ついでにタスク画像としても設定

      // Tesseract.js のワーカー初期化
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
      alert("文字認識に失敗しました。手書きが不鮮明か、メモリ不足の可能性があります。");
    } finally {
      setOcrLoading(false);
    }
  };

  // フォーム送信
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    onAddTask({
      title,
      date,
      time,
      category,
      color,
      notes,
      imageData,
      hasImage: !!imageData,
      status: 'active'
    });

    // フォームリセット
    setTitle('');
    setDate(new Date().toISOString().split('T')[0]);
    setTime('');
    setCategory('打合せ');
    setColor('blue');
    setNotes('');
    setImageData(null);
    setOcrResult('');
    setShowOcrPanel(false);
    setIsAdding(false);
  };

  // タスク完了切り替え
  const toggleComplete = (task) => {
    onUpdateTask(task.id, {
      status: task.status === 'completed' ? 'active' : 'completed'
    });
  };

  // フィルタリングされたタスク一覧
  const filteredTasks = tasks.filter(t => 
    activeTab === 'active' ? t.status !== 'completed' : t.status === 'completed'
  ).sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <div className="task-section fade-in">
      {!isAdding ? (
        <>
          {/* タスク一覧表示 */}
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
            
            <button onClick={() => setIsAdding(true)} className="add-task-trigger-btn">
              ＋ 新規案件登録
            </button>
          </div>

          <div className="tasks-list-container">
            {filteredTasks.length === 0 ? (
              <p className="no-tasks-placeholder">登録されている案件はありません。</p>
            ) : (
              filteredTasks.map((task) => (
                <div 
                  key={task.id} 
                  className={`task-card ${task.status === 'completed' ? 'completed' : ''}`}
                  style={{ borderLeftColor: `var(--color-${task.color || 'blue'})` }}
                >
                  <div className="task-card-header">
                    <span className="task-card-title">{task.title}</span>
                    <div className="task-card-actions">
                      <button 
                        onClick={() => toggleComplete(task)} 
                        className={`status-toggle-btn ${task.status === 'completed' ? 'reopen' : 'done'}`}
                      >
                        {task.status === 'completed' ? '未完了に戻す' : '完了'}
                      </button>
                      <button onClick={() => onDeleteTask(task.id)} className="delete-btn" title="削除">
                        🗑️
                      </button>
                    </div>
                  </div>
                  
                  <div className="task-card-meta">
                    <span className="meta-item">📅 {task.date} {task.time || ''}</span>
                    <span className={`badge badge-${task.color || 'blue'}`}>{task.category}</span>
                  </div>

                  {task.notes && <p className="task-card-notes">{task.notes}</p>}
                  
                  <div className="task-card-footer">
                    {task.hasImage && (
                      <span className="file-attached-pill">
                        📎 打ち合わせ書面 (写真) 添付あり
                      </span>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </>
      ) : (
        /* 新規追加フォーム */
        <div className="add-task-form-container">
          <div className="form-header">
            <h2>新規案件登録</h2>
            <button onClick={() => setIsAdding(false)} className="close-form-btn">キャンセル</button>
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
                <label>日付</label>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
              </div>
              <div className="form-group">
                <label>時間</label>
                <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
              </div>
            </div>

            <div className="form-group">
              <label>カテゴリ</label>
              <select value={category} onChange={(e) => handleCategoryChange(e.target.value)}>
                <option value="施行">施行 (葬儀当日など・赤)</option>
                <option value="打合せ">打合せ (青)</option>
                <option value="事前相談">事前相談 (緑)</option>
                <option value="法要">法要 (紫)</option>
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

            {/* OCR/写真添付セクション */}
            <div className="ocr-upload-section">
              <div className="section-title-row">
                <h3>打合せ書面（写真）の追加</h3>
                <button 
                  type="button" 
                  onClick={() => setShowOcrPanel(!showOcrPanel)} 
                  className="ocr-toggle-link"
                >
                  {showOcrPanel ? '写真を普通に添付する' : 'ローカルAIで写真の文字を読み取る'}
                </button>
              </div>

              {showOcrPanel ? (
                /* OCR文字認識パネル */
                <div className="ocr-panel">
                  <div className="ocr-desc">
                    スマートフォンのカメラで打合せの書面（手書き含む）を撮影すると、ローカルAIが文字を抽出し、入力フォームに転記できます。
                  </div>
                  
                  <div className="file-input-wrapper">
                    <input 
                      type="file" 
                      accept="image/*" 
                      capture="environment" // スマホで直接カメラ起動
                      onChange={handleOcrFileChange} 
                      id="ocr-file-picker" 
                    />
                    <label htmlFor="ocr-file-picker" className="file-picker-label">
                      📷 カメラで書面を撮影 / 写真を選択
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
                      <label>AI読み取り結果（タップでフォームに転記できます）</label>
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
                          案件名に転記
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
                /* 通常の画像アップロード */
                <div className="normal-upload-panel">
                  <div className="file-input-wrapper">
                    <input 
                      type="file" 
                      accept="image/*" 
                      onChange={handleImageChange} 
                      id="normal-file-picker" 
                    />
                    <label htmlFor="normal-file-picker" className="file-picker-label">
                      📁 書面の写真を選択
                    </label>
                  </div>
                  {imageData && (
                    <div className="image-preview-container">
                      <img src={imageData} alt="添付プレビュー" className="attached-img-preview" />
                      <button type="button" onClick={() => setImageData(null)} className="remove-img-btn">
                        削除
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            <button type="submit" className="submit-task-btn">
              案件を保存する
            </button>
          </form>
        </div>
      )}

      <style>{`
        .task-section {
          padding: 16px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        /* ヘッダー・タブ */
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
          font-size: 13px;
          font-weight: 600;
          color: var(--text-secondary);
          text-align: center;
          border-radius: 6px;
        }

        .task-tab.active {
          background-color: var(--bg-tertiary);
          color: var(--text-primary);
        }

        .add-task-trigger-btn {
          background: linear-gradient(135deg, var(--color-gold), var(--color-gold-dark));
          color: white;
          padding: 12px;
          border-radius: 8px;
          font-weight: 700;
          font-size: 14px;
          text-align: center;
          box-shadow: 0 4px 6px rgba(0,0,0,0.15);
        }

        /* タスクカード */
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
          font-size: 13px;
          padding: 40px 0;
        }

        .task-card {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-left: 4px solid var(--color-blue);
          border-radius: 12px;
          padding: 16px;
          position: relative;
          box-shadow: 0 2px 5px rgba(0,0,0,0.05);
          transition: opacity 0.2s;
        }

        .task-card.completed {
          opacity: 0.5;
        }

        .task-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 6px;
          gap: 10px;
        }

        .task-card-title {
          font-size: 16px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .task-card-actions {
          display: flex;
          gap: 8px;
          flex-shrink: 0;
        }

        .status-toggle-btn {
          font-size: 11px;
          font-weight: 700;
          padding: 4px 8px;
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

        .delete-btn {
          background: none;
          border: none;
          font-size: 14px;
          cursor: pointer;
        }

        .task-card-meta {
          display: flex;
          gap: 10px;
          align-items: center;
          margin-bottom: 10px;
        }

        .meta-item {
          font-size: 12px;
          color: var(--text-secondary);
        }

        .task-card-notes {
          font-size: 13px;
          color: var(--text-secondary);
          line-height: 1.4;
          margin-bottom: 10px;
          background-color: rgba(255,255,255,0.01);
          padding: 8px;
          border-radius: 6px;
          border-left: 2px solid var(--border-color);
          white-space: pre-wrap;
        }

        .file-attached-pill {
          font-size: 11px;
          color: var(--color-gold-light);
          background-color: rgba(217, 119, 6, 0.08);
          padding: 2px 8px;
          border-radius: 4px;
          display: inline-block;
          font-weight: 500;
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

        /* OCR プログレス */
        .ocr-progress-bar-container {
          background-color: rgba(0,0,0,0.2);
          border-radius: 8px;
          padding: 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
        }

        .ocr-loading-spinner {
          width: 24px;
          height: 24px;
          border: 3px solid rgba(217, 119, 6, 0.1);
          border-top-color: var(--color-gold);
          border-radius: 50%;
          animation: spin 1s infinite linear;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .ocr-progress-text {
          font-size: 12px;
          font-weight: 600;
          color: var(--color-gold-light);
        }

        .ocr-progress-track {
          width: 100%;
          height: 6px;
          background-color: var(--bg-primary);
          border-radius: 3px;
          overflow: hidden;
        }

        .ocr-progress-fill {
          height: 100%;
          background-color: var(--color-gold);
          transition: width 0.1s ease;
        }

        .ocr-result-container {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-top: 10px;
        }

        .ocr-result-textarea {
          font-size: 13px;
          background-color: var(--bg-primary);
          border-color: var(--border-color);
          line-height: 1.4;
        }

        .ocr-action-buttons {
          display: flex;
          gap: 10px;
        }

        .ocr-fill-btn {
          flex: 1;
          background-color: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          padding: 8px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 600;
        }

        .ocr-fill-btn:active {
          border-color: var(--color-gold);
        }

        .image-preview-container {
          position: relative;
          margin-top: 10px;
        }

        .attached-img-preview {
          width: 100%;
          max-height: 120px;
          object-fit: cover;
          border-radius: 8px;
          border: 1px solid var(--border-color);
        }

        .remove-img-btn {
          position: absolute;
          top: 6px;
          right: 6px;
          background-color: rgba(225, 29, 72, 0.8);
          color: white;
          font-size: 10px;
          font-weight: 700;
          padding: 4px 8px;
          border-radius: 4px;
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
      `}</style>
    </div>
  );
}
