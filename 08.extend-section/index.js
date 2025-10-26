// ====== ELEMENT SELECTION ======
const filterButtons = document.querySelectorAll('.filter-btn');
const boxes = document.querySelectorAll('.box');
const extraContent = document.querySelector('.extra');
const readMoreCheckbox = document.querySelector('#btn');
const readMoreLabel = document.querySelector('label');

// Remember the "Read More" state between section switches
let isReadMoreChecked = false;

// ====== FUNCTION: UPDATE READ MORE STATE ======
function updateReadMoreState(section) {
  if (section === 'all') {
    // Show toggle button again
    readMoreLabel.style.display = 'block';
    readMoreCheckbox.style.display = 'block';

    // Restore last checkbox state
    readMoreCheckbox.checked = isReadMoreChecked;

    if (readMoreCheckbox.checked) {
      extraContent.style.display = 'block';
      extraContent.classList.add('fade-in');
    } else {
      extraContent.style.display = 'none';
      extraContent.classList.remove('fade-in');
    }
  } else {
    // Hide toggle in filtered views, always show extra content
    readMoreLabel.style.display = 'none';
    readMoreCheckbox.style.display = 'none';
    extraContent.style.display = 'block';
    extraContent.classList.add('fade-in');
  }
}

// ====== FUNCTION: FILTER BOXES ======
function filterBoxes(section) {
  boxes.forEach(box => {
    const sections = box.dataset.section.split(' '); // supports multiple data-section values
    if (section === 'all' || sections.includes(section)) {
      box.classList.remove('hidden');
    } else {
      box.classList.add('hidden');
    }
  });
}

// ====== EVENT: FILTER BUTTON CLICK ======
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Update active button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const section = button.dataset.section;

    // Filter boxes
    filterBoxes(section);

    // Update Read More state and animation
    updateReadMoreState(section);
  });
});

// ====== EVENT: READ MORE TOGGLE ======
readMoreCheckbox.addEventListener('change', () => {
  isReadMoreChecked = readMoreCheckbox.checked;

  if (isReadMoreChecked) {
    extraContent.style.display = 'block';
    extraContent.classList.add('fade-in');
  } else {
    extraContent.style.display = 'none';
    extraContent.classList.remove('fade-in');
  }
});
