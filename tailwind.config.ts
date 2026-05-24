// tailwind.config.ts
module.exports = {
  theme: {
    extend: {
      animation: {
        'mesh-drift': 'mesh-drift 20s ease infinite',
      },
      keyframes: {
        'mesh-drift': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(10%, -10%) scale(1.1)' },
          '66%': { transform: 'translate(-5%, 15%) scale(0.9)' },
        },
      },
    },
  },
}