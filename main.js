let round = 0; //ADDED rounds to track which question you are on

const currentScore = document.getElementById('currentScore');
console.log(currentScore);
let carQuestions = [
  {
   question: 'What was the first car brand?',
   correctAnswer: 'Peugeot',
   options: ['Peugeot', "General Motors", 'Ford', 'Tesla']
  },
  {
   question: 'What is the most popular car in the world? ',
   correctAnswer: 'Toyota Corrola',
   options: ['Ford Fiesta', 'Chevy Malibu', 'Toyota Corrola', 'Hyndai Elantra']
  },
  {
   question: 'Who founded the Ford Motor Company?',
   correctAnswer: 'Henry Ford',
   options: ['Henry Ford', 'Elon Musk', 'Thomas Edison', 'Alexander Graham Bell']
  }
 ];

const option1 = document.getElementById('option1');

let score = 0;
const questions1 = document.querySelector('#questionField');
console.log(questions1);
const answerButtons = document.querySelectorAll('.question-buttons'); //ADDED classes to the question buttons and specified you only wanted .question-buttons so you don't add the Next Question button to the array as well

answerButtons.forEach(function (btn) {
  btn.addEventListener('click', function(event) {
   checkAnswer(event);
  });
});

function renderQuestion() {
  questions1.innerText = carQuestions[round].question; //REPLACED the 0 with round so as the rounds increase, it moves through the carQuestions array
  for (let i = 0; i < answerButtons.length; i++) {
    let buttonsNow = answerButtons[i];
    buttonsNow.querySelector('span').innerText= carQuestions[round].options[i]; //REPLACED the 0 with round so as the rounds increase, it moves through the carQuestions array
  }
}

const nextButton = document.querySelector('#nextButton')

nextButton.addEventListener('click', function(){
  round++ //ADDED an increase to the round variable to the above renderQuestion function moves on to the next question in carQuestions
  renderQuestion()
})


renderQuestion();

function checkAnswer(event) {
  let answer = "";
  if (event.target.tagName === 'BUTTON') {
    answer = event.target.querySelector('span').innerText;
  } else {
    answer = event.target.innerText;
    console.log(answer);
  }

  if (answer === carQuestions[0].correctAnswer) {
    score++;
    console.log('Correct Answer!');
   // event.target.classlist.add('correct-answer')
    loadscore();
  }else {
   console.log('Wrong Answer')
   // event.target.classlist.add('wrong-answer')
  }

  function loadscore() {
   const currentScoreEl = document.getElementById('currentScore');
   currentScoreEl.textContent = score;
  }
}