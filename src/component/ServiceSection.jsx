import React from "react";
import { motion } from "framer-motion";

import yogaImg from "../assets/cards/yoga.jpg";
import zumbaImg from "../assets/cards/zumba.jpg";
import crossfitImg from "../assets/cards/crossfit.jpg";
import aerobicsImg from "../assets/cards/aerobics.jpg";
import functionalStrengtheningImg from "../assets/cards/functionalStrengthening.jpg";
import physiqueTransformationImg from "../assets/cards/physiqurTransformation.jpg";
import cardioImg from "../assets/cards/cardio.jpg";
import weightTrainingImg from "../assets/cards/weightTraining.jpg";

export const ServiceSection = () => {
  const services = [
    {
      name: "Yoga",
      description:
        "Improve flexibility, balance, and mental well-being through guided yoga sessions.",
      image: yogaImg,
    },
    {
      name: "Zumba",
      description:
        "High-energy dance workouts that combine Latin music with easy-to-follow moves.",
      image: zumbaImg,
    },
    {
      name: "CrossFit",
      description:
        "High-intensity functional training to build strength, endurance, and agility.",
      image: crossfitImg,
    },
    {
      name: "Aerobics",
      description:
        "Cardiovascular exercises to boost heart health and burn calories.",
      image: aerobicsImg,
    },
    {
      name: "Functional Strengthening",
      description:
        "Targeted exercises to improve everyday movement and prevent injuries.",
      image: functionalStrengtheningImg,
    },
    {
      name: "Physique Transformation",
      description:
        "Personalized programs to reshape your body and achieve your fitness goals.",
      image: physiqueTransformationImg,
    },
    {
      name: "Cardio",
      description:
        "Effective cardiovascular training to improve stamina and overall fitness.",
      image: cardioImg,
    },
    {
      name: "Weight Training",
      description:
        "Strength building exercises using free weights and machines.",
      image: weightTrainingImg,
    },
  ];

  return (
    <section id="services" className="min-h-screen bg-black py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h2>
        <motion.p
          className="text-gray-300 text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Discover our range of specialized fitness programs designed for
          everyone
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        y: -10,
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.2)",
        transition: { duration: 0.3 },
      }}
      className="bg-[#2C1A0D] rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 border-t-4 border-[#C01818] hover:border-[#FFD36E]"
    >
      <div className="h-48 overflow-hidden">
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6 flex flex-col items-center text-center">
        <h3 className="text-xl font-bold mb-2 text-white">{service.name}</h3>
        <p className="text-gray-300">{service.description}</p>
      </div>
    </motion.div>
  );
};

export default ServiceSection;
