import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Building, Users, Globe } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <section className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            About bit2Big
          </h1>
          <p className="text-lg text-white/60 max-w-3xl mx-auto">
            Leading IT consulting and technology solutions provider across Africa and Europe
          </p>
        </section>

        <section className="mb-20">
          <div className="glass-effect rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Building className="w-8 h-8 text-[#F2FF44]" />
                  <h2 className="text-2xl font-bold">Our Company</h2>
                </div>
                <p className="text-white/80">
                  Founded with a vision to bridge the technological gap between continents, 
                  bit2Big has established itself as a premier technology solutions provider. 
                  Our commitment to excellence and innovation drives us to deliver 
                  cutting-edge solutions that empower businesses across Africa and Europe.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Users className="w-8 h-8 text-[#F2FF44]" />
                  <h2 className="text-2xl font-bold">Our Team</h2>
                </div>
                <p className="text-white/80">
                  Our diverse team of experts brings together decades of combined experience 
                  in IT consulting, cybersecurity, blockchain technology, and artificial 
                  intelligence. We're united by our passion for technology and commitment 
                  to delivering exceptional results for our clients.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <div className="flex items-center gap-4 mb-6">
                <Globe className="w-8 h-8 text-[#F2FF44]" />
                <h2 className="text-2xl font-bold">Global Presence</h2>
              </div>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="glass-effect p-6 rounded-xl">
                  <h3 className="font-semibold mb-2">Switzerland (HQ)</h3>
                  <p className="text-white/60">Our global headquarters, leading innovation and strategy</p>
                </div>
                <div className="glass-effect p-6 rounded-xl">
                  <h3 className="font-semibold mb-2">Uganda</h3>
                  <p className="text-white/60">East African hub for technology solutions</p>
                </div>
                <div className="glass-effect p-6 rounded-xl">
                  <h3 className="font-semibold mb-2">Nigeria</h3>
                  <p className="text-white/60">West African center for digital transformation</p>
                </div>
                <div className="glass-effect p-6 rounded-xl">
                  <h3 className="font-semibold mb-2">Rwanda</h3>
                  <p className="text-white/60">Innovation center for emerging technologies</p>
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

export default AboutUs;