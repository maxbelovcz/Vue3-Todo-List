/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/App.vue',
    './src/components/*.vue'
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['CormorantInfantBold', 'CormorantInfantRegular'],
      },
    },
  },
  plugins: [],
}

