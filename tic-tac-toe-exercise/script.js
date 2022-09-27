console.log("Hello world!")

const options = ["Rock", "Paper", "Scissor"]

let computerChoice = options[Math.floor(Math.random()*options.length)]

function getComputerChoice() {
  return computerChoice
}

console.log(getComputerChoice())

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "Rock" && computerSelection === "Scissor" ||
      playerSelection === "Paper" && computerSelection === "Rock" ||
      playerSelection === "Scissor" && computerSelection === "Paper") {
    return `Well done! ${playerSelection} beats ${computerSelection}`
  } else {
    return `Oh no! You lose, ${computerSelection} beats ${playerSelection}`
  }
}
