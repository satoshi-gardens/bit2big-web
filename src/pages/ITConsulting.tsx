import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check } from "lucide-react";

const ITConsulting = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <section className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            IT Consulting Services
          </h1>
          <p className="text-lg text-white/60 max-w-3xl mx-auto">
            Transform your business with our comprehensive IT consulting solutions
          </p>
        </section>

        <section className="mb-20">
          <div className="glass-effect rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Our Expertise</h2>
                <p className="text-white/80">
                  At bit2Big, we provide comprehensive IT consulting services that help 
                  businesses navigate the complex technology landscape. Our team of experts 
                  brings decades of experience in delivering innovative solutions across 
                  various industries.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#F2FF44]" />
                    <span>Digital Transformation Strategy</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#F2FF44]" />
                    <span>IT Infrastructure Optimization</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#F2FF44]" />
                    <span>Cloud Migration Services</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#F2FF44]" />
                    <span>Enterprise Architecture</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Why Choose Us</h2>
                <ul className="space-y-4">
                  <li className="glass-effect p-4 rounded-xl">
                    <h3 className="font-semibold mb-2">Global Expertise</h3>
                    <p className="text-white/60">International team with diverse industry experience</p>
                  </li>
                  <li className="glass-effect p-4 rounded-xl">
                    <h3 className="font-semibold mb-2">Tailored Solutions</h3>
                    <p className="text-white/60">Customized approach for your specific needs</p>
                  </li>
                  <li className="glass-effect p-4 rounded-xl">
                    <h3 className="font-semibold mb-2">Innovation Focus</h3>
                    <p className="text-white/60">Latest technologies and methodologies</p>
                  </li>
                  <li className="glass-effect p-4 rounded-xl">
                    <h3 className="font-semibold mb-2">Proven Track Record</h3>
                    <p className="text-white/60">Successful projects across multiple regions</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ITConsulting;