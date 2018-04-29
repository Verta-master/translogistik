//Mobile menu
$('.menu__btn').click(function() {
  $('.menu').toggleClass('menu--opened');
  $('.menu__list').slideToggle();
})

//Header on scroll
$(window).scroll(function(){
  if ((window.pageYOffset || document.documentElement.scrollTop ||document.body.scrollTop) >= 100) {
//    $(".header").addClass('header--scroll');
    $(".btn-top").fadeIn();
  } else {
//    $(".header").removeClass('header--scroll');
    $(".btn-top").fadeOut();
  };
});

//scroll to top
$(".btn-top").click(function () {
  $("body,html").animate({
    scrollTop: 0
  }, 400);
  return false;
});
