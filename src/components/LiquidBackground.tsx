"use client";
import { motion } from "framer-motion";

export default function LiquidBackground() {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-black pointer-events-none">
            {/* Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] z-[5]" />

            {/* Orb 1: Gold - Primary */}
            <motion.div
                className="absolute w-[45vw] h-[45vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.25)_0%,rgba(212,175,55,0.08)_35%,transparent_70%)] opacity-60 pointer-events-none will-change-transform"
                animate={{
                    x: ["-20%", "20%", "-20%"],
                    y: ["-20%", "20%", "-20%"],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                style={{ top: "-10%", left: "-10%" }}
            />

            {/* Orb 2: Maroon - Depth */}
            <motion.div
                className="absolute w-[55vw] h-[55vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(128,0,0,0.3)_0%,rgba(128,0,0,0.1)_40%,transparent_70%)] opacity-50 pointer-events-none will-change-transform"
                animate={{
                    x: ["20%", "-20%", "20%"],
                    y: ["20%", "-20%", "20%"],
                    scale: [1.1, 0.9, 1.1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                style={{ top: "30%", right: "-10%" }}
            />

            {/* Orb 3: Amber/Orange - Highlights */}
            <motion.div
                className="absolute w-[40vw] h-[40vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,191,0,0.25)_0%,rgba(255,191,0,0.08)_35%,transparent_70%)] opacity-40 mix-blend-screen pointer-events-none will-change-transform"
                animate={{
                    x: ["-10%", "30%", "-10%"],
                    y: ["10%", "-10%", "10%"],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
                style={{ bottom: "-10%", left: "20%" }}
            />

            {/* Orb 4: Subtle Crimson - Accent */}
            <motion.div
                className="absolute w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(220,20,60,0.18)_0%,rgba(220,20,60,0.05)_35%,transparent_70%)] opacity-30 pointer-events-none will-change-transform"
                animate={{
                    x: ["30%", "-10%", "30%"],
                    y: ["-10%", "30%", "-10%"],
                }}
                transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                style={{ bottom: "10%", right: "20%" }}
            />
        </div>
    );
}
