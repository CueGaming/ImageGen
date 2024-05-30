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

        // Check for requests to generate code
        if (message.toLowerCase().includes('generate code')) {
            generateCode();
            return;
        }

        // Add more logic to handle different types of questions and requests
        // For now, let's just echo the user's message
        addMessage('bot', message);
    }

    function generateCode() {
        // Simple code generation for demonstration
        const code = '<html>\n<head>\n    <title>My Webpage</title>\n</head>\n<body>\n    <h1>Hello, world!</h1>\n</body>\n</html>';
        addMessage('bot', 'Here is a simple HTML code:\n' + code);
    }
});
