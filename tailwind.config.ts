import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors : {
        redProject : '#a45454',
        brown : {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#a18072',
          700: '#977669',
          800: '#846358',
          900: '#43302b',
        }
      }
    },
    keyframes : {
      jumpViewDownMenu : {
        '0%' : {transform : 'translateY(30px)',opacity : '0'},
        '100%' : {transform : 'translateY(0px)' , opacity: '1'}
      }
    },
    animation : {
      jumpViewDownMenu : 'jumpViewDownMenu 0.3s'
    }
  },
  plugins: [],
};
export default config;
