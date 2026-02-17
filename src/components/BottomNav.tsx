"use client";

import { motion } from "framer-motion";
import { Home, Sparkles, Play, MessageCircle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BottomNav = () => {
    const pathname = usePathname();

    const navItems = [
        { name: "Inicio", href: "/", icon: <Home size={24} />, activeColor: "text-brand-sky" },
        { name: "Servicios", href: "/servicios", icon: <Sparkles size={24} />, activeColor: "text-brand-joy" },
        { name: "Videos", href: "/videos", icon: <Play size={24} />, activeColor: "text-brand-leaf" },
        { name: "Reservar", href: "/reserva", icon: <MessageCircle size={24} />, isMain: true },
    ];

    return (
        <div className="md:hidden fixed bottom-0 inset-x-0 z-[60]">
            <motion.nav
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                className="bg-white/95 backdrop-blur-xl flex items-center justify-around py-3 border-t-2 border-gray-50 shadow-[0_-10px_30px_rgba(0,0,0,0.03)] pb-[env(safe-area-inset-bottom)]"
            >
                {navItems.map((item) => {
                    const isActive = pathname === item.href;

                    if (item.isMain) {
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="flex flex-col items-center gap-1 group relative -mt-8"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="w-16 h-16 bg-brand-sunshine text-brand-dark rounded-full flex items-center justify-center shadow-lg border-4 border-white z-10"
                                >
                                    {item.icon}
                                </motion.div>
                                <span className={`text-[11px] font-black ${isActive ? "text-brand-sunshine" : "text-gray-500"}`}>
                                    {item.name}
                                </span>
                            </Link>
                        );
                    }

                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="flex flex-col items-center gap-1 min-w-[70px]"
                        >
                            <motion.div
                                whileTap={{ scale: 0.9 }}
                                className={`p-1 transition-colors ${isActive ? item.activeColor : "text-gray-500"}`}
                            >
                                {item.icon}
                            </motion.div>
                            <span className={`text-[11px] font-black ${isActive ? item.activeColor : "text-gray-500"}`}>
                                {item.name}
                            </span>
                        </Link>
                    );
                })}
            </motion.nav>
        </div>
    );
};




export default BottomNav;
