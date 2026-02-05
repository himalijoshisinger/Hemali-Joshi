import type { Metadata } from "next";
import MusicContent from "./MusicContent";

export const metadata: Metadata = {
    title: "Best Regional Music Vadodara | Top Playback & Garba Albums in Gujarat | Himali Joshi",
    description: "Listen to the discography of Himali Joshi, the best playback and Garba singer in Vadodara, Gujarat. Stream Bollywood covers, traditional Folk, and Garba music.",
    keywords: ["Himali Joshi Music", "Playback Singer Vadodara", "Garba Singer Gujarat", "Top Gujarati Singer", "Bollywood Singer Vadodara", "Devotional Singer Gujarat"],
};

export default function MusicPage() {
    return <MusicContent />;
}
