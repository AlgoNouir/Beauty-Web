/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            pink: "#FFC4E1",
            grey: "#7F8487",
            back: "#EEE",
            white: "#FFF",
        },
    },
    plugins: [],
};
