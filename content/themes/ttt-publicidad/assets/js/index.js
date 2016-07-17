/**
 * Main JS file for cura behaviours
 */

/* globals jQuery, document */
(function ($, undefined) {
    "use strict";

  var $document = $(document);

  // Document ready
  $document.ready(function () {

    var $postContent = $(".post-content");
    $postContent.fitVids();

    // Parallax
    $document.on('scroll', function () {
      $('.hero-section .blog-cover').css(
        'top', $document.scrollTop() / 4);

        $('.hero-section .blog-title').css(
          'top', $document.scrollTop() / 2);
    });

    // Smooth scroll
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });


    // Menu & menu button animation
    var $btn = $(".menu-icon");
    var $btnalt = $(".menu-icon-left");
    var $btnNav = $("body > nav > ul a");
    var $body = $("body");
    var $nav = $("body > .nav");
    var $navalt = $("body > .left-nav");

    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      var height = $(window).height();

      // Home page
      if (scroll >= height - 70) {
        $btn.addClass("icon-blue");
      } else {
        $btn.removeClass("icon-blue");
      }
    });

    $btn.on("click tap", function(e){
      e.preventDefault();
      if ($body.hasClass("nav-closed")) {
        $(this).addClass("nav-close");
        $body.toggleClass("nav-opened nav-closed");
        $nav.addClass("opened");
      } else {
        $(this).removeClass("nav-close");
        $body.toggleClass("nav-opened nav-closed");
        $nav.removeClass("opened");
      }
    });

    $btnalt.on("click tap", function(e){
      e.preventDefault();
      if ($body.hasClass("left-nav-closed")) {
        $(this).addClass("nav-close");
        $body.toggleClass("left-nav-opened left-nav-closed");
        $navalt.addClass("opened");
      } else {
        $(this).removeClass("nav-close");
        $body.toggleClass("left-nav-opened left-nav-closed");
        $navalt.removeClass("opened");
      }
    });
  });

})(jQuery);
