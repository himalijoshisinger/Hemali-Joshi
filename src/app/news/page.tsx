import type { Metadata } from "next";
import NewsContent from "./NewsContent";

export const metadata: Metadata = {
    title: "News & Press Features Vadodara | Best Singer Gujarat Media Coverage | Himali Joshi",
    description: "Read about Himali Joshi, the best playback and Garba singer in Vadodara, Gujarat. Featuring interviews and articles from Times of India, Sandesh, and more.",
    keywords: ["Himali Joshi Press", "Best Singer Vadodara News", "Top Playback Singer Gujarat Media", "Times of India Vadodara Singer", "Gujarati Singer Feature"],
};

export default function NewsPage() {
    return <NewsContent />;
}
