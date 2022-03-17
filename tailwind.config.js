module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: '#f8db1c',
                secondary: '#263c70'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}