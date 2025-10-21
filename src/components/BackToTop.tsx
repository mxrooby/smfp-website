import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById('home');
      if (homeSection) {
        const homeSectionBottom = homeSection.offsetTop + homeSection.offsetHeight;
        const scrollPosition = window.scrollY + 100; // Add some buffer
        
        setIsVisible(scrollPosition > homeSectionBottom);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
      isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0 pointer-events-none'
    }`}>
      <Button
        onClick={scrollToTop}
        size="icon"
        className="w-12 h-12 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow hover:shadow-xl hover:scale-110 transition-all duration-300"
      >
        <ArrowUp className="w-5 h-5" />
      </Button>
    </div>
  );
};