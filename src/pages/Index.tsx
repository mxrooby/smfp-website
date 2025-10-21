import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { HeroCarousel } from '@/components/HeroCarousel';
import { ProductSection } from '@/components/ProductSection';
import { FAQSection } from '@/components/FAQSection';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation onSectionClick={scrollToSection} />
      
      {/* Hero Section */}
      <section id="home" className="relative">
        <HeroCarousel onSearch={setSearchQuery} />
      </section>

      {/* Products Section */}
      <ProductSection searchQuery={searchQuery} />

      {/* FAQs Section */}
      <FAQSection />

      {/* Footer */}
      <Footer />
      
      {/* Back to Top Button */}
      <BackToTop />
    </div>
  );
};

export default Index;
