import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");




export default withMT({
  content: [
    "./apppages/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
}) satisfies Config;
