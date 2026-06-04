import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Truck, ShieldCheck, Tag } from 'lucide-react';
import { useScrollFadeIn, useScrollSlideIn, useScrollScale } from '@/hooks/useScrollAnimation';
import pcCaseHero from '@/assets/pc-case-hero.png';

interface HeroCarouselProps {
  onSearch: (query: string) => void;
}

export const HeroCarousel = ({ onSearch }: HeroCarouselProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Animation hooks
  const heroContent = useScrollFadeIn();
  const heroImage = useScrollSlideIn('right', 200);
  const whySection = useScrollFadeIn();
  const feature1 = useScrollScale(100);
  const feature2 = useScrollScale(200);
  const feature3 = useScrollScale(300);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery);
      const productsSection = document.getElementById('products');
      productsSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    productsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className="relative min-h-screen bg-gradient-to-br from-background to-background/80 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Content Section */}
            <div 
              ref={heroContent.elementRef}
              className={`space-y-8 text-left ${heroContent.animationClass}`}
              style={heroContent.style}
            >
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold gradient-text leading-tight tracking-tight">
                  Premium Computer Components at Unbeatable Prices
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg font-medium">
                  Experience excellence with SMFP Computer Trading. Discover premium PC components with expert guidance and cutting-edge AR technology for the perfect build.
                </p>
              </div>

              {/* Search Section */}
              <div className="space-y-4">
                <form onSubmit={handleSearch} className="relative max-w-md">
                  <Input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search components, CPUs, GPUs…"
                    className="w-full h-12 pl-12 pr-20 text-foreground bg-background border-border rounded-lg focus:ring-2 focus:ring-primary/50"
                  />
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Button
                    type="submit"
                    size="sm"
                    className="absolute right-2 top-1/2 -translate-y-1/2 h-8 px-4 bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    Search
                  </Button>
                </form>
              </div>
            </div>

            {/* Image Section */}
            <div 
              ref={heroImage.elementRef}
              className={`relative flex justify-center lg:justify-end ${heroImage.animationClass}`}
              style={heroImage.style}
            >
              <div className="relative">
                {/* Yellow Border Frame */}
                <div className="absolute -inset-4 border-4 border-yellow-400 rounded-lg transform rotate-2" />
                <div className="relative bg-background rounded-lg overflow-hidden shadow-2xl">
                  <img
                    src={pcCaseHero}
                    alt="Gaming PC Setup"
                    className="w-full max-w-md h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Our Store Section */}
      <section className="py-16 bg-gradient-to-br from-card via-background to-card/50">
        <div className="container mx-auto px-4">
          <div 
            ref={whySection.elementRef}
            className={`text-center mb-12 ${whySection.animationClass}`}
            style={whySection.style}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold gradient-text mb-4">
              Why Our Store
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience the difference with SMFP Computer Trading's premium services and expert support
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div 
              ref={feature1.elementRef}
              className={`text-center group ${feature1.animationClass}`}
              style={feature1.style}
            >
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Truck className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Free Shipping</h3>
              <p className="text-muted-foreground">
                Fast and secure delivery to your doorstep with no additional cost
              </p>
            </div>
            
            <div 
              ref={feature2.elementRef}
              className={`text-center group ${feature2.animationClass}`}
              style={feature2.style}
            >
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <ShieldCheck className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Official Guarantee</h3>
              <p className="text-muted-foreground">
                All products come with manufacturer warranty and our quality assurance
              </p>
            </div>
            
            <div 
              ref={feature3.elementRef}
              className={`text-center group ${feature3.animationClass}`}
              style={feature3.style}
            >
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Tag className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Special Price</h3>
              <p className="text-muted-foreground">
                Competitive pricing with exclusive deals and bulk purchase discounts
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
