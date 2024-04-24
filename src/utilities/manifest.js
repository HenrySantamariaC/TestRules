export const ManifestConfig = {
    name: "Quizzly",
    short_name: "Quizzly",
    display: 'standalone',
    display_override: ['windows-controls-overlay'],
    lang: 'es_PE',
    start_url: "/",
    background_color: "#181A20",
    theme_color: "#191923",
    description: "Quizzly | Simulación de exámenes para licencias de conducir en Perú",
    icons: [
        {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable"
        },
        {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable"
        },
    ],
}