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
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '300%' },
          '100%': { backgroundPosition: '0%' },
        },
        wave: {
          '0%': { opacity: '1' },
          '20%, 80%': { opacity: '0.5' },
          '40%, 60%': { opacity: '0.3' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        shimmer: 'shimmer 2.5s infinite',
        wave: 'wave 1.2s infinite ease-in-out',
      },
      backgroundImage: {
        'gradient-shimmer': 'linear-gradient(to right, #D0D0D0 0%, #EDEDED 50%, #D0D0D0 100%)',
      },
      backgroundSize: {
        custom: '300% 300%',
      },
    },
  },
  plugins: [],
};
export default config;
