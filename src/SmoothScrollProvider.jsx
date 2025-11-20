import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const SmoothScrollProvider = ({ children }) => {
  useEffect(() => {
    // Configure ScrollTrigger
    ScrollTrigger.config({
      autoRefreshEvents: "visibilitychange,DOMContentLoaded,load"
    });

    // Set up smooth scrolling
    const setupSmoothScrolling = () => {
      // Kill any existing ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      
      // Select the root element
      const root = document.documentElement;
      
      // Set CSS variables for smooth scrolling
      root.style.setProperty('--scroll-behavior', 'smooth');
      
      // Add smooth scrolling class to body
      document.body.classList.add('smooth-scroll');
      
      // Add CSS for smooth scrolling
      const style = document.createElement('style');
      style.textContent = `
        .smooth-scroll {
          scroll-behavior: smooth;
        }
        
        @media (prefers-reduced-motion: no-preference) {
          html {
            scroll-behavior: smooth;
          }
        }
      `;
      document.head.appendChild(style);
      
      // Cleanup function
      return () => {
        // Kill all ScrollTrigger instances
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        
        // Remove smooth scroll class
        document.body.classList.remove('smooth-scroll');
        
        // Remove the style element
        if (style.parentNode) {
          style.parentNode.removeChild(style);
        }
      };
    };
    
    // Initialize smooth scrolling
    const cleanup = setupSmoothScrolling();
    
    // Refresh ScrollTrigger on load
    window.addEventListener('load', () => {
      ScrollTrigger.refresh();
    });
    
    // Return cleanup function
    return cleanup;
  }, []);

  return <>{children}</>;
};

export default SmoothScrollProvider;