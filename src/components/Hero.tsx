"use client";

import { motion } from "framer-motion";
import { MessageCircle, Heart, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const FloatingIcon = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    animate={{
      y: [0, -20, 0],
      rotate: [0, 10, -10, 0]
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      delay
    }}
    className={className}
  >
    {children}
  </motion.div>
);

const Hero = () => {
  return (
    <section className="relative pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden bg-immersive-gradient">
      {/* Magical Background Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">

        {/* Explosión de Serpentinas y Confetti */}
        {[...Array(40)].map((_, i) => {
          const colors = ["#FF0080", "#7928CA", "#0070F3", "#00DFD8", "#FFD700", "#FF6B6B", "#4D96FF", "#39FF14"];
          const color = colors[i % colors.length];
          const isSpiral = i % 3 === 0;

          return (
            <motion.div
              key={`party-fest-${i}`}
              initial={{
                opacity: 0,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 80 + 20}%`,
                rotate: Math.random() * 360,
                scale: 0
              }}
              animate={{
                opacity: [0, 1, 1, 0],
                y: [0, -200, -400],
                x: [(Math.random() - 0.5) * 100],
                rotate: [0, 360, 720],
                scale: [0, 1, 1, 0.4]
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                ease: "easeOut",
                delay: Math.random() * 10
              }}
              className="absolute"
            >
              {isSpiral ? (
                <svg width="30" height="30" viewBox="0 0 40 40">
                  <path
                    d="M10,10 Q20,0 30,10 T30,30"
                    fill="none"
                    stroke={color}
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <div
                  className="w-3 h-1.5 rounded-full"
                  style={{ backgroundColor: color }}
                />
              )}
            </motion.div>
          );
        })}

        {/* Gran Galaxia de Globos REDONDOS (Estética de Ilustración) */}
        {[...Array(25)].map((_, i) => {
          const balloonColors = [
            "#39FF14", // Verde vibrante
            "#FF0080", // Magenta
            "#FFD700", // Amarillo oro
            "#00E5FF", // Cyan
            "#7A28FF", // Morado
            "#FF6B00"  // Naranja
          ];
          const color = balloonColors[i % balloonColors.length];
          const size = Math.random() * 15 + 60; // 60px to 75px

          return (
            <motion.div
              key={`balloon-round-${i}`}
              initial={{
                left: Math.random() * 90 + 5 + "%",
                top: `${Math.random() * 100 + 100}%`, // Some start lower than others
                scale: 1,
              }}
              animate={{
                y: ["0%", "-250%"],
                x: ["0%", (Math.random() - 0.5) * 60 + "%"],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 20 + Math.random() * 20,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * -20 // Start at different points in their animation
              }}
              className="absolute z-10"
            >
              <div className="relative flex flex-col items-center">
                {/* Balloon Body - PERFECTLY ROUND */}
                <div
                  className="rounded-full border-[3px] border-[#2D1B1B] relative shadow-lg"
                  style={{
                    backgroundColor: color,
                    width: `${size}px`,
                    height: `${size * 1.1}px`, // Slightly taller for natural look
                  }}
                >
                  {/* Glossy Highlights */}
                  <div className="absolute top-[15%] left-[20%] w-[30%] h-[20%] bg-white/40 rounded-full blur-[1px]" />
                  <div className="absolute top-[30%] left-[15%] w-[15%] h-[10%] bg-white/20 rounded-full" />

                  {/* Knot at the bottom center */}
                  <div
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-3 border-[3px] border-[#2D1B1B]"
                    style={{
                      backgroundColor: color,
                      clipPath: "polygon(50% 100%, 0 0, 100% 0)"
                    }}
                  />
                </div>

                {/* Wavy String */}
                <svg width="20" height="80" viewBox="0 0 20 80" className="-mt-1 opacity-50">
                  <motion.path
                    d="M10,0 Q15,20 10,40 T10,80"
                    fill="none"
                    stroke="#2D1B1B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    animate={{ d: ["M10,0 Q15,20 10,40 T10,80", "M10,0 Q5,20 10,40 T10,80", "M10,0 Q15,20 10,40 T10,80"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  />
                </svg>
              </div>
            </motion.div>
          );
        })}

        {/* Static decorative background blobs (Far back) */}
        <div className="absolute inset-0 z-[-1] opacity-30">
          <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-brand-magenta/40 rounded-full blur-[120px]" />
          <div className="absolute -bottom-20 -left-20 w-[35rem] h-[35rem] bg-brand-blue/40 rounded-full blur-[120px]" />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Badge superior inmersivo */}
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="inline-block mb-8"
          >
            <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest flex items-center gap-2 shadow-2xl">
              <Sparkles size={14} className="text-brand-sunshine" />
              Diversión Educativa & Shows Mágicos
            </span>
          </motion.div>

          {/* Título Monumental Blanco */}
          <h1 className="text-6xl md:text-[7rem] lg:text-[8rem] font-black mb-6 tracking-tighter leading-[0.9] text-white drop-shadow-2xl">
            EDUCACIÓN CON <br />
            <span className="text-brand-sunshine underline decoration-white/20 decoration-8 underline-offset-8">RISAS GARANTIZADAS</span>
          </h1>

          {/* Eslogan con alto contraste */}
          <p className="font-handwritten text-4xl md:text-6xl lg:text-7xl text-white mb-10 transform -rotate-1 drop-shadow-lg">
            "Donde aprender es tan divertido que los adultos quieren quedarse"
          </p>

          <div className="max-w-4xl mx-auto mb-16">
            <p className="text-2xl md:text-3xl font-black text-white/90 leading-tight">
              Formamos pequeñas mentes brillantes... <br />
              <span className="text-brand-sunshine">¡y grandes carcajadas!</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <motion.a
              href="/reserva"
              className="btn-premium btn-magenta text-2xl h-24 px-16 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle size={32} />
              <span>Contratar mi show</span>
              <Heart className="group-hover:fill-white group-hover:scale-125 transition-all text-white/20" />
            </motion.a>

            <Link
              href="/servicios"
              className="text-white font-black text-2xl border-b-4 border-white/20 hover:border-brand-sunshine pb-1 transition-all flex items-center gap-3 group"
            >
              Ver Servicios <Sparkles className="group-hover:rotate-12 transition-transform text-brand-sunshine" />
            </Link>
          </div>
        </motion.div>

        {/* Floating elements style "Bubble" - Aquí puedes colocar tus fotos */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 w-full max-w-5xl">
          {[
            { id: 1, src: "/nueva1f.webp", alt: "Show Miss Ely 1" },
            { id: 2, src: "/nueva3f.webp", alt: "Show Miss Ely 2" },
            { id: 3, src: "/nueva4f.webp", alt: "Show Miss Ely 3" },
            { id: 4, src: "/nueva2f.webp", alt: "Show Miss Ely 4" },
          ].map((img, i) => (
            <motion.div
              key={img.id}
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
              className="aspect-square bg-white/5 backdrop-blur-sm border-2 border-white/10 rounded-[2.5rem] md:rounded-[4rem] flex items-center justify-center relative overflow-hidden group shadow-2xl"
            >
              {img.src ? (
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    priority={i < 2} // First two images get priority
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              ) : (
                <>
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Sparkles size={40} className="text-white/20 group-hover:text-brand-sunshine transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center font-black text-white/5 text-4xl select-none">
                    MISS ELY
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
