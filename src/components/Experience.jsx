import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-12 px-4 md:px-12 lg:px-20"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-12 inline-block border-b-4 border-pink-600 text-gray-300">
          Professional Journey
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Summary Card */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-[#112240] p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4 text-pink-600">
              Summary
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-pink-400 mr-2">•</span>
                <span>2.9 years experience in full-stack development</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-400 mr-2">•</span>
                <span>Frontend: HTML, CSS, JavaScript, Angular, React</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-400 mr-2">•</span>
                <span>
                  Backend: Java, Spring Boot, Microservices architecture, JUnit,
                  Spring Security
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-400 mr-2">•</span>
                <span>Cloud: AWS, Firebase, S3</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-400 mr-2">•</span>
                <span>Databases: MySQL, PostgreSQL, MongoDB</span>
              </li>
            </ul>
          </motion.div>

          {/* Current Role */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-[#112240] p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-2 text-pink-600">
              DataPattern
            </h3>
            <p className="text-gray-400 mb-4">
              Full-stack Developer | Oct 2022 - Present
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-pink-400 mr-2">•</span>
                <span>Designed system architecture and ERDs</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-400 mr-2">•</span>
                <span>
                  Client handling and communication throughout the project
                  lifecycle
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-400 mr-2">•</span>
                <span>
                  Project estimation and cost evaluation for service
                  requirements
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-400 mr-2">•</span>
                <span>
                  Team coordination, task assignment, and project delivery
                  management
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Projects Overview */}
          <motion.div
            whileHover={{ y: -10 }}
            className="bg-[#112240] p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4 text-pink-600">
              Key Projects
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-300">
                  Elevate Pet Health
                </h4>
                <p className="text-sm text-gray-400">
                  Angular, Spring Boot, AWS
                </p>
                <a
                  href="https://demo.elevatepethealth.com"
                  target="_blank"
                  className="text-pink-400 text-sm hover:underline"
                >
                  View Project
                </a>
              </div>
              <div>
                <h4 className="font-medium text-gray-300">CultureSeekerz</h4>
                <p className="text-sm text-gray-400">Angular, Firebase, AWS</p>
                <a
                  href="https://cultureseekerz.com"
                  target="_blank"
                  className="text-pink-400 text-sm hover:underline"
                >
                  View Project
                </a>
              </div>
              <div>
                <h4 className="font-medium text-gray-300">Famlynk</h4>
                <p className="text-sm text-gray-400">Angular, MongoDB, AWS</p>
                <a
                  href="http://famlynk.com/home/Login"
                  target="_blank"
                  className="text-pink-400 text-sm hover:underline"
                >
                  View Project
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
