$(window).ready(function(){
  $("button").click(function(e) {
    let name = $(this).attr("data-name");
    let destination = $(name);
    $("html, body").animate({
        scrollTop: destination.offset().top
    }, 1500)
  })
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