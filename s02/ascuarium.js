import css from "./ascuarium.css";

function createDiv(className) {
  const div = document.createElement("div");
  div.className = className;
  return div;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const aquariunElement = createDiv("ascuarium");
document.body.appendChild(aquariunElement);
const tiles = [];

const width = 16;
const height = 16;

for (let h = 0; h < height; h++) {
  const line = [];
  const lineEl = createDiv("line");
  for (let w = 0; w < width; w++) {
    const cellEl = createDiv("cell");
    line.push(cellEl);
    lineEl.appendChild(cellEl);
  }
  tiles.push(line);
  aquariunElement.appendChild(lineEl);
}

// get a random tile
let x = getRandomInt(0, width - 1);
const y = getRandomInt(0, height - 1);
let randomTile = tiles[y][x];

// spawn a randomly moving fish
randomTile.innerText = "@";
setInterval(() => {
  let nextTile;
  while (!nextTile) {
    x += getRandomInt(-1, 1);
    nextTile = tiles[y][x];
  }
  randomTile.innerText = "";
  nextTile.innerText = "@";
  randomTile = nextTile;
}, 300);
