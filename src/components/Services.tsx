"use client";

import { motion } from "framer-motion";
import Link from "next/link";

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
    description: "Aprendizaje lúdico y contacto directo con la naturaleza para el desarrollo motriz.",
    icon: <Home size={32} />,
    color: "bg-brand-naranja",
    href: "/reserva"
  },
  {
    title: "Teatro y Expresión",
    description: "Talleres divertidos para potenciar la confianza y creatividad infantil.",
    icon: <UserRound size={32} />,
    color: "bg-brand-lila",
    href: "/reserva"
  },
  {
    title: "Ciencia Divertida",
    description: "Experimentos sorprendentes y seguros para pequeños científicos curiosos.",
    icon: <FlaskConical size={32} />,
    color: "bg-brand-verde_claro",
    href: "/reserva"
  },
  {
    title: "Expresión Corporal",
    description: "Movimiento y psicomotricidad a través del juego y la música.",
    icon: <Baby size={32} />,
    color: "bg-brand-rosa",
    href: "/reserva"
  },
  {
    title: "Animación de Eventos",
    description: "Shows temáticos y divertidos para cumpleaños y fiestas infantiles.",
    icon: <PartyPopper size={32} />,
    color: "bg-brand-rojo",
    href: "/reserva"
  },
  {
    title: "Baby Showers",
    description: "Momentos tiernos y juegos pensados para toda la familia y amigos.",
    icon: <Gamepad2 size={32} />,
    color: "bg-brand-celeste",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
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
                className="bg-white border-[6px] border-gray-50 rounded-[4rem] p-10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 group flex flex-col items-center text-center"
              >
                <div className={`w-24 h-24 ${colorClass} text-white rounded-[2rem] flex items-center justify-center mb-8 shadow-2xl group-hover:rotate-[15deg] transition-all duration-500`}>
                  <div className="scale-150">{service.icon}</div>
                </div>

                <h3 className="text-3xl font-black text-brand-dark mb-4 tracking-tighter leading-none">{service.title}</h3>
                <p className="text-gray-600 font-bold mb-10 leading-snug">
                  {service.description}
                </p>

                <Link
                  href={service.href}
                  className={`mt-auto btn-premium ${colorClass} text-white w-full shadow-2xl group-hover:scale-105 active:translate-y-2`}
                >
                  <span className="text-xl">¡Reservar Ahora!</span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};


export default Services;
