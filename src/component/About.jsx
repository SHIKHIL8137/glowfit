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
              At GlowFit Gym, we're dedicated to empowering you to achieve your strongest, healthiest self.
              Our state-of-the-art facility and expert trainers provide a supportive environment where you can
              transform your fitness journey.
            </p>
            <p className="text-gray-300 text-lg mb-6">
              Founded with the vision of creating a welcoming fitness space, we understand the unique needs
              and goals of our members. Our personalized approach ensures that every workout is tailored to
              help you reach your full potential.
            </p>
            <p className="text-gray-300 text-lg mb-6">
              Our mission is to create a welcoming, judgment-free zone where you can focus entirely on your
              fitness goals. We believe that fitness is not just about physical strength, but also about building
              confidence, resilience, and a sense of community.
            </p>
            <p className="text-gray-300 text-lg mb-6">
              With cutting-edge equipment, diverse class offerings, and a team of certified trainers who are
              passionate about health and wellness, GlowFit Gym is more than just a gym - it's a
              community of people supporting each other on their fitness journeys.
            </p>
          </motion.div>

          {/* Additional content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-[#2C1A0D] bg-opacity-80 p-8 rounded-lg"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Why Choose GlowFit?</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-[#C01818] rounded-full p-1 mt-1 mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-300">Welcoming environment for everyone</span>
              </li>
              <li className="flex items-start">
                <div className="bg-[#C01818] rounded-full p-1 mt-1 mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-300">Personalized training programs tailored to your goals</span>
              </li>
              <li className="flex items-start">
                <div className="bg-[#C01818] rounded-full p-1 mt-1 mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-300">State-of-the-art equipment and facilities</span>
              </li>
              <li className="flex items-start">
                <div className="bg-[#C01818] rounded-full p-1 mt-1 mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-300">Expert trainers certified in fitness</span>
              </li>
              <li className="flex items-start">
                <div className="bg-[#C01818] rounded-full p-1 mt-1 mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-300">Diverse class offerings including yoga, zumba, and crossfit</span>
              </li>
              <li className="flex items-start">
                <div className="bg-[#C01818] rounded-full p-1 mt-1 mr-3">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-300">Supportive community of like-minded individuals</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;