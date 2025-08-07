import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiPhone, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

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
            <span className="text-gray-300">Let's </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Connect
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 rounded-xl border border-gray-700 p-8"
          >
            <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
            
            {submitSuccess && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-900/30 border border-green-700 rounded-lg"
              >
                Thank you! Your message has been sent successfully.
              </motion.div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    required
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiMail /> Send Message
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gray-800/50 rounded-xl border border-gray-700 p-8">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-700 rounded-lg">
                    <FiMail className="text-blue-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-400 mb-1">Email</h3>
                    <a 
                      href="mailto:office@solvexghana.com" 
                      className="text-gray-100 hover:text-blue-400 transition-colors"
                    >
                      office@solvexghana.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-700 rounded-lg">
                    <FiMapPin className="text-purple-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-400 mb-1">Location</h3>
                    <p className="text-gray-100">Accra, Ghana</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-700 rounded-lg">
                    <FiPhone className="text-blue-400 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-400 mb-1">Phone</h3>
                    <a 
                      href="tel:+1234567890" 
                      className="text-gray-100 hover:text-blue-400 transition-colors"
                    >
                      +233 XX XXX XXXX
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gray-800/50 rounded-xl border border-gray-700 p-8">
              <h2 className="text-2xl font-bold mb-6">Follow Me</h2>
              
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="flex items-center gap-3 px-5 py-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  <FiGithub className="text-xl" /> GitHub
                </motion.a>

                <motion.a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="flex items-center gap-3 px-5 py-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  <FiLinkedin className="text-xl" /> LinkedIn
                </motion.a>

                <motion.a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="flex items-center gap-3 px-5 py-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  <FiTwitter className="text-xl" /> Twitter
                </motion.a>
              </div>
            </div>

            {/* Availability */}
            <div className="bg-gray-800/50 rounded-xl border border-gray-700 p-8">
              <h2 className="text-2xl font-bold mb-4">Availability</h2>
              <p className="text-gray-300 mb-4">I'm currently available for:</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span>Freelance Projects</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span>Full-time Opportunities</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                  <span>Technical Consultations</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;