// Service worker disabled to resolve cache lag and HMR issues
self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  self.clients.claim();
  // Clear all caches immediately
  caches.keys().then((keys) => {
    return Promise.all(keys.map(key => caches.delete(key)));
  });
});
