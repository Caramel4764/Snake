import drawMap from "./src/environment.js";
import {moveForward, changeDirection} from "./src/controller.js";
import gameOver from "./src/gameOver.js";

drawMap();
window.addEventListener('keydown', changeDirection)

setInterval(function () {
  moveForward();
  drawMap();
}, 300);
