/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark cyberpunk theme
        "background": "#0a0a0f",
        "background-secondary": "#0d0d12",
        "panels-cards": "rgba(20, 20, 30, 0.6)",
        "text-headings": "#f0f0f5",
        "text-body": "#a0a0b0",
        "text-muted": "#6a6a7a",
        
        // Neon accents
        "neon-purple": "#8b5cf6",
        "neon-cyan": "#06b6d4",
        "neon-pink": "#ec4899",
        "neon-blue": "#3b82f6",
        
        // Legacy compatibility
        "primary-accent": "#8b5cf6",
        "secondary-accent": "#06b6d4",
        "tertiary-accent": "#ec4899",
        "muted": "rgba(255, 255, 255, 0.1)",
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'pulse-glow-cyan': 'pulse-glow-cyan 3s ease-in-out infinite',
        'pulse-glow-pink': 'pulse-glow-pink 3s ease-in-out infinite',
        'text-glow': 'text-glow 3s ease-in-out infinite',
        'text-glow-cyan': 'text-glow-cyan 3s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 5s ease infinite',
        'border-glow': 'border-glow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(139, 92, 246, 0.4), 0 0 40px rgba(139, 92, 246, 0.2)' },
          '50%': { boxShadow: '0 0 30px rgba(139, 92, 246, 0.6), 0 0 60px rgba(139, 92, 246, 0.3)' },
        },
        'pulse-glow-cyan': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(6, 182, 212, 0.4), 0 0 40px rgba(6, 182, 212, 0.2)' },
          '50%': { boxShadow: '0 0 30px rgba(6, 182, 212, 0.6), 0 0 60px rgba(6, 182, 212, 0.3)' },
        },
        'pulse-glow-pink': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(236, 72, 153, 0.4), 0 0 40px rgba(236, 72, 153, 0.2)' },
          '50%': { boxShadow: '0 0 30px rgba(236, 72, 153, 0.6), 0 0 60px rgba(236, 72, 153, 0.3)' },
        },
        'text-glow': {
          '0%, 100%': { textShadow: '0 0 10px rgba(139, 92, 246, 0.5), 0 0 20px rgba(139, 92, 246, 0.3)' },
          '50%': { textShadow: '0 0 20px rgba(139, 92, 246, 0.8), 0 0 40px rgba(139, 92, 246, 0.5)' },
        },
        'text-glow-cyan': {
          '0%, 100%': { textShadow: '0 0 10px rgba(6, 182, 212, 0.5), 0 0 20px rgba(6, 182, 212, 0.3)' },
          '50%': { textShadow: '0 0 20px rgba(6, 182, 212, 0.8), 0 0 40px rgba(6, 182, 212, 0.5)' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'border-glow': {
          '0%, 100%': { borderColor: 'rgba(139, 92, 246, 0.3)', boxShadow: '0 0 10px rgba(139, 92, 246, 0.1)' },
          '50%': { borderColor: 'rgba(139, 92, 246, 0.6)', boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)' },
        },
      },
    },
  },
  plugins: [],
}
