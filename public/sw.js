// Empty service worker — satisfies browser requests, no offline caching
self.addEventListener('install', () => self.skipWaiting())
self.addEventListener('activate', () => self.clients.claim())
