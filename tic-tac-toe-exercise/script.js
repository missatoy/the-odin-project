console.log("Hello world!")

const options = ["Rock", "Paper", "scissor"]

let computerChoice = options[Math.floor(Math.random()*options.length)]

function getComputerChoice() {
  return computerChoice
}

console.log(getComputerChoice())
