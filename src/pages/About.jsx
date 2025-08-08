import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiDownload, FiCode } from 'react-icons/fi';
import elliotpicture from '../assets/elliotpicture.jpg'; // Update this path

const About = () => {
  const skills = [
    { name: "Frontend", technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript"] },
    { name: "Backend", technologies: ["Node.js", "Express", "MongoDB", "Firebase"] },
    { name: "Design", technologies: ["Figma", "Adobe XD", "UI/UX Principles"] },
    { name: "Mobile", technologies: ["React Native", "Flutter"] },
    { name: "AI", technologies: ["TensorFlow", "PyTorch", "Natural Language Processing"] }
  ];

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero About Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row gap-12 items-center mb-20"
        >
          {/* Image with animation */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:w-1/3"
          >
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 mx-auto">
              <div className="absolute inset-0 border-2 border-blue-400 rounded-lg transform rotate-3 z-0"></div>
              <motion.img
                src={elliotpicture}
                alt="Ellioti"
                className="relative z-10 w-full h-full object-cover rounded-lg shadow-xl"
                whileHover={{ scale: 1.02 }}
              />
              <motion.div
                className="absolute -bottom-5 -right-5 bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-lg shadow-lg z-20"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
              >
                <FiCode className="text-white text-2xl" />
              </motion.div>
            </div>
          </motion.div>

          {/* About Text */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:w-2/3"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gray-300">About </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Me
              </span>
            </h1>
            
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I'm a passionate full-stack developer based in Ghana with expertise in building modern, responsive websites and web applications. With a strong foundation in both design and development, I create digital experiences that are not only visually stunning but also highly functional and user-friendly.
            </p>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              My approach combines technical expertise with creative problem-solving, ensuring that every project I work on delivers real value to users while meeting business objectives. I specialize in the MERN stack but constantly expand my skillset to include emerging technologies.
            </p>

            {/* Personal Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <span className="text-gray-400 mr-2">Name:</span>
                <span className="font-medium">Elliot Datsomor</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-400 mr-2">Location:</span>
                <span className="font-medium">Ghana</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-400 mr-2">Email:</span>
                <span className="font-medium">datsomorelliot56@gmail.com</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-400 mr-2">Experience:</span>
                <span className="font-medium">3+ Years</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4 mb-8">
              <motion.a
                href="https://github.com/BossEl-566"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors"
              >
                <FiGithub className="text-xl" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/elliot-datsomor-972360216/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors"
              >
                <FiLinkedin className="text-xl" />
              </motion.a>
              <motion.a
                href="mailto:datsomorelliot56@gmail.com"
                whileHover={{ y: -3 }}
                className="flex items-center justify-center w-10 h-10 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors"
              >
                <FiMail className="text-xl" />
              </motion.a>
            </div>

            {/* Download CV Button */}
            <motion.button
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium flex items-center gap-2"
            >
              Download CV <FiDownload />
            </motion.button>
          </motion.div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="text-gray-300">My </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Skills
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500/30 transition-all"
              >
                <h3 className="text-xl font-bold mb-4 text-blue-400">{skill.name}</h3>
                <ul className="space-y-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <li key={techIndex} className="flex items-center">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                      <span className="text-gray-300">{tech}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="text-gray-300">Work </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Experience
            </span>
          </h2>

          <div className="space-y-8">
            {[
              {
                role: "Full Stack Developer",
                company: "FOGA.",
                period: "2024 - Present",
                description: "Developed and maintained web applications using React, Node.js, and MongoDB. Implemented RESTful APIs and integrated third-party services."
              },
              {
                role: "Frontend Developer",
                company: "Various Freelance Projects",
                period: "2023 - 2024",
                description: "Implemented responsive UI components and optimized frontend performance. Collaborated with designers to create pixel-perfect interfaces."
              },
              {
                role: "Junior Developer Mobile App",
                company: "StartUp Ghana",
                period: "2023 - 2024",
                description: "Assisted in the development of mobile applications using React Native. Participated in code reviews and contributed to the app's architecture."
              },
              {
                role: "Intern",
                company: "ECG (Central Region)",
                period: "2024 - 2025",
                description: "Assisted in various IT projects, gaining hands-on experience in software development and system administration."
              }
            ].map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 p-6 rounded-xl border-l-4 border-blue-500 relative overflow-hidden"
              >
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-500/10 rounded-full"></div>
                <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                  <span className="text-blue-400 font-medium">{exp.company}</span>
                  <span className="hidden sm:block text-gray-400">•</span>
                  <span className="text-gray-400">{exp.period}</span>
                </div>
                <p className="text-gray-300">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="text-gray-300">Education & </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Certifications
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                institution: "University of Ghana",
                degree: "BSc Computer Science",
                year: "2022 - 2026",
                description: "Specialized in Software Engineering, Human-Computer Interaction, Data Science and Machine Learning."
              },
              {
                institution: "IPMC",
                degree: "Diploma in System Engineering and Networking Engineering",
                year: "2020",
                description: "Gained foundational knowledge in computer systems, networking, and IT infrastructure management."
              },
              {
                institution: "DataCamp",
                degree: "Natural Language Processing in Python",
                year: "2025",
                description: "Learned to build NLP models using Python, focusing on text processing, sentiment analysis, and language generation."
              },
              {
                institution: "DataCamp",
                degree: "Promting with Python",
                year: "2025",
                description: "Explored advanced techniques in prompt engineering for AI models, enhancing the ability to generate context-aware responses."
              },
              {
                institution: "DataCamp",
                degree: "Machine Learning with Python",
                year: "2025",
                description: "Developed skills in building and deploying machine learning models using Python, focusing on supervised and unsupervised learning techniques."
              }
            ].map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-purple-500/30 transition-all"
              >
                <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-purple-400 font-medium">{edu.institution}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-400">{edu.year}</span>
                </div>
                <p className="text-gray-300">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;