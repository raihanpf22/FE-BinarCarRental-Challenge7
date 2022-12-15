module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue-05": "#091B6F",
        "dark-blue-04": "#0D28A6",
        "dark-blue-03": "#5E70C4",
        "dark-blue-02": "#AEB7E1",
        "dark-blue-01": "#CFD4ED",
        "base-color-grey": "#F1F3FF",
        "lime-green-05": "#3D7B3F",
        "lime-green-04": "#5CB85F",
        "lime-green-03": "#92D094",
        "lime-green-02": "#C9E7CA",
        "lime-green-01": "#DEF1DF",
        "alert-danger": "#FA2C5A",
        "alert-warning": "#F9CC00",
        "alert-success": "#73CA5C",
        "neutral-05": "#151515",
        "neutral-04": "#3C3C3C",
        "neutral-03": "#8A8A8A",
        "neutral-02": "#D0D0D0",
        "neutral-01": "#FFFFFF",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
