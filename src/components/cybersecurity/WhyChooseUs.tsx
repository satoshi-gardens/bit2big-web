import { CheckCircle2 } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <div className="bg-gray-800/50 rounded-xl p-8 mb-16">
      <h2 className="text-2xl font-bold text-white mb-6">Why Choose Our Cybersecurity Services?</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex items-start space-x-4">
          <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Proven Expertise</h3>
            <p className="text-gray-300">Over 10 years of experience in implementing enterprise-grade security solutions</p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Industry Certifications</h3>
            <p className="text-gray-300">Certified professionals with up-to-date industry credentials</p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">24/7 Support</h3>
            <p className="text-gray-300">Round-the-clock security monitoring and incident response</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;