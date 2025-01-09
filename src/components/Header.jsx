import React from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-800 text-white shadow-lg z-50">
      <nav className="w-full px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold">Logo</span>
          </div>
          
          {/* Hamburger Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 hover:bg-gray-700 rounded"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6">
            <a href="/" className="hover:text-gray-300 px-3 py-2 font-medium">Home</a>
            <a href="/about" className="hover:text-gray-300 px-3 py-2 font-medium">About</a>
            <a href="/services" className="hover:text-gray-300 px-3 py-2 font-medium">Services</a>
            <a href="/contact" className="hover:text-gray-300 px-3 py-2 font-medium">Contact</a>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="/" className="block hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium">
              Home
            </a>
            <a href="/about" className="block hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium">
              About
            </a>
            <a href="/services" className="block hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium">
              Services
            </a>
            <a href="/contact" className="block hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
 
  );
};

export default Header;

