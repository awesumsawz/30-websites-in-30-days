import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: {
                    light: '#03d898',
                    DEFAULT: '#03a678',
                    hover: '#02745f',
                    dark: '#014141',
                },
                secondary: {
                    light: '#fcb336',
                    DEFAULT: '#f07605',
                    hover: '#721703',
                    dark: '#360302',
                },
                gray: {
                    light: '#CCCCCC',
                    mid: '#999999',
                    dark: '#666666',
                },
                black: {
                    DEFAULT: '#333333',
                    true: '#000000',
                },
                white: '#FFFFFF',
            },
        },
    },

    plugins: [forms],
};
