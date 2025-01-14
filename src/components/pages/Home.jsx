import React, { Component } from 'react';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { register } from 'swiper/element/bundle';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="group relative bg-gray-800 rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300"
    >
      {/* Project Image */}
      <div className="relative h-48 md:h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10" />
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />

        {/* Tech Stack Pills */}
        <div className="absolute top-4 right-4 z-20 flex flex-wrap gap-2 justify-end">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs bg-gray-900/80 text-gray-300 rounded-full backdrop-blur-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-green-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4">
          {project.description}
        </p>

        {/* Project Links */}
        <div className="flex justify-center gap-4">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gradient-to-r from-orange-500 to-green-500 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Live Demo
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-green-500 rounded-lg text-sm font-medium hover:bg-green-500/20 transition-colors"
          >
            View Code
          </a>
        </div>
       
      </div>
    </motion.div>
  );
};




class Home extends Component {
  render() {
    const projects = [
      {
        title: "Admission Management System",
        description: "A comprehensive system for managing student admissions, featuring user authentication, application processing, and automated notifications.",
        image: new URL('../../assets/projects/ad_mgmt_system.png', import.meta.url).href,
        technologies: ["Bootstrap 4", "CodeIgniter 3", "MySQL", "jQuery"],
        liveLink: "https://smartbrains.eduwego.com/login",
        githubLink: "#"
      },
      {
        title: "E-Commerce Platform",
        description: "A full-featured online shopping platform with product catalog, cart management, and secure payment integration.",
        image: new URL('../../assets/projects/ad_mgmt_system.png', import.meta.url).href,
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        liveLink: "#",
        githubLink: "#"
      },
      {
        title: "Task Management App",
        description: "A collaborative task management solution with real-time updates, team workspaces, and progress tracking.",
        image: new URL('../../assets/projects/ad_mgmt_system.png', import.meta.url).href,
        technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
        liveLink: "#",
        githubLink: "#"
      },
      {
        title: "Portfolio Website",
        description: "A modern, responsive portfolio website showcasing projects and skills with smooth animations.",
        image: new URL('../../assets/projects/ad_mgmt_system.png', import.meta.url).href,
        technologies: ["React", "Tailwind CSS", "Framer Motion"],
        liveLink: "#",
        githubLink: "#"
      },
      {
        title: "Weather Dashboard",
        description: "A real-time weather monitoring dashboard with location-based forecasts and interactive maps.",
        image: new URL('../../assets/projects/ad_mgmt_system.png', import.meta.url).href,
        technologies: ["React", "OpenWeather API", "Leaflet.js"],
        liveLink: "#",
        githubLink: "#"
      }
    ];

    register();

    return (
      <div className="min-h-screen bg-gray-900 text-white w-screen overflow-x-hidden">
        {/* Hero Section - Adjusted spacing and responsiveness */}
        <div className="container mx-auto px-4 pt-16 md:pt-24 pb-8 min-h-[90vh] flex items-center">
          <div className="flex flex-col items-center text-center w-full animate-fadeIn space-y-4 md:space-y-6">
            <div className="w-48 h-48 md:w-28 md:h-28 lg:w-34 lg:h-34 rounded-full overflow-hidden border-4 border-green-500 shadow-lg transform hover:scale-105 transition-all duration-300 mb-6">
              <img
                src={new URL('../../assets/Ravi.png', import.meta.url).href}
                alt="Ravindra Mahto"
                className="w-full h-full object-cover scale-30"
              />
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-orange-500 to-green-500 text-transparent bg-clip-text transform hover:scale-105 transition-all duration-300 animate-slideDown">
              Hi, I'm Ravindra Mahto
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-4xl text-gray-300 transform hover:scale-105 transition-all duration-300 animate-slideUp">
              Full Stack Developer
            </h2>
            <p className="text-base sm:text-lg max-w-2xl text-gray-400 transform hover:translate-y-[-4px] transition-all duration-300 animate-fadeIn px-4">
              I craft responsive and performant web applications with modern technologies.
              Passionate about creating elegant solutions to complex problems.
            </p>
            <div className="flex space-x-6 animate-fadeIn">
              <a
                href="https://github.com/ravindramahto"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transform hover:scale-125 transition-all duration-300"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="mailto:your.email@example.com"
                className="text-gray-400 hover:text-white transform hover:scale-125 transition-all duration-300"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/ravindra-mahto-706774149/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transform hover:scale-125 transition-all duration-300"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transform hover:scale-125 transition-all duration-300"
              >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 animate-slideUp pt-4">
              <a href="#projects" className="bg-gradient-to-r from-orange-500 to-green-500 text-white px-6 py-2 rounded-lg font-semibold transform hover:scale-110 hover:shadow-lg transition-all duration-300">
                View My Work
              </a>
              <a href="/contact" className="border-2 border-green-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-500/20 transform hover:scale-110 hover:shadow-lg transition-all duration-300">
                Contact Me
              </a>
            </div>
          </div>
        </div>

        {/* Featured Projects Section */}
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-orange-500 to-green-500 text-transparent bg-clip-text">
            Featured Projects
          </h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              navigation={true}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="projects-slider"
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} index={index} />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>

        {/* Technologies Section */}
        <div className="container mx-auto px-4 py-16 min-h-screen">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-orange-500 to-green-500 text-transparent bg-clip-text transform hover:scale-105 transition-all duration-300 animate-slideDown">
            Technologies I Work With
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 animate-fadeIn">
            {/* Frontend Technologies */}
           
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <div className="flex items-center gap-2 mb-2 group">
                <i className="fas fa-code text-4xl bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text text-transparent transition-all duration-300 group-hover:from-blue-500 group-hover:to-purple-500"></i>
                <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text text-transparent transition-all duration-300 group-hover:from-blue-500 group-hover:to-purple-500">
                  Technologies
                </span>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <i className="fab fa-react text-4xl text-blue-400 mb-2"></i>
              <span className="text-sm">React</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <i className="fab fa-js text-4xl text-yellow-400 mb-2"></i>
              <span className="text-sm">JavaScript</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <i className="fab fa-html5 text-4xl text-orange-500 mb-2"></i>
              <span className="text-sm">HTML5</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <i className="fab fa-css3-alt text-4xl text-blue-500 mb-2"></i>
              <span className="text-sm">CSS3</span>
            </motion.div>

            {/* Backend Technologies */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <i className="fab fa-node-js text-4xl text-green-500 mb-2"></i>
              <span className="text-sm">Node.js</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <i className="fab fa-php text-4xl text-purple-400 mb-2"></i>
              <span className="text-sm">PHP</span>
            </motion.div>

            {/* Database & Tools */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <i className="fas fa-database text-4xl text-blue-300 mb-2"></i>
              <span className="text-sm">MySQL</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <i className="fab fa-git-alt text-4xl text-orange-600 mb-2"></i>
              <span className="text-sm">Git</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <i className="fab fa-docker text-4xl text-blue-400 mb-2"></i>
              <span className="text-sm">Docker</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <i className="fab fa-aws text-4xl text-yellow-500 mb-2"></i>
              <span className="text-sm">AWS</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <i className="fab fa-bootstrap text-4xl text-purple-500 mb-2"></i>
              <span className="text-sm">Bootstrap</span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <i className="fab fa-sass text-4xl text-pink-500 mb-2"></i>
              <span className="text-sm">Sass</span>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;