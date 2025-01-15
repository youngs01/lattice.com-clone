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
  var screenWidth = window.innerWidth;

  function handleVideoBehavior() {
    if (screenWidth <= 770) {
      $('.videoPlay').each(function() {
        this.play();
      });
    } else {
      $('.card-parent').hover(
        function() {
          $(this).find('.videoPlay')[0].play();
        },
        function() {
          $(this).find('.videoPlay')[0].pause();
        }
      );
    }
  }

  handleVideoBehavior(); // Initial handling based on screen size

  $(window).resize(function() {
    screenWidth = window.innerWidth;
    handleVideoBehavior(); // Adjust behavior on window resize
  });
});


// start of infinite marquee

function marqueeToggle() {
  const marqueeWrap = document.querySelector(".marquee-slide-card-wrap");
  const marqueeCards = document.querySelectorAll(".marquee-slide-card");
  const secondSet = $('.marquee-slide-card--second-set');
  var totalCardsWidth = 0;  //we will add each card width together

  marqueeCards.forEach(function (card, index) {
    const cardWidth = 500 + 44; //width + margin (need to make this dyamic)
    totalCardsWidth = totalCardsWidth + cardWidth;
    return totalCardsWidth;
  });

  if(totalCardsWidth >= window.innerWidth * 1) {
    marqueeWrap.classList.add('marquee-active');
    secondSet.css('display', 'flex');
  } else {
    marqueeWrap.classList.remove('marquee-active');
    secondSet.css('display', 'none');
  }
}
marqueeToggle();

$(window).on('resize', function() {
  marqueeToggle();
});






// end of infinite marquee


