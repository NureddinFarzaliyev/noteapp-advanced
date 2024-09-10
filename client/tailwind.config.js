/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: 'var(--text-color)',
            a: {
              color: 'var(--accent-color)', // Accent color for links
              '&:hover': {
                color: theme('colors.blue.600'),
              },
            },
            h1: { color: 'var(--text-color)' }, 
            h2: { color: 'var(--text-color)' },
            h3: { color: 'var(--text-color)' },
            strong: { color: 'var(--text-color)' }, 
            blockquote: { borderColor: 'var(--accent-color)' }, 
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}