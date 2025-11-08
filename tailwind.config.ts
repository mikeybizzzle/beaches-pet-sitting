import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EBF4FF',
          100: '#D1E7FF',
          200: '#A3CFFF',
          300: '#70B3FF',
          400: '#4A90E2',
          500: '#3B7DD8',
          600: '#2E64B5',
          700: '#234C92',
          800: '#1A3A70',
          900: '#0F2447',
        },
        secondary: {
          50: '#FFF9E6',
          100: '#FFF2CC',
          200: '#FFE599',
          300: '#FFD966',
          400: '#FFCC33',
          500: '#FFA500',
          600: '#FF9900',
          700: '#CC7A00',
          800: '#995C00',
          900: '#663D00',
        },
        neutral: {
          50: '#FAFAF9',
          100: '#F5F5F4',
          200: '#E7E5E4',
          300: '#D6D3D1',
          400: '#A8A29E',
          500: '#78716C',
          600: '#57534E',
          700: '#44403C',
          800: '#292524',
          900: '#1C1917',
        },
        background: {
          white: '#FFFFFF',
          cream: '#FFF8F3',
          'light-blue': '#F0F7FF',
          'light-orange': '#FFF5E6',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        script: ['Dancing Script', 'cursive'],
      },
      borderRadius: {
        lg: "16px",
        xl: "24px",
        "2xl": "32px",
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
};

export default config;
