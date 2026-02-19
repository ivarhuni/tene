import { FlipCard } from './FlipCard';

interface FlipUnitProps {
  value: number;
  label: string;
}

export function FlipUnit({ value, label }: FlipUnitProps) {
  const padded = String(value).padStart(2, '0');
  const tens = padded[0];
  const units = padded[1];

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex gap-1 md:gap-2">
        <FlipCard digit={tens} />
        <FlipCard digit={units} />
      </div>
      <span className="text-sunshine-400 text-xs md:text-sm font-bold tracking-[0.2em] uppercase">
        {label}
      </span>
    </div>
  );
}
