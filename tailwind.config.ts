import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: "#3C44FF",
          yellow: "#FFF069",
          purple: "#D575FF",
          darkPurple: "#3D008E",
          teal: "#00808E",
        },
        surface: "#1A1A1A",
      },
    },
  },
  plugins: [],
};
export default config;