import React, { useState } from 'react';
import ImageEditorModal from './ImageEditorModal';

// 元号と西暦の変換・パース用ヘルパー関数群
const getJapaneseEraFromWestern = (year, month, day) => {
  const date = new Date(year, month - 1, day);
  const time = date.getTime();

  // 元号の境界日 (タイムスタンプ)
  const borderReiwa = new Date(2019, 5 - 1, 1).getTime(); // 2019-05-01 (4/30までは平成)
  const borderHeisei = new Date(1989, 1 - 1, 8).getTime(); // 1989-01-08 (1/7までは昭和)
  const borderShowa = new Date(1926, 12 - 1, 25).getTime(); // 1926-12-25 (12/24までは大正)
  const borderTaisho = new Date(1912, 7 - 1, 30).getTime(); // 1912-07-30 (7/29までは明治)
  const borderMeiji = new Date(1868, 1 - 1, 25).getTime(); // 明治元年

  if (time >= borderReiwa) {
    const eraYear = year - 2019 + 1;
    return `令和${eraYear === 1 ? '元' : eraYear}年${month}月${day}日`;
  } else if (time >= borderHeisei) {
    const eraYear = year - 1989 + 1;
    return `平成${eraYear === 1 ? '元' : eraYear}年${month}月${day}日`;
  } else if (time >= borderShowa) {
    const eraYear = year - 1926 + 1;
    return `昭和${eraYear === 1 ? '元' : eraYear}年${month}月${day}日`;
  } else if (time >= borderTaisho) {
    const eraYear = year - 1912 + 1;
    return `大正${eraYear === 1 ? '元' : eraYear}年${month}月${day}日`;
  } else {
    const eraYear = year - 1868 + 1;
    return `明治${eraYear === 1 ? '元' : eraYear}年${month}月${day}日`;
  }
};

const convertToJapaneseEraOrNormalize = (val) => {
  if (!val) return '';
  let s = val.trim();
  if (!s) return '';

  // 全角英字と記号の半角化、全角数字の半角化
  s = s.replace(/[Ａ-Ｚａ-ｚ０-９／．－]/g, (m) => {
    return String.fromCharCode(m.charCodeAt(0) - 0xFEE0);
  });

  // 1. 和暦ショートカット (s52/6/10, h12.3.4, r1-5-10, s520610 などの区切りなしもカバー)
  const eraRegex = /^([shrtm])(\d+|元)[./-]?([01]?\d)[./-]?([0-3]?\d)$/i;
  const match = s.match(eraRegex);
  if (match) {
    const eraChar = match[1].toLowerCase();
    let eraName = '';
    if (eraChar === 's') eraName = '昭和';
    else if (eraChar === 'h') eraName = '平成';
    else if (eraChar === 'r') eraName = '令和';
    else if (eraChar === 't') eraName = '大正';
    else if (eraChar === 'm') eraName = '明治';

    const eraYearStr = match[2];
    const eraYear = eraYearStr === '元' ? 1 : parseInt(eraYearStr, 10);
    const month = parseInt(match[3], 10);
    const day = parseInt(match[4], 10);

    if (eraName && !isNaN(eraYear) && !isNaN(month) && !isNaN(day)) {
      return `${eraName}${eraYear === 1 ? '元' : eraYear}年${month}月${day}日`;
    }
  }

  // 区切りなしショートカット（例: s520610, s52610）
  const eraNoDividerRegex = /^([shrtm])(\d{1,2})(\d{2})(\d{2})$/i;
  const matchNoDiv = s.match(eraNoDividerRegex);
  if (matchNoDiv) {
    const eraChar = matchNoDiv[1].toLowerCase();
    let eraName = '';
    if (eraChar === 's') eraName = '昭和';
    else if (eraChar === 'h') eraName = '平成';
    else if (eraChar === 'r') eraName = '令和';
    else if (eraChar === 't') eraName = '大正';
    else if (eraChar === 'm') eraName = '明治';

    const eraYear = parseInt(matchNoDiv[2], 10);
    const month = parseInt(matchNoDiv[3], 10);
    const day = parseInt(matchNoDiv[4], 10);

    if (eraName && !isNaN(eraYear) && !isNaN(month) && !isNaN(day)) {
      return `${eraName}${eraYear === 1 ? '元' : eraYear}年${month}月${day}日`;
    }
  }

  // 2. 西暦直接入力 (1977/6/10, 1977-06-10, 1977.6.10, 19770610) の自動和暦変換
  const westernRegex = /^(\d{4})[./-]?([01]?\d)[./-]?([0-3]?\d)$/;
  const wMatch = s.match(westernRegex);
  if (wMatch) {
    const year = parseInt(wMatch[1], 10);
    const month = parseInt(wMatch[2], 10);
    const day = parseInt(wMatch[3], 10);
    if (!isNaN(year) && !isNaN(month) && !isNaN(day) && month >= 1 && month <= 12 && day >= 1 && day <= 31) {
      return getJapaneseEraFromWestern(year, month, day);
    }
  }

  // 8桁数値直接（例: 19770610）
  const westernNoDivRegex = /^(\d{4})(\d{2})(\d{2})$/;
  const wMatchNoDiv = s.match(westernNoDivRegex);
  if (wMatchNoDiv) {
    const year = parseInt(wMatchNoDiv[1], 10);
    const month = parseInt(wMatchNoDiv[2], 10);
    const day = parseInt(wMatchNoDiv[3], 10);
    if (!isNaN(year) && !isNaN(month) && !isNaN(day) && month >= 1 && month <= 12 && day >= 1 && day <= 31) {
      return getJapaneseEraFromWestern(year, month, day);
    }
  }

  return s;
};

const parseToDate = (dateStr) => {
  if (!dateStr) return null;
  const s = dateStr.trim();

  // 1. 和暦表記 (昭和52年6月10日) から解析
  const eraRegex = /^(明治|大正|昭和|平成|令和)(元|\d+)年(\d+)月(\d+)日$/;
  const eraMatch = s.match(eraRegex);
  if (eraMatch) {
    const eraName = eraMatch[1];
    const eraYear = eraMatch[2] === '元' ? 1 : parseInt(eraMatch[2], 10);
    const month = parseInt(eraMatch[3], 10);
    const day = parseInt(eraMatch[4], 10);

    let startYear = 0;
    if (eraName === '令和') startYear = 2019;
    else if (eraName === '平成') startYear = 1989;
    else if (eraName === '昭和') startYear = 1926;
    else if (eraName === '大正') startYear = 1912;
    else if (eraName === '明治') startYear = 1868;

    const westernYear = startYear + eraYear - 1;
    return new Date(westernYear, month - 1, day);
  }

  // 2. 西暦表記 (1977-06-10 や 1977/6/10) から解析
  const westernMatch = s.match(/^(\d{4})[./-]?([01]?\d)[./-]?([0-3]?\d)$/);
  if (westernMatch) {
    const year = parseInt(westernMatch[1], 10);
    const month = parseInt(westernMatch[2], 10);
    const day = parseInt(westernMatch[3], 10);
    return new Date(year, month - 1, day);
  }

  const parsed = Date.parse(s);
  if (!isNaN(parsed)) {
    return new Date(parsed);
  }

  return null;
};

const calculateAge = (birthStr, deathStr) => {
  const birthDateObj = parseToDate(birthStr);
  const deathDateObj = parseToDate(deathStr);

  if (!birthDateObj) return null;

  const compareDate = deathDateObj || new Date();

  // 満年齢 (行年)
  let age = compareDate.getFullYear() - birthDateObj.getFullYear();
  const m = compareDate.getMonth() - birthDateObj.getMonth();
  if (m < 0 || (m === 0 && compareDate.getDate() < birthDateObj.getDate())) {
    age--;
  }

  // 数え年 (享年)
  const countYear = compareDate.getFullYear() - birthDateObj.getFullYear() + 1;

  return {
    fullAge: age >= 0 ? age : 0,
    countAge: countYear >= 1 ? countYear : 1
  };
};

export default function CustomerDirectory({ 
  tasks, 
  passcode,
  sects = [],
  onUpdateCustomer, 
  onDeleteCustomer, 
  onAddCustomer,
  onEditCustomer 
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest'); // 'newest', 'oldest', 'name', 'funeral', 'death'
  const [selectedCustomerId, setSelectedCustomerId] = useState(null); // 詳細表示用の一客ID

  const [isAddingCustomer, setIsAddingCustomer] = useState(false);

  // Inline Profile Edit States
  const [editingCustomerId, setEditingCustomerId] = useState(null);
  const [deceasedLastName, setDeceasedLastName] = useState('');
  const [deceasedFirstName, setDeceasedFirstName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [deathDate, setDeathDate] = useState('');
  const [address, setAddress] = useState('');
  const [mournerLastName, setMournerLastName] = useState('');
  const [mournerFirstName, setMournerFirstName] = useState('');
  const [contact, setContact] = useState('');
  const [templeName, setTempleName] = useState('');
  const [sect, setSect] = useState('');
  const [wakeDate, setWakeDate] = useState('');
  const [funeralDate, setFuneralDate] = useState('');
  const [customerNotes, setCustomerNotes] = useState('');

  // Inline Add New Event States
  const [newEventCategory, setNewEventCategory] = useState('打合せ');
  const [customEventCategory, setCustomEventCategory] = useState('');
  const [newEventDate, setNewEventDate] = useState(new Date().toISOString().split('T')[0]);
  const [newEventTime, setNewEventTime] = useState('');
  const [newEventNotes, setNewEventNotes] = useState('');

  // Inline Event Editing States
  const [editingEventId, setEditingEventId] = useState(null);
  const [editEventCategory, setEditEventCategory] = useState('打合せ');
  const [customEditEventCategory, setCustomEditEventCategory] = useState('');
  const [editEventDate, setEditEventDate] = useState('');
  const [editEventTime, setEditEventTime] = useState('');
  const [editEventNotes, setEditEventNotes] = useState('');
  const [eventPreviewImage, setEventPreviewImage] = useState(null);

  // Check if a customer task is active
  const isCustomerActive = (customer) => {
    if (customer.status === 'completed') return false;
    const hasActiveEvents = (customer.events || []).some(e => e.status !== 'completed');
    return (customer.events || []).length === 0 || hasActiveEvents;
  };

  const getCategoryColor = (cat) => {
    switch(cat) {
      case '施行': return 'red';
      case '搬送': return 'orange';
      case '打合せ': return 'blue';
      case '事前相談': return 'green';
      case '法要': return 'purple';
      case 'アフター': return 'pink';
      case '社内業務': return 'gray';
      case '見積': return 'yellow';
      default: return 'blue';
    }
  };

  const getFilteredCustomers = () => {
    let list = [...tasks];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(t => {
        const deceasedFullName = `${t.deceasedLastName || ''}${t.deceasedFirstName || ''}`.toLowerCase();
        const mournerFullName = `${t.mournerLastName || ''}${t.mournerFirstName || ''}`.toLowerCase();
        return (
          t.title.toLowerCase().includes(q) ||
          deceasedFullName.includes(q) ||
          (t.deceasedLastName || '').toLowerCase().includes(q) ||
          (t.deceasedFirstName || '').toLowerCase().includes(q) ||
          (t.deceasedName || '').toLowerCase().includes(q) ||
          mournerFullName.includes(q) ||
          (t.mournerLastName || '').toLowerCase().includes(q) ||
          (t.mournerFirstName || '').toLowerCase().includes(q) ||
          (t.mournerName || '').toLowerCase().includes(q) ||
          (t.address || '').toLowerCase().includes(q) ||
          (t.contact || '').toLowerCase().includes(q) ||
          (t.templeName || '').toLowerCase().includes(q) ||
          (t.sect || '').toLowerCase().includes(q) ||
          (t.wakeDate || '').toLowerCase().includes(q) ||
          (t.funeralDate || '').toLowerCase().includes(q) ||
          (t.notes || '').toLowerCase().includes(q)
        );
      });
    }

    return list.sort((a, b) => {
      if (sortBy === 'newest') {
        const timeA = parseInt(a.id.replace('task_', ''), 10) || 0;
        const timeB = parseInt(b.id.replace('task_', ''), 10) || 0;
        return timeB - timeA;
      }
      if (sortBy === 'oldest') {
        const timeA = parseInt(a.id.replace('task_', ''), 10) || 0;
        const timeB = parseInt(b.id.replace('task_', ''), 10) || 0;
        return timeA - timeB;
      }
      if (sortBy === 'name') {
        return a.title.localeCompare(b.title, 'ja');
      }
      if (sortBy === 'funeral') {
        const dateA = a.funeralDate ? new Date(a.funeralDate).getTime() : Infinity;
        const dateB = b.funeralDate ? new Date(b.funeralDate).getTime() : Infinity;
        return dateA - dateB;
      }
      if (sortBy === 'death') {
        const dateA = a.deathDate ? new Date(a.deathDate).getTime() : 0;
        const dateB = b.deathDate ? new Date(b.deathDate).getTime() : 0;
        return dateB - dateA;
      }
      return 0;
    });
  };

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

  const handleEventImageCapture = async (customer, eventId, file) => {
    if (!file) return;
    try {
      const base64 = await compressImage(file);
      const newImg = {
        id: `evt_img_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`,
        data: base64
      };
      const updatedEvents = (customer.events || []).map(evt => {
        if (evt.id === eventId) {
          return {
            ...evt,
            images: [...(evt.images || []), newImg]
          };
        }
        return evt;
      });
      onUpdateCustomer(customer.id, { events: updatedEvents });
    } catch (err) {
      console.error(err);
      alert('写真の追加に失敗しました。');
    }
  };

  const handleDeleteEventImage = (customer, eventId, imageId) => {
    if (!window.confirm('この写真を削除してもよろしいですか？')) return;
    const updatedEvents = (customer.events || []).map(evt => {
      if (evt.id === eventId) {
        return {
          ...evt,
          images: (evt.images || []).filter(img => img.id !== imageId)
        };
      }
      return evt;
    });
    onUpdateCustomer(customer.id, { events: updatedEvents });
  };

  // Start Inline Editing of Customer Profile
  const startInlineEdit = (customer) => {
    setEditingCustomerId(customer.id);
    setDeceasedLastName(customer.deceasedLastName || customer.deceasedName || '');
    setDeceasedFirstName(customer.deceasedFirstName || '');
    setBirthDate(customer.birthDate || '');
    setDeathDate(customer.deathDate || '');
    setAddress(customer.address || '');
    setMournerLastName(customer.mournerLastName || customer.mournerName || '');
    setMournerFirstName(customer.mournerFirstName || '');
    setContact(customer.contact || '');
    setTempleName(customer.templeName || '');
    setSect(customer.sect || '');
    setWakeDate(customer.wakeDate || '');
    setFuneralDate(customer.funeralDate || '');
    setCustomerNotes(customer.notes || '');
  };

  const startAddCustomer = () => {
    setIsAddingCustomer(true);
    setEditingCustomerId(null);
    setDeceasedLastName('');
    setDeceasedFirstName('');
    setBirthDate('');
    setDeathDate('');
    setAddress('');
    setMournerLastName('');
    setMournerFirstName('');
    setContact('');
    setTempleName('');
    setSect('');
    setWakeDate('');
    setFuneralDate('');
    setCustomerNotes('');
  };

  const cancelInlineEdit = () => {
    setEditingCustomerId(null);
  };

  const saveInlineEdit = (customerId) => {
    const generatedTitle = deceasedLastName ? `${deceasedLastName}家` : (mournerLastName ? `${mournerLastName}家` : '新規お客様');
    const updatedData = {
      title: generatedTitle,
      deceasedLastName,
      deceasedFirstName,
      birthDate,
      deathDate,
      address,
      mournerLastName,
      mournerFirstName,
      contact,
      templeName,
      sect,
      wakeDate,
      funeralDate,
      notes: customerNotes
    };
    onUpdateCustomer(customerId, updatedData);
    setEditingCustomerId(null);
  };

  const handleAddNewCustomerSubmit = (e) => {
    e.preventDefault();
    const generatedTitle = deceasedLastName ? `${deceasedLastName}家` : (mournerLastName ? `${mournerLastName}家` : '新規お客様');
    const newCustomer = {
      title: generatedTitle,
      deceasedLastName,
      deceasedFirstName,
      birthDate,
      deathDate,
      address,
      mournerLastName,
      mournerFirstName,
      contact,
      templeName,
      sect,
      wakeDate,
      funeralDate,
      notes: customerNotes,
      status: 'active',
      events: []
    };
    onAddCustomer(newCustomer);
    setIsAddingCustomer(false);
  };

  // Inline event toggle status sync
  const toggleEventCompleteInline = (customer, eventId) => {
    const updatedEvents = (customer.events || []).map(e => {
      if (e.id === eventId) {
        return { ...e, status: e.status === 'completed' ? 'active' : 'completed' };
      }
      return e;
    });
    const allCompleted = updatedEvents.every(e => e.status === 'completed');
    onUpdateCustomer(customer.id, {
      events: updatedEvents,
      status: allCompleted ? 'completed' : 'active'
    });
  };

  // Inline add event to customer card
  const handleAddEventInline = (customer) => {
    if (!newEventDate) {
      alert('日付を入力してください。');
      return;
    }
    const finalCategory = newEventCategory === 'CUSTOM' ? customEventCategory.trim() : newEventCategory;
    if (!finalCategory) {
      alert('カテゴリーを入力または選択してください。');
      return;
    }
    const newEvent = {
      id: `evt_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      category: finalCategory,
      date: newEventDate,
      time: newEventTime,
      alarmEnabled: true,
      status: 'active',
      notes: newEventNotes
    };
    const updatedEvents = [...(customer.events || []), newEvent];
    onUpdateCustomer(customer.id, {
      events: updatedEvents,
      status: 'active'
    });
    // Reset inputs
    setNewEventNotes('');
    setNewEventTime('');
    setCustomEventCategory('');
  };

  const deleteEventInline = (customer, eventId) => {
    if (!window.confirm('この予定を削除してもよろしいですか？')) return;
    const entered = window.prompt("安全のため、ログイン用のパスコードを入力してください：");
    if (entered === null) return;
    if (entered !== String(passcode)) {
      alert("パスコードが一致しないため、削除を中止しました。");
      return;
    }
    const updatedEvents = (customer.events || []).filter(e => e.id !== eventId);
    const allCompleted = updatedEvents.length > 0 && updatedEvents.every(e => e.status === 'completed');
    onUpdateCustomer(customer.id, {
      events: updatedEvents,
      status: allCompleted ? 'completed' : 'active'
    });
  };

  const startEventEdit = (evt) => {
    setEditingEventId(evt.id);
    const standards = ['打合せ', '施行', '搬送', '事前相談', '法要 (四十九日/納骨等)', '一周忌法要', '三回忌法要', '見積'];
    const isStandard = standards.includes(evt.category);
    if (isStandard) {
      setEditEventCategory(evt.category);
      setCustomEditEventCategory('');
    } else {
      setEditEventCategory('CUSTOM');
      setCustomEditEventCategory(evt.category);
    }
    setEditEventDate(evt.date || '');
    setEditEventTime(evt.time || '');
    setEditEventNotes(evt.notes || '');
  };

  const cancelEventEdit = () => {
    setEditingEventId(null);
  };

  const saveEventEdit = (customer, eventId) => {
    const finalCategory = editEventCategory === 'CUSTOM' ? customEditEventCategory.trim() : editEventCategory;
    if (!finalCategory) {
      alert('カテゴリー名を入力または選択してください。');
      return;
    }
    const updatedEvents = (customer.events || []).map(e => {
      if (e.id === eventId) {
        return {
          ...e,
          category: finalCategory,
          date: editEventDate,
          time: editEventTime,
          notes: editEventNotes
        };
      }
      return e;
    });
    const allCompleted = updatedEvents.every(e => e.status === 'completed');
    onUpdateCustomer(customer.id, {
      events: updatedEvents,
      status: allCompleted ? 'completed' : 'active'
    });
    setEditingEventId(null);
  };

  const displayCustomers = getFilteredCustomers();

  // --- 詳細ビューのレンダリング (選択された顧客のみ) ---
  if (selectedCustomerId) {
    const customer = tasks.find(t => t.id === selectedCustomerId);
    if (!customer) {
      setSelectedCustomerId(null);
      return null;
    }

    const active = isCustomerActive(customer);
    const isEditing = editingCustomerId === customer.id;

    return (
      <div className="customer-directory fade-in">
        {/* 詳細ヘッダー */}
        <div className="directory-detail-header">
          <button 
            type="button"
            onClick={() => {
              setSelectedCustomerId(null);
              setEditingCustomerId(null);
            }} 
            className="back-list-btn"
          >
            ← 顧客一覧に戻る
          </button>

          <button
            type="button"
            onClick={() => {
              const entered = window.prompt("【警告】この顧客のすべての記録と写真を完全に削除します。よろしければログイン用のパスコードを入力してください：");
              if (entered === null) return;
              if (entered !== String(passcode)) {
                alert("パスコードが一致しないため、削除を中止しました。");
                return;
              }
              onDeleteCustomer(customer.id);
              setSelectedCustomerId(null);
            }}
            className="detail-delete-btn"
          >
            🗑️ 顧客データを削除
          </button>
        </div>

        {/* 顧客詳細カード */}
        <div className={`directory-customer-card detail-mode ${active ? 'active-status' : 'completed-status'}`}>
          <div className="customer-card-header" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '12px', marginBottom: '12px' }}>
            <div className="customer-title-block">
              <span className="customer-card-title" style={{ fontSize: '20px' }}>{customer.title}</span>
              <span className={`status-badge ${active ? 'badge-active' : 'badge-completed'}`}>
                {active ? '進行中' : '施行完了'}
              </span>
            </div>
            
            <div className="customer-card-actions">
              <button 
                type="button"
                onClick={() => onEditCustomer(customer.id)} 
                className="edit-profile-btn"
                title="詳細図面・OCR・書面ファイルを編集"
              >
                📁 ファイル・OCR管理
              </button>
            </div>
          </div>

          <div className="customer-expanded-panel" style={{ display: 'block', borderTop: 'none', paddingTop: 0, marginTop: 0 }}>
            {/* 1. 顧客基本情報 */}
            <div className="customer-section-block">
              <div className="block-header">
                <h4>👤 顧客基本情報</h4>
                {!isEditing ? (
                  <button 
                    type="button" 
                    onClick={() => startInlineEdit(customer)} 
                    className="inline-action-btn edit"
                  >
                    ✏️ プロフィールを編集
                  </button>
                ) : (
                  <div className="edit-actions-row">
                    <button 
                      type="button" 
                      onClick={() => saveInlineEdit(customer.id)} 
                      className="inline-action-btn save"
                    >
                      💾 保存
                    </button>
                    <button 
                      type="button" 
                      onClick={cancelInlineEdit} 
                      className="inline-action-btn cancel"
                    >
                      キャンセル
                    </button>
                  </div>
                )}
              </div>

              {!isEditing ? (
                <table className="customer-details-table">
                  <tbody>
                    <tr>
                      <th>故人名</th>
                      <td>{customer.deceasedLastName || customer.deceasedFirstName ? `${customer.deceasedLastName || ''} ${customer.deceasedFirstName || ''}` : (customer.deceasedName || '未登録')}</td>
                      <th>喪主名</th>
                      <td>{customer.mournerLastName || customer.mournerFirstName ? `${customer.mournerLastName || ''} ${customer.mournerFirstName || ''}` : (customer.mournerName || '未登録')}</td>
                    </tr>
                    <tr>
                      <th>生年月日</th>
                      <td>{customer.birthDate || '未登録'}</td>
                      <th>連絡先</th>
                      <td>{customer.contact || '未登録'}</td>
                    </tr>
                    <tr>
                      <th>逝去日</th>
                      <td>{customer.deathDate || '未登録'}</td>
                      <th>住所</th>
                      <td>{customer.address || '未登録'}</td>
                    </tr>
                    <tr>
                      <th>寺院名</th>
                      <td>{customer.templeName || '未登録'}</td>
                      <th>宗派</th>
                      <td>{customer.sect || '未登録'}</td>
                    </tr>
                    <tr>
                      <th>通夜日</th>
                      <td>{customer.wakeDate || '未登録'}</td>
                      <th>葬儀日</th>
                      <td>{customer.funeralDate || '未登録'}</td>
                    </tr>
                    {(() => {
                      const ageInfo = calculateAge(customer.birthDate, customer.deathDate);
                      if (!ageInfo) return null;
                      return (
                        <tr style={{ backgroundColor: 'rgba(212, 175, 55, 0.08)' }}>
                          <th>自動計算年齢</th>
                          <td colSpan="3">
                            <strong style={{ color: 'var(--color-gold-light)' }}>行年（満年齢）：{ageInfo.fullAge}歳</strong>
                            <span style={{ margin: '0 12px', color: 'var(--text-muted)' }}>/</span>
                            <strong style={{ color: 'var(--color-gold-light)' }}>享年（数え年）：{ageInfo.countAge}歳</strong>
                          </td>
                        </tr>
                      );
                    })()}
                    {customer.notes && (
                      <tr>
                        <th>全体備考</th>
                        <td colSpan="3" style={{ whiteSpace: 'pre-wrap' }}>{customer.notes}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              ) : (
                <div className="inline-edit-form-grid">
                  <div className="edit-form-group span-2">
                    <label>故人名</label>
                    <div className="name-inputs-flex">
                      <input type="text" value={deceasedLastName} onChange={(e) => setDeceasedLastName(e.target.value)} placeholder="姓 例：山田" />
                      <input type="text" value={deceasedFirstName} onChange={(e) => setDeceasedFirstName(e.target.value)} placeholder="名 例：太郎" />
                    </div>
                  </div>
                  <div className="edit-form-group span-2">
                    <label>喪主名</label>
                    <div className="name-inputs-flex">
                      <input type="text" value={mournerLastName} onChange={(e) => setMournerLastName(e.target.value)} placeholder="姓 例：山田" />
                      <input type="text" value={mournerFirstName} onChange={(e) => setMournerFirstName(e.target.value)} placeholder="名 例：太一" />
                    </div>
                  </div>
                  <div className="edit-form-group">
                    <label>生年月日</label>
                    <input 
                      type="text" 
                      value={birthDate} 
                      onChange={(e) => setBirthDate(e.target.value)} 
                      onBlur={(e) => setBirthDate(convertToJapaneseEraOrNormalize(e.target.value))}
                      placeholder="例：s52/6/10 または 1977-06-10" 
                    />
                  </div>
                  <div className="edit-form-group">
                    <label>連絡先</label>
                    <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} placeholder="連絡先" />
                  </div>
                  <div className="edit-form-group">
                    <label>逝去日</label>
                    <input 
                      type="date" 
                      value={deathDate} 
                      onChange={(e) => setDeathDate(e.target.value)} 
                    />
                  </div>
                  <div className="edit-form-group">
                    <label>住所</label>
                    <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="住所" />
                  </div>
                  <div className="edit-form-group">
                    <label>寺院名</label>
                    <input type="text" value={templeName} onChange={(e) => setTempleName(e.target.value)} placeholder="お寺" />
                  </div>
                  <div className="edit-form-group">
                    <label>宗派</label>
                     <input 
                       type="text" 
                       list="sect-options"
                       value={sect} 
                       onChange={(e) => setSect(e.target.value)} 
                       placeholder="宗派を入力または選択" 
                     />
                  </div>
                  <div className="edit-form-group">
                    <label>通夜日</label>
                    <input 
                      type="date" 
                      value={wakeDate} 
                      onChange={(e) => setWakeDate(e.target.value)} 
                    />
                  </div>
                  <div className="edit-form-group">
                    <label>葬儀告別式日</label>
                    <input 
                      type="date" 
                      value={funeralDate} 
                      onChange={(e) => setFuneralDate(e.target.value)} 
                    />
                  </div>
                  {(() => {
                    const ageInfo = calculateAge(birthDate, deathDate);
                    if (!ageInfo) return null;
                    return (
                      <div className="edit-form-group span-2" style={{
                        backgroundColor: 'rgba(212, 175, 55, 0.08)',
                        border: '1px solid rgba(212, 175, 55, 0.2)',
                        borderRadius: '8px',
                        padding: '10px 14px',
                        marginTop: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px'
                      }}>
                        <span style={{ fontSize: '11px', fontWeight: 'bold', color: 'var(--color-gold-light)' }}>年齢 (自動計算):</span>
                        <span style={{ fontSize: '13px', fontWeight: 'bold' }}>行年（満年齢）：{ageInfo.fullAge}歳</span>
                        <span style={{ color: 'var(--text-muted)' }}>/</span>
                        <span style={{ fontSize: '13px', fontWeight: 'bold' }}>享年（数え年）：{ageInfo.countAge}歳</span>
                      </div>
                    );
                  })()}
                  <div className="edit-form-group span-2">
                    <label>全体備考</label>
                    <textarea value={customerNotes} onChange={(e) => setCustomerNotes(e.target.value)} placeholder="備考欄" rows="2" />
                  </div>
                </div>
              )}
            </div>

            {/* 2. 予定・タスク管理 */}
            <div className="customer-section-block" style={{ marginTop: '14px' }}>
              <h4>⏳ 進行中の予定</h4>
              <div className="directory-events-list">
                {[...(customer.events || [])]
                  .filter(e => e.status !== 'completed')
                  .sort((a, b) => {
                    const dateA = a.date ? new Date(`${a.date}T${a.time || '00:00'}:00`).getTime() : Infinity;
                    const dateB = b.date ? new Date(`${b.date}T${b.time || '00:00'}:00`).getTime() : Infinity;
                    return dateA - dateB;
                  })
                  .map((evt) => {
                    const isEvtEditing = editingEventId === evt.id;
                    if (isEvtEditing) {
                      return (
                        <div key={evt.id} className="directory-event-edit-row" style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '8px',
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid var(--border-color)',
                          borderRadius: '8px',
                          padding: '10px 14px',
                          marginBottom: '6px'
                        }}>
                          <div className="form-row-flex">
                            <select 
                              value={editEventCategory} 
                              onChange={(e) => setEditEventCategory(e.target.value)} 
                              className="inline-event-input"
                              style={{ width: '130px', fontSize: '11px' }}
                            >
                              <option value="打合せ">打合せ</option>
                              <option value="施行">施行</option>
                              <option value="搬送">搬送</option>
                              <option value="事前相談">事前相談</option>
                              <option value="法要 (四十九日/納骨等)">法要 (四十九日/納骨等)</option>
                              <option value="一周忌法要">一周忌法要</option>
                              <option value="三回忌法要">三回忌法要</option>
                              <option value="見積">見積</option>
                              <option value="CUSTOM">その他 (自由入力)</option>
                            </select>
                            {editEventCategory === 'CUSTOM' && (
                              <input 
                                type="text" 
                                placeholder="カテゴリ名" 
                                value={customEditEventCategory} 
                                onChange={(e) => setCustomEditEventCategory(e.target.value)} 
                                className="inline-event-input"
                                style={{ width: '120px', fontSize: '11px' }}
                                required
                              />
                            )}
                            <input 
                              type="date" 
                              value={editEventDate} 
                              onChange={(e) => setEditEventDate(e.target.value)} 
                              className="inline-event-input"
                              style={{ flex: 1, fontSize: '11px' }} 
                            />
                            <input 
                              type="time" 
                              value={editEventTime} 
                              onChange={(e) => setEditEventTime(e.target.value)} 
                              className="inline-event-input"
                              style={{ width: '80px', fontSize: '11px' }} 
                            />
                          </div>
                          <div className="form-row-flex">
                            <input 
                              type="text" 
                              placeholder="詳細メモ" 
                              value={editEventNotes} 
                              onChange={(e) => setEditEventNotes(e.target.value)} 
                              className="inline-event-input"
                              style={{ flex: 1, fontSize: '11px' }} 
                            />
                            <button 
                              type="button" 
                              onClick={() => saveEventEdit(customer, evt.id)}
                              className="inline-action-btn save"
                              style={{ fontSize: '11px', padding: '4px 8px' }}
                            >
                              保存
                            </button>
                            <button 
                              type="button" 
                              onClick={cancelEventEdit}
                              className="inline-action-btn cancel"
                              style={{ fontSize: '11px', padding: '4px 8px' }}
                            >
                              取消
                            </button>
                          </div>
                        </div>
                      );
                    }
                    return (
                      <div 
                        key={evt.id} 
                        className={`directory-event-row border-${getCategoryColor(evt.category)}`}
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', gap: '8px' }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <label className="event-row-label">
                            <input 
                              type="checkbox" 
                              checked={false} 
                              onChange={() => toggleEventCompleteInline(customer, evt.id)} 
                              className="event-checkbox"
                            />
                            <span className={`badge badge-${getCategoryColor(evt.category)}`}>{evt.category}</span>
                            <span className="event-datetime">📅 {evt.date} {evt.time ? `🕒 ${evt.time}` : ''}</span>
                            {evt.notes && <span className="event-notes-label">({evt.notes})</span>}
                          </label>
                          
                          <div className="event-row-actions" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <label htmlFor={`dir_cam_${customer.id}_${evt.id}`} className="event-camera-btn" style={{
                              cursor: 'pointer',
                              fontSize: '11px',
                              padding: '3px 8px',
                              backgroundColor: 'rgba(255,255,255,0.05)',
                              border: '1px solid var(--border-color)',
                              borderRadius: '6px',
                              display: 'inline-flex',
                              alignItems: 'center',
                              fontWeight: 'bold',
                              color: 'var(--text-secondary)'
                            }}>
                              📷 写真を追加
                            </label>
                            <input 
                              type="file" 
                              id={`dir_cam_${customer.id}_${evt.id}`} 
                              accept="image/*" 
                              style={{ display: 'none' }} 
                              onChange={(e) => {
                                if (e.target.files && e.target.files[0]) {
                                  handleEventImageCapture(customer, evt.id, e.target.files[0]);
                                }
                              }}
                            />

                            <button 
                              type="button" 
                              onClick={() => startEventEdit(evt)} 
                              className="inline-event-action-btn edit-btn"
                              style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '11px', color: 'var(--text-secondary)' }}
                              title="予定を編集"
                            >
                              ✏️
                            </button>
                            <button 
                              type="button" 
                              onClick={() => deleteEventInline(customer, evt.id)} 
                              className="inline-event-action-btn delete-btn"
                              style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '11px', color: 'var(--color-red)' }}
                              title="予定を削除"
                            >
                              🗑️
                            </button>
                          </div>
                        </div>

                        {/* Event specific thumbnails gallery */}
                        {evt.images && evt.images.length > 0 && (
                          <div className="event-thumbnails-slider" style={{
                            display: 'flex',
                            gap: '8px',
                            overflowX: 'auto',
                            padding: '4px 0',
                            marginTop: '2px',
                            borderTop: '1px dashed rgba(255,255,255,0.05)'
                          }}>
                            {evt.images.map((img) => (
                              <div key={img.id} className="event-thumb-wrapper" style={{
                                position: 'relative',
                                width: '50px',
                                height: '50px',
                                flexShrink: 0,
                                borderRadius: '6px',
                                overflow: 'hidden',
                                border: '1px solid var(--border-color)'
                              }}>
                                <img 
                                  src={img.data} 
                                  alt="event doc" 
                                  onClick={() => setEventPreviewImage(img.data)}
                                  style={{ width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer' }}
                                />
                                <button 
                                  type="button"
                                  onClick={() => handleDeleteEventImage(customer, evt.id, img.id)}
                                  style={{
                                    position: 'absolute',
                                    top: '2px',
                                    right: '2px',
                                    width: '14px',
                                    height: '14px',
                                    borderRadius: '50%',
                                    backgroundColor: 'rgba(0,0,0,0.6)',
                                    color: 'white',
                                    border: 'none',
                                    fontSize: '8px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer'
                                  }}
                                >
                                  ✕
                                </button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                {[...(customer.events || [])].filter(e => e.status !== 'completed').length === 0 && (
                  <p className="no-events-text">現在、進行中の予定はありません。</p>
                )}
              </div>
            </div>

            {/* 3. 完了済みの履歴 */}
            {[...(customer.events || [])].some(e => e.status === 'completed') && (
              <div className="customer-section-block" style={{ marginTop: '14px' }}>
                <h4 style={{ fontSize: '11px', color: 'var(--text-muted)' }}>✅ 完了済みの履歴</h4>
                <div className="directory-events-list completed-list">
                  {[...(customer.events || [])]
                    .filter(e => e.status === 'completed')
                    .sort((a, b) => {
                      const dateA = a.date ? new Date(`${a.date}T${a.time || '00:00'}:00`).getTime() : Infinity;
                      const dateB = b.date ? new Date(`${b.date}T${b.time || '00:00'}:00`).getTime() : Infinity;
                      return dateB - dateA;
                    })
                    .map((evt) => {
                      const isEvtEditing = editingEventId === evt.id;
                      if (isEvtEditing) {
                        return (
                          <div key={evt.id} className="directory-event-edit-row" style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '8px',
                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid var(--border-color)',
                            borderRadius: '8px',
                            padding: '10px 14px',
                            marginBottom: '6px'
                          }}>
                            <div className="form-row-flex">
                              <select 
                                value={editEventCategory} 
                                onChange={(e) => setEditEventCategory(e.target.value)} 
                                className="inline-event-input"
                                style={{ width: '130px', fontSize: '11px' }}
                              >
                                <option value="打合せ">打合せ</option>
                                <option value="施行">施行</option>
                                <option value="搬送">搬送</option>
                                <option value="事前相談">事前相談</option>
                                <option value="法要 (四十九日/納骨等)">法要 (四十九日/納骨等)</option>
                                <option value="一周忌法要">一周忌法要</option>
                                <option value="三回忌法要">三回忌法要</option>
                                <option value="見積">見積</option>
                                <option value="CUSTOM">その他 (自由入力)</option>
                              </select>
                              {editEventCategory === 'CUSTOM' && (
                                <input 
                                  type="text" 
                                  placeholder="カテゴリ名" 
                                  value={customEditEventCategory} 
                                  onChange={(e) => setCustomEditEventCategory(e.target.value)} 
                                  className="inline-event-input"
                                  style={{ width: '120px', fontSize: '11px' }}
                                  required
                                />
                              )}
                              <input 
                                type="date" 
                                value={editEventDate} 
                                onChange={(e) => setEditEventDate(e.target.value)} 
                                className="inline-event-input"
                                style={{ flex: 1, fontSize: '11px' }} 
                              />
                              <input 
                                type="time" 
                                value={editEventTime} 
                                onChange={(e) => setEditEventTime(e.target.value)} 
                                className="inline-event-input"
                                style={{ width: '80px', fontSize: '11px' }} 
                              />
                            </div>
                            <div className="form-row-flex">
                              <input 
                                type="text" 
                                placeholder="詳細メモ" 
                                value={editEventNotes} 
                                onChange={(e) => setEditEventNotes(e.target.value)} 
                                className="inline-event-input"
                                style={{ flex: 1, fontSize: '11px' }} 
                              />
                              <button 
                                type="button" 
                                onClick={() => saveEventEdit(customer, evt.id)}
                                className="inline-action-btn save"
                                style={{ fontSize: '11px', padding: '4px 8px' }}
                              >
                                保存
                              </button>
                              <button 
                                type="button" 
                                onClick={cancelEventEdit}
                                className="inline-action-btn cancel"
                                style={{ fontSize: '11px', padding: '4px 8px' }}
                              >
                                取消
                              </button>
                            </div>
                          </div>
                        );
                      }
                      return (
                        <div 
                          key={evt.id} 
                          className="directory-event-row completed-item" 
                          style={{ opacity: 0.75, display: 'flex', flexDirection: 'column', alignItems: 'stretch', gap: '8px' }}
                        >
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <label className="event-row-label">
                              <input 
                                type="checkbox" 
                                checked={true} 
                                onChange={() => toggleEventCompleteInline(customer, evt.id)} 
                                className="event-checkbox"
                              />
                              <span className="badge badge-gray">{evt.category}</span>
                              <span className="event-datetime" style={{ textDecoration: 'line-through' }}>📅 {evt.date} {evt.time ? `🕒 ${evt.time}` : ''}</span>
                              {evt.notes && <span className="event-notes-label" style={{ textDecoration: 'line-through' }}>({evt.notes})</span>}
                            </label>
                            
                            <div className="event-row-actions" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <label htmlFor={`dir_cam_${customer.id}_${evt.id}`} className="event-camera-btn" style={{
                                cursor: 'pointer',
                                fontSize: '11px',
                                padding: '3px 8px',
                                backgroundColor: 'rgba(255,255,255,0.05)',
                                border: '1px solid var(--border-color)',
                                borderRadius: '6px',
                                display: 'inline-flex',
                                alignItems: 'center',
                                fontWeight: 'bold',
                                color: 'var(--text-secondary)'
                              }}>
                                📷 写真を追加
                              </label>
                              <input 
                                type="file" 
                                id={`dir_cam_${customer.id}_${evt.id}`} 
                                accept="image/*" 
                                style={{ display: 'none' }} 
                                onChange={(e) => {
                                  if (e.target.files && e.target.files[0]) {
                                    handleEventImageCapture(customer, evt.id, e.target.files[0]);
                                  }
                                }}
                              />

                              <span 
                                style={{ fontSize: '11px', cursor: 'not-allowed', opacity: 0.7, padding: '2px 4px' }}
                                title="完了済みの予定は編集ロックされています。未完了に戻すと編集できます。"
                              >
                                🔒
                              </span>
                              <button 
                                type="button" 
                                onClick={() => deleteEventInline(customer, evt.id)} 
                                className="inline-event-action-btn delete-btn"
                                style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '11px', color: 'var(--color-red)' }}
                                title="予定を削除"
                              >
                                🗑️
                              </button>
                            </div>
                          </div>

                          {/* Event specific thumbnails gallery */}
                          {evt.images && evt.images.length > 0 && (
                            <div className="event-thumbnails-slider" style={{
                              display: 'flex',
                              gap: '8px',
                              overflowX: 'auto',
                              padding: '4px 0',
                              marginTop: '2px',
                              borderTop: '1px dashed rgba(255,255,255,0.05)'
                            }}>
                              {evt.images.map((img) => (
                                <div key={img.id} className="event-thumb-wrapper" style={{
                                  position: 'relative',
                                  width: '50px',
                                  height: '50px',
                                  flexShrink: 0,
                                  borderRadius: '6px',
                                  overflow: 'hidden',
                                  border: '1px solid var(--border-color)'
                                }}>
                                  <img 
                                    src={img.data} 
                                    alt="event doc" 
                                    onClick={() => setEventPreviewImage(img.data)}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer' }}
                                  />
                                  <button 
                                    type="button"
                                    onClick={() => handleDeleteEventImage(customer, evt.id, img.id)}
                                    style={{
                                      position: 'absolute',
                                      top: '2px',
                                      right: '2px',
                                      width: '14px',
                                      height: '14px',
                                      borderRadius: '50%',
                                      backgroundColor: 'rgba(0,0,0,0.6)',
                                      color: 'white',
                                      border: 'none',
                                      fontSize: '8px',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      cursor: 'pointer'
                                    }}
                                  >
                                    ✕
                                  </button>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                </div>
              </div>
            )}

            {/* 4. 新しい予定の追加 */}
            <div className="customer-section-block add-event-inline-block" style={{ marginTop: '14px' }}>
              <h4>📅 新しい予定を登録</h4>
              <div className="inline-add-event-form">
                <div className="form-row-flex">
                  <select 
                    value={newEventCategory} 
                    onChange={(e) => setNewEventCategory(e.target.value)} 
                    className="inline-event-input select-category"
                    style={{ width: '130px' }}
                  >
                    <option value="打合せ">打合せ</option>
                    <option value="施行">施行</option>
                    <option value="搬送">搬送</option>
                    <option value="事前相談">事前相談</option>
                    <option value="法要 (四十九日/納骨等)">法要 (四十九日/納骨等)</option>
                    <option value="一周忌法要">一周忌法要</option>
                    <option value="三回忌法要">三回忌法要</option>
                    <option value="見積">見積</option>
                    <option value="CUSTOM">その他 (自由入力)</option>
                  </select>
                  {newEventCategory === 'CUSTOM' && (
                    <input 
                      type="text" 
                      placeholder="自由入力のカテゴリ名" 
                      value={customEventCategory} 
                      onChange={(e) => setCustomEventCategory(e.target.value)} 
                      className="inline-event-input input-custom-category" 
                      style={{ width: '130px' }}
                      required
                    />
                  )}
                  <input type="date" value={newEventDate} onChange={(e) => setNewEventDate(e.target.value)} className="inline-event-input input-date" />
                  <input type="time" value={newEventTime} onChange={(e) => setNewEventTime(e.target.value)} className="inline-event-input input-time" />
                </div>
                <div className="form-row-flex" style={{ marginTop: '8px' }}>
                  <input 
                    type="text" 
                    placeholder="予定に関する詳細メモ（例：式場手配など）" 
                    value={newEventNotes} 
                    onChange={(e) => setNewEventNotes(e.target.value)} 
                    className="inline-event-input input-notes" 
                    style={{ flex: 1 }}
                  />
                  <button 
                    type="button" 
                    onClick={() => handleAddEventInline(customer)} 
                    className="inline-add-event-submit-btn"
                  >
                    ＋ 予定を追加
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 予定ごとの写真拡大モーダル */}
        {eventPreviewImage && (
          <div className="preview-modal-overlay" onClick={() => setEventPreviewImage(null)} style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 99999,
            padding: '16px'
          }}>
            <div className="preview-modal-content" onClick={(e) => e.stopPropagation()} style={{
              backgroundColor: 'var(--bg-secondary)',
              border: '1px solid var(--border-color)',
              borderRadius: '16px',
              maxWidth: '500px',
              width: '100%',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div className="preview-modal-header" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '12px 16px',
                borderBottom: '1px solid var(--border-color)'
              }}>
                <span className="preview-modal-title" style={{ fontSize: '14px', fontWeight: 'bold' }}>予定添付写真 拡大</span>
                <button 
                  className="preview-modal-close" 
                  onClick={() => setEventPreviewImage(null)}
                  style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', fontSize: '20px', cursor: 'pointer' }}
                >
                  ✕
                </button>
              </div>
              <div className="preview-modal-img-container" style={{ textAlign: 'center', padding: '16px', backgroundColor: 'black' }}>
                <img src={eventPreviewImage} alt="予定写真" style={{ maxWidth: '100%', maxHeight: '60vh', borderRadius: '8px' }} />
              </div>
              <div className="preview-modal-footer" style={{
                padding: '12px 16px',
                borderTop: '1px solid var(--border-color)',
                fontSize: '12px',
                color: 'var(--text-secondary)',
                textAlign: 'center'
              }}>
                撮影した書類写真等をご確認いただけます。
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // --- 顧客一覧ビューのレンダリング (デフォルト) ---
  return (
    <div className="customer-directory fade-in">
      <div className="directory-header-controls">
        <h2 className="directory-title">👤 顧客名簿・基本情報管理</h2>
        
        {/* 検索バー */}
        <div className="search-bar-container">
          <span className="search-icon">🔍</span>
          <input 
            type="text" 
            placeholder="故人名、喪主名、宗派、連絡先などで名簿を検索..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          {searchQuery && (
            <button 
              type="button" 
              onClick={() => setSearchQuery('')} 
              className="search-clear-btn"
              title="検索をクリア"
            >
              ✕
            </button>
          )}
        </div>

        {/* 並べ替えコントロール */}
        <div className="sort-bar-container">
          <label className="sort-label">並び替え:</label>
          <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)} 
            className="sort-select"
          >
            <option value="newest">登録が新しい順</option>
            <option value="oldest">登録が古い順</option>
            <option value="name">五十音順 (案件名)</option>
            <option value="funeral">葬儀日が近い順</option>
            <option value="death">逝去日が新しい順</option>
          </select>
        </div>
        {/* 新規追加ボタン */}
        <button 
          onClick={startAddCustomer} 
          className="add-customer-trigger-btn"
          style={{
            marginTop: '8px',
            width: '100%',
            padding: '10px',
            backgroundColor: 'var(--color-gold)',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            fontWeight: 'bold',
            fontSize: '13px',
            cursor: 'pointer'
          }}
        >
          ＋ 新規顧客追加
        </button>
      </div>

      {/* 新規顧客追加フォーム */}
      {isAddingCustomer && (
        <form onSubmit={handleAddNewCustomerSubmit} className="inline-edit-form-grid" style={{
          backgroundColor: 'var(--bg-secondary)',
          border: '1px solid var(--border-color)',
          borderRadius: '16px',
          padding: '16px',
          margin: '16px 0',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '12px'
        }}>
          <h3 className="span-2" style={{ fontSize: '14px', fontWeight: 'bold', color: 'var(--color-gold-light)', margin: '0 0 4px 0' }}>👤 新規顧客の追加</h3>
          
          <div className="edit-form-group span-2">
            <label>故人名</label>
            <div className="name-inputs-flex" style={{ display: 'flex', gap: '8px' }}>
              <input type="text" value={deceasedLastName} onChange={(e) => setDeceasedLastName(e.target.value)} placeholder="姓 例：山田" style={{ flex: 1, backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', padding: '8px', borderRadius: '6px' }} />
              <input type="text" value={deceasedFirstName} onChange={(e) => setDeceasedFirstName(e.target.value)} placeholder="名 例：太郎" style={{ flex: 1, backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', padding: '8px', borderRadius: '6px' }} />
            </div>
          </div>

          <div className="edit-form-group span-2">
            <label>喪主名</label>
            <div className="name-inputs-flex" style={{ display: 'flex', gap: '8px' }}>
              <input type="text" value={mournerLastName} onChange={(e) => setMournerLastName(e.target.value)} placeholder="姓 例：山田" style={{ flex: 1, backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', padding: '8px', borderRadius: '6px' }} />
              <input type="text" value={mournerFirstName} onChange={(e) => setMournerFirstName(e.target.value)} placeholder="名 例：太一" style={{ flex: 1, backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', padding: '8px', borderRadius: '6px' }} />
            </div>
          </div>

          <div className="edit-form-group" style={{ display: 'flex', flexDirection: 'column' }}>
            <label>生年月日</label>
            <input 
              type="text" 
              value={birthDate} 
              onChange={(e) => setBirthDate(e.target.value)} 
              onBlur={(e) => setBirthDate(convertToJapaneseEraOrNormalize(e.target.value))}
              placeholder="例：s52/6/10 または 1977-06-10" 
              style={{ backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', padding: '8px', borderRadius: '6px' }}
            />
          </div>

          <div className="edit-form-group" style={{ display: 'flex', flexDirection: 'column' }}>
            <label>連絡先</label>
            <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} placeholder="連絡先" style={{ backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', padding: '8px', borderRadius: '6px' }} />
          </div>

          <div className="edit-form-group" style={{ display: 'flex', flexDirection: 'column' }}>
            <label>逝去日</label>
            <input type="date" value={deathDate} onChange={(e) => setDeathDate(e.target.value)} style={{ backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', padding: '8px', borderRadius: '6px' }} />
          </div>

          <div className="edit-form-group" style={{ display: 'flex', flexDirection: 'column' }}>
            <label>住所</label>
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="住所" style={{ backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', padding: '8px', borderRadius: '6px' }} />
          </div>

          <div className="edit-form-group" style={{ display: 'flex', flexDirection: 'column' }}>
            <label>寺院名</label>
            <input type="text" value={templeName} onChange={(e) => setTempleName(e.target.value)} placeholder="お寺" style={{ backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', padding: '8px', borderRadius: '6px' }} />
          </div>

          <div className="edit-form-group" style={{ display: 'flex', flexDirection: 'column' }}>
            <label>宗派</label>
            <input 
              type="text" 
              list="sect-options"
              value={sect} 
              onChange={(e) => setSect(e.target.value)} 
              placeholder="宗派を入力または選択" 
              style={{ backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', padding: '8px', borderRadius: '6px' }} 
            />
          </div>

          <div className="edit-form-group" style={{ display: 'flex', flexDirection: 'column' }}>
            <label>通夜日</label>
            <input type="date" value={wakeDate} onChange={(e) => setWakeDate(e.target.value)} style={{ backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', padding: '8px', borderRadius: '6px' }} />
          </div>

          <div className="edit-form-group" style={{ display: 'flex', flexDirection: 'column' }}>
            <label>葬儀告別式日</label>
            <input type="date" value={funeralDate} onChange={(e) => setFuneralDate(e.target.value)} style={{ backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', padding: '8px', borderRadius: '6px' }} />
          </div>

          {(() => {
            const ageInfo = calculateAge(birthDate, deathDate);
            if (!ageInfo) return null;
            return (
              <div className="edit-form-group span-2" style={{
                backgroundColor: 'rgba(212, 175, 55, 0.08)',
                border: '1px solid rgba(212, 175, 55, 0.2)',
                borderRadius: '8px',
                padding: '10px 14px',
                marginTop: '4px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px'
              }}>
                <span style={{ fontSize: '11px', fontWeight: 'bold', color: 'var(--color-gold-light)' }}>年齢 (自動計算):</span>
                <span style={{ fontSize: '13px', fontWeight: 'bold' }}>行年（満年齢）：{ageInfo.fullAge}歳</span>
                <span style={{ color: 'var(--text-muted)' }}>/</span>
                <span style={{ fontSize: '13px', fontWeight: 'bold' }}>享年（数え年）：{ageInfo.countAge}歳</span>
              </div>
            );
          })()}

          <div className="edit-form-group span-2" style={{ display: 'flex', flexDirection: 'column' }}>
            <label>全体備考</label>
            <textarea value={customerNotes} onChange={(e) => setCustomerNotes(e.target.value)} placeholder="備考欄" rows="2" style={{ backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', color: 'var(--text-primary)', padding: '8px', borderRadius: '6px' }} />
          </div>

          <div className="span-2" style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end', marginTop: '12px' }}>
            <button type="submit" style={{ padding: '8px 16px', backgroundColor: 'var(--color-blue)', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>登録</button>
            <button type="button" onClick={() => setIsAddingCustomer(false)} style={{ padding: '8px 16px', backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', color: 'var(--text-secondary)', borderRadius: '6px', cursor: 'pointer' }}>キャンセル</button>
          </div>
        </form>
      )}

      {/* 顧客一覧リスト表示 */}
      <div className="customers-list-container">
        {displayCustomers.length === 0 ? (
          <p className="no-tasks-placeholder">登録されているお客様情報はありません。</p>
        ) : (
          displayCustomers.map((customer) => {
            const active = isCustomerActive(customer);
            
            return (
              <div 
                key={customer.id} 
                className={`directory-customer-card clickable-card ${active ? 'active-status' : 'completed-status'}`}
                onClick={() => setSelectedCustomerId(customer.id)}
              >
                <div className="customer-card-header">
                  <div className="customer-title-block">
                    <span className="customer-card-title">{customer.title}</span>
                    <span className={`status-badge ${active ? 'badge-active' : 'badge-completed'}`}>
                      {active ? '進行中' : '施行完了'}
                    </span>
                  </div>
                  <span className="card-arrow-indicator">詳細 ❯</span>
                </div>

                <div className="customer-quick-info">
                  <span className="quick-info-item"><strong>故人:</strong> {customer.deceasedLastName || customer.deceasedFirstName ? `${customer.deceasedLastName || ''} ${customer.deceasedFirstName || ''}` : (customer.deceasedName || '未登録')}</span>
                  <span className="quick-info-item"><strong>喪主:</strong> {customer.mournerLastName || customer.mournerFirstName ? `${customer.mournerLastName || ''} ${customer.mournerFirstName || ''}` : (customer.mournerName || '未登録')}</span>
                  <span className="quick-info-item"><strong>宗派:</strong> {customer.sect || '未登録'}</span>
                </div>
              </div>
            );
          })
        )}
      </div>

      <style>{`
        .customer-directory {
          padding: 16px;
          padding-bottom: 90px;
          display: flex;
          flex-direction: column;
          flex: 1;
          min-height: 0;
          overflow: hidden;
        }

        .directory-header-controls {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 16px;
        }

        .directory-title {
          font-size: 16px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .customers-list-container {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .directory-customer-card {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-left: 5px solid var(--text-muted);
          border-radius: 12px;
          padding: 16px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.05);
          flex-shrink: 0;
        }

        .directory-customer-card.active-status {
          border-left-color: var(--color-blue);
        }

        .directory-customer-card.completed-status {
          border-left-color: var(--color-green);
          opacity: 0.85;
        }

        .customer-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .customer-title-block {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .customer-card-title {
          font-size: 15px;
          font-weight: 700;
          color: var(--text-primary);
        }

        .status-badge {
          font-size: 10px;
          font-weight: 700;
          padding: 2px 6px;
          border-radius: 20px;
        }

        .badge-active {
          background-color: rgba(59, 130, 246, 0.1);
          color: var(--color-blue);
          border: 1px solid rgba(59, 130, 246, 0.2);
        }

        .badge-completed {
          background-color: rgba(16, 185, 129, 0.1);
          color: var(--color-green);
          border: 1px solid rgba(16, 185, 129, 0.2);
        }

        .edit-profile-btn {
          background-color: rgba(255, 255, 255, 0.05);
          color: var(--text-secondary);
          border: 1px solid var(--border-color);
          border-radius: 6px;
          padding: 4px 10px;
          font-size: 11px;
          font-weight: 700;
          transition: all 0.2s ease;
        }

        .edit-profile-btn:hover {
          background-color: var(--bg-tertiary);
          color: var(--text-primary);
          border-color: var(--text-secondary);
        }

        .customer-quick-info {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          font-size: 12px;
          color: var(--text-secondary);
          background-color: rgba(0,0,0,0.15);
          padding: 8px 12px;
          border-radius: 8px;
          margin-bottom: 10px;
        }

        .quick-info-item strong {
          color: var(--text-muted);
        }

        /* 顧客カードのクリック対応 */
        .directory-customer-card.clickable-card {
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .directory-customer-card.clickable-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 15px rgba(0,0,0,0.2);
          border-color: var(--color-gold);
        }

        .card-arrow-indicator {
          font-size: 11px;
          color: var(--text-muted);
          font-weight: 700;
        }

        .directory-customer-card.detail-mode {
          border-left-width: 6px;
          overflow-y: auto;
          flex: 1;
          min-height: 0;
          -webkit-overflow-scrolling: touch;
          padding-bottom: 40px;
        }

        /* 詳細画面ヘッダー */
        .directory-detail-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 12px;
        }

        .back-list-btn {
          padding: 8px 14px;
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          border-radius: 8px;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
        }

        .back-list-btn:hover {
          background-color: var(--bg-tertiary);
        }

        .detail-delete-btn {
          padding: 8px 14px;
          background-color: rgba(239, 68, 68, 0.1);
          color: var(--color-red);
          border: 1px solid rgba(239, 68, 68, 0.2);
          border-radius: 8px;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
        }

        .detail-delete-btn:hover {
          background-color: rgba(239, 68, 68, 0.2);
        }

        /* Expanded Details panel styling */
        .customer-expanded-panel {
          margin-top: 14px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .customer-section-block {
          background-color: rgba(0, 0, 0, 0.15);
          border: 1px solid var(--border-color);
          border-radius: 10px;
          padding: 12px;
        }

        .customer-section-block h4 {
          font-size: 12px;
          font-weight: 700;
          color: var(--text-muted);
          margin-bottom: 10px;
        }

        .block-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .block-header h4 {
          margin-bottom: 0;
        }

        .inline-action-btn {
          font-size: 11px;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: 6px;
          cursor: pointer;
          border: none;
        }

        .inline-action-btn.edit {
          background-color: rgba(255, 255, 255, 0.05);
          color: var(--text-secondary);
          border: 1px solid var(--border-color);
        }

        .inline-action-btn.save {
          background-color: var(--color-green);
          color: white;
        }

        .inline-action-btn.cancel {
          background-color: rgba(255, 255, 255, 0.05);
          color: var(--text-secondary);
          border: 1px solid var(--border-color);
        }

        .edit-actions-row {
          display: flex;
          gap: 6px;
        }

        /* Inline profile edit inputs */
        .inline-edit-form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .edit-form-group {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .edit-form-group.span-2 {
          grid-column: span 2;
        }

        .edit-form-group label {
          font-size: 11px;
          color: var(--text-secondary);
          font-weight: 700;
        }

        .edit-form-group input,
        .edit-form-group textarea {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          font-size: 12px;
          padding: 6px 10px;
          border-radius: 6px;
          outline: none;
        }

        .name-inputs-flex {
          display: flex;
          gap: 8px;
        }

        .name-inputs-flex input {
          flex: 1;
        }

        /* Inline events checklist timeline styling */
        .directory-events-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .directory-event-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background-color: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          border-left: 4px solid var(--color-blue);
          border-radius: 6px;
          padding: 8px 12px;
          font-size: 12px;
          box-shadow: 0 1px 2px rgba(0,0,0,0.05);
          transition: all 0.2s ease;
        }

        .directory-event-row:hover {
          transform: translateX(2px);
        }

        .directory-event-row.completed-item {
          border-left-color: var(--text-muted);
          background-color: rgba(0,0,0,0.1);
        }

        .directory-event-row.border-red { border-left-color: var(--color-red); }
        .directory-event-row.border-orange { border-left-color: var(--color-orange); }
        .directory-event-row.border-blue { border-left-color: var(--color-blue); }
        .directory-event-row.border-green { border-left-color: var(--color-green); }
        .directory-event-row.border-purple { border-left-color: var(--color-purple); }
        .directory-event-row.border-pink { border-left-color: var(--color-pink); }
        .directory-event-row.border-gray { border-left-color: var(--color-gray); }
        .directory-event-row.border-yellow { border-left-color: var(--color-yellow); }

        .event-row-label {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          flex: 1;
        }

        .event-checkbox {
          width: 14px;
          height: 14px;
          accent-color: var(--color-blue);
          cursor: pointer;
        }

        .event-datetime {
          font-weight: 500;
          color: var(--text-primary);
        }

        .event-notes-label {
          font-size: 11px;
          color: var(--text-secondary);
        }

        .no-events-text {
          font-size: 12px;
          color: var(--text-muted);
          font-style: italic;
          padding: 4px 0;
        }

        /* Inline Event Creator Section styling */
        .add-event-inline-block {
          border-color: rgba(59, 130, 246, 0.25);
          background-color: rgba(59, 130, 246, 0.02);
        }

        .inline-add-event-form {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-row-flex {
          display: flex;
          gap: 8px;
          width: 100%;
        }

        .inline-event-input {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          font-size: 12px;
          padding: 6px 10px;
          border-radius: 6px;
          outline: none;
        }

        .inline-event-input.select-category {
          width: 90px;
          font-weight: 700;
          cursor: pointer;
        }

        .inline-event-input.input-date {
          flex: 1;
        }

        .inline-event-input.input-time {
          width: 80px;
        }

        .inline-add-event-submit-btn {
          background-color: var(--color-blue);
          color: white;
          border: none;
          font-size: 11px;
          font-weight: 700;
          padding: 6px 12px;
          border-radius: 6px;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        .inline-add-event-submit-btn:hover {
          background-color: #2563eb;
        }
      `}</style>
      
      {/* 宗派のオートコンプリート候補リスト */}
      <datalist id="sect-options">
        {sects.map((s, idx) => (
          <option key={idx} value={s} />
        ))}
      </datalist>
    </div>
  );
}
