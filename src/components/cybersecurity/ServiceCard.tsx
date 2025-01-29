import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  techStack: string[];
  detailedInfo: string;
}

const ServiceCard = ({ icon, title, description, techStack, detailedInfo }: ServiceCardProps) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <Card className="h-full p-6 bg-gray-800 hover:bg-gray-700 transition-colors border-gray-700">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
              {icon}
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
            <p className="text-gray-300 mb-4">{description}</p>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, techIndex) => (
                <span key={techIndex} className="px-2 py-1 bg-blue-500/10 text-blue-300 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </Card>
        </div>
        <div className="flip-card-back">
          <Card className="h-full p-6 bg-gray-800 border-gray-700">
            <div className="flex flex-col h-full justify-center">
              <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
              <p className="text-gray-300 mb-6">{detailedInfo}</p>
              <div className="mt-auto">
                <Link to="/contact">
                  <Button className="w-full bg-blue-500 hover:bg-blue-600">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;