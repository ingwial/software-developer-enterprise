 jQuery(document).ready(function( $ ) {
     // Preloader
  $(window).on('load', function () {
      $('#recargar').delay(200).fadeOut('slow', function () {
          $(this).remove();
      });
  });
    
});