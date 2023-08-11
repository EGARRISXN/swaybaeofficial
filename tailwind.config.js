module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  darkMode: "class",

  theme: {
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
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
        poppins: ["Poppins", "sans-serif"],
        lobster: ["Lobster", "cursive"],
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      height: {
        128: "32rem",
      },
      width: {
        128: "8rem",
        355: "22.1875rem",
        360: "22.5rem",
        365: "22.8125rem",
        370: "23.125rem",
        375: "23.4375rem",
        380: "23.75rem",
        385: "24.0625rem",
        390: "24.375rem",
        395: "24.6875rem",
        400: "25rem",
        500: "31.25rem",
        510: "31.875rem",
        520: "32.5rem",
        530: "33.125rem",
        535: "33.4375rem",
        540: "33.75rem",
        600: "37.5rem",
        700: "43.75rem",
        800: "50rem",
        900: "56.25rem",
      },
      minWidth: {
        "3/4": "75%",
        "1/2": "50%",
        "1/3": "33.333333%",
        "1/4": "25%",
      },
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        md: "3rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },

  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
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
      },
    ],
    darkTheme: "myDark",
    base: true,
    styled: true,
    utils: true,
  },
};
