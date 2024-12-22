import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Database, Code, GraduationCap, LineChart } from "lucide-react";
import { Card } from "@/components/ui/card";

const Blockchain = () => {
  const services = [
    {
      icon: <Code className="w-6 h-6 text-white" />,
      title: "Blockchain Development",
      description: "Custom blockchain solutions and smart contract development for your business needs."
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-white" />,
      title: "Professional Training",
      description: "Comprehensive blockchain technology training programs for individuals and organizations."
    },
    {
      icon: <LineChart className="w-6 h-6 text-white" />,
      title: "Cryptocurrency Trading",
      description: "Expert guidance and training in cryptocurrency trading strategies."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 px-4">
        <div className="max-w-7xl mx-auto py-20">
          <div className="text-center mb-16">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
              <Database className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Blockchain Solutions</h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Bridging the gap between traditional finance and digital assets through innovative blockchain solutions.
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

export default Blockchain;