import type {Config} from 'tailwindcss';
import {colors} from './styles/colors';

const { fontFamily } = require('tailwindcss/defaultTheme') as typeof import('tailwindcss/defaultTheme');


const tailwindConfig = {
    darkMode: 'class',
    content: [
        './components/**/*.{js,jsx,ts,tsx}',
        './pages/**/*.{md,mdx}',
        './theme.config.tsx',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: 'var(--font-sans)',
                'space-grotesk': ['Space Grotesk', 'monospace'],
                mono: [
                    'Menlo',
                    'Monaco',
                    'Lucida Console',
                    'Liberation Mono',
                    'DejaVu Sans Mono',
                    'Bitstream Vera Sans Mono',
                    'Courier New',
                    'monospace',
                ],
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            colors: {
                transparent: 'transparent',
                white: '#ffffff',
                black: '#000000',
                background: {
                    light: '#ffffff',
                    DEFAULT: '#ffffff',
                    dark: '#000000',
                },
                foreground: {
                    light: '#11181C',
                    DEFAULT: '#11181C',
                    dark: '#ECEDEE',
                },
                border: {
                    light: '#00000026',
                    DEFAULT: '#00000026',
                    dark: '#ffffff26',
                },
                neutral: {
                    ...colors.neutral,
                    DEFAULT: colors.neutral[500],
                },
                primary: {
                    light: colors.blue[200],
                    DEFAULT: colors.blue[500],
                    dark: colors.blue[500],
                },
                secondary: {
                    light: colors.purple[200],
                    DEFAULT: colors.purple[500],
                    dark: colors.purple[400],
                },
                success: {
                    light: colors.green[200],
                    DEFAULT: colors.green[500],
                    dark: colors.green[500],
                },
                warning: {
                    light: colors.yellow[400],
                    DEFAULT: colors.yellow[500],
                    dark: colors.yellow[700],
                },
                error: {
                    light: colors.red[200],
                    DEFAULT: colors.red[500],
                    dark: colors.red[500],
                },
                red: {
                    ...colors.red,
                    DEFAULT: colors.red[500],
                },
                yellow: {
                    ...colors.yellow,
                    DEFAULT: colors.yellow[500],
                },
                green: {
                    ...colors.green,
                    DEFAULT: colors.green[500],
                },
                blue: {
                    ...colors.blue,
                    DEFAULT: colors.blue[500],
                },
                purple: {
                    ...colors.purple,
                    DEFAULT: colors.purple[500],
                },
                pink: {
                    ...colors.pink,
                    DEFAULT: colors.pink[500],
                },
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                // background: 'hsl(var(--background))',
                // foreground: 'hsl(var(--foreground))',
                // primary: {
                //     DEFAULT: 'hsl(var(--primary))',
                //     foreground: 'hsl(var(--primary-foreground))',
                // },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
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
                    hovered: 'hsl(var(--card-hovered))',
                    foreground: 'hsl(var(--card-foreground))',
                },

            },
            animation: {
                appear: 'appear 0.5s ease forwards',
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
            boxShadow: {
                beginner: '0 0 1rem -0.15rem hsl(var(--difficulty-beginner))',
                easy: '0 0 1rem -0.15rem hsl(var(--difficulty-easy))',
                medium: '0 0 1rem -0.15rem hsl(var(--difficulty-medium))',
                hard: '0 0 1rem -0.15rem hsl(var(--difficulty-hard))',
                extreme: '0 0 1rem -0.15rem hsl(var(--difficulty-extreme))',
                'beginner-dark': '0 0 1rem -0.15rem hsl(var(--difficulty-beginner-dark))',
                'easy-dark': '0 0 1rem -0.15rem hsl(var(--difficulty-easy-dark))',
                'medium-dark': '0 0 1rem -0.15rem hsl(var(--difficulty-medium-dark))',
                'hard-dark': '0 0 1rem -0.15rem hsl(var(--difficulty-hard-dark))',
                'extreme-dark': '0 0 1rem -0.15rem hsl(var(--difficulty-extreme-dark))',
            },
            keyframes: {
                appear: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
            },
        },
    },
    plugins: [
        require('tailwindcss-animate'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/container-queries'),
    ],
} satisfies Config;

export default tailwindConfig;
