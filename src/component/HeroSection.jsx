import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import heroBg from "../assets/bg/hero-bg.jpg";

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: false });

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center w-full"
      style={{ backgroundImage: `url(${heroBg})`, maxWidth: "100vw" }}
    >
      {/* Dark overlay */}
      <motion.div
        className="absolute inset-0 bg-black"
        animate={ { opacity: 0.6 }}
        transition={{ duration: 0.8 }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 py-16 md:py-24 w-full max-w-4xl mx-auto">
        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white mb-6"
          animate={
            isInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 40 }
          }
          transition={{ duration: 0.6 }}
        >
          <Typewriter
                words={["Transform Your Fitness Journey"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={120}
                deleteSpeed={50}
                delaySpeed={1500}
              />          
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl text-white mb-10 max-w-2xl mx-auto"
          animate={
            isInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 40 }
          }
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Empowering women to achieve their strongest, healthiest selves at GlowFit Gym
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          animate={
            isInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 40 }
          }
          transition={{ duration: 0.6, delay: 0.3 }}
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
