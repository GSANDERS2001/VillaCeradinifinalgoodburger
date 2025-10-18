import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "Arial"],
        serif: ["var(--font-serif)", "ui-serif", "Georgia", "Times New Roman"],
      },
      letterSpacing: {
        wider: "0.06em",
      },
    },
  },
  plugins: [],
};
export default config;
