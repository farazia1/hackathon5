import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens:{
        'xl':'1440px',
        'smx':'390px',

      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        integral: "Integral CF', 'sans-serif",
        'custom-black': 'rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
} satisfies Config;
