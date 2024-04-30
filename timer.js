let startTime;
let pausedTime = 0;
let running = false;
let laps = [];
let lastDisplayedTime = "";

function startStopwatch() {
  if (!running) {
    if (pausedTime === 0) {
      startTime = Date.now();
    } else {
      startTime = Date.now() - pausedTime;
      pausedTime = 0;
    }
    running = true;
    updateStopwatch();
    document.getElementById("startBtn").innerText = "Pause";
  } else {
    running = false;
    pausedTime = Date.now() - startTime;
    document.getElementById("startBtn").innerText = "Resume";
  }
}
