import React, { useState, useEffect } from 'react';
import CryptoJS from 'crypto-js';

export default function LockScreen({ onUnlock }) {
  const [isSetup, setIsSetup] = useState(false);
  const [pin, setPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');
  const [setupStep, setSetupStep] = useState(1); // 1: 設定, 2: 確認
  const [error, setError] = useState('');
  
  useEffect(() => {
    // すでにPINハッシュが保存されているか確認
    const storedHash = localStorage.getItem('ct_pin_hash');
    if (!storedHash) {
      setIsSetup(true);
    }
  }, []);

  const handleKeyPress = (num) => {
    setError('');
    if (pin.length < 4) {
      const newPin = pin + num;
      setPin(newPin);
      
      // 4桁入力完了時の処理
      if (newPin.length === 4) {
        // 設定モードの場合
        if (isSetup) {
          if (setupStep === 1) {
            setConfirmPin(newPin);
            setPin('');
            setSetupStep(2);
          } else {
            if (newPin === confirmPin) {
              // PIN設定完了：ハッシュ化して保存
              const hash = CryptoJS.SHA256(newPin).toString();
              localStorage.setItem('ct_pin_hash', hash);
              setIsSetup(false);
              onUnlock(newPin); // ロック解除してメイン画面へ（PINを暗号鍵として渡す）
            } else {
              setError('パスコードが一致しません。最初からやり直してください。');
              setPin('');
              setConfirmPin('');
              setSetupStep(1);
            }
          }
        } else {
          // 通常のロック解除モード
          const storedHash = localStorage.getItem('ct_pin_hash');
          const inputHash = CryptoJS.SHA256(newPin).toString();
          
          if (inputHash === storedHash) {
            onUnlock(newPin); // ロック解除（PINを暗号鍵として渡す）
          } else {
            setError('パスコードが正しくありません。');
            // 入力を少し遅れてクリア（バイブレーション効果の代わり）
            setTimeout(() => {
              setPin('');
            }, 300);
          }
        }
      }
    }
  };

  const handleBackspace = () => {
    if (pin.length > 0) {
      setPin(pin.slice(0, -1));
    }
  };

  const handleClear = () => {
    setPin('');
    setError('');
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
        alert('アップデート処理に失敗しました。');
      }
    }
  };

  return (
    <div className="lock-screen fade-in">
      <div className="lock-header">
        <div className="lock-logo-wrapper">
          <svg className="lock-logo" viewBox="0 0 512 512">
            <use href="/icon.svg#goldGrad"></use>
            <circle cx="256" cy="256" r="240" fill="none" stroke="#d97706" strokeWidth="4" opacity="0.2"/>
            <path d="M256,120 C220,190 225,300 256,360 C287,300 292,190 256,120 Z" fill="#d97706" />
            <path d="M256,360 C180,380 120,320 256,360 Z" fill="#d97706" />
          </svg>
        </div>
        <h1 className="lock-title">Ceremony Tasker</h1>
        <p className="lock-subtitle">
          {isSetup 
            ? (setupStep === 1 ? '暗号化用パスコード(4桁)を設定してください' : '確認のためもう一度入力してください') 
            : 'パスコードを入力してロックを解除'}
        </p>
      </div>

      {/* ドットインジケータ */}
      <div className="pin-dots">
        {[0, 1, 2, 3].map((index) => (
          <div 
            key={index} 
            className={`pin-dot ${pin.length > index ? 'filled' : ''} ${error && pin.length === 0 ? 'error' : ''}`}
          />
        ))}
      </div>

      {error && <p className="lock-error">{error}</p>}

      {/* キーパッド */}
      <div className="keypad">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <button key={num} onClick={() => handleKeyPress(num.toString())} className="key-btn">
            {num}
          </button>
        ))}
        <button onClick={handleClear} className="key-btn text-muted">
          消去
        </button>
        <button onClick={() => handleKeyPress('0')} className="key-btn">
          0
        </button>
        <button onClick={handleBackspace} className="key-btn text-muted">
          ⌫
        </button>
      </div>

      {/* ログイン前の強制アップデートボタン */}
      <button 
        type="button" 
        onClick={handleForceUpdate} 
        style={{
          fontSize: '12px',
          color: 'var(--text-muted)',
          textDecoration: 'underline',
          backgroundColor: 'transparent',
          border: 'none',
          cursor: 'pointer',
          marginTop: '12px',
          marginBottom: '8px',
          display: 'flex',
          alignItems: 'center',
          gap: '4px'
        }}
      >
        <span>🔄 アプリの強制アップデート（キャッシュクリア）</span>
      </button>

      {/* コンプライアンスポリシーの提示 */}
      <div className="compliance-banner">
        <svg className="compliance-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
        <div className="compliance-text">
          <strong>完全ローカル暗号化（コンプライアンス準拠）</strong>
          <p>お客様や故人様の個人情報は、設定したパスコードで端末内に強力に暗号化（AES）され保存されます。外部サーバーへの送信は一切行われません。</p>
        </div>
      </div>

      <style>{`
        .lock-screen {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          height: 100vh;
          height: 100dvh;
          padding: 24px;
          background-color: var(--bg-primary);
          z-index: 1000;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow-y: auto; /* スクロール可能にする */
        }

        .lock-header {
          text-align: center;
          margin-top: 20px;
        }

        .lock-logo-wrapper {
          width: 80px;
          height: 80px;
          margin: 0 auto 16px;
          background-color: rgba(217, 119, 6, 0.05);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(217, 119, 6, 0.2);
          box-shadow: 0 0 20px rgba(217, 119, 6, 0.1);
        }

        .lock-logo {
          width: 48px;
          height: 48px;
          color: var(--color-gold);
        }

        .lock-title {
          font-size: 24px;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 8px;
          letter-spacing: 1px;
        }

        .lock-subtitle {
          font-size: 14px;
          color: var(--text-secondary);
          max-width: 280px;
          margin: 0 auto;
        }

        .pin-dots {
          display: flex;
          gap: 20px;
          margin: 30px 0;
        }

        .pin-dot {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          border: 2px solid var(--border-color);
          transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .pin-dot.filled {
          background-color: var(--color-gold);
          border-color: var(--color-gold);
          box-shadow: 0 0 10px var(--color-gold-light);
          transform: scale(1.1);
        }

        .pin-dot.error {
          border-color: var(--color-red);
          animation: shake 0.3s ease;
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-6px); }
          75% { transform: translateX(6px); }
        }

        .lock-error {
          color: var(--color-red);
          font-size: 13px;
          margin-bottom: 10px;
          text-align: center;
          min-height: 20px;
        }

        .keypad {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          width: 100%;
          max-width: 320px;
          margin-bottom: 30px;
        }

        .key-btn {
          height: 64px;
          border-radius: 50%;
          font-size: 24px;
          font-weight: 500;
          background-color: var(--bg-secondary);
          color: var(--text-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.05);
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }

        .key-btn:active {
          background-color: var(--bg-tertiary);
          border-color: var(--color-gold);
          box-shadow: 0 0 8px var(--border-glow);
          transform: scale(0.92);
        }

        .compliance-banner {
          display: flex;
          gap: 12px;
          background-color: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          padding: 12px 16px;
          border-radius: 12px;
          width: 100%;
          max-width: 380px;
          align-items: flex-start;
        }

        .compliance-icon {
          width: 20px;
          height: 20px;
          color: var(--color-gold);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .compliance-text {
          font-size: 11px;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .compliance-text strong {
          color: var(--text-primary);
          display: block;
          margin-bottom: 2px;
        }
      `}</style>
    </div>
  );
}
