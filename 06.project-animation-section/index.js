document.addEventListener('DOMContentLoaded', function () {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projects = document.querySelectorAll('.project');
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = themeToggle.querySelector('i');

  // Filter projects based on section
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const section = button.getAttribute('data-section');

      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Show/hide projects based on section
      projects.forEach(project => {
        if (section === 'all' || project.getAttribute('data-section') === section) {
          project.classList.remove('hidden');
        } else {
          project.classList.add('hidden');
        }
      });
    });
  });

  // Add hover effect with JavaScript for additional interactivity
  const imageContainers = document.querySelectorAll('.image-container');

  imageContainers.forEach(container => {
    container.addEventListener('mouseenter', () => {
      container.style.zIndex = '20';
    });

    container.addEventListener('mouseleave', () => {
      container.style.zIndex = '1';
    });
  });

  // Theme toggle functionality
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');

    if (document.body.classList.contains('dark-theme')) {
      themeIcon.classList.remove('fa-moon');
      themeIcon.classList.add('fa-sun');
      localStorage.setItem('theme', 'dark');
    } else {
      themeIcon.classList.remove('fa-sun');
      themeIcon.classList.add('fa-moon');
      localStorage.setItem('theme', 'light');
    }
  });

  // Check for saved theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    document.body.classList.remove('light-theme');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
  }
});