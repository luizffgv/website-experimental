import { throwIfNull } from "@luizffgv/ts-conversions";

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
  #color: string;
  #stop: boolean = false;

  /**
   * Creates a new {@link Bubbles}.
   *
   * @param element - Canvas element to use.
   * @param speed - Simulation speed.
   * @param color - Color of the bubbles.
   */
  constructor(element: HTMLCanvasElement, speed: number, color: string) {
    this.#element = element;
    this.#speed = speed;
    this.#color = color;

    this.#context = throwIfNull(this.#element.getContext("2d"));

    this.start();
  }

  #step(timestamp: DOMHighResTimeStamp) {
    if (this.#stop) return;

    const width = this.#element.clientWidth;
    const height = this.#element.clientHeight;
    this.#element.width = width;
    this.#element.height = height;

    const maxDimension = Math.max(width, height);

    if (this.#prevTimestamp == null) this.#prevTimestamp = timestamp;
    const deltaSeconds = (timestamp - this.#prevTimestamp) / 1000;

    const aliveBubbles: Bubble[] = [];

    this.#context.fillStyle = this.#color;

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

    const desiredRadius = width / 10;
    const desiredCount = width / desiredRadius;

    while (aliveBubbles.length < desiredCount) {
      const x = Math.random() * width;
      const bubble = new Bubble(x, -desiredRadius, desiredRadius);
      bubble.velY = 0.1;
      aliveBubbles.push(bubble);
    }

    this.#bubbles = aliveBubbles;

    this.#prevTimestamp = timestamp;

    requestAnimationFrame(this.#step.bind(this));
  }

  start() {
    this.#stop = false;
    requestAnimationFrame(this.#step.bind(this));
  }

  stop() {
    this.#stop = true;
    this.#bubbles = [];
  }
}

export function addToPage() {
  const canvas = document.createElement("canvas");

  canvas.style.width = "100vw";
  canvas.style.height = "100vh";
  canvas.style.top = "0";
  canvas.style.position = "fixed";
  canvas.style.zIndex = "-1";

  document.body.appendChild(canvas);

  new Bubbles(canvas, 0.5, "rgba(0, 0, 0, 0.01)");
}
