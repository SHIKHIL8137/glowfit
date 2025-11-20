import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaFacebook, 
  FaInstagram, 
  FaTwitter, 
  FaYoutube 
} from 'react-icons/fa';

export const Contact = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl text-[#FFD36E]" />,
      title: "Email",
      content: "info@glowfitgym.com"
    },
    {
      icon: <FaPhone className="text-2xl text-[#FFD36E]" />,
      title: "Phone",
      content: "+1 (555) 123-4567"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl text-[#FFD36E]" />,
      title: "Location",
      content: "123 Fitness Street, Wellness City, WC 12345"
    }
  ];

  const socialMedia = [
    {
      icon: <FaFacebook className="text-2xl text-white" />,
      name: "Facebook",
      url: "#"
    },
    {
      icon: <FaInstagram className="text-2xl text-white" />,
      name: "Instagram",
      url: "#"
    },
    {
      icon: <FaTwitter className="text-2xl text-white" />,
      name: "Twitter",
      url: "#"
    },
    {
      icon: <FaYoutube className="text-2xl text-white" />,
      name: "YouTube",
      url: "#"
    }
  ];

  return (
    <section id="contact" className=" bg-black py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.h2>
        <motion.p 
          className="text-gray-300 text-center mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Get in touch with us for any inquiries or to join our fitness community
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              className="bg-[#2C1A0D] rounded-lg p-6 text-center flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -5,
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.1)',
                transition: { duration: 0.3 }
              }}
            >
              <div className="mb-4 p-3 bg-black rounded-full">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.content}</p>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Contact;