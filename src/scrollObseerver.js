import { useEffect } from 'react';

const useIntersectionObserver = (activeLink,HandleLinkClick) => {
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          HandleLinkClick(`/#${id}`);
          console.log(`observer link is /#${id}`)
        }
      });
    }, {
      threshold: 0.7 // Adjust this value for earlier or later detection
    });
    
    sections.forEach(section => observer.observe(section));
    
    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, [activeLink]);
};

export default useIntersectionObserver;
