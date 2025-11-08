import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        gold: "#d4af37",
        cream: "#f5f1e8",
        brown: "#3e3226",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
        serif: ["var(--font-serif)", "Playfair Display", "serif"],
      },
      boxShadow: {
        subtle: "0 25px 50px -12px rgba(62, 50, 38, 0.15)",
      },
    },
  },
  plugins: [],
}

export default config
