import React, { useState, useEffect, useRef } from 'react';

export default function ImageEditorModal({ imageData, onSave, onClose }) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  
  const [tool, setTool] = useState('pen'); // 'pen', 'eraser', 'text'
  const [color, setColor] = useState('#e11d48'); // デフォルト赤色
  const [brushSize, setBrushSize] = useState(4);
  const [isDrawing, setIsDrawing] = useState(false);
  const [textInput, setTextInput] = useState('');
  const [showTextInput, setShowTextInput] = useState(false);
  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });

  const lastPos = useRef({ x: 0, y: 0 });
  const bgImageRef = useRef(null);

  // 初期画像のロードとキャンバスサイズの設定
  useEffect(() => {
    const img = new Image();
    img.src = imageData;
    img.onload = () => {
      bgImageRef.current = img;
      
      // コンテナ幅に合わせてキャンバスアスペクト比を計算
      const containerWidth = Math.min(window.innerWidth - 32, 448); // パディング考慮
      const scale = containerWidth / img.width;
      const width = containerWidth;
      const height = img.height * scale;

      setCanvasSize({ width, height });
      
      // キャンバスに背景画像を描画
      setTimeout(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
      }, 50);
    };
  }, [imageData]);

  // 描画座標の取得 (PC/スマホ両対応)
  const getCoordinates = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    
    // タッチイベントかマウスイベントか
    if (e.touches && e.touches.length > 0) {
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top
      };
    } else {
      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    }
  };

  // 描画開始
  const startDrawing = (e) => {
    if (tool === 'text') {
      const pos = getCoordinates(e);
      lastPos.current = pos;
      setShowTextInput(true);
      return;
    }
    
    setIsDrawing(true);
    lastPos.current = getCoordinates(e);
  };

  // 描画中
  const draw = (e) => {
    if (!isDrawing || tool === 'text') return;
    
    // スクロールを防止する
    if (e.cancelable) e.preventDefault();
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const pos = getCoordinates(e);

    ctx.beginPath();
    ctx.moveTo(lastPos.current.x, lastPos.current.y);
    ctx.lineTo(pos.x, pos.y);
    
    // ツールに応じた設定
    if (tool === 'eraser') {
      ctx.globalCompositeOperation = 'destination-out'; // 消しゴムモード
      ctx.lineWidth = brushSize * 4;
    } else {
      ctx.globalCompositeOperation = 'source-over'; // 通常ペン描画
      ctx.strokeStyle = color;
      ctx.lineWidth = brushSize;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
    }
    
    ctx.stroke();
    lastPos.current = pos;
  };

  // 描画終了
  const stopDrawing = () => {
    setIsDrawing(false);
  };

  // テキストをキャンバスに確定描画する
  const handleAddTextSubmit = (e) => {
    e.preventDefault();
    if (!textInput.trim()) {
      setShowTextInput(false);
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    ctx.globalCompositeOperation = 'source-over';
    ctx.font = `bold ${brushSize * 4}px var(--font-sans)`;
    ctx.fillStyle = color;
    
    // テキストに白縁をつけて視認性を高める（見積書などの上で文字を読みやすくするため）
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 4;
    ctx.strokeText(textInput, lastPos.current.x, lastPos.current.y);
    ctx.fillText(textInput, lastPos.current.x, lastPos.current.y);

    setTextInput('');
    setShowTextInput(false);
  };

  // 編集結果を保存
  const handleSave = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    // キャンバスの内容を JPEG 形式の Base64 に変換して保存
    const editedBase64 = canvas.toDataURL('image/jpeg', 0.85);
    onSave(editedBase64);
  };

  // 編集内容をすべてクリアしてリセット
  const handleReset = () => {
    if (window.confirm('すべての書き込みをクリアして元画像に戻しますか？')) {
      const canvas = canvasRef.current;
      if (!canvas || !bgImageRef.current) return;
      const ctx = canvas.getContext('2d');
      
      ctx.globalCompositeOperation = 'source-over';
      ctx.clearRect(0, 0, canvasSize.width, canvasSize.height);
      ctx.drawImage(bgImageRef.current, 0, 0, canvasSize.width, canvasSize.height);
    }
  };

  return (
    <div className="editor-modal-overlay" onClick={onClose}>
      <div className="editor-modal-content" onClick={(e) => e.stopPropagation()} ref={containerRef}>
        <div className="editor-modal-header">
          <h3>写真に注釈・赤入れ</h3>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        {/* キャンバス表示領域 */}
        <div className="canvas-wrapper">
          <canvas
            ref={canvasRef}
            width={canvasSize.width}
            height={canvasSize.height}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            onTouchStart={startDrawing}
            onTouchMove={draw}
            onTouchEnd={stopDrawing}
            className="editor-canvas"
          />

          {/* テキスト入力ポップアップ */}
          {showTextInput && (
            <div className="canvas-text-input-overlay">
              <form onSubmit={handleAddTextSubmit} className="text-input-form">
                <input
                  type="text"
                  value={textInput}
                  onChange={(e) => setTextInput(e.target.value)}
                  placeholder="入力して確定してください..."
                  autoFocus
                  className="canvas-inline-input"
                />
                <div className="form-btns">
                  <button type="submit" className="text-confirm-btn">確定</button>
                  <button type="button" onClick={() => setShowTextInput(false)} className="text-cancel-btn">取消</button>
                </div>
              </form>
            </div>
          )}
        </div>

        {/* ツールバー */}
        <div className="editor-toolbar">
          {/* ツール切り替え */}
          <div className="toolbar-row">
            <span className="row-label">ツール:</span>
            <div className="tool-selector">
              <button 
                type="button" 
                className={`tool-btn ${tool === 'pen' ? 'active' : ''}`}
                onClick={() => setTool('pen')}
              >
                🖊️ ペン
              </button>
              <button 
                type="button" 
                className={`tool-btn ${tool === 'eraser' ? 'active' : ''}`}
                onClick={() => setTool('eraser')}
              >
                🧽 消しゴム
              </button>
              <button 
                type="button" 
                className={`tool-btn ${tool === 'text' ? 'active' : ''}`}
                onClick={() => setTool('text')}
              >
                🔤 文字入れ
              </button>
            </div>
          </div>

          {/* 色選択（ペンの時のみ） */}
          {tool !== 'eraser' && (
            <div className="toolbar-row">
              <span className="row-label">カラー:</span>
              <div className="color-selector">
                {[
                  { hex: '#e11d48', label: '赤' },
                  { hex: '#2563eb', label: '青' },
                  { hex: '#1e293b', label: '黒' }
                ].map((c) => (
                  <button
                    key={c.hex}
                    type="button"
                    className={`color-btn ${color === c.hex ? 'selected' : ''}`}
                    style={{ backgroundColor: c.hex }}
                    onClick={() => setColor(c.hex)}
                    title={c.label}
                  />
                ))}
              </div>
            </div>
          )}

          {/* ブラシサイズ */}
          <div className="toolbar-row">
            <span className="row-label">サイズ:</span>
            <div className="brush-selector">
              {[
                { size: 3, label: '細' },
                { size: 6, label: '中' },
                { size: 10, label: '太' }
              ].map((b) => (
                <button
                  key={b.size}
                  type="button"
                  className={`brush-btn ${brushSize === b.size ? 'active' : ''}`}
                  onClick={() => setBrushSize(b.size)}
                >
                  {b.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* フッター操作 */}
        <div className="editor-modal-footer">
          <button type="button" onClick={handleReset} className="reset-btn-editor">
            🔄 全クリア
          </button>
          <div className="right-btns">
            <button type="button" onClick={onClose} className="cancel-btn-editor">
              キャンセル
            </button>
            <button type="button" onClick={handleSave} className="save-btn-editor">
              💾 保存する
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .editor-modal-overlay {
          position: fixed;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          max-width: 480px;
          height: 100vh;
          background-color: rgba(0,0,0,0.8);
          backdrop-filter: blur(4px);
          z-index: 2500;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
        }

        .editor-modal-content {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          width: 100%;
          max-height: 95vh;
          display: flex;
          flex-direction: column;
          box-shadow: 0 20px 40px rgba(0,0,0,0.5);
          overflow: hidden;
        }

        .editor-modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px 16px;
          border-bottom: 1px solid var(--border-color);
        }

        .editor-modal-header h3 {
          font-size: 15px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .close-btn {
          font-size: 16px;
          color: var(--text-secondary);
        }

        /* キャンバス領域 */
        .canvas-wrapper {
          position: relative;
          background-color: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          min-height: 260px;
          max-height: 50vh;
        }

        .editor-canvas {
          display: block;
          touch-action: none; /* スマホブラウザのスクロール等を防止 */
        }

        /* インラインテキスト入力 */
        .canvas-text-input-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0,0,0,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          z-index: 10;
        }

        .text-input-form {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          padding: 16px;
          border-radius: 12px;
          width: 100%;
          max-width: 300px;
          box-shadow: 0 10px 20px rgba(0,0,0,0.3);
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .canvas-inline-input {
          width: 100%;
          padding: 10px;
          font-size: 14px;
        }

        .form-btns {
          display: flex;
          gap: 10px;
        }

        .text-confirm-btn {
          flex: 1;
          background-color: var(--color-gold);
          color: white;
          padding: 8px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 700;
        }

        .text-cancel-btn {
          background-color: var(--bg-tertiary);
          color: var(--text-secondary);
          padding: 8px 12px;
          border-radius: 6px;
          font-size: 12px;
        }

        /* ツールバー */
        .editor-toolbar {
          padding: 16px;
          border-top: 1px solid var(--border-color);
          border-bottom: 1px solid var(--border-color);
          background-color: rgba(255,255,255,0.01);
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .toolbar-row {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .row-label {
          font-size: 11px;
          font-weight: 700;
          color: var(--text-secondary);
          width: 50px;
          text-transform: uppercase;
        }

        .tool-selector, .brush-selector {
          display: flex;
          gap: 8px;
          flex: 1;
        }

        .tool-btn, .brush-btn {
          flex: 1;
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          padding: 6px;
          border-radius: 6px;
          font-size: 11px;
          font-weight: 600;
          text-align: center;
        }

        .tool-btn.active, .brush-btn.active {
          background-color: var(--bg-tertiary);
          border-color: var(--color-gold);
          color: var(--text-primary);
        }

        .color-selector {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .color-btn {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 2px solid transparent;
          transition: transform 0.15s;
        }

        .color-btn.selected {
          border-color: white;
          transform: scale(1.15);
          box-shadow: 0 0 8px rgba(255,255,255,0.2);
        }

        /* フッター */
        .editor-modal-footer {
          padding: 12px 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .reset-btn-editor {
          background-color: rgba(225, 29, 72, 0.1);
          color: var(--color-red);
          border: 1px solid rgba(225, 29, 72, 0.2);
          padding: 8px 12px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 700;
        }

        .right-btns {
          display: flex;
          gap: 10px;
        }

        .cancel-btn-editor {
          background-color: var(--bg-secondary);
          color: var(--text-secondary);
          border: 1px solid var(--border-color);
          padding: 8px 14px;
          border-radius: 8px;
          font-size: 12px;
        }

        .save-btn-editor {
          background: linear-gradient(135deg, var(--color-gold), var(--color-gold-dark));
          color: white;
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 700;
          box-shadow: 0 2px 4px rgba(0,0,0,0.15);
        }
      `}</style>
    </div>
  );
}
