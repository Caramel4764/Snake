import { gameMap, updateMap } from "./data/map.js";
import gameOver from "./gameOver.js";
import player from "./data/player.js";
import { eatApple, spawnApple } from "./apple.js";

let moveX = 0;
let moveY = 0;
let appleEaten = false;

let indexPlayer = 0;
const moveForward = function () {
  appleEaten = false;
  player.prevLocation.push([player.location[0], player.location[1]]);
  moveX = 0;
  moveY = 0;
  if (player.direction == "down") {
    moveY++;
  } else if (player.direction == "up") {
    moveY--;
  } else if (player.direction == "left") {
    moveX--;
  } else if (player.direction == "right") {
    moveX++;
  }
  //change location
  player.location[0] += moveY;
  player.location[1] += moveX;

  //if snake eats itself
  if (gameMap.skeleton[player.location[0]][player.location[1]] == 1) {
    return gameOver();
  }
  if (gameMap.skeleton[player.location[0]][player.location[1]] == 2) {
    appleEaten = true;
  }
  //update map
  gameMap.skeleton[player.prevLocation[player.prevLocation.length - 1][0]][
    player.prevLocation[player.prevLocation.length - 1][1]
  ] = 1;
  if (
    gameMap.skeleton[player.prevLocation[indexPlayer][0]][
      player.prevLocation[indexPlayer][1]
    ] != 2
  )
    gameMap.skeleton[player.prevLocation[indexPlayer][0]][
      player.prevLocation[indexPlayer][1]
    ] = 0;
  //prevents constant gameOver because the head is a 9 instead of a plain 1. Both represent the snake
  gameMap.skeleton[player.location[0]][player.location[1]] = 9;

  if (appleEaten) {
    eatApple();
    spawnApple([moveX, moveY]);
  }
  if (player.prevLocation.length > player.score) {
    player.prevLocation.shift();
  }
};

const changeDirection = function (e) {
  if (e.key == "a" && player.direction != "right") {
    player.direction = "left";
  } else if (e.key == "w" && player.direction != "down") {
    player.direction = "up";
  } else if (e.key == "d" && player.direction != "left") {
    player.direction = "right";
  } else if (e.key == "s" && player.direction != "up") {
    player.direction = "down";
  }
};

export { moveForward, changeDirection };
