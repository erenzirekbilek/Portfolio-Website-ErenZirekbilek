import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Eren Zirekbilek
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                Frontend Developer passionate about creating beautiful, functional, and user-friendly web experiences
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <Link
                to="/projects"
                className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                View My Work
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium rounded-lg transition-all duration-200"
              >
                Get In Touch
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-center space-x-6"
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors duration-200"
              >
                <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors duration-200"
              >
                <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>
              <a
                href="mailto:contact@example.com"
                className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors duration-200"
              >
                <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Technologies I Work With
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              I specialize in modern frontend technologies and frameworks to build exceptional web experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              'React',
              'TypeScript',
              'JavaScript',
              'Next.js',
              'Tailwind CSS',
              'Node.js',
              'Git',
              'Figma',
              'MongoDB',
              'PostgreSQL',
              'Python',
              'AWS'
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">
                    {skill.charAt(0)}
                  </span>
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your next project and how I can help bring your ideas to life
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 hover:bg-gray-100 font-medium rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Start a Conversation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;