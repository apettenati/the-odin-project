const questions = [
    {
        question: "What is 10 + 10?",
        options: ["8", "28", "30", "20"],
        answer: "20"
    },
    {
        question: "What is the extension for a JavaScript file?",
        options: ["js", "txt", "py"],
        answer: "js"
    }
];

let question_number = 0;
let correct = 0;

document.addEventListener("DOMContentLoaded", () => {
    load_question();
});

function load_question() {
        document.querySelector("#question").innerHTML = questions[question_number].question;

        const options = document.querySelector("#options");
        options.innerHTML = "";
        for (const option of questions[question_number].options) {
            options.innerHTML += `<button class="option">${option}</button>`;
        }

        document.querySelectorAll(".option").forEach(option => {
            option.onclick = () => {
                const choice = option.textContent;
                validate_answer(choice)
                document.querySelector("#correct").innerHTML = `${correct} of ${questions.length}` 
                question_number++;
                console.log(question_number)
                if (question_number < questions.length) {
                    load_question()
                } else {
                    document.querySelector("#question").innerHTML = "Game over!"
                    options.innerHTML = "";
                }
            }
        });
}

function validate_answer(choice) {
    const answer = questions[question_number].answer
    if (choice == answer) {
        correct++;
    }
}