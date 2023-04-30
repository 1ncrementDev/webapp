const startButton = document.getElementById("start");
const menu = document.getElementById("menu");
const easyButton = document.getElementById("easy");
const mediumButton = document.getElementById("medium");
const hardButton = document.getElementById("hard");
const game = document.getElementById("game");
const triesElement = document.getElementById("tries");
const guessInput = document.getElementById("guess");
const submitButton = document.getElementById("submit");
const restartButton = document.getElementById("restart");
const backButton = document.getElementById("back");
const resultMessage = document.getElementById("result-message");
const hintMessage = document.getElementById("hint-message");

let maxNumber;
let tries;
let randomNumber;

function startGame() {
  startButton.classList.add("hidden");
  menu.classList.remove("hidden");
  game.classList.add("hidden");
}

function selectDifficulty(difficulty) {
  maxNumber = difficulty;
  tries = Math.ceil(Math.log2(maxNumber));
  triesElement.textContent = tries;
  menu.classList.add("hidden");
  game.classList.remove("hidden");
  guessInput.value = "";
  hintMessage.textContent = "";
  resultMessage.textContent = "";
  randomNumber = Math.ceil(Math.random() * maxNumber);
  submitButton.classList.remove("hidden");
  restartButton.classList.remove("hidden");
}

function checkGuess() {
  const guess = Number(guessInput.value);
  if (isNaN(guess) || guess < 1 || guess > maxNumber) {
    resultMessage.textContent = `Введите число от 1 до ${maxNumber}`;
    guessInput.value = "";
    return;
  }
  tries--;
  triesElement.textContent = tries;
  if (guess === randomNumber) {
    resultMessage.textContent = `Поздравляем, вы угадали число! Число было ${randomNumber}.`;
    hintMessage.textContent = "";
    submitButton.classList.add("hidden");
    guessInput.disabled = true;
  } else if (tries === 0) {
    resultMessage.textContent = `К сожалению, вы проиграли. Загаданное число было: ${randomNumber}.`;
    hintMessage.textContent = "";
    submitButton.classList.add("hidden");
    guessInput.disabled = true;
  } else if (guess > randomNumber) {
    hintMessage.textContent = "Загаданное число меньше";
    guessInput.value = "";
  } else {
    hintMessage.textContent = "Загаданное число больше";
    guessInput.value = "";
  }
}

function restart() {
  tries = Math.ceil(Math.log2(maxNumber));
  triesElement.textContent = tries;
  hintMessage.textContent = "";
  resultMessage.textContent = "";
  guessInput.disabled = false;
  randomNumber = Math.ceil(Math.random() * maxNumber);
  submitButton.classList.remove("hidden");
}

startButton.addEventListener("click", startGame);
easyButton.addEventListener("click", () => selectDifficulty(10));
mediumButton.addEventListener("click", () => selectDifficulty(100));
hardButton.addEventListener("click", () => selectDifficulty(1000));
submitButton.addEventListener("click", checkGuess);
restartButton.addEventListener("click", restart);
backButton.addEventListener("click", startGame);
