import React, { Component } from 'react';
import { motion } from 'framer-motion';
class Contact extends Component {
    render() {
        return (
            <div className="min-h-screen w-screen bg-gray-900 mb-5 text-white py-20 px-4 overflow-x-hidden">
                <div className="container mx-auto px-4 py-20 8">
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
                        Get In Touch
                    </motion.h1>
                </div>
            </div>
        );
    }
}

export default Contact;