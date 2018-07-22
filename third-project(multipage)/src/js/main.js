$(document).ready(function() {
  let windowSize = $(window).height();
  if ($('body').height() < windowSize) {
    $('footer').css({
      'position': 'absolute',
      'left': 0,
      'bottom': 0,
      'width': '100%'
    })
  }

  $(window).resize(function() {
    if ($('body').height() < windowSize) {
      $('footer').css({
        'position': 'absolute',
        'left': 0,
        'bottom': 0,
        'width': '100%'
      })
    }
  })
})
