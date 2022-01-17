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
        layout: '50px 100px 100px minmax(500px, 1fr) 50px',
      },
      fontSize: {
        p: ['18px', '1.5'],
      },
    },
  },
  plugins: [],
};
