module.exports = {
  mode: "jit",
  content: ["./**/*.html", "./src/**/*.css", "./js/**/*.js"], //寫在這裡
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        primary: "#406951",
        text: "#666666",
        gary: "#00000099",
        highlight: "#FAF7EC",
        peach: "#EFA2A2",
        lightGray: "#999999",
        secondary: "#CCCCCC",
      },
      fontFamily: {
        "noto-sans": "Noto Sans TC",
      },
    },
  },
  plugins: [],
};
