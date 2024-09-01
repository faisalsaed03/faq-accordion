// script.js

// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
  // Get all accordion buttons
  const accordionButtons = document.querySelectorAll('.accordion-btn');

  accordionButtons.forEach(button => {
      button.addEventListener('click', function() {
          // Find the associated description
          const description = this.nextElementSibling;

          // Toggle the visibility of the description
          if (description.style.display === 'block') {
              description.style.display = 'none';
              // Change icon to plus
              this.querySelector('.plus-icon').style.display = 'block';
              this.querySelector('.minus-icon').style.display = 'none';
          } else {
              description.style.display = 'block';
              // Change icon to minus
              this.querySelector('.plus-icon').style.display = 'none';
              this.querySelector('.minus-icon').style.display = 'block';
          }
      });
  });
});
