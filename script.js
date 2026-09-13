const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
            event.preventDefault();
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});
const startButton = document.querySelector('.cta-btn');
startButton.addEventListener('click', function() {
    alert('Great choice! Choose a course and start learning.');
});
const counters = document.querySelectorAll('.counter');
counters.forEach(function(counter) {
    const target = Number(counter.getAttribute('data-target'));
    const suffix = counter.getAttribute('data-suffix');
    let count = 0;
    const updateCounter = function() {
        const increment = Math.ceil(target / 50);
        count = count + increment;
        if (count < target) {
            counter.textContent = count + suffix;
            setTimeout(updateCounter, 30);
        } else {
            counter.textContent = target + suffix;
        }
    };
    updateCounter();
});
const themeButton = document.querySelector('#theme-toggle');
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeButton.textContent = '☀️';
}
themeButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        themeButton.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        themeButton.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
});
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(function(question) {
    question.addEventListener('click', function() {
        const faqItem = this.parentElement;
        faqItem.classList.toggle('active');
    });
});