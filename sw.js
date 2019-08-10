const weatherAPIUrlBase = 'https://publicdata-weather.firebaseio.com/';
const cacheName = 'weatherPWA-v1';
const dataCacheName = 'weatherPWA-data-v1';
const filesToCache = [
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

const handleErr = err => console.error(err.message);

self.addEventListener('install', function (e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName)
      .then(function (cache) {
        console.log('[ServiceWorker] Caching app shell');
        return cache.addAll(filesToCache);
      })
      .catch(handleErr)
  );
});

self.addEventListener('activate', function (e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys()
      .then(function (keyList) {
        return Promise.all(keyList.map(function (key) {
          if (key !== cacheName && key !== dataCacheName) {
            console.log('[ServiceWorker] Removing old cache', key);
            return caches.delete(key);
          }
        }));
      })
      .catch(handleErr)
  );
});

self.addEventListener('fetch', function (e) {
  console.log('[ServiceWorker] Fetching', e.request.url);
  if (e.request.url.startsWith(weatherAPIUrlBase)) {
    e.respondWith(
      fetch(e.request.url)
        .then(response => {
          return caches.open(dataCacheName)
            .then(cache => {
              cache.put(e.request.url, response.clone());
              console.log('[Service Worker] Fetched & Cached', e.request.url);
              return response;
            })
            .catch(handleErr)
        })
        .catch(handleErr)
    );
  } else {
    e.respondWith(
      caches.match(e.request)
        .then(function (response) {
          return response || fetch(e.request);
        })
        .catch(handleErr)
    );
  }
});
