import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options;
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { elementRef, isVisible };
};

// Specific animation variants
export const useScrollFadeIn = (delay = 0) => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  const animationClass = isVisible 
    ? 'animate-fade-in opacity-100 translate-y-0' 
    : 'opacity-0 translate-y-10';
    
  const style = delay > 0 ? { animationDelay: `${delay}ms` } : {};
  
  return { elementRef, animationClass, style };
};

export const useScrollSlideIn = (direction: 'left' | 'right' | 'up' | 'down' = 'up', delay = 0) => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  const getTransformClass = () => {
    if (isVisible) return 'opacity-100 translate-x-0 translate-y-0';
    
    switch (direction) {
      case 'left': return 'opacity-0 -translate-x-10';
      case 'right': return 'opacity-0 translate-x-10';
      case 'up': return 'opacity-0 translate-y-10';
      case 'down': return 'opacity-0 -translate-y-10';
      default: return 'opacity-0 translate-y-10';
    }
  };
  
  const animationClass = `transition-all duration-700 ease-out ${getTransformClass()}`;
  const style = delay > 0 ? { transitionDelay: `${delay}ms` } : {};
  
  return { elementRef, animationClass, style };
};

export const useScrollScale = (delay = 0) => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  const animationClass = isVisible 
    ? 'opacity-100 scale-100' 
    : 'opacity-0 scale-95';
    
  const baseClass = 'transition-all duration-500 ease-out';
  const style = delay > 0 ? { transitionDelay: `${delay}ms` } : {};
  
  return { elementRef, animationClass: `${baseClass} ${animationClass}`, style };
};