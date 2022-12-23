/** @type {import('tailwindcss').Config} */
import { fontFamily } from 'tailwindcss/defaultTheme'

export const content = [
  './components/**/*.{js,vue,ts}',
  './layouts/**/*.vue',
  './pages/**/*.vue',
  './plugins/**/*.{js,ts}',
  './nuxt.config.{js,ts}',
  './app.vue',
]
export const theme = {
  extend: {
    fontFamily: {
      body: ['BeVietnamPro-Variable', ...fontFamily.sans],
      display: ['Quilon-Variable', ...fontFamily.sans],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      silver: '#CAD4D1',
      rose: '#ECD2D0',
      lavendar: '#FFEBFF',
      yellow: '#EFFF3A',
      orange: '#FF3528',
      dark: '#141F21',
      gray: '#636E71',
      blue: '#0300AB',
      lightsilver: '#E4ECEE',
      emerald: '#138D77',
    },
    fontSize: {
      h1: ['70px', '70px'],
      h2: ['42px', '42px'],
      h3: ['38px', '38px'],
      h4: ['32px', '32px'],
      h5: ['22px', '22px'],
      h6: ['18px', '30px'],
      p1: ['20px', '32px'],
      p2: ['18px', '30px'],
      p3: ['16x', '28px'],
      button: ['18px', '30px'],
    },
    screens: {
      sm: '640px',
      md: '1024px',
      content: '1280px',
      lg: '1440px',
    },
  },
}
