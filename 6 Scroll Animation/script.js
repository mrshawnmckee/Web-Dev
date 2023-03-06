const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    //where do we want the triggerpoint?
    //We will ant it to be less than the inner height of the window
    //console.log(window.innerHeight / 5 * 4) //to find the height of the window, and then make it slightly less
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top  //check MDM docs, finds top of box

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}