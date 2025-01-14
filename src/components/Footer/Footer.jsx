import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 w-full fixed bottom-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          {/* Social Links */}
          <div className="flex space-x-6">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
              <FaInstagram size={24} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Ravindra Mahto. All rights reserved.
          </p>
        </div>
      <style>
        {`
          .social-icon {
            color: #4ade80;
            transition: transform 0.3s ease;
          }
          .social-icon:hover {
            transform: scale(1.2);
            color: #22c55e;
          }
        `}
      </style>
      </div>
    </footer>
  );
};

export default Footer;

