/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#0001bb",
        "on-primary": "#ffffff",
        outline: "#757589",
        "on-background": "#00006e",
        "surface-variant": "#e0e0ff",
        "on-surface": "#00006e",
        "surface-container-high": "#e7e6ff",
        "on-surface-variant": "#454558",
        surface: "#fbf8ff",
        background: "#fbf8ff",
        "surface-container": "#eeecff",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f5f2ff",
        "surface-container-highest": "#e0e0ff",
      },
      borderRadius: {
        DEFAULT: "0px",
        lg: "0px",
        xl: "0px",
        full: "9999px",
      },
      spacing: {
        "border-width": "2px",
        unit: "4px",
        gutter: "0px",
        "margin-page": "24px",
        "container-max": "1440px",
      },
      fontFamily: {
        "headline-lg-mobile": ["Playfair Display"],
        "body-lg": ["Space Mono"],
        "headline-lg": ["Playfair Display"],
        "label-caps": ["Space Mono"],
        "headline-md": ["Playfair Display"],
        "body-md": ["Space Mono"],
        "display-xl": ["Playfair Display"],
      },
      fontSize: {
        "headline-lg-mobile": [
          "clamp(1.75rem, 5vw + 0.5rem, 2.5rem)",
          { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        "body-lg": ["18px", { lineHeight: "24px", fontWeight: "400" }],
        "headline-lg": [
          "clamp(2rem, 4vw + 0.75rem, 4rem)",
          { lineHeight: "1.05", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        "label-caps": ["12px", { lineHeight: "16px", letterSpacing: "0.1em", fontWeight: "700" }],
        "headline-md": [
          "clamp(1.5rem, 2.5vw + 0.75rem, 2rem)",
          { lineHeight: "1.1", fontWeight: "700" },
        ],
        "body-md": ["14px", { lineHeight: "20px", fontWeight: "400" }],
        "display-xl": [
          "clamp(3rem, 8vw + 0.5rem, 7.5rem)",
          { lineHeight: "0.95", letterSpacing: "-0.04em", fontWeight: "900" },
        ],
      },
    },
  },
  plugins: [],
};