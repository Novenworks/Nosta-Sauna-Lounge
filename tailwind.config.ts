import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ember: { 50: "#f7f1e8", 100: "#eadcc8", 200: "#d4b48a", 300: "#c19662", 400: "#b07a45", 500: "#8f5a2c" },
        soot: { 900: "#100d0b", 800: "#1c1612", 700: "#2a221c", 600: "#3a2f26" },
      },
      fontFamily: { display: ["Fraunces", "Georgia", "serif"], sans: ["Sora", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};
export default config;
