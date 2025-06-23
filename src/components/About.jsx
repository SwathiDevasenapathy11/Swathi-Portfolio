import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-[90vh] py-12 px-4 md:px-12 lg:px-20 flex items-center"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full"
      >
        <h2 className="text-4xl font-bold mb-12 inline-block border-b-4 border-pink-600">
          About Me
        </h2>

        <div className="flex items-center gap-12">
          <div className="w-1/3">
            <motion.div whileHover={{ scale: 1.05 }} className="relative">
              <div className="absolute "></div>
              <img
                src="/images/about-me.png"
                alt="About me"
                className="relative rounded-lg w-full"
              />
            </motion.div>
          </div>

          <div className="w-2/3">
            <p className="text-lg mb-4">
              A dedicated full-stack developer with 2.9 years of hands-on
              experience in building dynamic, user-centric web applications.
              Specialized in crafting scalable, secure, and responsive solutions
              across the full development stack. Passionate about turning
              complex problems into simple, elegant software experiences.
            </p>
            <p className="text-lg mb-4">
              Contributed to impactful projects ranging from pet healthcare to
              social media and Ed-Tech platforms. Comfortable owning the full
              development cycle — from system architecture and API design to
              intuitive front-end interfaces. A strong foundation in computer
              science and communication supports delivering value in
              cross-functional teams.
            </p>
            <p className="text-lg">
              Thrives in collaborative environments, values clean and
              maintainable code, and embraces continuous learning. Whether it's
              backend architecture, user flow design, or cloud deployment,
              brings focus, flexibility, and a growth mindset to every project.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
