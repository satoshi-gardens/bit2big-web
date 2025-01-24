import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Download from "@/components/Download";
import Footer from "@/components/Footer";
import Scene3D from "@/components/Scene3D";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <Scene3D />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Features />
        <Testimonials />
        <Download />
        <Footer />
      </div>
    </div>
  );
};

export default Index;