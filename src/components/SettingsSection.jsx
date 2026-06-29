import React, { useState } from 'react';

export default function SettingsSection({ categories, onUpdateCategories, sects = [], onUpdateSects }) {
  const [newCatName, setNewCatName] = useState('');
  const [newCatColor, setNewCatColor] = useState('blue');
  const [editingId, setEditingId] = useState(null);
  const [editingName, setEditingName] = useState('');
  const [editingColor, setEditingColor] = useState('blue');

  const [newSectName, setNewSectName] = useState('');
  const [editingSectIndex, setEditingSectIndex] = useState(null);
  const [editingSectName, setEditingSectName] = useState('');

  const colors = [
    { id: 'blue', label: '青', hex: 'var(--color-blue)' },
    { id: 'red', label: '赤', hex: 'var(--color-red)' },
    { id: 'orange', label: '橙', hex: 'var(--color-orange)' },
    { id: 'green', label: '緑', hex: 'var(--color-green)' },
    { id: 'purple', label: '紫', hex: 'var(--color-purple)' },
    { id: 'pink', label: '桃', hex: 'var(--color-pink)' },
    { id: 'gray', label: '灰', hex: 'var(--color-gray)' },
    { id: 'yellow', label: '黄', hex: 'var(--color-yellow)' }
  ];

  const handleAddCategory = (e) => {
    e.preventDefault();
    if (!newCatName.trim()) return;

    const newCat = {
      id: `cat_${Date.now()}`,
      name: newCatName.trim(),
      color: newCatColor
    };

    onUpdateCategories([...categories, newCat]);
    setNewCatName('');
    setNewCatColor('blue');
  };

  const handleDeleteCategory = (id) => {
    if (categories.length <= 1) {
      alert('少なくとも1つのカテゴリーが必要です。');
      return;
    }
    if (window.confirm('このカテゴリーを削除してもよろしいですか？（すでに登録済みの案件の表示色などは維持されますが、新規選択はできなくなります）')) {
      onUpdateCategories(categories.filter(c => c.id !== id));
    }
  };

  const startEdit = (cat) => {
    setEditingId(cat.id);
    setEditingName(cat.name);
    setEditingColor(cat.color);
  };

  const handleSaveEdit = () => {
    if (!editingName.trim()) return;
    onUpdateCategories(categories.map(c => 
      c.id === editingId ? { ...c, name: editingName.trim(), color: editingColor } : c
    ));
    setEditingId(null);
  };

  // カテゴリーの並び替え処理
  const handleMoveCategory = (index, direction) => {
    const nextIndex = direction === 'up' ? index - 1 : index + 1;
    if (nextIndex < 0 || nextIndex >= categories.length) return;

    const updated = [...categories];
    const temp = updated[index];
    updated[index] = updated[nextIndex];
    updated[nextIndex] = temp;

    onUpdateCategories(updated);
  };

  const handleAddSect = (e) => {
    e.preventDefault();
    if (!newSectName.trim()) return;
    if (sects.includes(newSectName.trim())) {
      alert('その宗派はすでに登録されています。');
      return;
    }
    onUpdateSects([...sects, newSectName.trim()]);
    setNewSectName('');
  };

  const handleDeleteSect = (index) => {
    if (sects.length <= 1) {
      alert('少なくとも1つの宗派が必要です。');
      return;
    }
    if (window.confirm('この宗派を削除してもよろしいですか？')) {
      onUpdateSects(sects.filter((_, idx) => idx !== index));
    }
  };

  const startEditSect = (index, name) => {
    setEditingSectIndex(index);
    setEditingSectName(name);
  };

  const handleSaveSectEdit = () => {
    if (!editingSectName.trim()) return;
    if (sects.includes(editingSectName.trim()) && sects[editingSectIndex] !== editingSectName.trim()) {
      alert('その宗派名はすでに登録されています。');
      return;
    }
    onUpdateSects(sects.map((s, idx) => 
      idx === editingSectIndex ? editingSectName.trim() : s
    ));
    setEditingSectIndex(null);
  };

  // 宗派の並び替え処理
  const handleMoveSect = (index, direction) => {
    const nextIndex = direction === 'up' ? index - 1 : index + 1;
    if (nextIndex < 0 || nextIndex >= sects.length) return;

    const updated = [...sects];
    const temp = updated[index];
    updated[index] = updated[nextIndex];
    updated[nextIndex] = temp;

    onUpdateSects(updated);
  };

  const handleForceUpdate = async () => {
    if (window.confirm('アプリのプログラムキャッシュをクリアし、最新版を強制ロードします。よろしいですか？\n(入力されたデータは消えません)')) {
      try {
        if ('serviceWorker' in navigator) {
          const registrations = await navigator.serviceWorker.getRegistrations();
          for (let registration of registrations) {
            await registration.unregister();
          }
        }
        if ('caches' in window) {
          const keys = await caches.keys();
          for (let key of keys) {
            await caches.delete(key);
          }
        }
        localStorage.removeItem('ct_migrated_defaults_v3');
        window.location.reload(true);
      } catch (err) {
        console.error(err);
        alert('アップデート処理に失敗しました。画面を一度閉じて開き直してください。');
      }
    }
  };

  const handleExportData = () => {
    try {
      const tasksData = localStorage.getItem('ct_tasks') || '';
      const categoriesData = localStorage.getItem('ct_categories') || '';
      const sectsData = localStorage.getItem('ct_sects') || '';
      const pinHash = localStorage.getItem('ct_pin_hash') || '';

      const backupObj = {
        version: '1.1',
        timestamp: new Date().toISOString(),
        tasks: tasksData,
        categories: categoriesData,
        sects: sectsData,
        pin_hash: pinHash
      };

      const jsonString = JSON.stringify(backupObj, null, 2);
      const blob = new Blob([jsonString], { type: 'application/json' });
      const url = URL.createObjectURL(blob);

      const dateStr = new Date().toISOString().split('T')[0].replace(/-/g, '');
      const link = document.createElement('a');
      link.href = url;
      link.download = `ct_backup_${dateStr}.ctb`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error(err);
      alert('バックアップファイルの作成に失敗しました。');
    }
  };

  const handleImportData = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!window.confirm('本当に復元しますか？現在のデータはすべて消去され、バックアップ時点の内容に置き換わります。')) {
      e.target.value = '';
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const backupObj = JSON.parse(event.target.result);

        if (!backupObj.tasks || !backupObj.pin_hash) {
          throw new Error('無効なバックアップファイル形式です。');
        }

        localStorage.setItem('ct_tasks', backupObj.tasks);
        localStorage.setItem('ct_pin_hash', backupObj.pin_hash);
        
        if (backupObj.categories) {
          localStorage.setItem('ct_categories', backupObj.categories);
        }
        if (backupObj.sects) {
          localStorage.setItem('ct_sects', backupObj.sects);
        }

        localStorage.setItem('ct_migrated_defaults_v3', 'true');

        alert('復元が成功しました！変更を反映するためアプリを再起動します。');
        window.location.reload(true);
      } catch (err) {
        console.error(err);
        alert('復元に失敗しました。ファイルが破損しているか、正しいバックアップファイルではありません。');
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  return (
    <div className="settings-section fade-in">
      <div className="settings-header">
        <h2>🛠️ アプリ環境設定</h2>
      </div>

      <div className="settings-content">
        <div className="settings-card">
          <h3>📅 予定カテゴリーのカスタマイズ</h3>
          <p className="card-desc">案件や予定を作成する際の選択肢（カテゴリー名と枠線の色）を自由に追加・変更、および順序の並び替えができます。</p>

          <form onSubmit={handleAddCategory} className="add-cat-form">
            <div className="form-group">
              <label>新規カテゴリー名</label>
              <input
                type="text"
                placeholder="例: 回忌法要、初盆など"
                value={newCatName}
                onChange={(e) => setNewCatName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>テーマカラー</label>
              <div className="color-picker-row">
                {colors.map(c => (
                  <button
                    key={c.id}
                    type="button"
                    className={`color-dot-btn ${c.id} ${newCatColor === c.id ? 'selected' : ''}`}
                    onClick={() => setNewCatColor(c.id)}
                    title={c.label}
                  />
                ))}
              </div>
            </div>

            <button type="submit" className="add-submit-btn">＋ カテゴリーを追加</button>
          </form>

          <div className="categories-list-container">
            <h4>登録中のカテゴリー一覧 ({categories.length})</h4>
            <div className="categories-grid">
              {categories.map((cat, index) => {
                const isEditing = editingId === cat.id;
                return (
                  <div key={cat.id} className="category-item-card" style={{ borderLeft: `4px solid var(--color-${cat.color})` }}>
                    {isEditing ? (
                      <div className="edit-mode-container">
                        <input
                          type="text"
                          value={editingName}
                          onChange={(e) => setEditingName(e.target.value)}
                          className="edit-name-input"
                          required
                        />
                        <div className="edit-color-picker">
                          {colors.map(c => (
                            <button
                              key={c.id}
                              type="button"
                              className={`color-dot-btn mini ${c.id} ${editingColor === c.id ? 'selected' : ''}`}
                              onClick={() => setEditingColor(c.id)}
                            />
                          ))}
                        </div>
                        <div className="edit-actions">
                          <button onClick={handleSaveEdit} className="save-btn">保存</button>
                          <button onClick={() => setEditingId(null)} className="cancel-btn">取消</button>
                        </div>
                      </div>
                    ) : (
                      <div className="view-mode-container">
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <div className="cat-reorder-actions">
                            <button 
                              type="button"
                              onClick={() => handleMoveCategory(index, 'up')} 
                              disabled={index === 0}
                              className="reorder-btn"
                              title="上へ"
                            >
                              ▲
                            </button>
                            <button 
                              type="button"
                              onClick={() => handleMoveCategory(index, 'down')} 
                              disabled={index === categories.length - 1}
                              className="reorder-btn"
                              title="下へ"
                            >
                              ▼
                            </button>
                          </div>
                          <div className="cat-info">
                            <span className={`badge badge-${cat.color}`}>{cat.name}</span>
                          </div>
                        </div>
                        <div className="cat-actions">
                          <button onClick={() => startEdit(cat)} className="action-icon-btn" title="編集">✏️</button>
                          <button onClick={() => handleDeleteCategory(cat.id)} className="action-icon-btn delete" title="削除">🗑️</button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 宗派のカスタマイズカード */}
        <div className="settings-card" style={{ marginTop: '16px' }}>
          <h3>🛐 宗派のカスタマイズ</h3>
          <p className="card-desc">顧客名簿に登録する際の「宗派」の選択肢を自由に追加・変更、および順序の並び替えができます。</p>

          <form onSubmit={handleAddSect} className="add-cat-form">
            <div className="form-group">
              <label>新規宗派名</label>
              <input
                type="text"
                placeholder="例: 天台宗、キリスト教など"
                value={newSectName}
                onChange={(e) => setNewSectName(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="add-submit-btn">＋ 宗派を追加</button>
          </form>

          <div className="categories-list-container">
            <h4>登録中の宗派一覧 ({sects.length})</h4>
            <div className="categories-grid">
              {sects.map((sectName, index) => {
                const isEditingSect = editingSectIndex === index;
                return (
                  <div key={index} className="category-item-card" style={{ borderLeft: '4px solid var(--color-gold)' }}>
                    {isEditingSect ? (
                      <div className="edit-mode-container">
                        <input
                          type="text"
                          value={editingSectName}
                          onChange={(e) => setEditingSectName(e.target.value)}
                          className="edit-name-input"
                          required
                        />
                        <div className="edit-actions" style={{ marginTop: '4px' }}>
                          <button onClick={handleSaveSectEdit} className="save-btn">保存</button>
                          <button onClick={() => setEditingSectIndex(null)} className="cancel-btn">取消</button>
                        </div>
                      </div>
                    ) : (
                      <div className="view-mode-container">
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <div className="cat-reorder-actions">
                            <button 
                              type="button"
                              onClick={() => handleMoveSect(index, 'up')} 
                              disabled={index === 0}
                              className="reorder-btn"
                              title="上へ"
                            >
                              ▲
                            </button>
                            <button 
                              type="button"
                              onClick={() => handleMoveSect(index, 'down')} 
                              disabled={index === sects.length - 1}
                              className="reorder-btn"
                              title="下へ"
                            >
                              ▼
                            </button>
                          </div>
                          <div className="cat-info">
                            <span style={{ fontSize: '13px', fontWeight: 'bold' }}>{sectName}</span>
                          </div>
                        </div>
                        <div className="cat-actions">
                          <button onClick={() => startEditSect(index, sectName)} className="action-icon-btn" title="編集">✏️</button>
                          <button onClick={() => handleDeleteSect(index)} className="action-icon-btn delete" title="削除">🗑️</button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* データ管理とバックアップカード */}
        <div className="settings-card" style={{ marginTop: '16px', border: '1px solid rgba(217, 119, 6, 0.25)', backgroundColor: 'rgba(217, 119, 6, 0.01)' }}>
          <h3 style={{ color: 'var(--color-gold)' }}>💾 データ管理とバックアップ</h3>
          <p className="card-desc">アプリ内のデータ（案件・タスク、カテゴリ、宗派、パスコード設定）をまとめてバックアップ、または復元します。</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '12px' }}>
            <div>
              <button 
                type="button" 
                onClick={handleExportData} 
                className="add-submit-btn" 
                style={{ background: 'linear-gradient(135deg, var(--color-gold), var(--color-gold-dark))' }}
              >
                📥 バックアップファイルの作成
              </button>
              <p className="card-desc" style={{ fontSize: '11px', marginTop: '4px' }}>※暗号化された安全なバックアップファイルをダウンロードします。LINEやファイル保存等に保管してください。</p>
            </div>

            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '12px', marginTop: '4px' }}>
              <label className="add-submit-btn" style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-primary)', border: '1px solid var(--border-color)', display: 'block', textAlign: 'center', cursor: 'pointer', margin: 0 }}>
                📤 バックアップからデータを復元
                <input 
                  type="file" 
                  accept=".ctb,.json" 
                  onChange={handleImportData} 
                  style={{ display: 'none' }}
                />
              </label>
              <p className="card-desc" style={{ fontSize: '11px', marginTop: '4px', color: 'var(--color-red)' }}>※注意: 復元を行うと、現在のアプリ内データは上書きされ消去されます。</p>
            </div>
          </div>
        </div>

        {/* システムアップデートカード */}
        <div className="settings-card" style={{ marginTop: '16px', border: '1px solid rgba(225, 29, 72, 0.25)', backgroundColor: 'rgba(225, 29, 72, 0.02)' }}>
          <h3 style={{ color: 'var(--color-red)' }}>🔄 システムアップデート</h3>
          <p className="card-desc">スマホアプリのプログラムキャッシュをクリアし、最新バージョンへ強制更新します。※登録済みのデータ（名簿やタスクなど）は消去されません。</p>
          <button 
            type="button" 
            onClick={handleForceUpdate} 
            className="add-submit-btn" 
            style={{ backgroundColor: 'var(--color-red)', marginTop: '8px' }}
          >
            キャッシュをクリアして強制更新
          </button>
        </div>
      </div>

      <style>{`
        .settings-section {
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          overflow-y: auto;
          flex: 1;
          padding-bottom: 80px;
        }

        .settings-header h2 {
          font-size: 18px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .settings-card {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .settings-card h3 {
          font-size: 15px;
          font-weight: 700;
          color: var(--color-gold-light);
        }

        .card-desc {
          font-size: 12px;
          color: var(--text-secondary);
          line-height: 1.4;
        }

        .add-cat-form {
          background-color: rgba(255,255,255,0.02);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          padding: 12px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .color-picker-row {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          padding: 4px 0;
        }

        .color-dot-btn {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          cursor: pointer;
          border: 2px solid transparent;
          transition: all 0.2s;
          box-shadow: inset 0 2px 4px rgba(0,0,0,0.3);
        }

        .color-dot-btn:active {
          transform: scale(0.9);
        }

        .color-dot-btn.selected {
          border-color: #fff;
          transform: scale(1.1);
          box-shadow: 0 0 6px var(--color-gold-light);
        }

        .color-dot-btn.blue { background-color: var(--color-blue); }
        .color-dot-btn.red { background-color: var(--color-red); }
        .color-dot-btn.orange { background-color: var(--color-orange); }
        .color-dot-btn.green { background-color: var(--color-green); }
        .color-dot-btn.purple { background-color: var(--color-purple); }
        .color-dot-btn.pink { background-color: var(--color-pink); }
        .color-dot-btn.gray { background-color: var(--color-gray); }
        .color-dot-btn.yellow { background-color: var(--color-yellow); }

        .color-dot-btn.mini {
          width: 18px;
          height: 18px;
        }

        .add-submit-btn {
          background-color: var(--color-gold);
          color: white;
          border: none;
          padding: 8px 12px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .add-submit-btn:hover {
          background-color: var(--color-gold-light);
        }

        .categories-list-container {
          display: flex;
          flex-direction: column;
          gap: 10px;
          border-top: 1px dashed var(--border-color);
          padding-top: 14px;
        }

        .categories-list-container h4 {
          font-size: 13px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .categories-grid {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .category-item-card {
          background-color: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: 6px;
          padding: 10px 12px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .view-mode-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .edit-mode-container {
          display: flex;
          flex-direction: column;
          gap: 8px;
          width: 100%;
        }

        .edit-name-input {
          width: 100%;
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          padding: 6px 10px;
          border-radius: 4px;
          font-size: 13px;
        }

        .edit-color-picker {
          display: flex;
          gap: 6px;
        }

        .edit-actions {
          display: flex;
          gap: 8px;
          justify-content: flex-end;
        }

        .save-btn {
          background-color: var(--color-blue);
          color: white;
          font-size: 11px;
          padding: 4px 10px;
          border-radius: 4px;
          font-weight: bold;
        }

        .cancel-btn {
          background-color: rgba(255,255,255,0.05);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          font-size: 11px;
          padding: 4px 10px;
          border-radius: 4px;
        }

        .cat-actions {
          display: flex;
          gap: 8px;
        }

        .action-icon-btn {
          background: transparent;
          border: none;
          cursor: pointer;
          font-size: 12px;
          padding: 4px;
          border-radius: 4px;
        }

        .action-icon-btn:hover {
          background-color: rgba(255,255,255,0.05);
        }

        .action-icon-btn.delete:hover {
          background-color: rgba(239,68,68,0.1);
        }

        /* 順序並べ替え用アクションCSS */
        .cat-reorder-actions {
          display: flex;
          flex-direction: column;
          gap: 2px;
          margin-right: 12px;
          align-items: center;
          justify-content: center;
        }

        .reorder-btn {
          font-size: 8px;
          color: var(--text-secondary);
          width: 18px;
          height: 18px;
          line-height: 16px;
          border: 1px solid var(--border-color);
          border-radius: 4px;
          background-color: var(--bg-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
        }

        .reorder-btn:disabled {
          opacity: 0.15;
          cursor: not-allowed;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
}
