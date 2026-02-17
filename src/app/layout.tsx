import type { Metadata } from "next";
import { Quicksand, Caveat, Fredoka } from "next/font/google";
import "./globals.css";
import BottomNav from "@/components/BottomNav";

const quicksand = Quicksand({
    subsets: ["latin"],
    variable: '--font-quicksand',
});

const caveat = Caveat({
    subsets: ["latin"],
    variable: '--font-caveat',
});

const fredoka = Fredoka({
    subsets: ["latin"],
    variable: '--font-fredoka',
});


export const metadata: Metadata = {
    title: "Miss Ely 💚 | Diversión Mágica y aprendizaje",
    description: "Animación profesional de eventos y educación inicial con mucho amor y profesionalismo.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es" className="scroll-smooth">
            <head>
                <link rel="preconnect" href="https://tubarrio.pe" />
                <link rel="dns-prefetch" href="https://tubarrio.pe" />
            </head>
            <body className={`${fredoka.variable} ${quicksand.variable} ${caveat.variable} font-fredoka bg-white antialiased pb-24 md:pb-0 text-brand-dark`}>
                {children}
                <BottomNav />
            </body>
        </html>
    );
}

