"use client";
import React from "react";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import ThreeDAlbum from "@/components/ThreeDAlbum";
import MusicPortals from "@/components/MusicPortals";

export default function MusicContent() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-gold selection:text-black overflow-x-hidden">
            {/* Ambient Background */}
            <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,_#1a1a1a_0%,_#000_100%)] -z-10" />
            <div className="fixed inset-0 opacity-20 bg-[url('/assets/noise.png')] -z-10" />

            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-12">
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-12"
                    >
                        <div className="inline-block p-1 px-4 rounded-full border border-gold/30 bg-gold/5 text-gold text-xs font-serif tracking-[0.3em] uppercase mb-8 backdrop-blur-md">
                            Now Streaming Online
                        </div>
                        <h1 className="font-serif text-6xl md:text-8xl mb-6 text-white leading-tight">
                            The <span className="text-gold italic">Discography</span>
                        </h1>
                        <p className="text-gray-400 max-w-xl mx-auto text-lg">
                            Experience the journey through sound with the <strong>best singer in India</strong>. Available on Spotify, Apple Music, and more.
                        </p>
                    </motion.div>

                    {/* 3D Album Centerpiece */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="mb-20"
                    >
                        <ThreeDAlbum coverImage="/assets/portrait-2.jpg" />

                        <div className="mt-8 text-center opacity-60">
                            <span className="text-xs uppercase tracking-[0.5em] text-gold">Latest Bollywood & Sufi Releases</span>
                        </div>
                    </motion.div>

                    {/* Portals */}
                    <MusicPortals />
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20"
                >
                    <span className="text-[10px] uppercase tracking-widest">Scroll to Explore</span>
                    <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
                </motion.div>
            </section>

            <Footer />
        </main>
    );
}
