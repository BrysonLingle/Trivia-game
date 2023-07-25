
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
} )

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
       
      } else  { 
      answer = c.target.innerText
      console.log(answer)
     }
      if (c.target.innerText === carQuestions[0].correctAnswer ) {
      //  score++;
      //  answered.push(0);
      score = i++
      
      // console.log('this is true')//next step make correct answer green
      
      }
   function loadscore(){
      const CurrentScore = document.getElementbyId('currentScore')
      currentScore.textContent = score
   }
   
   function loadscore() 
}