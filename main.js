let round = 0;
const currentScore = document.getElementById("currentScore");

let questionText = document.querySelector("h2");
let carQuestions = [
  {
    question: "What was the first car brand?",
    correctAnswer: "Peugeot",
    options: ["Peugeot", "General Motors", "Ford", "Tesla"],
  },
  {
    question: "What is the most popular car in the world? ",
    correctAnswer: "Toyota Corrola",
    options: [
      "Ford Fiesta",
      "Chevy Malibu",
      "Toyota Corrola",
      "Hyndai Elantra",
    ],
  },
  {
    question: "Where was the worlds first paved road specifically for cars?",
    correctAnswer: "Queens New York",
    options: [
      "Milan Italy",
      "Queens New York",
      "Vienna Austria",
      "San Francisco",
    ],
  },
  {
    question: "Which country consumes the most gas every year?",
    correctAnswer: "United States",
    options: ["Mexico", "Russia", "China", "United States"],
  },
  {
    question: "What is the most common car color?",
    correctAnswer: "White",
    options: ["Red", "Gray", "Black", "White"],
  },
  {
    question: "What brand of car does James Bond drive",
    correctAnswer: "Aston Martin",
    options: ["Ferrari", "Aston Martin", "Porche", "Rolls"],
  },
  {
    question: "How many rings are in the Audi logo?",
    correctAnswer: "4",
    options: ["5", "4", "3", "6"],
  },
  {
    question: "What is the smallest car model ever made?",
    correctAnswer: "Peel P50",
    options: [
      "Bmw Isetta",
      "Cadillac Eldorado Convertible",
      "Peel P50",
      "Smart Car",
    ],
  },
  {
    question:
      "What was the first car in the world to be mass-produced on a moving assembly line in a factory?",
    correctAnswer: "Ford Model T",
    options: ["Ford Model T", "Ford Model K", "Ford Model F", "Ford Model K"],
  },
  {
    question:
      "ABS is a safety feature in many modern car models. What does it stand for? ",
    correctAnswer: "Anti-lock braking system",
    options: [
      "Anti-lock battery system",
      "Anti-lock block system",
      "Anti-lock bear system",
      "Anti-lock braking system",
    ],
  },
  {
    question: " Which luxury car brand has a prancing horse on its logo?",
    correctAnswer: "Ferrari",
    options: ["Ferrari", "Lamborghini", "Maybach", "Mclaren"],
  },
  {
    question: "What does SUV stand for?",
    correctAnswer: "Sports Utility Vehicle",
    options: [
      "Speed Universal Vehicle",
      "Sports Utility Vehicle",
      "Sports Universal Vehicle",
      "Small Universal Vehicle",
    ],
  },
];
const option1 = document.getElementById("option1");

let score = 0;
const questions1 = document.querySelector("#questionField");

const answerButtons = document.querySelectorAll(".question-buttons");

answerButtons.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    checkAnswer(event);
  });
});
function renderQuestion() {
  if (round < carQuestions.length) {
    questions1.innerText = carQuestions[round].question;
    for (let i = 0; i < answerButtons.length; i++) {
      let buttonsNow = answerButtons[i];
      buttonsNow.querySelector("span").innerText =
        carQuestions[round].options[i];
    }

  } else {
    questionText.innerHTML = "Congrats!";
  }
}

const nextButton = document.querySelector("#nextButton");
document.getElementById("nextButton").style.display = "none";

nextButton.addEventListener("click", function () {
  round++;
  if (round < carQuestions.length) {
    renderQuestion;
  } else {

    questionText.InnerHTML = "Congrats!";
    var fullReset = document.getElementById("fullReset");
    fullReset.addEventListener(
      "click",
      function (e) {
        location.reload();
      },
      false
    );
  }

  renderQuestion();
});

renderQuestion();

function checkAnswer(event) {
  let answer = "";
  if (event.target.tagName === "BUTTON") {
    answer = event.target.querySelector("span").innerText;
  } else {
    answer = event.target.innerText;

  }

  if (answer === carQuestions[round].correctAnswer) {
    score++;


    loadscore();
  } else {

  }

  setTimeout(() => {
    nextButton.click();
  }, 500);
}
function loadscore() {
  const currentScoreEl = document.getElementById("currentScore");
  currentScoreEl.textContent = score;
}
