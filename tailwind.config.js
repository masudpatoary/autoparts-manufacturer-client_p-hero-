module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      "light",
      {
        extend: {
          backgroundImage: {
            'hero-pattern': "url('https://raw.githubusercontent.com/masudpatoary/lucky-1/main-1/assignment-12-manufacturer/404.jpg')",
          }
        }
      }

    ],
  },
  plugins: [require("daisyui")],
}