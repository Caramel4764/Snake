import player from "./data/player.js";
import { gameMap, drawMap } from "./data/map.js";
import { spawnApple } from "./apple.js";

const gameOverMenu = document.getElementById('gameOverMenu');
gameOverMenu.style.visibility = 'hidden';

const gameOver = function () {
  //alert('Game Over')
  player.alive = false;
  gameOverMenu.style.visibility = 'visible';
}

const restart = function() {
  gameMap.skeleton = [
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
  ]
  player.score = 0;
  player.direction = "down";
  player.location = [0, 0];
  player.prevLocation = [];
  player.tempDirection = "down";
  drawMap();
  spawnApple();
  player.alive=true;
  gameOverMenu.style.visibility = 'hidden';
}

export {restart, gameOver};