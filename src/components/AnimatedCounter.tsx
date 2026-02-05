"use client";
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring, animate } from "framer-motion";

interface AnimatedCounterProps {
    from?: number;
    to: number;
    duration?: number;
    suffix?: string;
    className?: string;
}

export default function AnimatedCounter({
    from = 0,
    to,
    duration = 4,
    suffix = "",
    className = "",
}: AnimatedCounterProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-20px" }); // Reduced margin to trigger earlier

    useEffect(() => {
        if (inView) {
            const controls = animate(from, to, {
                duration: duration,
                ease: "easeOut",
                onUpdate(value) {
                    if (ref.current) {
                        ref.current.textContent = Math.floor(value).toLocaleString() + suffix;
                    }
                },
            });
            return () => controls.stop();
        }
    }, [inView, from, to, duration, suffix]);

    return (
        <span ref={ref} className={className}>
            {from}{suffix}
        </span>
    );
}
