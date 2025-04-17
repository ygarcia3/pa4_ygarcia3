//= require jquery3
//= require popper
//= require bootstrap
//= require_tree .

// Simple console log to verify JS is working
console.log("Portfolio site loaded");

// Add smooth scrolling to all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Add animation to project cards on hover
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'scale(1.05)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'scale(1)';
  });
});