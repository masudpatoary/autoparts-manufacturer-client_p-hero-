module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        valeyTheme: {
          primary: "#DD4E2F",
          secondary: "#19D3AE",
          accent: "#6BF832",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
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