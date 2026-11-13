// Service worker minimal : aucune mise en cache (les données doivent toujours être fraîches).
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
