import { FlipUnit } from './FlipUnit';
import { useCountdown } from '../hooks/useCountdown';

export function CountdownClock() {
    const { days, hours, minutes, seconds, isOver } = useCountdown();

    if (isOver) {
        return (
            <div className="text-center">
                <p className="text-sunshine-400 text-xl sm:text-3xl md:text-5xl font-black animate-pulse">
                    ☀️ We&apos;re in Tenerife! ☀️
                </p>
            </div>
        );
    }

    return (
        <div className="flex items-center gap-1 sm:gap-2 md:gap-6">
            <FlipUnit value={days} label="Days" />
            <Colon />
            <FlipUnit value={hours} label="Hrs" />
            <Colon />
            <FlipUnit value={minutes} label="Min" />
            <Colon />
            <FlipUnit value={seconds} label="Sec" />
        </div>
    );
}

function Colon() {
    return (
        <div className="flex flex-col gap-1.5 sm:gap-2 pb-5 sm:pb-6 md:pb-8">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 rounded-full bg-sunshine-400 shadow-[0_0_8px_2px_rgba(255,215,0,0.6)]" />
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 rounded-full bg-sunshine-400 shadow-[0_0_8px_2px_rgba(255,215,0,0.6)]" />
        </div>
    );
}
