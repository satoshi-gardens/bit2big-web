import { Github, Twitter, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <footer className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5 backdrop-blur-3xl"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">bit2Big</h3>
            <p className="text-white/60">
              Leading IT consulting and technology solutions provider across Africa and Europe.
            </p>
            <p className="text-white/60">
              CHE-226.490.316 MWST
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-white/10" onClick={() => window.open('https://twitter.com/bit2big', '_blank')}>
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10" onClick={() => window.open('https://github.com/bit2big', '_blank')}>
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10" onClick={() => window.open('https://www.linkedin.com/company/bit2big/', '_blank')}>
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/it-consulting" className="text-white/60 hover:text-white transition-colors">IT Consulting</Link></li>
              <li><Link to="/cybersecurity" className="text-white/60 hover:text-white transition-colors">Cybersecurity</Link></li>
              <li><Link to="/blockchain" className="text-white/60 hover:text-white transition-colors">Blockchain</Link></li>
              <li><Link to="/ai-training" className="text-white/60 hover:text-white transition-colors">AI & Training</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-white/60 hover:text-white transition-colors">About Us</Link></li>
              <li><a href="#careers" className="text-white/60 hover:text-white transition-colors">Careers</a></li>
              <li><Link to="/contact" className="text-white/60 hover:text-white transition-colors">Contact</Link></li>
              <li><a href="#blog" className="text-white/60 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact</h4>
            <ul className="space-y-2">
              <li className="text-white/60">Switzerland (HQ)</li>
              <li className="text-white/60">Uganda</li>
              <li className="text-white/60">Nigeria</li>
              <li className="text-white/60">Rwanda</li>
            </ul>
          </div>
          
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-center text-white/60">
            © 2025 bit2Big. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;