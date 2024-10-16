import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        whiteSmoke: '#F5F5F5',
        yogoGreen: '#01A69F',
        medium_gray: '#979797',
        lightGray: '#ADB5BD',
      },
    },
  },
  plugins: [],
};
export default config;
