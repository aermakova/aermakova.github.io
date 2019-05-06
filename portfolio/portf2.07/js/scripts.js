$(function () { // wait for document ready
  // init
  var controller = new ScrollMagic.Controller();

  // define movement of panels
  var wipeAnimation = new TimelineMax()
    .fromTo("section.panel.portfolio", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})  // in from left
    .fromTo("section.panel.skill",    1, {x:  "100%"}, {x: "0%", ease: Linear.easeNone})  // in from right
    .fromTo("section.panel.contact", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone}); // in from top

  // create scene to pin and link animation
  new ScrollMagic.Scene({
      triggerElement: "#wrap",
      triggerHook: "onLeave",
      duration: "300%"
    })
    .setPin("#wrap")
    .setTween(wipeAnimation)
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

    $('.portfolio-item').on('click', function() {
    $('.portfolio-block').toggleClass('portfolio-origin');
    })
});
