/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: 'hsl(180, 66%, 49%)',
        darkCyan: 'hsl(180, 66%, 39%)', // Added a darker shade of cyan
        darkViolet: 'hsl(257, 27%, 26%)',
        red: 'hsl(0, 87%, 67%)',
        gray: 'hsl(0, 0%, 75%)',
        grayishViolet: 'hsl(257, 7%, 63%)',
        veryDarkBlue: 'hsl(255, 11%, 22%)',
        veryDarkViolet: 'hsl(260, 8%, 14%)',
      },
      fontFamily:{
        "Family": ['Poppins', 'sans-serif'],
      },
      backgroundImage:{
        "shortenerMobile": "url('images/bg-shorten-desktop.svg')",
        "shortenerDesktop": "url('images/bg-shorten-desktop.svg')",
      },
    },
  },
  plugins: [],
};
