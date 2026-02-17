import { Instagram, Facebook, Mail, Phone, Heart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contacto" className="bg-white pt-32 pb-12 relative overflow-hidden border-t-[10px] border-gray-50">
      {/* Soft Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-sunshine/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-joy/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 text-center md:text-left">
          <div className="col-span-1 lg:col-span-1 flex flex-col items-center md:items-start">
            <Link href="/" className="block mb-8">
              <div className="relative h-24 md:h-32 w-48 md:w-64">
                <Image
                  src="/logoely.webp"
                  alt="Miss Ely Logo"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 192px, 256px"
                />
              </div>
            </Link>
            <p className="text-gray-700 font-bold leading-tight mb-10 text-lg max-w-sm">
              Llevando magia y aprendizaje a cada rincón. Especialista en
              educación inicial y animación de eventos infantiles.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com" aria-label="Instagram de Miss Ely" className="w-14 h-14 rounded-[1.5rem] bg-brand-sky/10 flex items-center justify-center text-brand-sky hover:bg-brand-sky hover:text-white hover:scale-110 transition-all shadow-lg border-2 border-white">
                <Instagram size={28} />
              </a>
              <a href="https://facebook.com" aria-label="Facebook de Miss Ely" className="w-14 h-14 rounded-[1.5rem] bg-brand-joy/10 flex items-center justify-center text-brand-joy hover:bg-brand-joy hover:text-white hover:scale-110 transition-all shadow-lg border-2 border-white">
                <Facebook size={28} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-black text-brand-purple mb-10 uppercase tracking-[0.2em] text-sm">Explora</h4>
            <ul className="space-y-5">
              <li><Link href="/" className="text-gray-600 hover:text-brand-sky font-black text-xl transition-all flex items-center justify-center md:justify-start gap-2 group">Inicio</Link></li>
              <li><Link href="/servicios" className="text-gray-600 hover:text-brand-joy font-black text-xl transition-all flex items-center justify-center md:justify-start gap-2 group">Servicios</Link></li>
              <li><Link href="/videos" className="text-gray-600 hover:text-brand-leaf font-black text-xl transition-all flex items-center justify-center md:justify-start gap-2 group">Videos</Link></li>
              <li><Link href="/reserva" className="text-gray-600 hover:text-brand-sky font-black text-xl transition-all flex items-center justify-center md:justify-start gap-2 group">Reservar</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-brand-purple mb-10 uppercase tracking-[0.2em] text-sm">Hablemos</h4>
            <ul className="space-y-8">
              <li className="flex flex-col items-center md:items-start gap-2">
                <div className="flex items-center gap-4 text-brand-dark font-black text-2xl group cursor-pointer transition-colors">
                  <div className="w-12 h-12 bg-brand-sky/10 rounded-2xl flex items-center justify-center group-hover:bg-brand-sky transition-colors">
                    <Phone size={24} className="text-brand-sky group-hover:text-white" />
                  </div>
                  <span>904 659 844</span>
                </div>
              </li>
              <li className="flex flex-col items-center md:items-start gap-2">
                <div className="flex items-center gap-4 text-brand-dark font-black text-base group cursor-pointer transition-colors">
                  <div className="w-12 h-12 bg-brand-joy/10 rounded-2xl flex items-center justify-center group-hover:bg-brand-joy transition-colors shrink-0">
                    <Mail size={22} className="text-brand-joy group-hover:text-white" />
                  </div>
                  <span className="break-all font-bold">arcoirisdeesperanza2020@gmail.com</span>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-brand-purple mb-10 uppercase tracking-[0.2em] text-sm">Red TuBarrio</h4>
            <div className="bg-gray-50/50 backdrop-blur-sm p-10 rounded-[4rem] border-4 border-white relative group overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-brand-sunshine/5 translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
              <div className="relative z-10 text-center md:text-left">
                <p className="text-[10px] text-brand-dark font-black mb-3 uppercase tracking-widest">Socio Estratégico</p>
                <span className="text-3xl font-black text-brand-dark flex items-center justify-center md:justify-start gap-2 tracking-tighter">
                  TuBarrio<span className="text-brand-magenta">.pe</span>
                </span>
                <p className="text-[10px] text-gray-700 font-bold mt-6 leading-tight">Impulsando el emprendimiento local con valores y mucha alegría.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t-4 border-gray-50 flex flex-col items-center text-center gap-4">
          <p className="text-brand-purple font-black text-xl uppercase tracking-widest">
            "Aprender nunca fue tan entretenido"
          </p>
          <p className="text-gray-500 text-xs font-black uppercase tracking-[0.3em]">
            © {currentYear} Miss Ely • Diversión Mágica
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
