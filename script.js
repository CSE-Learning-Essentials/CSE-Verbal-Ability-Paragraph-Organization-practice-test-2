function checkAnswers() {
    var correctAnswers = {
        q1: "C",
        q2: "A",
        q3: "D",
        q4: "B",
        q5: "C"
    };

    var userAnswers = {
        q1: document.querySelector('input[name="q1"]:checked')?.value,
        q2: document.querySelector('input[name="q2"]:checked')?.value,
        q3: document.querySelector('input[name="q3"]:checked')?.value,
        q4: document.querySelector('input[name="q4"]:checked')?.value,
        q5: document.querySelector('input[name="q5"]:checked')?.value
    };

    var score = 0;
    for (var question in correctAnswers) {
        if (userAnswers[question] === correctAnswers[question]) {
            score++;
        }
    }

    var resultMessage = score >= 4 ? "You passed the test!" : "You need more practice.";
    document.getElementById("result").innerHTML = `You scored ${score}/5. ${resultMessage}`;
}
