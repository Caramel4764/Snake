import {moveForward, changeDirection} from "./src/controller.js";
import {gameOver, restart} from "./src/gameOver.js";
import player from "./src/data/player.js";
import { spawnApple} from "./src/apple.js"
import { gameMap, drawMap } from "./src/data/map.js";

let playAgainButton = document.getElementById("playAgainButton");
playAgainButton.addEventListener("click", restart);



window.addEventListener('keydown', changeDirection)

drawMap();
spawnApple();

setInterval(function () {
  if (player.alive == true) {
    moveForward();
    drawMap();
  }
}, player.speed);
