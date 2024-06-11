import { ctx } from "./data/canvas.js";
import {gameMap} from "./data/map.js";


function drawMap() {
  gameMap.skeleton.map((collumn, indexY) => {
    collumn.map((row, indexX) => {
      if (gameMap.skeleton[indexY][indexX] == 0) {
        ctx.fillStyle = "black";
        ctx.fillRect(indexX*gameMap.blockSize, indexY*gameMap.blockSize, gameMap.blockSize, gameMap.blockSize);
      } else if (gameMap.skeleton[indexY][indexX] == 1) {
        ctx.fillStyle = "green";
        ctx.fillRect(indexX*gameMap.blockSize, indexY*gameMap.blockSize, gameMap.blockSize, gameMap.blockSize);
      } else if (gameMap.skeleton[indexY][indexX] == 2) {
        ctx.fillStyle = "red";
        ctx.fillRect(indexX*gameMap.blockSize, indexY*gameMap.blockSize, gameMap.blockSize, gameMap.blockSize);
      }
    });
  });
}

export default drawMap;
