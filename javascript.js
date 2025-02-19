console.log('My cat Sunny was the best cat in the world! You can see him here: https://drive.google.com/drive/folders/1LAWXVgCwK_lHFiFfYHXw8YI_jEoyltly?usp=share_link');

const form = document.querySelector('#form')
const submitButton = document.querySelector('#submit')

form.addEventListener('submit', (e) => {
  submitButton.disabled = true
  e.preventDefault()
  window.location.href = window.location.origin + '/success.html'
})