const questions = [
     {
          question: "What does HTML stand for?",
          answers: [
               { text: "Hyper Transfer Markup Language", correct: false },
               { text: "Hyper Text Markup Language", correct: true },
               { text: "High-level Text Markup Language", correct: false },
               { text: "Hyper Tool Markup Language", correct: false }
          ]
     },
     {
          question: "Which HTML tag is used to create a hyperlink?",
          answers: [
               { text: "link", correct: false },
               { text: "a", correct: true },
               { text: "hyperlink", correct: false },
               { text: "url", correct: false }
          ]
     },
     {
          question: "What is the purpose of the HTML head element?",
          answers: [
               { text: "To define the main content of the document", correct: false },
               { text: "To specify the layout of the document", correct: false },
               { text: "To contain metadata about the document", correct: true },
               { text: "To define a header for the document", correct: false }
          ]
     },
     {
          question: "Which HTML tag is used to create an unordered list?",
          answers: [
               { text: "ol", correct: false },
               { text: "ul", correct: true },
               { text: "li", correct: false },
               { text: "list", correct: false }
          ]
     },
     {
          question: "What does the HTML br tag represent?",
          answers: [
               { text: "Break", correct: true },
               { text: "Bold", correct: false },
               { text: "Blockquote", correct: false },
               { text: "Background", correct: false }
          ]
     },
     {
          question: "Which HTML attribute is used to define inline styles?",
          answers: [
               { text: "class", correct: false },
               { text: "style", correct: true },
               { text: "font", correct: false },
               { text: "inline", correct: false }
          ]
     },
     {
          question: "What does the HTML img tag represent?",
          answers: [
               { text: "Image", correct: true },
               { text: "Input", correct: false },
               { text: "Inline", correct: false },
               { text: "Index", correct: false }
          ]
     },
     {
          question: "Which HTML element is used to define the structure of an HTML document?",
          answers: [
               { text: "body", correct: false },
               { text: "head", correct: false },
               { text: "html", correct: true },
               { text: "document", correct: false }
          ]
     },
     {
          question: "What is the purpose of the HTML div element?",
          answers: [
               { text: "To create a hyperlink", correct: false },
               { text: "To define a division or a section in an HTML document", correct: true },
               { text: "To display an image", correct: false },
               { text: "To format text as bold", correct: false }
          ]
     },
     {
          question: "Which HTML tag is used to define the structure of a table?",
          answers: [
               { text: "table", correct: true },
               { text: "tr", correct: false },
               { text: "td", correct: false },
               { text: "th", correct: false }
          ]
     }
];

const questionElement = document.getElementById('question');
const answerButton = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
     currentQuestionIndex = 0;
     score = 0;
     nextButton.innerHTML = 'Next';
     showQuestion();
}

function showQuestion() {
     resetState();
     let currentQuestion = questions[currentQuestionIndex];
     let questionNo = currentQuestionIndex + 1;
     questionElement.innerHTML = questionNo + ". " + currentQuestion.question

     currentQuestion.answers.forEach(answer => {
          const button = document.createElement('button');
          button.innerHTML = answer.text;
          button.classList.add('btn');
          answerButton.appendChild(button);
          if (answer.correct) {
               button.dataset.correct = answer.correct;
          }
          button.addEventListener('click', selectAnswer);
     });
}

function resetState() {
     nextButton.style.display = 'none';
     while (answerButton.firstChild) {
          answerButton.removeChild(answerButton.firstChild);
     }
}

function selectAnswer(e) {
     const selectBtn = e.target;
     const isCorrect = selectBtn.dataset.correct === "true";
     if (isCorrect) {
          selectBtn.classList.add("correct");
          score++;
     } else {
          selectBtn.classList.add('incorrect');
     }

     Array.from(answerButton.children).forEach(button => {
          if (button.dataset.correct === "true") {
               button.classList.add('correct');
          }
          button.disabled = true;
     });
     nextButton.style.display = 'block';
}

function showScore() {
     resetState();
     questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
     nextButton.innerHTML = "Play Again";
     nextButton.style.display = "block";
}

function handleNextQuestion() {
     currentQuestionIndex++;
     if (currentQuestionIndex < questions.length) {
          showQuestion();
     } else {
          showScore();
     }
}

nextButton.addEventListener('click', () => {
     if (currentQuestionIndex < questions.length) {
          handleNextQuestion();
     } else {
          startQuiz(); // Reset the quiz if it reaches the end
     }
});

startQuiz();