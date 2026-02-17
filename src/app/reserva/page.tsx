"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    CheckCircle2,
    MessageCircle,
    ArrowRight,
    PartyPopper,
    Baby,
    Home,
    Sparkles,
    ChevronRight
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";

const services = [
    {
        id: "show-infantil",
        title: "Show Infantil Mágico",
        price: 500,
        icon: <PartyPopper size={24} />,
        color: "bg-brand-joy",
        borderColor: "border-brand-joy",
        description: "Animación completa con juegos, magia y mucha diversión."
    },
    {
        id: "escuela-bosque",
        title: "Escuela en el Bosque",
        price: 350,
        icon: <Home size={24} />,
        color: "bg-brand-leaf",
        borderColor: "border-brand-leaf",
        description: "Encuentros de aprendizaje en la naturaleza con Miss Ely."
    },
    {
        id: "teatro-ninos",
        title: "Taller de Teatro",
        price: 280,
        icon: <Sparkles size={24} />,
        color: "bg-brand-sky",
        borderColor: "border-brand-sky",
        description: "Desarrollo de expresión y confianza para los más pequeños."
    },
    {
        id: "baby-shower",
        title: "Show de Baby Shower",
        price: 450,
        icon: <Baby size={24} />,
        color: "bg-brand-sunshine",
        borderColor: "border-brand-sunshine",
        description: "Momentos tiernos y divertidos para celebrar la dulce espera."
    }
];

export default function ReservaPage() {
    const [selectedService, setSelectedService] = useState(services[0]);

    const generateWhatsAppLink = () => {
        const message = `¡Hola Miss Ely! 💚 Reservo mi fecha para: *${selectedService.title}* (S/ ${selectedService.price}). ¡Hagamos magia!`;
        return `https://wa.me/51904659844?text=${encodeURIComponent(message)}`;
    };

    return (
        <main className="min-h-screen bg-gray-50 pb-24 md:pb-12 font-fredoka text-brand-dark">
            <Navbar />

            <section className="pt-48 pb-24 px-6 relative overflow-hidden bg-immersive-gradient">
                <div className="container mx-auto max-w-4xl text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mb-16"
                    >
                        <h1 className="text-6xl md:text-[8rem] font-black text-white mb-6 leading-none tracking-tighter drop-shadow-2xl">
                            RESERVA TU <br />
                            <span className="text-brand-sunshine underline decoration-white/20 decoration-8 underline-offset-8">MAGIA</span>
                        </h1>
                        <p className="text-2xl md:text-4xl text-white/90 font-black max-w-2xl mx-auto leading-tight drop-shadow-lg transform -rotate-1">
                            Elige la experiencia ideal para tu pequeño.
                        </p>
                    </motion.div>
                </div>
                {/* Decorative background blobs */}
                <div className="absolute -top-20 -left-20 w-96 h-96 bg-brand-magenta/20 rounded-full blur-[100px]" />
                <div className="absolute -bottom-20 -right-20 w-[40rem] h-[40rem] bg-brand-blue/20 rounded-full blur-[100px]" />
            </section>

            <section className="-mt-12 px-6 relative z-20">
                <div className="container mx-auto max-w-5xl">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Selector de Servicios */}
                        <div className="lg:w-3/5 space-y-6">
                            <div className="mb-8">
                                <h2 className="text-4xl font-black text-brand-dark tracking-tighter">1. Selecciona el Servicio</h2>
                            </div>
                            {services.map((service) => (
                                <motion.button
                                    key={service.id}
                                    onClick={() => setSelectedService(service)}
                                    whileTap={{ scale: 0.98 }}
                                    className={`w-full text-left p-8 rounded-[3rem] flex items-center justify-between group transition-all border-[6px] ${selectedService.id === service.id
                                        ? `border-brand-magenta bg-white shadow-2xl translate-y-[-4px]`
                                        : "bg-white border-transparent hover:border-gray-200 shadow-xl"
                                        }`}
                                >
                                    <div className="flex items-center gap-6">
                                        <div className={`w-20 h-20 ${service.color} text-white rounded-[1.5rem] flex items-center justify-center shadow-2xl group-hover:rotate-6 transition-transform`}>
                                            <div className="scale-150">{service.icon}</div>
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-black text-brand-dark leading-none mb-3">{service.title}</h3>
                                            <p className="text-brand-dark/40 font-bold leading-tight max-w-[250px] sm:max-w-none">{service.description}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <span className={`block font-black text-3xl ${selectedService.id === service.id ? "text-brand-magenta" : "text-gray-200"}`}>
                                            S/ {service.price}
                                        </span>
                                    </div>
                                </motion.button>
                            ))}
                        </div>

                        {/* Summary Inmersivo */}
                        <div className="lg:w-2/5">
                            <div className="sticky top-32">
                                <div className="mb-8">
                                    <h2 className="text-4xl font-black text-brand-dark tracking-tighter">2. Tu Reserva</h2>
                                </div>
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={selectedService.id}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="bg-immersive-gradient p-10 md:p-12 rounded-[4rem] text-center relative overflow-hidden shadow-2xl"
                                    >
                                        <div className="relative z-10 text-left">
                                            <div className="flex items-center gap-4 mb-10">
                                                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white border border-white/30">
                                                    {selectedService.icon}
                                                </div>
                                                <h3 className="text-white text-3xl font-black leading-none drop-shadow-lg">
                                                    Resumen Final
                                                </h3>
                                            </div>

                                            <div className="space-y-6 mb-12">
                                                <div className="bg-white/5 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/20">
                                                    <span className="text-white/40 font-black uppercase text-xs tracking-[0.2em] block mb-2">Has elegido</span>
                                                    <span className="text-white font-black text-3xl block leading-none">{selectedService.title}</span>
                                                </div>
                                                <div className="bg-brand-sunshine p-8 rounded-[2.5rem] shadow-2xl border-4 border-white/20">
                                                    <span className="text-brand-dark/40 font-black uppercase text-xs tracking-[0.2em] block mb-2">Inversión Mágica</span>
                                                    <span className="text-brand-dark font-black text-5xl flex items-baseline gap-2 leading-none">
                                                        <span className="text-2xl">S/</span>{selectedService.price}
                                                    </span>
                                                </div>
                                            </div>

                                            <motion.a
                                                href={generateWhatsAppLink()}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.05, y: -5 }}
                                                className="w-full bg-white text-brand-purple text-2xl font-black h-24 rounded-[2.5rem] flex items-center justify-center gap-4 shadow-2xl transition-all"
                                            >
                                                <MessageCircle size={32} className="text-brand-magenta" />
                                                <span>Enviar a WhatsApp</span>
                                            </motion.a>

                                            <p className="mt-8 text-white/30 font-black text-xs uppercase tracking-widest text-center leading-tight">
                                                Al hacer clic serás redirigido para coordinar los detalles finales.
                                            </p>
                                        </div>

                                        {/* Decorative background icons */}
                                        <div className="absolute -bottom-10 -right-10 text-white/5 rotate-12">
                                            <Sparkles size={200} />
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <Footer />
            <BottomNav />
        </main>
    );
}
