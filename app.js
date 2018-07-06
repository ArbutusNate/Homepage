let btnClick = function () {
  let name = $(this).attr("data-name");
  let destination = $(name);
  $("html, body").animate({
      scrollTop: destination.offset().top
  }, 1500)
};

let hoverGitOn = function() {
  let _banner = $(this);
  // Check for Animation
  if(_banner.attr("data-status") === "hidden" && _banner.attr("data-action") === "stopped") {
    // Set attributes for animation
    _banner.attr({
      "data-status" : "shown",
      "data-action" : "animating"}
    ).animate({
      right: "+=50",
      top: "+=40"
    }, 1000, () => {
      // After animation update attributes
      _banner.attr("data-action", "stopped");
    })
    $(".gh-mark").css("visibility", "visible").hide().fadeIn(400)
  } else {
    return;
  }
};

let hoverGitOff = function () {
  let _banner = $(this);
  // Check for Animation
  if(_banner.attr("data-status") === "shown" && _banner.attr("data-action") === "stopped") {
    // Set attributes for animation
    _banner.attr({
      "data-status" : "hidden",
      "data-action": "animating"}
      ).animate({
      right: "-=50",
      top: "-=40"
      }, 1000, () => {
        // After animation update attributes
        _banner.attr("data-action", "stopped");
      });
    $(".gh-mark").fadeOut(400, () => {
    $(".gh-mark").css("visibility", "hidden").css("display", "")
    });
  } else {
    return;
  }
};

let hoverPicOn = function () {
  if ($(this).attr("data-action") === "stopped") {
    let oWidth = $(this).width();
    $(this).attr("data-action", "animating").animate({
      width : "0px",
      "border-width": "1px 0px 1px 10px"
    }, 600, () => {
      $(".flip-front").toggle();
      $(".flip-back").toggle();
      $(this).animate({
          width: oWidth,
          "border-width": "1px 1px 1px 1px"
      }, 600, () => {
        $(this).attr("data-action", "stopped");
      })
    })
  } else {
    return;
  }
};

$(window).ready(function(){

  if($(window).width() < 767) {
    return;
  } else {
    AOS.init();
  }

  $("button").on('click', btnClick);
  $("#top-right-ribbon").hover(hoverGitOn, hoverGitOff);
  // $(".flip").on('mouseenter', hoverPicOn);
})
