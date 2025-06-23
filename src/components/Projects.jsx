import { motion } from "framer-motion";

const projects = [
  {
    title: "Elevate Pet Health (Veterinary Services)",
    description:
      "Platform connecting pet owners with clinics to register pets, book services, and manage pet care.",
    image: "/images/elevate-pet-health-bg.jpg",
    tags: ["Angular", "Spring Boot", "PostgreSQL", "AWS", "S3"],
    visit: "https://demo.elevatepethealth.com",
  },
  {
    title: "CultureSeekerz (Ed-Tech)",
    description:
      "Online platform connecting Indian teachers with global students for live and personalized learning.",
    image: "/images/culture-seeekerz.jpg",
    tags: ["Angular", "Spring Boot", "PostgreSQL", "Firebase", "AWS", "S3"],
    visit: "https://cultureseekerz.com",
  },
  {
    title: "Ayuryum (Meal Kit Ordering)",
    description:
      "Meal kit service with weekly menus, dietary options, and Stripe-based subscriptions.",
    image: "/images/ayuryum.jpg",
    tags: ["React", "Spring Boot", "Firebase", "Stripe", "AWS", "PostgreSQL"],
    visit: "",
  },
  {
    title: "Famlynk (Social Platform)",
    description:
      "Family-oriented social media platform featuring detailed family trees and photo sharing.",
    image: "/images/famlynk.jpg",
    tags: ["Angular", "Spring Boot", "MongoDB", "Firebase", "AWS"],
    visit: "http://famlynk.com/home/Login",
  },
];


const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-[90vh] py-12 px-4 md:px-12 lg:px-20"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-12 inline-block border-b-4 border-pink-600">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-[#112240] rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-[#233554] px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.visit}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 hover:underline"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
