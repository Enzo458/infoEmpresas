/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'principal': '#4CAF50',
				'second': '#757575'
			}
		},
	},
	plugins: [],
}
