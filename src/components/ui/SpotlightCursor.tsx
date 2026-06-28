"use client";
import { useEffect, useRef } from "react";

export default function SpotlightCursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current) {
        ref.current.style.setProperty("--mx", `${e.clientX}px`);
        ref.current.style.setProperty("--my", `${e.clientY}px`);
      }
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[999] transition-opacity duration-300 hidden lg:block"
      style={{
        background:
          "radial-gradient(700px circle at var(--mx, -9999px) var(--my, -9999px), rgba(0,191,165,0.07) 0%, transparent 40%)",
      }}
    />
  );
}
