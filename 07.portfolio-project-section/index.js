document.addEventListener('DOMContentLoaded', function () {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projects = document.querySelectorAll('.project');

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
});