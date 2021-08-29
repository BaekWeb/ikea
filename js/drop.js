$(function() {

  // drop
  var footer = $(".footer");
  var drop = footer.find(".box");

  drop.children("ul > li").each(function() {
    $(this).children("h3").on("click", function() {
      if ($(this).next("ul").is(".drop")) {
        $(this).next("ul").removeClass("drop");
      } else {
        drop.find("h3").next("ul.drop").removeClass('drop');
        $(this).next("ul").addClass("drop");
      }
    })
  })

})
  