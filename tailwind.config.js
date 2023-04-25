/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,js,tsx,jsx}"],
  theme: {
    extend: {
      colors:{
        black:"#000000",
        white:"#ffffff",
        accent:"#585b56",
        link:"#0096FF",
        linkHover:"#005da0"
      },
    },
  },
  plugins: [],
}

