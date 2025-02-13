import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';
import aspectRatio from '@tailwindcss/aspect-ratio';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				'Montserrat': ['Montserrat',],
			  },
		}
	},

	plugins: [typography, forms, containerQueries]
} satisfies Config;



const config = {
	// ... other properties
	plugins: [
		// ...other plugins
		aspectRatio,
		addVariablesForColors
	]
};

function addVariablesForColors({ addBase, theme }: any) {
	let allColors = flattenColorPalette(theme('colors'));
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);

	addBase({
		':root': newVars
	});
}
// tailwind.config.js