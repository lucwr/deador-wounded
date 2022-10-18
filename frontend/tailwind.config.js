/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	// purge: {
	// 	enabled: true,
	// 	content: ['./**/*.html'],
	// },
	theme: {
		extend: {
			backgroundImage: {
				'hero-header': "url('src/assets/png/hero-image.png')",
			},
			transitionProperty: {
				width: 'width',
			},
			width: {
				'screen-width': '1440px',
			},
		},
		fontFamily: {
			body: ['IBM Plex Mono', 'Open Sans'],
			newRocker: ['New Rocker'],
			ibmPlexMono: ['IBM Plex Mono'],
			ibmPlexMonoBold: ['IBM Plex Mono Bold'],
			ibmPlexMonoThin: ['IBM Plex Mono Thin'],
			ibmPlexMonoLight: ['IBM Plex Mono Light'],
		},
		colors: {
			white: '#fff',
			black: '#000',
			eerieBlack: '#15191F',
			translucent: 'rgba(255,255,255,0.15);',
		},
		screens: {
			sm: '640px',
			// => @media (min-width: 640px) { ... }

			md: '768px',
			// => @media (min-width: 768px) { ... }

			lg: '1024px',
			// => @media (min-width: 1024px) { ... }

			xl: '1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
		},
	},
	plugins: [require('tailwind-scrollbar-hide')],
}
