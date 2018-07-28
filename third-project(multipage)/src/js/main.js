$(document).ready(function() {
  if ($('html').height() < $(window).height()) {
    $('footer').css({
      'position': 'absolute',
      'left': 0,
      'bottom': 0,
      'width': '100%'
    })
  }

  $(window).resize(function() {
    if ($('html').height() < $(window).height()) {
      $('footer').css({
        'position': 'absolute',
        'left': 0,
        'bottom': 0,
        'width': '100%'
      })
    } else {
      $('footer').css({
        'position': 'relative',
      })
    }
  })
})
