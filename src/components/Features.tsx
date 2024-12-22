import { Card } from "@/components/ui/card";
import { Shield, Brain, Code, Terminal } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6 text-white" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions including Awareness Training, Assessments, and SecOps Implementation."
    },
    {
      icon: <Code className="w-6 h-6 text-white" />,
      title: "Blockchain",
      description: "Expert services in Blockchain Development, Professional Training, and Cryptocurrency Trading guidance."
    },
    {
      icon: <Brain className="w-6 h-6 text-white" />,
      title: "AI & Training",
      description: "Cutting-edge AI training programs and specialized courses in Cryptocurrency Trading and Cybersecurity."
    },
    {
      icon: <Terminal className="w-6 h-6 text-white" />,
      title: "IT Consulting",
      description: "Professional consulting in DevOps, SecOps, Linux hardening, and comprehensive IT solutions."
    }
  ];

  return (
    <div className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white">
              Empowering Digital Transformation
            </h2>
            <p className="text-xl text-white/60">
              As a Swiss company expanding across Africa, we bridge the technological gap through comprehensive blockchain solutions, cybersecurity services, and cutting-edge AI training programs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="p-6 hover-lift glass-effect flex items-start gap-4 group transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-white/60">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;