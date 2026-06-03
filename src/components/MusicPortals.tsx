"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause, ExternalLink } from "lucide-react";
import ThreeDAlbum from "./ThreeDAlbum";

export interface PortalData {
    id: string;
    name: string;
    title: string;
    year: string;
    cover: string;
    audio: string;
    color: string;
    link: string;
    icon: React.ReactNode;
    startOffset?: number;
}

export const PORTAL_DATA: PortalData[] = [
    {
        id: "spotify",
        name: "Spotify",
        title: "Mohan Morli Vagade",
        year: "2023",
        cover: "/assets/spotify.jpeg",
        audio: "/assets/audio/mohan_morli_vagade.mp3",
        color: "#1DB954",
        link: "https://open.spotify.com/artist/76Ne4HMMruHNaglAhCp8dT",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                <path d="M16.586 16.424c-.18.295-.563.387-.857.207-2.35-1.434-5.305-1.76-8.786-.963-.335.076-.668-.135-.744-.47-.077-.336.135-.668.47-.745 3.807-.87 7.076-.496 9.71 1.112.294.18.386.563.207.857zm1.163-2.705c-.226.367-.707.487-1.074.26-2.69-1.654-6.79-2.134-9.97-1.17-.413.125-.845-.108-.97-.522-.125-.413.108-.844.522-.97 3.64-1.105 8.16-.575 11.23 1.307.366.227.486.707.26 1.074zm.1-2.82c-3.224-1.917-8.547-2.093-11.644-1.152-.497.15-1.022-.13-1.173-.627-.15-.497.13-1.022.626-1.172 3.585-1.09 9.467-.887 13.18 1.316.446.265.592.836.327 1.282-.265.446-.83.593-1.28.328z" />
            </svg>
        )
    },
    {
        id: "apple",
        name: "Apple Music",
        title: "Chotile Dakla Vagya",
        year: "2022",
        cover: "/assets/red.png",
        audio: "/assets/audio/chotile_dakla_vagya.mp3",
        color: "#FA243C",
        link: "https://music.apple.com/in/artist/himali-joshi/1544328313",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.56-.84 1.5.09 2.63.63 3.31 1.62-3.15 1.87-2.66 6.01.27 7.23-.61 1.5-1.4 3.01-2.27 4.16zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
            </svg>
        )
    },
    {
        id: "amazon",
        name: "Amazon Music",
        title: "Jay Ambey Jai Ambey",
        year: "2023",
        cover: "/assets/blue.png",
        audio: "/assets/audio/jay_ambey.mp3",
        color: "#00A8E1",
        link: "https://music.amazon.in/artists/B08T8Q24SV/himali-joshi?referrer=https%3A%2F%2Fmusic.amazon.in%2F",
        icon: (
            <svg viewBox="0 0 89 52" fill="currentColor" className="h-[12px] w-auto text-white">
                <path d="M59.7,40.5c-0.6,0.4-1.5,0.7-2.6,0.7-1.7,0-3.3-0.2-4.9-0.7c-0.4-0.1-0.7-0.2-0.9-0.2c-0.3,0-0.4,0.2-0.4,0.6v1 c0,0.3,0.1,0.5,0.2,0.7s0.3,0.3,0.6,0.4c1.6,0.7,3.4,1,5.4,1c2.1,0,3.7-0.5,5-1.5s1.9-2.3,1.9-4c0-1.2-0.3-2.1-0.9-2.9 s-1.6-1.4-3-1.9l-2.8-1.1c-1.1-0.4-1.9-0.8-2.2-1.2s-0.6-0.8-0.6-1.5c0-1.5,1.1-2.3,3.4-2.3c1.3,0,2.6,0.2,3.8,0.6 c0.4,0.1,0.7,0.2,0.8,0.2s0.5-0.2,0.5-0.6v-1c0-0.3-0.1-0.5-0.2-0.7s-0.3-0.3-0.6-0.4c-1.5-0.5-3-0.8-4.5-0.8c-1.9,0-3.5,0.5-4.7,1.4 s-1.8,2.2-1.8,3.7c0,2.3,1.3,4,3.9,5l3,1.1c1,0.4,1.6,0.7,2,1.1s0.5,0.8,0.5,1.4c0,0.8-0.3,1.5-0.9,1.9z" />
                <path d="M44,26.1v13.3c-1.7,1.1-3.4,1.7-5.1,1.7c-1.1,0-1.9-0.3-2.4-0.9s-0.2-0.9-0.2-2.2V26.1c0-0.5-0.2-0.7-0.7-0.7H33 c-0.5,0-0.7,0.2-0.7,0.7v12.4c0,1.7,0.4,3.1,1.3,4c0.9,0.9,2.2,1.4,3.9,1.4c2.3,0,4.6-0.8,6.8-2.4l0.2,1.2c0,0.3,0.1,0.4,0.3,0.5 s0.3,0.1,0.6,0.1h1.5c0.5,0,0.7-0.2,0.7-0.7V26.1c0-0.5-0.2-0.7-0.7-0.7h-2.1c-0.6,0-0.8,0.3-0.8,0.7z" />
                <path d="M25,43.4h2.1c0.5,0,0.7-0.2,0.7-0.7V30.2c0-1.7-0.4-3-1.3-3.9s-2.1-1.4-3.8-1.4c-2.3,0-4.7,0.8-7,2.5 c-0.8-1.7-2.3-2.5-4.5-2.5s-4.4,0.8-6.6,2.3L4.4,26.1c0-0.3-0.1-0.4-0.3-0.5S3.8,25.5,3.6,25.5H2c-0.5,0-0.7,0.2-0.7,0.7v16.6 c0,0.5,0.2,0.7,0.7,0.7h2.1c0.5,0,0.7-0.2,0.7-0.7V29.3c1.7-1,3.4-1.6,5.2-1.6c1,0,1.7,0.3,2.1,0.9s0.7,1.4,0.7,2.6v11.5 c0,0.5,0.2,0.7,0.7,0.7h2.1c0.5,0,0.7-0.2,0.7-0.7V30.4v-0.6c0-0.2,0-0.4,0-0.5c1.8-1.1,3.5-1.6,5.2-1.6c1,0,1.7,0.3,2.1,0.9 s0.7,1.4,0.7,2.6v11.5c0,0.5,0.2,0.7,0.7,0.7z" />
                <path d="M79.5,56.7c-10.9,4.6-22.8,6.9-33.6,6.9c-16,0-31.5-4.4-44-11.7c-0.2-0.1-0.4-0.2-0.6-0.2c-0.7,0-1.1,0.8-0.4,1.5 c11.6,10.5,27,16.8,44,16.8c12.2,0,26.3-3.8,36-11c1.7-1.2,0.3-3-1.4-2.3z" />
                <path d="M79.2,29.4c0.9-1,2.3-1.5,4.3-1.5c1,0,2,0.1,2.9,0.4s0.4,0.1,0.6,0.1c0.3,0,0.5-0.2,0.5-0.7v-1c0-0.3-0.1-0.6-0.2-0.7 s-0.2-0.4-0.4-0.5c-1.3-0.3-2.6-0.6-3.8-0.6c-2.8,0-4.9,0.8-6.5,2.5s-2.3,4-2.3,7c0,3,0.7,5.3,2.2,6.9s3.6,2.4,6.4,2.4 c1.5,0,2.9-0.2,4-0.7s0.5-0.2,0.6-0.4s0.1-0.4,0.1-0.7v-1c0-0.5-0.2-0.7-0.5-0.7s-0.3,0-0.5,0.1c-1.1,0.3-2.2,0.5-3.2,0.5 c-1.9,0-3.3-0.5-4.2-1.5s-1.3-2.6-1.3-4.7v-0.5c0.1-2.2,0.5-3.8,1.4-4.8z" />
                <path d="M69.8,25.4h-2.1c-0.5,0-0.7,0.2-0.7,0.7v16.6c0,0.5,0.2,0.7,0.7,0.7h2.1c0.5,0,0.7-0.2,0.7-0.7V26.1 c0-0.4-0.2-0.7-0.7-0.7z" />
                <path d="M70.4,18.6c-0.4-0.4-1-0.6-1.7-0.6s-1.2,0.2-1.6,0.6c-0.4,0.4-0.6,0.9-0.6,1.5s0.2,1.2,0.6,1.5s0.9,0.6,1.6,0.6 s1.2-0.2,1.6-0.6s0.6-0.9,0.6-1.5s-0.1-1.2-0.5-1.5z" />
            </svg>
        )
    },
    {
        id: "jiosaavn",
        name: "JioSaavn",
        title: "Tu Kali Ne Kalyani Re Maa",
        year: "2022",
        cover: "/assets/music_jiosavan.jpg",
        audio: "/assets/audio/tu_kali_ne_kalyani.mp3",
        color: "#1ECCB0",
        link: "https://www.jiosaavn.com/artist/himali-joshi-songs/NeYXW5LVM6g_",
        icon: (
            <svg viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5 text-white">
                <path d="M13.8,25.1c-0.6-1-1.4-1.9-2.4-2.5s-2-1.1-3.2-1.4H8.2c-0.1,0-0.2,0-0.3,0.1c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0,0.2,0.1,0.2c1.3,1.9,3.3,3.3,5.5,3.9h0.1c0.1,0,0.1,0,0.2,0c0,0,0.1,0,0.1-0.1c0,0,0.1-0.1,0.1-0.1c0,0,0-0.1,0-0.2C13.9,25.2,13.9,25.1,13.8,25.1L13.8,25.1z" />
                <path d="M25.6,13.3c0,0,0-0.1,0-0.1c-0.5-1.8-1.5-3.4-2.9-4.6c-1.4-1.2-3-2.1-4.8-2.4h-0.1c-0.1,0-0.2,0-0.3,0.1c-0.1,0.1-0.1,0.2-0.1,0.3v0.1c0.9,5.5,0.3,11.1-1.7,16.3c0,0.1-0.1,0.1-0.1,0.2s-0.1,0.1-0.2,0.1c-0.1,0-0.1,0-0.2,0c0,0-0.1,0-0.1-0.1c0,0-0.1-0.1-0.1-0.1c0,0,0-0.1,0-0.2c0,0-0.1-0.7-0.1-1c-0.6-4.8-2-9.4-4.3-13.7c0-0.1-0.1-0.1-0.1-0.1c0,0-0.1-0.1-0.1-0.1s-0.1,0-0.2,0C10.1,8,10.1,8,10,8l0,0c-1.4,1.1-2.5,2.5-3.2,4.2c0,0.1,0,0.2,0,0.3c0,0.1,0.1,0.2,0.2,0.2c2.2,1.4,4,3.2,5.3,5.5c1.3,2.2,2,4.8,2.1,7.3c0,0.1,0,0.2,0.1,0.3c0.1,0.1,0.2,0.1,0.2,0.1c0.2,0,0.5,0.1,0.7,0.1c0.1,0,0.2,0,0.3-0.1c0.1-0.1,0.1-0.1,0.1-0.2c0.5-2.6,1.6-5.1,3.3-7.2c1.7-2.1,3.8-3.7,6.3-4.8c0.1,0,0.1-0.1,0.2-0.1C25.6,13.4,25.6,13.4,25.6,13.3z" />
                <path d="M24.7,20.9c0-0.1,0-0.2-0.1-0.3c-0.1-0.1-0.2-0.1-0.3-0.1h-0.1c-3.1,0.7-5.9,2.4-7.9,4.8c-0.1,0.1-0.1,0.2-0.1,0.3c0,0.1,0,0.2,0.1,0.3c0.1,0.1,0.2,0.1,0.3,0.1l0,0c1.6-0.1,3.2-0.6,4.6-1.4s2.6-2,3.4-3.4C24.7,21.1,24.7,21,24.7,20.9L24.7,20.9z" />
            </svg>
        )
    }
];

interface MusicPortalsProps {
    data?: PortalData[];
}

export default function MusicPortals({ data = PORTAL_DATA }: MusicPortalsProps) {
    const [playingId, setPlayingId] = useState<string | null>(null);
    const [progress, setProgress] = useState<{ [key: string]: number }>({});
    const [currentTimes, setCurrentTimes] = useState<{ [key: string]: number }>({});
    const audioRefs = useRef<{ [key: string]: HTMLAudioElement }>({});

    useEffect(() => {
        return () => {
            Object.values(audioRefs.current).forEach(audio => {
                if (audio) { audio.pause(); audio.src = ""; }
            });
            audioRefs.current = {};
        };
    }, []);

    const togglePlay = (id: string, audioPath: string, startOffset?: number) => {
        if (playingId === id) {
            audioRefs.current[id]?.pause();
            setPlayingId(null);
        } else {
            // Stop current playing
            if (playingId) {
                audioRefs.current[playingId]?.pause();
            }

            // Create audio element if this is the first play
            if (!audioRefs.current[id]) {
                const audio = new Audio();
                
                audio.addEventListener('timeupdate', () => {
                    if (!isNaN(audio.duration) && audio.duration > 0) {
                        const offset = startOffset || 0;
                        // Seek to offset if the browser failed to honor the elst metadata (mostly mobile Safari/Chrome)
                        if (offset > 0 && audio.currentTime < offset - 0.5) {
                            audio.currentTime = offset;
                        }
                        
                        const relativeCurrent = Math.max(0, audio.currentTime - offset);
                        const relativeDuration = Math.max(0.1, audio.duration - offset);
                        setProgress(prev => ({ ...prev, [id]: (relativeCurrent / relativeDuration) * 100 }));
                        setCurrentTimes(prev => ({ ...prev, [id]: relativeCurrent }));
                    }
                });
                audio.addEventListener('ended', () => {
                    setPlayingId(null);
                    setProgress(prev => ({ ...prev, [id]: 0 }));
                    setCurrentTimes(prev => ({ ...prev, [id]: 0 }));
                });
                audio.addEventListener('error', (e) => {
                    const target = e.target as HTMLAudioElement;
                    console.error("Audio error:", target.error?.message, "Path:", audioPath);
                    setPlayingId(null);
                });

                audio.src = encodeURI(audioPath);
                audioRefs.current[id] = audio;
            }

            const audio = audioRefs.current[id];
            
            // If starting fresh or song ended, try to seek to offset immediately if browser readyState allows
            if (audio.currentTime === 0 || audio.ended) {
                const offset = startOffset || 0;
                try {
                    audio.currentTime = offset;
                } catch (e) {
                    // Mobile Safari throws an index-size error or invalid state if readyState < HAVE_METADATA.
                    // This is expected. The timeupdate listener will catch it as soon as the first frame loads.
                }
            }

            audio.play().catch(error => {
                console.error("Playback failed:", error.message);
                setPlayingId(null);
            });
            setPlayingId(id);
        }
    };

    const formatTime = (time: number) => {
        if (!time || isNaN(time)) return "0:00";
        const mins = Math.floor(time / 60);
        const secs = Math.floor(time % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <section className="py-10 bg-black relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {data.map((portal) => {
                        const isCurrentPlaying = playingId === portal.id;
                        const currentProgress = progress[portal.id] || 0;
                        const audio = audioRefs.current[portal.id];

                        return (
                            <div key={portal.id} className="relative group">
                                {/* Card Container - Removed overflow-hidden to let CD be visible */}
                                <div
                                    className="relative bg-zinc-900/90 backdrop-blur-2xl rounded-[2rem] p-6 pt-10 border transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1"
                                    style={{
                                        borderColor: `${portal.color}80`, // 50% opacity border of brand color
                                        boxShadow: `0 0 20px -10px ${portal.color}80` // Glow of brand color
                                    }}
                                >

                                    {/* Platform Icon - Top Right (Always visible) */}
                                    <div 
                                        style={{ backgroundColor: portal.color }}
                                        className="absolute top-5 right-5 z-40 w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.5)] border border-white/20 transition-all duration-300 hover:scale-110"
                                    >
                                        {portal.icon}
                                    </div>

                                    {/* Vintage CD Player Centerpiece */}
                                    <div className="mb-8 relative z-30 transform scale-95">
                                        <ThreeDAlbum
                                            coverImage={portal.cover}
                                            compact
                                            isSpinning={isCurrentPlaying}
                                        />
                                    </div>

                                    {/* Platform Info */}
                                    <div className="text-center relative z-40">
                                        <h3 className="text-xl font-bold text-white mb-1 tracking-tight line-clamp-2 leading-snug px-2">
                                            {portal.title}
                                        </h3>
                                        <p className="text-[11px] font-bold tracking-[0.2em] text-gold mb-2 uppercase opacity-90">
                                            {portal.name} • {portal.year}
                                        </p>

                                        {/* Mock Player UI */}
                                        <div className="mt-6 flex flex-col gap-5 p-4 rounded-xl bg-black/40 border border-white/5">
                                            <div className="flex items-center gap-3">
                                                <span className="text-[10px] text-gray-300 tabular-nums w-[28px] text-left">
                                                    {formatTime(currentTimes[portal.id] || 0)}
                                                </span>
                                                <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                                                    <motion.div
                                                        className="h-full"
                                                        style={{ backgroundColor: portal.color }}
                                                        animate={{ width: `${currentProgress}%` }}
                                                        transition={{ type: "spring", bounce: 0, duration: 0.1 }}
                                                    />
                                                </div>
                                                <a
                                                    href={portal.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-gray-300 hover:text-white transition-colors"
                                                >
                                                    <ExternalLink size={14} />
                                                </a>
                                            </div>

                                            <div className="flex justify-center">
                                                <button
                                                    onClick={() => togglePlay(portal.id, portal.audio, portal.startOffset)}
                                                    className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 active:scale-95 text-white shadow-lg"
                                                    style={{
                                                        backgroundColor: portal.color,
                                                        boxShadow: `0 4px 14px 0 ${portal.color}66`
                                                    }}
                                                >
                                                    {isCurrentPlaying ? (
                                                        <Pause size={20} fill="white" />
                                                    ) : (
                                                        <Play size={20} fill="white" className="ml-1" />
                                                    )}
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Background Ambient Glow */}
                                    <div
                                        className="absolute inset-0 opacity-20 pointer-events-none rounded-[2rem]"
                                        style={{ background: `radial-gradient(circle at 50% 0%, ${portal.color} 0%, transparent 60%)` }}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
