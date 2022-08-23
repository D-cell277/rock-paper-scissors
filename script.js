const choices = ["ROCK", "PAPER", "SCISSORS"]
const rounds = parseInt(prompt("how many rounds you want to play."))
function getComputerChoice() {
    var index =  Math.floor(Math.random() * choices.length);
    var computer = choices[index];
    return computer;
}
function getPlayerChoice() {
    var player = prompt("Type in your choice. Rock/Paper/Scissors: ").toUpperCase();
    return player;
}

let computerChoice = undefined;
let playerChoice = undefined;
let playerScore = 0
let computerScore = 0
function state() {
    return console.log("Computer: " + computerChoice+ "\nPlayer: " + playerChoice + "\nPlayer Score: "+ playerScore + "\nComputer Score: "+ computerScore)
};



function playRound(computerChoice, playerChoice) {
    if ((computerChoice=="ROCK" && playerChoice== "PAPER") || (computerChoice=="PAPER" && playerChoice== "SCISSORS") || (computerChoice=="SCISSORS" && playerChoice== "ROCK")) {
        console.log("you win. " + playerChoice + " beats " + computerChoice)
        playerScore += 1;
        state()
    } else if ((computerChoice=="ROCK" && playerChoice== "SCISSORS") || (computerChoice=="PAPER" && playerChoice== "ROCK") || (computerChoice=="SCISSORS" && playerChoice== "PAPER")) {
        console.log("you lose. " + computerChoice + " beats " + playerChoice)
        computerScore += 1;
        state()
    } else {
        console.log("It's a Draw.")
        state()
    }
}

function game() {
    for (let i=0; i < rounds; i++) {
        computerChoice = getComputerChoice();
        playerChoice = getPlayerChoice();
        playRound(computerChoice,playerChoice);
    }
}

game()