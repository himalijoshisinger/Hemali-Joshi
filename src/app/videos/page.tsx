import type { Metadata } from "next";
import VideosContent from "./VideosContent";

export const metadata: Metadata = {
    title: "Best Live Performance Videos Vadodara | Top Singer Gujarat Videos | Himali Joshi",
    description: "Watch the latest music and live performance videos of Himali Joshi, the best playback and Garba singer in Vadodara, Gujarat. Experience high-energy Garba and Bollywood hits.",
    keywords: ["Himali Joshi Videos", "Best Singer Vadodara Videos", "Top Garba Performer Gujarat", "Live Performance Vadodara", "Playback Singer Music Videos"],
};

export default function VideosPage() {
    return <VideosContent />;
}
