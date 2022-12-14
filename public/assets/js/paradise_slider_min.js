! function (i) {
  "use strict";

  function s(s) {
    var t = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
    s.each(function () {
      var s = i(this),
        o = s.data("animation");
      s.addClass(o).one(t, function () {
        s.removeClass(o)
      })
    })
  }
  var t = i(".carousel"),
    o = t.find(".item:first").find("[data-animation ^= 'animated']");
  t.carousel(), s(o), t.on("slide.bs.carousel", function (t) {
    var o = i(t.relatedTarget).find("[data-animation ^= 'animated']");
    s(o)
  });
  var n = i(".carousel").attr("data-duration");
  isNaN(n) || 0 >= n ? (i.fn.carousel.Constructor.TRANSITION_DURATION = 1e3, i(".carousel-inner > .item").css({
    "-webkit-transition-duration": n + "1000ms",
    "-moz-transition-duration": n + "1000ms",
    "transition-duration": n + "1000ms"
  })) : (i.fn.carousel.Constructor.TRANSITION_DURATION = n, i(".carousel-inner > .item").css({
    "-webkit-transition-duration": n + "ms",
    "-moz-transition-duration": n + "ms",
    "transition-duration": n + "ms"
  }));
  var e = i(".carousel").find("[class=mouse_wheel_y]"),
    a = i(".carousel").find("[class=mouse_wheel_xy]");
  a && i(".mouse_wheel_xy").bind("mousewheel", function (s) {
    s.originalEvent.wheelDelta / 120 > 0 ? i(this).carousel("prev") : i(this).carousel("next")
  }), e && i(".mouse_wheel_y").bind("mousewheel", function (s) {
    s.originalEvent.wheelDelta / 120 > 0 && i(this).carousel("next")
  });
  var l = i(".carousel").find("[class=swipe_y]"),
    r = i(".carousel").find("[class=swipe_x]");
  l && i(".swipe_y .carousel-inner").swipe({
    swipeUp: function (s, t, o, n, e) {
      i(this).parent().carousel("next")
    },
    swipeDown: function () {
      i(this).parent().carousel("prev")
    },
    threshold: 0
  }), r && i(".swipe_x .carousel-inner").swipe({
    swipeLeft: function (s, t, o, n, e) {
      i(this).parent().carousel("next")
    },
    swipeRight: function () {
      i(this).parent().carousel("prev")
    },
    threshold: 0
  });
  var c = 0,
    u = 0,
    h = i(".carousel").find("[class=thumb_scroll_y]"),
    d = i(".carousel").find("[class=thumb_scroll_x]");
  h && i(".thumb_scroll_y").on("slid.bs.carousel", function () {
    var s = -1 * i(".thumb_scroll_y .carousel-indicators li:first").position().top + i(".thumb_scroll_y .carousel-indicators li:last").position().top + i(".thumb_scroll_y .carousel-indicators li:last").height(),
      t = i(".thumb_scroll_y .carousel-indicators li.active").position().top + i(".thumb_scroll_y .carousel-indicators li.active").height() / 1,
      o = t + c,
      n = o - i(".thumb_scroll_y .carousel-indicators").height() / 1;
    0 > n && (n = 0), n > s - i(".thumb_scroll_y .carousel-indicators").height() && (n = s - i(".thumb_scroll_y .carousel-indicators").height()), i(".thumb_scroll_y .carousel-indicators").animate({
      scrollTop: n
    }, 800), c = n
  }), d && i(".thumb_scroll_x").on("slid.bs.carousel", function () {
    var s = -1 * i(".thumb_scroll_x .carousel-indicators li:first").position().left + i(".thumb_scroll_x .carousel-indicators li:last").position().left + i(".thumb_scroll_x .carousel-indicators li:last").width(),
      t = i(".thumb_scroll_x .carousel-indicators li.active").position().left + i(".thumb_scroll_x .carousel-indicators li.active").width() / 1,
      o = t + u,
      n = o - i(".thumb_scroll_x .carousel-indicators").width() / 1;
    0 > n && (n = 0), n > s - i(".thumb_scroll_x .carousel-indicators").width() && (n = s - i(".thumb_scroll_x .carousel-indicators").width()), i(".thumb_scroll_x .carousel-indicators").animate({
      scrollLeft: n
    }, 800), u = n
  }), i(".six_coloumns .item").each(function () {
    for (var s = i(this), t = 1; 6 > t; t++) s = s.next(), s.length || (s = i(this).siblings(":first")), s.children(":first-child").clone().addClass("cloneditem-" + t).appendTo(i(this))
  }), i(".five_coloumns .item").each(function () {
    for (var s = i(this), t = 1; 5 > t; t++) s = s.next(), s.length || (s = i(this).siblings(":first")), s.children(":first-child").clone().addClass("cloneditem-" + t).appendTo(i(this))
  }), i(".four_coloumns .item").each(function () {
    for (var s = i(this), t = 1; 4 > t; t++) s = s.next(), s.length || (s = i(this).siblings(":first")), s.children(":first-child").clone().addClass("cloneditem-" + t).appendTo(i(this))
  }), i(".three_coloumns .item").each(function () {
    for (var s = i(this), t = 1; 3 > t; t++) s = s.next(), s.length || (s = i(this).siblings(":first")), s.children(":first-child").clone().addClass("cloneditem-" + t).appendTo(i(this))
  }), i(".two_coloumns .item").each(function () {
    for (var s = i(this), t = 1; 2 > t; t++) s = s.next(), s.length || (s = i(this).siblings(":first")), s.children(":first-child").clone().addClass("cloneditem-" + t).appendTo(i(this))
  }), i(".pauseVideo").on("slide.bs.carousel", function () {
    i("video").each(function () {
      this.pause()
    })
  }), i(".onlinePauseVideo").on("slide.bs.carousel", function (s) {
    var t = i(s.target).find("iframe");
    t.each(function (s, t) {
      i(t).attr("src", i(t).attr("src"))
    })
  })
}(jQuery);