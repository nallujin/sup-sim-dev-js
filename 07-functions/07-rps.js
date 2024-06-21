const plRock = document.querySelector("#pRock");
const plPaper = document.querySelector("#pPaper");
const plScs = document.querySelector("#pScs");
let result;
plRock.addEventListener("click", () => {
    startGame("rock");
    // console.log(`You picked ${pValue}. Computer picked ${computerMove}. ${result}`);
});

plPaper.addEventListener("click", () => {
    startGame("paper");
});

plScs.addEventListener("click", () => {
    startGame("scissors");
});



function startGame(player) {
    const computerHand = () => {
        const number = Math.floor((Math.random()+0.1)*10);
        if (number <= 10 / 3) {
            return "rock";
        } else if (number > 10/3 && number <= 20/3) {
            return "paper";
        } else if (number > 20 / 3) {
            return "scissors";
        }
    };
    const comp = computerHand();

    if (player === comp) {
        result = "Tied.";
    } else if (player === "rock" && comp === "paper") {
        result = "You lose.";
    } else if (player === "rock" && comp === "scissors") {
        result = "You win.";
    } else if (player === "paper" && comp === "rock") {
        result = "You win.";
    } else if (player === "paper" && comp === "scissors") {
        result = "You lose.";
    } else if (player === "scissors" && comp === "rock") {
        result = "You lose.";
    } else if (player === "scissors" && comp === "paper") {
        result = "You win.";
    }
    console.log(`You picked ${player}. Computer picked ${comp}. ${result}`)
}