window.addEventListener('keydown', (event) => {
  const key = document.querySelector(`.key[data-key="${event.key}"]`)

  if (!key) return

  // play audio
  const audio = key.querySelector('audio')
  audio.currentTime = 0 // rewind to the start of the sound so they can play in succession
  audio.play()

  // show animation when sound is playing
  key.classList.add('playing')
})

// remove animation once transition ends
const keys = document.querySelectorAll('.key')
keys.forEach((key) => {
  key.addEventListener('transitionend', (event) => {
    if (event.propertyName !== 'transform') return

    key.classList.remove('playing')
  })
})
