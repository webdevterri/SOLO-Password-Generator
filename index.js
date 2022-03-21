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

document
  .getElementById("btn-generate")
  .addEventListener("click", generatePasswords);

function generatePasswords() {
  let currentPass = [];
  // iterate the following 4 times
  for (let x = 0; x < 4; x++) {
    for (let i = 0; i < 15; i++) {
      const n = Math.floor(Math.random() * 73);
      currentPass.push(characters[n]);
    }

    document.getElementById(
      `pass${x + 1}`
    ).innerHTML = `<p class="password-text">${currentPass.join("")}</p>`;
    console.log(currentPass);

    currentPass = [];
  }
}

// generatePasswords()
