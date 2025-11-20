import { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  // Function to handle smooth scrolling
  const handleScrollTo = (href) => {
    setIsMenuOpen(false); // Close mobile menu if open
    
    // Remove the '#' from the href
    const targetId = href.substring(1);
    
    // Find the target element
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      // Use scrollIntoView with smooth behavior
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      // If element not found, scroll to top for home
      if (targetId === 'home') {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <motion.nav
      className="fixed top-0 z-50  w-full
             bg-gradient-to-b from-black/100 transition-all duration-300 ease-in-out"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >

      <div className="container mx-auto px-4 md:px-20">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <button
              onClick={() => handleScrollTo('#home')}
              className="text-white font-bold tracking-wide text-xl"
              style={{ fontFamily: 'Arial, sans-serif' }}
            >
              GlowFit
            </button>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  onClick={() => handleScrollTo(link.href)}
                  className="text-white hover:text-gray-300 px-1 py-2 text-sm font-medium border-b-2 border-transparent hover:border-white"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1, type: "spring", stiffness: 400, damping: 10 }}
                >
                  {link.name}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 focus:outline-none"
              whileTap={{ scale: 0.9 }}
            >
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6 transition-transform duration-300 ease-in-out`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6 transition-transform duration-300 ease-in-out`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-40 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      
      {/* Mobile Menu Slide Panel */}
      <motion.div
        className="fixed top-0 left-0 h-full w-full bg-black shadow-lg z-50 md:hidden"
        initial={{ x: "-100%" }}
        animate={{ x: isMenuOpen ? 0 : "-100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-white hover:text-[#FFD36E] p-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="flex flex-col h-full pt-0">
          <div className="flex flex-col h-full pb-16">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.name}
                onClick={() => {
                  handleScrollTo(link.href);
                  setIsMenuOpen(false); // Close menu when item is clicked
                }}
                className="text-white hover:text-[#FFD36E] block px-3 py-4 text-center text-xl font-medium w-full max-w-md"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ x: 10 }}
              >
                {link.name}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;