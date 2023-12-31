const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
let square;
let numberOfSquares;
let gridDimensionPercent;

btn.addEventListener("click", (e) => {
  while (container.lastElementChild) {
    container.removeChild(container.lastElementChild);
  }
  numberOfSquares = 101;
  while (numberOfSquares > 100) {
    numberOfSquares = prompt("Number of squares across? (Less than 100)");
  }
  buildGrid(numberOfSquares);
  draw();
});

function buildGrid(numberOfSquares) {
  gridDimensionPercent = (1 / numberOfSquares) * 100;
  for (let i = 0; i < numberOfSquares; i++) {
    for (let i = 0; i < numberOfSquares; i++) {
      square = document.createElement("div");
      square.classList.add("new");
      square.style.width = `${gridDimensionPercent}%`;
      square.style.height = `${gridDimensionPercent}%`;
      container.appendChild(square);
    }
  }
}

function draw() {
  const squareBox = document.querySelectorAll(".new");
  squareBox.forEach((square) => {
    square.addEventListener("mouseover", (e) => {
      if (e.buttons === 1) square.classList.add("selected");
    });
  });
}
