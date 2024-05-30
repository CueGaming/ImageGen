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
        // Extract code type from user message (e.g., HTML, CSS, JavaScript)
        const codeType = getCodeType(message);
        
        // Generate code snippet based on code type
        let codeSnippet = '';
        switch (codeType) {
            case 'html':
                codeSnippet = generateHTMLCode();
                break;
            case 'css':
                codeSnippet = generateCSSCode();
                break;
            case 'javascript':
                codeSnippet = generateJavaScriptCode();
                break;
            default:
                addMessage('bot', 'Sorry, I am unable to generate code for that language. Please specify HTML, CSS, or JavaScript.');
                return;
        }

        addMessage('bot', 'Here is a simple ' + codeType.toUpperCase() + ' code snippet:\n' + codeSnippet);
    }

    function getCodeType(message) {
        // Regular expressions to identify code types
        const htmlRegex = /\b(html|html5?)\b/i;
        const cssRegex = /\b(css|stylesheet)\b/i;
        const javascriptRegex = /\b(javascript|js)\b/i;

        if (htmlRegex.test(message)) {
            return 'html';
        } else if (cssRegex.test(message)) {
            return 'css';
        } else if (javascriptRegex.test(message)) {
            return 'javascript';
        } else {
            return '';
        }
    }

    function generateHTMLCode() {
        return '<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Document</title>\n</head>\n<body>\n    <h1>Hello, world!</h1>\n</body>\n</html>';
    }

    function generateCSSCode() {
        return 'body {\n    background-color: #f0f0f0;\n    font-family: Arial, sans-serif;\n}';
    }

    function generateJavaScriptCode() {
        return 'document.addEventListener("DOMContentLoaded", function() {\n    console.log("Page loaded.");\n});';
    }
});
