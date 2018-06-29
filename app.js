let hoverOn = function() {
  $(this).animate({
    right: "+=50",
    top: "+=40"
  })
  $(".gh-mark").css("visibility", "visible").hide().fadeIn(400)
}

let hoverOff = function () {
  $(this).animate({
    right: "-=50",
    top: "-=40"
  });
  $(".gh-mark").fadeOut(400, () => {
  $(".gh-mark").css("visibility", "hidden").css("display", "")
  });
}




$(window).ready(function(){
  ($(window).width() < 800) ?
  console.log('small')  :
  console.log('big');
  AOS.init();

  $("button").click(function(e) {
    let name = $(this).attr("data-name");
    let destination = $(name);
    $("html, body").animate({
        scrollTop: destination.offset().top
    }, 1500)
  })
  $("#top-right-ribbon").hover(hoverOn, hoverOff)
})

// $(window).ready(function(){

// })