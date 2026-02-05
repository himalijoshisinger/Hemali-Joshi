"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Music, Calendar, Image as ImageIcon } from "lucide-react";
import dynamic from "next/dynamic";
import SplashScreen from "@/components/SplashScreen";
import Hero from "@/components/Hero";
import MusicPlatforms from "@/components/MusicPlatforms";
import Footer from "@/components/Footer";

const ArtisticVisualizer = dynamic(() => import("@/components/ArtisticVisualizer"), { ssr: false });
const CinematicVideoCarousel = dynamic(() => import("@/components/CinematicVideoCarousel"), { ssr: false });

// Module-level variable to track splash state across navigation but reset on reload
let splashHasShown = false;

export default function HomeContent() {
    const [showSplash, setShowSplash] = useState(!splashHasShown);

    const handleSplashFinish = () => {
        setShowSplash(false);
        splashHasShown = true;
    };

    return (
        <main className="relative min-h-screen bg-transparent text-white selection:bg-gold selection:text-black">
            {/* Splash Screen */}
            {showSplash && <SplashScreen onFinish={handleSplashFinish} />}

            {/* Main Website Content */}
            <div className="min-h-screen">
                <Hero />
                <MusicPlatforms />

                {/* Artistic Visualizer - Optimized Heading for SEO */}
                <section className="bg-black py-12 text-center">
                    <h2 className="font-serif text-3xl md:text-5xl text-white uppercase tracking-tighter mb-4 px-4">
                        Experience the <span className="text-gold">Best Singer in Vadodara</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto px-6 italic">
                        The top playback and Garba singer in Gujarat, delivering soulful melodies and high-energy performances globally.
                    </p>
                </section>
                <ArtisticVisualizer />

                <CinematicVideoCarousel />

                {/* Intro / About Teaser */}
                <section className="py-24 px-6 container mx-auto text-center">
                    <h2 className="font-serif text-[clamp(2rem,6vw,4rem)] mb-8 leading-tight">The Top <span className="text-gold">Playback & Garba Singer</span> in Gujarat</h2>
                    <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10 px-4">
                        Himali Joshi, recognized as the <strong>best singer in Vadodara, Gujarat</strong>, weaves emotions into melodies, bridging the gap between classical traditions and modern soundscapes.
                        As a professional <strong>voice artist and playback singer</strong>, she has worked with <strong>Yash Raj Films</strong> and performed on the biggest global stages.
                    </p>
                    <Link href="/about" className="inline-flex items-center gap-2 text-gold border-b border-gold pb-1 hover:text-white hover:border-white transition-all uppercase tracking-widest text-sm font-bold">
                        Read Full Biography <ArrowRight size={16} />
                    </Link>
                </section>

                {/* Feature Grid */}
                <section className="grid grid-cols-1 md:grid-cols-3 min-h-[300px] md:min-h-[500px]">
                    <Link href="/music" className="relative group overflow-hidden border-r border-white/10">
                        <div className="absolute inset-0 bg-maroon/20 group-hover:bg-maroon/40 transition-colors" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
                            <Music className="w-12 h-12 text-gold mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="font-serif text-3xl mb-2">Music Discography</h3>
                            <p className="text-gray-400 opacity-80 group-hover:opacity-100">Listen to the Best of Himali Joshi</p>
                        </div>
                    </Link>
                    <Link href="/events" className="relative group overflow-hidden border-r border-white/10">
                        <div className="absolute inset-0 bg-amber/10 group-hover:bg-amber/30 transition-colors" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
                            <Calendar className="w-12 h-12 text-gold mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="font-serif text-3xl mb-2">Live Concerts</h3>
                            <p className="text-gray-400 opacity-80 group-hover:opacity-100">Book for Events, Weddings & Tours</p>
                        </div>
                    </Link>
                    <Link href="/gallery" className="relative group overflow-hidden">
                        <div className="absolute inset-0 bg-gold/5 group-hover:bg-gold/20 transition-colors" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
                            <ImageIcon className="w-12 h-12 text-gold mb-4 group-hover:scale-110 transition-transform" />
                            <h3 className="font-serif text-3xl mb-2">Visual Gallery</h3>
                            <p className="text-gray-400 opacity-80 group-hover:opacity-100">Live Stages & Professional Shoots</p>
                        </div>
                    </Link>
                </section>

                <Footer />
            </div>
        </main>
    );
}
