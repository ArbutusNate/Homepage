let hoverGitOn = function() {
  $(this).animate({
    right: "+=50",
    top: "+=40"
  })
  $(".gh-mark").css("visibility", "visible").hide().fadeIn(400)
}

let hoverGitOff = function () {
  $(this).animate({
    right: "-=50",
    top: "-=40"
  });
  $(".gh-mark").fadeOut(400, () => {
  $(".gh-mark").css("visibility", "hidden").css("display", "")
  });
}

let hoverPicOn = function () {
  console.log($(this).width());
    let oWidth = $(this).width();
    $(this).animate({
      width : "0px",
      "border-width": "1px 0px 1px 10px"
    }, 600, () => {
        $(".flip-front").toggle();
        $(".flip-back").toggle();
        $(this).animate({
            width: oWidth,
            "border-width": "1px 1px 1px 1px"
        }, 600)
    })
}

// let hoverPicOff = function () {
//   $(this).animate({
//     width: "100px"
//   })
//   console.log("hover off");
// }

$(window).ready(function(){
  if ($(window).width() < 800) {
    console.log('small');
    // $("#profile-pic").css("src", "./assets/me_pic_640.jpg");
  } else {
    console.log('big');
    // $("#profile-pic").css("src", "./assets/me_pic_900.jpg");
    AOS.init();
  }
  // ($(window).width() < 800) ?
  // // console.log('small')
  // $("#profile-pic").css("src", "./assets/me_pic_640.jpg")  :
  // // console.log('big');
  // $("#profile-pic").css("src", "./assets/me_pic_900.jpg")

  $("button").click(function(e) {
    let name = $(this).attr("data-name");
    let destination = $(name);
    $("html, body").animate({
        scrollTop: destination.offset().top
    }, 1500)
  })
  $("#top-right-ribbon").hover(hoverGitOn, hoverGitOff)
  // $(".flip").on("mouseenter", hoverPicOn)
})

// $(window).ready(function(){

// })