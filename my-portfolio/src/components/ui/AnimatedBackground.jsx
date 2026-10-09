import { motion } from "motion/react";

const circuits = [
  {
    path: "M40 80 H180 V160 H320",
    pulse: "M40 80 H180 V160 H320",
    node: [320, 160],
  },
  {
    path: "M760 120 H620 V220 H500",
    pulse: "M760 120 H620 V220 H500",
    node: [500, 220],
  },
  {
    path: "M80 620 H220 V540 H360",
    pulse: "M80 620 H220 V540 H360",
    node: [360, 540],
  },
  {
    path: "M700 580 H580 V500 H440",
    pulse: "M700 580 H580 V500 H440",
    node: [440, 500],
  },
];



export default function AnimatedBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Engineering grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--theme-foreground) 1px, transparent 1px),
            linear-gradient(to bottom, var(--theme-foreground) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Circuit network */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.15]"
        viewBox="0 0 800 700"
        preserveAspectRatio="none"
      >
        {circuits.map((circuit, index) => (
          <g key={index}>
            <path
              d={circuit.path}
              fill="none"
              stroke="var(--theme-accent)"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            />

            <motion.path
              d={circuit.pulse}
              fill="none"
              stroke="var(--theme-accent)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="10 100"
              vectorEffect="non-scaling-stroke"
              initial={{ strokeDashoffset: 0, opacity: 0 }}
              animate={{
                strokeDashoffset: -110,
                opacity: [1, 1, 1],
              }}
              transition={{
                duration: 4,
                delay: index * 1.2,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <circle
              cx={circuit.node[0]}
              cy={circuit.node[1]}
              r="3"
              fill="var(--theme-accent)"
              opacity="1"
            />
          </g>
        ))}
      </svg>
    </div>
  );
}