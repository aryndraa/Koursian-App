/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                "Open-sauce": ["Open-sauce", "sans-serif"],
            },
            colors: {
                primary: "#704FE6",
                secondary: "#FFD25D",
                "light-primary": "#DEC8FE",
                "light-secondary": "#FFF0CC",
                text: "#25252B",
            },
        },
        fontSize: {
            xxs: "12px",
            xs: "14px",
            base: "16px",
            lg: "18px",
            "2lg": "20px",
            "3lg": "24px",
            xl: "32px",
            "2xl": "36px",
            "3xl": "40px",
            "4xl": "48px",
            "5xl": "64px",
            "6xl": "96px",
        },
    },
    daisyui: {
        themes: [
            {
                mytheme: {
                    primary: "#704FE6",
                    secondary: "#FFD25D",
                    "light-primary": "#DEC8FE",
                    "light-secondary": "#FFF0CC",
                },
            },
            "dark",
            "cupcake",
        ],
    },
    // eslint-disable-next-line no-undef
    plugins: [require("daisyui")],
};
