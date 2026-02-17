"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Inicio", href: "/" },
        { name: "Servicios", href: "/servicios" },
        { name: "Videos", href: "/videos" },
        { name: "Contacto", href: "#contacto" },
    ];

    return (
        <nav
            className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 transition-all duration-500 rounded-[2rem] overflow-hidden ${isScrolled ? "bg-white shadow-2xl py-1" : "bg-white/10 backdrop-blur-md py-2 border-2 border-white/20"
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group relative z-[60]">
                    <motion.img
                        src="/logoely.webp"
                        alt="Miss Ely Logo"
                        width={168}
                        height={82}
                        className="h-16 md:h-24 w-auto object-contain"
                        whileHover={{ scale: 1.05 }}
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`font-black text-sm uppercase tracking-widest transition-colors ${isScrolled ? "text-brand-dark hover:text-brand-sky" : "text-white hover:text-brand-sunshine"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <motion.a
                        href="/reserva"
                        className={`${isScrolled ? "btn-sunshine" : "bg-white text-brand-purple"} px-8 py-3 rounded-2xl font-black flex items-center gap-2 shadow-xl active:translate-y-1 transition-all`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <MessageCircle size={20} />
                        <span>RESERVAR</span>
                    </motion.a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden w-12 h-12 flex items-center justify-center rounded-2xl bg-white shadow-sm text-brand-dark border-2 border-gray-50"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Content */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="bg-white md:hidden overflow-hidden"
                    >
                        <div className="flex flex-col items-center gap-8 py-10 px-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="font-black text-3xl text-brand-dark tracking-tighter"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="/reserva"
                                className="w-full text-center bg-brand-sunshine text-brand-dark py-5 rounded-[2rem] font-black text-2xl shadow-[0_8px_0_0_#EAB308]"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                ¡Reservar Ahora!
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
