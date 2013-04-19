$(function() {
  $('[data-launch="zoomer"]').dblclick(function(event) {
    var zoomer = $(event.currentTarget),
        newZoomer = $(zoomer).clone();
    $(newZoomer).addClass('launch-zoomer-copy').insertAfter(zoomer);

    setTimeout(function() {
      $(newZoomer).css({
        transform: 'scale(3)',
        filter: 'blur(5px)',
        opacity: 0
      });
    }, 100);
    setTimeout(function() {
      $(newZoomer).remove();
    }, 700);
  });
});