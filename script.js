// Page navigation
let currentPage = 1;

// Envelope click handler
const envelope = document.getElementById('envelope');
const letter = document.getElementById('letter');

envelope.addEventListener('click', () => {
    envelope.classList.add('open');
    
    setTimeout(() => {
        goToPage(2);
    }, 1500);
});

// Yes button handler
const yesBtn = document.getElementById('yesBtn');
yesBtn.addEventListener('click', () => {
    // Add a little heart animation
    createHearts();
    setTimeout(() => {
        goToPage(3);
    }, 1000);
});

// No button handler - moves away when you try to click it!
const noBtn = document.getElementById('noBtn');
let noBtnClickCount = 0;

function moveNoButton() {
    noBtnClickCount++;
    
    // Make NO button position fixed if not already
    noBtn.style.position = 'fixed';
    
    const btnRect = noBtn.getBoundingClientRect();
    
    // Calculate random position within the viewport
    const maxX = window.innerWidth - btnRect.width - 20;
    const maxY = window.innerHeight - btnRect.height - 20;
    
    const randomX = Math.max(20, Math.random() * maxX);
    const randomY = Math.max(20, Math.random() * maxY);
    
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
    noBtn.style.transform = 'none';
    
    // Make the YES button bigger each time they try to click NO
    const currentScale = 1 + (noBtnClickCount * 0.1);
    yesBtn.style.transform = `scale(${currentScale})`;
    
    // After 3 attempts, show a playful message
    if (noBtnClickCount === 3) {
        const message = document.createElement('div');
        message.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: #ff69b4;
            color: white;
            padding: 15px 30px;
            border-radius: 30px;
            font-size: 1.2rem;
            z-index: 1000;
            box-shadow: 0 5px 20px rgba(255, 105, 180, 0.5);
        `;
        message.textContent = '😏 You know you want to say YES!';
        document.body.appendChild(message);
        
        setTimeout(() => {
            message.remove();
        }, 3000);
    }
    
    if (noBtnClickCount === 5) {
        const message = document.createElement('div');
        message.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: #ff69b4;
            color: white;
            padding: 15px 30px;
            border-radius: 30px;
            font-size: 1.2rem;
            z-index: 1000;
            box-shadow: 0 5px 20px rgba(255, 105, 180, 0.5);
        `;
        message.textContent = '❤️ Just click YES already! 😊';
        document.body.appendChild(message);
        
        setTimeout(() => {
            message.remove();
        }, 3000);
    }
}

noBtn.addEventListener('mouseenter', moveNoButton);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    moveNoButton();
});
noBtn.addEventListener('click', (e) => {
    e.preventDefault();
    moveNoButton();
});

// Continue button to date ideas
const continueBtn = document.getElementById('continueBtn');
continueBtn.addEventListener('click', () => {
    goToPage(4);
});

// Continue button to memories
const memoriesBtn = document.getElementById('memoriesBtn');
memoriesBtn.addEventListener('click', () => {
    goToPage(5);
});

// Memory cards flip
const memoryCards = document.querySelectorAll('.memory-card');
memoryCards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});

// Function to navigate between pages
function goToPage(pageNumber) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    const targetPage = document.getElementById(`page${pageNumber}`);
    targetPage.classList.add('active');
    
    currentPage = pageNumber;
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Create floating hearts animation
function createHearts() {
    const container = document.body;
    
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = '❤️';
            heart.style.position = 'fixed';
            heart.style.fontSize = Math.random() * 30 + 20 + 'px';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = '100%';
            heart.style.opacity = '1';
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '1000';
            heart.style.animation = `floatUp ${Math.random() * 2 + 3}s ease-out forwards`;
            
            container.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 5000);
        }, i * 100);
    }
}

// Add floating hearts animation to CSS dynamically
const style = document.createElement('style');
style.innerHTML = `
    @keyframes floatUp {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add idea cards hover effect with sound (optional)
const ideaCards = document.querySelectorAll('.idea-card');
ideaCards.forEach(card => {
    card.addEventListener('click', () => {
        card.style.background = 'linear-gradient(135deg, #ffe0f0, #ffeef8)';
        setTimeout(() => {
            card.style.background = 'white';
        }, 300);
    });
});

// Add some sparkle effect on page load
window.addEventListener('load', () => {
    createSparkles();
});

function createSparkles() {
    const container = document.body;
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const sparkle = document.createElement('div');
            sparkle.innerHTML = '✨';
            sparkle.style.position = 'fixed';
            sparkle.style.fontSize = Math.random() * 20 + 10 + 'px';
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.top = Math.random() * 100 + '%';
            sparkle.style.opacity = '0';
            sparkle.style.pointerEvents = 'none';
            sparkle.style.zIndex = '1000';
            sparkle.style.animation = 'sparkleAnim 2s ease-in-out forwards';
            
            container.appendChild(sparkle);
            
            setTimeout(() => {
                sparkle.remove();
            }, 2000);
        }, i * 100);
    }
}

// Add sparkle animation
const sparkleStyle = document.createElement('style');
sparkleStyle.innerHTML = `
    @keyframes sparkleAnim {
        0% {
            opacity: 0;
            transform: scale(0) rotate(0deg);
        }
        50% {
            opacity: 1;
            transform: scale(1) rotate(180deg);
        }
        100% {
            opacity: 0;
            transform: scale(0) rotate(360deg);
        }
    }
`;
document.head.appendChild(sparkleStyle);
