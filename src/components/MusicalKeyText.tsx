"use client";
import React from "react";
import { motion } from "framer-motion";

interface MusicalKeyTextProps {
    text: string;
    className?: string; // For font styling (e.g. text-6xl font-serif)
    goldHighlight?: boolean; // Whether to style it as gold branding
}

const MusicalChar = ({ char, isGold }: { char: string, isGold: boolean }) => {
    // If it's a space, render a non-breaking space but still wrappable
    if (char === " ") return <span className="inline-block w-4"> </span>;

    return (
        <motion.span
            className={`inline-block cursor-grab active:cursor-grabbing select-none relative ${isGold ? "text-gold" : "text-white"}`}
            initial={{ y: 0, scale: 1 }}
            whileHover={{
                y: -15, // Pop UP instead of down for visibility
                scale: 1.25, // Significant growth
                rotate: isGold ? -5 : 5, // Playful tilt
                color: isGold ? "#FFEA00" : "#FFFFFF",
                textShadow: isGold
                    ? "0 0 30px rgba(255, 215, 0, 0.9), 0 0 60px rgba(255, 215, 0, 0.6)"
                    : "0 0 20px rgba(255, 255, 255, 0.9)",
                zIndex: 50, // Ensure it overlaps neighbors
                transition: { type: "spring", stiffness: 300, damping: 10 }
            }}
            whileTap={{ scale: 0.9, y: 5 }}
            style={{ margin: "0 2px" }} // Added spacing
        >
            {char}
        </motion.span>
    );
};

export default function MusicalKeyText({ text, className = "", goldHighlight = false }: MusicalKeyTextProps) {
    return (
        <div className={`relative inline-flex flex-wrap justify-center ${className}`}>
            {text.split("").map((char, index) => (
                <MusicalChar key={`${char}-${index}`} char={char} isGold={goldHighlight} />
            ))}
        </div>
    );
}
