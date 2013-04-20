(function($) {
  var transitionEndEvents = 'transitionend webkitTransitionEnd otransitionend oTransitionEnd';

  $.fn.launchZoomer = function(options) {
    var zoomer = this,
        settings = $.extend({
          scale: 3,
          blur: '5px',
          duration: '350ms',
          easingFunction: 'ease-out',
          delay: 0
        });

    zoomer.on('dblclick.launchZoomer', function(event) {
      var newZoomer = zoomer.clone();
      newZoomer.addClass('launch-zoomer-copy')
               .css('transition', 'all 350ms ease-out')
               .insertAfter(zoomer);

      newZoomer.on(transitionEndEvents, function(event) {
        newZoomer.off(transitionEndEvents).remove();
      });

      setTimeout(function() {
        newZoomer.css({
          transform: 'scale(3)',
          opacity: 0,
          '-webkit-filter': 'blur(5px)'
        });
      }, 100);
    });
  }

})(jQuery);