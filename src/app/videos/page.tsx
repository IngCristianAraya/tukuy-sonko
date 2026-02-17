"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import { Play, Youtube, Instagram, MessageCircle, Star } from "lucide-react";

const videos = [
    {
        title: "Show de Magia en Vivo",
        category: "Animación",
        thumbnail: "bg-brand-rojo/20",
        duration: "3:45",
        color: "text-brand-rojo"
    },
    {
        title: "Experimento: El Volcán de Colores",
        category: "Educativo",
        thumbnail: "bg-brand-verde/20",
        duration: "5:20",
        color: "text-brand-verde"
    },
    {
        title: "Taller de Teatro para Niños",
        category: "Talleres",
        thumbnail: "bg-brand-lila/20",
        duration: "4:15",
        color: "text-brand-lila"
    },
    {
        title: "Dinámicas de Integración",
        category: "Recreativo",
        thumbnail: "bg-brand-celeste/20",
        duration: "2:50",
        color: "text-brand-celeste"
    },
    {
        title: "Baile y Expresión Corporal",
        category: "Talleres",
        thumbnail: "bg-brand-rosa/20",
        duration: "6:10",
        color: "text-brand-rosa"
    },
    {
        title: "Cuentacuentos en el Bosque",
        category: "Educativo",
        thumbnail: "bg-brand-naranja/20",
        duration: "8:30",
        color: "text-brand-naranja"
    }
];

export default function VideosPage() {
    return (
        <main className="min-h-screen bg-gray-50 pb-24 md:pb-12 font-fredoka text-brand-dark">
            <Navbar />

            {/* Header Galería Inmersivo */}
            <section className="pt-40 pb-24 px-6 relative overflow-hidden bg-immersive-gradient">
                <div className="container mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="max-w-4xl mx-auto"
                    >
                        <h1 className="text-6xl md:text-[8rem] font-black text-white mb-6 leading-none tracking-tighter drop-shadow-2xl">
                            GALERÍA DE <br />
                            <span className="text-brand-sunshine">VIDEOS</span>
                        </h1>
                        <p className="text-2xl md:text-4xl text-white/90 font-black max-w-2xl mx-auto leading-tight drop-shadow-lg transform rotate-1">
                            ¡Mira cómo nos divertimos y aprendemos juntos!
                        </p>
                    </motion.div>
                </div>
                {/* Decorative bubble images placeholder */}
                <div className="absolute top-10 right-10 w-40 h-40 bg-white/10 rounded-[3rem] blur-2xl" />
                <div className="absolute bottom-10 left-10 w-64 h-64 bg-brand-sunshine/10 rounded-[5rem] blur-3xl opacity-50" />
            </section>

            {/* Grid de Videos Inmersivo */}
            <section className="py-24 px-6 md:px-12">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {videos.map((video, index) => {
                            const colors = [
                                "bg-brand-sunshine",
                                "bg-brand-sky",
                                "bg-brand-joy",
                                "bg-brand-leaf",
                                "bg-brand-rojo",
                                "bg-brand-blue"
                            ];
                            const currentColor = colors[index % colors.length];

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white border-[6px] border-white rounded-[4rem] overflow-hidden group shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] hover:shadow-2xl hover:-translate-y-4 transition-all duration-500"
                                >
                                    {/* Thumbnail Placeholder Inmersivo */}
                                    <div className={`aspect-video ${video.thumbnail} relative flex items-center justify-center overflow-hidden border-b-[8px] border-gray-50`}>
                                        <div className="absolute inset-0 bg-immersive-gradient opacity-10 blur-xl group-hover:opacity-30 transition-opacity" />

                                        <motion.div
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            className="w-24 h-24 bg-white rounded-[2.5rem] flex items-center justify-center shadow-2xl z-10 border-4 border-gray-50 group-hover:border-brand-magenta transition-colors"
                                        >
                                            <Play size={40} className="fill-brand-magenta text-brand-magenta translate-x-1" />
                                        </motion.div>

                                        {/* Duración */}
                                        <div className="absolute bottom-6 right-6 bg-brand-dark/80 backdrop-blur-md text-white px-5 py-2 rounded-2xl text-sm font-black shadow-2xl">
                                            {video.duration}
                                        </div>
                                    </div>

                                    <div className="p-10">
                                        <div className="flex items-center gap-2 mb-6">
                                            <span className={`px-6 py-2 rounded-full ${currentColor} text-white text-xs font-black uppercase tracking-[0.2em]`}>
                                                {video.category}
                                            </span>
                                        </div>
                                        <h3 className="text-3xl font-black text-brand-dark leading-[1.1] tracking-tighter group-hover:text-brand-magenta transition-colors">
                                            {video.title}
                                        </h3>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Redes Sociales Final Inmersivo */}
            <section className="py-24 px-6 md:px-12">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="bg-immersive-gradient rounded-[5rem] p-12 md:p-32 text-center relative overflow-hidden shadow-2xl"
                    >
                        <div className="absolute top-10 right-10 text-white/5 -rotate-12">
                            <Star size={200} />
                        </div>
                        <h2 className="text-6xl md:text-[8rem] font-black text-white mb-12 leading-[0.85] tracking-tighter drop-shadow-2xl relative z-10">
                            ¿QUIERES VER <br /><span className="text-brand-sunshine underline decoration-white/20 decoration-8 underline-offset-8">MÁS MAGIA?</span>
                        </h2>
                        <p className="text-2xl md:text-4xl text-white/90 mb-16 max-w-3xl mx-auto font-black leading-tight relative z-10">
                            Síguenos en nuestras redes y sé parte de nuestra comunidad lúdica.
                        </p>

                        <div className="flex flex-wrap justify-center gap-8 relative z-10">
                            <motion.a
                                href="#"
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="bg-[#FF0000] text-white font-black text-2xl h-24 px-12 rounded-[2.5rem] flex items-center gap-4 shadow-2xl"
                            >
                                <Youtube size={32} />
                                <span>YouTube</span>
                            </motion.a>
                            <motion.a
                                href="#"
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="bg-gradient-to-tr from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] text-white font-black text-2xl h-24 px-12 rounded-[2.5rem] flex items-center gap-4 shadow-2xl"
                            >
                                <Instagram size={32} />
                                <span>Instagram</span>
                            </motion.a>
                            <motion.a
                                href="https://wa.me/51904659844"
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="bg-brand-dark text-white font-black text-2xl h-24 px-12 rounded-[2.5rem] flex items-center gap-4 shadow-2xl border-4 border-white/10"
                            >
                                <MessageCircle size={32} />
                                <span>WhatsApp</span>
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </section>



            <Footer />
            <BottomNav />
        </main>
    );
}
