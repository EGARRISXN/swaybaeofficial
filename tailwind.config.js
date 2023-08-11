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
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        lobster: ["Lobster", "cursive"],
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      height: {
        128: "32rem",
        144: "36rem",
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
        "4/5": "80%",
        "3/4": "75%",
        "2/3": "66.666667%",
        "1/2": "50%",
        "1/3": "33.333333%",
        "1/4": "25%",
        "1/5": "20%",
      },
    },
  },

  plugins: [require("daisyui")],

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
