$(document).ready(function () {
  $(".hamburger").click(function () {
    if ($(".menu-mobile").hasClass("is-active")) {
      setTimeout(function () {
        $(".menu-mobile").removeClass("is-active");
      }, 400);
    } else {
      $(".menu-mobile").addClass("is-active");
    }
    if (!$(this).hasClass("is-active")) {
      $(this).addClass("is-active");
      $(".wrapper")
        .delay(400)
        .queue(function (next) {
          $(this).css({
            "z-index": 10,
            opacity: 1,
          });
          next();
        });
      $(".list-menu-item-mb")
        .delay(400)
        .queue(function (next) {
          $(this).css({
            "margin-left": "0",
          });
          next();
        });
    } else {
      $(".list-menu-item-mb").queue(function (next) {
        $(this).css({
          "margin-left": "-300px",
        });
        next();
      });

      $(".wrapper").queue(function (next) {
        $(this).css({
          "z-index": -1,
          opacity: 0,
        });
        next();
      });
      $(".hamburger").removeClass("is-active");
    }
  });

  $(document).keyup(function (e) {
    if (e.keyCode == 27) {
      setTimeout(function () {
        $(".menu-mobile").removeClass("is-active");
      }, 400);
      $(".list-menu-item-mb").queue(function (next) {
        $(this).css({
          "margin-left": "-300px",
        });
        next();
      });

      $(".wrapper").queue(function (next) {
        $(this).css({
          "z-index": -1,
          opacity: 0,
        });
        next();
      });
      $(".hamburger").removeClass("is-active");
    }
  });

  $(".wrapper").click(function () {
    setTimeout(function () {
        $(".menu-mobile").removeClass("is-active");
      }, 400);
      $(".list-menu-item-mb").queue(function (next) {
        $(this).css({
          "margin-left": "-300px",
        });
        next();
      });

      $(".wrapper").queue(function (next) {
        $(this).css({
          "z-index": -1,
          opacity: 0,
        });
        next();
      });
      $(".hamburger").removeClass("is-active");
  });
});
