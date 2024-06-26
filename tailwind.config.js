module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        window: '#1a1a1a', // Define your primary color
        backgroundColor: '#0a0a0a', // Define your secondary color
        // Add more custom colors if needed
      },
    },
  },
  plugins: [],
}
