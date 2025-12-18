function getComputerChoice() {
    let randomNumber = Math.random()

    if (randomNumber <= 0.33) {
        return "Rock"
    } else if (randomNumber <=0.66) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

function getHumanChoice() {
    let humanChoice = prompt("Enter your choice").toLowerCase();
    return humanChoice
}


console.log(getHumanChoice());