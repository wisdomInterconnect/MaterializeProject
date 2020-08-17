(function ($) {
  $(function () {
    $(".sidenav").sidenav();
    //init slider

    $(".slider").slider({
      fullWidth: true,
      indicator: false,
      height: 500,
    });
    //initScrollspy

    $(".scrollspy").scrollSpy({});
  }); // end of document ready
})(jQuery); // end of jQuery name space
