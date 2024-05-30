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

        // Check for coding-related questions and generate code snippets
        if (message.toLowerCase().includes('generate code')) {
            generateCode(message);
            return;
        }

        // Add more logic to handle different types of questions and provide appropriate responses
        // For now, let's just echo the user's message
        addMessage('bot', 'Sorry, I am unable to answer that question. Please try asking something else.');
    }

    function generateCode(message) {
        let codeType = '';
        if (message.toLowerCase().includes('html')) {
            codeType = 'html';
        } else if (message.toLowerCase().includes('css')) {
            codeType = 'css';
        } else if (message.toLowerCase().includes('javascript') || message.toLowerCase().includes('js')) {
            codeType = 'javascript';
        } else {
            addMessage('bot', 'Please specify HTML, CSS, or JavaScript.');
            return;
        }

        const codeSnippet = generateCodeSnippet(codeType);
        if (codeSnippet) {
            addMessage('bot', 'Here is a simple ' + codeType.toUpperCase() + ' code snippet:\n' + codeSnippet);
        } else {
            addMessage('bot', 'Sorry, I encountered an error while generating the code snippet.');
        }
    }

    function generateCodeSnippet(codeType) {
        switch (codeType) {
            case 'html':
                return '<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Document</title>\n</head>\n<body>\n    <h1>Hello, world!</h1>\n</body>\n</html>';
            case 'css':
                return 'body {\n    background-color: #f0f0f0;\n    font-family: Arial, sans-serif;\n}';
            case 'javascript':
                return 'document.addEventListener("DOMContentLoaded", function() {\n    console.log("Page loaded.");\n});';
            default:
                return null;
        }
    }
});
