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

    // Sticky navs
    var $mainNav = $("header.main-nav");
    var $pageNav = $("header.pages-nav");
    var height = $(window).height() - 100;
    var height2 = $("header.main-header").height();

    $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      // Home page
      if (scroll >= height) {
        $mainNav.addClass("active");
      } else {
        $mainNav.removeClass("active");
      }

      // Pages page
      if (scroll >= height2) {
        $pageNav.addClass("active");
      } else {
        $pageNav.removeClass("active");
      }
    });


    // Menu & menu button animation
    var $btn = $(".menu-icon");
    var $btnNav = $("body > nav > ul a");
    var $body = $("body");
    var $nav = $("body > nav");

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
  });

})(jQuery);
