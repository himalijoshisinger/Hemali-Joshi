import type { Metadata } from "next";
import Footer from "@/components/Footer";
import BrandsGallery from "@/components/BrandsGallery";

export const metadata: Metadata = {
    title: "Brand Shoot | Himali Joshi",
    description: "Explore the brand collaborations and partnerships of Himali Joshi.",
};

export default function BrandsGalleryPage() {
    return (
        <main className="bg-black min-h-screen text-white pt-32 pb-0">
            <BrandsGallery />
            <Footer />
        </main>
    );
}

