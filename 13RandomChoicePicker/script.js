const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

// This put the focus in the text area (input) so that we can type
textarea.focus()

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)

    //Here is the random select functionality
    if(e.key === 'Enter') {
        setTimeout(() =>{
            e.target.value = '' //this clears it
        },10    //10 millseconds
        )

        randomSelect()
    }
})

function createTags(input) {
    //This will split the imput at the comma and create an array
    //The filter says filter white space if it is not part of a string
    //and the map is deleting
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())

    //This clears the tagsEl so that it doesnt build up
    tagsEl.innerHTML = ''

    //this one creates the span tags
    tags.forEach(tag => {
        const tagEl = document.createElement('span')
        tagEl.classList.add('tag')
        tagEl.innerText = tag
        tagsEl.appendChild(tagEl)
    })
}

function randomSelect() {
    const times = 30    //number of times it wil highlight each one before it chooses

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()

        highlightTag(randomTag)
        
        setTimeout(() => {
            unhighlightTag(randomTag)
        },100)
    },100)

    //This helps pick a random tag to land on and highlight
    setTimeout(() => {
        clearInterval(interval)

        setTimeout(()=> {
            const randomTag = pickRandomTag()

            highlightTag(randomTag)
        }, 100)
    }, times * 100)
}

function pickRandomTag() {
    //the following creates a node list, much like an array
    const tags = document.querySelectorAll('.tag')  
    //This will choose a random tag, rounded down w/ math.floor 
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unhighlightTag(tag) {
    tag.classList.remove('highlight')
}