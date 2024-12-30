const quizData = [
    // Web Development Questions
    {
        question: "Which language is used for styling web pages?",
        a: "HTML",
        b: "JQuery",
        c: "CSS",
        d: "XML",
        correct: "c",
        category: "web-dev",
        difficulty: "easy",
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        a: "style",
        b: "class",
        c: "id",
        d: "font",
        correct: "a",
        category: "web-dev",
        difficulty: "medium",
    },
    {
        question: "Which JavaScript framework is developed by Facebook?",
        a: "Angular",
        b: "React",
        c: "Vue",
        d: "Svelte",
        correct: "b",
        category: "web-dev",
        difficulty: "hard",
    },

    // General Knowledge Questions
    {
        question: "What is the largest planet in our solar system?",
        a: "Earth",
        b: "Mars",
        c: "Jupiter",
        d: "Saturn",
        correct: "c",
        category: "general-knowledge",
        difficulty: "easy",
    },
    {
        question: "Who painted the Mona Lisa?",
        a: "Vincent van Gogh",
        b: "Leonardo da Vinci",
        c: "Pablo Picasso",
        d: "Claude Monet",
        correct: "b",
        category: "general-knowledge",
        difficulty: "medium",
    },
    {
        question: "What is the capital city of Australia?",
        a: "Sydney",
        b: "Melbourne",
        c: "Canberra",
        d: "Brisbane",
        correct: "c",
        category: "general-knowledge",
        difficulty: "hard",
    },

    // Programming Questions
    {
        question: "Which programming language is known as the language of the web?",
        a: "Java",
        b: "Python",
        c: "C++",
        d: "JavaScript",
        correct: "d",
        category: "programming",
        difficulty: "easy",
    },
    {
        question: "Who is the creator of Linux?",
        a: "Linus Torvalds",
        b: "Dennis Ritchie",
        c: "Ken Thompson",
        d: "Bill Gates",
        correct: "a",
        category: "programming",
        difficulty: "medium",
    },
    {
        question: "What does 'OOP' stand for in programming?",
        a: "Object-Oriented Programming",
        b: "Original Object Protocol",
        c: "Operational Output Process",
        d: "Object-Organized Paradigm",
        correct: "a",
        category: "programming",
        difficulty: "hard",
    },
{
        question: "Which language is used for styling web pages?",
        a: "HTML",
        b: "JQuery",
        c: "CSS",
        d: "XML",
        correct: "c",
        category: "web-dev",
        difficulty: "easy",
    },
    {
        question: "Which tag is used to define a hyperlink in HTML?",
        a: "<link>",
        b: "<a>",
        c: "<href>",
        d: "<hyperlink>",
        correct: "b",
        category: "web-dev",
        difficulty: "easy",
    },
    {
        question: "Which HTML attribute is used to define inline styles?",
        a: "style",
        b: "class",
        c: "id",
        d: "font",
        correct: "a",
        category: "web-dev",
        difficulty: "medium",
    },
    {
        question: "What does 'HTML' stand for?",
        a: "Hypertext Markup Language",
        b: "Hyperlink Text Markup Language",
        c: "Hyper Markup Text Language",
        d: "Hyperlink and Text Markup Language",
        correct: "a",
        category: "web-dev",
        difficulty: "medium",
    },
    {
        question: "Which JavaScript framework is developed by Facebook?",
        a: "Angular",
        b: "React",
        c: "Vue",
        d: "Svelte",
        correct: "b",
        category: "web-dev",
        difficulty: "hard",
    },
    {
        question: "Which version of HTML introduced semantic tags like <header> and <footer>?",
        a: "HTML4",
        b: "HTML5",
        c: "XHTML",
        d: "HTML3.2",
        correct: "b",
        category: "web-dev",
        difficulty: "hard",
    },

    // General Knowledge Questions
    {
        question: "What is the largest planet in our solar system?",
        a: "Earth",
        b: "Mars",
        c: "Jupiter",
        d: "Saturn",
        correct: "c",
        category: "general-knowledge",
        difficulty: "easy",
    },
    {
        question: "What is the boiling point of water at sea level in degrees Celsius?",
        a: "50°C",
        b: "100°C",
        c: "200°C",
        d: "0°C",
        correct: "b",
        category: "general-knowledge",
        difficulty: "easy",
    },
    {
        question: "Who painted the Mona Lisa?",
        a: "Vincent van Gogh",
        b: "Leonardo da Vinci",
        c: "Pablo Picasso",
        d: "Claude Monet",
        correct: "b",
        category: "general-knowledge",
        difficulty: "medium",
    },
    {
        question: "Which year did World War II end?",
        a: "1941",
        b: "1945",
        c: "1950",
        d: "1939",
        correct: "b",
        category: "general-knowledge",
        difficulty: "medium",
    },
    {
        question: "What is the capital city of Australia?",
        a: "Sydney",
        b: "Melbourne",
        c: "Canberra",
        d: "Brisbane",
        correct: "c",
        category: "general-knowledge",
        difficulty: "hard",
    },
    {
        question: "Which is the smallest country in the world by area?",
        a: "Monaco",
        b: "Vatican City",
        c: "San Marino",
        d: "Liechtenstein",
        correct: "b",
        category: "general-knowledge",
        difficulty: "hard",
    },

    // Programming Questions
    {
        question: "Which programming language is known as the language of the web?",
        a: "Java",
        b: "Python",
        c: "C++",
        d: "JavaScript",
        correct: "d",
        category: "programming",
        difficulty: "easy",
    },
    {
        question: "Which symbol is used to denote a comment in Python?",
        a: "//",
        b: "#",
        c: "/* */",
        d: "<!-- -->",
        correct: "b",
        category: "programming",
        difficulty: "easy",
    },
    {
        question: "Who is the creator of Linux?",
        a: "Linus Torvalds",
        b: "Dennis Ritchie",
        c: "Ken Thompson",
        d: "Bill Gates",
        correct: "a",
        category: "programming",
        difficulty: "medium",
    },
    {
        question: "Which keyword is used to declare a constant variable in JavaScript?",
        a: "var",
        b: "const",
        c: "let",
        d: "constant",
        correct: "b",
        category: "programming",
        difficulty: "medium",
    },
    {
        question: "What does 'OOP' stand for in programming?",
        a: "Object-Oriented Programming",
        b: "Original Object Protocol",
        c: "Operational Output Process",
        d: "Object-Organized Paradigm",
        correct: "a",
        category: "programming",
        difficulty: "hard",
    },
    {
        question: "What is the term for a function inside a class in Python?",
        a: "Constructor",
        b: "Method",
        c: "Attribute",
        d: "Variable",
        correct: "b",
        category: "programming",
        difficulty: "hard",
    },
];

const startBtn = document.getElementById("start-btn");
const quizContainer = document.getElementById("quiz");
const startContainer = document.querySelector(".start-container");
const summaryContainer = document.getElementById("summary");
const timerEl = document.getElementById("time");
const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const lifeline50Btn = document.getElementById("lifeline-50");
const skipBtn = document.getElementById("skip");

let currentQuiz = 0;
let score = 0;
let timer;
let timeLeft = 15;
let selectedCategory = "web-dev";
let selectedDifficulty = "easy";
let filteredQuestions = [];

startBtn.addEventListener("click", () => {
    selectedCategory = document.getElementById("category-select").value;
    selectedDifficulty = document.getElementById("difficulty-select").value;
    timeLeft = Number(document.getElementById("custom-timer").value);
    timerEl.innerText = timeLeft;

    filteredQuestions = quizData.filter(
        (q) => q.category === selectedCategory && q.difficulty === selectedDifficulty
    );

    if (filteredQuestions.length === 0) {
        alert("No questions available for the selected category and difficulty. Please try different settings.");
        return;
    }

    startContainer.style.display = "none";
    quizContainer.style.display = "block";
    loadQuiz();
});

function loadQuiz() {
    if (currentQuiz >= filteredQuestions.length) {
        endQuiz();
        return;
    }

    deselectAnswers();
    clearInterval(timer);
    startTimer();

    const currentQuizData = filteredQuestions[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    document.getElementById("current-question").innerText = currentQuiz + 1;
    document.getElementById("total-questions").innerText = filteredQuestions.length;
}

function deselectAnswers() {
    answerEls.forEach((el) => (el.checked = false));
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        timerEl.innerText = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);
}

function nextQuestion() {
    if (currentQuiz < filteredQuestions.length - 1) {
        currentQuiz++;
        loadQuiz();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    quizContainer.style.display = "none";
    summaryContainer.style.display = "block";

    document.getElementById("final-score").innerText = `${score}/${filteredQuestions.length}`;
    document.getElementById("summary-category").innerText = selectedCategory;
    document.getElementById("summary-difficulty").innerText = selectedDifficulty;
}

submitBtn.addEventListener("click", () => {
    const answer = Array.from(answerEls).find((el) => el.checked)?.id;

    if (answer && answer === filteredQuestions[currentQuiz].correct) {
        score++;
    }

    nextQuestion();
});

lifeline50Btn.addEventListener("click", () => {
    const currentQuizData = filteredQuestions[currentQuiz];
    const incorrectAnswers = ["a", "b", "c", "d"].filter(
        (opt) => opt !== currentQuizData.correct
    );

    const toRemove = incorrectAnswers.slice(0, 2);
    toRemove.forEach((id) => (document.getElementById(`${id}_text`).innerText = ""));
});

skipBtn.addEventListener("click", nextQuestion);