const quizQuestions = [
     {
          'question': "What does HTML stand for?",
          'a': "Hyper Transfer Markup Language",
          'b': "Hyper Text Markup Language",
          'c': "High-level Text Markup Language",
          'd': "Hyper Tool Markup Language",
          'correctAnswer': "Hyper Text Markup Language"
     },
     {
          'question': "Which HTML tag is used to create a hyperlink?",
          'a': "<link>",
          'b': "<a>",
          'c': "<hyperlink>",
          'd': "<url>",
          'correctAnswer': "<a>"
     },
     {
          'question': "What is the purpose of the HTML <head> element?",
          'a': "To define the main content of the document",
          'b': "To specify the layout of the document",
          'c': "To contain metadata about the document",
          'd': "To define a header for the document",
          'correctAnswer': "To contain metadata about the document"
     },
     {
          'question': "Which HTML tag is used to create an unordered list?",
          'a': "<ol>",
          'b': "<ul>",
          'c': "<li>",
          'd': "<list>",
          'correctAnswer': "<ul>"
     },
     {
          'question': "What does the HTML <br> tag represent?",
          'a': "Break",
          'b': "Bold",
          'c': "Blockquote",
          'd': "Background",
          'correctAnswer': "Break"
     },
     {
          'question': "Which HTML attribute is used to define inline styles?",
          'a': "class",
          'b': "style",
          'c': "font",
          'd': "inline",
          'correctAnswer': "style"
     },
     {
          'question': "What does the HTML <img> tag represent?",
          'a': "Image",
          'b': "Input",
          'c': "Inline",
          'd': "Index",
          'correctAnswer': "Image"
     },
     {
          'question': "Which HTML element is used to define the structure of an HTML document?",
          'a': "<body>",
          'b': "<head>",
          'c': "<html>",
          'd': "<document>",
          'correctAnswer': "<html>"
     },
     {
          'question': "What is the purpose of the HTML <div> element?",
          'a': "To create a hyperlink",
          'b': "To define a division or a section in an HTML document",
          'c': "To display an image",
          'd': "To format text as bold",
          'correctAnswer': "To define a division or a section in an HTML document"
     },
     {
          'question': "Which HTML tag is used to define the structure of a table?",
          'a': "<table>",
          'b': "<tr>",
          'c': "<td>",
          'd': "<th>",
          'correctAnswer': "<table>"
     }
];
let index = 0;
let total = quizQuestions.length;
const quesBox = document.getElementById('quesBox');
const options = document.querySelectorAll('.option');
let correct = 0, incorrect = 0;

const loadQuestion = () => {
     if (index === total) {
          return endQuiz();
     }
     reset();
     const data = quizQuestions[index];
     quesBox.innerText = `${index + 1}) ${data.question}`;
     options[0].nextElementSibling.innerText = data.a;
     options[1].nextElementSibling.innerText = data.b;
     options[2].nextElementSibling.innerText = data.c;
     options[3].nextElementSibling.innerText = data.d;
}

document.querySelector("#submit").addEventListener(
     "click",
     function () {
          const data = quizQuestions[index];
          const ans = getAnswer();
          if (ans === data.correctAnswer) {
               correct++;
          } else {
               incorrect++;
          }
          index++;
          loadQuestion();
     }
);

const getAnswer = () => {
     let ans;
     options.forEach((input) => {
          if (input.checked) {
               ans = input.value;
          }
     });
     return ans;
}

const reset = () => {
     options.forEach((input) => {
          input.checked = false;
     });
}

const endQuiz = () => {
     document.getElementById('box').innerHTML = `<h3>Thank you for playing Quiz</h3>
     <h2>${correct}/${total} are correct</h2>`;
}

loadQuestion();