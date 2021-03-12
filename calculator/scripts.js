const historyScreen = document.querySelector('.history')
const answerScreen = document.querySelector('.answer')
const buttons = document.querySelectorAll('button')

window.addEventListener('keydown', (event) => {
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

function doThingFunc (foo) {
  console.log(foo)
}

function foo () {
  const foo = 3

  function doThing () {
    doThingFunc(foo)
  }

  return {
    doThing: doThing
  }
}

const fooInstance = foo()
console.log(fooInstance)

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
  if (answerScreen.innerText === '0' ||
    answerScreen.innerText === 'Invalid expression') {
    answerScreen.innerText = button.name
  } else {
    answerScreen.innerText += button.name
  }
}
