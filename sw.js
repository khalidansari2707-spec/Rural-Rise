const CACHE_NAME = 'rural-rise-v1';
const OFFLINE_URLS = [
  '/',
  '/trainee/path',
  '/trainee/courses',
  '/trainee',
  '/trainee/career',
  '/assets/shared.css',
  '/assets/shared.js',
  '/lib/ai/adaptive.js',
  '/lib/ai/matching.js',
  '/lib/ai/readiness.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(OFFLINE_URLS).catch(err => {
        console.warn('Offline cache partial fill', err);
      });
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then(cached => {
      return cached || fetch(event.request).then(response => {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseToCache);
        });
        return response;
      }).catch(() => {
        // Fallback to cached learning path if navigating
        if (event.request.mode === 'navigate') {
          return caches.match('/trainee/path');
        }
      });
    })
  );
});
