"use client";
import { motion } from "framer-motion";
import { Music, Radio, Disc, PlayCircle, Headphones, Podcast } from "lucide-react";

const platforms = [
    {
        name: "Spotify",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 group-hover:text-[#1DB954] transition-colors duration-500">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 14.34 1.14.539.3.66 1.02.359 1.56-.24.36-.899.54-1.259.24z" />
            </svg>
        )
    },
    {
        name: "Apple Music",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 group-hover:text-white transition-colors duration-500">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.56-.84 1.5.09 2.63.63 3.31 1.62-3.15 1.87-2.66 6.01.27 7.23-.61 1.5-1.4 3.01-2.27 4.16zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
            </svg>
        )
    },
    {
        name: "YouTube Music",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 group-hover:text-[#FF0000] transition-colors duration-500">
                <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 19.45c-4.11 0-7.45-3.33-7.45-7.45S7.89 4.55 12 4.55s7.45 3.33 7.45 7.45-3.33 7.45-7.45 7.45zm3.6-7.45l-5.75 3.32v-6.64l5.75 3.32z" />
            </svg>
        )
    },
    {
        name: "JioSaavn",
        icon: (
            <img
                src="/jiosaavn-icon.png"
                alt="JioSaavn"
                className="w-10 h-10 object-contain"
            />
        )
    },
    {
        name: "Amazon Music",
        icon: (
            <img
                src="/amazon-music-icon.png"
                alt="Amazon Music"
                className="w-10 h-10 object-contain"
            />
        )
    },
    {
        name: "Wynk Music",
        icon: (
            <img
                src="/wynk-official.png"
                alt="Wynk Music"
                className="w-10 h-10 object-contain"
            />
        )
    },
    {
        name: "Gaana",
        icon: (
            <img
                src="/gaana-icon.png"
                alt="Gaana"
                className="w-10 h-10 object-contain"
            />
        )
    },
    {
        name: "Tidal",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 group-hover:text-white transition-colors duration-500">
                <path d="M12.012 0C5.385 0 .012 5.373.012 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.983 17.068a1.69 1.69 0 0 1-2.903-1.189 1.69 1.69 0 0 1 2.903-1.189zm3.504-3.504a1.69 1.69 0 0 1-2.903-1.19 1.69 1.69 0 0 1 2.903-1.19zm-7.008 0a1.69 1.69 0 0 1-2.903-1.19 1.69 1.69 0 0 1 2.903-1.19zm3.504-3.504a1.69 1.69 0 0 1-2.903-1.189 1.69 1.69 0 0 1 2.903-1.189z" />
            </svg>
        )
    }
];

export default function MusicPlatforms() {
    return (
        <section className="relative w-full bg-black py-20 overflow-hidden border-t border-white/5 border-b border-white/5">
            {/* Premium Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-maroon)_0%,_transparent_70%)] opacity-20" />

            {/* Stardust/Noise Effect (CSS only) */}
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center justify-center w-full">
                {/* Floating 'Available On' Badge - Relative Layout to Prevent Cropping */}
                {/* Floating 'Available On' Badge - Relative Layout to Prevent Cropping */}
                <div className="mb-10 px-6 md:px-10 py-3 rounded-full border border-gold/30 bg-black/60 backdrop-blur-md shadow-[0_0_25px_rgba(212,175,55,0.25)] max-w-[90vw] text-center">
                    <span className="text-[10px] sm:text-xs md:text-base font-serif italic text-gold tracking-widest md:tracking-[0.2em] uppercase whitespace-normal md:whitespace-nowrap block">
                        Listen on All Major Platforms
                    </span>
                </div>

                {/* Marquee Wrapper */}
                <div className="flex w-full overflow-hidden mask-linear-gradient">
                    {/* Double the list for infinite scroll */}
                    <TranslateWrapper>
                        {[...platforms, ...platforms, ...platforms].map((platform, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-6 mx-16 group cursor-pointer"
                            >
                                <div className="text-white/50 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6 filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100">
                                    {platform.icon}
                                </div>
                                <span className="text-3xl md:text-5xl font-serif font-medium text-transparent bg-clip-text bg-gradient-to-br from-white/20 to-white/5 group-hover:from-gold group-hover:to-amber transition-all duration-500 tracking-widest uppercase">
                                    {platform.name}
                                </span>
                            </div>
                        ))}
                    </TranslateWrapper>
                </div>
            </div>

            {/* Cinematic Fade Edges */}
            <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black via-black/90 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black via-black/90 to-transparent z-10 pointer-events-none" />
        </section>
    );
}

const TranslateWrapper = ({ children }: { children: React.ReactNode }) => (
    <motion.div
        initial={{ x: "0%" }}
        animate={{ x: "-50%" }}
        transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
        }}
        className="flex items-center min-w-max"
    >
        {children}
    </motion.div>
);
