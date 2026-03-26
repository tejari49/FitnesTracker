# Fitness Progress Tracker Deluxe

## GitHub Pages Deployment (per Action)

1. Repository nach GitHub pushen.
2. In **Settings → Pages** unter *Build and deployment* die Source auf **GitHub Actions** setzen.
3. Auf den `main`-Branch pushen oder den Workflow manuell starten.
4. Der Workflow `.github/workflows/deploy-pages.yml` deployed die statische App automatisch auf GitHub Pages.

Die App nutzt `indexedDB` im Browser für lokale Speicherung (Pläne, Logs, XP).

## PWA-Installation

- Die App enthält jetzt:
  - `manifest.webmanifest`
  - `service-worker.js` (Offline-Cache/App-Shell)
  - App-Icons als SVG unter `assets/icons/` (ohne Binärdateien)
- Nach dem ersten Laden kann die Seite als App installiert werden (Desktop/Android über Install-Button, iOS über „Zum Home-Bildschirm“).
