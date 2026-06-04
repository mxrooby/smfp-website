import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook } from 'lucide-react';
import { useScrollFadeIn, useScrollSlideIn } from '@/hooks/useScrollAnimation';

export const Footer = () => {
  // Animation hooks
  const leftSection = useScrollSlideIn('left');
  const rightSection = useScrollSlideIn('right', 200);
  const bottomBar = useScrollFadeIn(300);
  
  return (
    <footer id="contact" className="bg-gradient-to-br from-card via-background to-card/50 border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Left Section - Contact Info */}
          <div 
            ref={leftSection.elementRef}
            className={`space-y-8 ${leftSection.animationClass}`}
            style={leftSection.style}
          >
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <img 
                  src="/smfp-logo.png" 
                  alt="SMFP Logo" 
                  className="w-8 h-8 object-contain" 
                />
                <span className="font-heading font-bold text-xl gradient-text">SMFP Computer</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Your trusted partner for premium PC components and expert build guidance. 
                Experience the future of PC building with our AR visualization tools.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/smfp.compstore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Quick Links */}
              <div className="space-y-4">
                <h3 className="font-heading font-semibold text-lg text-foreground">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/#products" className="text-muted-foreground hover:text-primary transition-colors">
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link to="/#faqs" className="text-muted-foreground hover:text-primary transition-colors">
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link to="/build-pc" className="text-muted-foreground hover:text-primary transition-colors">
                      Build A PC
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <h3 className="font-heading font-semibold text-lg text-foreground">Contact Us</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">594 J Nepomuceno St., Quiapo, Manila</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                    <a href="tel:09498837098" className="text-muted-foreground hover:text-primary transition-colors">
                      09498837098
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                    <a href="mailto:sherlopilarco@yahoo.com" className="text-muted-foreground hover:text-primary transition-colors">
                      sherlopilarco@yahoo.com
                    </a>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 bg-primary rounded-full" />
                    </div>
                    <span className="text-muted-foreground">Open daily, Closes 6:00 PM - 6:30 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Map */}
          <div 
            ref={rightSection.elementRef}
            className={`space-y-4 ${rightSection.animationClass}`}
            style={rightSection.style}
          >
            <h3 className="font-heading font-semibold text-lg text-foreground">Find Us</h3>
            <div className="w-full h-80 rounded-lg overflow-hidden border border-border/50 bg-card">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15444.034142504954!2d120.9894480474745!3d14.59858943260928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9d3a69e2de5%3A0x34e0eebaa4d9c4e7!2sSMFP%20Computer!5e0!3m2!1sen!2sph!4v1761070638099!5m2!1sen!2sph"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
                title="SMFP Computer Location"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Visit our store to see components in person and get expert advice from our team.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          ref={bottomBar.elementRef}
          className={`mt-12 pt-8 border-t border-border/50 text-center ${bottomBar.animationClass}`}
          style={bottomBar.style}
        >
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} SMFP Computer Trading. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
