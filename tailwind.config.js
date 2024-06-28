/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "ping-slow": "ping 2s cubic-bezier(0, 0, 0.2, 0.8) infinite",
        "ping-fast": "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
        "pulse-custom": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      gridTemplateColumns: {
        // Custom value for 2fr 1fr
        "custom-2fr-1fr": "2fr 1fr",
      },
      keyframes: {
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.1" },
        },
        ping: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
