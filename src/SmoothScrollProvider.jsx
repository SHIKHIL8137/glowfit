import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SmoothScrollProvider = ({ children }) => {
  useEffect(() => {
    ScrollTrigger.config({
      autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
    });

    const setupSmoothScrolling = () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

      const root = document.documentElement;

      root.style.setProperty("--scroll-behavior", "smooth");

      document.body.classList.add("smooth-scroll");

      const style = document.createElement("style");
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

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

        document.body.classList.remove("smooth-scroll");

        if (style.parentNode) {
          style.parentNode.removeChild(style);
        }
      };
    };

    const cleanup = setupSmoothScrolling();

    window.addEventListener("load", () => {
      ScrollTrigger.refresh();
    });

    return cleanup;
  }, []);

  return <>{children}</>;
};

export default SmoothScrollProvider;
