let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.addEventListener("DOMContentLoaded", function () {
    const guessBtn = document.querySelector("button");
    guessBtn.addEventListener("click", checkGuess);
});

function checkGuess() {
    const guessInput = document.getElementById("guessInput");
    const message = document.getElementById("message");
    const attemptsText = document.getElementById("attempts");

    const guess = Number(guessInput.value);

    if (guess < 1 || guess > 100 || isNaN(guess)) {
        message.textContent = "❌ Enter a number between 1 and 100";
        return;
    }

    attempts++;

    if (guess === randomNumber) {
        message.textContent = "🎉 Correct! You guessed it!";
        attemptsText.textContent = "Attempts: " + attempts;
    } 
    else if (guess > randomNumber) {
        message.textContent = "📉 Too High!";
        attemptsText.textContent = "Attempts: " + attempts;
    } 
    else {
        message.textContent = "📈 Too Low!";
        attemptsText.textContent = "Attempts: " + attempts;
    }
}

function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById("guessInput").value = "";
    document.getElementById("message").textContent = "";
    document.getElementById("attempts").textContent = "";
}
