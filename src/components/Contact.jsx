import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const socialLinks = [
    {
      icon: <FaGithub className="text-3xl" />,
      url: "https://github.com/SwathiDevasenapathy11",
      name: "GitHub",
    },
    {
      icon: <FaLinkedin className="text-3xl" />,
      url: "https://www.linkedin.com/in/swathi-devasenapathy-83442b22a/",
      name: "LinkedIn",
    },
    {
      icon: <FaInstagram className="text-3xl" />,
      url: "https://www.instagram.com/swathii_devasenapathy/",
      name: "Instagram",
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-[80vh] py-20 px-4 md:px-12 lg:px-20 bg-[#0a192f]"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <motion.h2
          className="text-4xl font-bold mb-12 inline-block border-b-4 border-pink-600 text-gray-300"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Let's Connect
        </motion.h2>

        <motion.p
          className="text-xl mb-12 text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          I'm always open to discussing new projects, creative ideas or
          opportunities to be part of your vision.
        </motion.p>

        {/* Email Card */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <motion.a
            href="mailto:swathidevasenapathy@gmail.com"
            whileHover={{
              y: -5,
              boxShadow: "0 10px 25px -5px rgba(219, 39, 119, 0.2)",
            }}
            whileTap={{ scale: 0.98 }}
            className="inline-block bg-[#112240] p-6 rounded-xl border border-[#233554] hover:border-pink-600/30 transition-all"
          >
            <div className="flex flex-col items-center">
              <motion.div
                whileHover={{ rotate: 10 }}
                className="mb-4 bg-[#233554] p-4 rounded-full"
              >
                <MdEmail className="text-4xl text-pink-600" />
              </motion.div>
              <span className="text-gray-300 text-lg font-medium">
                swathidevasenapathy@gmail.com
              </span>
              <span className="text-pink-600 text-sm mt-2">
                Click to email me
              </span>
            </div>
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: -8,
                color: "#ec4899",
                scale: 1.1,
              }}
              whileTap={{ scale: 0.9 }}
              className="text-gray-300 flex flex-col items-center gap-2"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="p-3 bg-[#112240] rounded-full border border-[#233554]"
              >
                {social.icon}
              </motion.div>
              <span className="text-sm text-gray-400">{social.name}</span>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
