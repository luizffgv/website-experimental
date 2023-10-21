/**
 * @file
 * Plays an animation when the document is being unloaded, such as when the user
 * clicks an anchor and goes to another page.
 */

const animation = new Animation(
  new KeyframeEffect(
    document.documentElement,
    [
      {
        filter: "unset",
      },
      { filter: "grayscale(100%)" },
    ],
    { duration: 250, fill: "both" }
  )
);

addEventListener("beforeunload", () => {
  animation.play();
});

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState == "visible" && animation.playState != "idle") {
    animation.cancel();
  }
});
