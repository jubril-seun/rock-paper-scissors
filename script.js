function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() *3);
    if(computerChoice === 0){
        return "rock";
    } else if (computerChoice === 1){
        return "paper";
    } else {
        return "scissors";
    }
}

// console.log(getComputerChoice());

function getHumanChoice(){
    return prompt("Rock, paper, or scissors?", "Enter here");
}

// console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if(humanChoice === computerChoice){
        console.log("It's a tie");
    } else if (humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper") {
            console.log("You win! " + humanChoice + " beats " + computerChoice);
            humanScore++;
        } else {
            console.log("You lose! " + computerChoice + " beats " + humanChoice);
            computerScore++;
        }
        
}

function playGame(){
    playRound(getHumanChoice(),getComputerChoice())
    playRound(getHumanChoice(),getComputerChoice())
    playRound(getHumanChoice(),getComputerChoice())
    playRound(getHumanChoice(),getComputerChoice())
    playRound(getHumanChoice(),getComputerChoice())

    if(humanScore > computerScore) {
        console.log("You win. You won " + humanScore + " out of 5 rounds.");
    } else if (humanScore < computerScore) {
        console.log("You lose. You lost " + humanScore + " out of 5 rounds.");
    } else {
        console.log("It's a tie!");
    }
}

playGame();