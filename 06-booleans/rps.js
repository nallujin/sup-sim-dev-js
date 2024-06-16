const plRock = document.querySelector("#pRock");
const plPaper = document.querySelector("#pPaper");
const plScs = document.querySelector("#pScs");
let result;
let pValue;
let computerMove;
plRock.addEventListener("click", () => {
    pValue = "rock";
    computerMove = randomNumber();
    if (computerMove === "rock") {
        result =  "Tied";
    } else if (computerMove === "paper") {
        result = "You lose.";
    } else if (computerMove === "scissors") {
        result = "You win.";
    }
    console.log(`You picked ${pValue}. Computer picked ${computerMove}. ${result}`);
});

plPaper.addEventListener("click", () => {
    pValue = "paper";
    computerMove = randomNumber();
    if (computerMove === "rock") {
        result =  "You win.";
    } else if (computerMove === "paper") {
        result = "Tied";
    } else if (computerMove === "scissors") {
        result = "You lose";
    }
    console.log(`You picked ${pValue}. Computer picked ${computerMove}. ${result}`);
});

plScs.addEventListener("click", () => {
    pValue = "scissors";
    computerMove = randomNumber();
    if (computerMove === "rock") {
        result =  "You lose.";
    } else if (computerMove === "paper") {
        result = "You win.";
    } else if (computerMove === "scissors") {
        result = "Tied.";
    }
    console.log(`You picked ${pValue}. Computer picked ${computerMove}. ${result}`);
});

function randomNumber() {
    const num = Math.floor((Math.random()+0.1)*10);
    if (num <= 10 / 3) {
        return "rock";
    } else if (num > 10/3 && num <= 20/3) {
        return "paper";
    } else if (num > 20 / 3) {
        return "scissors";
    }
}