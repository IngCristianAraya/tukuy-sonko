"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import Image from "next/image";

import {
  Home,
  UserRound,
  PartyPopper,
  Gamepad2,
  FlaskConical,
  Baby,
  ChevronRight
} from "lucide-react";

const services = [
  {
    title: "Escuela en el Bosque",
    description: "Aprendemos jugando, porque jugando se aprende mejor (y se ensucia menos el sillón del salón).",
    icon: <Home size={32} />,
    color: "bg-brand-naranja",
    image: "/nueva1f.webp",
    href: "/reserva"
  },
  {
    title: "Teatro y Expresión",
    description: "Nuestros títeres hablan... ¡y dicen cosas inteligentes! Historias que mueven hilos y corazones.",
    icon: <UserRound size={32} />,
    color: "bg-brand-lila",
    image: "/nueva2f.webp",
    href: "/reserva"
  },
  {
    title: "Ciencia Divertida",
    description: "El único show donde los experimentos explotan... pero de puro conocimiento científico sorprendente.",
    icon: <FlaskConical size={32} />,
    color: "bg-brand-verde_claro",
    image: "/nueva3f.webp",
    href: "/reserva"
  },
  {
    title: "Expresión Corporal",
    description: "Aquí el cuerpo también tiene voz (y a veces hace cosquillas). ¡Movimiento libre y sin cables!",
    icon: <Baby size={32} />,
    color: "bg-brand-rosa",
    image: "/nueva4f.webp",
    href: "/reserva"
  },
  {
    title: "Animación Mágica",
    description: "Eventos tan divertidos que hasta los padres participan. Animamos sin necesidad de café.",
    icon: <PartyPopper size={32} />,
    color: "bg-brand-rojo",
    image: "/nueva1f.webp",
    href: "/reserva"
  },
  {
    title: "Shows Temáticos",
    description: "Diversión con contenido: como las verduras escondidas en la pizza. ¡Educación sin que se den cuenta!",
    icon: <Gamepad2 size={32} />,
    color: "bg-brand-celeste",
    image: "/nueva2f.webp",
    href: "/reserva"
  }
];

const Services = () => {
  return (
    <section id="servicios" className="py-24 px-4 bg-white relative">
      {/* Decorative background shape */}
      <div className="absolute top-0 left-0 w-full h-32 bg-immersive-gradient opacity-10 blur-3xl -z-10" />

      <div className="container mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="bg-brand-purple/10 text-brand-purple px-6 py-2 rounded-full font-black text-sm uppercase tracking-widest">
              Explora la Magia
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-[5rem] font-black text-brand-dark mb-6 tracking-tighter leading-none"
          >
            Mis Servicios <span className="text-brand-magenta">Mágicos</span>
          </motion.h2>
          <p className="text-gray-600 font-bold text-xl md:text-2xl max-w-2xl mx-auto leading-tight">
            Diseñamos experiencias únicas donde cada detalle cuenta para la sonrisa de tus pequeños.
          </p>
        </div>

        <div className="flex items-start overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 pb-8 md:pb-0 snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0 no-scrollbar">
          {services.map((service, index) => {
            const colors = [
              "bg-brand-sunshine",
              "bg-brand-sky",
              "bg-brand-joy",
              "bg-brand-leaf",
              "bg-brand-rojo",
              "bg-brand-blue"
            ];
            const colorClass = colors[index % colors.length];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border-[6px] border-gray-50 rounded-[4rem] p-8 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 group flex flex-col items-center text-center overflow-hidden shrink-0 w-[85%] sm:w-[60%] md:w-full snap-center"
              >
                {/* Image Container with Floating Icon */}
                <div className="relative w-full h-64 mb-8 group-hover:scale-105 transition-transform duration-500">
                  <div className="absolute inset-0 rounded-[3rem] overflow-hidden border-4 border-white shadow-xl z-10">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 85vw, (max-width: 1200px) 50vw, 33vw"
                      quality={70}
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Color Overlay */}
                    <div className={`absolute inset-0 ${colorClass} opacity-10 group-hover:opacity-0 transition-opacity`} />
                  </div>

                  {/* Floating Icon Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                    className={`absolute -bottom-4 -right-2 w-20 h-20 ${colorClass} text-white rounded-[1.5rem] flex items-center justify-center shadow-2xl z-20 border-4 border-white group-hover:rotate-12 transition-all duration-500`}
                  >
                    {service.icon}
                  </motion.div>
                </div>

                <div className="mt-4 w-full">
                  <h3 className="text-3xl font-black text-brand-dark mb-4 tracking-tighter leading-none">{service.title}</h3>
                  <p className="text-gray-600 font-bold mb-8 leading-snug">
                    {service.description}
                  </p>

                  <Link
                    href={service.href}
                    className={`btn-premium ${colorClass} text-white w-full shadow-2xl group-hover:scale-105 active:translate-y-2 py-4 rounded-[2rem] flex items-center justify-center gap-2`}
                  >
                    <span className="text-xl font-black">Reserva Mágica</span>
                    <ChevronRight size={20} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};


export default Services;
