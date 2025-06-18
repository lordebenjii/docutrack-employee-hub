
import { Link } from "react-router-dom";
import { Zap, Phone, Mail, Map } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">VoltEdge Kenya</span>
            </div>
            <p className="text-gray-300 mb-4">
              Powering Kenya with smart, sustainable energy solutions. Your trusted partner for electrical consultancy, installations, and energy audits.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+254 700 123 456</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@voltedgekenya.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-white">Services</Link></li>
              <li><Link to="/projects" className="text-gray-300 hover:text-white">Projects</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Energy Audits</li>
              <li>Solar Installations</li>
              <li>Smart Grid Solutions</li>
              <li>Electrical Maintenance</li>
              <li>Power System Design</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300">
            © 2024 VoltEdge Kenya. All rights reserved. Licensed by ERC Kenya.
          </p>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <Map className="h-4 w-4" />
            <span className="text-gray-300">Nairobi, Kenya</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
