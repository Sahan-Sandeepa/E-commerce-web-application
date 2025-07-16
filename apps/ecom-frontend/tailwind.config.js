const { createGlobPatternsForDependencies } = require('@nx/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html,scss}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        secondary: '#6b7280',
        base: {
          100: '#f5f5f5',
          200: '#e5e7eb',
          300: '#d1d5db',
          dark100: '#1e293b', // or whatever suits
        },
      }
    },
  },
  plugins: [],
};
