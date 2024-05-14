import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "azul-claro": "#BFDBF7",
        "azul-escuro": "#022B3A",
        "azul-medio": "#1F7A8C",
        "cinza-claro": "#E1E5F2",
      }
    },
  },
  plugins: [],
};
export default config;
