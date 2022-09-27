const tools = ["Rock", "Paper", "Scissor"]

let computerChoice = tools[Math.floor(Math.random()*tools.length)]

function getComputerChoice() {
  return computerChoice
}

let playerScore = 0
let computerScore = 0

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "Rock" && computerSelection === "Scissor" ||
  playerSelection === "Paper" && computerSelection === "Rock" ||
  playerSelection === "Scissor" && computerSelection === "Paper") {
    playerScore++
    return `Well done! ${playerSelection} beats ${computerSelection}`
  } else if (playerSelection === computerSelection) {
    return "Oh no, it's a tie!"
  } else {
    computerScore++
    return `Oh no! You lose, ${computerSelection} beats ${playerSelection}`
  }
}

function game() {
  while (playerScore < 5 || computerScore < 5) {
    const playerSelection = prompt("Pick a tool")
    const computerSelection = getComputerChoice()
    console.log(playRound(playerSelection, computerSelection))
    console.log(`Computer: ${getComputerChoice()}`)
    console.log(`Player: ${playerSelection}`)
    console.log(`Computer ${computerScore} - ${playerScore} Player`)
  }
}

console.log(game())
