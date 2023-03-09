const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
    label.innerHTML = label.innerText
    // this splits the text into an array, so that we can create the wave effect
        .split('')
        // Then this manipulates that array into an array of spans for each letter
        //The inline style is what causes the different timed letter wave
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        // Then this turns it back into a string
        .join('')
})