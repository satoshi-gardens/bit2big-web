import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield } from "lucide-react";
import ServiceCard from "@/components/cybersecurity/ServiceCard";
import WhyChooseUs from "@/components/cybersecurity/WhyChooseUs";
import CertificationsList from "@/components/cybersecurity/CertificationsList";
import { services, certifications } from "@/components/cybersecurity/ServicesData";

const Cybersecurity = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <Navbar />
      <div className="pt-20 px-4">
        <div className="max-w-7xl mx-auto py-20">
          <div className="text-center mb-16">
            <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Enterprise Cybersecurity Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive security solutions for modern enterprises, combining cutting-edge technology with decades of expertise in infrastructure, cloud, and compliance security.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <WhyChooseUs />
          <CertificationsList certifications={certifications} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cybersecurity;