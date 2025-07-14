// === Dark Mode Toggle with Animation ===
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Add smooth transition for background and text color
document.body.style.transition = "background 0.5s, color 0.5s";

// === Typewriter Restart with Blinking Cursor ===
window.addEventListener("load", () => {
    const typewriter = document.querySelector(".typewriter");
    const text = typewriter.textContent;
    typewriter.textContent = "";

    // Add blinking cursor
    let cursor = document.createElement("span");
    cursor.className = "typewriter-cursor";
    cursor.textContent = "|";
    typewriter.appendChild(cursor);

    let i = 0;
    function type() {
        if (i < text.length) {
            cursor.before(document.createTextNode(text.charAt(i)));
            i++;
            setTimeout(type, 100);
        }
    }
    type();
});

// === Chatbot Greeting Animation (Fade In/Out) ===
document.addEventListener("DOMContentLoaded", () => {
    const chatbotText = document.getElementById("chatbot-text");
    const greetings = [
        "👋 Welcome to my digital world!",
        "✨ Explore my projects and skills!",
        "🚀 Ready to collaborate? Let's go!"
    ];

    let index = 0;
    chatbotText.style.opacity = 1;
    function showGreeting() {
        chatbotText.style.opacity = 0;
        setTimeout(() => {
            chatbotText.textContent = greetings[index];
            chatbotText.style.opacity = 1;
            index = (index + 1) % greetings.length;
        }, 500);
    }
    setInterval(showGreeting, 4000);
    showGreeting();
});
