const container = document.getElementById('container')
// the next one creates the random colors for the boxes
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
//amount of squares on the screen
const SQUARES = 500;

for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    //this is linking to the css class of square
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseout', () => removeColor(square))

    //This painted the squares
    container.appendChild(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.background = '#1d1d1d'
    // try it without removing the box shadow too, pretty cool
    element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}