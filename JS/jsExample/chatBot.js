document.getElementById("userInput").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

function sendMessage() {
    var userInput = document.getElementById("userInput").value;
    if (userInput.trim() !== "") {
        var chatBox = document.getElementById("chatBox");

        //user message
        var userMessageDiv = document.createElement("div");
        userMessageDiv.className = "user-message";  
        userMessageDiv.innerText = userInput;
        chatBox.appendChild(userMessageDiv);

        //response
        var botMessageDiv = document.createElement("div");
        botMessageDiv.className = "bot-message";
        botMessageDiv.innerText = userInput;
        chatBox.appendChild(botMessageDiv);

        // clear the input
        document.getElementById("userInput").value = "";

        // once messages are up, scroll up and show recent messages
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}