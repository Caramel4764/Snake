import { gameMap, updateMap } from "./data/map.js";
import gameOver from './gameOver.js';
import player from "./data/player.js"
import { eatApple, spawnApple } from "./apple.js";

let moveX = 0;
let moveY = 0

const moveForward = function () {
  console.log("-----")
  console.log(gameMap.skeleton)
  //console.log(gameMap.skeleton)
  player.prevLocation = [player.location[0], player.location[1]];
  moveX = 0;
  moveY = 0;
  if (player.direction == 'down') {
    moveY++;
  } else if (player.direction == 'up') {
    moveY--;
  } else if (player.direction == 'left') {
    moveX--;
  } else if (player.direction == 'right') {
    moveX++;
  }
  player.location[0]+=moveY
  player.location[1]+=moveX

  //if snake eats itself
  if (gameMap.skeleton[player.location[0]][player.location[1]] == 1) {
    return gameOver();
  //if snake eats apple
  } else if (gameMap.skeleton[player.location[0]][player.location[1]] == 2) {
    eatApple();
    spawnApple([moveX, moveY]);
  }
  gameMap.skeleton[player.prevLocation[0]][player.prevLocation[1]] = 0;
  gameMap.skeleton[player.location[0]][player.location[1]] = 1;
};

const changeDirection = function (e) {
  if (e.key == 'a' && player.direction != 'right') {
    player.direction = 'left';
  } else if (e.key == 'w' && player.direction != 'down') {
    player.direction = 'up';
  } else if (e.key == 'd' && player.direction != 'left') {
    player.direction = 'right';
  } else if (e.key == "s" && player.direction != 'up') {
    player.direction = 'down';
  }
};

export {moveForward, changeDirection};
