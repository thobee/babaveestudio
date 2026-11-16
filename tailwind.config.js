/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0C0A09", // page background (warm near-black)
          900: "#0C0A09",
          800: "#151210", // raised surface
          700: "#1D1915", // card surface
          600: "#2A2520", // hover / input surface
        },
        orange: {
          DEFAULT: "#FF6B2B",
          400: "#FF8550",
          500: "#FF6B2B",
          600: "#E85A1C",
        },
        mute: "#A8A29E", // secondary text (≥ 7:1 on ink)
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
      },
      maxWidth: {
        page: "1200px",
      },
      boxShadow: {
        // layered shadows instead of depth borders
        card: "0 0 0 1px rgb(255 255 255 / 0.06), 0 1px 2px rgb(0 0 0 / 0.4), 0 8px 24px -8px rgb(0 0 0 / 0.5)",
        lift: "0 0 0 1px rgb(255 255 255 / 0.1), 0 2px 4px rgb(0 0 0 / 0.4), 0 24px 48px -16px rgb(0 0 0 / 0.7)",
        cta: "inset 0 1px 0 rgb(255 255 255 / 0.25), 0 1px 2px rgb(0 0 0 / 0.3), 0 8px 20px -6px rgb(255 107 43 / 0.45)",
      },
    },
  },
  plugins: [],
};
