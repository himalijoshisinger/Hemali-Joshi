"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, Star, MapPin } from "lucide-react";

export default function BookingForm() {
    const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        countryCode: "+91",
        eventType: "Wedding / Sangeet",
        location: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus("submitting");

        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setFormStatus("success");
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    countryCode: "+91",
                    eventType: "Wedding / Sangeet",
                    location: "",
                    message: ""
                });
                setTimeout(() => setFormStatus("idle"), 5000);
            } else {
                setFormStatus("error");
                setTimeout(() => setFormStatus("idle"), 5000);
            }
        } catch (error) {
            setFormStatus("error");
            setTimeout(() => setFormStatus("idle"), 5000);
        }
    };

    return (
        <section id="contact" className="relative w-full py-20 px-6">
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Info Side */}
                    <div className="space-y-8">
                        <div>
                            <span className="text-gold text-sm tracking-[0.2em] uppercase font-bold mb-2 block">Performances</span>
                            <h2 className="font-serif text-5xl md:text-6xl mb-6 text-white leading-tight">
                                Bring the <span className="text-gold italic">Magic</span> to Your Event
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                                From intimate private gatherings to grand corporate concerts, elevate every moment with soulful melodies and high-energy performances.
                            </p>
                        </div>

                        <div className="space-y-6 pt-4">
                            {[
                                "Performed at 500+ Events Globally",
                                "Customized Setlists for Every Vibe",
                                "Professional Band & Sound Setup"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                                        <CheckCircle size={20} className="text-gold" />
                                    </div>
                                    <span className="text-white/90 text-lg font-light">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-8 border-t border-white/10 m-1">
                            <p className="text-neutral-500 text-sm tracking-widest uppercase mb-2">Direct Management</p>
                            <a href="mailto:inquiry.himalijoshi@gmail.com" className="text-2xl font-serif text-white hover:text-gold transition-colors block">
                                inquiry.himalijoshi@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* Form Side - The "Black Card" */}
                    <div className="relative">
                        {/* Decorative Gold Glow */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-gold/30 to-purple-900/30 rounded-3xl blur-2xl opacity-50" />

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative bg-[#0a0a0a] p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-xl"
                        >
                            <div className="absolute top-6 right-6 text-gold/20">
                                <Star size={40} />
                            </div>

                            <h3 className="font-serif text-2xl text-white mb-8">Make an Inquiry</h3>

                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 gap-6">
                                    <div className="group">
                                        <label className="text-xs uppercase tracking-wider text-gray-500 mb-2 block group-focus-within:text-gold transition-colors">Name</label>
                                        <input
                                            required
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border-b border-white/10 rounded-t-lg px-4 py-3 text-white focus:bg-white/10 focus:border-gold focus:outline-none transition-all placeholder:text-white/20"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                    <div className="group">
                                        <label className="text-xs uppercase tracking-wider text-gray-500 mb-2 block group-focus-within:text-gold transition-colors">Phone</label>
                                        <div className="flex w-full">
                                            <select
                                                name="countryCode"
                                                value={formData.countryCode}
                                                onChange={handleChange}
                                                className="bg-black border-b border-white/10 rounded-tl-lg px-2 py-3 text-white focus:bg-white/10 focus:border-gold focus:outline-none transition-all appearance-none cursor-pointer w-24 text-center border-r border-white/10 flex-shrink-0"
                                            >
                                                <option value="+91">+91 🇮🇳</option>
                                                <option value="+1">+1 🇺🇸</option>
                                                <option value="+44">+44 🇬🇧</option>
                                                <option value="+971">+971 🇦🇪</option>
                                                <option value="+61">+61 🇦🇺</option>
                                                <option value="+1">+1 🇨🇦</option>
                                                <option value="+33">+33 🇫🇷</option>
                                                <option value="+49">+49 🇩🇪</option>
                                            </select>
                                            <input
                                                required
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="flex-1 min-w-0 bg-white/5 border-b border-white/10 rounded-tr-lg px-4 py-3 text-white focus:bg-white/10 focus:border-gold focus:outline-none transition-all placeholder:text-white/20"
                                                placeholder="98765 43210"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="group">
                                    <label className="text-xs uppercase tracking-wider text-gray-500 mb-2 block group-focus-within:text-gold transition-colors">Email</label>
                                    <input
                                        required
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border-b border-white/10 rounded-t-lg px-4 py-3 text-white focus:bg-white/10 focus:border-gold focus:outline-none transition-all placeholder:text-white/20"
                                        placeholder="you@company.com"
                                    />
                                </div>

                                <div className="group">
                                    <label className="text-xs uppercase tracking-wider text-gray-500 mb-2 block group-focus-within:text-gold transition-colors">Event Type</label>
                                    <select
                                        name="eventType"
                                        value={formData.eventType}
                                        onChange={handleChange}
                                        className="w-full bg-black border-b border-white/10 rounded-t-lg px-4 py-3 text-white focus:bg-white/10 focus:border-gold focus:outline-none transition-all appearance-none cursor-pointer"
                                    >
                                        <option value="Wedding / Sangeet">Wedding / Sangeet</option>
                                        <option value="Corporate Event">Corporate Event</option>
                                        <option value="Public Concert">Public Concert</option>
                                        <option value="Private Party">Private Party</option>
                                    </select>
                                </div>

                                <div className="group relative">
                                    <label className="text-xs uppercase tracking-wider text-gray-500 mb-2 block group-focus-within:text-gold transition-colors flex items-center gap-2">
                                        Event Location <MapPin size={12} className="text-gold animate-bounce" />
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-[radial-gradient(#ffffff20_1px,transparent_1px)] [background-size:16px] opacity-20 pointer-events-none" />
                                        <input
                                            required
                                            type="text"
                                            name="location"
                                            value={formData.location}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border-b border-white/10 rounded-t-lg px-4 py-3 text-white focus:bg-white/10 focus:border-gold focus:outline-none transition-all placeholder:text-white/20 relative z-10"
                                            placeholder="Paris, France... New York, USA..."
                                        />
                                    </div>
                                </div>

                                <div className="group">
                                    <label className="text-xs uppercase tracking-wider text-gray-500 mb-2 block group-focus-within:text-gold transition-colors">
                                        Message / Inquiry
                                    </label>
                                    <textarea
                                        required
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border-b border-white/10 rounded-t-lg px-4 py-3 text-white focus:bg-white/10 focus:border-gold focus:outline-none transition-all placeholder:text-white/20 min-h-[100px] resize-y"
                                        placeholder="Tell us more about your event..."
                                    />
                                </div>

                                <motion.button
                                    disabled={formStatus !== "idle"}
                                    whileHover={formStatus === "idle" ? { scale: 1.02, backgroundColor: "#F4C430" } : {}}
                                    whileTap={formStatus === "idle" ? { scale: 0.98 } : {}}
                                    className={`w-full font-bold uppercase tracking-wider py-4 rounded-xl mt-4 shadow-[0_4px_14px_0_rgba(212,175,55,0.39)] transition-all flex items-center justify-center gap-2 overflow-hidden relative
                                        ${formStatus === "success" ? "bg-green-600 text-white" : formStatus === "error" ? "bg-red-600 text-white" : "bg-gold text-black"}
                                    `}
                                >
                                    <AnimatePresence mode="wait">
                                        {formStatus === "idle" && (
                                            <motion.span
                                                key="idle"
                                                initial={{ y: 20, opacity: 0 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                exit={{ y: -20, opacity: 0 }}
                                                className="flex items-center gap-2"
                                            >
                                                Send Inquiry <Send size={18} />
                                            </motion.span>
                                        )}
                                        {formStatus === "submitting" && (
                                            <motion.div
                                                key="submitting"
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                exit={{ scale: 0 }}
                                            >
                                                <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin" />
                                            </motion.div>
                                        )}
                                        {formStatus === "success" && (
                                            <motion.span
                                                key="success"
                                                initial={{ scale: 0.5, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                className="flex items-center gap-2"
                                            >
                                                Inquiry Sent <CheckCircle size={18} />
                                            </motion.span>
                                        )}
                                        {formStatus === "error" && (
                                            <motion.span
                                                key="error"
                                                initial={{ scale: 0.5, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                className="flex items-center gap-2"
                                            >
                                                Error Sending <Send size={18} />
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
