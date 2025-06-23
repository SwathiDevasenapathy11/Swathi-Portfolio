// src/components/Footer.jsx
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-[#020c1b] py-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 text-center"
      >
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} Swathi Devasenapathy. All Rights
          Reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
