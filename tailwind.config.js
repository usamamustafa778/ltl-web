module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#292779",
        secondary: "#FFB800",
        green: "#BDFF00",
      },
      backgroundImage:{
        banner: "url(/public/img/banner-bg.png)",
      },
      gridTemplateColumns:{
        listItem:"35px 1fr"
      }
    },
  },
  plugins: [],
};
