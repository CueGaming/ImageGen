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
        // Simple response for quitting
        if (message.toLowerCase() === 'quit') {
            addMessage('bot', 'Goodbye!');
            return;
        }

        // Check for specific questions and provide informative answers
        if (message.toLowerCase().includes('how are you')) {
            addMessage('bot', 'I am just a bot, but I am doing well. How can I assist you today?');
            return;
        }

        // Add more logic to handle different types of questions and provide appropriate responses
        // For now, let's just echo the user's message
        addMessage('bot', 'Sorry, I am unable to answer that question. Please try asking something else.');
    }
});
