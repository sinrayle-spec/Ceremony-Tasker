import CryptoJS from 'crypto-js';

/**
 * データをパスコードで暗号化します
 * @param {any} data - 暗号化するデータ（オブジェクトまたは文字列）
 * @param {string} passcode - 暗号化キーとなるパスコード
 * @returns {string} 暗号化された文字列
 */
export const encryptData = (data, passcode) => {
  if (!data || !passcode) return '';
  try {
    const jsonStr = typeof data === 'string' ? data : JSON.stringify(data);
    return CryptoJS.AES.encrypt(jsonStr, passcode).toString();
  } catch (error) {
    console.error('暗号化エラー:', error);
    return '';
  }
};

/**
 * 暗号化された文字列をパスコードで復号します
 * @param {string} encryptedStr - 暗号化された文字列
 * @param {string} passcode - 復号キーとなるパスコード
 * @returns {any} 復号されたデータ（オブジェクトまたは文字列）。失敗した場合はnull
 */
export const decryptData = (encryptedStr, passcode) => {
  if (!encryptedStr || !passcode) return null;
  try {
    const bytes = CryptoJS.AES.decrypt(encryptedStr, passcode);
    const decryptedStr = bytes.toString(CryptoJS.enc.Utf8);
    if (!decryptedStr) return null;
    try {
      return JSON.parse(decryptedStr);
    } catch {
      return decryptedStr;
    }
  } catch (error) {
    console.error('復号エラー:', error);
    return null;
  }
};
