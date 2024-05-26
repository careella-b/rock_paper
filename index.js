let humanScore = 0
let computerScore = 0

const choices = ['rock', 'paper', 'scissors']

function getComputerChoice() {
    const computerChoice = choices[Math.floor(Math.random()*3)]
    return computerChoice
}

function getHumanChoice() {
    let humanChoice = prompt('rock, paper or scissors?')
    if(humanChoice.toLowerCase() === 'rock' || humanChoice.toLowerCase() === 'paper' || humanChoice.toLowerCase() === 'scissors'){
        return humanChoice.toLowerCase();
    }
}

function playRound(computerChoice, humanChoice) {

    if(humanChoice === "paper"){
        if(computerChoice === "scissors"){
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
            computerScore++;
        } else {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`)
            humanScore++;
        }
    } else if(humanChoice === "rock") {
        if(computerChoice === "paper") {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`)
            humanChoice++;
        } else {
            console.log(`You lose! ${computerChoice} beat ${humanChoice}`)
            computerScore++;
        }
    } else if(humanChoice === "rock") {
        if(computerChoice === "scissors") {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`)
            humanScore++;
        } else {
            console.log(`You lose ${computerChoice} beats ${humanChoice}`)
            computerChoice++;
        }
    } else {
        console.log(`It was a tie! Play another around. Scores: Computer: ${computerScore} - You: ${humanScore}`)
    }
}

function playGame() {
    console.log(playRound(getComputerChoice(), getHumanChoice()));
    console.log(playRound(getComputerChoice(), getHumanChoice()));
    console.log(playRound(getComputerChoice(), getHumanChoice()));
    console.log(playRound(getComputerChoice(), getHumanChoice()));
    console.log(playRound(getComputerChoice(), getHumanChoice()));

    if(computerScore > humanScore){
        alert(`GAME OVER! You lose and the Computer won. The final score is: Computer ${computerScore} - You ${humanScore}`)
    } else if (computerScore < humanScore) {
        alert(`GAME OVER! You win and the Computer lose. The final score is: Computer ${computerScore} - You ${humanScore}`)
    } else {
        alert(`GAME OVER! It is a tie. The final score is: Computer ${computerScore} - You ${humanScore}`)
    }
}

playGame();


