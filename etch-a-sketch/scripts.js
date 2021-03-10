document.addEventListener('DOMContentLoaded', () => {
  const clearButton = document.querySelector('.clear')
  const sizeButton = document.querySelector('.size')

  sizeButton.innerText = sizeButton.name

  createGrid()

  clearButton.addEventListener('click', clearScreen)
  sizeButton.addEventListener('click', changeSize)

  const slider = document.querySelector('.slider')
  slider.value = 1
  slider.className = 'slider purple'
  slider.addEventListener('click', draw)
})

window.addEventListener('mouseover', draw)

function createGrid () {
  const sketchGrid = document.querySelector('.sketch-grid')
  sketchGrid.innerHTML = ''
  const size = document.querySelector('.size').name
  sketchGrid.className = `sketch-grid ${size}`
  const range = {
    small: 60,
    medium: 30,
    large: 10
  }
  for (let i = 0; i < range[size] ** 2; i++) {
    const gridDiv = document.createElement('div')
    gridDiv.className = 'sketch-grid-item'
    sketchGrid.appendChild(gridDiv)
  }
}

function draw (event) {
  const slider = document.querySelector('.slider')
  const colors = {
    1: 'purple',
    2: 'red',
    3: 'orange',
    4: 'green',
    5: 'blue'
  }
  slider.className = `slider ${colors[slider.value]}`
  if (event.target.classList.contains('sketch-grid-item')) {
    event.target.className = `sketch-grid-item ${colors[slider.value]}`
  }
}

function clearScreen () {
  const gridItems = document.querySelectorAll('.sketch-grid-item')
  gridItems.forEach((item) => {
    item.className = 'sketch-grid-item'
  })
}

function changeSize (event) {
  const button = event.target
  if (button.name === 'small') {
    button.name = 'medium'
  } else if (button.name === 'medium') {
    button.name = 'large'
  } else if (button.name === 'large') {
    button.name = 'small'
  }
  button.innerText = button.name
  clearScreen()
  createGrid()
}
