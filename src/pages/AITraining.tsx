import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Brain, Bot, Lightbulb, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AITraining = () => {
  const services = [
    {
      icon: <Bot className="w-6 h-6 text-white" />,
      title: "AI Fundamentals",
      description: "Comprehensive introduction to artificial intelligence and machine learning concepts."
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-white" />,
      title: "Applied AI",
      description: "Practical applications of AI in business and technology scenarios."
    },
    {
      icon: <Brain className="w-6 h-6 text-white" />,
      title: "Custom Training Programs",
      description: "Tailored AI training solutions for organizations and individuals."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 px-4">
        <div className="max-w-7xl mx-auto py-20">
          <div className="text-center mb-16">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">AI & Training</h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Empowering individuals and organizations with cutting-edge AI knowledge and skills.
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

          <div className="mt-20 bg-accent/5 rounded-xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <BookOpen className="w-8 h-8 text-[#F2FF44]" />
              <h2 className="text-2xl font-bold text-white">Cryptocurrency Trading Course</h2>
            </div>
            <div className="space-y-6">
              <p className="text-white/80">
                Our comprehensive cryptocurrency course combines AI, cybersecurity, and blockchain expertise into one powerful learning experience. Master the fundamentals of crypto trading while understanding the underlying technologies.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-primary/20 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-white mb-2">AI Integration</h3>
                  <p className="text-white/60">Learn how AI enhances trading strategies and market analysis</p>
                </div>
                <div className="bg-primary/20 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-white mb-2">Security Modules</h3>
                  <p className="text-white/60">Master cybersecurity best practices for safe trading</p>
                </div>
                <div className="bg-primary/20 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-white mb-2">Trading Fundamentals</h3>
                  <p className="text-white/60">Develop strong trading skills with practical exercises</p>
                </div>
              </div>
              <div className="flex justify-center mt-8">
                <Button 
                  className="bg-[#F2FF44] text-black hover:bg-[#E2EF34]"
                  onClick={() => window.open('https://cryptocourse.bit2big.com/', '_blank')}
                >
                  Explore Course
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AITraining;