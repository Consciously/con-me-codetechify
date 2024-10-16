import type { Config } from 'tailwindcss';
import { withUt } from 'uploadthing/tw';

const config = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	prefix: '',
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			gridAutoRows: {
				'150': 'minmax(150px, auto)',
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				success: {
					DEFAULT: 'hsl(var(--success))',
					foreground: 'hsl(var(--success-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				primaryLightTransparent: {
					DEFAULT: 'rgba(20, 0, 11, 0.5)',
				},
				secondaryLightTransparent: {
					DEFAULT: 'rgba(122, 0, 65, 0.5)',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			fontSize: {
				'clamp-xl': 'clamp(2.5rem, 8vw, 4.8rem)',
				'clamp-lg': 'clamp(1.625rem, 7vw, 3.5rem)',
				'clamp-md': 'clamp(1.5rem, 6vw, 2.75rem)',
				'clamp-sm': 'clamp(1.25rem, 5vw, 2rem)',
				clamp: 'clamp(0.825rem, 4vw, 1rem)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
			lineClamp: {
				8: '8',
				10: '10',
				12: '12',
			},
		},
	},
	plugins: [
		require('tailwindcss-animate'),
		require('@tailwindcss/container-queries'),
	],
	// Safelist dynamically generated classes
	safelist: [
		{
			pattern: /grid-cols-.*/,
			variants: ['sm', 'md', 'lg', 'xl', '2xl'], // Add your breakpoints
		},
		{
			pattern: /gap-.*/,
			variants: ['sm', 'md', 'lg', 'xl', '2xl'],
		},
		{
			pattern: /col-span-.*/,
			variants: ['sm', 'md', 'lg', 'xl', '2xl'],
		},
	],
} satisfies Config;

export default withUt(config);
