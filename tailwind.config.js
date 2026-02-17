/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#FFFFFF',
          sunshine: '#FFD600', // Amarillo vibrante
          sky: '#00B0FF', // Azul cian
          joy: '#FF4081', // Rosa neón
          leaf: '#76FF03', // Verde lima
          dark: '#2D3436', // Gris oscuro para texto pro
          purple: '#51369B', // Púrpura inmersivo
          magenta: '#E94E89', // Magenta vibrante
          blue: '#0062FF', // Azul profundo
          verde: '#38A824',
          rojo: '#E53935',
          conchevino: '#A31D1D',
          celeste: '#5B9BD5',
        }
      },
      fontFamily: {
        fredoka: ['var(--font-fredoka)', 'sans-serif'],
        quicksand: ['var(--font-quicksand)', 'sans-serif'],
        caveat: ['var(--font-caveat)', 'cursive'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
      },
      boxShadow: {
        'pop': '0 10px 0 0 rgba(0,0,0,0.05)',
        'glass': '0 8px 32px 0 rgba(31,38,135,0.15)',
        'premium': '0 20px 50px rgba(0,0,0,0.1)',
        'premium-pop': '0 8px 0 0 rgba(0,0,0,0.1)',
      }
    },
  },


  plugins: [],
};

