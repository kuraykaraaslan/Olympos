import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui"), require('@tailwindcss/forms')],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#00bedd",

          "secondary": "#007cff",

          "accent": "#eb6400",

          "neutral": "#110c0b",

          "base-100": "#262626",

          "info": "#00c8ff",

          "success": "#00a100",

          "warning": "#b86400",

          "error": "#ff779c",
        },
      },
    ],
  },
};
export default config;
