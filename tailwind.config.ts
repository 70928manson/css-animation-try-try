import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        steam: {
          '0%': { 
            transform: 'translateY(0) scaleX(1)',
            opacity: '0'
          },
          '15%': {
            opacity: '1'
          },
          '50%': { transform: 'translateY(-150px) scaleX(5)' },
          '95%': {
            opacity: '0'
          },
          '100%': { transform: 'translateY(-300px) scaleX(10)' },
        },
        water: {
          '0%': {
            clipPath: 'polygon(0% 45%, 15% 44%, 32% 50%, 54% 60%, 70% 61%, 84% 59%, 100% 52%, 100% 100%, 0% 100%)'
          }, 
          '50%': {
            clipPath: 'polygon(0% 75%, 16% 65%, 34% 66%, 51% 62%, 67% 50%, 84% 45%, 100% 46%, 100% 100%, 0% 100%)'
          },
          '100%': {
            clipPath: 'polygon(0% 45%, 15% 44%, 32% 50%, 54% 60%, 70% 61%, 84% 59%, 100% 52%, 100% 100%, 0% 100%)'
          }
        }
      },
      animation: {
        'steam-up': 'steam 5s linear infinite',
        'water': 'water 4s ease-in-out infinite'
      },
      //1 3 16 5 20 6 7 10 8 17 11 12 13 14 2 9 15 4 19
      // *-500
      animationDelay: {
        1: "-500ms",
        2: "-1000ms",
        3: "-1500ms",
        4: "-2000ms",
        5: "-2500ms",
        6: "-3000ms",
        7: "-3500ms",
        8: "-4000ms",
        9: "-4500ms",
        10: "-5000ms",
        11: "-5500ms",
        12: "-6000ms",
        13: "-6500ms",
        14: "-7000ms",
        15: "-7500ms",
        16: "-8000ms",
        17: "-8500ms",
        18: "-9000ms",
        19: "-9500ms",
      }
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
  ],
};
export default config;
