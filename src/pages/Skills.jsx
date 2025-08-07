import { motion } from "framer-motion";
import { FiCode, FiServer, FiDatabase, FiLayers, FiSmartphone, FiCpu } from 'react-icons/fi';

const Skills = () => {
  const skillCategories = [
    {
      name: "Frontend Development",
      icon: <FiLayers className="text-3xl mb-4 text-blue-400" />,
      skills: [
        { name: "HTML5 & CSS3", level: 95 },
        { name: "JavaScript (ES6+)", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "React.js", level: 92 },
        { name: "Next.js", level: 88 },
        { name: "Tailwind CSS", level: 94 },
      ]
    },
    {
      name: "Backend Development",
      icon: <FiServer className="text-3xl mb-4 text-purple-400" />,
      skills: [
        { name: "Node.js", level: 89 },
        { name: "Express.js", level: 85 },
        { name: "RESTful APIs", level: 88 },
        { name: "GraphQL", level: 80 },
        { name: "Authentication", level: 87 },
        { name: "WebSockets", level: 75 },
      ]
    },
    {
      name: "Database & Storage",
      icon: <FiDatabase className="text-3xl mb-4 text-blue-400" />,
      skills: [
        { name: "MongoDB", level: 86 },
        { name: "Firebase", level: 83 },
        { name: "PostgreSQL", level: 78 },
        { name: "Redis", level: 72 },
        { name: "Cloud Storage", level: 80 },
        { name: "ORM/ODM", level: 82 },
      ]
    },
    {
      name: "Mobile Development",
      icon: <FiSmartphone className="text-3xl mb-4 text-purple-400" />,
      skills: [
        { name: "React Native", level: 84 },
        { name: "Flutter", level: 76 },
        { name: "Mobile UI", level: 82 },
        { name: "App Deployment", level: 80 },
        { name: "Native Modules", level: 70 },
        { name: "Performance", level: 78 },
      ]
    },
    {
      name: "UI/UX Design",
      icon: <FiCpu className="text-3xl mb-4 text-blue-400" />,
      skills: [
        { name: "Figma", level: 88 },
        { name: "Adobe XD", level: 82 },
        { name: "User Research", level: 80 },
        { name: "Prototyping", level: 85 },
        { name: "Design Systems", level: 83 },
        { name: "Accessibility", level: 87 },
      ]
    },
    {
      name: "DevOps & Tools",
      icon: <FiCode className="text-3xl mb-4 text-purple-400" />,
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Docker", level: 75 },
        { name: "CI/CD", level: 78 },
        { name: "AWS Basics", level: 72 },
        { name: "Testing", level: 82 },
        { name: "Webpack", level: 80 },
      ]
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
              Skills
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A comprehensive showcase of my technical expertise and proficiency across various technologies.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-gray-800/50 rounded-xl border border-gray-700 hover:border-blue-500/30 transition-all p-6"
            >
              <div className="flex flex-col items-center mb-6">
                {category.icon}
                <h2 className="text-xl font-bold text-center">{category.name}</h2>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 + skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300 group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-gray-400 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.3 + skillIndex * 0.05 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">
            <span className="text-gray-300">Other </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Technologies
            </span>
          </h2>
          
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Redux", "Context API", "Jest", "Cypress", "SASS", "Styled Components",
              "Mongoose", "Prisma", "tRPC", "WebSockets", "PWA", "JWT",
              "OAuth", "Stripe API", "Google Maps API", "Three.js", "GSAP",
              "Framer Motion", "Chart.js", "React Query", "Zustand", "Vite",
              "ESLint", "Prettier", "Jira", "Agile", "Scrum"
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-gray-800 rounded-full text-sm hover:bg-gray-700 transition-colors"
                whileHover={{ y: -2 }}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certification CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold mb-4">Want to verify my skills?</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              I hold several professional certifications that validate my expertise in these technologies.
            </p>
            <motion.button
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium"
            >
              View Certifications
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;