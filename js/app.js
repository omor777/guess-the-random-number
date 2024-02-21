let computerGuess;
let userGuess = [];
let maxGuess;
let userGuessUpdate = document.getElementById("guess-text");
let userNumberUpdate = document.getElementById("input-field");

const audio = new Audio("../audio/music.wav");

const init = () => {
  computerGuess = Math.floor(Math.random() * 100);

  document.getElementById("play-again-btn").style.display = "none";
  document.getElementById("play-ground").style.display = "none";
};

// reload the page
const newGameBegin = () => {
  window.location.reload();
  audio.play();
};

const startGame = () => {
  document.getElementById("home").style.display = "none";
  document.getElementById("play-ground").style.display = "block";
};

const startNewGame = () => {
  document.getElementById("play-again-btn").style.display = "block";
  userNumberUpdate.setAttribute("disabled", true);
};

//main logic of our game
const compareGuess = () => {
  audio.play();
  const userNumber = Number(userNumberUpdate.value);
  userGuess = [...userGuess, userNumber];
  document.getElementById("guess-container").innerHTML = userGuess;

  // check the value low or high
  if (userGuess.length < maxGuess) {
    if (userGuess > computerGuess) {
      userGuessUpdate.innerHTML = "Your guess is High 😯";
      userNumberUpdate.value = "";
    } else if (userNumber < computerGuess) {
      userGuessUpdate.innerHTML = "Your guess is Low 🙁";
      userNumberUpdate.value = "";
    } else {
      userGuessUpdate.innerHTML = `It's Correct 😍`;
      userNumberUpdate.value = "";
      startNewGame();
    }
  } else {
    if (userGuess > computerGuess) {
      userGuessUpdate.innerHTML = `You Loose!! Correct number was ${computerGuess}`;
      userNumberUpdate.value = "";
      startNewGame();
    } else if (userNumber < computerGuess) {
      userGuessUpdate.innerHTML = `You Loose!! Correct number was ${computerGuess}`;
      userNumberUpdate.value = "";
      startNewGame();
    } else {
      userGuessUpdate.innerHTML = `It's Correct 😍`;
      userNumberUpdate.value = "";
      startNewGame();
    }
  }

  document.getElementById("attempts").innerHTML = userGuess.length;
};

const easyMode = () => {
  audio.play();
  maxGuess = 10;
  startGame();
};

const hardMode = () => {
  audio.play();
  maxGuess = 5;
  startGame();
};
