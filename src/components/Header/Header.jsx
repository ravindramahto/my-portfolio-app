import { useState } from 'react';
import { Link,NavLink} from 'react-router-dom'; 
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    // { path: '/', text: 'Home' },
    { path: '/about', text: 'About' },
    { path: '/skills', text: 'Skills' },
    { path: '/education', text: 'Education' },
    { path: '/contact', text: 'Contact' }
  ];
  return (
    
    <header className="fixed top-0 left-0 right-0 bg-gray-800 text-white shadow-lg z-50">
      <nav className="w-full px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">

            <Link to="/" className="text-2xl font-bold font-serif tracking-wider hover:text-blue-400 transition-colors duration-300">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
                <mark className="bg-transparent">
                  <span className="font-mono text-xl transition-transform duration-300 hover:scale-125 inline-block">{'<'}</span>
                  <em className="font-sans italic text-2xl bg-gradient-to-r from-orange-400 to-green-500 bg-clip-text text-transparent">
                    <span className="animate-[blink_1s_ease-in-out_infinite] transition-transform duration-300 hover:scale-150 text-red-500 font-bold text-2xl inline-block font-serif">R</span>
                    <span className="transition-transform duration-300 hover:scale-150 text-yellow-300 inline-block">a</span>
                    <span className="transition-transform duration-300 hover:scale-150 text-yellow-300 inline-block">v</span>
                    <span className="transition-transform duration-300 hover:scale-150 text-yellow-300 inline-block">i</span>
                    <span className="transition-transform duration-300 hover:scale-150 text-yellow-300 inline-block font-serif">n</span>
                    <span className="transition-transform duration-300 hover:scale-150 text-yellow-300 inline-block">d</span>
                    <span className="transition-transform duration-300 hover:scale-150 text-yellow-300 inline-block">r</span>
                    <span className="transition-transform duration-300 hover:scale-150 text-yellow-300 inline-block">a</span>
                  </em>
                  <span className="font-mono text-xl transition-transform duration-300 hover:scale-125 inline-block">{'/>'}</span>
                  {' '}
                  <span className="font-mono text-xl transition-transform duration-300 hover:scale-125 inline-block">{'<'}</span>
                  <strong className="font-sans text-2xl bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text text-transparent">
                    <span className="transition-transform duration-300 hover:scale-125 inline-block text-transparent bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text">M</span>
                    <span className="transition-transform duration-300 hover:scale-125 inline-block text-transparent bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text">a</span>
                    <span className="transition-transform duration-300 hover:scale-125 inline-block text-transparent bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text">h</span>
                    <span className="transition-transform duration-300 hover:scale-125 inline-block text-transparent bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text">t</span>
                    <span className="transition-transform duration-300 hover:scale-125 inline-block text-transparent bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text">o</span>
                  </strong>
                  <span className="font-mono text-xl transition-transform duration-300 hover:scale-125 inline-block">{'/>'}</span>
                </mark>
              </span>
            </Link>
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
            {/* <a href="/" className="hover:text-gray-300 px-3 py-2 font-medium">Home</a>
            <a href="/about" className="hover:text-gray-300 px-3 py-2 font-medium">About</a>
            <a href="/services" className="hover:text-gray-300 px-3 py-2 font-medium">Services</a>
            <a href="/contact" className="hover:text-gray-300 px-3 py-2 font-medium">Contact</a> */}
         {navLinks.map((link) => (
          
              <NavLink 
                key={link.path}
                to={link.path}
                className={({ isActive }) => 
                  `px-3 py-2 font-medium transition-all duration-300 transform hover:scale-110 ${
                    isActive ? 'text-transparent bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text hover:from-orange-600 hover:to-green-600' : 'text-gray-300 hover:text-white'
                  }`
                }
              >
                <span className="open">&lt;</span><span className="hover:scale-110 inline-block transition-transform duration-300">{link.text}</span><span className="close">/&gt;</span>
              </NavLink>
            ))}
            <Link 
              to="/contact"
              className="bg-gradient-to-r from-orange-500 to-green-500 text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:translate-y-[-2px] hover:shadow-xl hover:from-orange-600 hover:to-green-600 hover:ring-2 hover:ring-green-400 hover:ring-opacity-50 active:scale-95 active:translate-y-0 active:shadow-inner"
            >
              Hire Me
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
          {/* <div className="px-2 pt-2 pb-3 space-y-1">
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
          </div> */}
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <NavLink 
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => 
                  `block px-3 py-2 rounded-md font-medium ${
                    isActive ? 'bg-gray-900 text-white' : 'hover:bg-gray-700 hover:text-white'
                  }`
                }
              >
                {link.text}
              </NavLink>
            ))} 
             <Link 
              to="/contact"
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:translate-y-[-2px] hover:shadow-xl hover:from-blue-600 hover:to-blue-700 hover:ring-2 hover:ring-blue-400 hover:ring-opacity-50 active:scale-95 active:translate-y-0 active:shadow-inner"
            >
              Hire Me
            </Link>
          </div>
          
        </div>
      </nav>
    </header>
  );
};

export default Header;