const eatAudio = new Audio('assets/audio/eat.mp4');

const playEat = function() {
  eatAudio.pause();
  eatAudio.currentTime = 0;
  eatAudio.play();
}

export {playEat}