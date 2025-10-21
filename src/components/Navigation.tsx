import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Cpu } from 'lucide-react';

interface NavigationProps {
  onSectionClick?: (sectionId: string) => void;
}

export const Navigation = ({ onSectionClick }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const navItems = [
    { id: 'home', label: 'Home', href: isHomePage ? '#home' : '/' },
    { id: 'products', label: 'Products', href: isHomePage ? '#products' : '/#products' },
    { id: 'faqs', label: 'FAQs', href: isHomePage ? '#faqs' : '/#faqs' },
    { id: 'build-pc', label: 'Build A PC', href: '/build-pc' },
    { id: 'contact', label: 'Contact Us', href: isHomePage ? '#contact' : '/#contact' }
  ];

  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      const sections = ['home', 'products', 'faqs', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const handleNavClick = (e: React.MouseEvent, item: typeof navItems[0]) => {
    // Handle anchor links on the same page
    if (item.href.startsWith('#')) {
      e.preventDefault();
      const sectionId = item.href.substring(1);
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      onSectionClick?.(item.id);
      setIsOpen(false);
      return;
    }
    
    // Handle anchor links from other pages (e.g., /#contact)
    if (item.href.includes('#') && !isHomePage) {
      e.preventDefault();
      const sectionId = item.href.split('#')[1];
      // Navigate to home first, then scroll after a short delay
      window.location.href = '/';
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
      setIsOpen(false);
      return;
    }
    
    // Handle regular navigation (e.g., /build-pc)
    if (item.id === 'build-pc') {
      window.scrollTo(0, 0);
    }
    setIsOpen(false);
  };

  const isActive = (itemId: string) => {
    if (!isHomePage) {
      return itemId === 'build-pc' && location.pathname === '/build-pc';
    }
    return activeSection === itemId;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 font-heading font-bold text-xl">
            <img 
              src="/smfp-logo.png" 
              alt="SMFP Logo" 
              className="w-8 h-8 object-contain" 
            />
            <span className="gradient-text">SMFP Computer Trading</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className={`relative font-medium transition-all duration-300 hover:text-primary pb-1 ${
                  isActive(item.id) ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {item.label}
                {isActive(item.id) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary animate-in fade-in slide-in-from-left duration-300" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className={`block font-medium transition-all duration-300 hover:text-primary ${
                  isActive(item.id) ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};