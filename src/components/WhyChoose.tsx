"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Award, BookOpen, Heart, Sparkles } from "lucide-react";

const features = [
  {
    title: "20+ años de experiencia",
    description: "Cientos de fiestas y eventos exitosos que avalan mi profesionalismo.",
    icon: <Award className="text-brand-rojo" size={32} />
  },
  {
    title: "Profesora de Inicial de carrera",
    description: "Metodología basada en el desarrollo infantil real y pedagógico.",
    icon: <BookOpen className="text-brand-verde" size={32} />
  },
  {
    title: "Material educativo propio",
    description: "Juegos y recursos didácticos diseñados exclusivamente para mis shows.",
    icon: <CheckCircle2 className="text-brand-celeste" size={32} />
  },
  {
    title: "Carisma inigualable",
    description: "Conexión genuina con los niños basada en el amor y la paciencia.",
    icon: <Heart className="text-brand-rosa" size={32} />
  }
];

const WhyChoose = () => {
  return (
    <section id="sobre-mi" className="py-24 relative bg-gray-50 overflow-hidden">
      {/* Decorative background icons */}
      <div className="absolute top-10 right-10 text-brand-purple/5 -rotate-12">
        <Sparkles size={200} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-full"
            >
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-brand-sunshine/20 rounded-full blur-[80px]" />

              {/* Bubble image container */}
              <div className="bg-white p-6 md:p-10 rounded-[3rem] md:rounded-[5rem] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] relative z-10 border-[8px] md:border-[10px] border-white group w-full">
                <div className="aspect-square bg-immersive-gradient rounded-[2.5rem] md:rounded-[4rem] flex items-center justify-center overflow-hidden relative w-full">
                  <motion.img
                    src="/nueva1f.webp"
                    alt="Miss Ely"
                    animate={{ rotate: [0, 2, -2, 0] }}
                    transition={{ duration: 6, repeat: Infinity }}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-purple/40 to-transparent pointer-events-none" />
                </div>

                {/* Status Badge */}
                <div className="absolute -bottom-6 -right-6 bg-brand-magenta text-white px-8 py-4 rounded-[2rem] font-black shadow-2xl rotate-6 group-hover:rotate-0 transition-all">
                  100% Profesional
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <span className="bg-brand-sunshine/20 text-brand-dark px-6 py-2 rounded-full font-black text-sm uppercase tracking-widest">
                  Mi Compromiso
                </span>
              </div>
              <h2 className="text-6xl md:text-[5.5rem] font-black text-brand-dark mb-10 leading-none tracking-tighter">
                ¿Por qué elegir a <br />
                <span className="text-brand-purple drop-shadow-sm">Miss Ely</span>?
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {features.map((feature, index) => {
                  const featureColors = [
                    "bg-brand-sunshine text-brand-dark",
                    "bg-brand-sky text-white",
                    "bg-brand-leaf text-brand-dark",
                    "bg-brand-joy text-white"
                  ];
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="p-8 bg-white rounded-[3rem] shadow-xl hover:shadow-2xl transition-all border-4 border-gray-50 group"
                    >
                      <div className={`w-16 h-16 rounded-2xl ${featureColors[index % 4]} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-lg`}>
                        <div className="scale-125">{feature.icon}</div>
                      </div>
                      <h4 className="text-2xl font-black text-brand-dark mb-3 leading-none">{feature.title}</h4>
                      <p className="text-gray-400 font-bold text-base leading-snug">{feature.description}</p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default WhyChoose;
