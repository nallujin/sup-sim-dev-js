const plRock = document.querySelector("#pRock");
const plPaper = document.querySelector("#pPaper");
const plScs = document.querySelector("#pScs");
const theResult = document.querySelector(".js-result");
const pickedMove = document.querySelector(".js-moves");
const theScore = document.querySelector(".js-score");
const resetBtn = document.querySelector("#rBtn");
const score = JSON.parse(localStorage.getItem("score")) || { wins: 0, losses: 0, ties: 0 };
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

resetBtn.addEventListener("click", () => {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem("score");
    // console.log(`Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
    // theScore.textContent = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    updateScoreElement();
});


// theScore.textContent = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
updateScoreElement();

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
    let result;

    if (player === comp) {
        result = "Tied.";
        score.ties += 1;
        updateResultElement(result);
        updateMovesElement(player, comp);
    } else if (player === "rock" && comp === "paper") {
        result = "You lose.";
        score.losses += 1;
        updateResultElement(result);
        updateMovesElement(player, comp);
    } else if (player === "rock" && comp === "scissors") {
        result = "You win.";
        score.wins += 1;
        updateResultElement(result);
        updateMovesElement(player, comp);
    } else if (player === "paper" && comp === "rock") {
        result = "You win.";
        score.wins += 1;
        updateResultElement(result);
        updateMovesElement(player, comp);
    } else if (player === "paper" && comp === "scissors") {
        result = "You lose.";
        score.losses += 1;
        updateResultElement(result);
        updateMovesElement(player, comp);
    } else if (player === "scissors" && comp === "rock") {
        result = "You lose.";
        score.losses += 1;
        updateResultElement(result);
        updateMovesElement(player, comp);
    } else if (player === "scissors" && comp === "paper") {
        result = "You win.";
        score.wins += 1;
        updateResultElement(result);
        updateMovesElement(player, comp);
    }
    localStorage.setItem("score", JSON.stringify(score));
    // theScore.textContent = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    updateScoreElement();
    // console.log(`You picked ${player}. Computer picked ${comp}. ${result}`)
    // console.log(`Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
    if (!localStorage.getItem("score")) {
        localStorage.setItem("score", JSON.stringify(score));
    }
}

function updateScoreElement() {
    theScore.textContent = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function updateResultElement(res) {
    theResult.textContent = res;
}

function updateMovesElement(pMove, cMove) {
    pickedMove.textContent = `You ${pMove} - ${cMove} Computer`;
}