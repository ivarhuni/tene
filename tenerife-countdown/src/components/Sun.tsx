import { motion } from 'framer-motion';

const RAY_COUNT = 12;
const RAY_LENGTH = 60;
const RAY_START = 90; // distance from center where ray starts

export function Sun() {
  const rays = Array.from({ length: RAY_COUNT }, (_, i) => {
    const angle = (i * 360) / RAY_COUNT;
    const rad = (angle * Math.PI) / 180;
    const x1 = Math.cos(rad) * RAY_START;
    const y1 = Math.sin(rad) * RAY_START;
    const x2 = Math.cos(rad) * (RAY_START + RAY_LENGTH);
    const y2 = Math.sin(rad) * (RAY_START + RAY_LENGTH);
    return { x1, y1, x2, y2, angle };
  });

  return (
    <div className="relative flex items-center justify-center">
      {/* Outer glow ring */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 280,
          height: 280,
          background:
            'radial-gradient(circle, rgba(255,215,0,0.35) 0%, rgba(255,165,0,0.15) 50%, transparent 70%)',
        }}
        animate={{ scale: [1, 1.12, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />

      <svg width={340} height={340} viewBox="-170 -170 340 340" overflow="visible">
        {/* Rotating rays */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          style={{ originX: '50%', originY: '50%' }}
        >
          {rays.map((r, i) => (
            <line
              key={i}
              x1={r.x1}
              y1={r.y1}
              x2={r.x2}
              y2={r.y2}
              stroke="#FFD700"
              strokeWidth={i % 3 === 0 ? 5 : 3}
              strokeLinecap="round"
              opacity={i % 3 === 0 ? 1 : 0.7}
              style={{ filter: 'drop-shadow(0 0 4px #FFA500)' }}
            />
          ))}
        </motion.g>

        {/* Sun body */}
        <motion.circle
          cx={0}
          cy={0}
          r={80}
          fill="url(#sunGradient)"
          style={{ filter: 'drop-shadow(0 0 20px rgba(255,165,0,0.8))' }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Sun face shine highlight */}
        <circle cx={-20} cy={-20} r={30} fill="rgba(255,255,255,0.12)" />

        <defs>
          <radialGradient id="sunGradient" cx="40%" cy="35%" r="60%">
            <stop offset="0%" stopColor="#FFE566" />
            <stop offset="50%" stopColor="#FFD700" />
            <stop offset="100%" stopColor="#FF8C00" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
