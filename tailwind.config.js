/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "#1A1A29",
        primary: "#13C9D4",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1060px",
        xl: "1280px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

