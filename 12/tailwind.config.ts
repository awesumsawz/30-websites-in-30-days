module.exports = {
  theme: {
    extend: {
      keyframes: {
        'gradient-rotate': {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(180deg)' },
        }
      },
      animation: {
        'gradient-rotate': 'gradient-rotate 3s linear infinite',
      }
    }
  }
}