const colors = require("tailwindcss/colors"); // Import the colors module

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
      "3xl": "1800px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        md: "3rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
        "3xl": "7rem",
        "4xl": "8rem",
      },
      opacity: {
        0: "0",
        10: "0.1",
        20: "0.2",
        30: "0.3",
        40: "0.4",
        50: "0.5",
        60: "0.6",
        70: "0.7",
        80: "0.8",
        90: "0.9",
        100: "1",
      },
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        lobster: ["Lobster", "cursive"],
        neonderthaw: ["Neonderthaw", "cursive"],
      },
      colors: {
        "neon-slate": colors.slate[500],
        "neon-gray": colors.gray[500],
        "neon-zinc": colors.zinc[500],
        "neon-neutral": colors.neutral[500],
        "neon-stone": colors.stone[500],
        "neon-red": colors.red[500],
        "neon-orange": colors.orange[500],
        "neon-amber": colors.amber[500],
        "neon-yellow": colors.yellow[500],
        "neon-lime": colors.lime[500],
        "neon-green": colors.green[500],
        "neon-emerald": colors.emerald[500],
        "neon-teal": colors.teal[500],
        "neon-cyan": colors.cyan[500],
        "neon-sky": colors.sky[500],
        "neon-blue": colors.blue[500],
        "neon-indigo": colors.indigo[500],
        "neon-violet": colors.violet[500],
        "neon-purple": colors.purple[500],
        "neon-fuchsia": colors.fuchsia[500],
        "neon-pink": colors.pink[500],
        "neon-rose": colors.rose[500],
      },
      height: {
        100: "25rem",
        104: "26rem",
        108: "27rem",
        112: "28rem",
        116: "29rem",
        120: "30rem",
        124: "31rem",
        128: "32rem",
        132: "33rem",
        136: "34rem",
        140: "35rem",
        144: "36rem",
        148: "37rem",
        152: "38rem",
        156: "39rem",
        160: "40rem",
        164: "41rem",
        168: "42rem",
        172: "43rem",
        176: "44rem",
        180: "45rem",
        184: "46rem",
        188: "47rem",
        192: "48rem",
      },
      width: {
        100: "25rem",
        104: "26rem",
        108: "27rem",
        112: "28rem",
        116: "29rem",
        120: "30rem",
        124: "31rem",
        128: "32rem",
        132: "33rem",
        136: "34rem",
        140: "35rem",
        144: "36rem",
        148: "37rem",
        152: "38rem",
        156: "39rem",
        160: "40rem",
        164: "41rem",
        168: "42rem",
        172: "43rem",
        176: "44rem",
        180: "45rem",
        184: "46rem",
        188: "47rem",
        192: "48rem",
      },
      minWidth: {
        "1/1": "100%",
        "4/5": "80%",
        "3/4": "75%",
        "2/3": "66.666667%",
        "3/5": "60%",
        "1/2": "50%",
        "2/5": "40%",
        "1/3": "33.333333%",
        "1/4": "25%",
        "1/5": "20%",
      },
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        md: "3rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
        "3xl": "7rem",
        "4xl": "8rem",
      },
    },
  },

  plugins: [require("@tailwindcss/typography"), require("daisyui")],

  daisyui: {
    themes: [
      {
        myDark: {
          primary: "#00ceff",
          secondary: "#b567ad",
          accent: "#418192",
          neutral: "#444442",
          "base-100": "#ffffff",
          info: "#330f5f",
          success: "#fd509d",
          warning: "#c085df",
          error: "#ffd801",
          "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "4rem", // border radius rounded-btn utility class, used in buttons and similar element
          "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
          "--animation-btn": "0.25s", // duration of animation when you click on button
          "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
          "--btn-text-case": "uppercase", // set default text transform for buttons
          "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
          "--border-btn": "1px", // border width of buttons
          "--tab-border": "1px", // border width of tabs
          "--tab-radius": "0.5rem", // border radius of tabs
          "--navbar-padding": ".5rem", // navbar vertical padding
        },
        myLight: {
          primary: "#b567ad",
          secondary: "#00ceff",
          accent: "#ffd801",
          neutral: "#ffffff",
          "base-100": "#444442",
          info: "#c085df",
          success: "#ffd801",
          warning: "#330f5f",
          error: "#fd509d",
          "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "4rem", // border radius rounded-btn utility class, used in buttons and similar element
          "--rounded-badge": "1.9rem", // border radius rounded-badge utility class, used in badges and similar
          "--animation-btn": "0.25s", // duration of animation when you click on button
          "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
          "--btn-text-case": "uppercase", // set default text transform for buttons
          "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
          "--border-btn": "1px", // border width of buttons
          "--tab-border": "1px", // border width of tabs
          "--tab-radius": "0.5rem", // border radius of tabs
          "--navbar-padding": ".5rem", // navbar vertical padding
        },
      },
    ],
    darkTheme: "myDark",
    base: true,
    styled: true,
    utils: true,
  },
};
