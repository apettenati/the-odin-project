const playButton = document.querySelector('#play')
playButton.addEventListener('click', playGame)

function computerSelection () {
  const choices = ['rock', 'paper', 'scissors']
  return choices[Math.floor(Math.random() * choices.length)]
}

function checkWinner (playerSelection, compSelection) {
  let text = ''
  if (playerSelection === compSelection) {
    text = 'Tie!'
  } else if (playerSelection === 'rock' && compSelection === 'scissors') {
    text = 'You won!'
  } else if (playerSelection === 'paper' && compSelection === 'rock') {
    text = 'You won!'
  } else if (playerSelection === 'scissors' && compSelection === 'paper') {
    text = 'You won!'
  } else {
    text = 'You lost!'
  }

  return text
}

function generateWinnerText (text) {
  const winner = document.querySelector('.winner')
  winner.innerText = text
}
function playGame (event) {
  const playerSelection = document.querySelector('#player-selection').value
  const compSelection = computerSelection()
  const text = checkWinner(playerSelection, compSelection)
  generateWinnerText(text)
}
