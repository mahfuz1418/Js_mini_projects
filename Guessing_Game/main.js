let totalAttempts = 5;
let attempts = 0;
let totalWon = 0;
let totalLost = 0;

const cardBody = document.querySelector(".card-body");
const form = cardBody.querySelector("form");
const guessingNumber = form.querySelector("#GuessingNumber");
const checkButton = form.querySelector("#Check");
const resultText = cardBody.querySelector(".result-text");
const reminingAttempts = cardBody.querySelector(".reminingAttempts");
const wonLostMsg = document.createElement("p");
const reload = document.querySelector(".reload-btn");

reload.addEventListener("click", function (e) {
    location.reload();
})

form.addEventListener("submit", function (e) {
    e.preventDefault();
    attempts++;

    if (attempts === 5) {
        guessingNumber.disabled = true;
        checkButton.disabled = true;
    } 
    if (attempts < 6) {
        let guessNumber = Number(guessingNumber.value);
        checkResult(guessNumber);
        reminingAttempts.innerHTML = `Remining Attempts : ${totalAttempts - attempts}`;
    }
    guessingNumber.value = "";
    
})

function checkResult(guessingNumber) {
    const randomNumber = getRandomNumber(5);
    if (guessingNumber === randomNumber) {
        resultText.innerHTML = `You Won`;
        totalWon++;
    } else {
        resultText.innerHTML = `You lost; random number was: ${randomNumber}`;
        totalLost++;
    }
    wonLostMsg.innerHTML = `Won: ${totalWon}, Lost: ${totalLost}`;
    cardBody.appendChild(wonLostMsg);
}

function getRandomNumber(limit) {
    return Math.floor(Math.random() * limit) + 1;
}