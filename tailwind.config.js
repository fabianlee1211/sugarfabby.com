module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui'],
      },
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary)',
          dark: 'var(--color-primary-dark)',
          darkest: 'var(--color-primary-darker)',
        },
        dark: {
          DEFAULT: 'var(--color-darkMode)',
          dark: 'var(--color-darkMode-dark)',
        },
        background: {
          DEFAULT: 'var(--color-background)',
          dark: 'var(--color-background-dark)',
        },
        footer: 'var(--color-background-footer)',
        code: '#addb67',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
