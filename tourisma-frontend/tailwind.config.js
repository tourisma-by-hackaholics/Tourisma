/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cyan: "#51b3c3",
      },
    fontFamily: {
      display: ["Koulen", ...defaultTheme.fontFamily.sans],
      sans: ["Manrope", ...defaultTheme.fontFamily.sans],
    },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["emerald"],
  }
};
