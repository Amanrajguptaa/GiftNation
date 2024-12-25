/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        customBounce: "custom-bounce 2s infinite",
      },
      keyframes: {
        "custom-bounce": {
          "0%, 100%": {
            transform: "translateY(-10%)",
            animationTimingFunction: "ease-in-out",
          },
          "50%": {
            transform: "translateY(0)",
            animationTimingFunction: "ease-in",
          },
        },
      },
    },
  },
  plugins: [],
};
