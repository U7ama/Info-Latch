/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans' : 'sans-serif',
        'poppins': ["poppins"],
        'overlock': ['Overlock'],
        'heading' : ['Josefin Sans']
      },
      colors: {
        primary: '#222831',
        secondary: '#fff',
        tirtry: '#037ba5',
        forth: '#102C57',
        fifth: "#f4f7f2"
      },
      
     },
   },
  plugins: [],
}
