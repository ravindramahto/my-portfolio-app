import React from 'react';

const Header = () => {
  return <>
   
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Logo</div>
        <ul className="flex space-x-6">
          <li><a href="/" className="hover:text-gray-300">Home</a></li>
          <li><a href="/about" className="hover:text-gray-300">About</a></li>
          <li><a href="/services" className="hover:text-gray-300">Services</a></li>
          <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
        </ul>
      </nav>
    </header>
 
  </>;
};

export default Header;

