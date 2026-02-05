"use client";
import React, { useRef, useState } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

export default function DynamicPortrait() {
    const ref = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    // Mouse position values
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth physics-based spring animation for 3D tilt
    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [15, -15]), {
        stiffness: 150,
        damping: 20,
    });
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-15, 15]), {
        stiffness: 150,
        damping: 20,
    });

    // Image opacity transitions based on X position
    // Left side (x < -0.15) -> Show Portrait 1
    // Center (-0.15 < x < 0.15) -> Show Splash Image
    // Right side (x > 0.15) -> Show Portrait 2
    const opacity1 = useTransform(x, [-0.5, -0.15, 0], [1, 1, 0]);
    const opacityMain = useTransform(x, [-0.25, 0, 0.25], [0, 1, 0]);
    const opacity2 = useTransform(x, [0, 0.15, 0.5], [0, 1, 1]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        // Calculate normalized position (-0.5 to 0.5)
        const xPct = (mouseX / width) - 0.5;
        const yPct = (mouseY / height) - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            className="relative w-full aspect-[3/4] perspective-1000 cursor-pointer"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={{
                perspective: 1000,
            }}
        >
            <motion.div
                className="w-full h-full relative preserve-3d rounded-2xl overflow-hidden border border-gold/20 shadow-2xl shadow-gold/10"
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
            >
                {/* Lighting Effect / Sheen */}
                <div
                    className="absolute inset-0 z-50 pointer-events-none bg-gradient-to-tr from-transparent via-white/10 to-transparent"
                    style={{
                        mixBlendMode: "overlay",
                        opacity: isHovered ? 1 : 0,
                        transition: "opacity 0.3s ease"
                    }}
                />

                {/* Image 1 (Left Tilt) */}
                <motion.img
                    src="/assets/portrait-1.jpg"
                    alt="Himali Joshi Portrait - 1"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ opacity: opacity1 }}
                />

                {/* Main Image (Center) */}
                <motion.img
                    src="/assets/splash-full.jpg"
                    alt="Himali Joshi Portrait - Main"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ opacity: opacityMain }}
                />

                {/* Image 2 (Right Tilt) */}
                <motion.img
                    src="/assets/portrait-2.jpg"
                    alt="Himali Joshi Portrait - 2"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ opacity: opacity2 }}
                />

                {/* Dark Overlay for Depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

                {/* Floating Badge/Element (3D Pop-out) */}
                <motion.div
                    className="absolute bottom-6 left-0 right-0 text-center z-40"
                    style={{
                        transform: "translateZ(40px)",
                    }}
                >
                    {isHovered && (
                        <span className="inline-block px-4 py-1 bg-black/60 backdrop-blur-md rounded-full text-gold text-xs tracking-widest border border-gold/30">
                            INTERACTIVE PORTRAIT
                        </span>
                    )}
                </motion.div>
            </motion.div>
        </motion.div>
    );
}
