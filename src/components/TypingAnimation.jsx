import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const TypingAnimation = ({ text, delay = 0 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Typing effect
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        setIsComplete(true);
      }
    }, 150); // Typing speed (ms per character)

    return () => clearInterval(typingInterval);
  }, [text]);

  useEffect(() => {
    if (isComplete) {
      // Cursor blink effect after typing completes
      const blinkInterval = setInterval(() => {
        setShowCursor((prev) => !prev);
      }, 500);
      return () => clearInterval(blinkInterval);
    }
  }, [isComplete]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: "backOut" }}
      className="inline-block"
    >
      {displayedText}
      <motion.span
        animate={{ opacity: showCursor ? 1 : 0 }}
        className="ml-1 h-8 w-1 bg-white inline-block align-middle"
      />
    </motion.div>
  );
};

export default TypingAnimation;
