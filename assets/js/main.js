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

      // Off-Canvas Navigation.

        // Navigation Button.
          $(
            '<div id="navButton">' +
              '<a href="#navPanel" class="toggle"><i class="fa fa-bars" aria-hidden="true"></i> Menu</a>' +
            '</div>'
          )
            .appendTo($body);

        // Navigation Panel.
          $(
            '<div id="navPanel">' +
              '<nav>' +
                $('#nav').navList() +
              '</nav>' +
            '</div>'
          )
            .appendTo($body)
            .panel({
              delay: 500,
              hideOnClick: true,
              hideOnSwipe: true,
              resetScroll: true,
              resetForms: true,
              side: 'left',
              target: $body,
              visibleClass: 'navPanel-visible'
            });

        // Fix: Remove navPanel transitions on WP<10 (poor/buggy performance).
          if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
            $('#navButton, #navPanel, #page-wrapper')
              .css('transition', 'none');

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

          $('#featured').poptrox({
            caption: function($a) { return $a.next('h3').text(); },
            overlayColor: '#2c2c2c',
            overlayOpacity: 0.85,
            selector: '.work-item a.image',
            usePopupCaption: true,
            usePopupDefaultStyling: false,
            usePopupEasyClose: false,
            usePopupNav: false,
            windowMargin: (skel.breakpoint('small').active ? 0 : 50)
          });

        });

  });

  //SmarterGiving Template
  $(function() {

    // Nav scroll-to-element
      $('.scrolly').scrolly();

    // Grants Database

      // List.js

        //Define lists and sort names
        //TODO: Add ability to search/filter custom CSV
        var listOptions = {
          valueNames: [ 
            'db-grantee-name',
            'db-grantee-location',
            'db-grant-amount',
            'db-grantee-purpose'
          ]
        };

        listDefineAll = $('.js-listjs');
        listSearchAll = [];
        $.each(listDefineAll, function(index) {
          //Get the id of each wrapper div
          currentWrapperId = this.id;
          //Make a name for the new list object
          listObject = 'listObject-' + index;
          //Inititalize a new list
          listObject = new List(currentWrapperId, listOptions);
          //Add new list to search array
          listSearchAll.push(listObject);
        });

        //Define UI states
        var listStateDefault = function() {
          $('.search-box-label').css('visibility', 'hidden');
          $('tfoot, thead').show();
          $('.js-listjs').show();
          $('tbody.list:parent').closest('.js-listjs').children('h3').show();
          $('#search-no-items-found').hide();
        };

        var listStateSearching = function() {
          $('.search-box-label').css('visibility', 'visible');
          $('tfoot, thead').hide();
          $('tbody.list:empty').closest('.js-listjs').children('h3').hide();
          $('tbody.list:parent').closest('.js-listjs').children('h3').show();
          $('.js-listjs').show();
          $('#search-no-items-found').hide();
        };

        var listStateNoResults = function() {
          $('#search-no-items-found').show();
          $('.js-listjs').hide();
        };

        //Enable live search
        $('#db-search').on('keyup', function() {
          var searchString = $(this).val();
          $.each(listSearchAll, function(){
            this.search(searchString);
            //Show count
            var listSearchSize = $('.list tr').length;
            $('.search-count').html(listSearchSize);
            listStateSearching();
          });

          //Add anchor reference to count element for scroll
          var listFirstResult = $('tbody tr').eq(0).closest($('.js-listjs')).attr('id');
          if ( typeof listFirstResult !== 'undefined' ) {
            $('.search-count').attr('href', '#' + listFirstResult);
            $('.scrolly').scrolly(); //Re-initialize Scrolly
            listStateSearching();
          }
          else {
            $('.search-count').removeAttr("href");
            listStateNoResults();
          }

        });

        //Reset search
        $('.search-clear').click(function() {
          $.each(listSearchAll, function(){
            this.search();
          });
          listStateDefault();
        });

      // Format numbers
        // Docs: https://github.com/customd/jquery-number
        $('[data-grant-amount], [data-grant-group-total]')
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
