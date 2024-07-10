/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		
		  
		fontFamily:{
			fontFamily: {
				'zen-kaku-gothic-new': ['"Zen Kaku Gothic New"', 'sans-serif'],
			  },
			  
		},

		colors:{
			'color1':"#D9D9D9",
			'color2':"#000000",
			'color3':"#FFFFFF",
			'color4':'#3835A3',
			'colorFondoInicio':"#F8F8F8",
			'color6':"#9E9E9E",
			'color7': "#FF0000",
		},
		extend: {},
	},
	plugins: [],
}
