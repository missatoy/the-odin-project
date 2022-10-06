//GAME

let playerScore = 0
let computerScore = 0
let roundWinner = ''

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "scissor" ||
    playerSelection === "paper" && computerSelection === "rock" ||
    playerSelection === "scissor" && computerSelection === "paper") {
      playerScore++
      roundWinner = 'player'
      return `Well done! ${playerSelection} beats ${computerSelection}`
    } else if (playerSelection === computerSelection) {
      roundWinner = 'tie'
      return "Oh no, it's a tie!"
    } else {
      computerScore++
      roundWinner = 'computer'
      return `Oh no! You lose, ${computerSelection} beats ${playerSelection}`
  }
}

function getRandomChoice() {
  let randomNumber = Math.floor(Math.random() * 3)
  switch (randomNumber) {
    case 0:
      return 'rock'
    case 1:
      return 'paper'
    case 2:
      return 'scissor'
  }
}

function isGameOver() {
  if (playerScore === 5 || computerScore === 5) {
    
  }
}

//UI

const rockBtn = document.querySelector('#rock')
const paperBtn = document.querySelector('#paper')
const scissorBtn = document.querySelector('#scissor')
const playerChoice = document.querySelector('#player-choice')
const computerChoice = document.querySelector('#computer-choice')
const playerPoints = document.querySelector('#player-points')
const computerPoints = document.querySelector('#computer-points')
const textBox = document.querySelector('#text-box')

rockBtn.addEventListener('click', () => handleClick('rock'))
paperBtn.addEventListener('click', () => handleClick('paper'))
scissorBtn.addEventListener('click', () => handleClick('scissor'))

function handleClick(playerSelection) {
  const computerSelection = getRandomChoice()
  console.log(playRound(playerSelection, computerSelection))
  updateChoices(playerSelection, computerSelection)
  updateScore()
  updateTextBox(playerSelection, computerSelection)
  isGameOver()
}

function updateChoices(playerSelection, computerSelection) {
  switch (playerSelection) {
    case 'rock':
      playerChoice.textContent = 'Rock'
      break
    case 'paper':
      playerChoice.textContent = 'Paper'
      break
    case 'scissor':
      playerChoice.textContent = 'Scissor'
      break
  }

  switch (computerSelection) {
    case 'rock':
      computerChoice.textContent = 'Rock'
      break
    case 'paper':
      computerChoice.textContent = 'Paper'
      break
    case 'scissor':
      computerChoice.textContent = 'Scissor'
      break
  }
}

function updateScore() {
  if (roundWinner === 'player') {
    playerPoints.textContent = playerScore
  } else if (roundWinner === 'computer') {
    computerPoints.textContent = computerScore
  }
}

function updateTextBox(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "scissor" ||
      playerSelection === "paper" && computerSelection === "rock" ||
      playerSelection === "scissor" && computerSelection === "paper") {
      textBox.insertAdjacentHTML("beforeend", `<p>Well done! ${playerSelection} beats ${computerSelection}</p>`)
    } else if (playerSelection === computerSelection) {
      textBox.insertAdjacentHTML("beforeend", "<p>Oh no, it's a tie!</p>")
    } else {
      textBox.insertAdjacentHTML("beforeend", `<p>Oh no! You lose, ${computerSelection} beats ${playerSelection}</p>`)
  }
  textBox.scrollTop = textBox.scrollHeight;
}
