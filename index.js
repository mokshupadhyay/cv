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