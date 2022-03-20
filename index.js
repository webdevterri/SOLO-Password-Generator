const characters = [
  `0`,
  `1`,
  `2`,
  `3`,
  `4`,
  `5`,
  `6`,
  `7`,
  `8`,
  `9`,
  `!`,
  `@`,
  `#`,
  `$`,
  `%`,
  `&`,
  `+`,
  `~`,
  `<`,
  `>`,
  `?`,
  `q`,
  `w`,
  `e`,
  `r`,
  `t`,
  `y`,
  `u`,
  `i`,
  `o`,
  `p`,
  `a`,
  `s`,
  `d`,
  `f`,
  `g`,
  `h`,
  `j`,
  `k`,
  `l`,
  `z`,
  `x`,
  `c`,
  `v`,
  `b`,
  `n`,
  `m`,
  `Q`,
  `W`,
  `E`,
  `R`,
  `T`,
  `Y`,
  `U`,
  `I`,
  `O`,
  `P`,
  `A`,
  `S`,
  `D`,
  `F`,
  `G`,
  `H`,
  `J`,
  `K`,
  `L`,
  `Z`,
  `X`,
  `C`,
  `V`,
  `B`,
  `N`,
  `M`,
];

let password1 = []
let password2 = []
let password3 = []
let password4 = []

// document.getElementById("btn-generate").addEventListener("click", {
//   // function to generate random passwords, iterate 4 times and place each in #pass[i + 1]
// });

function generatePasswords() {
  // iterate the following 4 times
  for (let i = 0; i < 15; i++){
    // get a random index from characters [0 - 72]
    // push to array of password#
    // join array .join('')
    const n = Math.floor(Math.random() * 73)
    password1.push(characters[n])

    document.getElementById('pass1').innerHTML = `<p class="password-text">${password1.join('')}</p>`
  }
  console.log(password1)
}

generatePasswords()