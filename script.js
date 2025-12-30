const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

const chatButton = document.getElementById("chatButton");
const chatWindow = document.getElementById("chatWindow");
const chatClose = document.getElementById("chatClose");
const chatMessages = document.getElementById("chatMessages");
const chatInput = document.getElementById("chatInput");

hamburger?.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

chatButton.addEventListener("click", () => {
    chatWindow.style.display = "flex";
});

chatClose.addEventListener("click", () => {
    chatWindow.style.display = "none";
});

function sendMessage() {
    const msg = chatInput.value.trim();
    if (!msg) return;

    const userMsg = document.createElement("div");
    userMsg.className = "message user";
    userMsg.textContent = msg;
    chatMessages.appendChild(userMsg);

    chatInput.value = "";
    chatMessages.scrollTop = chatMessages.scrollHeight;

    setTimeout(() => {
        const botMsg = document.createElement("div");
        botMsg.className = "message bot";

        const replies = [
            "We offer self-paced virtual internships.",
            "You can earn certificates after completion.",
            "Which domain are you interested in?",
            "We also provide placement assistance!",
            "Happy to help you grow your career 🚀"
        ];

        botMsg.textContent = replies[Math.floor(Math.random() * replies.length)];
        chatMessages.appendChild(botMsg);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 800);
}

function scrollToFeatures() {
    document.getElementById("features").scrollIntoView({ behavior: "smooth" });
}
