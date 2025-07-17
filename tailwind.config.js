/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        custom: '-1.216px 6.894px 25px 0 rgba(0, 0, 0, 0.07)',
      },
    },
  },
};

// tailwind.config.ts
// export const theme = {
//   extend: {
//     fontFamily: {
//       sans: ['Inter', 'sans-serif'],
//     },
//   },
// };

