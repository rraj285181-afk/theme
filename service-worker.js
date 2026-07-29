const CACHE_NAME = 'niagara-launcher-cache-v1';
const ASSETS = [
  'index.html',
  'styles.css',
  'app.js',
  'manifest.json'
];

// Install Service Worker and cache essential launcher assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Caching Launcher Assets');
        return cache.addAll(ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event (clean up old caches)
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('Service Worker: Clearing Old Cache', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Cache First fetch strategy falling back to network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response; // Return cached asset
        }
        return fetch(event.request).then((fetchResponse) => {
          // If response is valid, clone and cache it dynamically for later
          if (fetchResponse && fetchResponse.status === 200 && fetchResponse.type === 'basic') {
            const responseToCache = fetchResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseToCache);
            });
          }
          return fetchResponse;
        });
      }).catch(() => {
        // Offline fallback logic if necessary
      })
  );
});
