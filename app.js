let hoverOn = function() {
  $(this).animate({
    right: "+=59",
    top: "+=50"
  })
}

let hoverOff = function () {
  $(this).animate({
    right: "-=59",
    top: "-=50"
  })
}




$(window).ready(function(){
  $("button").click(function(e) {
    let name = $(this).attr("data-name");
    let destination = $(name);
    $("html, body").animate({
        scrollTop: destination.offset().top
    }, 1500)
  })
  $("#top-right-ribbon").hover(hoverOn, hoverOff)
})

$(window).ready(function(){
    if ($(window).width() < 800) {
      console.log('small');
      return;
    } else {
      console.log('big');
      AOS.init();
    }
})