/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'principal': '#7BCF77',
				'second': 'rgb(47 38 50 / 98%)',
				'ter': 'rgb(1 58 24)'
			}
		},
	},
	plugins: [],
}
