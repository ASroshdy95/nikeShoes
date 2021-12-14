$(document).ready(function () {
  //header height = window height !but still cant resize it vertically
  $(".auto-slider").css({
    "min-height": $(window).height(),
  });

  //start the auto slider
  var swiper = new Swiper(".auto-slider .mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".auto-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".auto-slider .swiper-button-next",
      prevEl: ".auto-slider .swiper-button-prev",
    },
  });
  //end the auto slider

  //start niceScrolling trigger
  $("body").niceScroll({
    cursorcolor: "#A5E126",

    cursorborder: "1px solid #A5E126",

    "z-index": "9999999999999999",

    horizrailenabled: false,
  });
  //end niceScrolling trigger

  //Start scroll function
  $(window).scroll(function () {
    if (
      $(window).scrollTop() >=
      $(".products,.contact,.gallery,.regist,.login").offset().top
    ) {
      $(".scroll-to-top").fadeIn(300);

      $("nav").addClass("navbar-fixed-top");

      $(".navbar-default").css({
        "background-color": "#A5E126",

        "z-index": "9999",

        opacity: "0.9",

        "box-shadow": "0px 0px 1px 0px #A5E126",
      }); //css func for nav

      $(".navbar-default .navbar-nav > li > a").css({
        color: "#FFF",
      });

      $(".dropdown > a").css({
        "background-color": " #A5E126",

        color: "#fff",
      });

      $(".dropdown > a").mouseenter(function () {
        $(this).css({
          "background-color": "#fff",

          color: " #A5E126",
        });
      });

      $(".dropdown > a").mouseleave(function () {
        $(this).css({
          "background-color": "#A5E126",

          color: " #fff",
        });
      });

      $(".dropdown .dropdown-menu").css({
        "background-color": "#A5E126",
      });

      $(".dropdown .dropdown-menu > li > a").css({
        color: "#FFF",
        "background-color": "#A5E126",
      });

      $(".dropdown .dropdown-menu > li > a").mouseenter(function () {
        $(this).css({
          "background-color": "#fff",

          color: "#A5E126",
        });
      });

      $(".dropdown .dropdown-menu > li > a").mouseleave(function () {
        $(this).css({
          "background-color": "#A5E126",

          color: "#fff",
        });
      });

      $(".navbar-header .navbar-toggle").css({
        "background-color": "#A5E126",
        "border-color": "#A5E126",
      });

      $(".navbar-header .navbar-toggle .icon-bar").css("background-color", "#fff");
    } else {
      $(".scroll-to-top").fadeOut(300);

      $("nav").removeClass("navbar-fixed-top");

      $(".navbar-default").css({
        "background-color": "#FFF",

        "z-index": "1",

        opacity: "1",

        "box-shadow": "none",
      }); //css func for nav

      //.....

      $(".navbar-default .navbar-nav > li > a").css({
        color: "#000",
      });

      $(".dropdown > a").css({
        "background-color": "#fff",

        color: "#000",
      });

      $(".dropdown > a").mouseenter(function () {
        $(this).css({
          "background-color": "#A5E126",

          color: "#fff",
        });
      });

      $(".dropdown > a").mouseleave(function () {
        $(this).css({
          "background-color": "#FFF",

          color: "#000",
        });
      });

      $(".dropdown .dropdown-menu").css({
        "background-color": "#fff",
      });

      $(".dropdown .dropdown-menu > li > a").css({
        color: "#000",

        "background-color": "#fff",
      });

      $(".dropdown .dropdown-menu > li > a").mouseenter(function () {
        $(this).css({
          "background-color": "#A5E126",

          color: "#fff",
        });
      });

      $(".dropdown .dropdown-menu > li > a").mouseleave(function () {
        $(this).css({
          "background-color": "#fff",

          color: "#000",
        });
      });

      $(".navbar-header .navbar-toggle").css({
        "background-color": "#fff",
        "border-color": "#fff",
      });

      $(".navbar-header .navbar-toggle .icon-bar").css("background-color", "#A5E126");
    } //else
  });
  //end of scroll function

  //start the click on the btn
  $(".scroll-to-top").click(function () {
    $("html,body").animate(
      {
        scrollTop: "0",
      },
      500
    );
  });
  //end click func for the S-T-T btn

  //start click on .navbar-header .navbar-toggle button
  $(".navbar-header .navbar-toggle").click(function () {
    $(this).toggleClass("cross");
  });
  //end click on .navbar-header .navbar-toggle button

  //start click setting
  $(".setting").click(function () {
    $(this).toggleClass("open");

    $(".fa-cog").toggleClass("fa-spin");
  });
  //end click setting

  //start night mood
  $(".night-mood").click(function () {});
  //end night mood

  //Start loader overlay
  $(window).on("load", function () {
    $(".loader-overlay").fadeOut(8000);

    $(".loader-overlay p:nth-of-type(1)").fadeIn(100).fadeOut(600);

    $(".loader-overlay p:nth-of-type(2)").delay(1000).fadeIn(200).fadeOut(600);

    $(".loader-overlay p:nth-of-type(3)").delay(2000).fadeIn(300).fadeOut(600);

    $(".loader-overlay p:nth-of-type(4)")
      .delay(3000)
      .fadeIn(300, function () {
        $(".loader-overlay p:nth-of-type(4) span").fadeIn(400, function () {
          $(".loader-overlay p:nth-of-type(4) span:not(:nth-of-type(2))").fadeOut(300);

          $(".loader-overlay p:nth-of-type(4) span:nth-of-type(2)").animate(
            {
              "font-size": "130px",
            },
            2000
          );
        });
      });
  });
  //end loader overlay

  //start the product amount
  $(function () {
    //start of up arrow
    $("body").on("click", ".fa-chevron-up", function () {
      var currentAmout = parseInt($(this).next("input").val());

      console.log(currentAmout);

      if (currentAmout != NaN) {
        count = count + 1;

        $(".cart-number").attr("value", +count);

        $(this)
          .next("input")
          .val(currentAmout + 1);

        var newPrice = prodPrice * count;

        console.log(newPrice);

        $(this)
          .parent(".product-quantity")
          .parent(".single-product")
          .find(".price")
          .text(newPrice);
      }
    }); //end of up arrow

    //start of down arrow
    $("body").on("click", ".fa-chevron-down", function () {
      var currentAmout = parseInt($(this).prev("input").val());

      console.log(currentAmout);

      if (currentAmout != NaN) {
        if (currentAmout > 0) {
          count = count - 1;

          $(".cart-number").attr("value", +count);

          $(this)
            .prev("input")
            .val(currentAmout - 1);

          var newPrice = parseInt(
            $(this)
              .parent(".product-quantity")
              .parent(".single-product")
              .find(".price")
              .text()
          );

          var newPrice2 = newPrice - prodPrice;

          $(this)
            .parent(".product-quantity")
            .parent(".single-product")
            .find(".price")
            .text(newPrice2);
        }
      }
    }); //end of down arrow
  });
  //end the product amount

  //start edit cart
  $(".my-cart-icon").click(function () {
    $(".setting").children("p").fadeOut();
  });
  //end edit cart
}); //document ready
