/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "red-primary-50": "var(--color-red-primary-50)",
        "blue-primary-50": "var(--color-blue-primary-50)",
        "neutral-primary": "var(--color-neutral-primary)",
        "neutral-secondary": "var(--color-neutral-secondary)",
        "neutral-secondary-100": "var(--color-neutral-secondary-100)",
        "neutral-secondary-120": "var(--color-neutral-secondary-120)",
        "neutral-secondary-200": "var(--color-neutral-secondary-200)",
      },
    },
  },
  plugins: [],
};
