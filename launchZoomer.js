$(function() {
  $('[data-launch="zoomer"]').dblclick(function(event) {
    var zoomer = $(event.currentTarget),
        newZoomer = $(zoomer).clone();
    $(newZoomer).addClass('launch-zoomer-copy')
                .css('transition', 'all 350ms ease-out')
                .insertAfter(zoomer);

    setTimeout(function() {
      $(newZoomer).css({
        transform: 'scale(3)',
        opacity: 0,
        '-webkit-filter': 'blur(5px)'
      });
    }, 100);
    setTimeout(function() {

    }, 700);
  });
});