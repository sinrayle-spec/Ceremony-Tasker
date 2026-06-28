import React, { useState } from 'react';

export default function GallerySection({ tasks }) {
  const [selectedImageObj, setSelectedImageObj] = useState(null);
  const [zoomScale, setZoomScale] = useState(1);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // すべてのタスクから添付画像をフラットに展開してリスト化する（複数添付・互換性フォールバック両対応）
  const allAttachedImages = [];
  tasks.forEach(task => {
    if (task.images && Array.isArray(task.images)) {
      task.images.forEach((imgObj, idx) => {
        allAttachedImages.push({
          id: imgObj.id || `${task.id}_img_${idx}`,
          data: imgObj.data,
          taskTitle: task.title,
          taskDate: task.date
        });
      });
    } else if (task.imageData) {
      allAttachedImages.push({
        id: `${task.id}_img_migrated`,
        data: task.imageData,
        taskTitle: task.title,
        taskDate: task.date
      });
    }
  });

  const openFullscreen = (imgObj) => {
    setSelectedImageObj(imgObj);
    setZoomScale(1);
    setDragOffset({ x: 0, y: 0 });
  };

  const closeFullscreen = () => {
    setSelectedImageObj(null);
  };

  const handleZoomIn = () => setZoomScale(prev => Math.min(prev + 0.25, 3));
  const handleZoomOut = () => setZoomScale(prev => Math.max(prev - 0.25, 0.75));
  const handleZoomReset = () => {
    setZoomScale(1);
    setDragOffset({ x: 0, y: 0 });
  };

  // ドラッグ操作によるパン
  const handleTouchStart = (e) => {
    if (zoomScale === 1) return;
    const touch = e.touches[0];
    setIsDragging(true);
    setDragStart({ x: touch.clientX - dragOffset.x, y: touch.clientY - dragOffset.y });
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    setDragOffset({
      x: touch.clientX - dragStart.x,
      y: touch.clientY - dragStart.y
    });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className="gallery-section fade-in">
      <h2 className="gallery-title">打合せ書面（写真）一覧</h2>
      <p className="gallery-desc">案件に紐づく見積書、配置図、進行表などを安全に確認できます。</p>

      {allAttachedImages.length === 0 ? (
        <div className="no-images-placeholder">
          <svg className="no-img-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <circle cx="8.5" cy="8.5" r="1.5"></circle>
            <polyline points="21 15 16 10 5 21"></polyline>
          </svg>
          <p>添付された書面写真はありません。</p>
          <span>案件登録時に写真を添付するとここに表示されます。</span>
        </div>
      ) : (
        <div className="gallery-grid">
          {allAttachedImages.map((imgObj) => (
            <div 
              key={imgObj.id} 
              className="gallery-card"
              onClick={() => openFullscreen(imgObj)}
            >
              <div className="gallery-img-wrapper">
                <img src={imgObj.data} alt={imgObj.taskTitle} className="gallery-thumb" />
              </div>
              <div className="gallery-info">
                <span className="gallery-task-title">{imgObj.taskTitle}</span>
                <span className="gallery-task-date">📅 {imgObj.taskDate}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* フルスクリーンモーダル */}
      {selectedImageObj && (
        <div className="fullscreen-overlay">
          {/* ヘッダー操作バー */}
          <div className="fullscreen-header">
            <div className="header-info">
              <span className="overlay-title">{selectedImageObj.taskTitle}</span>
              <span className="overlay-date">📅 {selectedImageObj.taskDate} の打合せ書面</span>
            </div>
            <button onClick={closeFullscreen} className="close-overlay-btn">
              ✕ 閉じる
            </button>
          </div>

          {/* 画像表示エリア */}
          <div 
            className="fullscreen-image-container"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <img 
              src={selectedImageObj.data} 
              alt="打合せ書面" 
              className="fullscreen-img"
              style={{
                transform: `translate(${dragOffset.x}px, ${dragOffset.y}px) scale(${zoomScale})`,
                transition: isDragging ? 'none' : 'transform 0.15s ease-out',
                cursor: zoomScale > 1 ? 'grab' : 'default'
              }}
              draggable="false"
            />
          </div>

          {/* ズームコントローラー */}
          <div className="zoom-controls">
            <div className="zoom-btn-row">
              <button onClick={handleZoomOut} className="zoom-btn">-</button>
              <button onClick={handleZoomReset} className="zoom-btn reset">等倍</button>
              <button onClick={handleZoomIn} className="zoom-btn">+</button>
            </div>
            {zoomScale > 1 && <span className="zoom-indicator">ズーム中 ({Math.round(zoomScale * 100)}%) / ドラッグで移動</span>}
          </div>
        </div>
      )}

      <style>{`
        .gallery-section {
          padding: 16px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .gallery-title {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 6px;
        }

        .gallery-desc {
          font-size: 12px;
          color: var(--text-secondary);
          margin-bottom: 20px;
        }

        .no-images-placeholder {
          text-align: center;
          color: var(--text-secondary);
          padding: 60px 20px;
          background-color: var(--bg-secondary);
          border-radius: 16px;
          border: 1px dashed var(--border-color);
          margin-top: 10px;
        }

        .no-img-icon {
          width: 48px;
          height: 48px;
          color: var(--text-muted);
          margin-bottom: 12px;
        }

        .no-images-placeholder p {
          font-size: 14px;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 4px;
        }

        .no-images-placeholder span {
          font-size: 11px;
          color: var(--text-muted);
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          overflow-y: auto;
        }

        .gallery-card {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          cursor: pointer;
        }

        .gallery-img-wrapper {
          width: 100%;
          height: 120px;
          background-color: #000;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .gallery-thumb {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .gallery-info {
          padding: 8px 12px;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .gallery-task-title {
          font-size: 12px;
          font-weight: 700;
          color: var(--text-primary);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .gallery-task-date {
          font-size: 10px;
          color: var(--text-secondary);
        }

        /* モーダル表示 */
        .fullscreen-overlay {
          position: fixed;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          max-width: 480px;
          height: 100vh;
          background-color: #000;
          z-index: 1500;
          display: flex;
          flex-direction: column;
          animation: fadeIn 0.2s ease-out;
        }

        .fullscreen-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px;
          background: linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0));
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          z-index: 10;
        }

        .header-info {
          display: flex;
          flex-direction: column;
        }

        .overlay-title {
          font-size: 14px;
          font-weight: 700;
          color: white;
        }

        .overlay-date {
          font-size: 11px;
          color: #94a3b8;
        }

        .close-overlay-btn {
          background-color: rgba(255,255,255,0.15);
          color: white;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          backdrop-filter: blur(5px);
        }

        .fullscreen-image-container {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          position: relative;
        }

        .fullscreen-img {
          max-width: 100%;
          max-height: 80vh;
          object-fit: contain;
          user-select: none;
        }

        .zoom-controls {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          z-index: 10;
        }

        .zoom-btn-row {
          display: flex;
          gap: 8px;
        }

        .zoom-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background-color: rgba(255,255,255,0.15);
          color: white;
          font-size: 18px;
          font-weight: 700;
          backdrop-filter: blur(5px);
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .zoom-btn.reset {
          width: 60px;
          border-radius: 20px;
          font-size: 12px;
        }

        .zoom-indicator {
          font-size: 11px;
          color: rgba(255,255,255,0.7);
          background-color: rgba(0,0,0,0.6);
          padding: 4px 10px;
          border-radius: 10px;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
}
