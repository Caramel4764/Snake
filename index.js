import drawMap from "./src/environment.js";
import {moveForward, changeDirection} from "./src/controller.js";

drawMap();
window.addEventListener('keydown', changeDirection)

setInterval(function () {
  moveForward();
  drawMap();
}, 500);
