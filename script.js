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
    if (computerChoice == playerChoice) {
        state()
        console.log("It's a Draw.")
    }
playRound()