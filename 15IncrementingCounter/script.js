const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    // sets the default number to "0"
    counter.innerText = '0'

    const updateCounter = () => {
        // target is in the data target attribute
        // The + turns it into a number
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText

        const increment = target / 200

        if(c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            // will delay the time it increments, make it an animation
            // If yo make the number divided by the target larger, the numbers will increase slower
            setTimeout(updateCounter, 1)
        } else {
            counter.innerText = target
        }
    }

    updateCounter()
})