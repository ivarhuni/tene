import { motion } from 'framer-motion';
import kidPng from '../assets/kid.png';

const RAY_COUNT = 12;
const RAY_LENGTH = 69;
const RAY_START = 103.5; // distance from center where ray starts (×1.15)

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
            {/* Outer glow ring — scaled ×1.15: 280→322 */}
            <motion.div
                className="absolute rounded-full"
                style={{
                    width: 322,
                    height: 322,
                    background:
                        'radial-gradient(circle, rgba(255,215,0,0.35) 0%, rgba(255,165,0,0.15) 50%, transparent 70%)',
                }}
                animate={{ scale: [1, 1.12, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* SVG canvas scaled ×1.15: 340→391, viewBox -195.5 */}
            <svg width={391} height={391} viewBox="-195.5 -195.5 391 391" overflow="visible">
                <defs>
                    <radialGradient id="sunGradient" cx="40%" cy="35%" r="60%">
                        <stop offset="0%" stopColor="#FFE566" />
                        <stop offset="50%" stopColor="#FFD700" />
                        <stop offset="100%" stopColor="#FF8C00" />
                    </radialGradient>
                    {/* Clip circle for kid photo: 70% of sun radius 92 ≈ 64 */}
                    <clipPath id="kidClip">
                        <circle cx={0} cy={0} r={64} />
                    </clipPath>
                </defs>

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

                {/* Sun body — radius scaled ×1.15: 80→92 */}
                <motion.circle
                    cx={0}
                    cy={0}
                    r={92}
                    fill="url(#sunGradient)"
                    style={{ filter: 'drop-shadow(0 0 20px rgba(255,165,0,0.8))' }}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                />

                {/* Kid photo centred in sun, clipped to circle */}
                <image
                    href={kidPng}
                    x={-64}
                    y={-64}
                    width={128}
                    height={128}
                    clipPath="url(#kidClip)"
                    preserveAspectRatio="xMidYMid slice"
                />

                {/* Sun face shine highlight — scaled ×1.15: r 30→34.5 */}
                <circle cx={-23} cy={-23} r={34.5} fill="rgba(255,255,255,0.10)" />
            </svg>
        </div>
    );
}
