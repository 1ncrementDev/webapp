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

window.onload = function() {
  document.body.style.backgroundImage = "url('https://bogatyr.club/uploads/posts/2021-11/thumbs/1636922967_2-bogatyr-club-p-fon-gradient-temnii-2.jpg')";
}


function startGame() {
  startButton.classList.add("hidden");
  menu.classList.remove("hidden");
  game.classList.add("hidden");
}

function selectDifficulty(difficulty) {
  maxNumber = difficulty;
  switch (maxNumber) {
    case 10:
      tries = 4;
      break;
    case 100:
      tries = 12;
      break;
    case 1000:
      tries = 34;
      break;
    default:
      tries = 0;
  }
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
    resultMessage.textContent = `Вʙᥱдᥙᴛᥱ чᥙᥴ᧘᧐ ᧐ᴛ 1 д᧐ ${maxNumber}`;
    guessInput.value = "";
    return;
  }
  tries--;
  triesElement.textContent = tries;
  if (guess === randomNumber) {
    resultMessage.textContent = `Пᴏɜдᴩᴀʙᴧяᴇʍ, ʙы уᴦᴀдᴀᴧи чиᴄᴧᴏ! Чиᴄᴧᴏ быᴧᴏ: ${randomNumber}.`;
    hintMessage.textContent = "";
    submitButton.classList.add("hidden");
    guessInput.disabled = true;
  } else if (tries === 0) {
    resultMessage.textContent = `К ᴄᴏжᴀᴧᴇнию, ʙы ᴨᴩᴏиᴦᴩᴀᴧи. Чиᴄᴧᴏ быᴧᴏ: ${randomNumber}.`;
    hintMessage.textContent = "";
    submitButton.classList.add("hidden");
    guessInput.disabled = true;
  } else if (guess > randomNumber) {
    hintMessage.textContent = "Зᴀᴦᴀдᴀннᴏᴇ чиᴄᴧᴏ ʍᴇньɯᴇ <";
    guessInput.value = "";
  } else {
    hintMessage.textContent = "Зᴀᴦᴀдᴀннᴏᴇ чиᴄᴧᴏ бᴏᴧьɯᴇ >";
    guessInput.value = "";
  }
}

function restart() {
  switch (maxNumber) {
    case 10:
      tries = 4;
      break;
    case 100:
      tries = 12;
      break;
    case 1000:
      tries = 34;
      break;
    default:
      tries = 0;
  }
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
