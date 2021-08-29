$(function() {

  // 참조자
  var $header = $("header");
  var allMenuButton = $header.find(".allMenuButton");
  var digitalButton = $header.find(".digitalButton");
  var hamburgurMenu = $header.find(".hamburgurMenu");

  var $sidebar = $(".sidebar");
  var $sideTop = $sidebar.children(".sideTop");
  var $close = $sidebar.find(".close");
  var $back = $sideTop.find(".back");
  var $gnb = $sidebar.find(".menu .gnb");
  var $menu2 = $gnb.find(".item_menu_01");

  
  allMenuButton.on('click', function() {
    slideOpen();
  })
  digitalButton.on('click', function() {
    slideOpen();
  })
  hamburgurMenu.on('click', function() {
    slideOpen();
  })
  
  // 사이드메뉴 열기
  function slideOpen() {
    $sidebar.fadeIn(500);
  }
  // 사이드메뉴 닫기
  $close.on("click", function() {
    // close 하면 사이드메뉴의 show클래스 상태의 클래스 제거
      $sidebar.find(".show").removeClass("show");
      $sidebar.fadeOut(500);
  });
  // 사이드바 처음 메뉴로 이동
  $back.on("click", function() {
    $sidebar.find(".show").removeClass("show");
  });


  // 1차 선택 메뉴
  $gnb.children("li").each(function() {
    $(this).children("h3").on("click", function() {
      $(this).next().addClass("show");

      change()
    })
  })

  // 2차 선택 메뉴
  $menu2.children("li").each(function() {
    $(this).children("h4").on("click", function() {

      $(this).next().addClass("show");

      change()
    })
  })

  // sideTop 변경
  function change() {
    $sideTop.children(".logo").addClass("show");
    $sideTop.children(".back").addClass("show");
  }


})
  