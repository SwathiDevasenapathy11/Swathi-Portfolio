import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["home", "about", "experience", "projects", "contact"];

  return (
    <header className="fixed w-full max-w-[100vw] px-4 py-3 bg-[#0a192f] z-50  flex justify-center">
      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <ul className="flex space-x-4 lg:space-x-8">
          {navItems.map((item) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link
                to={item}
                smooth={true}
                duration={500}
                className="cursor-pointer capitalize hover:text-pink-600 transition-colors px-2 py-1"
              >
                {item}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Mobile Navigation Button */}
      <button
        className="md:hidden text-pink-600 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-[#0a192f] flex flex-col items-center justify-center space-y-8 md:hidden"
        >
          {navItems.map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link
                to={item}
                smooth={true}
                duration={500}
                className="cursor-pointer capitalize text-2xl hover:text-pink-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </motion.nav>
      )}
    </header>
  );
};

export default Header;
