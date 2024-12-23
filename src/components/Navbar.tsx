import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-background/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-white">bit2Big</Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/it-consulting" className="text-white/80 hover:text-white transition-colors">IT Consulting</Link>
          <Link to="/cybersecurity" className="text-white/80 hover:text-white transition-colors">Cybersecurity</Link>
          <Link to="/blockchain" className="text-white/80 hover:text-white transition-colors">Blockchain</Link>
          <Link to="/ai-training" className="text-white/80 hover:text-white transition-colors">AI & Training</Link>
          <Link to="/contact">
            <Button 
              className="bg-[#F2FF44] text-black hover:bg-[#E2EF34] flex items-center gap-2"
            >
              Contact Us
              <Mail className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;