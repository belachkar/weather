var cacheName = 'weatherPWA-v1';
var filesToCache = [
  '/',
  '/index.html',
  'favicon.ico',
  '/js/app.js',
  '/css/style.css',
  '/img/clear.png',
  '/img/cloudy-scattered-showers.png',
  '/img/cloudy.png',
  '/img/fog.png',
  '/img/ic_add_white_24px.svg',
  '/img/ic_refresh_white_24px.svg',
  '/img/partly-cloudy.png',
  '/img/rain.png',
  '/img/scattered-showers.png',
  '/img/sleet.png',
  '/img/snow.png',
  '/img/thunderstorm.png',
  '/img/wind.png'
];

self.addEventListener('install', function (e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function (e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function (keyList) {
      return Promise.all(keyList.map(function (key) {
        if (key !== cacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
});

self.addEventListener('fetch', function (e) {
  console.log('[ServiceWorker] Fetch', e.request.url);
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});
