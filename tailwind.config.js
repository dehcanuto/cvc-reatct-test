module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#f8db1c',
                    500: '#4e69a6'
                },
                secondary: '#263c70'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}