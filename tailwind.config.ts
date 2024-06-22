import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";
const plugin = require('tailwindcss/plugin')

import { PluginCreator } from 'tailwindcss/types/config';

const containerPlugin: PluginCreator = ({ addComponents }) =>
  addComponents({
    '.selectContainer': {
      position:'absolute',
      width : '400px',
      maxHeight : '200px',
      left: '0px',
      top : '32px',
      overflow : 'auto',
      zIndex:'2',
      padding: '6px',
    }
  });

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors : {
        redProject : '#9B4444',
        redLightProject : '#C68484',
        greenProject : '#A3C9AA',
        greyProject : '#EEEEEE',
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
  plugins: [containerPlugin],
};
export default config;
