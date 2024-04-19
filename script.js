const questions = [
    {
        question: "Q1. Which country is famous for the Eiffel Tower?",
        answers: [
            {text: "a) Italy", correct: false},
            {text: "b) France", correct: true},
            {text: "c) Spain", correct: false},
            {text: "d) Germany", correct: false}
        ]
    },
    {
        question: "Q2. Which country is known for its kangaroos and koalas?",
        answers: [
            {text: "a) Brazil", correct: false},
            {text: "b) Australia", correct: true},
            {text: "c) Canada", correct: false},
            {text: "d) New Zealand", correct: false}
        ]
    },
    {
        question: "Q3. Which country is home to the Great Wall?",
        answers: [
            {text: "a) Japan", correct: false},
            {text: "b) China", correct: true},
            {text: "c) India", correct: false},
            {text: "d) South Korea", correct: false}
        ]
    },
    {
        question: "Q4. Which country is known for its ancient city of Angkor Wat?",
        answers: [
            {text: "a) Laos", correct: false},
            {text: "b) Vietnam", correct: false},
            {text: "c) Cambodia", correct: true},
            {text: "d) Thailand", correct: false}
        ]
    },
    {
        question: "Q5. Which country is famous for its pyramids and Sphinx?",
        answers: [
            {text: "a) Sweden", correct: false},
            {text: "b) Canada", correct: true},
            {text: "c) Norway", correct: false},
            {text: "d) Denmark", correct: false}
        ]
    },
    {
        question: "Q6. Which country is located in the southern hemisphere and is known for its Maori culture?",
        answers: [
            {text: "a) Fiji", correct: false},
            {text: "b) New Zealand", correct: true},
            {text: "c) Indonesia", correct: false},
            {text: "d) Papua New Guinea", correct: false}
        ]
    },
    {
        question: "Q7. Which country is famous for its tango dance?",
        answers: [
            {text: "a) Brazil", correct: false},
            {text: "b) Argentina", correct: true},
            {text: "c) Colombia", correct: false},
            {text: "d) Chile", correct: false}
        ]
    },
    {
        question: "Q8. Which country is famous for its stunning fjords, Viking history, and Northern Lights?",
        answers: [
            {text: "a) Norway", correct: true},
            {text: "b) Denmark", correct: false},
            {text: "c) Iceland", correct: false},
            {text: "d) Sweden", correct: false}
        ]
    },
    {
        question: "Q9. Which country is located in the heart of Europe and is famous for its cheese and chocolates?",
        answers: [
            {text: "a) Belgium", correct: false},
            {text: "b) Switzerland", correct: true},
            {text: "c) Austria", correct: false},
            {text: "d) Germany", correct: false}
        ]
    },
    {
        question: "Q10. Which country is famous for its ancient city of Petra?",
        answers: [
            {text: "a) Jordan", correct: true},
            {text: "b) Iraq", correct: false},
            {text: "c) Lebanon", correct: false},
            {text: "d) Syria", correct: false}
        ]
    },
    {
        question: "Q11. Which country is known for its beautiful beaches and samba music?",
        answers: [
            {text: "a) Argentina", correct: false},
            {text: "b) Brazil", correct: true},
            {text: "c) Chile", correct: false},
            {text: "d) Uruguay", correct: false}
        ]
    },
    {
        question: "Q12. Which country is famous for its pyramids and pharaohs?",
        answers: [
            {text: "a) Sudan", correct: false},
            {text: "b) Egypt", correct: true},
            {text: "c) Libya", correct: false},
            {text: "d) Algeria", correct: false}
        ]
    },
    {
        question: "Q13. Which country is home to the iconic Big Ben clock tower?",
        answers: [
            {text: "a) France", correct: false},
            {text: "b) United Kingdom", correct: true},
            {text: "c) Italy", correct: false},
            {text: "d) Germany", correct: false}
        ]
    },
    {
        question: "Q14. Which country is known for its fjords, Vikings, and the Aurora Borealis?",
        answers: [
            {text: "a) Denmark", correct: false},
            {text: "b) Sweden", correct: false},
            {text: "c) Norway", correct: true},
            {text: "d) Finland", correct: false}
        ]
    },
    {
        question: "Q15. Which country is famous for its delicious sushi and cherry blossoms?",
        answers: [
            {text: "a) China", correct: false},
            {text: "b) South Korea", correct: false},
            {text: "c) Japan", correct: true},
            {text: "d) Thailand", correct: false}
        ]
    },
    {
        question: "Q16. Which country is located on the southern tip of Africa and is known for its diverse wildlife?",
        answers: [
            {text: "a) Tanzania", correct: false},
            {text: "b) Kenya", correct: false},
            {text: "c) South Africa", correct: true},
            {text: "d) Mozambique", correct: false}
        ]
    },
    {
        question: "Q17. Which country is famous for its ancient ruins of Machu Picchu?",
        answers: [
            {text: "a) Peru", correct: true},
            {text: "b) Colombia", correct: false},
            {text: "c) Bolivia", correct: false},
            {text: "d) Ecuador", correct: false}
        ]
    },
    {
        question: "Q18. Which country is known for its stunning beaches, tango music, and Patagonia region?",
        answers: [
            {text: "a) Chile", correct: false},
            {text: "b) Brazil", correct: false},
            {text: "c) Argentina", correct: true},
            {text: "d) Paraguay", correct: false}
        ]
    },
    {
        question: "Q19. Which country is famous for its delicious pastries like croissants and macarons?",
        answers: [
            {text: "a) Spain", correct: false},
            {text: "b) Italy", correct: false},
            {text: "c) France", correct: true},
            {text: "d) Greece", correct: false}
        ]
    },
    {
        question: "Q20. Which country is known for its rich history, including the Acropolis and Parthenon?",
        answers: [
            {text: "a) Turkey", correct: false},
            {text: "b) Greece", correct: true},
            {text: "c) Cyprus", correct: false},
            {text: "d) Malta", correct: false}
        ]
    },
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;
const questionsPerPage = 10;
let answered = false;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    resetState(); // Reset the state
    showQuestion();
    nextButton.style.display = "none"; // Hide the "Next" button initially
}

function showQuestion() {
    resetState();
    const startIndex = currentQuestionIndex * questionsPerPage;
    const endIndex = startIndex + questionsPerPage;
    const currentQuestions = questions.slice(startIndex, endIndex);

    currentQuestions.forEach((question, index) => {
        let questionNo = startIndex + index + 1;
        let questionText = questionNo + ". " + question.question;

        const questionElement = document.createElement("h2");
        questionElement.innerText = questionText;
        answerButtons.appendChild(questionElement);

        // Create image element for flag
        const flagImage = document.createElement("img");
        flagImage.src = `flags/flag${startIndex + index + 1}.jpg`; // Adjust the path to your flag images
        flagImage.alt = "Flag"; // Add alt text for accessibility
        answerButtons.appendChild(flagImage);

        question.answers.forEach(answer => {
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn");
            answerButtons.appendChild(button);
            if (answer.correct) {
                button.dataset.correct = answer.correct;
            }
            button.addEventListener("click", selectAnswer);
        });
    });
}


function resetState() {
    questionElement.innerHTML = '';
    answerButtons.innerHTML = '';
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    selectedBtn.disabled = true;
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.addEventListener("click", startQuiz, { once: true });
    nextButton.style.display = "block";
}


function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex * questionsPerPage < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}
nextButton.addEventListener("click", handleNextButton);


startQuiz()