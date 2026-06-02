let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");


const generateComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);  // gnerates a random number between '0 & 3'
    return options[randomIndex];
}


const drawGame = () => {
    msg.innerText = "Game Drawn, Play again";
    msg.style.backgroundColor = "black";
}


const showWinner = (userWin, userChoice, computerChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `U WIN , ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        computerScore++;
        computerScorePara.innerText = computerScore;
        msg.innerText = `U LOSE !! , ${computerChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {

    //Generate-computer-choice
    const computerChoice = generateComputerChoice();

    if (userChoice === computerChoice) {
        //drawGame
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            //scissors. paper
            userWin = computerChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //rock , scissors
            userWin = computerChoice === "scissors" ? false : true;
        } else {
            // rock , paper
            userWin = computerChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, computerChoice);
    }
}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");

        playGame(userChoice)
    })
})
