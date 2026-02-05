import type { Metadata } from "next";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Photo & Video Gallery | Himali Joshi",
    description: "Explore high-quality photos and videos from Himali Joshi's live concerts, studio sessions, and backstage moments.",
};

export default function GalleryPage() {
    return (
        <main className="bg-black min-h-screen text-white pt-24">
            {/* Reusing the responsive Gallery component */}
            <Gallery />
            <Footer />
        </main >
    );
}
