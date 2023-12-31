const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
let numberOfSquares;

btn.addEventListener("click", (e) => {
  while (container.lastElementChild) {
    container.removeChild(container.lastElementChild);
  }

  numberOfSquares = prompt("Number of squares");
  buildGrid(numberOfSquares);
});

function buildGrid(numberOfSquares) {
  let square;
  for (let i = 0; i < numberOfSquares; i++) {
    for (let i = 0; i < numberOfSquares; i++) {
      square = document.createElement("div");
      square.classList.add("new");

      container.appendChild(square);
    }
  }

  const squareBox = document.querySelectorAll(".new");

  squareBox.forEach((square) => {
    square.addEventListener("mouseover", (e) => {
      square.classList.add("selected");
    });
  });
}
