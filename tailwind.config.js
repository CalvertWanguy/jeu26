/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        town: {
          grass: "#48bb78",
          path: "#e2e8f0",
          roof1: "#e53e3e",
          roof2: "#3182ce",
          roof3: "#dd6b20",
          roof4: "#805ad5",
          roof5: "#d69e2e",
        }
      }
    },
  },
  plugins: [],
};
