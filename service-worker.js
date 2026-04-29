const CACHE_NAME = 'delivery-v1';
const ASSETS = [
  './',
  './index.html',
  './data.csv',
  'https://cdn-icons-png.flaticon.com/512/2311/2311523.png'
];

// インストール時にファイルをキャッシュ
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// オフライン時はキャッシュから返す
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});