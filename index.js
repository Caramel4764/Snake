import drawMap from "./src/environment.js";
import {moveForward, changeDirection} from "./src/controller.js";
import gameOver from "./src/gameOver.js";
import { checkMap } from "./src/data/map.js";
import { spawnApple} from "./src/apple.js"
drawMap();
window.addEventListener('keydown', changeDirection)

spawnApple();

setInterval(function () {
  moveForward();
  drawMap();
}, 200);
