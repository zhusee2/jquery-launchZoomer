(function($) {
  var transitionEndEvents = 'transitionend webkitTransitionEnd otransitionend oTransitionEnd';

  $.fn.launchZoomer = function(options) {
    var zoomer = this, settings;

    if (options === "destroy") {
      zoomer.off('.launchZoomer');
      return zoomer;
    }

    settings = $.extend({
          scale: 3,
          blur: '5px',
          duration: '350ms',
          easingFunction: 'ease-out',
          delay: 0
        }, options);

    return zoomer.on('dblclick.launchZoomer', function(event) {
      var newZoomer = zoomer.clone(),
          transitionValue = [
              'all', settings.duration, settings.easingFunction, settings.delay
            ].join(' '),
          offset = zoomer.offset(),
          copyWidth = zoomer.width(),
          copyHeight = zoomer.height();

      newZoomer.addClass('launch-zoomer-copy')
               .css({
                 width: copyWidth, height: copyHeight,
                 transition: transitionValue,
                 position: 'absolute',
                 top: offset.y, left: offset.x
               })
               .insertAfter(zoomer);

      newZoomer.on(transitionEndEvents, function(event) {
        newZoomer.off(transitionEndEvents).remove();
      });

      setTimeout(function() {
        newZoomer.css({
          transform: 'scale(3)',
          opacity: 0,
          '-webkit-filter': 'blur(' + settings.blur + ')'
        });
      }, 100);
    });
  }

})(jQuery);