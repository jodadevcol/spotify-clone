/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"back-base": "#121212",
				"back-highlight": "#1a1a1a",
				"txt-base": "#fff",
				"txt-subdued": "#a7a7a7",

				// "": "",
				// --background-press: #000;
				// --background-elevated-base: #242424;
				// --background-elevated-highlight: #2a2a2a;
				// --background-elevated-press: #000;
				// --background-tinted-base: hsla(0,0%,100%,.07);
				// --background-tinted-highlight: hsla(0,0%,100%,.1);
				// --background-tinted-press: hsla(0,0%,100%,.04);
				// --background-unsafe-for-small-text-base: #121212;
				// --background-unsafe-for-small-text-highlight: #121212;
				// --background-unsafe-for-small-text-press: #121212;
				// --
				// --text-subdued: ;
				// --text-bright-accent: #1ed760;
				// --text-negative: #f15e6c;
				// --text-warning: #ffa42b;
				// --text-positive: #1ed760;
				// --text-announcement: #3d91f4;
				// --essential-base: #fff;
				// --essential-subdued: #727272;
				// --essential-bright-accent: #1ed760;
				// --essential-negative: #e91429;
				// --essential-warning: #ffa42b;
				// --essential-positive: #1ed760;
				// --essential-announcement: #0d72ea;
				// --decorative-base: #fff;
				// --decorative-subdued: #292929;

			}
		},
	},
	plugins: [],
}
