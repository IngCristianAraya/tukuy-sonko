
// Re-triggering compilation to resolve potential SSR reference issues.

"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import Link from "next/link";
import {
    Home,
    UserRound,
    FlaskConical,
    Baby,
    PartyPopper,
    Gamepad2,
    CheckCircle2,
    MessageCircle,
    Sparkles,
    Heart
} from "lucide-react";
import Image from "next/image";

const fullServices = [
    {
        title: "Escuela en el Bosque",
        tagline: "Exploración y Naturaleza",
        description: "Aprendemos jugando, porque jugando se aprende mejor (y se ensucia menos el sillón del salón). Fomentamos la curiosidad y el respeto por el medio ambiente en grupos reducidos.",
        details: [
            "Contacto directo con la flora y fauna local.",
            "Actividades de psicomotricidad en terrenos naturales.",
            "Fomento del respeto por el planeta.",
            "Atención personalizada y segura."
        ],
        icon: <Home size={40} />,
        image: "/nueva1f.webp",
        color: "text-brand-leaf",
        bgColor: "bg-brand-leaf/10",
        border: "border-brand-leaf/20"
    },
    {
        title: "Teatro y Expresión",
        tagline: "Historias que Mueven Hilos",
        description: "Nuestros títeres hablan... ¡y dicen cosas inteligentes! Historias que mueven hilos y corazones, ayudando a los niños a perder el miedo escénico y expresar sus emociones.",
        details: [
            "Juegos de improvisación y mímica.",
            "Creación de personajes con valores.",
            "Ejercicios de voz y confianza.",
            "Presentaciones amigables y mágicas."
        ],
        icon: <UserRound size={40} />,
        image: "/nueva2f.webp",
        color: "text-brand-joy",
        bgColor: "bg-brand-joy/10",
        border: "border-brand-joy/20"
    },
    {
        title: "Experimentos Divertidos",
        tagline: "Ciencia con Chispa",
        description: "El único show donde los experimentos explotan... pero de puro conocimiento científico. Descubre las leyes de la naturaleza sin chamuscarse las cejas.",
        details: [
            "Creación de masas sensoriales.",
            "Reacciones químicas sorprendentes y seguras.",
            "Iniciación lúdica al método científico.",
            "Kit de materiales mágicos incluido."
        ],
        icon: <FlaskConical size={40} />,
        image: "/nueva3f.webp",
        color: "text-brand-sky",
        bgColor: "bg-brand-sky/10",
        border: "border-brand-sky/20"
    },
    {
        title: "Expresión Corporal",
        tagline: "Creatividad sin Cables",
        description: "Aquí el cuerpo también tiene voz (y a veces hace cosquillas). Movimiento libre enfocado en el desarrollo psicomotriz fino y grueso a través del juego.",
        details: [
            "Danza creativa y ritmos infantiles.",
            "Circuitos de obstáculos divertidos.",
            "Yoga para niños y relajación.",
            "Seguridad motriz y equilibrio."
        ],
        icon: <Baby size={40} />,
        image: "/nueva4f.webp",
        color: "text-brand-sunshine",
        bgColor: "bg-brand-sunshine/10",
        border: "border-brand-sunshine/20"
    },
    {
        title: "Animación de Eventos",
        tagline: "Energía sin Café",
        description: "Eventos tan divertidos que hasta los padres participan. Animamos fiestas con humor, energía y cero momentos incómodos. Shows temáticos personalizados.",
        details: [
            "Coreografías y juegos integradores.",
            "Equipo de sonido profesional.",
            "Concursos divertidos y premios.",
            "Diversión para niños y tranquilidad para padres."
        ],
        icon: <PartyPopper size={40} />,
        image: "/nueva1f.webp",
        color: "text-brand-rojo",
        bgColor: "bg-brand-rojo/10",
        border: "border-brand-rojo/20"
    },
    {
        title: "Baby Showers y Más",
        tagline: "Diversión con Contenido",
        description: "Como las verduras escondidas en la pizza: educación sin que se den cuenta. Dinámicas especiales sin burlas para celebrar la dulce espera en familia.",
        details: [
            "Dinámicas respetuosas y tiernas.",
            "Rincón infantil para eventos grandes.",
            "Maquillaje artístico profesional.",
            "Globoflexia y sorpresas mágicas."
        ],
        icon: <Gamepad2 size={40} />,
        image: "/nueva2f.webp",
        color: "text-brand-celeste",
        bgColor: "bg-brand-celeste/10",
        border: "border-brand-celeste/20"
    }
];

export default function ServiciosPage() {
    return (
        <main className="min-h-screen bg-white pb-24 md:pb-12">
            <Navbar />

            {/* Hero de Servicios Inmersivo */}
            <section className="pt-40 pb-20 px-6 relative overflow-hidden bg-immersive-gradient">
                <div className="absolute inset-0 pointer-events-none opacity-30">
                    <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 10, repeat: Infinity }}
                        className="absolute -top-20 -right-20 w-96 h-96 bg-brand-sunshine/40 rounded-full blur-[100px]"
                    />
                </div>

                <div className="container mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="max-w-4xl mx-auto"
                    >
                        <h1 className="text-6xl md:text-[8rem] font-black text-white mb-6 leading-none tracking-tighter drop-shadow-2xl">
                            NUESTROS <br />
                            <span className="text-brand-sunshine">SERVICIOS</span>
                        </h1>
                        <p className="font-handwritten text-4xl md:text-7xl text-white mb-8 transform -rotate-2 drop-shadow-lg">
                            &quot;Educación y Diversión Mágica&quot;
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Grid Detallado Inmersivo */}
            <section className="py-24 px-6 md:px-12">
                <div className="container mx-auto space-y-32 md:space-y-48">
                    {fullServices.map((service, index) => {
                        const colors = [
                            "bg-brand-sunshine",
                            "bg-brand-sky",
                            "bg-brand-joy",
                            "bg-brand-leaf",
                            "bg-brand-rojo",
                            "bg-brand-blue"
                        ];
                        const textColors = [
                            "text-brand-sunshine",
                            "text-brand-sky",
                            "text-brand-joy",
                            "text-brand-leaf",
                            "text-brand-rojo",
                            "text-brand-blue"
                        ];
                        const currentColor = colors[index % colors.length];
                        const currentTextColor = textColors[index % textColors.length];

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}
                            >
                                <div className="lg:w-1/2 w-full">
                                    <div className={`p-10 md:p-16 bg-white border-[8px] border-gray-50 rounded-[4rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] relative overflow-hidden group transition-all`}>
                                        <div className={`${currentTextColor} mb-12 scale-[2] origin-left drop-shadow-sm`}>
                                            {service.icon}
                                        </div>
                                        <h2 className="text-4xl md:text-6xl font-black text-brand-dark mb-4 leading-tight tracking-tighter">
                                            {service.title}
                                        </h2>
                                        <span className={`inline-block text-xl font-black ${currentTextColor} opacity-60 mb-8 uppercase tracking-[0.2em]`}>
                                            {service.tagline}
                                        </span>
                                        <p className="text-gray-600 font-bold text-xl leading-snug mb-12 leading-tight">
                                            {service.description}
                                        </p>

                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                                            {service.details.map((detail, idx) => (
                                                <li key={idx} className="flex items-start gap-4 bg-gray-50 p-5 rounded-3xl group/item hover:bg-white hover:shadow-lg transition-all border-2 border-transparent hover:border-gray-100">
                                                    <CheckCircle2 size={24} className={`${currentTextColor} shrink-0`} />
                                                    <span className="text-brand-dark font-black text-base leading-tight">{detail}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <Link
                                            href="/reserva"
                                            className={`btn-premium ${currentColor} text-white w-full h-20 text-xl shadow-2xl`}
                                        >
                                            <MessageCircle size={24} />
                                            <span>¡Me interesa este show!</span>
                                        </Link>
                                    </div>
                                </div>

                                <div className="lg:w-1/2 w-full flex justify-center">
                                    <div className="relative w-full max-w-lg aspect-square rounded-[5rem] bg-gray-50 border-[12px] border-white shadow-2xl overflow-hidden group">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className={`absolute inset-0 ${currentColor} opacity-10 group-hover:opacity-0 transition-opacity`} />

                                        {/* Decorative Overlays */}
                                        <div className="absolute top-6 left-6 w-20 h-20 bg-white/20 backdrop-blur-md rounded-full border border-white/30 z-10" />
                                        <div className="absolute bottom-10 right-10 w-32 h-32 bg-brand-sunshine/10 backdrop-blur-md rounded-full border border-white/30 z-10" />

                                        {/* Floating Sparkles for Magic Touch */}
                                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
                                            <motion.div
                                                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.3, 0.1] }}
                                                transition={{ duration: 4, repeat: Infinity }}
                                            >
                                                <Sparkles size={200} className="text-white opacity-20" />
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </section>

            {/* CTA Final Inmersivo */}
            <section className="py-24 px-6 md:px-12">
                <div className="container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="bg-immersive-gradient rounded-[5rem] p-12 md:p-32 text-center relative overflow-hidden shadow-2xl"
                    >
                        <h2 className="text-6xl md:text-[9rem] font-black mb-10 text-white leading-[0.85] tracking-tighter drop-shadow-2xl">
                            ¿LISTO PARA <br /> <span className="text-brand-sunshine underline decoration-white/20 decoration-8 underline-offset-8">BRILLAR?</span>
                        </h2>
                        <p className="text-2xl md:text-4xl mb-16 text-white/80 max-w-3xl mx-auto font-black leading-tight">
                            Hagamos que la fiesta de tu pequeño sea recordada por siempre.
                        </p>
                        <motion.a
                            href="/reserva"
                            whileHover={{ scale: 1.05, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-premium btn-magenta text-3xl h-28 px-20 shadow-2xl group transition-all"
                        >
                            <MessageCircle size={40} />
                            <span>Contratar ahora</span>
                            <Heart className="text-white/20 group-hover:fill-white group-hover:scale-125 transition-all" />
                        </motion.a>
                    </motion.div>
                </div>
            </section>



            <Footer />
            <BottomNav />
        </main>
    );
}
