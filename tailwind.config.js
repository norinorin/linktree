module.exports = {
  purge: {
    enabled: true,
    content: ['*.html'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        "gradient-shift": {
          "0%": { "background-position": "right" },
          "100%": { "background-position": "left" }
        }
      },
      animation: {
        "gradient-shift": "gradient-shift 5s ease alternate infinite"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
