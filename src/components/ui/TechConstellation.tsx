"use client";

const CX = 240;
const CY = 240;
const RING_R = 150;
const NODE_R = 22;

interface NodeDef {
  id: string;
  label: string;
  angle: number;
  color: string;
  abbr: string;
}

const NODES: NodeDef[] = [
  { id: "ai",      label: "AI / ML",    angle: 0,   color: "#00BFA5", abbr: "AI"  },
  { id: "hc",      label: "Healthcare", angle: 60,  color: "#EC4899", abbr: "HC"  },
  { id: "cloud",   label: "AWS Cloud",  angle: 120, color: "#3B82F6", abbr: "AWS" },
  { id: "fs",      label: "Full Stack", angle: 180, color: "#A855F7", abbr: "FS"  },
  { id: "bi",      label: "Data & BI",  angle: 240, color: "#F0B429", abbr: "BI"  },
  { id: "fintech", label: "FinTech",    angle: 300, color: "#10B981", abbr: "FIN" },
];

function nodePos(angleDeg: number, r = RING_R) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: Math.round((CX + r * Math.sin(rad)) * 10) / 10,
    y: Math.round((CY - r * Math.cos(rad)) * 10) / 10,
  };
}

function getLabelProps(angle: number) {
  if (angle < 30 || angle >= 330) {
    return { textAnchor: "middle" as const, dx: 0, dy: -(NODE_R + 12) };
  } else if (angle >= 30 && angle < 150) {
    return { textAnchor: "start" as const, dx: NODE_R + 10, dy: 4 };
  } else if (angle >= 150 && angle < 210) {
    return { textAnchor: "middle" as const, dx: 0, dy: NODE_R + 18 };
  } else {
    return { textAnchor: "end" as const, dx: -(NODE_R + 10), dy: 4 };
  }
}

export default function TechConstellation() {
  return (
    <div
      className="relative w-full max-w-[480px] aspect-square select-none"
      aria-hidden="true"
    >
      <svg viewBox="0 0 480 480" className="w-full h-full">
        <defs>
          {/* Glow filters */}
          <filter id="tc-glow-dot" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="tc-glow-center" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Center background glow gradient */}
          <radialGradient id="tc-center-bg" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#00BFA5" stopOpacity="0.1" />
            <stop offset="55%"  stopColor="#00BFA5" stopOpacity="0.03" />
            <stop offset="100%" stopColor="#00BFA5" stopOpacity="0" />
          </radialGradient>

          {/* Per-node gradient lines */}
          {NODES.map((node) => {
            const p = nodePos(node.angle);
            return (
              <linearGradient
                key={node.id}
                id={`tc-line-${node.id}`}
                x1={p.x}
                y1={p.y}
                x2={CX}
                y2={CY}
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%"   stopColor={node.color} stopOpacity="0.65" />
                <stop offset="75%"  stopColor={node.color} stopOpacity="0.1" />
                <stop offset="100%" stopColor="#00BFA5"    stopOpacity="0.25" />
              </linearGradient>
            );
          })}
        </defs>

        {/* Wide ambient background glow */}
        <circle cx={CX} cy={CY} r={220} fill="url(#tc-center-bg)" />

        {/* Outer dashed orbit ring */}
        <circle
          cx={CX} cy={CY} r={RING_R}
          fill="none"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="1"
          strokeDasharray="3 9"
        />
        {/* Inner accent ring */}
        <circle
          cx={CX} cy={CY} r={72}
          fill="none"
          stroke="rgba(0,191,165,0.07)"
          strokeWidth="1"
          strokeDasharray="2 8"
        />

        {/* Gradient connection lines */}
        {NODES.map((node) => {
          const p = nodePos(node.angle);
          return (
            <line
              key={node.id}
              x1={p.x} y1={p.y}
              x2={CX}  y2={CY}
              stroke={`url(#tc-line-${node.id})`}
              strokeWidth="1"
              strokeDasharray="4 7"
            />
          );
        })}

        {/* Traveling dots (SMIL animateMotion) */}
        {NODES.map((node, i) => {
          const p = nodePos(node.angle);
          const d1 = i * 0.58;
          const d2 = i * 0.58 + 1.8;
          const dur = 3.6;
          return (
            <g key={node.id}>
              {/* Dot: node → center */}
              <circle r="2.8" fill={node.color} opacity="0" filter="url(#tc-glow-dot)">
                <animateMotion
                  dur={`${dur}s`}
                  begin={`${d1}s`}
                  repeatCount="indefinite"
                  path={`M ${p.x},${p.y} L ${CX},${CY}`}
                />
                <animate
                  attributeName="opacity"
                  values="0;1;1;0"
                  keyTimes="0;0.07;0.9;1"
                  dur={`${dur}s`}
                  begin={`${d1}s`}
                  repeatCount="indefinite"
                />
              </circle>
              {/* Dot: center → node */}
              <circle r="2.2" fill={node.color} opacity="0" filter="url(#tc-glow-dot)">
                <animateMotion
                  dur={`${dur}s`}
                  begin={`${d2}s`}
                  repeatCount="indefinite"
                  path={`M ${CX},${CY} L ${p.x},${p.y}`}
                />
                <animate
                  attributeName="opacity"
                  values="0;0.65;0.65;0"
                  keyTimes="0;0.07;0.9;1"
                  dur={`${dur}s`}
                  begin={`${d2}s`}
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          );
        })}

        {/* Satellite nodes */}
        {NODES.map((node, i) => {
          const p  = nodePos(node.angle);
          const lp = getLabelProps(node.angle);
          const bd = 3 + i * 0.35;
          return (
            <g key={node.id}>
              {/* Outer breathing glow ring */}
              <circle cx={p.x} cy={p.y} r={NODE_R + 5} fill={node.color} fillOpacity={0.05}>
                <animate
                  attributeName="r"
                  values={`${NODE_R + 3};${NODE_R + 13};${NODE_R + 3}`}
                  dur={`${bd}s`}
                  repeatCount="indefinite"
                  calcMode="spline"
                  keySplines="0.45 0 0.55 1;0.45 0 0.55 1"
                />
                <animate
                  attributeName="fill-opacity"
                  values="0.05;0.015;0.05"
                  dur={`${bd}s`}
                  repeatCount="indefinite"
                  calcMode="spline"
                  keySplines="0.45 0 0.55 1;0.45 0 0.55 1"
                />
              </circle>
              {/* Main node circle */}
              <circle
                cx={p.x} cy={p.y} r={NODE_R}
                fill={`${node.color}18`}
                stroke={node.color}
                strokeWidth="1.5"
                strokeOpacity={0.75}
              >
                <animate
                  attributeName="stroke-opacity"
                  values="0.75;0.35;0.75"
                  dur={`${bd}s`}
                  repeatCount="indefinite"
                  calcMode="spline"
                  keySplines="0.45 0 0.55 1;0.45 0 0.55 1"
                />
              </circle>
              {/* Abbreviation inside node */}
              <text
                x={p.x} y={p.y}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="8"
                fontWeight="700"
                fontFamily="system-ui, sans-serif"
                letterSpacing="0.06em"
                fill={node.color}
                fillOpacity="0.95"
              >
                {node.abbr}
              </text>
              {/* Label outside node */}
              <text
                x={p.x + lp.dx}
                y={p.y + lp.dy}
                textAnchor={lp.textAnchor}
                fontSize="7.5"
                fontWeight="500"
                fontFamily="system-ui, sans-serif"
                letterSpacing="0.13em"
                fill="rgba(136,146,164,0.65)"
              >
                {node.label.toUpperCase()}
              </text>
            </g>
          );
        })}

        {/* Center secondary glow overlay */}
        <circle cx={CX} cy={CY} r={95} fill="url(#tc-center-bg)" />

        {/* Center breathing pulse ring */}
        <circle cx={CX} cy={CY} r={46} fill="none" stroke="#00BFA5" strokeOpacity={0.18}>
          <animate
            attributeName="r"
            values="44;56;44"
            dur="4.2s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.45 0 0.55 1;0.45 0 0.55 1"
          />
          <animate
            attributeName="stroke-opacity"
            values="0.18;0.04;0.18"
            dur="4.2s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.45 0 0.55 1;0.45 0 0.55 1"
          />
        </circle>

        {/* Center circle — with glow filter */}
        <circle
          cx={CX} cy={CY} r={36}
          fill="#0C1524"
          stroke="#00BFA5"
          strokeWidth="1.5"
          strokeOpacity={0.55}
          filter="url(#tc-glow-center)"
        />
        {/* Crisp border on top of blurred version */}
        <circle
          cx={CX} cy={CY} r={36}
          fill="none"
          stroke="#00BFA5"
          strokeWidth="1.5"
          strokeOpacity={0.55}
        />

        {/* SG monogram */}
        <text
          x={CX} y={CY - 5}
          textAnchor="middle"
          fontSize="15"
          fontWeight="800"
          fontFamily="system-ui, sans-serif"
          fill="#00BFA5"
          fillOpacity="0.95"
        >
          SG
        </text>
        <text
          x={CX} y={CY + 12}
          textAnchor="middle"
          fontSize="5.5"
          fontWeight="500"
          fontFamily="system-ui, sans-serif"
          letterSpacing="0.18em"
          fill="#8892A4"
          fillOpacity="0.7"
        >
          IT PRO
        </text>
      </svg>
    </div>
  );
}
