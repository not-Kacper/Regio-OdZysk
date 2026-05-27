/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				brand: {
					white: '#ffffff',
					paper: '#f6f9fc',
					gray: '#e9eef5',
					blue: '#0ea5e9', // woda
					'blue-soft': '#e5f4ff',
					'blue-dark': '#075985',
					green: '#16a34a', // cyrkularność, środowisko
					'green-dark': '#15803d',
					dark: '#061432'
				}
			},
			fontFamily: {
				sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
			}
		},
	},
	plugins: [],
};
