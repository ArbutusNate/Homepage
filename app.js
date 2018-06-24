$(window).ready(function(){
  $("button").click(function(e) {
    let name = $(this).attr("data-name");
    let destination = $(name);
    $("html, body").animate({
        scrollTop: destination.offset().top
    }, 1500)
  })
})