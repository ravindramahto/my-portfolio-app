import React, { Component } from 'react';
import { motion } from 'framer-motion'; 
import { FaGraduationCap, FaUniversity, FaSchool } from 'react-icons/fa';   
    
class Education extends Component {
    render() {
        return (
            <>
            <div className="min-h-screen w-screen bg-gray-900 mb-5 text-white py-20 px-4 overflow-x-hidden">
                <div className="container mx-auto px-4 py-8">
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
                      <i className="fas fa-graduation-cap mr-4"></i>
                      My Education Journey
                    </motion.h1>
                </div>
                <div className="container mx-auto max-w-6xl">
                    <div className="space-y-12">
                        {/* Post Graduate Education */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-gradient-to-r from-green-500/10 to-orange-500/10 rounded-xl p-6 shadow-xl backdrop-blur-sm"
                        >
                            <div className="flex flex-col md:flex-row items-start gap-6">
                                <div className="w-full md:w-1/4 flex items-center justify-center">
                                    <FaUniversity className="text-8xl text-orange-500 transform hover:scale-110 transition-transform duration-500" />
                                </div>
                                <div className="w-full md:w-3/4">
                                    <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-orange-500 to-green-500 text-transparent bg-clip-text">
                                    Master In Computer Applications (MCA) 
                                    </h2>
                                    <h3 className="text-xl text-gray-300 mb-2"> Dr. CV Raman University,Bilaspur,C.G. </h3>
                                    <p className="text-gray-400 mb-4">2017 - 2020</p>
                                    <p className="text-gray-300">
                                        Advanced studies in specialized areas of computer science including Machine Learning, 
                                        Artificial Intelligence, and Advanced Software Architecture. Research focused on 
                                        emerging technologies and their practical applications.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                        {/* College Education */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-gradient-to-r from-orange-500/10 to-green-500/10 rounded-xl p-6 shadow-xl backdrop-blur-sm"
                        >
                            <div className="flex flex-col md:flex-row items-start gap-6">
                                <div className="w-full md:w-1/4 flex items-center justify-center">
                                    <FaGraduationCap className="text-8xl text-orange-500 transform hover:scale-110 transition-transform duration-500" />
                                </div>
                                <div className="w-full md:w-3/4">
                                    <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-orange-500 to-green-500 text-transparent bg-clip-text">
                                    Bachelor In Computer Applications (BCA)
                                    </h2>
                                    <h3 className="text-xl text-gray-300 mb-2">Dr. CV Raman University,Bilaspur,C.G.</h3>
                                    <p className="text-gray-400 mb-4">2014 - 2017</p>
                                    <p className="text-gray-300">
                                        Pursuing my degree with a focus on software development, algorithms, and modern web technologies.
                                        Notable coursework includes Data Structures, Database Management, and Web Development.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* High School */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-gradient-to-r from-green-500/10 to-orange-500/10 rounded-xl p-6 shadow-xl backdrop-blur-sm"
                        >
                            <div className="flex flex-col md:flex-row items-start gap-6">
                                <div className="w-full md:w-1/4 flex items-center justify-center">
                                    <FaSchool className="text-8xl text-orange-500 transform hover:scale-110 transition-transform duration-500" />
                                </div>
                                <div className="w-full md:w-3/4">
                                    <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-green-500 to-orange-500 text-transparent bg-clip-text">
                                        Intermediate In Science (12th)
                                    </h2>
                                    <h3 className="text-xl text-gray-300 mb-2"> St. John's Inter College Ranchi,Jharkhand</h3>
                                    <p className="text-gray-400 mb-4">2012 - 2022</p>
                                    <p className="text-gray-300">
                                        Completed my higher secondary education with distinction in Physics, Chemistry, and Mathematics.
                                        Participated in various science exhibitions and competitions.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                        {/* School Education */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-gradient-to-r from-orange-500/10 to-green-500/10 rounded-xl p-6 shadow-xl backdrop-blur-sm"
                        >
                            <div className="flex flex-col md:flex-row items-start gap-6">
                                <div className="w-full md:w-1/4 flex items-center justify-center">
                                    <FaSchool className="text-8xl text-orange-500 transform hover:scale-110 transition-transform duration-500" />
                                </div>
                                <div className="w-full md:w-3/4">
                                    <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-orange-500 to-green-500 text-transparent bg-clip-text">
                                        Secondary School (10th)
                                    </h2>
                                    <h3 className="text-xl text-gray-300 mb-2">St. Mother Teresa High School Neori Vikas,Ranchi,Jharkhand</h3>
                                    <p className="text-gray-400 mb-4">2012</p>
                                    <p className="text-gray-300">
                                        Completed secondary education with excellent academic performance.
                                        Actively participated in extracurricular activities and sports events.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Skills Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-12 mb-14"
                        >
                            <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-orange-500 to-green-500 text-transparent bg-clip-text">
                                Key Skills Acquired
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 mb-14 gap-4">
                                {['Programming', 'Problem Solving', 'Web Development', 'Data Structures', 
                                  'Algorithms', 'Database Design', 'System Design', 'Team Leadership'].map((skill, index) => (
                                    <div 
                                        key={index}
                                        className="bg-gradient-to-r from-orange-500/5 to-green-500/5 p-4 rounded-lg text-center hover:from-orange-500/10 hover:to-green-500/10 transition-all duration-300"
                                    >
                                        <p className="text-gray-300">{skill}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default Education;