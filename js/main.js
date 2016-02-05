/*
  Strata by HTML5 UP
  html5up.net | @n33co
  Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

  var settings = {

    // Parallax background effect?
      parallax: true,

    // Parallax factor (lower = more intense, higher = less intense).
      parallaxFactor: 20

  };

  skel.breakpoints({
    xlarge: '(max-width: 1800px)',
    large: '(max-width: 1280px)',
    medium: '(max-width: 980px)',
    small: '(max-width: 736px)',
    xsmall: '(max-width: 480px)'
  });

  // HTML5Up Theme
  $(function() {

    var $window = $(window),
      $body = $('body'),
      $header = $('#header');

    // Disable animations/transitions until the page has loaded.
      $body.addClass('is-loading');

      $window.on('load', function() {
        $body.removeClass('is-loading');
      });

    // Touch?
      if (skel.vars.mobile) {

        // Turn on touch mode.
          $body.addClass('is-touch');

        // Height fix (mostly for iOS).
          window.setTimeout(function() {
            $window.scrollTop($window.scrollTop() + 1);
          }, 0);

      }

    // Fix: Placeholder polyfill.
      $('form').placeholder();

    // Prioritize "important" elements on medium.
      skel.on('+medium -medium', function() {
        $.prioritize(
          '.important\\28 medium\\29',
          skel.breakpoint('medium').active
        );
      });

    // Header.

      // Parallax background.

        // Disable parallax on IE (smooth scrolling is jerky), and on mobile platforms (= better performance).
          if (skel.vars.browser == 'ie' || skel.vars.mobile)
            settings.parallax = false;

        if (settings.parallax) {

          skel.on('change', function() {

            if (skel.breakpoint('medium').active) {

              $window.off('scroll.strata_parallax');
              $header.css('background-position', 'top left, center center');

            }
            else {

              $header.css('background-position', 'left 0px');

              $window.on('scroll.strata_parallax', function() {
                $header.css('background-position', 'left ' + (-1 * (parseInt($window.scrollTop()) / settings.parallaxFactor)) + 'px');
              });

            }

          });

        }

    // Main Sections: Two.

      // Lightbox gallery.
        $window.on('load', function() {

          $('#two').poptrox({
            caption: function($a) { return $a.next('h3').text(); },
            overlayColor: '#2c2c2c',
            overlayOpacity: 0.85,
            popupCloserText: '',
            popupLoaderText: '',
            selector: '.work-item a.image',
            usePopupCaption: true,
            usePopupDefaultStyling: false,
            usePopupEasyClose: false,
            usePopupNav: true,
            windowMargin: (skel.breakpoint('small').active ? 0 : 50)
          });

        });

  });

  //SmarterGiving Template
  $(function() {

    // Nav scroll-to-element
      $('.scrolly').scrolly();

    // Format numbers
      // Docs: https://github.com/customd/jquery-number
      $('[data-grant-amount]')
        .number( true )
        .prepend( '$' );

    // Grant totals
      var array = {};
      var group;
      var amount;
      var total = 0;

      $('td[data-grant-group-name]').each(function(i, el){

          group = $(el).data('grant-group-name');
          amount = $(el).data('grant-amount');

          if (array.hasOwnProperty(group)) {
              array[group] += amount;
          } else {
              array[group] = amount;
          }
          //console.log(array);
      });

      //Loop through array
      $.each( array, function( key, value ) {

        $('td[data-grant-group-total="'+ key +'"]')
          .html(value.toFixed(0))
          .number(true)
          .prepend('$');

      });

  });

})(jQuery);
