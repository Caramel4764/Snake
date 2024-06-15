import player from "./data/player.js";
import { gameMap, drawMap } from "./data/map.js";
import { spawnApple } from "./apple.js";
import {playDie} from '../assets/audioScripts/die.js'

const startMenu = document.getElementById('startMenu');
const gameOverMenu = document.getElementById('gameOverMenu');
const submitScoreMenu = document.getElementById('submitScoreMenu');
const hiddenScoreInput = document.getElementById('hiddenScoreInput');
const cancelButton = document.getElementById("cancelButton");
const scoreValue = document.getElementsByClassName('scoreValue')
cancelButton.addEventListener("click", function () {
  submitScoreMenu.style.visibility = 'hidden';
});
const gameOver = function () {
  playDie();
  player.alive = false;
  gameOverMenu.style.visibility = 'visible';
  console.log(scoreValue[scoreValue.length-1])

  if (player.score > parseInt(scoreValue[scoreValue.length-1].innerHTML)) {
  submitScoreMenu.style.visibility = 'visible';
  }
  hiddenScoreInput.value = player.score;
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