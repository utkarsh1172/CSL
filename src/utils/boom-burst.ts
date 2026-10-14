type BoomBurstVariant = "spark" | "confetti";

type BoomBurstOptions = {
  variant?: BoomBurstVariant;
};

const particleColors = ["#1268df", "#55bdf3", "#ffd35d", "#ff7a00"];
const easeOut = "cubic-bezier(0.16, 1, 0.3, 1)";

let layer: HTMLDivElement | null = null;

function getLayer() {
  if (layer?.isConnected) {
    return layer;
  }

  layer = document.createElement("div");
  layer.className = "boom-layer";
  layer.setAttribute("aria-hidden", "true");
  document.body.append(layer);
  return layer;
}

function canAnimate() {
  return (
    typeof window !== "undefined" &&
    typeof Element.prototype.animate === "function" &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/** Fires a one-shot particle burst at viewport coordinates. */
export function spawnBoomBurst(x: number, y: number, { variant = "spark" }: BoomBurstOptions = {}) {
  if (!canAnimate()) {
    return;
  }

  const isConfetti = variant === "confetti";
  const burst = document.createElement("div");
  burst.className = "boom-layer__burst";
  burst.style.left = `${x}px`;
  burst.style.top = `${y}px`;

  const ring = document.createElement("span");
  ring.className = "boom-layer__ring";
  burst.append(ring);
  ring.animate(
    [
      { opacity: 0.9, transform: "translate(-50%, -50%) scale(0.2)" },
      { opacity: 0, transform: `translate(-50%, -50%) scale(${isConfetti ? 8 : 5})` },
    ],
    { duration: isConfetti ? 720 : 520, easing: easeOut, fill: "forwards" },
  );

  const count = isConfetti ? 26 : 12;
  let longest = 720;

  for (let index = 0; index < count; index += 1) {
    const particle = document.createElement("span");
    const shape = isConfetti ? (index % 3 === 0 ? "dot" : "chip") : index % 2 === 0 ? "dot" : "streak";
    const angle = (Math.PI * 2 * index) / count + (Math.random() - 0.5) * 0.45;
    const distance = isConfetti ? 70 + Math.random() * 80 : 30 + Math.random() * 38;
    const duration = isConfetti ? 900 + Math.random() * 300 : 520 + Math.random() * 200;
    const turn = `${angle}rad`;

    particle.className = `boom-layer__particle boom-layer__particle--${shape}`;
    particle.style.background = particleColors[index % particleColors.length];
    burst.append(particle);

    const keyframes: Keyframe[] = isConfetti
      ? [
          {
            opacity: 1,
            transform: `translate(-50%, -50%) translateY(0px) rotate(${turn}) translateX(0px) rotate(0deg)`,
          },
          {
            opacity: 1,
            offset: 0.55,
            transform: `translate(-50%, -50%) translateY(0px) rotate(${turn}) translateX(${distance}px) rotate(200deg)`,
          },
          {
            opacity: 0,
            transform: `translate(-50%, -50%) translateY(46px) rotate(${turn}) translateX(${distance * 1.1}px) rotate(420deg)`,
          },
        ]
      : [
          { opacity: 1, transform: `translate(-50%, -50%) rotate(${turn}) translateX(4px) scale(1)` },
          {
            opacity: 0,
            transform: `translate(-50%, -50%) rotate(${turn}) translateX(${distance}px) scale(0.25)`,
          },
        ];

    particle.animate(keyframes, { duration, easing: easeOut, fill: "forwards" });
    longest = Math.max(longest, duration);
  }

  getLayer().append(burst);
  window.setTimeout(() => burst.remove(), longest + 80);
}

/** Fires a burst from the centre of an element, e.g. for keyboard activation or form success. */
export function spawnBoomBurstFrom(element: Element, options?: BoomBurstOptions) {
  const rect = element.getBoundingClientRect();
  spawnBoomBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, options);
}
