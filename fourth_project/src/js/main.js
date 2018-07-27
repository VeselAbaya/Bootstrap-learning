$(document).ready(function() {
  $('.video').click(function () {
    var modal = $(this).data('target'),
    videoSRC = $(this).attr('data-video'),
    videoSRCauto = videoSRC + '?autoplay=1';
    $(modal + ' iframe').attr('src', videoSRCauto);
    $(modal + ' button.close').click(function () {
      $(modal + ' iframe').attr('src', videoSRC);
    });

    $(modal).click(function () {
      $(modal + ' iframe').attr('src', videoSRC);
    });
  });

  /////////////////////////////////////////
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

  $('.slider').slick({
    infinite: true,
    slideToShow: 1,
    slideToScroll: 1
  })
})
