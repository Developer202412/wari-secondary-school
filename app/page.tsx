import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import FoundationIntro from "@/components/home/FoundationIntro";
import Pillars from "@/components/home/Pillars";
import AcademicExcellence from "@/components/home/AcademicExcellence";
import CombinationExplorer from "@/components/home/CombinationExplorer";
import WhyWari from "@/components/home/WhyWari";
import CampusLife from "@/components/home/CampusLife";
import AcademicResults from "@/components/home/AcademicResults";
import HeadMessage from "@/components/home/HeadMessage";
import StaffDirectory from "@/components/home/StaffDirectory"; // Import mpya
import CatholicIdentity from "@/components/home/CatholicIdentity";
import NewsEvents from "@/components/home/NewEvents";
import Gallery from "@/components/home/Gallery";
import AdmissionsCTA from "@/components/home/AdmissionCTA";
import Contact from "@/components/home/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FoundationIntro />
      <Pillars />
      <AcademicExcellence />
      <CombinationExplorer />
      <WhyWari />
      <CampusLife />
      <AcademicResults />
      <HeadMessage />
      <StaffDirectory /> {/* Weka Staff Directory hapa mara baada ya Ujumbe wa Mkuu wa Shule */}
      <CatholicIdentity />
      <NewsEvents />
      <Gallery />
      <AdmissionsCTA />
      <Contact />
      <Footer />
    </main>
  );
}