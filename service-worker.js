self.addEventListener('install', function(e) {
  console.log('Service Worker: Installed');
});

self.addEventListener('fetch', function(e) {
  e.respondWith(fetch(e.request));
});