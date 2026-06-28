import React, { useState } from 'react';
import { getRokuyo } from '../utils/rokuyo';

export default function CalendarSection({ tasks, onSelectDate, selectedDate, onSelectTask }) {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // 月の最初の日と最後の日
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);

  // 月の最初の日が何曜日か（0:日, 1:月, ...）
  const startDayOfWeek = firstDayOfMonth.getDay();
  // 月の日数
  const totalDays = lastDayOfMonth.getDate();

  // 前月の最後の日
  const prevMonthLastDay = new Date(year, month, 0).getDate();

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const handleDateClick = (day) => {
    const newSelected = new Date(year, month, day);
    onSelectDate(newSelected);
  };

  // カレンダーの日付セルを構築するデータ
  const cells = [];

  // 前月の日付で埋める
  for (let i = startDayOfWeek - 1; i >= 0; i--) {
    cells.push({
      day: prevMonthLastDay - i,
      isCurrentMonth: false,
      dateObj: new Date(year, month - 1, prevMonthLastDay - i)
    });
  }

  // 今月の日付
  for (let i = 1; i <= totalDays; i++) {
    cells.push({
      day: i,
      isCurrentMonth: true,
      dateObj: new Date(year, month, i)
    });
  }

  // 翌月の日付で埋める（グリッドが6行分＝42セルになるように）
  const remainingCells = 42 - cells.length;
  for (let i = 1; i <= remainingCells; i++) {
    cells.push({
      day: i,
      isCurrentMonth: false,
      dateObj: new Date(year, month + 1, i)
    });
  }

  // 指定した日付に登録されているタスクを取得
  const getTasksForDate = (dateObj) => {
    const dateStr = dateObj.toISOString().split('T')[0];
    return tasks.filter(t => t.date === dateStr);
  };

  const isSameDay = (d1, d2) => {
    if (!d1 || !d2) return false;
    return d1.getFullYear() === d2.getFullYear() &&
           d1.getMonth() === d2.getMonth() &&
           d1.getDate() === d2.getDate();
  };

  const formattedSelectedDate = selectedDate 
    ? `${selectedDate.getFullYear()}年${selectedDate.getMonth() + 1}月${selectedDate.getDate()}日`
    : '';

  const selectedDateTasks = selectedDate ? getTasksForDate(selectedDate) : [];

  return (
    <div className="calendar-section fade-in">
      {/* ヘッダー操作部分 */}
      <div className="calendar-header">
        <button onClick={handlePrevMonth} className="month-nav-btn">
          &lt;
        </button>
        <h2 className="current-month-label">{year}年 {month + 1}月</h2>
        <button onClick={handleNextMonth} className="month-nav-btn">
          &gt;
        </button>
      </div>

      {/* 曜日ヘッダー */}
      <div className="weekdays-grid">
        {['日', '月', '火', '水', '木', '金', '土'].map((w, idx) => (
          <div key={idx} className={`weekday-cell ${idx === 0 ? 'sun' : idx === 6 ? 'sat' : ''}`}>
            {w}
          </div>
        ))}
      </div>

      {/* カレンダー本体 */}
      <div className="days-grid">
        {cells.map((cell, idx) => {
          const dateTasks = getTasksForDate(cell.dateObj);
          const isSelected = isSameDay(cell.dateObj, selectedDate);
          const isToday = isSameDay(cell.dateObj, new Date());
          
          // 六曜算出
          const rokuyo = getRokuyo(cell.dateObj);
          const isTomobiki = rokuyo.name === '友引';
          
          return (
            <div
              key={idx}
              className={`day-cell 
                ${cell.isCurrentMonth ? 'current-month' : 'other-month'} 
                ${isSelected ? 'selected' : ''} 
                ${isToday ? 'today' : ''}
                ${isTomobiki && cell.isCurrentMonth ? 'tomobiki-highlight' : ''}
              `}
              onClick={() => cell.isCurrentMonth && handleDateClick(cell.day)}
            >
              <div className="day-number">{cell.day}</div>
              
              {/* 六曜ラベル (今月の日のみ表示) */}
              {cell.isCurrentMonth && (
                <div className={`rokuyo-label ${isTomobiki ? 'tomobiki-text' : ''}`}>
                  {rokuyo.name}
                </div>
              )}

              {/* タスク色分けドット */}
              <div className="task-dots">
                {dateTasks.slice(0, 3).map((task) => (
                  <span
                    key={task.id}
                    className="task-dot"
                    style={{ backgroundColor: `var(--color-${task.color || 'blue'})` }}
                  />
                ))}
                {dateTasks.length > 3 && <span className="task-dot-more">+</span>}
              </div>
            </div>
          );
        })}
      </div>

      {/* 選択した日のタスクリスト */}
      {selectedDate && (
        <div className="selected-day-panel">
          <div className="panel-header">
            <h3>{formattedSelectedDate} の案件</h3>
            <span className="selected-rokuyo-badge">
              六曜: {getRokuyo(selectedDate).name}
            </span>
          </div>

          {selectedDateTasks.length === 0 ? (
            <p className="no-tasks-text">この日の予定はありません。</p>
          ) : (
            <div className="selected-tasks-list">
              {selectedDateTasks.map((task) => (
                <div 
                  key={task.id} 
                  className="selected-task-card"
                  style={{ borderLeftColor: `var(--color-${task.color || 'blue'})` }}
                  onClick={() => onSelectTask(task)}
                >
                  <div className="selected-task-card-header">
                    <span className="selected-task-title">{task.title}</span>
                    <span className={`badge badge-${task.color || 'blue'}`}>
                      {task.category || 'その他'}
                    </span>
                  </div>
                  {task.notes && <p className="selected-task-notes">{task.notes}</p>}
                  <div className="selected-task-footer">
                    {task.time && <span className="selected-task-time">🕒 {task.time}</span>}
                    {task.hasImage && <span className="image-attached-indicator">📎 書面あり</span>}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <style>{`
        .calendar-section {
          padding: 16px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .calendar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .month-nav-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: var(--bg-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 18px;
        }

        .current-month-label {
          font-size: 18px;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        .weekdays-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          text-align: center;
          margin-bottom: 8px;
          font-size: 12px;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .weekday-cell.sun { color: var(--color-red); }
        .weekday-cell.sat { color: var(--color-blue); }

        .days-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          grid-auto-rows: 64px;
          gap: 4px;
          margin-bottom: 20px;
        }

        .day-cell {
          background-color: var(--bg-secondary);
          border-radius: 8px;
          padding: 4px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border: 1px solid transparent;
          transition: all 0.15s ease;
          position: relative;
        }

        .day-cell.other-month {
          opacity: 0.25;
          pointer-events: none;
        }

        .day-cell.today {
          border-color: rgba(255, 255, 255, 0.4);
        }

        .day-cell.selected {
          background-color: var(--bg-tertiary);
          border-color: var(--color-gold);
          box-shadow: 0 0 8px var(--border-glow);
        }

        /* 友引ハイライト: 薄い金色のグラデーション枠と背景 */
        .day-cell.tomobiki-highlight {
          background-color: rgba(217, 119, 6, 0.04);
          border: 1px solid rgba(217, 119, 6, 0.25);
        }

        .day-number {
          font-size: 12px;
          font-weight: 600;
        }

        .rokuyo-label {
          font-size: 9px;
          color: var(--text-muted);
          text-align: center;
          margin-top: 1px;
        }

        .tomobiki-text {
          color: var(--color-amber);
          font-weight: 700;
        }

        .task-dots {
          display: flex;
          justify-content: center;
          gap: 2px;
          height: 6px;
          margin-bottom: 2px;
          overflow: hidden;
        }

        .task-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
        }

        .task-dot-more {
          font-size: 8px;
          color: var(--text-secondary);
          line-height: 5px;
        }

        /* 日付詳細パネル */
        .selected-day-panel {
          background-color: var(--bg-secondary);
          border-radius: 16px;
          padding: 16px;
          border: 1px solid var(--border-color);
          animation: fadeIn 0.25s ease;
          margin-top: auto;
        }

        .panel-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 8px;
        }

        .panel-header h3 {
          font-size: 15px;
          font-weight: 700;
        }

        .selected-rokuyo-badge {
          font-size: 11px;
          color: var(--color-gold-light);
          background-color: rgba(217, 119, 6, 0.1);
          padding: 2px 8px;
          border-radius: 4px;
          font-weight: 500;
        }

        .no-tasks-text {
          font-size: 13px;
          color: var(--text-secondary);
          text-align: center;
          padding: 16px 0;
        }

        .selected-tasks-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
          max-height: 200px;
          overflow-y: auto;
        }

        .selected-task-card {
          background-color: rgba(255,255,255,0.02);
          border: 1px solid var(--border-color);
          border-left: 4px solid var(--color-blue);
          border-radius: 8px;
          padding: 12px;
          cursor: pointer;
        }

        .selected-task-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 4px;
        }

        .selected-task-title {
          font-size: 14px;
          font-weight: 600;
        }

        .selected-task-notes {
          font-size: 12px;
          color: var(--text-secondary);
          margin-bottom: 6px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .selected-task-footer {
          display: flex;
          justify-content: space-between;
          font-size: 11px;
          color: var(--text-muted);
        }

        .image-attached-indicator {
          color: var(--color-gold);
          font-weight: 500;
        }
      `}</style>
    </div>
  );
}
