import { useEffect, useRef, useState } from 'react';

interface FlipCardProps {
    digit: string; // single character '0'–'9'
}

export function FlipCard({ digit }: FlipCardProps) {
    const [current, setCurrent] = useState(digit);
    const [next, setNext] = useState(digit);
    const [flipping, setFlipping] = useState(false);
    const prevDigit = useRef(digit);

    useEffect(() => {
        if (digit === prevDigit.current) return;
        setNext(digit);
        setFlipping(true);

        const timer = setTimeout(() => {
            setCurrent(digit);
            setFlipping(false);
            prevDigit.current = digit;
        }, 300);

        return () => clearTimeout(timer);
    }, [digit]);

    return (
        <div className="relative w-[2.25rem] h-[3.25rem] sm:w-[3.25rem] sm:h-[4.5rem] md:w-[5rem] md:h-[7rem] perspective-500 select-none">
            <div className="absolute inset-0 flex flex-col overflow-hidden">
                <div className="flex-1 flex items-end justify-center bg-flip-dark rounded-t-md overflow-hidden border-b border-black/40">
                    <span className="text-sunshine-400 font-black text-2xl sm:text-4xl md:text-6xl leading-none pb-0.5 translate-y-1/2">
                        {current}
                    </span>
                </div>
                <div className="flex-1 flex items-start justify-center bg-flip-mid rounded-b-md overflow-hidden">
                    <span className="text-sunshine-400 font-black text-2xl sm:text-4xl md:text-6xl leading-none pt-0.5 -translate-y-1/2">
                        {flipping ? next : current}
                    </span>
                </div>
            </div>

            {flipping && (
                <div
                    className="absolute inset-x-0 top-0 h-1/2 bg-flip-dark rounded-t-md overflow-hidden origin-bottom"
                    style={{
                        animation: 'flipTop 0.25s ease-in forwards',
                        zIndex: 10,
                        backfaceVisibility: 'hidden',
                    }}
                >
                    <div className="w-full h-full flex items-end justify-center">
                        <span className="text-sunshine-400 font-black text-2xl sm:text-4xl md:text-6xl leading-none pb-0.5 translate-y-1/2">
                            {current}
                        </span>
                    </div>
                </div>
            )}
            {flipping && (
                <div
                    className="absolute inset-x-0 bottom-0 h-1/2 bg-flip-mid rounded-b-md overflow-hidden origin-top"
                    style={{
                        animation: 'flipBottom 0.25s ease-out 0.25s forwards',
                        zIndex: 10,
                        transform: 'rotateX(90deg)',
                        backfaceVisibility: 'hidden',
                    }}
                >
                    <div className="w-full h-full flex items-start justify-center">
                        <span className="text-sunshine-400 font-black text-2xl sm:text-4xl md:text-6xl leading-none pt-0.5 -translate-y-1/2">
                            {next}
                        </span>
                    </div>
                </div>
            )}

            <div className="absolute inset-x-0 top-1/2 h-[2px] bg-black/60 z-20 -translate-y-px" />
        </div>
    );
}
