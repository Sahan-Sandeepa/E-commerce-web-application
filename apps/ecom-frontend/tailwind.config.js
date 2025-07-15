const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html,scss}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb', // or your desired color (blue-600)
        secondary: '#6b7280', // optional, if you use it
        base: {
          100: '#f5f5f5',
          200: '#e5e7eb',
          300: '#d1d5db',
        },
      },
    },
  },
  plugins: [],
};
