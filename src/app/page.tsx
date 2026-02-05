import type { Metadata } from "next";
import HomeContent from "./HomeContent";

export const metadata: Metadata = {
  title: "Best Singer in Vadodara | Top Playback & Garba Singer in Gujarat | Himali Joshi",
  description: "Himali Joshi is the best singer in Vadodara, Gujarat. Award-winning playback singer, top Garba artist, and voice performer. Book the best Gujarati & Bollywood singer for weddings and corporate events globally.",
  keywords: ["Best Singer in Vadodara", "Top Singer in Gujarat", "Playback Singer India", "Garba Singer Vadodara", "Gujarati Singer", "Bollywood Playback Singer", "Voice Artist Gujarat", "Best Singer for Weddings"],
  alternates: {
    canonical: "https://himalijoshi.com",
  },
};

export default function Home() {
  return <HomeContent />;
}
