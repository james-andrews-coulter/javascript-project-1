let humanScore = 0;
let computerScore = 0;

function getComputerChoice () {
    let computerChoice = Math.floor(Math.random() * 3);

    switch (computerChoice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    };
}

function getHumanChoice () {
    let choice = prompt("Enter your choice: rock, paper, or scissors");
    return choice;
}


function playRound (humanChoice, computerChoice) {

    if (humanChoice.toLowerCase() === "rock") {
        if (computerChoice === "rock") {
            console.log("It's a tie! You both chose rock.");
        } else if (computerChoice === "paper") {
            console.log("You lose! Paper beats rock.");
            computerScore++;
        } else if (computerChoice === "scissors") {
            console.log("You win! Rock beats scissors.");
            humanScore++;
        }
    } else if (humanChoice.toLowerCase() === "paper") {
        if (computerChoice === "rock") {
            console.log("You win! Paper beats rock.");
            humanScore++;
        } else if (computerChoice === "paper") {
            console.log("It's a tie! You both chose paper.");
        } else if (computerChoice === "scissors") {
            console.log("You lose! Scissors beat paper.");
            computerScore++;
        }
    } else if (humanChoice.toLowerCase() === "scissors") {
        if (computerChoice === "rock") {
            console.log("You lose! Rock beats scissors.");
            computerScore++;
        } else if (computerChoice === "paper") {
            console.log("You win! Scissors beat paper.");
            humanScore++;
        } else if (computerChoice === "scissors") {
            console.log("It's a tie! You both chose scissors.");
        }
    } else {
        console.log("Invalid choice. Please choose rock, paper, or scissors.");
    }

    console.log(`Score: You ${humanScore} - Computer ${computerScore}`);
}

function playGame () {
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    };

    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (humanScore < computerScore) {
        console.log("Sorry, you lost the game. Better luck next time!");
    } else {
        console.log("The game is a tie!");
    };
}
playGame();