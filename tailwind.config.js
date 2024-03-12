/** @type {import('tailwindcss').Config} */
export default {
	content: ['./*.html'],
	theme: {
		extend: {
			screens: {
				xs: '425px',
			},
			backgroundColor: {
				card: '#F6F7F9',
			},
			backgroundImage: {
				main: "url('/assets/bg-main.png')",
			},
			colors: {
				'matte-black': '#212121',
				'custom-gray': '#C8C8C8',
				gold: '#C5A472',
				tosca: '#1BBC9B',
				card: '#6F6F6F',
				primary: '#D96704',
			},
			fontFamily: {
				lora: 'Lora',
				'dm-sans': 'DM Sans',
			},
		},
	},
	plugins: [],
};
