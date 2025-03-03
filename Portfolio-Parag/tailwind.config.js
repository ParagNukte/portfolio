/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".mask-gradient": {
            "-webkit-mask-image":
              "radial-gradient(circle, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 0) 100%)",
            "mask-image":
              "radial-gradient( circle , rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0) 100%)",
          },
        },
        ["responsive", "hover"]
      );
    },
  ],
};
