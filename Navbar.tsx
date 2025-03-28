
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm py-4 px-6 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">
          FundLaunch
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/campaigns" className="text-gray-700 hover:text-primary transition-colors">
            Explore
          </Link>
          <Link to="/how-it-works" className="text-gray-700 hover:text-primary transition-colors">
            How It Works
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-primary transition-colors">
            Contact
          </Link>
          <Button className="bg-primary hover:bg-primary/90 text-white" asChild>
            <Link to="/start-campaign">Start a Campaign</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md mt-4 py-4 px-6 absolute left-0 right-0 z-50">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/campaigns" 
              className="text-gray-700 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Explore
            </Link>
            <Link 
              to="/how-it-works" 
              className="text-gray-700 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button 
              className="bg-primary hover:bg-primary/90 text-white w-full" 
              asChild
              onClick={() => setIsMenuOpen(false)}
            >
              <Link to="/start-campaign">Start a Campaign</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
