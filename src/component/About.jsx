import React from 'react';
import { motion } from 'framer-motion';
import aboutBg from '../assets/bg/about-bg.jpg';

export const About = () => {
  return (
    <section 
      id="about" 
      className="min-h-screen flex items-center justify-center py-16 px-4 relative"
      style={{ 
        backgroundImage: `url(${aboutBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-70"></div>
      
      {/* Content */}
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About GlowFit Gym</h2>
            <p className="text-gray-300 text-lg mb-6">
              At GlowFit Gym, we're dedicated to empowering women to achieve their strongest, healthiest selves. 
              Our state-of-the-art facility and expert trainers provide a supportive environment where you can 
              transform your fitness journey.
            </p>
            <p className="text-gray-300 text-lg mb-6">
              Founded with the vision of creating a women-only fitness space, we understand the unique needs 
              and goals of our members. Our personalized approach ensures that every workout is tailored to 
              help you reach your full potential.
            </p>
            <motion.button 
              className="bg-[#C01818] hover:bg-[#8A0F0F] text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
          
          {/* Stats or additional content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="bg-[#2C1A0D] bg-opacity-80 p-6 rounded-lg text-center">
              <h3 className="text-4xl font-bold text-[#FFD36E] mb-2">500+</h3>
              <p className="text-white">Happy Members</p>
            </div>
            <div className="bg-[#2C1A0D] bg-opacity-80 p-6 rounded-lg text-center">
              <h3 className="text-4xl font-bold text-[#FFD36E] mb-2">10+</h3>
              <p className="text-white">Expert Trainers</p>
            </div>
            <div className="bg-[#2C1A0D] bg-opacity-80 p-6 rounded-lg text-center">
              <h3 className="text-4xl font-bold text-[#FFD36E] mb-2">5000+</h3>
              <p className="text-white">Workout Sessions</p>
            </div>
            <div className="bg-[#2C1A0D] bg-opacity-80 p-6 rounded-lg text-center">
              <h3 className="text-4xl font-bold text-[#FFD36E] mb-2">3</h3>
              <p className="text-white">Years Experience</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;