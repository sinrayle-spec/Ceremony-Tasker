// 2025年〜2030年の旧暦各月の朔日（ついたち）の新暦日付リスト（YYYY-MM-DD）
// 各項目: { date: "YYYY-MM-DD", lMonth: 月(1-12), isLeap: 閏月かどうか(boolean) }
const LUNAR_MONTHS = [
  // 2025年 (閏6月あり)
  { date: "2025-01-29", lMonth: 1, isLeap: false },
  { date: "2025-02-28", lMonth: 2, isLeap: false },
  { date: "2025-03-29", lMonth: 3, isLeap: false },
  { date: "2025-04-28", lMonth: 4, isLeap: false },
  { date: "2025-05-27", lMonth: 5, isLeap: false },
  { date: "2025-06-25", lMonth: 6, isLeap: false },
  { date: "2025-07-25", lMonth: 6, isLeap: true },  // 閏6月
  { date: "2025-08-23", lMonth: 7, isLeap: false },
  { date: "2025-09-22", lMonth: 8, isLeap: false },
  { date: "2025-10-21", lMonth: 9, isLeap: false },
  { date: "2025-11-20", lMonth: 10, isLeap: false },
  { date: "2025-12-19", lMonth: 11, isLeap: false },
  { date: "2026-01-17", lMonth: 12, isLeap: false },

  // 2026年 (閏月なし)
  { date: "2026-02-17", lMonth: 1, isLeap: false },
  { date: "2026-03-19", lMonth: 2, isLeap: false },
  { date: "2026-04-17", lMonth: 3, isLeap: false },
  { date: "2026-05-17", lMonth: 4, isLeap: false },
  { date: "2026-06-15", lMonth: 5, isLeap: false },
  { date: "2026-07-14", lMonth: 6, isLeap: false },
  { date: "2026-08-13", lMonth: 7, isLeap: false },
  { date: "2026-09-11", lMonth: 8, isLeap: false },
  { date: "2026-10-11", lMonth: 9, isLeap: false },
  { date: "2026-11-09", lMonth: 10, isLeap: false },
  { date: "2026-12-09", lMonth: 11, isLeap: false },
  { date: "2027-01-08", lMonth: 12, isLeap: false },

  // 2027年 (閏月なし)
  { date: "2027-02-07", lMonth: 1, isLeap: false },
  { date: "2027-03-08", lMonth: 2, isLeap: false },
  { date: "2027-04-07", lMonth: 3, isLeap: false },
  { date: "2027-05-06", lMonth: 4, isLeap: false },
  { date: "2027-06-05", lMonth: 5, isLeap: false },
  { date: "2027-07-04", lMonth: 6, isLeap: false },
  { date: "2027-08-02", lMonth: 7, isLeap: false },
  { date: "2027-09-01", lMonth: 8, isLeap: false },
  { date: "2027-09-30", lMonth: 9, isLeap: false },
  { date: "2027-10-29", lMonth: 10, isLeap: false },
  { date: "2027-11-28", lMonth: 11, isLeap: false },
  { date: "2027-12-28", lMonth: 12, isLeap: false },

  // 2028年 (閏5月あり)
  { date: "2028-01-27", lMonth: 1, isLeap: false },
  { date: "2028-02-25", lMonth: 2, isLeap: false },
  { date: "2028-03-26", lMonth: 3, isLeap: false },
  { date: "2028-04-25", lMonth: 4, isLeap: false },
  { date: "2028-05-24", lMonth: 5, isLeap: false },
  { date: "2028-06-23", lMonth: 5, isLeap: true },  // 閏5月
  { date: "2028-07-22", lMonth: 6, isLeap: false },
  { date: "2028-08-20", lMonth: 7, isLeap: false },
  { date: "2028-09-19", lMonth: 8, isLeap: false },
  { date: "2028-10-18", lMonth: 9, isLeap: false },
  { date: "2028-11-16", lMonth: 10, isLeap: false },
  { date: "2028-12-16", lMonth: 11, isLeap: false },
  { date: "2029-01-15", lMonth: 12, isLeap: false },

  // 2029年 (閏月なし)
  { date: "2029-02-12", lMonth: 1, isLeap: false },
  { date: "2029-03-14", lMonth: 2, isLeap: false },
  { date: "2029-04-12", lMonth: 3, isLeap: false },
  { date: "2029-05-12", lMonth: 4, isLeap: false },
  { date: "2029-06-10", lMonth: 5, isLeap: false },
  { date: "2029-07-10", lMonth: 6, isLeap: false },
  { date: "2029-08-08", lMonth: 7, isLeap: false },
  { date: "2029-09-07", lMonth: 8, isLeap: false },
  { date: "2029-10-06", lMonth: 9, isLeap: false },
  { date: "2029-11-05", lMonth: 10, isLeap: false },
  { date: "2029-12-04", lMonth: 11, isLeap: false },
  { date: "2030-01-03", lMonth: 12, isLeap: false },

  // 2030年 (閏7月あり)
  { date: "2030-02-01", lMonth: 1, isLeap: false },
  { date: "2030-03-03", lMonth: 2, isLeap: false },
  { date: "2030-04-01", lMonth: 3, isLeap: false },
  { date: "2030-05-01", lMonth: 4, isLeap: false },
  { date: "2030-05-30", lMonth: 5, isLeap: false },
  { date: "2030-06-29", lMonth: 6, isLeap: false },
  { date: "2030-07-28", lMonth: 7, isLeap: false },
  { date: "2030-08-27", lMonth: 7, isLeap: true },  // 閏7月
  { date: "2030-09-25", lMonth: 8, isLeap: false },
  { date: "2030-10-25", lMonth: 9, isLeap: false },
  { date: "2030-11-23", lMonth: 10, isLeap: false },
  { date: "2030-12-23", lMonth: 11, isLeap: false },
  { date: "2031-01-21", lMonth: 12, isLeap: false }
];

const ROKUYO_NAMES = ["大安", "赤口", "先勝", "友引", "先負", "仏滅"];

/**
 * タイムゾーンの影響を受けずに、日付文字列からローカル日付の0時のタイムスタンプを取得します
 * @param {string} dateStr - YYYY-MM-DD 形式の文字列
 * @returns {number} タイムスタンプ
 */
const parseLocalDate = (dateStr) => {
  const [y, m, d] = dateStr.split('-').map(Number);
  return new Date(y, m - 1, d).getTime();
};

/**
 * 指定した日付の六曜（および旧暦の月日情報）を算出します
 * @param {Date|string|number} date - 算出対象の日付
 * @returns {object} 六曜情報 { name: "大安"など, lMonth: 旧暦月, lDay: 旧暦日, isLeap: 閏月フラグ }
 */
export const getRokuyo = (date) => {
  const d = new Date(date);
  // 実行環境のタイムゾーンに応じた0時0分0秒のミリ秒を取得
  const targetTime = new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();

  // 対象日付以前で最も近い朔日（旧暦の1日）を探す
  let lastNewMoonIndex = -1;
  for (let i = 0; i < LUNAR_MONTHS.length; i++) {
    const nmTime = parseLocalDate(LUNAR_MONTHS[i].date);
    if (nmTime <= targetTime) {
      lastNewMoonIndex = i;
    } else {
      break;
    }
  }

  if (lastNewMoonIndex === -1) {
    return { name: "不明", lMonth: 0, lDay: 0, isLeap: false };
  }

  const lastNewMoon = LUNAR_MONTHS[lastNewMoonIndex];
  const nmTime = parseLocalDate(lastNewMoon.date);

  // 朔日からの経過日数を計算
  const diffTime = targetTime - nmTime;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const lDay = diffDays + 1; // 旧暦の「日」は1始まり

  // 六曜の計算: (旧暦の月 + 旧暦の日) % 6
  // 1:先勝, 2:友引, 3:先負, 4:仏滅, 5:大安, 0:赤口 となる順番
  const rokuyoIndex = (lastNewMoon.lMonth + lDay) % 6;

  return {
    name: ROKUYO_NAMES[rokuyoIndex],
    lMonth: lastNewMoon.lMonth,
    lDay: lDay,
    isLeap: lastNewMoon.isLeap
  };
};
