import { motion } from "framer-motion";
import {
  FaCode,
  FaServer,
  FaCloud,
  FaDatabase,
  FaTools,
  FaProjectDiagram,
  FaGraduationCap,
} from "react-icons/fa";

const Skills = () => {
  // Helper function for percentage to CGPA conversion
  const convertPercentageToCGPA = (percentage) => {
    return (percentage / 9.5).toFixed(1);
  };

  const skillCategories = [
    {
      title: "Frontend",
      icon: <FaCode className="text-2xl text-pink-600" />,
      skills: [
        "HTML",
        "CSS",
        "SCSS",
        "Bootstrap",
        "Tailwind",
        "JavaScript",
        "React",
        "Angular",
      ],
    },
    {
      title: "Backend",
      icon: <FaServer className="text-2xl text-pink-600" />,
      skills: [
        "Java",
        "Spring Boot",
        "Spring Security",
        "Microservices",
        "JUnit",
      ],
    },
    {
      title: "Database",
      icon: <FaDatabase className="text-2xl text-pink-600" />,
      skills: ["MySQL", "PostgreSQL", "MongoDB"],
    },
    {
      title: "Cloud Storage",
      icon: <FaCloud className="text-2xl text-pink-600" />,
      skills: ["AWS S3", "Firebase Storage", "File Management"],
    },
    {
      title: "Version Control",
      icon: <FaTools className="text-2xl text-pink-600" />,
      skills: ["GitHub", "Bitbucket"],
    },
    {
      title: "Methodologies",
      icon: <FaProjectDiagram className="text-2xl text-pink-600" />,
      skills: ["Agile", "Scrum", "Jira"],
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="skills"
      className=" py-20 px-4 md:px-12 lg:px-20 bg-[#0a192f]"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-12 inline-block border-b-4 border-pink-600 text-gray-300"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Technical Skills
        </motion.h2>

        {/* Skill Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-[#112240] rounded-xl p-6 border border-[#233554] hover:border-pink-600/30 transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 bg-[#233554] rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-300">
                  {category.title}
                </h3>
              </div>

              <motion.div
                className="flex flex-wrap gap-3"
                variants={containerVariants}
              >
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "#1e3a8a",
                      color: "#ffffff",
                    }}
                    className="inline-block px-4 py-2 bg-[#233554] text-gray-300 rounded-lg text-sm transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications & Education */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="bg-[#112240] rounded-xl p-6 border border-[#233554]">
            <h3 className="text-2xl font-semibold mb-6 text-pink-600 flex items-center gap-3">
              <div className="p-2 bg-[#233554] rounded-lg">
                <FaProjectDiagram />
              </div>
              Certifications
            </h3>
            <ul className="space-y-4">
              <motion.li
                whileHover={{ x: 5 }}
                className="border-l-2 border-pink-600 pl-4 py-1"
              >
                <h4 className="text-lg font-medium text-gray-300">
                  Jira Certification
                </h4>
                <p className="text-gray-400">Simplilearn (2025)</p>
              </motion.li>
              <motion.li
                whileHover={{ x: 5 }}
                className="border-l-2 border-pink-600 pl-4 py-1"
              >
                <h4 className="text-lg font-medium text-gray-300">
                  Java Spring Boot
                </h4>
                <p className="text-gray-400">TestDome (Top 25%)</p>
              </motion.li>
            </ul>
          </div>

          <div className="bg-[#112240] rounded-xl p-6 border border-[#233554] hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold mb-6 text-pink-600 flex items-center gap-3">
              <div className="p-2 bg-[#233554] rounded-lg">
                <FaGraduationCap />
              </div>
              Education
            </h3>
            <motion.div
              whileHover={{ x: 5 }}
              className="border-l-2 border-pink-600 pl-4 py-1"
            >
              <h4 className="text-lg font-medium text-gray-300">
                Bachelor of Computer Science
              </h4>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-gray-400">
                <p>Pollachi College of Arts & Science</p>
                <span className="hidden sm:block">•</span>
                <p>2019 - 2022</p>
                <span className="hidden sm:block">•</span>
                <p className="text-gray-300">
                  CGPA: {convertPercentageToCGPA(79)}/10
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
