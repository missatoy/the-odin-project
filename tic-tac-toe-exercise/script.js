//GAME

let playerScore = 0
let computerScore = 0
let roundWinner = ''
let attempts = 1

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "scissor" ||
  playerSelection === "paper" && computerSelection === "rock" ||
  playerSelection === "scissor" && computerSelection === "paper") {
    playerScore++
    roundWinner = 'player'
    textBox.insertAdjacentHTML("beforeend", `<p>Well done! ${playerSelection} beats ${computerSelection}</p>`)
  } else if (playerSelection === computerSelection) {
    roundWinner = 'tie'
    textBox.insertAdjacentHTML("beforeend", "<p>Oh no, it's a tie!</p>")
  } else {
    computerScore++
    roundWinner = 'computer'
    textBox.insertAdjacentHTML("beforeend", `<p>Oh no! You lose, ${computerSelection} beats ${playerSelection}</p>`)
  }
  textBox.scrollTop = textBox.scrollHeight;
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
  return playerScore === 5 || computerScore === 5
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
const endgameModal = document.getElementById('endgameModal')
const endgameMsg = document.getElementById('endgameMsg')
const overlay = document.getElementById('overlay')
const restartBtn = document.getElementById('restartBtn')
const textBoxParent = document.getElementById('text-box-parent')

rockBtn.addEventListener('click', () => handleClick('rock'))
paperBtn.addEventListener('click', () => handleClick('paper'))
scissorBtn.addEventListener('click', () => handleClick('scissor'))
restartBtn.addEventListener('click', restartGame)
overlay.addEventListener('click', closeEndgameModal)

function handleClick(playerSelection) {
  if (isGameOver()) {
    openEndgameModal()
    return
  }

  const computerSelection = getRandomChoice()
  playRound(playerSelection, computerSelection)
  updateChoices(playerSelection, computerSelection)
  updateScore()

  if (isGameOver()) {
    openEndgameModal()
    setFinalMessage()

  }
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

function openEndgameModal() {
  endgameModal.classList.add('active')
  overlay.classList.add('active')
}

function closeEndgameModal() {
  endgameModal.classList.remove('active')
  overlay.classList.remove('active')
}

function setFinalMessage() {
  return playerScore > computerScore
    ? (endgameMsg.textContent = '✨You win!✨')
    : (endgameMsg.textContent = 'You lose... 🥺')
}

// function removeTextBox() {
//   textBox.parentElement.removeChild(textBox)
// }

// function addTextBox() {
//   textBoxParent.innerHTML = "<div class='col-7 score-box score-text' id='text-box'></div>"
// }

function restartGame() {
  playerScore = 0
  computerScore = 0
  playerPoints.textContent = playerScore
  computerPoints.textContent = computerScore
  // removeTextBox()
  // addTextBox()
  endgameModal.classList.remove('active')
  overlay.classList.remove('active')
}
