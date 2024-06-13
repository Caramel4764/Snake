import { ctx } from "./data/canvas.js";
import {gameMap} from "./data/map.js";

let snakeColor = "green"
function drawMap() {
  gameMap.skeleton.map((collumn, indexY) => {
    collumn.map((row, indexX) => {
      if (gameMap.skeleton[indexY][indexX] == 0) {
        ctx.fillStyle = "black";
      } else if (gameMap.skeleton[indexY][indexX] == 1) {
        ctx.fillStyle = snakeColor;
      } else if (gameMap.skeleton[indexY][indexX] == 2) {
        ctx.fillStyle = "red";
      } else if (gameMap.skeleton[indexY][indexX] == 9) {
        ctx.fillStyle = snakeColor;
      }
      
      ctx.strokeStyle = "gray";
      ctx.lineWidth = 5;
      ctx.strokeRect(indexX*gameMap.blockSize, indexY*gameMap.blockSize, gameMap.blockSize, gameMap.blockSize);
      ctx.fillRect(indexX*gameMap.blockSize, indexY*gameMap.blockSize, gameMap.blockSize, gameMap.blockSize);
    });
  });
}

export default drawMap;
