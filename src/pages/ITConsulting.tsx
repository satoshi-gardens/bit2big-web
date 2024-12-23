import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, Cloud, Globe, Code, Shield } from "lucide-react";

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
                <h2 className="text-3xl font-bold">Additional Services</h2>
                <div className="grid gap-6">
                  <div className="glass-effect p-6 rounded-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <Globe className="w-6 h-6 text-[#F2FF44]" />
                      <h3 className="font-semibold text-xl">Website Hosting & Development</h3>
                    </div>
                    <p className="text-white/60">Professional website hosting solutions and custom web development services for businesses of all sizes. We build scalable platforms tailored to your needs.</p>
                  </div>
                  
                  <div className="glass-effect p-6 rounded-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <Code className="w-6 h-6 text-[#F2FF44]" />
                      <h3 className="font-semibold text-xl">Platform Development</h3>
                    </div>
                    <p className="text-white/60">Custom platform development services including e-commerce solutions, learning management systems, and enterprise applications.</p>
                  </div>
                  
                  <div className="glass-effect p-6 rounded-xl">
                    <div className="flex items-center gap-3 mb-3">
                      <Cloud className="w-6 h-6 text-[#F2FF44]" />
                      <h3 className="font-semibold text-xl">Cloud Security</h3>
                    </div>
                    <p className="text-white/60">Comprehensive cloud security solutions to protect your digital assets, ensure compliance, and maintain data integrity across cloud platforms.</p>
                  </div>
                </div>
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