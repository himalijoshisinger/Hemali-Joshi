"use client";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
    const phoneNumber = "916359012805"; // Format: +91 6359012805
    const message = "Hi Himali, I'm interested in booking a performance!";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.5, type: "spring" }}
            className="fixed bottom-8 right-8 z-[9999]"
        >
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center"
            >
                {/* Artistic Glowing Aura */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#25D366] to-gold rounded-full blur-xl opacity-20 group-hover:opacity-60 transition-opacity duration-500 animate-pulse" />

                {/* Main Button Body - Glassmorphism */}
                <div className="relative flex items-center justify-center w-16 h-16 bg-black/40 backdrop-blur-xl border border-white/10 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.2)] group-hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] group-hover:border-gold/50 transition-all duration-500 overflow-hidden">

                    {/* Inner Rotating Ring */}
                    <div className="absolute inset-0 border-2 border-transparent border-t-[#25D366]/40 rounded-full animate-spin [animation-duration:3s]" />

                    {/* SVG WhatsApp Icon (Precise Brand Shape) */}
                    <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-8 h-8 text-[#25D366] group-hover:text-white transition-colors duration-500 group-hover:scale-110 transform"
                    >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 0 5.414 0 12.05c0 2.123.551 4.197 1.598 6.03l-1.698 6.205 6.346-1.666c1.776.969 3.784 1.481 5.8 1.482h.005c6.634 0 12.048-5.414 12.048-12.05a11.82 11.82 0 00-3.417-8.528z" />
                    </svg>
                </div>

                {/* Tooltip on Hover */}
                <div className="absolute right-full mr-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0 pointer-events-none">
                    <div className="bg-black/80 backdrop-blur-md border border-gold/30 px-4 py-2 rounded-lg whitespace-nowrap">
                        <span className="text-gold text-sm font-serif italic">Chat with Himali</span>
                    </div>
                </div>
            </a>
        </motion.div>
    );
}
