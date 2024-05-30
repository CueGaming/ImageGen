// script.js

document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('startButton');
    const htmlCode = document.getElementById('htmlCode');
    const runButton = document.getElementById('runButton');
    const tutorialHints = document.getElementById('tutorialHints');

    startButton.addEventListener('click', startGame);
    runButton.addEventListener('click', runCode);

    function startGame() {
        // Display initial challenge
        tutorialHints.innerHTML = 'Welcome to HTML Quest! Write HTML code to solve challenges.';
        htmlCode.value = '<!-- Write your HTML code here -->';
    }

    function runCode() {
        const playerCode = htmlCode.value;

        // Simulate basic validation for demonstration
        if (playerCode.includes('<html>') && playerCode.includes('<body>')) {
            tutorialHints.innerHTML = 'Challenge complete! Well done.';
        } else {
            tutorialHints.innerHTML = 'Your HTML code is incomplete. Try again.';
        }
    }
});
