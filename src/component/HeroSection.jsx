import heroBg from '../assets/bg/hero-bg.jpg';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center w-full"
      style={{ backgroundImage: `url(${heroBg})`, maxWidth: '100vw' }}
    >
      <motion.div 
        className="absolute inset-0 bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1 }}
      ></motion.div>
      
      <div className="relative z-10 text-center px-4 py-16 md:py-24 w-full max-w-4xl mx-auto">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Transform Your Fitness Journey
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-white mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Empowering women to achieve their strongest, healthiest selves at GlowFit Gym
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.button 
            className="bg-[#C01818] hover:bg-[#8A0F0F] text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join Now
          </motion.button>
          <motion.button 
            className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;