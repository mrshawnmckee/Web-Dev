const insert = document.getElementById('insert')



// Window is the top level object in the browser

window.addEventListener('keydown', (e) => {
    //find the code name by console.log(e) and inspect to find the names
    //The tertiary if statements are because the space bar returns an empty string
    // and so we want to tell it if spacebar is pressed to return space
    //Also, we can use ${} because of the backticks
    insert.innerHTML = ` 

    <div class="key">
    
        ${e.key === ' ' ? 'Space' : e.key}
        <small>event.key</small>
    </div>
    <div class="key"> 
        ${e.keyCode}
        <small>event.keyCode</small>
    </div>
    <div class="key">
        ${e.code}
        <small>event.code</small>
    </div>`
})
