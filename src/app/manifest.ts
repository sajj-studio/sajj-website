import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'SAJJ Studio',
    short_name: 'SAJJ',
    start_url: '/',
    background_color: '#F98E4C',
    theme_color: '#F98E4C',
    display: 'minimal-ui',
    icons: [
      {
        src: '/favicon.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}
