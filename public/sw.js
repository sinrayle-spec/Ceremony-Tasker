const CACHE_NAME = 'ceremony-tasker-v12';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './icon.svg'
];

// サービスワーカーインストール時に静的アセットをキャッシュ
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// アクティベート時に古いキャッシュを削除
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// リクエスト時のフェッチ処理（キャッシュ優先、バックグラウンド更新）
self.addEventListener('fetch', (event) => {
  // 外部APIやローカルデータ等、特定のURLスキーム（http/https以外、またはchrome-extensionなど）はキャッシュ対象外にする
  if (!event.request.url.startsWith(self.location.origin)) {
    // 外部CDN（Tesseract.jsの言語データなど）はキャッシュ対象に含めたいので、http/httpsであれば通す
    if (!event.request.url.startsWith('http')) {
      return;
    }
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // キャッシュがあればそれを返しつつ、バックグラウンドでネットワークから取得して更新
        fetch(event.request).then((networkResponse) => {
          if (networkResponse.status === 200) {
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, networkResponse);
            });
          }
        }).catch(() => {
          // オフライン時は何もしない
        });
        return cachedResponse;
      }

      // キャッシュがなければネットワークから取得
      return fetch(event.request).then((response) => {
        // レポンスが正常かつGETリクエストの場合のみキャッシュに追加
        if (response && response.status === 200 && event.request.method === 'GET') {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return response;
      });
    })
  );
});
