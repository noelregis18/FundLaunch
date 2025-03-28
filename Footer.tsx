
import { Link } from "react-router-dom";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">FundLaunch</h3>
            <p className="text-gray-400">
              Empowering creators and innovators to bring their ideas to life through community support.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/noelregis18" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/noel-regis-aa07081b1/" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/campaigns" className="text-gray-400 hover:text-white transition-colors">
                  Explore Campaigns
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-400 hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/campaigns?category=tech" className="text-gray-400 hover:text-white transition-colors">
                  Technology
                </Link>
              </li>
              <li>
                <Link to="/campaigns?category=arts" className="text-gray-400 hover:text-white transition-colors">
                  Arts & Culture
                </Link>
              </li>
              <li>
                <Link to="/campaigns?category=community" className="text-gray-400 hover:text-white transition-colors">
                  Community Projects
                </Link>
              </li>
              <li>
                <Link to="/campaigns?category=health" className="text-gray-400 hover:text-white transition-colors">
                  Health & Wellness
                </Link>
              </li>
              <li>
                <Link to="/campaigns?category=education" className="text-gray-400 hover:text-white transition-colors">
                  Education
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail size={16} />
                <a href="mailto:noel.regis04@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  noel.regis04@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={16} />
                <a href="tel:7319546900" className="text-gray-400 hover:text-white transition-colors">
                  +91 7319546900
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Github size={16} />
                <a href="https://github.com/noelregis18" className="text-gray-400 hover:text-white transition-colors">
                  github.com/noelregis18
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Linkedin size={16} />
                <a href="https://www.linkedin.com/in/noel-regis-aa07081b1/" className="text-gray-400 hover:text-white transition-colors truncate">
                  linkedin.com/in/noel-regis-aa07081b1
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} FundLaunch. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
