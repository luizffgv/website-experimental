/*
This needs the following scripts to work.
- vendor/ScrollMagic/assets/js/lib/greensock/TweenMax.min.js
- vendor/ScrollMagic/scrollmagic/minified/ScrollMagic.min.js
- vendor/ScrollMagic/scrollmagic/minified/plugins/animation.gsap.min.js
*/

const controller = new ScrollMagic.Controller();

document.addEventListener("DOMContentLoaded", (e) => {
  // Animate the title and subtitle
  new ScrollMagic.Scene({
    offset: 0,
    duration: "50%",
  })
    .setTween(
      new TimelineMax()
        .to("#my-name", 1, {
          className: "+=text-pop-up-top-end",
        })
        .to(
          "#welcome-msg",
          1,
          {
            opacity: 1,
          },
          0
        )
    )
    .addTo(controller);

  // Switch from page-1 to page-2
  new ScrollMagic.Scene({
    triggerElement: "#snap-3",
    duration: "50%",
  })
    .setTween(
      new TimelineMax()
        .to("#my-name", 1, {
          className: "-=text-pop-up-top-end",
          opacity: 0,
        })
        .to(
          "#welcome-msg",
          1,
          {
            opacity: 0,
          },
          0
        )
        .fromTo(
          "#page-2",
          1,
          {
            opacity: 0,
            "letter-spacing": "1em",
            transform: "translateZ(400px) translateY(300px)",
          },
          {
            opacity: 1,
            "letter-spacing": "0em",
            transform: "translateZ(0) translateY(0)",
          }
        )
    )
    .addTo(controller);

  // Switch from page-2 to page-3
  new ScrollMagic.Scene({
    triggerElement: "#snap-4",
    duration: "50%",
  })
    .setTween(
      new TimelineMax()
        .to(
          "#page-2",
          1,
          {
            opacity: 0,
          },
          0
        )
        .fromTo(
          "#page-3",
          1,
          {
            opacity: 0,
            "letter-spacing": "1em",
            transform: "translateY(300px)",
          },
          {
            opacity: 1,
            "letter-spacing": "0em",
            transform: "translateY(0)",
          }
        )
    )
    .addTo(controller);

  // Show tools
  new ScrollMagic.Scene({
    triggerElement: "#snap-5",
    duration: "50%",
  })
    .setTween(
      TweenMax.fromTo(
        "#tools",
        1,
        {
          opacity: 0,
          transform: "translateY(300px)",
        },
        {
          opacity: 1,
          transform: "translateY(0)",
        }
      )
    )
    .addTo(controller);

  // Show langs
  new ScrollMagic.Scene({
    triggerElement: "#snap-6",
    duration: "50%",
  })
    .setTween(
      TweenMax.fromTo(
        "#langs",
        1,
        {
          opacity: 0,
          transform: "translateY(300px)",
        },
        {
          opacity: 1,
          transform: "translateY(0)",
        }
      )
    )
    .addTo(controller);

  // Switch from page-3 to page-4
  new ScrollMagic.Scene({
    triggerElement: "#snap-7",
    duration: "50%",
  })
    .setTween(
      new TimelineMax()
        .to(
          "#page-3",
          1,
          {
            opacity: 0,
          },
          0
        )
        .fromTo(
          "#page-4",
          1,
          {
            opacity: 0,
            "letter-spacing": "1em",
            transform: "translateY(300px)",
          },
          {
            opacity: 1,
            "letter-spacing": "0em",
            transform: "translateY(0)",
          }
        )
    )
    .addTo(controller);
});
