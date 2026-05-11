const btn = document.getElementById("btn");

const manobras = [
  "Kickflip 🛹",
  "Heelflip 🔥",
  "360 Flip ⚡",
  "Impossible 🚀",
  "Hardflip 💥"
];

btn.addEventListener("click", () => {

  const random =
    manobras[Math.floor(Math.random() * manobras.length)];

  alert("Manobra sorteada: " + random);

});