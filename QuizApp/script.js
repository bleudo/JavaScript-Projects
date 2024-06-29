const QUESTIONS = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            {text: "Shark", correct: false},
            {text: "Blue whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false}
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            {text: "Asia", correct: false},
            {text: "Australia", correct: true},
            {text: "Artic", correct: false},
            {text: "Africa", correct: false}
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answers: [
            {text: "Kalahari", correct: false},
            {text: "Gobi", correct: false},
            {text: "Sahara", correct: false},
            {text: "Antartica", correct: true}
        ]
    }
];
const QUESTION_ELEMENT = document.getElementById('question');
const ANWSER_BUTTON = document.getElementById('answer-buttons');
const NEXT_BUTTON = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;
