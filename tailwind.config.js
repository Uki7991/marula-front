/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./app.vue",
    ],
    theme: {
        extend: {
            maxWidth: {
                '1/3': '33.333333%',
                '2/3': '66.666667%',
            },
            fontFamily: {
                'utility': ['"Proxima Nova"'],
                'description': ['"Proxima Nova"'],
                'title': ['Slack'],
            },
            colors: {
                white: '#FCFAE2',
                black: '#100F0F',
                dark: '#373535',
                gray: {
                    50: '#CACACA',
                },
                sand: '#D08B4B',
            }
        },

    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}

