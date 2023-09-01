function getTime() {
  milliseconds++;
  if (milliseconds <= 9) {
    millisecondsElement.innerHTML = "0" + milliseconds;
  }
  if (milliseconds >= 10) {
    millisecondsElement.innerHTML = milliseconds;
  }
  if (milliseconds > 99) {
    seconds++;
    secondsElement.innerHTML = "0" + seconds;
    milliseconds = 0;
    millisecondsElement.innerHTML = "0" + 0;
  }
  if (seconds > 9) {
    secondsElement.innerHTML = seconds;
  }
  if (seconds >= 60) {
    minutes++;
    minutesElement.innerHTML = "0" + minutes;
    seconds = 0;
    secondsElement.innerHTML = "0" + 0;
  }
  if (minutes > 9) {
    minutesElement.innerHTML = minutes;
  }
}

function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(getTime, 10);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  stopTimer();
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  minutesElement.innerHTML = "00";
  secondsElement.innerHTML = "00";
  millisecondsElement.innerHTML = "00";
}

function changeTheme(event) {
  let body = document.querySelector("body");
  if (event.target.value === "dark") {
    body.classList.remove("light");
    body.classList.remove("underwater");
  }
  if (event.target.value === "light") {
    body.classList.remove("underwater");
    body.classList.add("light");
  }
  if (event.target.value === "underwater") {
    body.classList.remove("light");
    body.classList.add("underwater");
  }
}

let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let minutesElement = document.querySelector("#minutes");
let secondsElement = document.querySelector("#seconds");
let millisecondsElement = document.querySelector("#milliseconds");
let startButton = document.querySelector("#start");
let stopButton = document.querySelector("#stop");
let resetButton = document.querySelector("#reset");
let timerInterval = "";
let themeSelector = document.querySelector("#theme");

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);
themeSelector.addEventListener("change", changeTheme);
