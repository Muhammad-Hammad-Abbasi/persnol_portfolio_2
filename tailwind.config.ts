import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        shine: 'shine 3s infinite',
        'slow-spin': 'spin 3s linear infinite',
      }, 
      keyframes: {
        shine: {
          '30%': { textShadow: '2px 2px 0 #000, 4px 4px 0 #000, 6px 6px 0 #df0d76, 8px 8px 0 #000, 0 0 10px rgba(189, 91, 164, 0.979)' },
          '50%': { textShadow: '2px 2px 0 #000, 4px 4px 0 #000, 6px 6px 0 #df0d76, 8px 8px 0 #000, 0 0 30px rgba(197, 117, 177, 0.979)' },
          '100%': { textShadow: '2px 2px 0 #000, 4px 4px 0 #000, 6px 6px 0 #df0d76, 8px 8px 0 #000, 0 0 15px rgba(189, 91, 164, 0.979)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
