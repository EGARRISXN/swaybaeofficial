/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  darkMode: "class",

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
      opacity: {
        0: "0",
        20: "0.2",
        40: "0.4",
        60: "0.6",
        80: "0.8",
        100: "1",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-roboto-mono)"],
      },
      width: {
        355: "355px",
        360: "360px",
        365: "365px",
        370: "370px",
        375: "375px",
        380: "380px",
        385: "385px",
        390: "390px",
        395: "395px",
        400: "400px",
        500: "500px",
        510: "510px",
        520: "520px",
        530: "530px",
        535: "535px",
        540: "540px",
        600: "600px",
        700: "700px",
        800: "800px",
        900: "900px",
      },
    },
  },

  plugins: [require("daisyui")],

  daisyui: {
    themes: ["synthwave", "cupcake"],
    darkTheme: "synthwave",
    base: true,
    styled: true,
    utils: true,
  },
};
