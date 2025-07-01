/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        'auto':'repeat(auto-fit,minmax(200px,1fr))'
      }
   },
   colors: 
    { 'forest-green': '#1c594b' },
  
  },
  
  plugins: [],
}
