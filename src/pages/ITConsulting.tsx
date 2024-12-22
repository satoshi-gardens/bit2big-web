import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Server, Terminal, Shield, Settings } from "lucide-react";
import { Card } from "@/components/ui/card";

const ITConsulting = () => {
  const services = [
    {
      icon: <Terminal className="w-6 h-6 text-white" />,
      title: "DevOps Services",
      description: "Streamline your development and operations with expert DevOps consulting."
    },
    {
      icon: <Shield className="w-6 h-6 text-white" />,
      title: "SecOps Implementation",
      description: "Integrate security into your operations with comprehensive SecOps solutions."
    },
    {
      icon: <Settings className="w-6 h-6 text-white" />,
      title: "Linux Hardening",
      description: "Professional Linux system hardening and security optimization services."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 px-4">
        <div className="max-w-7xl mx-auto py-20">
          <div className="text-center mb-16">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
              <Server className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">IT Consulting</h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Expert IT consulting services to optimize your technology infrastructure and security.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 bg-primary hover:bg-primary/80 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-white/60">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ITConsulting;