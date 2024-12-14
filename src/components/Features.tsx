import { Card } from "@/components/ui/card";
import { Wallet, Shield, CreditCard } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Wallet className="w-6 h-6 text-white" />,
      title: "Blockchain Solutions",
      description: "Connect to a financial highway with our blockchain solutions, sparking new business opportunities and success."
    },
    {
      icon: <Shield className="w-6 h-6 text-white" />,
      title: "Digital Finance",
      description: "World-class global Digital Finance Solutions based on Blockchain and Cryptocurrency Investment."
    },
    {
      icon: <CreditCard className="w-6 h-6 text-white" />,
      title: "Training & Education",
      description: "International Accredited Blockchain Trainings and community meetups to bridge the knowledge gap."
    }
  ];

  return (
    <div className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white">
              Empowering Africa Through Blockchain Technology
            </h2>
            <p className="text-xl text-white/60">
              We believe we can close the missing link between individuals and the financial world with Blockchain technology, making digital finance services accessible to all.
            </p>
          </div>
          <div className="grid gap-6">
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