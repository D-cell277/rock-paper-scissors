const choices = ["rock", "paper", "scissors"]
function getComputerChoice(choices) {
    var index =  Math.floor(Math.random() * choices.length);
    return choices[index]
}

