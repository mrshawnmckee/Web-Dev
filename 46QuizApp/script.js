const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What year was JavaScript developed?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "What doe CSS Stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What doe HTML stand for?",
        a: "HyperText Markup Language",
        b: "HyperText Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals MotorBoats Lava",
        correct: "a",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')

const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

// This starts the quiz at the first index of the quizData array
let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    // calling the .question method
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

// This function ensures that the radio boxes are uncheced at the start
function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked)
        answer = answerEl.id
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++
        }

        currentQuiz++

        if(currentQuiz< quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2> You answered ${score} out of ${quizData.length} correctly</h2>
                <button onClick ="location.reload()">Reload</button>
                `
        }
    }
})