// 2025年〜2030年の旧暦各月の朔日（ついたち）の新暦日付リスト（YYYY-MM-DD）
// 各項目: { date: "YYYY-MM-DD", lMonth: 月(1-12), isLeap: 閏月かどうか(boolean) }
const LUNAR_MONTHS = [
  // 2025年
  { date: "2025-01-29", lMonth: 1, isLeap: false },
  { date: "2025-02-28", lMonth: 2, isLeap: false },
  { date: "2025-03-29", lMonth: 3, isLeap: false },
  { date: "2025-04-28", lMonth: 4, isLeap: false },
  { date: "2025-05-27", lMonth: 5, isLeap: false },
  { date: "2025-06-25", lMonth: 6, isLeap: false },
  { date: "2025-07-25", lMonth: 6, isLeap: true }, // 閏6月
  { date: "2025-08-23", lMonth: 7, isLeap: false },
  { date: "2025-09-22", lMonth: 8, isLeap: false },
  { date: "2025-10-21", lMonth: 9, isLeap: false },
  { date: "2025-11-20", lMonth: 10, isLeap: false },
  { date: "2025-12-20", lMonth: 11, isLeap: false },
  { date: "2026-01-19", lMonth: 12, isLeap: false },
  
  // 2026年
  { date: "2026-02-17", lMonth: 1, isLeap: false },
  { date: "2026-03-18", lMonth: 2, isLeap: false },
  { date: "2026-04-17", lMonth: 3, isLeap: false },
  { date: "2026-05-16", lMonth: 4, isLeap: false },
  { date: "2026-06-15", lMonth: 5, isLeap: false },
  { date: "2026-07-14", lMonth: 6, isLeap: false },
  { date: "2026-08-12", lMonth: 7, isLeap: false },
  { date: "2026-09-11", lMonth: 8, isLeap: false },
  { date: "2026-10-11", lMonth: 9, isLeap: false },
  { date: "2026-11-09", lMonth: 10, isLeap: false },
  { date: "2026-12-09", lMonth: 11, isLeap: false },
  { date: "2027-01-08", lMonth: 12, isLeap: false },

  // 2027年
  { date: "2027-02-06", lMonth: 1, isLeap: false },
  { date: "2027-03-08", lMonth: 2, isLeap: false },
  { date: "2027-04-06", lMonth: 3, isLeap: false },
  { date: "2027-05-06", lMonth: 4, isLeap: false },
  { date: "2027-06-04", lMonth: 5, isLeap: false },
  { date: "2027-07-04", lMonth: 6, isLeap: false },
  { date: "2027-08-02", lMonth: 6, isLeap: true }, // 閏6月
  { date: "2027-08-31", lMonth: 7, isLeap: false },
  { date: "2027-09-30", lMonth: 8, isLeap: false },
  { date: "2027-10-29", lMonth: 9, isLeap: false },
  { date: "2027-11-28", lMonth: 10, isLeap: false },
  { date: "2027-12-28", lMonth: 11, isLeap: false },
  { date: "2028-01-26", lMonth: 12, isLeap: false },

  // 2028年
  { date: "2028-02-25", lMonth: 1, isLeap: false },
  { date: "2028-03-26", lMonth: 2, isLeap: false },
  { date: "2028-04-24", lMonth: 3, isLeap: false },
  { date: "2028-05-24", lMonth: 4, isLeap: false },
  { date: "2028-06-22", lMonth: 5, isLeap: false },
  { date: "2028-07-22", lMonth: 6, isLeap: false },
  { date: "2028-08-20", lMonth: 7, isLeap: false },
  { date: "2028-09-19", lMonth: 8, isLeap: false },
  { date: "2028-10-18", lMonth: 9, isLeap: false },
  { date: "2028-11-17", lMonth: 10, isLeap: false },
  { date: "2028-12-16", lMonth: 11, isLeap: false },
  { date: "2029-01-15", lMonth: 12, isLeap: false },

  // 2029年
  { date: "2029-02-13", lMonth: 1, isLeap: false },
  { date: "2029-03-15", lMonth: 2, isLeap: false },
  { date: "2029-04-13", lMonth: 3, isLeap: false },
  { date: "2029-05-13", lMonth: 4, isLeap: false },
  { date: "2029-06-11", lMonth: 5, isLeap: false },
  { date: "2029-07-11", lMonth: 6, isLeap: false },
  { date: "2029-08-09", lMonth: 7, isLeap: false },
  { date: "2029-09-08", lMonth: 8, isLeap: false },
  { date: "2029-10-07", lMonth: 9, isLeap: false },
  { date: "2029-11-06", lMonth: 10, isLeap: false },
  { date: "2029-12-05", lMonth: 11, isLeap: false },
  { date: "2030-01-04", lMonth: 12, isLeap: false },

  // 2030年
  { date: "2030-02-03", lMonth: 1, isLeap: false },
  { date: "2030-03-05", lMonth: 2, isLeap: false },
  { date: "2030-04-03", lMonth: 3, isLeap: false },
  { date: "2030-05-03", lMonth: 4, isLeap: false },
  { date: "2030-06-01", lMonth: 5, isLeap: false },
  { date: "2030-07-01", lMonth: 5, isLeap: true }, // 閏5月
  { date: "2030-07-30", lMonth: 6, isLeap: false },
  { date: "2030-08-29", lMonth: 7, isLeap: false },
  { date: "2030-09-27", lMonth: 8, isLeap: false },
  { date: "2030-10-27", lMonth: 9, isLeap: false },
  { date: "2030-11-25", lMonth: 10, isLeap: false },
  { date: "2030-12-25", lMonth: 11, isLeap: false },
  { date: "2031-01-23", lMonth: 12, isLeap: false }
];

const ROKUYO_NAMES = ["大安", "赤口", "先勝", "友引", "先負", "仏滅"];

/**
 * 指定した日付の六曜（および旧暦の月日情報）を算出します
 * @param {Date|string|number} date - 算出対象の日付
 * @returns {object} 六曜情報 { name: "大安"など, lMonth: 旧暦月, lDay: 旧暦日, isLeap: 閏月フラグ }
 */
export const getRokuyo = (date) => {
  const targetDate = new Date(date);
  targetDate.setHours(0, 0, 0, 0);
  const targetTime = targetDate.getTime();

  // 対象日付以前で最も近い朔日（旧暦の1日）を探す
  let lastNewMoonIndex = -1;
  for (let i = 0; i < LUNAR_MONTHS.length; i++) {
    const nmDate = new Date(LUNAR_MONTHS[i].date);
    nmDate.setHours(0, 0, 0, 0);
    if (nmDate.getTime() <= targetTime) {
      lastNewMoonIndex = i;
    } else {
      break;
    }
  }

  if (lastNewMoonIndex === -1) {
    return { name: "不明", lMonth: 0, lDay: 0, isLeap: false };
  }

  const lastNewMoon = LUNAR_MONTHS[lastNewMoonIndex];
  const newMoonDate = new Date(lastNewMoon.date);
  newMoonDate.setHours(0, 0, 0, 0);

  // 朔日からの経過日数を計算
  const diffTime = targetTime - newMoonDate.getTime();
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
