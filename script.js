/* CODE=MARKUS*/

const quizData = [
    {
        question: "Mitu aastat tagasi alustasid Ruila lapsed oma kooliteed?",
        a: "148 aastat tagasi",
        b: "147 aastat tagasi",
        c: "146 aastat tagasi",
        d: "145 aastat tagasi",
        correct: "d",
    },
    {
        question: "Mitmendal aastal asus kool umber uude majja?",
        a: "1916. aastal",
        b: "1916. aastal",
        c: "1917. aastal",
        d: "1918. aastal",
        correct: "b",
    },
    {
        question: "Mitmendal aastal muudeti kool neljaklassiliseks?",
        a: "1926. aastal",
        b: "1927. aastal",
        c: "1928. aastal",
        d: "1929. aastal",
        correct: "a",
    },
    {
        question: "Kui kaua juhtis Mihkel Linnamagi Ruila koolielu?",
        a: "40 aastat",
        b: "41 aastat",
        c: "42 aastat",
        d: "43 aastat",
        correct: "b",
    },
    {
        question: "Kui vana on Ruila Pohikool?",
        a: "153 aastat",
        b: "154 aastat",
        c: "155 aastat",
        d: "156 aastat",
        correct: "a",
    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})