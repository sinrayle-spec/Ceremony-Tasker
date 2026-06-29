import React, { useState, useEffect } from 'react';
import LockScreen from './components/LockScreen';
import Navigation from './components/Navigation';
import CalendarSection from './components/CalendarSection';
import TaskSection from './components/TaskSection';
import GallerySection from './components/GallerySection';
import CustomerDirectory from './components/CustomerDirectory';
import SettingsSection from './components/SettingsSection';
import { useEncryptedStorage } from './hooks/useLocalStorage';

export default function App() {
  const [passcode, setPasscode] = useState(null); // PIN入力されると解除
  const [activeTab, setActiveTab] = useState('tasks'); // 'tasks', 'calendar', 'gallery', 'customers', 'settings'
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [targetEditTaskId, setTargetEditTaskId] = useState(null);

  // 暗号化対応のカスタムストレージでタスク一覧を管理
  const [tasks, setTasks] = useEncryptedStorage('ct_tasks', [], passcode);

  // カスタムカテゴリー設定の管理
  const [categories, setCategories] = useEncryptedStorage('ct_categories', [
    { id: 'cat_1', name: '施行', color: 'red' },
    { id: 'cat_2', name: '搬送', color: 'orange' },
    { id: 'cat_3', name: '打合せ', color: 'blue' },
    { id: 'cat_4', name: '事前相談', color: 'green' },
    { id: 'cat_5', name: '法要', color: 'purple' },
    { id: 'cat_6', name: 'アフター', color: 'pink' },
    { id: 'cat_7', name: '社内業務', color: 'gray' },
    { id: 'cat_8', name: '見積', color: 'yellow' }
  ], passcode);

  // カスタム宗派設定の管理
  const [sects, setSects] = useEncryptedStorage('ct_sects', [
    '浄土真宗', '真言宗', '曹洞宗', '臨済宗', '日蓮宗', '天台宗', '浄土宗', '神道', 'キリスト教'
  ], passcode);

  // 開発中のサービスワーカー強制解除（キャッシュバグを自動クリアするため）
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        for (let registration of registrations) {
          registration.unregister().then(() => {
            console.log('Service Worker unregistered successfully');
          });
        }
      });
    }
  }, []);

  // 旧データ形式から新データ形式(複数予定/イベント対応)へのマイグレーション
  useEffect(() => {
    if (tasks && tasks.length > 0) {
      let needsMigration = false;
      const migrated = tasks.map(task => {
        if (!task.events) {
          needsMigration = true;
          return {
            ...task,
            events: [
              {
                id: `evt_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
                category: task.category || '打合せ',
                date: task.date || new Date().toISOString().split('T')[0],
                time: task.time || '',
                alarmEnabled: true,
                status: task.status === 'completed' ? 'completed' : 'active',
                notes: ''
              }
            ]
          };
        }
        return task;
      });

      if (needsMigration) {
        setTasks(migrated);
      }
    }
  }, [tasks, setTasks]);

  // 通知許可のリクエスト
  useEffect(() => {
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission();
    }
  }, []);

  // アプリがバックグラウンドに隠れてから一定時間（例：3分）経過した、
  // または非表示になったらセキュリティ上再ロックする処理
  useEffect(() => {
    let backgroundTime = 0;
    
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        backgroundTime = Date.now();
      } else {
        // バックグラウンドにいた時間が 60秒 を超えていたら自動ロック
        if (backgroundTime && Date.now() - backgroundTime > 60000) {
          handleLock();
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const handleUnlock = (key) => {
    setPasscode(key);
  };

  const handleLock = () => {
    setPasscode(null);
    setActiveTab('tasks'); // リセット
  };

  // タスク操作関数
  const handleAddTask = (newTask) => {
    const taskWithId = {
      ...newTask,
      id: `task_${Date.now()}`
    };
    setTasks(prevTasks => [...prevTasks, taskWithId]);
  };

  const handleUpdateTask = (id, updatedFields) => {
    setTasks(prevTasks => 
      prevTasks.map(t => t.id === id ? { ...t, ...updatedFields } : t)
    );
  };

  const handleDeleteTask = (id) => {
    if (window.confirm('この案件を完全に削除してもよろしいですか？')) {
      setTasks(prevTasks => prevTasks.filter(t => t.id !== id));
    }
  };

  // カレンダーからタスクをタップして詳細確認へ遷移
  const handleSelectTaskFromCalendar = (task) => {
    setActiveTab('tasks'); // 案件タブへ移動
  };

  // ロック解除されていない場合はロック画面を表示
  if (!passcode) {
    return <LockScreen onUnlock={handleUnlock} />;
  }

  return (
    <div className="app-container fade-in">
      {/* アプリヘッダー */}
      <header className="app-header">
        <div className="header-logo-section">
          <svg className="header-logo" viewBox="0 0 512 512">
            <path d="M256,120 C220,190 225,300 256,360 C287,300 292,190 256,120 Z" fill="#fbbf24" />
          </svg>
          <span className="app-title-text">Ceremony Tasker <small style={{ fontSize: '10px', opacity: 0.5 }}>v14</small></span>
        </div>
        
        {/* 手動ロックボタン (南京錠マーク) */}
        <button onClick={handleLock} className="lock-btn" title="アプリをロックする">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="lock-icon-svg">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
          ロック
        </button>
      </header>

      {/* メインコンテンツエリア */}
      <main className="app-content">
        {activeTab === 'tasks' && (
           <TaskSection 
             tasks={tasks} 
             passcode={passcode}
             categories={categories}
             onAddTask={handleAddTask}
             onUpdateTask={handleUpdateTask}
             onDeleteTask={handleDeleteTask}
             targetEditTaskId={targetEditTaskId}
             clearTargetEditTaskId={() => setTargetEditTaskId(null)}
           />
         )}
         {activeTab === 'calendar' && (
           <CalendarSection 
             tasks={tasks} 
             selectedDate={selectedDate}
             onSelectDate={setSelectedDate}
             onSelectTask={handleSelectTaskFromCalendar}
           />
         )}
         {activeTab === 'gallery' && (
           <GallerySection tasks={tasks} />
         )}
          {activeTab === 'customers' && (
            <CustomerDirectory 
              tasks={tasks}
              passcode={passcode}
              sects={sects}
              onUpdateCustomer={handleUpdateTask}
              onDeleteCustomer={handleDeleteTask}
              onAddCustomer={handleAddTask}
              onEditCustomer={(id) => {
                setTargetEditTaskId(id);
                setActiveTab('tasks');
              }}
            />
          )}
          {activeTab === 'settings' && (
            <SettingsSection 
              categories={categories}
              onUpdateCategories={setCategories}
              sects={sects}
              onUpdateSects={setSects}
            />
          )}
       </main>

      {/* 下部ナビゲーション */}
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />

      <style>{`
        .app-container {
          display: flex;
          flex-direction: column;
          height: 100vh;
          height: 100dvh;
          width: 100%;
          overflow: hidden;
        }

        .app-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px 16px;
          background-color: var(--bg-secondary);
          border-bottom: 1px solid var(--border-color);
          position: sticky;
          top: 0;
          z-index: 800;
        }

        .header-logo-section {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .header-logo {
          width: 20px;
          height: 20px;
        }

        .app-title-text {
          font-size: 16px;
          font-weight: 700;
          letter-spacing: 0.5px;
          background: linear-gradient(to right, var(--color-gold-light), #fff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .lock-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          background-color: rgba(239, 68, 68, 0.1);
          color: var(--color-red);
          border: 1px solid rgba(239, 68, 68, 0.2);
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 700;
        }

        .lock-btn:active {
          background-color: rgba(239, 68, 68, 0.2);
        }

        .lock-icon-svg {
          width: 12px;
          height: 12px;
        }

        .app-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          width: 100%;
          min-height: 0;
          overflow-y: auto;
        }
      `}</style>
    </div>
  );
}
