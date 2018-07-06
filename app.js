let btnClick = function () {
  let name = $(this).attr("data-name");
  let destination = $(name);
  $("html, body").animate({
      scrollTop: destination.offset().top
  }, 1500)
};

let hoverGitOn = function() {
  let _banner = $(this);
  if(_banner.attr("data-status") === "hidden" && _banner.attr("data-action") === "stopped") {
    _banner.attr({
      "data-status" : "shown",
      "data-action" : "animating"}
    ).animate({
      right: "+=50",
      top: "+=40"
    }, 1000, () => {
      _banner.attr("data-action", "stopped");
    })
    $(".gh-mark").css("visibility", "visible").hide().fadeIn(400)
  } else {
    console.log('Either shown or Animating');
    return;
  }
};

let hoverGitOff = function () {
  let _banner = $(this);
  if(_banner.attr("data-status") === "shown" && _banner.attr("data-action") === "stopped") {
    _banner.attr({
      "data-status" : "hidden",
      "data-action": "animating"}
      ).animate({
      right: "-=50",
      top: "-=40"
      }, 1000, () => {
        _banner.attr("data-action", "stopped");
      });
    $(".gh-mark").fadeOut(400, () => {
    $(".gh-mark").css("visibility", "hidden").css("display", "")
    });
  } else {
    console.log('Either hidden or Animating');

    return;
  }
};

let hoverPicOn = function () {
  if ($(this).attr("data-action") === "stopped") {
    console.log('stopped');
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
    console.log('animating');
    return;
  }
};

$(window).ready(function(){

  ($(window).width() < 800) ?
  console.log('small') :
  console.log('big')
  AOS.init();

  $("button").on('click', btnClick);
  $("#top-right-ribbon").hover(hoverGitOn, hoverGitOff);
  // $(".flip").on('mouseenter', hoverPicOn);
})
