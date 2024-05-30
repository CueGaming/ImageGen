// script.js

document.addEventListener('DOMContentLoaded', function() {
    const chatBox = document.getElementById('chatBox');
    const userInput = document.getElementById('userInput');
    const sendButton = document.getElementById('sendButton');

    sendButton.addEventListener('click', sendMessage);

    function sendMessage() {
        const userMessage = userInput.value.trim();
        if (userMessage === '') return;

        addMessage('user', userMessage);
        processMessage(userMessage);
        userInput.value = '';
    }

    function addMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message', sender);
        messageElement.innerText = message;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
    }

    function processMessage(message) {
        // Simple response for demonstration
        if (message.toLowerCase() === 'quit') {
            addMessage('bot', 'Goodbye!');
            return;
        }

        // Add more logic to handle different types of questions
        // and generate appropriate responses
        // For now, let's just echo the user's message
        addMessage('bot', message);
    }
});
