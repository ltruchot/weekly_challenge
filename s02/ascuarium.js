// keep this import to enjoy your CSS
import css from "./ascuarium.css";

// a little helper to create a div with a class
function createDiv(className) {
  const div = document.createElement("div");
  div.className = className;
  return div;
}

// a little helper to get some ramdom int in a range (including min & max)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// create an aquarium element in the body
const aquariumElement = createDiv("ascuarium");
document.body.appendChild(aquariumElement);

// create 16 lines of 16 tiles, as a living aquarium matrix
// create and appends DOM elements
// we will access any html cell in tiles array like that: tiles[x][y]
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
  aquariumElement.appendChild(lineEl);
}

// get a random tile
const y = getRandomInt(0, height - 1);
let x = getRandomInt(0, width - 1);
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
