import React from 'react';
import { Link } from 'react-router-dom';
import { Radio, Phone, Mail, MapPin, Clock, Shield, Zap } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Radio className="h-8 w-8 text-blue-400" />
              <div>
                <h3 className="text-xl font-bold">COM-TEC</h3>
                <p className="text-sm text-gray-400">(U) LTD</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Leading provider of advanced communication and security solutions in Uganda, 
              trusted by businesses for reliable technology infrastructure.
            </p>
            <div className="flex space-x-3">
              <Shield className="h-5 w-5 text-blue-400" />
              <Zap className="h-5 w-5 text-green-400" />
            </div>
            <div className="flex space-x-3 mt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-500 transition-colors duration-200">
                <FontAwesomeIcon icon={faFacebookF} className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-blue-400 transition-colors duration-200">
                <FontAwesomeIcon icon={faTwitter} className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-300 transition-colors duration-200">
                <FontAwesomeIcon icon={faLinkedinIn} className="h-5 w-5" />
              </a>
              <a href="https://wa.me/256123456789" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-green-400 transition-colors duration-200">
                <FontAwesomeIcon icon={faWhatsapp} className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-blue-400 transition-colors duration-200">
                Home
              </Link>
              <Link to="/services" className="block text-gray-300 hover:text-blue-400 transition-colors duration-200">
                Services
              </Link>
              <Link to="/brands" className="block text-gray-300 hover:text-blue-400 transition-colors duration-200">
                Brands
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-blue-400 transition-colors duration-200">
                About Us
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <div className="space-y-2">
              <Link to="/services/communication" className="block text-gray-300 hover:text-blue-400 transition-colors duration-200">
                Communication Systems
              </Link>
              <Link to="/services/alarm" className="block text-gray-300 hover:text-blue-400 transition-colors duration-200">
                Alarm Systems
              </Link>
              <Link to="/services/security" className="block text-gray-300 hover:text-blue-400 transition-colors duration-200">
                Security Systems
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5" />
                <div>
                  <p className="text-gray-300 text-sm">Kampala, Uganda</p>
                  <p className="text-gray-400 text-xs">Professional Business District</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <p className="text-gray-300 text-sm">+256 (0) 123 456 789</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <p className="text-gray-300 text-sm">info@comtec.ug</p>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-blue-400" />
                <p className="text-gray-300 text-sm">Mon-Fri: 8AM-6PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 COM-TEC (U) LTD. All rights reserved. | Proudly serving Uganda with advanced technology solutions.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;