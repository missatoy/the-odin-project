const options = ["Rock", "Paper", "Scissor"]

let computerChoice = options[Math.floor(Math.random()*options.length)]

function getComputerChoice() {
  return computerChoice
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "Rock" && computerSelection === "Scissor" ||
  playerSelection === "Paper" && computerSelection === "Rock" ||
  playerSelection === "Scissor" && computerSelection === "Paper") {
    return `Well done! ${playerSelection} beats ${computerSelection}`
  } else if (playerSelection === computerSelection) {
    return "Oh no, it's a tie!"
  } else {
    return `Oh no! You lose, ${computerSelection} beats ${playerSelection}`
  }
}

const playerSelection = "Rock"
const computerSelection = getComputerChoice()
console.log(playRound(playerSelection, computerSelection))

console.log(`Computer: ${getComputerChoice()}`)
console.log(`Player: ${playerSelection}`)