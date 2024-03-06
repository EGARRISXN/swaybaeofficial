/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sanity/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'selector',
  theme: {
    screens: {
      xs: '360px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1420px',
      '3xl': '1600px',
      '4xl': '1920px',
    },
    aspectRatio: {
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      9: '9',
      16: '16',
    },
    corePlugins: {
      aspectRatio: false,
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        lobster: ['Lobster', 'cursive'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        myDark: {
          primary: '#00ceff',
          secondary: '#b567ad',
          accent: '#418192',
          neutral: '#444442',
          info: '#330f5f',
          'base-100': '#fff',
          'base-content': '#000',
        },
        myLight: {
          primary: '#b567ad',
          secondary: '#00ceff',
          accent: '#ffd801',
          neutral: '#ffffff',
          info: '#c085df',
          'base-100': '#000',
          'base-content': '#fff',
        },
      },
    ],
    darkTheme: 'myDark',
  },
}
