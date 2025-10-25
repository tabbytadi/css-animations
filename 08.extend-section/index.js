// Select all filter buttons and boxes
const filterButtons = document.querySelectorAll('.filter-btn');
const boxes = document.querySelectorAll('.box');

// Add event listeners for each button
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove 'active' from all buttons, then activate the clicked one
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const section = button.dataset.section;

    // Show/hide boxes depending on the selected section
    boxes.forEach(box => {
      const sections = box.dataset.section.split(' '); // handles multiple values like "first second"

      if (section === 'all' || sections.includes(section)) {
        box.classList.remove('hidden');
      } else {
        box.classList.add('hidden');
      }
    });
  });
});
