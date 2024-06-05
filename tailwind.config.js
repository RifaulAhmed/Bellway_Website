module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        redFlow: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)', backgroundColor: '#d62b2b' },
          '50%': { transform: 'scale(1.1)', backgroundColor: '#b02424' },
        },
      },
      animation: {
        redFlow: 'redFlow 20s infinite',
        pulse: 'pulse 2s infinite',
      },
    },
  },
  plugins: [],
};
