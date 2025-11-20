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
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay */}
      <motion.div
        className="absolute inset-0 bg-black"
        animate={{ opacity: 0.6 }}
        transition={{ duration: 0.8 }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 py-16 md:py-24 w-full max-w-4xl mx-auto">
        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white mb-6"
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
        >
          <Typewriter
            words={["Spark Your Fitness Journey"]}
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
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Empowering you to achieve your strongest, healthiest self at GlowFit Gym
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;