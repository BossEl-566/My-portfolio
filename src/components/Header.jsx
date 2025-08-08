import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [activeLink, setActiveLink] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavClick = (path) => {
    setActiveLink(path);
    setMobileMenuOpen(false); // Close menu when a link is clicked
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? "bg-gray-900/95 backdrop-blur-md py-2 shadow-xl" : "bg-gray-900/80 py-4"}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-2"
        >
          <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xs">ED</span>
          </div>
          <span className="text-white font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-300">
            ElliotPortfolio
          </span>
        </motion.div>

        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative px-4 py-2 rounded-lg transition-all duration-300 group ${activeLink === item.path ? "text-white" : "text-gray-300 hover:text-white"}`}
              onClick={() => setActiveLink(item.path)}
            >
              {item.name}
              {activeLink === item.path && (
                <motion.span 
                  layoutId="activeLink"
                  className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-blue-400"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {activeLink !== item.path && (
                <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-400 transition-all duration-300 group-hover:w-full group-hover:left-0" />
              )}
            </Link>
          ))}
        </nav>

        <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="hidden md:block px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:from-purple-500 hover:to-blue-400"
  onClick={() => {
    const phoneNumber = "233594538949"; 
    const message = "Hello, I’m interested in hiring you!";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank"); 
  }}
>
  Hire Me
</motion.button>


        {/* Mobile menu button */}
        <button 
          onClick={toggleMobileMenu}
          className="md:hidden text-gray-300 hover:text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-6 py-4 space-y-1 bg-gray-900/95 backdrop-blur-md">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-4 py-3 rounded-lg transition-all duration-300 ${activeLink === item.path ? "text-white bg-gray-800" : "text-gray-300 hover:text-white hover:bg-gray-800/50"}`}
                  onClick={() => handleNavClick(item.path)}
                >
                  {item.name}
                </Link>
              ))}
              <button
  className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-full font-medium shadow-lg transition-all duration-300"
  onClick={() => {
    const phoneNumber = "233594538949"; // Replace with your number
    const message = "Hello, I’d like to hire you!";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  }}
>
  Hire Me
              </button>


            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;