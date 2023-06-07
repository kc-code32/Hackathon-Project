document.addEventListener('DOMContentListener', () => {
  let link = document.getElementById('popup-button');
  link.addEventListener('click', () => {
    alert('You clicked me!')
  })
})