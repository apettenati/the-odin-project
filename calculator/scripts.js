const historyScreen = document.querySelector('.history')
const answerScreen = document.querySelector('.answer')
const buttons = document.querySelectorAll('button')

window.addEventListener('keydown', (event) => {
  // clear screen first if error is showing
  if (answerScreen.innerText === 'Invalid expression' || answerScreen.innerText === 'Overflow') {
    answerScreen.innerText = 0
  }
  // add keyboard press functionality
  if (event.key === 'Escape') {
    clearScreen()
  } else if (event.key === 'Backspace') {
    const str = answerScreen.innerText
    if (str.length > 1) {
      answerScreen.innerText = str.substring(0, str.length - 1)
    } else {
      answerScreen.innerText = 0
    }
  } else if (event.key === 'Enter' || event.key === '=') {
    calculate()
  } else {
    buttons.forEach((button) => {
      if (event.key === button.name) {
        updateAnswer(button)
      }
    })
  }
})

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.name === 'clear') {
      clearScreen()
    } else if (button.name === '=') {
      calculate()
    } else {
      updateAnswer(button)
    }
  })
})

function calculate () {
  try {
    // evaluate expression typed into answer
    const answer = eval(answerScreen.innerText)
    historyScreen.innerText = answerScreen.innerText
    answerScreen.innerText = answer
  } catch {
    // check for invalid expressions and throw error message
    answerScreen.innerText = 'Invalid expression'
  }
}

function clearScreen () {
  historyScreen.innerText = 0
  answerScreen.innerText = 0
}

function updateAnswer (button) {
  // clear text from screen if 0 or error
  if (answerScreen.innerText === '0' ||
    answerScreen.innerText === 'Invalid expression') {
    answerScreen.innerText = button.name
  // otherwise append to existing screen text
  } else {
    answerScreen.innerText += button.name
  }
  // throw overflow error if string length exceeds screen size
  if (answerScreen.innerText.length > 18) {
    answerScreen.innerText = 'Overflow'
  }
}
