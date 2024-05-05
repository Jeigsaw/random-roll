import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base:'/random-roll/',
  server: {
    port: 3030,
  },
  preview: {
    port: 8080,
  },
  plugins: [
    VitePWA({ 
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      manifest: {
        "name": "random-roll",
        "short_name": "random-roll",
        "description": "Random Roll Number Generator",
        "id": "/random-roll/",
        "scope": "/random-roll/",
        "start_url": "/random-roll/",
        "orientation": "portrait-primary",
        "icons": [
            {
              "src": "/random-roll/android-chrome-192x192.png",
              "sizes": "192x192",
              "type": "image/png"
            },
            {
              "src": "/random-roll/android-chrome-512x512.png",
              "sizes": "512x512",
              "type": "image/png",
            },
        ],
        "theme_color": "#fceabb",
        "background_color": "#fceabb",
        "display": "standalone"
      }
    },
    
  )
  ]
})