// Hofzeit – kleiner Service-Worker (macht die Seite installierbar, zeigt ohne Internet einen Hinweis)
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function (e) {
  if (e.request.mode !== 'navigate') return;
  e.respondWith(fetch(e.request).catch(function () {
    return new Response('<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><body style="margin:0;height:100vh;display:grid;place-items:center;background:#0b0906;color:#d6a94e;font:18px -apple-system,Segoe UI,Roboto,sans-serif;text-align:center;padding:20px">Kein Internet.<br>Bitte gleich nochmal öffnen.</body>', { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
  }));
});
