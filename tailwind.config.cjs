module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#00f0ff",
        bg: "#0b0f14",
        card: "#0f1720",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
