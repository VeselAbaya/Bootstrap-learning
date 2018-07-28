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
});
