$(document).ready(function() {
  $('.slide-section').click(function(event) {
    event.preventDefault()
    let linkHref = $(this).attr('href');
    let headerHeight = $('nav').outerHeight();
    $('html, body').animate({
      scrollTop: $(linkHref).offset().top - headerHeight
    })
  })
})
