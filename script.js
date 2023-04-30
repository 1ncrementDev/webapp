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

let maxNumber;
let tries;

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
}

function checkGuess() {
  const guess = Number(guessInput.value);
  if (guess === NaN || guess < 1 || guess > maxNumber) {
    alert(`Введите число от 1 до ${maxNumber}`);
    guessInput.value = "";
    return;
  }
  tries--;
  triesElement.textContent = tries;
  if (guess === randomNumber) {
    alert("Поздравляем, вы угадали число!");
    restart();
  } else if (tries === 0) {
    alert(`К сожалению, вы проиграли. Загаданное число было: ${randomNumber}`);
    restart();
  } else if (guess > randomNumber) {
    alert("Загаданное число меньше");
    guessInput.value = "";
  } else {
    alert("Загаданное число больше");
    guessInput.value = "";
  }
}

function restart() {
  guessInput.value = "";
  startGame();
}

startButton.addEventListener("click", startGame);
easyButton.addEventListener("click", () => selectDifficulty(10));
mediumButton.addEventListener("click", () => selectDifficulty(100));
hardButton.addEventListener("click", () => selectDifficulty(1000));
submitButton.addEventListener("click", checkGuess);
restartButton.addEventListener("click", restart);
backButton.addEventListener("click", startGame);
