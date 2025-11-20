import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Services', href: '#services' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    const handleScrollTo = (href) => {
        // Remove '#' from href
        const targetId = href.substring(1);

        // Find the element
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        } else {
            if (targetId === "home") {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });
            }
        }
    };


    const socialMedia = [
        {
            icon: <FaFacebook className="text-xl text-white" />,
            name: "Facebook",
            url: "#",
        },
        {
            icon: <FaInstagram className="text-xl text-white" />,
            name: "Instagram",
            url: "#",
        },
        {
            icon: <FaTwitter className="text-xl text-white" />,
            name: "Twitter",
            url: "#",
        },
        {
            icon: <FaYoutube className="text-xl text-white" />,
            name: "YouTube",
            url: "#",
        },
    ];

    return (
        <footer>
            <div className="bg-[#2C1A0D] text-white border-t-2 border-[#C01818]">
                <div className="container mx-auto max-w-6xl py-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Logo and Description */}
                        <div className="text-center md:text-left">
                            <h2 className="text-2xl font-bold mb-4 text-[#FFD36E]">
                                GlowFit Gym
                            </h2>
                            <p className="text-gray-300 mb-4">
                                Empowering you to achieve your strongest, healthiest self
                                through personalized fitness programs and a supportive
                                community.
                            </p>
                            <div className="flex justify-center md:justify-start space-x-4">
                                {socialMedia.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.url}
                                        className="bg-black bg-opacity-30 rounded-full p-2 inline-flex items-center justify-center"
                                        whileHover={{
                                            y: -3,
                                            backgroundColor: "#C01818",
                                            transition: { duration: 0.3 },
                                        }}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="text-center">
                            <h3 className="text-xl font-bold mb-4 text-[#FFD36E]">
                                Quick Links
                            </h3>
                            <div className="flex flex-col items-center">
                                {navLinks.map((link, index) => (
                                    <motion.button
                                        key={link.name}
                                        onClick={() => handleScrollTo(link.href)}
                                        className="text-white hover:text-orange-700 px-1 py-2 text-sm font-medium border-b-2 border-transparent hover:border-orange-700 transition-colors duration-300"
                                        whileHover={{ y: -2 }}
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.1, type: "spring", stiffness: 400, damping: 10 }}
                                    >
                                        {link.name}
                                    </motion.button>
                                ))}
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="text-center md:text-left">
                            <h3 className="text-xl font-bold mb-4 text-[#FFD36E]">
                                Contact Info
                            </h3>
                            <ul className="space-y-2 text-gray-300">
                                <li>Email: info@glowfitgym.com</li>
                                <li>Phone: +1 (555) 123-4567</li>
                                <li>Address: 123 Fitness Street, Wellness City, WC 12345</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-700"></div>
            <div className=" bg-black mx-auto min-w-full py-2 text-center">
                <p className="text-gray-400">
                    &copy; {currentYear} GlowFit Gym. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
