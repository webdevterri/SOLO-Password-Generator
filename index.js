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
  `-`,
  `=`,
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



document.getElementById("btn-generate").addEventListener("click", generatePasswords);

function generatePasswords() {
  let password1 = []
  let password2 = []
  let password3 = []
  let password4 = []
  // iterate the following 4 times
    for (let i = 0; i < 15; i++){
      const n = Math.floor(Math.random() * 73)
      password1.push(characters[n])
    }
    document.getElementById(`pass1`).innerHTML = `<p class="password-text">${password1.join('')}</p>`
    console.log(password1)

    for (let i = 0; i < 15; i++){
      const n = Math.floor(Math.random() * 73)
      password2.push(characters[n])
    }
    document.getElementById(`pass2`).innerHTML = `<p class="password-text">${password2.join('')}</p>`
    console.log(password2)

    for (let i = 0; i < 15; i++){
      const n = Math.floor(Math.random() * 73)
      password3.push(characters[n])
    }
    document.getElementById(`pass3`).innerHTML = `<p class="password-text">${password3.join('')}</p>`
    console.log(password3)

    for (let i = 0; i < 15; i++){
      const n = Math.floor(Math.random() * 73)
      password4.push(characters[n])
    }
    document.getElementById(`pass4`).innerHTML = `<p class="password-text">${password4.join('')}</p>`
    console.log(password4)
}

// generatePasswords()