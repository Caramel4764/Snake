import { ctx } from "./canvas.js";
import player from "./player.js";
let gameMap = {
  rowLength: 10,
  get blockSize(){ return canvas.width / this.rowLength},
  skeleton: [
    [9, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
};
const drawMap =function() {
  gameMap.skeleton.map((collumn, indexY) => {
    collumn.map((row, indexX) => {
      if (gameMap.skeleton[indexY][indexX] == 0) {
        ctx.fillStyle = "black";
      } else if (gameMap.skeleton[indexY][indexX] == 1) {
        ctx.fillStyle = player.color;
      } else if (gameMap.skeleton[indexY][indexX] == 2) {
        ctx.fillStyle = "red";
      } else if (gameMap.skeleton[indexY][indexX] == 9) {
        ctx.fillStyle = player.color;
      }
      ctx.strokeStyle = "gray";
      ctx.lineWidth = 2;
      ctx.strokeRect(indexX*gameMap.blockSize, indexY*gameMap.blockSize, gameMap.blockSize, gameMap.blockSize);
      ctx.fillRect(indexX*gameMap.blockSize, indexY*gameMap.blockSize, gameMap.blockSize, gameMap.blockSize);
    });
  });
}

const updateMap = function(newMap) {
  gameMap.skeleton = newMap;
}

const checkMap = function(target) {
  let listOfFound = [];
  for (let i = 0; i < gameMap.skeleton.length; i++) {
    for (let j = 0; j < gameMap.skeleton[i].length; j++) {
      if (gameMap.skeleton[i][j] == target) {
        listOfFound.push([i, j]);
      }
    }
  } 
  return listOfFound;
}

export { gameMap, updateMap, drawMap, checkMap };