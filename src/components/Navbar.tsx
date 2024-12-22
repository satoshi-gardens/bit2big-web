import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-background/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold text-white">bit2Big</div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-white/80 hover:text-white transition-colors">Cybersecurity</a>
          <a href="#" className="text-white/80 hover:text-white transition-colors">Blockchain</a>
          <a href="#" className="text-white/80 hover:text-white transition-colors">AI & Training</a>
          <a href="#" className="text-white/80 hover:text-white transition-colors">IT Consulting</a>
          <Button 
            className="bg-[#F2FF44] text-black hover:bg-[#E2EF34] flex items-center gap-2"
            onClick={() => window.location.href = 'mailto:contact@bit2big.com'}
          >
            Contact Us
            <Mail className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;