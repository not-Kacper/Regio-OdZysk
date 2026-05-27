/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				brand: {
					white: '#ffffff',
					gray: '#f3f4f6', // jasnoszary
					blue: '#0ea5e9', // woda
					'blue-dark': '#0369a1',
					green: '#10b981', // cyrkularność, środowisko
					'green-dark': '#047857',
					dark: '#111827'
				}
			},
			fontFamily: {
				sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
			}
		},
	},
	plugins: [],
};