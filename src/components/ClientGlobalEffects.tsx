"use client";
import dynamic from "next/dynamic";

const SplashCursor = dynamic(() => import("@/components/SplashCursor"), { ssr: false });
const LiquidBackground = dynamic(() => import("@/components/LiquidBackground"), { ssr: false });
const WhatsAppButton = dynamic(() => import("@/components/WhatsAppButton"), { ssr: false });

export default function ClientGlobalEffects() {
    return (
        <>
            <LiquidBackground />
            <SplashCursor />
            <WhatsAppButton />
        </>
    );
}
