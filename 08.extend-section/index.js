// Select elements
const filterButtons = document.querySelectorAll('.filter-btn');
const boxes = document.querySelectorAll('.box');
const extraContent = document.querySelector('.extra');
const readMoreCheckbox = document.querySelector('#btn');
const readMoreLabel = document.querySelector('label');

// Store the read more toggle state
let isReadMoreChecked = false;

// Helper function to update Read More visibility based on current mode
function updateReadMoreState(section) {
  if (section === 'all') {
    // Restore visibility of the toggle and its previous state
    readMoreLabel.style.display = 'block';
    readMoreCheckbox.style.display = 'block';
    readMoreCheckbox.checked = isReadMoreChecked; // restore last state

    if (readMoreCheckbox.checked) {
      extraContent.style.display = 'inline';
    } else {
      extraContent.style.display = 'none';
    }
  } else {
    // Hide the toggle in filtered views and always show extra content
    readMoreLabel.style.display = 'none';
    readMoreCheckbox.style.display = 'none';
    extraContent.style.display = 'inline';
  }
}

// Update boxes and read more behavior when buttons are clicked
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove 'active' from all buttons, activate current
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const section = button.dataset.section;

    // Show/hide boxes based on selected section
    boxes.forEach(box => {
      const sections = box.dataset.section.split(' '); // handle multiple values like "first second"
      if (section === 'all' || sections.includes(section)) {
        box.classList.remove('hidden');
      } else {
        box.classList.add('hidden');
      }
    });

    // Update Read More button behavior
    updateReadMoreState(section);
  });
});

// Track checkbox state between section switches
readMoreCheckbox.addEventListener('change', () => {
  isReadMoreChecked = readMoreCheckbox.checked;
  if (isReadMoreChecked) {
    extraContent.style.display = 'inline';
  } else {
    extraContent.style.display = 'none';
  }
});
