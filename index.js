document.addEventListener('DOMContentLoaded', function() {
  const activateModalBtn = document.querySelector('.plateform-activate-modal');
  const modalNavbar = document.querySelector('.modal-platform-navbar');

  // Add click event listener to the activate button
  activateModalBtn.addEventListener('click', function() {
      // Toggle the visibility of the modal navbar
      modalNavbar.classList.toggle('active');
  });
});


$(document).ready(function() {
  $('.card-parent').hover(
      function() {
          $(this).find('.videoPlay')[0].play();
      },
      function() {
          $(this).find('.videoPlay')[0].pause();
      }
  );
});
