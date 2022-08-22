const choices = ["rock", "paper", "scissors"]
function getComputerChoice() {
    var index =  Math.floor(Math.random() * choices.length);
    var computer = choices[index];
    return computer;
}
function getPlayerChoice() {
    var player = prompt("Type in your choice. Rock/Paper/Scissors: ").toLowerCase();
    return player;
}

const computerChoice = getComputerChoice();
const playerChoice = getPlayerChoice();

function state() {
    return console.log("Computer: " + computerChoice+ "\nPlayer: " + playerChoice)
}
state()


function playRound(computerChoice,playerChoice) {
    if (computerChoice== choices[0] && playerChoice == choices[1]) {
        state()
        console.log("You Win! Paper beats Rock")
    } else if (computerChoice== choices[0] && playerChoice == choices[2]) {
        state()
        console.log("You Lose! Rock beats Scissors")
    } else if (computerChoice== choices[1] && playerChoice == choices[0]) {
        state()
        console.log("You Lose! Paper beats Rock")
    } else if (computerChoice== choices[1] && playerChoice == choices[2]) {
        state()
        console.log("You Win! Scissors beats Paper")
    } else if (computerChoice== choices[2] && playerChoice == choices[0]) {
        state()
        console.log("You win! Rock beats Scissors")
    } else if (computerChoice== choices[2] && playerChoice == choices[1]) {
        state()
        console.log("You Lose! Scissors beats Paper")
    } else {
        state()
        console.log("It's a Draw.")
    }
    }
playRound()