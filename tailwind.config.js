/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        modblue: "hsl(228, 45%, 44%)",
        Verydarkblued: "hsl(216, 50%, 16%)",
        Verydarkbluedd: "hsl(216, 50%, 20%)",
        Verydarkblueline: "hsl(215, 32%, 27%)",
        Softblue: "hsl(215, 51%, 70%)",
        Cyan: "hsl(178, 100%, 50%)",
        Verydarkblue: "hsl(233, 47%, 7%)",
        Darkdesaturatedblue: "hsl(244, 38%, 16%)",
        Softviolet: "hsl(277, 64%, 61%)",
        Whiteheadingstats: "hsl(0, 0%, 100%)",
        Slightlytransparentwhite: "hsla(0, 0%, 100%, 0.75)",
        Slightlytransparentwhite: "hsla(0, 0%, 100%, 0.6)"
      },
      maxWidth: {
        small: "250px"
      },
      fontSize: {
        required: "15px"
      }
    },
    fontFamily: {
      Opensans: ('OpenSans')
    },


  },
  plugins: [],
}

