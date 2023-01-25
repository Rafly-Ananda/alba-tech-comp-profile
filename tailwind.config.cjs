/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        texture: "url('/src/assets/texture.svg')",
        textureTestimonial: "url('/src/assets/texture-testimonial.svg')",
      },
      boxShadow: {
        "nav-shadow": "0px 4px 10px rgba(0, 0, 0, 0.05)",
      },
    },
    fontFamily: {
      display: ["Noto Sans", "sans-serif"],
    },
  },
  plugins: [],
};
