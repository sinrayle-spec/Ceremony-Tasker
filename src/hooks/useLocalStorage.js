import { useState, useEffect } from 'react';
import { encryptData, decryptData } from '../utils/crypto';

/**
 * 暗号化に対応したLocalStorageフック
 * @param {string} key - ローカルストレージのキー
 * @param {any} initialValue - 初期値
 * @param {string} passcode - 暗号鍵となるパスコード
 * @returns {[any, Function]} 状態とセッター関数
 */
export function useEncryptedStorage(key, initialValue, passcode) {
  const [storedValue, setStoredValue] = useState(initialValue);

  // パスコードが設定（ロック解除）された時にデータをロード・復号する
  useEffect(() => {
    if (!passcode) {
      setStoredValue(initialValue);
      return;
    }

    try {
      const encrypted = window.localStorage.getItem(key);
      if (encrypted) {
        const decrypted = decryptData(encrypted, passcode);
        if (decrypted !== null) {
          setStoredValue(decrypted);
          return;
        }
      }
      setStoredValue(initialValue);
    } catch (error) {
      console.error(`LocalStorage(${key})のロードに失敗しました:`, error);
      setStoredValue(initialValue);
    }
  }, [key, passcode]);

  // 値を変更した時に暗号化して保存する
  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      
      if (passcode) {
        const encrypted = encryptData(valueToStore, passcode);
        window.localStorage.setItem(key, encrypted);
      }
    } catch (error) {
      console.error(`LocalStorage(${key})の保存に失敗しました:`, error);
    }
  };

  return [storedValue, setValue];
}
