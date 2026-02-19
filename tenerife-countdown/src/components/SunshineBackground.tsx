import { motion } from 'framer-motion';

const BG_RAYS = Array.from({ length: 18 }, (_, i) => i);

export function SunshineBackground() {
  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #0EA5E9 0%, #0284C7 50%, #0369A1 100%)',
      }}
    >
      {/* Decorative radiating rays from top-right (where the sun sits) */}
      <svg
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1200 800"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.g
          style={{ transformOrigin: '900px 0px' }}
          animate={{ rotate: [0, 5, 0, -5, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        >
          {BG_RAYS.map((i) => {
            const angle = -60 + i * 16;
            const rad = (angle * Math.PI) / 180;
            const len = 1400;
            return (
              <line
                key={i}
                x1={900}
                y1={0}
                x2={900 + Math.cos(rad) * len}
                y2={Math.sin(rad) * len}
                stroke="rgba(255,215,0,0.05)"
                strokeWidth={30 + (i % 3) * 15}
              />
            );
          })}
        </motion.g>
      </svg>

      {/* Ocean shimmer at bottom */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background:
            'linear-gradient(to top, rgba(255,215,0,0.08) 0%, transparent 100%)',
        }}
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}
