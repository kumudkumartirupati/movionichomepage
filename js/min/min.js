$(document).ready(function(){

  $('.slider').bxSlider();
$('#moviecategories').bxSlider({
  minSlides: 1,
  maxSlides: 8,
  slideWidth: 220,
  slideMargin: 20
});


$('#featuredmovies').bxSlider({
  minSlides: 1,
  maxSlides: 8,
  slideWidth: 220,
  slideMargin: 20
});
$('#newtrailers').bxSlider({
  minSlides: 1,
  maxSlides: 8,
  slideWidth: 220,
  slideMargin: 20,
 
});
$('#populartvshows').bxSlider({
  minSlides: 1,
  maxSlides: 8,
  slideWidth: 220,
  slideMargin: 20,
 
});

$('.topslider').flicker({
block_text: true, // Will class the title and sub text classes of each list item to show a background colour for easy reading. Can be applied to the containing class for a global effect or to each list item separately.
inner_width: false,
theme: 'light', // light or dark
flick_animation: 'transition-slide', // transition-slide, transform-slide, jquery-slide or scroller-slide
auto_flick: true, // Sets the carousel to run automatically.
auto_flick_delay: 10, // Set the delay (in seconds) between each auto slide.
dot_navigation: true, // Dot navigation is used to indicate and navigate between the slides.
dot_alignment: 'center', // left, center or right.
arrows: true // Arrows are used to navigate back and forth between the slides.
});
});