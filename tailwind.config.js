/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./app/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#5669FF',
				white: '#ffffff',
				white2: '#fcfcfc',
				text: '#120D26',
				gray: '#807A7A',
				gray2: '#DADADA',
				gray3: '#E4DFDF',
				gray4: '#9d9898',
				gray5: '#d9d9d9',
				link: '#5669FF',
				danger: '#e74c3c',
			},
			fontSize: {
				xs: 12,
				sm: 16,
				base: 18,
				lg: 24,
			},
			padding: {
				screenPadding: 24,
			},
			fontFamily: {
				regular: 'AirbnbCereal_W_Lt',
				medium: 'AirbnbCereal_W_Md',
				semiBold: 'AirbnbCereal_W_Bd',
				bold: 'AirbnbCereal_W_XBd',
			},
		},
	},
	plugins: [],
}
