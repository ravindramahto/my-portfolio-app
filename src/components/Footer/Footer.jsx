import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <> 
    <footer className="bg-gray-800 text-white py-8 w-full fixed bottom-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          {/* Social Links */}
          <div className="flex space-x-6">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon hover:text-gradient-to-r from-purple-500 to-pink-500">
              <FaGithub size={24} className="transition-colors duration-300 hover:text-green-500" />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon hover:text-gradient-to-r from-blue-500 to-cyan-500">
              <FaLinkedin size={24} className="transition-colors duration-300 hover:text-orange-500" />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon hover:text-gradient-to-r from-blue-400 to-cyan-400">
              <FaTwitter size={24} className="transition-colors duration-300 hover:text-blue-400" />
            </a>
            <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon hover:text-gradient-to-r from-pink-500 to-yellow-500">
              <FaInstagram size={24} className="transition-colors duration-300 hover:text-pink-500" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Ravindra Mahto. All rights reserved. | <span className="bg-gradient-to-r from-green-400 via-orange-500 to-green-500 bg-clip-text text-transparent hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 transition-all duration-500 ease-in-out animate-pulse">Crafted by Ravindra Mahto</span>
          </p>
        </div>
     
      </div>
    </footer>
    </>
  );
};

export default Footer;

