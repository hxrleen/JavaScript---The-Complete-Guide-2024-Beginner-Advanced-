// script.js

let questions = [
    {
        prompt: `What is the return type of @ViewChildren ?`,
        options: [
            "<QueryList>",
            "<ElementRef>",
            "<LinkedList>",
            "<domElement>",
        ],
        answer: "<QueryList>",
    },

    {
        prompt: `@ViewChild returns the ____ matching element that matches the selector from the template?`,
        options: [
            "all",
            "first",
            "last",
            "first and last",
        ],
        answer: "first",
    },

    {
        prompt: `What is the primary use of the @Input decorator in Angular??`,
        options: [
            "To bind data from child to parent component.",
            "To bind data from parent to child component.",
            "To listen to events from child component.",
            "To query DOM elements in the template",
        ],
        answer: "To bind data from parent to child component.",
    },

    {
        prompt: `Which Angular decorator is used to emit events from a child component to a parent component?`,
        options: ["@Input", "@Output", "@ViewChild", "@ViewChildren"],
        answer: "@Output",
    },

    {
        prompt: `What is the correct lifecycle hook to access a DOM element queried with @ViewChild?`,
        options: [
            "ngOnInit",
            "ngAfterContentInit",
            "ngAfterViewInit",
            "ngOnDestroy",
        ],
        answer: "ngAfterViewInit",
    },

    {
        prompt: `Which of the following scenarios would require using the @ViewChildren decorator instead of @ViewChild?`,
        options: [
            "You need to query a single element in the DOM.",
            "You need to access a single instance of a child component.",
            "You need to access multiple instances of a child component or DOM elements.",
            "You need to pass data from the parent component to a single child component.",
        ],
        answer: "You need to access multiple instances of a child component or DOM elements.",
    },

    {
        prompt: `In an Angular application, how can you ensure that a child component's @Input property is updated whenever the corresponding parent property changes, even if the change is asynchronous?`,
        options: [
            "Use the ngOnInit lifecycle hook",
            "Use the ngOnChanges lifecycle hook",
            "Use the ngAfterViewInit lifecycle hook",
            "Use the ngDoCheck lifecycle hook",
        ],
        answer: "Use the ngOnChanges lifecycle hook",
    },

    {
        prompt: `In the context of Angular change detection, when is it necessary to set { static: true } for @ViewChild or @ViewChildren?`,
        options: [
            "When the view child is inside an *ngIf directive.",
            "When the view child needs to be accessed during the ngOnInit lifecycle hook.",
            "When the view child is inside an ng-template.",
            "When the view child is a dynamic component.",
        ],
        answer: "When the view child needs to be accessed during the ngOnInit lifecycle hook.",
    },

    {
        prompt: `How can you programmatically trigger change detection in a child component from the parent component when using @ViewChild?`,
        options: [
            "Use ChangeDetectorRef.detectChanges in the parent component.",
            "Use ngOnChanges in the child component.",
            "Use Renderer2 in the parent component.",
            "Use ApplicationRef.tick in the parent component.",
        ],
        answer: "Use ChangeDetectorRef.detectChanges in the parent component.",
    },
];

// Get Dom Elements

let questionsEl =
    document.querySelector(
        "#questions"
    );
let timerEl =
    document.querySelector("#timer");
let choicesEl =
    document.querySelector("#options");
let submitBtn = document.querySelector(
    "#submit-score"
);
let startBtn =
    document.querySelector("#start");
let nameEl =
    document.querySelector("#name");
let feedbackEl = document.querySelector(
    "#feedback"
);
let reStartBtn =
    document.querySelector("#restart");

// Quiz's initial state
let currentQuestionIndex = 0;
let time = questions.length * 30;
let timerId;

// Start quiz and hide frontpage

function quizStart() {
    timerId = setInterval(
        clockTick,
        1000
    );
    timerEl.textContent = time;
    let landingScreenEl =
        document.getElementById(
            "start-screen"
        );
    landingScreenEl.setAttribute(
        "class",
        "hide"
    );
    questionsEl.removeAttribute(
        "class"
    );
    getQuestion();
}

// Loop through array of questions and
// Answers and create list with buttons
function getQuestion() {
    let currentQuestion =
        questions[currentQuestionIndex];
    let promptEl =
        document.getElementById(
            "question-words"
        );
    promptEl.textContent =
        currentQuestion.prompt;
    choicesEl.innerHTML = "";
    currentQuestion.options.forEach(
        function (choice, i) {
            let choiceBtn =
                document.createElement(
                    "button"
                );
            choiceBtn.setAttribute(
                "value",
                choice
            );
            choiceBtn.textContent =
                i + 1 + ". " + choice;
            choiceBtn.onclick =
                questionClick;
            choicesEl.appendChild(
                choiceBtn
            );
        }
    );
}

// Check for right answers and deduct
// Time for wrong answer, go to next question

function questionClick() {
    if (
        this.value !==
        questions[currentQuestionIndex]
            .answer
    ) {
        time -= 10;
        if (time < 0) {
            time = 0;
        }
        timerEl.textContent = time;
        feedbackEl.textContent = `Wrong! The correct answer was 
        ${questions[currentQuestionIndex].answer}.`;
        feedbackEl.style.color = "red";

    } else {
        feedbackEl.textContent =
            "Correct!";
        feedbackEl.style.color =
            "green";
    }
    feedbackEl.setAttribute(
        "class",
        "feedback"
    );
    setTimeout(function () {
        feedbackEl.setAttribute(
            "class",
            "feedback hide"
        );
    }, 2000);
    currentQuestionIndex++;
    if (
        currentQuestionIndex ===
        questions.length
    ) {
        quizEnd();
    } else {
        getQuestion();
    }
}

// End quiz by hiding questions,
// Stop timer and show final score

function quizEnd() {
    clearInterval(timerId);
    let endScreenEl =
        document.getElementById(
            "quiz-end"
        );
    endScreenEl.removeAttribute(
        "class"
    );
    let finalScoreEl =
        document.getElementById(
            "score-final"
        );
    finalScoreEl.textContent = time;
    questionsEl.setAttribute(
        "class",
        "hide"
    );
}

// End quiz if timer reaches 0

function clockTick() {
    time--;
    timerEl.textContent = time;
    if (time <= 0) {
        quizEnd();
    }
}


function returnHome() {
    location.reload();
};

// Save score in local storage
// Along with users' name

function saveHighscore() {
    let name = nameEl.value.trim();
    if (name !== "") {
        let highscores =
            JSON.parse(
                window.localStorage.getItem(
                    "highscores"
                )
            ) || [];
        let newScore = {
            score: time,
            name: name,
        };
        highscores.push(newScore);
        window.localStorage.setItem(
            "highscores",
            JSON.stringify(highscores)
        );
        alert(
            "Your Score has been Submitted"
        );
    }
}

// Save users' score after pressing enter

function checkForEnter(event) {
    if (event.key === "Enter") {
        saveHighscore();
        alert(
            "Your Score has been Submitted"
        );
    }
}
nameEl.onkeyup = checkForEnter;

// Save users' score after clicking submit

submitBtn.onclick = saveHighscore;

// Start quiz after clicking start quiz

startBtn.onclick = quizStart;

