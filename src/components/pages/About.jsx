import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
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
          About Me
        </motion.h1>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Profile Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img 
                src={new URL('../../assets/Ravi.png', import.meta.url).href}
                alt="Ravindra Mahto" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-orange-500 to-green-500 text-transparent bg-clip-text">Who I Am</h2>
              <p className="text-gray-300 bg-gradient-to-r from-orange-500/10 to-green-500/10 p-3 rounded-lg">
                A passionate Full Stack Developer based in Ranchi Jharkhand, with a strong focus on creating efficient and user-friendly web applications.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2 bg-gradient-to-r from-orange-500 to-green-500 text-transparent bg-clip-text">My Journey</h2>
              <p className="text-gray-300 bg-gradient-to-r from-orange-500/10 to-green-500/10 p-3 rounded-lg">
                Started programming in 2019, I've worked on various projects ranging from Hospital Management System to Hotel Management  Website and many more Software Development Projects. My experience includes 4 years of experience in Software Development.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Personal Interests */}
        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-2">Beyond Coding</h2>
          <p className="text-gray-300">
            When I'm not coding, you'll find me listening Music, watching Movies and Playing Games. I'm also passionate about Reading Books and seeing new places.
          </p>
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mt-12"
        >
          <a 
            href="/contact" 
            className="inline-block mb-10 bg-gradient-to-r from-orange-500 to-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Let's Work Together
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default About;