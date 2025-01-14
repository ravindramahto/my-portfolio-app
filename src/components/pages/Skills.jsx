import React, { Component } from 'react';
import { motion } from 'framer-motion'; 
    
class Skills extends Component {
    render() {
        return (
            <>
    <div className="min-h-screen w-screen bg-gray-900 mb-5 text-white py-20 px-4 overflow-x-hidden">
      <div className="container mx-auto max-w-4xl">
      
                   {/* Header */}
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: {
              duration: 0.8,
              ease: "easeOut"
            }
          }}
          className="text-5xl md:text-6xl font-extrabold mb-12 text-center bg-gradient-to-r from-orange-500 to-green-500 text-transparent bg-clip-text hover:from-orange-400 hover:to-green-400 transition-all duration-500 ease-in-out animate-pulse tracking-tight"
        >
          Skills
        </motion.h1>
    </div>
                    
        {/* Key Skills Section - Now in its own row */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-12"
        >
          {/* <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-orange-500 to-green-500 text-transparent bg-clip-text">Key Skills</h2> */}
          <div className="flex flex-wrap gap-4">
            {/* Skill Ribbons (keeping the existing skill ribbons) */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="skill-ribbon bg-gradient-to-r from-pink-500 to-red-500 p-4 rounded-lg shadow-lg transform rotate-2 w-full md:w-[calc(33%-1rem)] relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-white/10 skew-x-12 transform -translate-x-full animate-shimmer"></div>
              <h3 className="text-xl font-bold text-white mb-2">UI/UX Design</h3>
              <p className="text-white/90">Creating intuitive and engaging user experiences</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="skill-ribbon bg-gradient-to-r from-yellow-500 to-orange-500 p-4 rounded-lg shadow-lg transform -rotate-1 w-full md:w-[calc(33%-1rem)] relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-white/10 skew-x-12 transform -translate-x-full animate-shimmer"></div>
              <h3 className="text-xl font-bold text-white mb-2">API Development</h3>
              <p className="text-white/90">Designing and implementing RESTful APIs</p>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="skill-ribbon bg-gradient-to-r from-orange-500 to-green-500 p-4 rounded-lg shadow-lg transform -rotate-2 w-full md:w-[calc(33%-1rem)] relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-white/10 skew-x-12 transform -translate-x-full animate-shimmer"></div>
              <h3 className="text-xl font-bold text-white mb-2">Frontend Development</h3>
              <p className="text-white/90">Expert in creating responsive and interactive user interfaces</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="skill-ribbon bg-gradient-to-r from-green-500 to-blue-500 p-4 rounded-lg shadow-lg transform rotate-1 w-full md:w-[calc(33%-1rem)] relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-white/10 skew-x-12 transform -translate-x-full animate-shimmer"></div>
              <h3 className="text-xl font-bold text-white mb-2">Backend Development</h3>
              <p className="text-white/90">Building robust and scalable server-side applications</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="skill-ribbon bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-lg shadow-lg transform -rotate-1 w-full md:w-[calc(33%-1rem)] relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-white/10 skew-x-12 transform -translate-x-full animate-shimmer"></div>
              <h3 className="text-xl font-bold text-white mb-2">Database Management</h3>
              <p className="text-white/90">Expertise in both SQL and NoSQL database systems</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="skill-ribbon bg-gradient-to-r from-purple-500 to-orange-500 p-4 rounded-lg shadow-lg transform rotate-2 w-full md:w-[calc(33%-1rem)] relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-white/10 skew-x-12 transform -translate-x-full animate-shimmer"></div>
              <h3 className="text-xl font-bold text-white mb-2">DevOps & Deployment</h3>
              <p className="text-white/90">Experienced in CI/CD and cloud deployment strategies</p>
            </motion.div>
          </div>
        </motion.div>

        <style jsx>{`
          @keyframes shimmer {
            0% { transform: translateX(-100%) skewX(-12deg); }
            100% { transform: translateX(200%) skewX(-12deg); }
          }
          .animate-shimmer {
            animation: shimmer 3s infinite;
          }
          .skill-ribbon {
            transition: all 0.3s ease;
          }
          .skill-ribbon:hover {
            box-shadow: 0 10px 20px rgba(0,0,0,0.2);
          }
            `}</style>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-orange-500 to-green-500 mt-7 text-transparent bg-clip-text">Core Skills</h2>
          <p className="text-gray-300 mb-4 bg-gradient-to-r from-orange-500/10 to-green-500/10 p-3 mt-5 rounded-lg">
            I specialize in building modern web applications with a focus on performance, accessibility, and user experience. My technical expertise spans across the full development stack.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 mb-14">
            <div className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800/70 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
              <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text">Languages</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300 hover:text-white transition-colors">
                  <span className="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mr-2"></span>
                  JavaScript/TypeScript
                </li>
                <li className="flex items-center text-gray-300 hover:text-white transition-colors">
                  <span className="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mr-2"></span>
                  Python
                </li>
                <li className="flex items-center text-gray-300 hover:text-white transition-colors">
                  <span className="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mr-2"></span>
                  Java
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800/70 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
              <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text">Tools</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300 hover:text-white transition-colors">
                  <span className="w-2 h-2 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full mr-2"></span>
                  Git & GitHub
                </li>
                <li className="flex items-center text-gray-300 hover:text-white transition-colors">
                  <span className="w-2 h-2 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full mr-2"></span>
                  Docker
                </li>
                <li className="flex items-center text-gray-300 hover:text-white transition-colors">
                  <span className="w-2 h-2 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full mr-2"></span>
                  VS Code
                </li>
              </ul>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800/70 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
              <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-green-500 to-teal-500 text-transparent bg-clip-text">Soft Skills</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300 hover:text-white transition-colors">
                  <span className="w-2 h-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mr-2"></span>
                  Problem Solving
                </li>
                <li className="flex items-center text-gray-300 hover:text-white transition-colors">
                  <span className="w-2 h-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mr-2"></span>
                  Team Collaboration
                </li>
                <li className="flex items-center text-gray-300 hover:text-white transition-colors">
                  <span className="w-2 h-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mr-2"></span>
                  Project Management
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
        );
    }
}

export default Skills;