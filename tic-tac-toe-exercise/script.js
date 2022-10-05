const tools = ["Rock", "Paper", "Scissor"]

let playerScore = 0
let computerScore = 0

function playRound(playerSelection, computerSelection) {
  if (playerSelection === rock && computerSelection === scissor ||
    playerSelection === paper && computerSelection === rock ||
    playerSelection === scissor && computerSelection === paper) {
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
    while (playerScore < 5 && computerScore < 5) {
      let computerChoice = tools[Math.floor(Math.random()*tools.length)]

      function getComputerChoice() {
        return computerChoice
      }

      // const playerSelection = prompt("Pick a tool")
      const computerSelection = getComputerChoice()

      console.log(playRound(playerSelection.toLowerCase(), computerSelection.toLowerCase()))
      console.log(`Computer: ${getComputerChoice()}`)
      console.log(`Player: ${playerSelection}`)
      console.log(`Computer ${computerScore} - ${playerScore} Player`)
      console.log("-----------------------")

      if (playerScore === 5) {
        return "Congratulations, you win! 🌈 Refresh the page to play again ✨"
      } else if (computerScore === 5) {
        return "Oh no, you lose! 😩 Refresh the page to play again ✨"
      }
    }
  }

const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissor = document.querySelector('#scissor')
