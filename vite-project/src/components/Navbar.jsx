import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10' : 'bg-black/50 backdrop-blur-sm'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16">

          {/* 5 Equal Spaced Buttons - Desktop */}
          <div className="hidden lg:flex items-center justify-center w-full space-x-12 xl:space-x-16">
            <a href="#home" className="text-white hover:text-blue-300 transition-colors duration-200 font-medium text-sm xl:text-base">
              Home
            </a>
            <a href="#about" className="text-white hover:text-blue-300 transition-colors duration-200 font-medium text-sm xl:text-base">
              About
            </a>
            <a href="#services" className="text-white hover:text-blue-300 transition-colors duration-200 font-medium text-sm xl:text-base">
              Services
            </a>
            <a href="#gallery" className="text-white hover:text-blue-300 transition-colors duration-200 font-medium text-sm xl:text-base">
              Gallery
            </a>
            <a href="#contact" className="text-white hover:text-blue-300 transition-colors duration-200 font-medium text-sm xl:text-base">
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex justify-between items-center w-full">
            <div className="flex items-center">
              <span className="text-white font-semibold text-lg">Menu</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-blue-300 transition-colors p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/90 backdrop-blur-md">
              <a href="#home" className="text-white hover:text-blue-300 block px-3 py-2 text-base font-medium transition-colors">
                Home
              </a>
              <a href="#about" className="text-white hover:text-blue-300 block px-3 py-2 text-base font-medium transition-colors">
                About
              </a>
              <a href="#services" className="text-white hover:text-blue-300 block px-3 py-2 text-base font-medium transition-colors">
                Services
              </a>
              <a href="#gallery" className="text-white hover:text-blue-300 block px-3 py-2 text-base font-medium transition-colors">
                Gallery
              </a>
              <a href="#contact" className="text-white hover:text-blue-300 block px-3 py-2 text-base font-medium transition-colors">
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;