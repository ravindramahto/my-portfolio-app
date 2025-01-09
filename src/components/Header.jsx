import React from 'react';

const Header = () => {
  return <>
    <header className="fixed top-0 left-0 right-0 bg-gray-800 text-white shadow-lg z-50">
      <nav className="w-full px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold">Logo</span>
          </div>
          
          <div className="flex space-x-6">
            <a href="/" className="hover:text-gray-300 px-3 py-2 font-medium">Home</a>
            <a href="/about" className="hover:text-gray-300 px-3 py-2 font-medium">About</a>
            <a href="/services" className="hover:text-gray-300 px-3 py-2 font-medium">Services</a>
            <a href="/contact" className="hover:text-gray-300 px-3 py-2 font-medium">Contact</a>
          </div>
        </div>
      </nav>
    </header>
 
  </>;
};

export default Header;

