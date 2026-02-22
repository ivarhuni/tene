import { SunshineBackground } from './components/SunshineBackground';
import { Sun } from './components/Sun';
import { CountdownClock } from './components/CountdownClock';

function App() {
    return (
        <div className="min-h-[100dvh] flex flex-col items-center justify-center px-3 sm:px-4 py-6 sm:py-8 overflow-x-hidden">
            <SunshineBackground />

            <div
                className="rounded-xl sm:rounded-2xl p-3 sm:p-5 md:p-8 mb-4 sm:mb-6 md:mb-8 max-w-[95vw]"
                style={{
                    background: 'rgba(0,0,0,0.35)',
                    backdropFilter: 'blur(12px)',
                    boxShadow: '0 0 60px rgba(255,165,0,0.25), 0 8px 32px rgba(0,0,0,0.4)',
                    border: '1px solid rgba(255,215,0,0.2)',
                }}
            >
                <CountdownClock />
            </div>

            <p
                className="mb-4 sm:mb-6 text-white/70 text-[0.65rem] sm:text-xs md:text-sm font-medium tracking-wider sm:tracking-widest uppercase text-center"
                style={{ textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}
            >
                June 15, 2026 · 10:00 AM · Tenerife
            </p>

            <div className="mb-1 sm:mb-2 md:mb-4">
                <Sun />
            </div>

            <h1
                className="text-2xl sm:text-4xl md:text-6xl font-black text-white mb-1 tracking-tight text-center"
                style={{ textShadow: '0 2px 16px rgba(255,165,0,0.7), 0 0 40px rgba(255,215,0,0.4)' }}
            >
                Tenerife ☀️
            </h1>
            <p
                className="text-sunshine-300 text-xs sm:text-sm md:text-lg font-semibold tracking-wider sm:tracking-widest uppercase text-center"
                style={{ textShadow: '0 1px 8px rgba(0,0,0,0.4)' }}
            >
                Countdown to Paradise
            </p>
        </div>
    );
}

export default App;
