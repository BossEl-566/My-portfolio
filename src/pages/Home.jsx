import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { FiArrowRight, FiCode, FiLayers, FiCpu, FiServer } from 'react-icons/fi';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl px-6 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 text-sm font-mono text-blue-400 tracking-widest">
              <TypeAnimation
                sequence={[
                  'AI-ENHANCED DEVELOPER',
                  2000,
                  'FULL-STACK ENGINEER',
                  2000,
                  'CREATIVE TECHNOLOGIST',
                  2000
                ]}
                speed={30}
                repeat={Infinity}
              />
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-gray-100">Hello, I'm </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Elliot
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
              I build intelligent, responsive digital experiences that merge 
              cutting-edge technology with human-centered design.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to='/projects' className="flex items-center justify-center">
              <motion.button
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium flex items-center justify-center gap-2"
              >
                View My Work <FiArrowRight />
              </motion.button>
              </Link>
              <Link to='/contact' className="flex items-center justify-center">
              <motion.button
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-3 border border-gray-700 rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                Contact Me
              </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce flex flex-col items-center">
            <span className="text-sm text-gray-400 mb-2">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-2 bg-gray-400 rounded-full mt-2"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gray-300">My </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Expertise
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Specialized services tailored to bring your digital vision to life with precision and innovation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FiCode className="text-3xl mb-4 text-blue-400" />,
                title: "Web Development",
                description: "Custom, responsive websites built with modern frameworks like React and Next.js."
              },
              {
                icon: <FiLayers className="text-3xl mb-4 text-purple-400" />,
                title: "UI/UX Design",
                description: "Beautiful interfaces that prioritize user experience and conversion."
              },
              {
                icon: <FiCpu className="text-3xl mb-4 text-blue-400" />,
                title: "AI Integration",
                description: "Smart features powered by machine learning and natural language processing."
              },
              {
                icon: <FiServer className="text-3xl mb-4 text-purple-400" />,
                title: "Backend Systems",
                description: "Scalable server architecture and database solutions for your applications."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-blue-500/30 transition-all"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-900 to-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "10+", label: "Projects Completed" },
              { number: "100%", label: "Client Satisfaction" },
              { number: "10+", label: "Technologies Mastered" },
              { number: "∞", label: "Creative Ideas" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6"
              >
                <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to bring your vision to life?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Let's collaborate to create something extraordinary. I'm just one click away.
            </p>
            <motion.button
  whileHover={{ y: -3, boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.3)" }}
  whileTap={{ scale: 0.98 }}
  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium text-lg"
  onClick={() => {
    const phoneNumber = "233594538949"; 
    const message = "Hello, I saw your portfolio and would like to chat!";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank"); 
  }}
>
  Get In Touch
</motion.button>

          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;