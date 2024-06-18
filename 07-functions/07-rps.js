const plRock = document.querySelector("#pRock");
const plPaper = document.querySelector("#pPaper");
const plScs = document.querySelector("#pScs");
let result;
let pValue;
let computerMove;
plRock.addEventListener("click", () => {
    pValue = "rock";
    computerMove = pickComputerMove();
    startGame(pValue, computerMove);
    console.log(`You picked ${pValue}. Computer picked ${computerMove}. ${result}`);
});

plPaper.addEventListener("click", () => {
    pValue = "paper";
    computerMove = pickComputerMove();
    startGame(pValue, computerMove);
    console.log(`You picked ${pValue}. Computer picked ${computerMove}. ${result}`);
});

plScs.addEventListener("click", () => {
    pValue = "scissors";
    computerMove = pickComputerMove();
    startGame(pValue, computerMove);
    console.log(`You picked ${pValue}. Computer picked ${computerMove}. ${result}`);
});

function pickComputerMove() {
    const num = Math.floor((Math.random()+0.1)*10);
    if (num <= 10 / 3) {
        return "rock";
    } else if (num > 10/3 && num <= 20/3) {
        return "paper";
    } else if (num > 20 / 3) {
        return "scissors";
    }
}

function startGame(player, computer) {
    if (player === computer) {
        result = "Tied.";
    } else if (player === "rock" && computer === "paper") {
        result = "You lose.";
    } else if (player === "rock" && computer === "scissors") {
        result = "You win.";
    } else if (player === "paper" && computer === "rock") {
        result = "You win.";
    } else if (player === "paper" && computer === "scissors") {
        result = "You lose.";
    } else if (player === "scissors" && computer === "rock") {
        result = "You lose.";
    } else if (player === "scissors" && computer === "paper") {
        result = "You win.";
    }
}