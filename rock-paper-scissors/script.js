const buttons = document.querySelectorAll('button')

function computerSelection () {
  const choices = ['rock', 'paper', 'scissors']
  return choices[Math.floor(Math.random() * choices.length)]
}

function checkWinner (playerSelection, compSelection) {
  let result = ''
  if (playerSelection === compSelection) {
    result = 'Tie!'
  } else if (playerSelection === 'rock' && compSelection === 'scissors') {
    result = 'You won!'
  } else if (playerSelection === 'paper' && compSelection === 'rock') {
    result = 'You won!'
  } else if (playerSelection === 'scissors' && compSelection === 'paper') {
    result = 'You won!'
  } else {
    result = 'You lost!'
  }
  return result
}

function generateWinnerText (result) {
  const winner = document.querySelector('.winner')
  winner.innerText = result
}

function playGame (playerSelection) {
  const compSelection = computerSelection()
  const text = checkWinner(playerSelection, compSelection)
  generateWinnerText(text)
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const playerSelection = button.firstChild.alt
    playGame(playerSelection)
  })
})
