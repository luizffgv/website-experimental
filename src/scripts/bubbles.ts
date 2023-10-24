/**
 * @file
 * Lets you create bubble simulations in canvas elements.
 */

import { throwIfNull, uncheckedCast } from "@luizffgv/ts-conversions";
import { html } from "./tags";

/**
 * A simulated bubble.
 */
export class Bubble {
  /**
   * X position.
   */
  x: number;

  /**
   * Y position.
   */
  y: number;

  /**
   * X velocity.
   */
  velX: number = 0;

  /**
   * Y velocity.
   */
  velY: number = 0;

  /**
   * Bubble radius.
   */
  radius: number;

  /**
   * Creates a new {@link Bubble}.
   *
   * @param x - X position.
   * @param y - Y position.
   * @param radius - Bubble radius.
   */
  constructor(x: number, y: number, radius: number) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }
}

/**
 * Bubbles simulation.
 */
export class Bubbles {
  #element: HTMLCanvasElement;
  #context: CanvasRenderingContext2D;
  #prevTimestamp?: DOMHighResTimeStamp;
  #bubbles: Bubble[] = [];
  #speed: number;
  #colorGenerator: () => string;
  #stop: boolean = false;

  /**
   * Creates a new {@link Bubbles}.
   *
   * @param element - Canvas element to use.
   * @param speed - Simulation speed.
   * @param color - Color of the bubbles, or function that returns a color.
   */
  constructor(
    element: HTMLCanvasElement,
    speed: number,
    color: string | (() => string)
  ) {
    this.#element = element;
    this.#speed = speed;

    if (typeof color == "string") this.#colorGenerator = () => color;
    else this.#colorGenerator = color;

    this.#context = throwIfNull(this.#element.getContext("2d"));

    this.start();
  }

  #step(timestamp: DOMHighResTimeStamp): void {
    if (this.#stop) return;

    const width = this.#element.clientWidth;
    const height = this.#element.clientHeight;
    this.#element.width = width;
    this.#element.height = height;

    const maxDimension = Math.max(width, height);

    if (this.#prevTimestamp == null) this.#prevTimestamp = timestamp;
    const deltaSeconds = (timestamp - this.#prevTimestamp) / 1000;

    const aliveBubbles: Bubble[] = [];

    this.#context.fillStyle = this.#colorGenerator();

    for (const bubble of this.#bubbles) {
      if (
        bubble.y - bubble.radius > this.#element.clientHeight ||
        bubble.y + bubble.radius < -5 ||
        bubble.x + bubble.radius < 0 ||
        bubble.x - bubble.radius > this.#element.clientWidth
      )
        continue;

      bubble.velX += (Math.random() - 0.5) * 2 * deltaSeconds;
      bubble.velY += (Math.random() - 0.5) * 2 * deltaSeconds;

      bubble.x += bubble.velX * this.#speed * maxDimension * deltaSeconds;
      bubble.y += bubble.velY * this.#speed * maxDimension * deltaSeconds;

      this.#context.beginPath();
      this.#context.arc(
        bubble.x,
        height - bubble.y,
        bubble.radius,
        0,
        2 * Math.PI
      );
      this.#context.fill();

      aliveBubbles.push(bubble);
    }

    const maxRadius = width / 10;
    const DESIRED_COUNT = 15;

    while (aliveBubbles.length < DESIRED_COUNT) {
      const radius = maxRadius * (Math.random() * 0.9 + 0.1);
      const fromBelow = Math.random() < 0.5;
      const spawnX = Math.random() * width;
      const spawnY = fromBelow ? -radius : this.#element.clientHeight + radius;
      const initialSpeedY = Math.random() * 0.5 * (fromBelow ? 1 : -1);
      const bubble = new Bubble(spawnX, spawnY, radius);
      bubble.velY = initialSpeedY;
      aliveBubbles.push(bubble);
    }

    this.#bubbles = aliveBubbles;

    this.#prevTimestamp = timestamp;

    requestAnimationFrame(this.#step.bind(this));
  }

  start(): void {
    this.#stop = false;
    requestAnimationFrame(this.#step.bind(this));
  }

  stop(): void {
    this.#stop = true;
    this.#bubbles = [];
  }
}

/**
 * Adds a bubbles simulation to the page.
 *
 * @remarks
 * Should only be called once per page.
 */
export function addToPage(): void {
  const canvas = document.createElement("canvas");

  canvas.id = "bubbles";
  canvas.style.width = "100%";
  canvas.style.height = "100vh";
  canvas.style.opacity = "0";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.style.position = "fixed";
  canvas.style.zIndex = "-1";
  canvas.style.filter = 'url("#bubbles-filter")';

  const spawnAnimation = new Animation(
    new KeyframeEffect(
      canvas,
      [
        {
          opacity: "0",
        },
        {
          opacity: "1",
        },
      ],
      { duration: 5000, easing: "ease-in", fill: "forwards" }
    )
  );

  setTimeout(() => {
    spawnAnimation.play();
  }, 500);

  const filterContainer = document.createElement("div");
  filterContainer.id = "bubbles-filter-container";
  filterContainer.style.display = "none";
  filterContainer.innerHTML = html`
    <svg xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="bubbles-filter">
          <feGaussianBlur in="SourceGraphic" stdDeviation="25" />
          <feColorMatrix
            in="goo"
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 50 -10"
          />
        </filter>
      </defs>
    </svg>
  `;
  document.body.append(filterContainer);

  const fade = document.createElement("div");
  fade.style.position = "absolute";
  fade.style.left = "0";
  fade.style.top = "0";
  fade.style.width = "100%";
  fade.style.height = "256px";
  fade.style.zIndex = "-1";
  fade.style.background =
    "linear-gradient(to bottom, var(--raiar-color-bg), transparent)";

  document.body.append(canvas, fade);

  const bodyStyle = getComputedStyle(document.body);

  new Bubbles(canvas, 1 / 5, () =>
    bodyStyle.getPropertyValue("--raiar-color-primary")
  );
}
