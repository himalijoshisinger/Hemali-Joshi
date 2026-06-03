"use client";
import { useEffect, useState, useRef } from "react";
import { Mic } from "lucide-react";

export default function SplashCursor() {
    const [isFinePointer, setIsFinePointer] = useState(false);
    const cursorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const checkPointer = () => {
            const matches = window.matchMedia("(pointer: fine)").matches;
            setIsFinePointer(matches);
            if (matches) {
                document.body.classList.add("has-custom-cursor");
            }
        };

        checkPointer();
        
        let rafId: number | null = null;
        const moveCursor = (e: MouseEvent) => {
            if (rafId) return;
            rafId = requestAnimationFrame(() => {
                const cursor = cursorRef.current;
                if (cursor) {
                    cursor.style.transform = `translate3d(${e.clientX - 12}px, ${e.clientY - 4}px, 0)`;
                }
                rafId = null;
            });
        };

        if (window.matchMedia("(pointer: fine)").matches) {
            window.addEventListener("mousemove", moveCursor);
        }

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            document.body.classList.remove("has-custom-cursor");
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, []);

    if (!isFinePointer) return null;

    return (
        <div
            ref={cursorRef}
            className="hidden md:block pointer-events-none fixed left-0 top-0 z-[1000000] text-gold drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] will-change-transform transform-gpu"
            style={{ transform: "translate3d(-100px, -100px, 0)" }}
        >
            {/* Realistic Black Mic with Gold Outline/Grille */}
            <Mic
                size={34}
                className="fill-neutral-900 stroke-[1.5px]"
                style={{ filter: "drop-shadow(0 0 2px rgba(212,175,55,0.8))" }}
            />
        </div>
    );
}
