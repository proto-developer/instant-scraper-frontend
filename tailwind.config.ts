import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A84FF",
        darkPrimary: "#5E5CE6",
        darkLight: "#1C1C1E",
        grayBorder: "#3A3A3C",
        placeholder: "#E5E5E585",
      },
      backgroundImage: {
        primaryGradient: "linear-gradient(to right, #0A84FF, #5E5CE6)",
      },
      screens: {
        sm: "770px",  // Set the "sm" breakpoint to start from 770px
      },
    },
  },
  plugins: [],
} satisfies Config;
