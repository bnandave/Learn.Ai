$(document).ready(function() {
  var testimonials = $(".testimonial");
  var index = 0;

  function showTestimonial() {
      testimonials.removeClass("active");
      testimonials.eq(index).addClass("active");
  }

  function nextTestimonial() {
      index = (index + 1) % testimonials.length;
      showTestimonial();
  }

  function prevTestimonial() {
      index = (index - 1 + testimonials.length) % testimonials.length;
      showTestimonial();
  }

  $(".next").click(nextTestimonial);
  $(".prev").click(prevTestimonial);

  showTestimonial();
});
