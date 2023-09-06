/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: 'var(--font-sans)',
      serif: 'var(--font-serif)',
    },
    colors: {
      white: '#fff',
      primary: {
        DEFAULT: '#f97308',
        50: '#fdf3e9',
        100: '#fbe2c8',
        200: '#f8c69e',
        300: '#f5a374',
        400: '#f38a4c',
        500: '#f07324',
        600: '#dd5e0d',
        700: '#b4460d',
        800: '#922d0c',
        900: '#70140c',
        950: '#3F0A05',
      },
      gray: {
        50: '#fafafa',
        100: '#f4f4f5',
        200: '#e4e4e7',
        300: '#d4d4d8',
        400: '#a1a1aa',
        500: '#71717a',
        600: '#52525b',
        700: '#3f3f46',
        800: '#27272a',
        900: '#18181b',
      },
      success: {
        light: '#F0FDF4',
        DEFAULT: '#16A34A',
        dark: '#14532D',
      },
      error: {
        light: '#FEF2F2',
        DEFAULT: '#DC2626',
        dark: '#7f1d1d',
      },
      usp: {
        think: '#B50512',
        check: '#F97308',
        attend: '#0D672C',
      },
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
