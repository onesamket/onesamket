// Kill-switch for leftover Workbox SWs from the previous Next.js PWA.
// Browsers keep the old /sw.js registered even after it was deleted from
// the repo, which intercepts Vite modules and mixes React copies.
self.addEventListener('install', () => {
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys()
      await Promise.all(keys.map((key) => caches.delete(key)))
      await self.registration.unregister()
      const clients = await self.clients.matchAll({ type: 'window' })
      await Promise.all(clients.map((client) => client.navigate(client.url)))
    })(),
  )
})
