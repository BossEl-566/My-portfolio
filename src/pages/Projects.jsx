import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiCode, FiUsers, FiBook } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: "Church Member Management System",
      description: "A comprehensive MERN stack solution for managing church members, attendance tracking, financial records, and SMS notifications with admin dashboard.",
      tags: ["React", "Node.js", "MongoDB", "Express", "Twilio API"],
      image: "/church-management.jpg", // Replace with your image path
      githubLink: "#",
      liveLink: "#",
      icon: <FiUsers className="text-blue-400" />
    },
    {
      title: "Daily Bible Verse App",
      description: "A progressive web app that delivers daily Bible verses with bookmarking, sharing features, and offline functionality using service workers.",
      tags: ["React", "Node.js", "REST API", "PWA", "LocalStorage"],
      image: "/bible-app.jpg", // Replace with your image path
      githubLink: "#",
      liveLink: "#",
      icon: <FiBook className="text-purple-400" />
    },
    {
      title: "E-commerce Platform",
      description: "Full-featured online store with product management, cart system, payment processing, and admin dashboard.",
      tags: ["Next.js", "Stripe", "Firebase", "Tailwind CSS", "Redux"],
      image: "/ecommerce.jpg", // Replace with your image path
      githubLink: "#",
      liveLink: "#",
      icon: <FiCode className="text-blue-400" />
    },
    {
      title: "Portfolio Website Template",
      description: "Modern, responsive portfolio template for creatives and developers with dark/light mode and CMS integration.",
      tags: ["React", "Framer Motion", "Tailwind CSS", "Sanity.io"],
      image: "/portfolio-template.jpg", // Replace with your image path
      githubLink: "#",
      liveLink: "#",
      icon: <FiCode className="text-purple-400" />
    }
  ];

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-300">My </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Projects
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A collection of my professional work and personal projects showcasing my skills and creativity.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative overflow-hidden rounded-xl border border-gray-700 hover:border-blue-500/30 transition-all"
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent" />
              </div>

              {/* Project Icon */}
              <div className="absolute top-4 right-4 bg-gray-800 p-3 rounded-lg">
                {project.icon}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg text-sm hover:bg-gray-700 transition-colors"
                  >
                    <FiGithub /> Code
                  </motion.a>
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-sm hover:opacity-90 transition-opacity"
                  >
                    <FiExternalLink /> Live Demo
                  </motion.a>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold mb-4">Have a project in mind?</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              I'm available for freelance work and exciting collaborations. Let's turn your ideas into reality.
            </p>
            <motion.button
  whileHover={{ y: -3 }}
  whileTap={{ scale: 0.98 }}
  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium"
  onClick={() => {
    const phoneNumber = "233594538949"; 
    const message = "Hello, I’d like to get in touch with you!";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank"); 
  }}
>
  Get In Touch
</motion.button>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;