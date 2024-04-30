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

function pauseStopwatch() {
  running = false;
  pausedTime = Date.now() - startTime;
  document.getElementById("startBtn").innerText = "Resume";
}

function resetStopwatch() {
  running = false;
  pausedTime = 0;
  document.getElementById("display").innerText = "00:00:00.000";
  document.getElementById("startBtn").innerText = "Start";
  laps = [];
  updateLapsList();
}

function recordLap() {
  if (running) {
    const lapTime = calculateTimeElapsed(startTime);
    laps.push(lapTime);
    updateLapsList();
  }
}
