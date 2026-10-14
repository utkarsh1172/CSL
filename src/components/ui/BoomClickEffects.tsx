"use client";

import { useEffect } from "react";

import { spawnBoomBurst, spawnBoomBurstFrom } from "@/utils/boom-burst";

const boomClickSelector = "[data-boom-click]";

/** Delegated listener: any element marked `data-boom-click` bursts where it is pressed. */
export function BoomClickEffects() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) {
        return;
      }

      const trigger = event.target.closest(boomClickSelector);

      if (!trigger) {
        return;
      }

      // Keyboard activation reports no pointer position, so burst from the element itself.
      if (event.detail === 0) {
        spawnBoomBurstFrom(trigger);
        return;
      }

      spawnBoomBurst(event.clientX, event.clientY);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
