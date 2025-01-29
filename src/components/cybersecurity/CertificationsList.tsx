import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CertificationsListProps {
  certifications: string[];
}

const CertificationsList = ({ certifications }: CertificationsListProps) => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-white mb-6">Professional Certifications</h2>
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {certifications.map((cert, index) => (
          <span key={index} className="px-4 py-2 bg-blue-500/10 text-blue-300 rounded-full">
            {cert}
          </span>
        ))}
      </div>
      <Link to="/contact">
        <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 rounded-full text-lg">
          Schedule a Security Consultation
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </Link>
    </div>
  );
};

export default CertificationsList;