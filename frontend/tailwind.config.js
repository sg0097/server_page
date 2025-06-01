module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          background: "var(--primary-background)",
          foreground: "var(--primary-foreground)",
          light: "var(--primary-light)",
          dark: "var(--primary-dark)",
        },
        secondary: {
          background: "var(--secondary-background)",
          foreground: "var(--secondary-foreground)",
          light: "var(--secondary-light)",
          dark: "var(--secondary-dark)",
        },
        accent: {
          DEFAULT: "var(--accent-color)",
          foreground: "var(--accent-foreground)",
          light: "var(--accent-light)",
          dark: "var(--accent-dark)",
        },
        gaming: {
          yellow: "var(--gaming-yellow)",
          blue: "var(--gaming-blue)",
          orange: "var(--gaming-orange)",
          teal: "var(--gaming-teal)",
        },
        border: {
          primary: "var(--border-primary)",
          secondary: "var(--border-secondary)",
          light: "var(--border-light)",
          dark: "var(--border-dark)",
        },
      },
      fontFamily: {
        rajdhani: ['Rajdhani', 'sans-serif'],
      },
      letterSpacing: {
        'wide': '0.05em',
        'wider': '0.1em',
        'widest': '0.2em',
      },
      backgroundImage: {
        'gaming-gradient': 'linear-gradient(138deg, #ec7029ff 0%, #d78d62ff 50%, #009dffff 100%)',
        'gaming-overlay': 'linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(16,16,16,0.3) 100%)',
      },
    },
  },
  plugins: [],
};