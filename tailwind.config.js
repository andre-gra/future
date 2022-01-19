module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      one: '#080506',
      two: '#F98B53',
      three: '#561314',
      four: '#664A3C',
      five: '#84283b',
      six: '#905737',
      seven: '#B89076',
    },
    fontFamily: {
      titleXl: ['Alfa Slab One'],
      title: ['Elsie'],
      paragraph: ['Maitree'],
    },
    extend: {
      backgroundImage: {
        'body-texture': "url('src/images/vintage-texture.png')",
      },
      gridTemplateRows: {
        8: 'repeat(8, minmax(0, 1fr))',
        layout: '50px 100px 100px minmax(150px, 0.3fr) minmax(350px, 0.7fr) 50px',
      },
      fontSize: {
        p: ['18px', '1.5'],
      },
      animation: {
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;',
      },
      screens: {
        '-lg': { max: '1023px' },
      },
    },
  },
  plugins: [],
};
