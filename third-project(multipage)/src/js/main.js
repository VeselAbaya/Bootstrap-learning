$(document).ready(function() {
  let windowSize = $(window).height();
  console.log($('body').height())
  console.log(windowSize)
  if ($('body').height() < windowSize) {
    $('footer').css({
      'position': 'absolute',
      'left': 0,
      'bottom': 0,
      'width': '100%'
    })
  }
})
