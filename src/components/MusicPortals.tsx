"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Play, Disc, Pause } from "lucide-react";

const PORTALS = [
    {
        name: "Spotify",
        url: "https://open.spotify.com/search/himali%20josh",
        hex: "#1DB954",
        color: "text-[#1DB954]",
        border: "group-hover:border-[#1DB954]",
        bg: "bg-[#1DB954]/10",
        glow: "shadow-[#1DB954]/20",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-[#1DB954] drop-shadow-[0_0_10px_rgba(29,185,84,0.5)]">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 14.34 1.14.539.3.66 1.02.359 1.56-.24.36-.899.54-1.259.24z" />
            </svg>
        )
    },
    {
        name: "Apple Music",
        url: "https://music.apple.com/in/artist/himali-joshi/1544328313",
        hex: "#FA243C",
        color: "text-[#FA243C]",
        border: "group-hover:border-[#FA243C]",
        bg: "bg-[#FA243C]/10",
        glow: "shadow-[#FA243C]/20",
        icon: (
            <div className="bg-white p-2 rounded-lg shadow-lg">
                <svg viewBox="0 0 24 24" fill="black" className="w-8 h-8">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.56-.84 1.5.09 2.63.63 3.31 1.62-3.15 1.87-2.66 6.01.27 7.23-.61 1.5-1.4 3.01-2.27 4.16zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
            </div>
        )
    },
    {
        name: "Amazon Music",
        url: "https://music.amazon.com/artists/B08T8Q24SV/himali-joshi",
        hex: "#00A8E1",
        color: "text-[#00A8E1]",
        border: "group-hover:border-[#00A8E1]",
        bg: "bg-[#00A8E1]/10",
        glow: "shadow-[#00A8E1]/20",
        icon: (
            <img src="/amazon-music-icon.png" alt="Amazon Music" className="w-12 h-12 object-contain invert drop-shadow-[0_0_10px_rgba(0,168,225,0.5)]" />
        )
    },
    {
        name: "JioSaavn",
        url: "https://www.jiosaavn.com/artist/himali-joshi-songs/NeYXW5LVM6g_",
        hex: "#2BC5B4",
        color: "text-[#2BC5B4]",
        border: "group-hover:border-[#2BC5B4]",
        bg: "bg-[#2BC5B4]/10",
        glow: "shadow-[#2BC5B4]/20",
        icon: (
            <img src="/jiosaavn-icon.png" alt="JioSaavn" className="w-12 h-12 object-contain drop-shadow-[0_0_10px_rgba(43,197,180,0.5)]" />
        )
    }
];

export default function MusicPortals() {
    // Current active player index
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    // Is the audio actually playing?
    const [isPlaying, setIsPlaying] = useState(false);

    // Audio ref (using state to keep track of the instance if needed, but simple ref is better for play controls)
    const audioRef = React.useRef<HTMLAudioElement | null>(null);

    React.useEffect(() => {
        // Initialize audio object once
        // Using one of the video files as audio source since user has no mp3s yet. 
        // Ideally this should be a specific track.
        audioRef.current = new Audio("/assets/hj1.MP4");

        audioRef.current.addEventListener("ended", () => {
            setIsPlaying(false);
            setActiveIndex(null);
        });

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);

    const togglePlay = (index: number) => {
        if (!audioRef.current) return;

        if (activeIndex === index && isPlaying) {
            // Pause current
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            // Play new or resume
            if (activeIndex !== index) {
                // Change track logic if we had multiple sources. 
                // For now, "First Song" implies the same featured track or specific ones.
                // Resetting time to simulate "starting" the track for that platform if switching?
                // Or just continue playing. Let's restart to simulate "Play first song".
                audioRef.current.currentTime = 0;
            }
            audioRef.current.play();
            setActiveIndex(index);
            setIsPlaying(true);
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl mx-auto px-6 py-12">
            {PORTALS.map((portal, index) => {
                const isCurrent = activeIndex === index;
                const isCurrentPlaying = isCurrent && isPlaying;

                return (
                    <motion.div
                        key={portal.name}
                        initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
                        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                        transition={{ delay: 0.2 + index * 0.1, duration: 0.8, type: "spring" }}
                        className="group perspective-1000"
                    >
                        {/* 3D Glass Player Card */}
                        <div className={`relative w-full aspect-[3/4] rounded-2xl bg-black/40 border border-white/10 overflow-hidden backdrop-blur-xl transition-all duration-500 transform group-hover:-translate-y-2 group-hover:scale-[1.02] group-hover:shadow-2xl ${portal.glow}`}>

                            {/* Background Ambiance (Artist Image Blurry) */}
                            <div className="absolute inset-0 opacity-40 pointer-events-none">
                                <img
                                    src="/assets/portrait-2.jpg"
                                    alt="Ambience"
                                    className="w-full h-full object-cover filter blur-xl scale-110 opacity-60"
                                />
                                <div
                                    className="absolute inset-0 mix-blend-multiply opacity-50"
                                    style={{ background: `linear-gradient(to top, #000, rgba(0,0,0,0.8), ${portal.hex}33)` }}
                                />
                            </div>

                            {/* Spinning Vinyl (Top Half) */}
                            <div className="relative h-1/2 flex items-center justify-center pt-6">
                                <div
                                    className={`w-36 h-36 rounded-full border-4 border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] relative flex items-center justify-center ${isCurrentPlaying ? 'animate-spin-slow' : 'group-hover:animate-spin-slow'}`}
                                    style={{ animationDirection: 'normal' }}
                                >
                                    {/* Vinyl Texture */}
                                    <div
                                        className="absolute inset-0 rounded-full bg-[url('/assets/portrait-2.jpg')] bg-cover opacity-80"
                                        style={{ backgroundPosition: 'center top' }}
                                    />
                                    <div className="absolute inset-0 rounded-full bg-[repeating-radial-gradient(#000_0,_transparent_2px)] opacity-40" />

                                    {/* Center Spindle Hole (Small to show face) */}
                                    <div className="absolute w-4 h-4 bg-black/60 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm">
                                        <div className="w-1.5 h-1.5 bg-black rounded-full opacity-80" />
                                    </div>
                                </div>

                                {/* Floating Platform Icon Badge */}
                                <div className="absolute top-4 right-4 animate-pulse-slow">
                                    {portal.icon}
                                </div>
                            </div>

                            {/* Player UI (Bottom Half) */}
                            <div className="relative h-1/2 p-6 flex flex-col justify-end space-y-4 bg-gradient-to-t from-black via-black/90 to-transparent">

                                {/* Track Info */}
                                <div className="text-center space-y-1">
                                    <h3 className={`text-2xl font-serif font-bold text-white`}>{portal.name}</h3>
                                    <p
                                        className="text-[10px] uppercase tracking-[0.2em] font-medium"
                                        style={{ color: portal.hex }}
                                    >
                                        Official Artist
                                    </p>
                                </div>

                                {/* Progress Bar */}
                                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full"
                                        style={{ backgroundColor: portal.hex }}
                                        initial={{ width: "0%" }}
                                        animate={isCurrentPlaying ? { width: "100%" } : { width: "0%" }}
                                        transition={isCurrentPlaying ? { duration: 30, ease: "linear" } : { duration: 0 }}
                                    />
                                </div>

                                {/* Controls */}
                                <div className="flex items-center justify-between pt-2">
                                    <div className="text-[10px] text-gray-500 font-mono">
                                        {isCurrentPlaying ? "Playing..." : "0:00"}
                                    </div>

                                    <button
                                        onClick={() => togglePlay(index)}
                                        className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 text-black shadow-[0_0_20px_currentColor] z-20 cursor-pointer"
                                        style={{ backgroundColor: portal.hex, color: portal.hex }}
                                    >
                                        {isCurrentPlaying ? <Pause fill="black" size={24} className="text-black" /> : <Play fill="black" size={24} className="ml-1 text-black" />}
                                    </button>

                                    <a
                                        href={portal.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-white transition-colors z-20 p-2 opacity-80 hover:opacity-100"
                                        style={{ color: portal.hex }}
                                    >
                                        <ExternalLink size={18} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )
            })}
        </div>
    );
}
