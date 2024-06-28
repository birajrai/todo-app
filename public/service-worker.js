self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('todo-app').then((cache) => {
        return cache.addAll([
          '/',
          '/_offline',
          '/manifest.json',
          '/icons/icon-192x192.png',
          '/icons/icon-512x512.png',
          '/styles/globals.css',
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    if (event.request.mode === 'navigate') {
      event.respondWith(
        fetch(event.request).catch(() => caches.match('/_offline'))
      );
    } else {
      event.respondWith(
        caches.match(event.request).then((response) => {
          return response || fetch(event.request);
        })
      );
    }
  });
  