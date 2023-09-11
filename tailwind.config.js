module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  darkMode: "class",

  theme: {
    screens: {
      xs: "360px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1420px",
      "3xl": "1600px",
      "4xl": "1920px",
    },
    aspectRatio: {
      auto: 'auto',
      square: '1 / 1',
      video: '16 / 9',
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
      13: "13",
      14: "14",
      15: "15",
      16: "16",
      18: "18",
      20: "20",
      22: "22",
      24: "24",
      26: "26",
      28: "28",
      30: "30",
    },
    variants: {
      aspectRatio: ["responsive", "hover"],
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        lobster: ["Lobster", "cursive"],
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require("daisyui"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],

  daisyui: {
    themes: [
      {
        myDark: {
          primary: "#00ceff",
          secondary: "#b567ad",
          accent: "#418192",
          neutral: "#444442",
          "base-100": "#fff",
          "base-content": "#000",
          info: "#330f5f",
          success: "#fd509d",
          warning: "#c085df",
          error: "#ffd801",
        },
        myLight: {
          primary: "#b567ad",
          secondary: "#00ceff",
          accent: "#ffd801",
          neutral: "#ffffff",
          "base-100": "#000",
          "base-content": "#fff",
          info: "#c085df",
          success: "#ffd801",
          warning: "#330f5f",
          error: "#fd509d",
        },
      },
    ],
    darkTheme: "myDark",
    base: true,
    styled: true,
    utils: true,
  },
};
