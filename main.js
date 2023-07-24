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

const carQuestions = {
   question: 'What was the first car brand?',
   answer: 'Peugeot',  
   options: ['Peugeot', "General Motors", 'Ford', 'Tesla']
}
const questions1 = document.querySelector('#questionfield')
const answerButtons = document.querySelectorAll('button-wrapper')

answerButtons.forEach(function(btn){
   btn.addEventListener('click', checkAnswer)
})
function renderQuestion(){
   questions1.innerText = carQuestions.question
   for (let i = 0; i < answerButtons.length; i++){
      let buttonsNow = answerButtons[i]
      buttonsNow.querySelector('span').innerText=carQuestions
   }

}
   renderQuestion()
   function chechAnswer(c){
      console.log(c.target)
   }

console.log(answer)