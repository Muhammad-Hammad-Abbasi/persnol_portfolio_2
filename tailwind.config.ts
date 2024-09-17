import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
    keyframes: {
      flipUp: {
        '0%': { transform: 'rotateX(90deg)', opacity: '0' },
        '100%': { transform: 'rotateX(0deg)', opacity: '1' },
      },
    },
    animation: {
      'flip-up': 'flipUp 1s ease-in-out forwards',
    },
  },
},
  plugins: [],
};
export default config;
