"use client";
import React from "react";
import { motion } from "framer-motion";

interface ThreeDAlbumProps {
    coverImage: string;
}

export default function ThreeDAlbum({ coverImage }: ThreeDAlbumProps) {
    return (
        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] group perspective-1000 mx-auto">
            {/* Vinyl Record (The Disc) */}
            <motion.div
                className="absolute top-2 left-2 right-2 bottom-2 rounded-full z-10 shadow-2xl flex items-center justify-center bg-black"
                initial={{ x: 0 }}
                whileHover={{ x: "40%", rotate: 180 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >
                {/* Vinyl Grooves Texture */}
                <div className="absolute inset-0 rounded-full border-[30px] border-[#111] opacity-90 bg-[repeating-radial-gradient(#222_0,_#000_2px)]" />

                {/* Vinyl Label */}
                <div className="absolute w-1/3 h-1/3 rounded-full bg-gold/80 flex items-center justify-center shadow-inner border-4 border-black">
                    <span className="text-[8px] md:text-[10px] font-bold text-black uppercase tracking-widest">Original</span>
                </div>

                {/* Shine/Reflection */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/10 to-transparent opacity-30 pointer-events-none" />
            </motion.div>

            {/* Album Cover (The Sleeve) */}
            <div className="absolute inset-0 z-20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:-rotate-y-12 transform-style-3d bg-black rounded-lg overflow-hidden border border-white/10">
                <img
                    src={coverImage}
                    alt="Album Cover"
                    className="w-full h-full object-cover filter contrast-[1.1]"
                />

                {/* Glossy Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/40 opacity-80 pointer-events-none mix-blend-overlay" />
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>

            {/* Back Glow */}
            <div className="absolute inset-0 z-0 bg-gold/20 blur-[60px] rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-700" />
        </div>
    );
}
