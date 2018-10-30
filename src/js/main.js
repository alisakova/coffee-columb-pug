$(document).ready(function(){
  if ($('.reviews-slider').length) {
    $('.reviews-slider').slick({
      infinite: true,
      arrows: false,
      autoplay: true,
      speed: 500,
      centerPadding: '382px',
      centerMode: true,
      responsive: [
        {
          breakpoint: 1330,
          settings: {
            centerPadding: '250px'
          }
        },
        {
          breakpoint: 992,
          settings: {
            centerPadding: '150px'
          }
        },
        {
          breakpoint: 768,
          settings: {
            centerPadding: '100px'
          }
        },
        {
          breakpoint: 660,
          settings: {
            autoplay: false,
            centerMode: false,
            adaptiveHeight: true,
            centerPadding: '20px'
          }
        }
      ]
    });
  }
  if ($('.news-slider').length) {
    $('.news-slider').slick();
  }
  if ($('.coffee-machine-slider').length) {
    $('.coffee-machine-slider').slick();
  }
});

if ($('.reviews-slider').length) {
  $(window).resize(function() {
    $('.reviews-slider').slick('resize');
  });
}

$("a._call-btn").on("click", function(event) {
  $(this).modal({
    fadeDuration: 250,
    fadeDelay: null
  });
  return false;
});

var toTopBtn = document.querySelector(".btn-up");
var scrollAnimation;

if (toTopBtn) {
  window.onscroll = function() {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      toTopBtn.classList.add("active");
    } else {
      toTopBtn.classList.remove("active");
    }
  }

  function scrollToTop() {
    var position = document.body.scrollTop || document.documentElement.scrollTop;
    if (position) {
      window.scrollBy(0, -Math.max(10, Math.floor(position / 10)));
      scrollAnimation = setTimeout("scrollToTop()", 10);
    } else clearTimeout(scrollAnimation);
  }
}

VK.Widgets.CommunityMessages("vk_community_messages", 86720983, {tooltipButtonText: "Есть вопрос?", buttonType: 'blue_circle', disableButtonTooltip: '1'});
