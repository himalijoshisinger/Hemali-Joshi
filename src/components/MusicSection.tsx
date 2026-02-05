"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Mic2, Disc, Music2 } from "lucide-react";

export default function MusicSection() {
    const [activeTab, setActiveTab] = useState("live");

    const categories = [
        { id: "live", label: "Live Concerts", icon: Mic2 },
        { id: "studio", label: "Studio Recordings", icon: Disc },
        { id: "fusion", label: "Folk & Fusion", icon: Music2 },
    ];

    // Mock data - replace with actual embed links or assets
    const tracks = {
        live: [
            { title: "Live at Mumbai Opera", duration: "5:20", date: "Jan 2024" },
            { title: "Sufi Night - Delhi", duration: "8:15", date: "Dec 2023" },
            { title: "Unplugged Session", duration: "4:45", date: "Nov 2023" },
        ],
        studio: [
            { title: "Mann Ki Lagan (Cover)", duration: "4:12", year: "2023" },
            { title: "Original Single: Udaan", duration: "3:58", year: "2024" },
        ],
        fusion: [
            { title: "Rajasthan Folk Mashup", duration: "6:30", year: "2023" },
            { title: "Classical Trap Mix", duration: "3:45", year: "2024" },
        ]
    };

    return (
        <section id="music" className="relative w-full py-20 px-6 overflow-hidden">
            {/* Vibrant Background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--color-maroon)_0%,_var(--color-black)_70%)] -z-20" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 -z-10" />

            <div className="container mx-auto">
                <div className="flex flex-col items-center text-center mb-16">
                    <h2 className="font-serif text-4xl md:text-5xl mb-6 drop-shadow-md">Discography <span className="text-gold">&</span> Performances</h2>
                    <p className="text-gray-300 max-w-2xl">Explore the diverse vocal range of Himali Joshi, from electrifying live performances to soul-stirring studio recordings.</p>
                </div>

                {/* Categories / Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveTab(cat.id)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 backdrop-blur-md ${activeTab === cat.id
                                ? "bg-gradient-to-r from-gold to-amber text-black font-semibold shadow-[0_0_15px_rgba(212,175,55,0.4)] border-transparent"
                                : "border-white/10 hover:border-gold/50 text-gray-300 bg-white/5"
                                }`}
                        >
                            <cat.icon size={18} />
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="max-w-4xl mx-auto min-h-[400px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="grid gap-4"
                        >
                            {/* @ts-expect-error type-mismatches-are-expected-in-mock */}
                            {tracks[activeTab].map((track, idx) => (
                                <div
                                    key={idx}
                                    className="group flex items-center justify-between p-6 rounded-xl bg-white/5 border border-white/5 hover:border-gold/30 hover:bg-white/10 transition-all cursor-pointer shadow-lg hover:shadow-gold/10"
                                >
                                    <div className="flex items-center gap-6">
                                        <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black transition-colors">
                                            <Play size={20} fill="currentColor" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-medium group-hover:text-gold transition-colors">{track.title}</h4>
                                            <p className="text-sm text-gray-400">{track.date || track.year} • {track.duration}</p>
                                        </div>
                                    </div>

                                    {/* Soundwave Animation (Visual only) */}
                                    <div className="hidden md:flex items-center gap-1 h-4">
                                        {[40, 75, 55, 90, 60].map((height, i) => (
                                            <div
                                                key={i}
                                                className="w-1 bg-gold/50 rounded-full animate-pulse"
                                                style={{
                                                    height: `${height}%`,
                                                    animationDelay: `${i * 0.1}s`
                                                }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
