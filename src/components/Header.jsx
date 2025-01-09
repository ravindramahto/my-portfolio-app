import React from 'react';

const Header = () => {
  return <>
   
   <header className="bg-gray-800 text-white w-full">
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold">Logo</span>
          </div>
          
          <div className="flex space-x-4">
            <a href="/" className="hover:text-gray-300 px-3 py-2">Home</a>
            <a href="/about" className="hover:text-gray-300 px-3 py-2">About</a>
            <a href="/services" className="hover:text-gray-300 px-3 py-2">Services</a>
            <a href="/contact" className="hover:text-gray-300 px-3 py-2">Contact</a>
          </div>
        </div>
      </nav>
    </header>
 
  </>;
};

export default Header;

