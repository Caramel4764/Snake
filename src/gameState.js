import player from "./data/player.js";
import { gameMap, drawMap } from "./data/map.js";
import { spawnApple } from "./apple.js";
import {playDie} from '../assets/audioScripts/die.js'

const startMenu = document.getElementById('startMenu');
const gameOverMenu = document.getElementById('gameOverMenu');

const gameOver = function () {
  playDie();
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
  player.updateScore();
  player.direction = "down";
  player.location = [0, 0];
  player.prevLocation = [];
  player.tempDirection = "down";
  drawMap();
  spawnApple();
  player.alive=true;
  gameOverMenu.style.visibility = 'hidden';
}
const startGame = function() {
  startMenu.style.visibility = 'hidden';
  player.alive = true;
}

export {restart, gameOver, startGame};