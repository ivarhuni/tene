import { FlipCard } from './FlipCard';

interface FlipUnitProps {
    value: number;
    label: string;
}

export function FlipUnit({ value, label }: FlipUnitProps) {
    const digitCount = Math.max(2, String(value).length);
    const padded = String(value).padStart(digitCount, '0');
    const digits = padded.split('');

    return (
        <div className="flex flex-col items-center gap-1 sm:gap-2">
            <div className="flex gap-0.5 sm:gap-1 md:gap-2">
                {digits.map((d, i) => (
                    <FlipCard key={i} digit={d} />
                ))}
            </div>
            <span className="text-sunshine-400 text-[0.6rem] sm:text-xs md:text-sm font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase">
                {label}
            </span>
        </div>
    );
}
