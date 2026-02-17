import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";

export default function Home() {
    return (
        <main className="min-h-screen rainbow-mesh">
            <Navbar />
            <Hero />
            <Services />
            <WhyChoose />
            <CTA />
            <Footer />
            <BottomNav />
        </main>
    );
}

