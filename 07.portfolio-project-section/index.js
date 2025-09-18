document.addEventListener('DOMContentLoaded', function () {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectsContainer = document.querySelector('.projects-container');
  const projects = document.querySelectorAll('.project');
  const currentSectionTitle = document.getElementById('current-section');
  const themeToggle = document.getElementById('theme-toggle');

  // Theme toggle functionality
  function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateToggleText(savedTheme);
  }

  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateToggleText(newTheme);
  }

  function updateToggleText(theme) {
    themeToggle.textContent = theme === 'light' ? 'Light Mode' : 'Dark Mode';
  }

  themeToggle.addEventListener('click', toggleTheme);
  initTheme();

  // Map button data-section to display text
  const sectionTitles = {
    'all': 'All Projects',
    'web': 'Web Development',
    'databases': 'Databases',
    'programming': 'Programming',
    'multithreading': 'Multithreading',
    'ai': 'AI & Machine Learning',
    'testing': 'Testing',
    'design': 'UI/UX Design'
  };

  // Function to get priority for a project based on current section
  function getProjectPriority(project, section) {
    const priorityData = project.getAttribute('data-priority');
    if (!priorityData) return 999; // Default high number for projects without priority

    const priorities = priorityData.split(',');
    for (const priority of priorities) {
      const [key, value] = priority.split(':');
      if (key === section) {
        return parseInt(value);
      }
    }

    // If no specific priority for this section, check for "all" as fallback
    for (const priority of priorities) {
      const [key, value] = priority.split(':');
      if (key === 'all') {
        return parseInt(value);
      }
    }

    return 999; // Default high number
  }

  // Function to reorder projects based on priority
  function reorderProjects(section) {
    const visibleProjects = Array.from(projects).filter(project => {
      const projectSections = project.getAttribute('data-section').split(' ');
      return section === 'all' || projectSections.includes(section);
    });

    // Sort projects by their priority for the current section
    visibleProjects.sort((a, b) => {
      const priorityA = getProjectPriority(a, section);
      const priorityB = getProjectPriority(b, section);
      return priorityA - priorityB;
    });

    // Remove all projects from container
    projectsContainer.innerHTML = '';

    // Add section title
    const sectionTitle = document.createElement('h2');
    sectionTitle.className = 'section-title visible';
    sectionTitle.id = 'current-section';
    sectionTitle.textContent = sectionTitles[section];
    projectsContainer.appendChild(sectionTitle);

    // Add projects back in sorted order
    visibleProjects.forEach(project => {
      projectsContainer.appendChild(project);
      // Add fade-in animation class
      setTimeout(() => {
        project.classList.add('fade-in-up');
      }, 100);
    });
  }

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const section = button.getAttribute('data-section');

      // Animate the button click
      button.classList.add('animate');
      setTimeout(() => {
        button.classList.remove('animate');
      }, 500);

      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // First hide all projects
      projects.forEach(project => {
        const projectSections = project.getAttribute('data-section').split(' ');
        if (section === 'all' || projectSections.includes(section)) {
          project.classList.remove('hidden');
        } else {
          project.classList.add('hidden');
        }
      });

      // Then reorder the visible projects
      reorderProjects(section);
    });
  });

  // Initialize with all projects in correct order
  reorderProjects('all');
});