/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#386994"
      }
    },
    fontFamily: {
      /* 
        Essa fonte é Serif, porém para definir a fonte padrão
        do projeto, é necessário definir a fonte Sans, 
        pois essa é a fonte que o tailwind irá definir como padrão.
      */
      sans: ["Noto Serif", "serif"],
    }
  },
  plugins: [],
}
