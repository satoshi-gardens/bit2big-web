import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Database, Lightbulb, GraduationCap, LineChart, ArrowRight, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Blockchain = () => {
  const services = [
    {
      icon: <Lightbulb className="w-6 h-6 text-white" />,
      title: "Web3 Consulting",
      description: "Strategic guidance and advisory services for businesses entering the Web3 space.",
      features: [
        "Web3 Strategy Development",
        "Technology Assessment",
        "Risk Analysis",
        "Implementation Roadmap"
      ]
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-white" />,
      title: "Professional Training",
      description: "Comprehensive blockchain technology training programs for individuals and organizations.",
      features: [
        "Blockchain Fundamentals",
        "Smart Contract Programming",
        "Cryptocurrency Trading",
        "DeFi Protocols"
      ]
    },
    {
      icon: <LineChart className="w-6 h-6 text-white" />,
      title: "Cryptocurrency Trading",
      description: "Expert guidance and training in cryptocurrency trading strategies.",
      features: [
        "Technical Analysis",
        "Risk Management",
        "Portfolio Strategy",
        "Market Analysis"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-20 px-4">
        <div className="max-w-7xl mx-auto py-20">
          <div className="text-center mb-16">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6 animate-float">
              <Database className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Web3 & Blockchain Solutions
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Empowering businesses with strategic Web3 consulting, professional training, and cryptocurrency trading expertise.
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="p-6 bg-primary hover:bg-primary/80 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-white/60 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-white/80">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <Card className="p-8 bg-accent/10 border-accent/20">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-white/60 mb-8 max-w-2xl mx-auto">
                Get expert guidance on Web3 strategy, professional blockchain training, or cryptocurrency trading insights.
              </p>
              <Link to="/contact">
                <Button 
                  className="bg-accent hover:bg-accent/80 text-white px-8 py-6 text-lg flex items-center gap-2"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blockchain;