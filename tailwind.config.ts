import type { Config } from "tailwindcss";
import defaultColors from "tailwindcss/colors";

const custom_colors = {
  ...defaultColors,
  primary: {
    700: "#2B4EA9",
    600: "#629AFF",
  }
}

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...custom_colors
      },
    },
    container: {
			center: true,
			screens: {
				xl: '1200px'
			}
		},
  },
  plugins: [],
} satisfies Config;
