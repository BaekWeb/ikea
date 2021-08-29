$(function() {
  // header
  var $header = $(".header");

  $(window).on("scroll", function() {
    var scrollTop = $(window).scrollTop(), // 스크롤된 높이
      headerHeight = $header.height(); //헤더의 높이

    // 스크롤된 높이가 헤더의 높이보다 클경우
    if (headerHeight < scrollTop) {
      $header.addClass("fixed");
    } else {
      // 그렇지 않으면
      $header.removeClass("fixed");
    }
  });
})
  