import { motion } from "framer-motion";
import { Link } from "react-scroll";
import TypingAnimation from "./TypingAnimation";
import { HiDocumentArrowDown } from "react-icons/hi2";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-80px)] flex flex-col md:flex-row items-center justify-between px-4 md:px-12 lg:px-20 pt-24 overflow-hidden"
    >
      {/* Fullscreen Floating Bubbles */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(550)].map((_, i) => {
          const size = Math.random() * 10 + 4; // 4px - 14px
          const startX = Math.random() * window.innerWidth;
          const delay = Math.random() * 10;
          const duration = 8 + Math.random() * 6;

          return (
            <motion.div
              key={i}
              initial={{
                x: startX,
                y: window.innerHeight + 50,
                opacity: 0,
                scale: 0,
              }}
              animate={{
                y: -150,
                opacity: [0, 0.7, 0],
                scale: [0, 1, 0.6],
              }}
              transition={{
                delay,
                duration,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className={`absolute rounded-full ${
                i % 3 === 0
                  ? "bg-pink-400"
                  : i % 2 === 0
                  ? "bg-blue-400"
                  : "bg-purple-400"
              }`}
              style={{
                left: `${startX}px`,
                width: `${size}px`,
                height: `${size}px`,
              }}
            />
          );
        })}
      </div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:w-1/2 z-10"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "backOut" }}
          className="text-pink-600 mb-2"
        >
          Hi, my name is
        </motion.p>

        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          <TypingAnimation text="Swathi Devasenapathy" delay={0.3} />
        </h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6, ease: "backOut" }}
          className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-6"
        >
          Full Stack Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
          className="mb-8 max-w-lg text-sm sm:text-base"
        >
          Full-stack developer with 2.9 years of experience crafting seamless
          and efficient web solutions. I bring ideas to life through thoughtful
          design, clean architecture, and smooth functionality. Skilled in
          handling both front-end and back-end challenges with a problem-solving
          mindset. Focused on building experiences that are user-friendly,
          scalable, and performance-driven.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6, ease: "backOut" }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <Link to="projects" smooth={true} duration={500}>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 15px rgba(219, 39, 119, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-pink-600 px-6 py-3 rounded-md font-medium"
            >
              View My Work
            </motion.button>
          </Link>

          <a
            href="/docs/Swathi_Devasenapathy.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white underline hover:text-pink-400 transition"
          >
            <HiDocumentArrowDown className="w-5 h-5" />
            View Full Resume
          </a>
        </motion.div>
      </motion.div>

      {/* Image and Visual Effects */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full md:w-1/2 flex justify-center mt-10 md:mt-0"
      >
        {/* Animated Blobs */}
        <motion.div
          initial={{ scale: 0, rotate: 45 }}
          animate={{
            scale: 1,
            rotate: 0,
            transition: {
              delay: 0.4,
              duration: 1.2,
              type: "spring",
              stiffness: 60,
              damping: 10,
            },
          }}
          whileHover={{
            scale: 1.05,
            rotate: 5,
            transition: { duration: 0.5 },
          }}
          className="absolute w-80 h-80 bg-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
        />

        <motion.div
          initial={{ scale: 0, rotate: -45 }}
          animate={{
            scale: 1,
            rotate: 0,
            transition: {
              delay: 0.6,
              duration: 1.2,
              type: "spring",
              stiffness: 60,
              damping: 10,
            },
          }}
          whileHover={{
            scale: 1.05,
            rotate: -5,
            transition: { duration: 0.5 },
          }}
          className="absolute w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
        />

        <motion.div
          initial={{ scale: 0, rotate: 30 }}
          animate={{
            scale: 1,
            rotate: 0,
            transition: {
              delay: 0.8,
              duration: 1.2,
              type: "spring",
              stiffness: 60,
              damping: 10,
            },
          }}
          whileHover={{
            scale: 1.05,
            rotate: 10,
            transition: { duration: 0.5 },
          }}
          className="absolute w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"
        />

        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0, rotate: -30, opacity: 0 }}
          animate={{
            scale: 1,
            rotate: 0,
            opacity: 1,
            transition: {
              delay: 0.5,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 10,
            },
          }}
          whileHover={{
            scale: 1.05,
            rotate: [0, -5, 5, -5, 0],
            transition: { duration: 0.8 },
          }}
          className="relative z-10"
        >
          <motion.img
            // src="src/assets/images/swathi-profile.jpg"
            src="/images/swathi-profile.jpg"
            alt="Swathi Devasenapathy"
            className="rounded-full w-48 h-48 sm:w-64 sm:h-64 object-cover border-4 border-pink-600"
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 25px rgba(219, 39, 119, 0.5)",
            }}
            transition={{
              scale: { duration: 0.3 },
              boxShadow: { duration: 0.5 },
            }}
          />

          {/* Glow Ring */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: { delay: 1, duration: 0.5 },
            }}
            className="absolute inset-0 rounded-full border-2 border-pink-400/50 pointer-events-none"
            whileHover={{
              scale: 1.1,
              opacity: 0.8,
              transition: { duration: 0.5 },
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
