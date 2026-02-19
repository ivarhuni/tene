/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{ts,tsx}'],
    theme: {
        extend: {
            colors: {
                'sunshine-300': '#FFE566',
                'sunshine-400': '#FFD700',
                'sunshine-500': '#FFA500',
                'sunshine-600': '#FF8C00',
                'sky-deep': '#0EA5E9',
                'sky-mid': '#0284C7',
                'ocean-blue': '#0369A1',
                'flip-dark': '#1E293B',
                'flip-mid': '#334155',
            },
            fontFamily: {
                sans: ['Montserrat', 'ui-sans-serif', 'system-ui'],
            },
            keyframes: {
                flipTop: {
                    '0%': { transform: 'rotateX(0deg)' },
                    '100%': { transform: 'rotateX(-90deg)' },
                },
                flipBottom: {
                    '0%': { transform: 'rotateX(90deg)' },
                    '100%': { transform: 'rotateX(0deg)' },
                },
            },
            animation: {
                'flip-top': 'flipTop 0.25s ease-in forwards',
                'flip-bottom': 'flipBottom 0.25s ease-out forwards',
            },
        },
    },
    plugins: [],
};
