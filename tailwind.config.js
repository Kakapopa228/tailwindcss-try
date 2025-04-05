/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
		screens: {
			'xl': '1440px',
			'lg': '1024px'
		},
    extend: {
			colors: {
				'almost-white': 'hsl(0, 0%, 98%)',
				'medium-grey': 'hsl(0, 0%, 41%)',
				'almost-black': 'hsl(0, 0%, 8%)'
			}
		},
  },
  plugins: [],
}

