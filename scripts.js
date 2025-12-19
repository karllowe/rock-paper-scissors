let humanScore = 0;
let computerScore = 0;


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
    return winner + "(user: " + humanChoice + " computer: " + computerChoice + ")"
}

console.log(playRound(getHumanChoice(),getComputerChoice()))