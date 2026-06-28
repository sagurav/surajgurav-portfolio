"use client";
import { useEffect, useRef } from "react";
import { motion, animate, useMotionValue, useTransform, useInView } from "framer-motion";

export function CountUp({
  to,
  suffix = "",
  duration = 2,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, to, { duration, ease: "easeOut" });
    return controls.stop;
  }, [isInView, count, to, duration]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}
