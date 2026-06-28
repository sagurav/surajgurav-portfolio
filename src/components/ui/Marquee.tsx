interface MarqueeRowProps {
  items: string[];
  reverse?: boolean;
  speed?: number;
}

export function MarqueeRow({ items, reverse = false, speed = 35 }: MarqueeRowProps) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden">
      <div
        className="absolute inset-y-0 left-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #080E1A, transparent)" }}
      />
      <div
        className="absolute inset-y-0 right-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #080E1A, transparent)" }}
      />
      <div
        className={`flex gap-3 w-max py-1 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="badge-skill shrink-0 text-[11px] px-4 py-1.5"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
