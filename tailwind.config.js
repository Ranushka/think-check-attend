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
        DEFAULT: '#d49741',
        50: '#fff3ce',
        100: '#fbdfa5',
        200: '#f7cc7c',
        300: '#f4b852',
        400: '#f0a529',
        500: '#ec9100',
        600: '#ce7e00',
        700: '#b06a00',
        800: '#915700',
        900: '#734300',
        950: '#553000',
      },
      green: {
        50: '#DEEAAE',
        100: '#CDDFA4',
        200: '#BBD49A',
        300: '#AAC990',
        400: '#88B47C',
        500: '#659E67',
        600: '#54935D',
        700: '#438953',
        800: '#327E49',
        900: '#20733F',
        950: '#0F6835',
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
