const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')


//We are connecting an event listener to the button to call generate joke
jokeBtn.addEventListener('click', generateJoke)

generateJoke()

//Using async/await
//if we use await in a function, we have to label the function async
async function generateJoke() {

    const config = {
        headers: {
            'Accept': 'application/json',
        },
    }

    const res = await fetch('https://icanhazdadjoke.com', config)
    const data = await res.json()
    jokeEl.innerHTML = data.joke
}



// //This is doing the job with .then instead of async/await
// function generateJoke() {
//     // need to add object{} with headers value so that we dont get fetch response in html form, the accept: application/json
//     const config = {
//         headers: {
//             'Accept': 'application/json',
//         },
//     }
//     // config pulls in the json response
//     fetch('https://icanhazdadjoke.com', config)
//         .then(res => res.json())
//         .then(data => {
//             //if you .then(data => console.log(data)), we are using data.joke because we are accessing the joke part of the response
//             jokeEl.innerHTML = data.joke
//         })    
// }