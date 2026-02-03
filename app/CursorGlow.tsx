"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    function handleMove(e: MouseEvent) {
      const x = e.clientX - 110;
      const y = e.clientY - 110;
      glow.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    }

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return <div ref={glowRef} className="cursor-glow hidden md:block" />;
}
