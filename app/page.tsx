import { LangProvider } from "@/lib/LangContext";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Floors from "@/components/Floors";
import Gallery from "@/components/Gallery";
import Conditions from "@/components/Conditions";
import Advantages from "@/components/Advantages";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <LangProvider>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Floors />
        <Gallery />
        <Conditions />
        <Advantages />
        <Contact />
      </main>
      <Footer />
    </LangProvider>
  );
}
