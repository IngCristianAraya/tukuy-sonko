"use client";

import { motion } from "framer-motion";
import { MessageCircle, Sparkles, Heart } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-immersive-gradient rounded-[5rem] p-12 md:p-32 text-center relative overflow-hidden shadow-2xl"
        >
          {/* Playful background icons */}
          <div className="absolute top-10 left-10 text-white/10 -rotate-12">
            <Sparkles size={120} />
          </div>
          <div className="absolute bottom-10 right-10 text-white/10 rotate-12">
            <Heart size={150} />
          </div>

          <div className="relative z-10">
            <h2 className="text-6xl md:text-[8rem] font-black text-white mb-12 leading-[0.9] tracking-tighter">
              ¿VAMOS A <br />
              <span className="text-brand-sunshine drop-shadow-2xl">CELEBRAR?</span>
            </h2>

            <p className="text-white/80 text-2xl md:text-4xl font-black mb-16 max-w-3xl mx-auto leading-tight">
              Asegura tu fecha hoy y regálale a tu pequeño <br />
              <span className="text-white underline decoration-brand-magenta decoration-8 underline-offset-8">un recuerdo para toda la vida.</span>
            </p>

            <motion.a
              href="/reserva"
              className="btn-premium btn-magenta text-3xl h-28 px-20 group"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle size={40} />
              <span>¡Reservar Ahora!</span>
            </motion.a>

            <p className="mt-12 text-white/40 font-black text-xl uppercase tracking-tighter">
              ✨ ¡Quedan pocos cupos disponibles para este mes! ✨
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};


export default CTA;
