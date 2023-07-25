// }]
// const results = document.getElementById('resultS')
// const pressButton = document.getElementById('check', answerS)
// pressButton.addEventListener('click' , answerS)
// function answerS() {
//    let number = 0
//    for (let i=0; i < carQuestions.length; i++){
//       const question = carQuestions[i]
//       const resultS = resultS.querySelector
//       }
//       if (a === q.correctA){
//          number++
//       }
//    } 
// // button.addEventListener('click', function() {

// // })


// // function questions (){
// //     var score = 0
// //     document.getElementsById('answerButtons1').answered
// //     {score ++;

// //         }
// //     }
// const carQuestions = [{
//    question: 'What was the first car brand',
//    answers: {a: 'Peugeot', b: 'General Motors', c: 'Ford', d: 'Tesla'},
//    correctAnswer: 'a'
// }
// ]
// //  }
// //  function questionsNum1 (question1){
// //    let firstQuestion1 = document.getElementById('firstQuestion');
// //    firstQuestion1.textContent = question1.firstQuestion
// //    let answers1 = document.querySelectorAll('.Buttons1')
// //    console.log(answers1)
// //  answers1.forEach(function(element, index){
// //    element.textContent =question1.buttons1s[index]
// //  })

// // }

// const carQuestions = [{
//    question: 'What was the first car brand?',
//    answer: 'Peugeot',  
//    options: ['Peugeot', "General Motors", 'Ford', 'Tesla']
// }]
//    let questionsCurrent = carQuestions[carQuestions.length-1]
//    const answered= []
// const questions1 = document.querySelector('#questionField')
// const answerButtons = document.querySelectorAll('#button-wrapper')

// answerButtons.forEach(function(btn){
//    btn.addEventListener('click', checkAnswer)
// })
// function renderQuestion(){
//    questions1.innerText = carQuestions[0].question
//    for (let i = 0; i < answerButtons.length; i++){
//       let buttonsNow = answerButtons[i]
//       buttonsNow.querySelector('span').innerText=carQuestions
//    }

// }
//    renderQuestion()
//    function chechAnswer(c){
//       console.log(c.target)
//       let answer = ""
//       if(c.target.tagName === 'button'){
//          answer = carQuestions.options[c.target.id]
//       }else if (c.target.tagName === 'span')  
//       answer=c.target.innerText
//    }

// console.log(answer)



const carQuestions = [{
   question: 'What was the first car brand?',
   correctAnswer: 'Peugeot',
   options: ['Peugeot', "General Motors", 'Ford', 'Tesla']
}]

// let questionsCurrent = carQuestions(question.length - 1)
let score = 0
const answered = 0
const questions1 = document.querySelector('#questionField')
console.log(questions1)
const answerButtons = document.querySelectorAll('Button')

answerButtons.forEach(function (btn) {
   btn.addEventListener('click', checkAnswer)
})
function renderQuestion() {
   questions1.innerText = carQuestions[0].question
   for (let i = 0; i < answerButtons.length; i++) {
       console.log(carQuestions[0].options[i])
       let buttonsNow = answerButtons[i]
       buttonsNow.querySelector('span').innerText = carQuestions[0].options[i]
   }

}

renderQuestion()

function checkAnswer(c) {
   let answer = ""
   if (c.target.tagName === 'BUTTON') {
       answer = c.target.querySelector('span').innerText
       
      } else if (c.target.tagName === 'SPAN') {
      answer = c.target.innerText
      console.log(answer)
   }
      if (c.target.innerText === carQuestions[0].correctAnswer ) {
      //  score++;
      //  answered.push(0);
      console.log('this is true')//next step make correct answer green
       }
      }
      function loadscore(){
         const CurrentScore = document.getElementbyId('currentScore')
         currentScore.textContent = score
      }



      // question: 'What was the first car brand?'
      // answers:[
      //    {text: 'Peugeot', correct: true},
      //    {text: 'General Motors', correct: false},
      //    {text: 'Ford', correct: false},
      //    {text: 'Tesla', correct: false},


      
// function checkAnswer(c) {
//    let answer = ""
//    if (c.target.tagName === 'BUTTON') {
//        answer = carQuestions.options[c.target.id]
//    } else if (c.target.tagName === 'SPAN')
//        answer = c.target.innerText
//       console.log(answer)
