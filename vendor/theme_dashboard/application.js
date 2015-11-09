/*
BEGIN Wrapper Code By Ola Adedoyin
Logs when code is LOADED using app.import in "ember-cli-build.js"
Wraps lib code in function attached to global object
So that the code can be called when needed
Such as in components' and views' didInsertElement hooks
*/

console.log("LOADED vendor/theme_dashboard/application.js");
window.globalVendorThemeDashboardApplication = function() {
  console.log("EXECUTED vendor/theme_dashboard/application.js")

  // Actual library code begins below. 
  // Look for end of wrapper code all the way at the end of this file

var App = {

  _isWithTooltips: false,

  init: function () {
    App._tableSorters()
    App._tooltips()
    App._navDoc()

    $(window).on('resize', App._tooltips)

    $(document).on('shown.bs.tab', function () {
      $(document).trigger('redraw.bs.charts')
    })

    // docs top button
    if ($('.docs-top').length) {
      App._backToTopButton()
      $(window).on('scroll', App._backToTopButton)
    }
  },

  _navDoc: function () {
    // doc nav js
    var $toc    = $('#markdown-toc')
    var $window = $(window)

    if ($toc[0]) {

      maybeActivateDocNavigation()
      $window.on('resize', maybeActivateDocNavigation)

      function maybeActivateDocNavigation () {
        if ($window.width() > 768) {
          activateDocNavigation()
        } else {
          deactivateDocNavigation()
        }
      }

      function deactivateDocNavigation() {
        $window.off('resize.theme.nav')
        $window.off('scroll.theme.nav')
        $toc.css({
          position: '',
          left: '',
          top: ''
        })
      }

      function activateDocNavigation() {

        var cache = {}

        function updateCache() {
          cache.containerTop   = $('.docs-content').offset().top - 40
          cache.containerRight = $('.docs-content').offset().left + $('.docs-content').width() + 45
          measure()
        }

        function measure() {
          var scrollTop = $window.scrollTop()
          var distance =  Math.max(scrollTop - cache.containerTop, 0)

          if (!distance) {
            $($toc.find('li')[1]).addClass('active')
            return $toc.css({
              position: '',
              left: '',
              top: ''
            })
          }

          $toc.css({
            position: 'fixed',
            left: cache.containerRight,
            top: 40
          })
        }

        updateCache()

        $(window)
          .on('resize.theme.nav', updateCache)
          .on('scroll.theme.nav', measure)

        $('body').scrollspy({
          target: '#markdown-toc',
          selector: 'li > a'
        })

        setTimeout(function () {
          $('body').scrollspy('refresh')
        }, 1000)
      }
    }
  },

  _backToTopButton: function () {
    if ($(window).scrollTop() > $(window).height()) {
      $('.docs-top').fadeIn()
    } else {
      $('.docs-top').fadeOut()
    }
  },

  _tooltips: function () {
    if ($(window).width() > 768) {
      if (App._isWithTooltips) return
      App._isWithTooltips = true
      $('[data-toggle="tooltip"]').tooltip()

    } else {
      if (!App._isWithTooltips) return
      App._isWithTooltips = false
      $('[data-toggle="tooltip"]').tooltip('destroy')
    }

  },

  _tableSorters: function () {
    $('[data-sort="table"]').tablesorter( {sortList: [[1,0]]} )
  }
}

App.init()

// Actual library code ends just before this
} 

/*
END (Below) Wrapper Code By Ola Adedoyin
*/