let humanScore = 0;
    let computerScore = 0;

    document.querySelectorAll('#options button').forEach(button => {
            button.addEventListener('click', () => {
                const humanChoice = button.id;
                const computerChoice = getComputerChoice();
                playRound(humanChoice, computerChoice);
            });


    function playRound(humanChoice, computerChoice) {
        const roundResult = document.querySelector("#round-result");
        const score = document.querySelector("#score");
         const verdict = document.querySelector("#verdict");


        if (humanChoice.toLowerCase() === "rock") {
            if (computerChoice === "rock") {
                roundResult.textContent = "It's a tie! You both chose rock.";
            } else if (computerChoice === "paper") {
                roundResult.textContent = "You lose! Paper beats rock.";
                computerScore++;
            } else if (computerChoice === "scissors") {
                roundResult.textContent = "You win! Rock beats scissors.";
                humanScore++;
            }
        } else if (humanChoice.toLowerCase() === "paper") {
            if (computerChoice === "rock") {
                roundResult.textContent = "You win! Paper beats rock.";
                humanScore++;
            } else if (computerChoice === "paper") {
                roundResult.textContent = "It's a tie! You both chose paper.";

            } else if (computerChoice === "scissors") {
                roundResult.textContent = "You lose! Scissors beat paper.";
                computerScore++;
            }
        } else if (humanChoice.toLowerCase() === "scissors") {
            if (computerChoice === "rock") {
                roundResult.textContent = "You lose! Rock beats scissors.";
                computerScore++;
            } else if (computerChoice === "paper") {
                roundResult.textContent = "You win! Scissors beat paper.";
                humanScore++;
            } else if (computerChoice === "scissors") {
                roundResult.textContent = "It's a tie! You both chose scissors.";
            }
        } else {
            roundResult.textContent = "Invalid choice. Please choose rock, paper, or scissors.";
        }
        score.textContent = `Score: You ${humanScore} - Computer ${computerScore}`;

        if (humanScore === 5) {
            verdict.textContent = "Congratulations! You won the game!";
            verdict.style.color = "green";
        } else if (computerScore === 5) {
            verdict.textContent = "Sorry, you lost the game. Better luck next time!";
            verdict.style.color = "red";
        };
    }


    function getComputerChoice() {
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
});
