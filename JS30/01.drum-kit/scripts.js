window.addEventListener('keydown', (event) => {
  // play audio
  const audio = document.querySelector(`audio[data-key="${event.key}"]`)
  if (audio) {
    audio.currentTime = 0 // rewind to the start of the sound so they can play in succession
    audio.play()
  } else return

  // show animation when sound is playing
  const key = document.querySelector(`.key[data-key="${event.key}"]`)
  key.classList.add('playing')
})

// remove animation once transition ends
const keys = document.querySelectorAll('.key')
keys.forEach((key) => {
  key.addEventListener('transitionend', removeTransition)
})

function removeTransition (event) {
  if (event.propertyName === 'transform') {
    this.classList.remove('playing')
  }
}
