let nombre;
let questions = ["Question 1", "Question 2", "Question 3"];
let answers = [];

const question = (question) => {
    process.stdout.write(questions[question]);
}

process.stdin.on('data', (data) => {
    answers.push(data.toString());

    if (answers.length < questions.length) {
        question(answers.length);
    } else {
        process.exit();
    }
});

question(0);