document.addEventListener('DOMContentLoaded', () => {
  const clearButton = document.querySelector('.clear')
  const sizeButton = document.querySelector('.size')
  const slider = document.querySelector('.slider')
  // set sizeButton text
  sizeButton.innerText = sizeButton.name
  // create initial grid
  createGrid()
  // add event listeners for buttons
  clearButton.addEventListener('click', clearScreen)
  sizeButton.addEventListener('click', changeSize)
  // initialize slider position and color
  slider.value = 1
  slider.className = 'slider purple'
  // add event listener for slider
  slider.addEventListener('click', draw)
})

// add event listener to draw
window.addEventListener('mouseover', draw)

function createGrid () {
  const sketchGrid = document.querySelector('.sketch-grid')
  // remove existing grid elements
  sketchGrid.innerHTML = ''

  // set sketch grid size variable based on size button name
  const size = document.querySelector('.size').name
  sketchGrid.className = `sketch-grid ${size}`
  const range = {
    small: 60,
    medium: 30,
    large: 10
  }
  document.documentElement.style.setProperty('--sketch-grid-item-size', range[size])

  // create child div for each grid item based on grid size
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
  // set draw color based on slider value
  slider.className = `slider ${colors[slider.value]}`
  // listen only for the sketch grid and draw if mouse is inside
  if (event.target.classList.contains('sketch-grid-item')) {
    event.target.className = `sketch-grid-item ${colors[slider.value]}`
  }
}

function clearScreen () {
  const gridItems = document.querySelectorAll('.sketch-grid-item')
  // reset class to remove background color classes
  gridItems.forEach((item) => {
    item.className = 'sketch-grid-item'
  })
}

function changeSize (event) {
  // change button name and text on click
  const button = event.target
  if (button.name === 'small') {
    button.name = 'medium'
  } else if (button.name === 'medium') {
    button.name = 'large'
  } else if (button.name === 'large') {
    button.name = 'small'
  }
  button.innerText = button.name
  // clear screen and create grid based on new size
  clearScreen()
  createGrid()
}
