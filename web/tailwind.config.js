module.exports = {
  content: ["./index.html", "./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand: {
          500: "#8257E6",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
