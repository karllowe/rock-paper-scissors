


function getComputerChoice() {
    let randomNumber = Math.random()

    if (randomNumber <= 0.33) {
        return "rock"
    } else if (randomNumber <=0.66) {
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Enter your choice");
    return humanChoice.toLowerCase()
}
/*
function playRound(humanChoice, computerChoice) {
    let winner;
    let outcomeMessage;

    // scenarios where the human wins
    if (humanChoice == "rock" && computerChoice == "scissors") {
        winner = "human"
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        winner = "human"
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        winner = "human"
    } 
    // scenarios where computer wins
    else if (humanChoice == "rock" && computerChoice == "paper") {
        winner = "computer"
    } else if (humanChoice == "paper" && computerChoice == "scissors"){
        winner = "computer"
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        winner = "computer"
    }
    // draw scenario
    else {
        winner = "draw"
    }

    // increment scores and set the winning message
    if (winner == "human") {
        ++humanScore
        outcomeMessage = "You Win! " + humanChoice + " beats " + computerChoice + "."
    } else if (winner == "computer") {
        ++computerScore
        outcomeMessage = "You lose! " + humanChoice + " loses to " + computerChoice + "."
    }

    return outcomeMessage
}*/

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    // declare playRound
    function playRound(humanChoice, computerChoice) {
        let winner;

        // scenarios where the human wins
        if (humanChoice == "rock" && computerChoice == "scissors") {
            winner = "human"
        } else if (humanChoice == "paper" && computerChoice == "rock") {
            winner = "human"
        } else if (humanChoice == "scissors" && computerChoice == "paper") {
            winner = "human"
        } 
        // scenarios where computer wins
        else if (humanChoice == "rock" && computerChoice == "paper") {
            winner = "computer"
        } else if (humanChoice == "paper" && computerChoice == "scissors"){
            winner = "computer"
        } else if (humanChoice == "scissors" && computerChoice == "rock") {
            winner = "computer"
        }
        // draw scenario
        else {
            winner = "draw"
        }
        return winner
    }
    function updateScore(winner, humanChoice, computerChoice) {
        let outcomeMessage;
        if (winner == "human") {
            ++humanScore
            outcomeMessage = "You Win! " + humanChoice + " beats " + computerChoice
        } else if (winner == "computer") {
            ++computerScore
            outcomeMessage = "You lose! " + humanChoice + " loses to " + computerChoice
        } else {
            outcomeMessage = "Draw! "
        }
        return outcomeMessage
    }
    // keep track of score
    // repeat 5 times, and declare winner at the end
    for (let i = 0; i < 5; i++) {
        let masterHumanChoice = getHumanChoice();
        let masterComputerChoice = getComputerChoice();
        let roundOutcome = playRound(masterHumanChoice, masterComputerChoice);

        console.log(updateScore(roundOutcome, masterHumanChoice, masterComputerChoice) + "(score: " + humanScore + " : " + computerScore + ")")
        if (i == 4) {
            let finalOutcome
            if(humanScore > computerScore) {
                finalOutcome = "You win!"
            } else if (computerScore > humanScore) {
                finalOutcome = "You lose!"
            } else {
                finalOutcome = "It's a draw!"
            }
            console.log("Game over! " + finalOutcome + "(Final score: " + humanScore + " : " + computerScore + ")")
        }
    }
}
playGame()