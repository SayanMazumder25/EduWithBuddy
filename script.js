// Sample trending questions data
const trendingQuestions = [
    {
        title: "How to solve quadratic equations?",
        author: "MathExpert",
        votes: 156,
        answers: 23
    },
    {
        title: "Understanding Python decorators",
        author: "CodeMaster",
        votes: 142,
        answers: 18
    },
    {
        title: "Best practices for React hooks",
        author: "WebDevPro",
        votes: 128,
        answers: 15
    }
];

// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
    // Load trending questions
    loadTrendingQuestions();
    
    // Add event listeners
    setupEventListeners();
});

// Load trending questions
function loadTrendingQuestions() {
    const trendingContainer = document.querySelector('.trending-container');
    
    trendingQuestions.forEach(question => {
        const questionCard = document.createElement('div');
        questionCard.className = 'feature-card';
        questionCard.innerHTML = `
            <h3>${question.title}</h3>
            <p>By ${question.author}</p>
            <div class="question-stats">
                <span><i class="fas fa-thumbs-up"></i> ${question.votes}</span>
                <span><i class="fas fa-comments"></i> ${question.answers}</span>
            </div>
        `;
        trendingContainer.appendChild(questionCard);
    });
}

// Setup event listeners
function setupEventListeners() {
    // Navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Search functionality
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');

    searchBtn.addEventListener('click', () => {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            // Implement search functionality
            console.log('Searching for:', searchTerm);
        }
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const searchTerm = searchInput.value.trim();
            if (searchTerm) {
                // Implement search functionality
                console.log('Searching for:', searchTerm);
            }
        }
    });

    // Login and Signup buttons
    const loginBtn = document.querySelector('.login-btn');
    const signupBtn = document.querySelector('.signup-btn');

    loginBtn.addEventListener('click', () => {
        // Implement login functionality
        console.log('Login clicked');
    });

    signupBtn.addEventListener('click', () => {
        // Implement signup functionality
        console.log('Signup clicked');
    });
}

// Add smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Mobile Menu Functionality
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const menuOverlay = document.querySelector('.menu-overlay');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuOverlay.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', 
        menuToggle.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
    );
});

menuOverlay.addEventListener('click', () => {
    navLinks.classList.remove('active');
    menuOverlay.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuOverlay.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
    });
}); 