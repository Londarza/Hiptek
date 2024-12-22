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
        background: "var(--background)",
        foreground: "var(--foreground)",
        "prim-green": "#556B2F",
        "prim-grey": "#2F4F4F",
        "prim-bone": "#FAF9F6",
        "prim-cober": "#B87333",
        "sec-green": "#9EA88F",
        "sec-grey": "#D3D3D3",
        "sec-blue": "#35524A",
        "sec-brown": "#C3B091"
      },
    },
  },
  plugins: [],
};
export default config;
