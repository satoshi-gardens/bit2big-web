import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Download = () => {
  const handleScheduleCall = () => {
    window.open("https://calendly.com/bit2big/15min", "_blank");
  };

  return (
    <div className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Let's Transform Your Digital Future
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Ready to elevate your business with cutting-edge blockchain solutions, robust cybersecurity, and expert IT consulting? Contact us today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="px-8 py-6 text-lg bg-white text-black hover:bg-white/90 flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Contact Us
              </Button>
            </Link>
            <Button 
              onClick={handleScheduleCall}
              className="px-8 py-6 text-lg glass-effect hover:bg-white/10 flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Schedule a Call
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;