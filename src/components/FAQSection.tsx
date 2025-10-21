import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useScrollFadeIn, useScrollSlideIn, useScrollScale } from '@/hooks/useScrollAnimation';

const faqs = [
  {
    id: 1,
    question: "What is SMFP Computer Trading?",
    answer: "SMFP Computer Trading is a trusted retailer of premium PC components and computer hardware. We offer quality parts from leading brands with expert advice and innovative AR visualization tools through our ARsemble integration."
  },
  {
    id: 2,
    question: "Can I order components through this website?",
    answer: "This website showcases our available components, but ordering is done in-store or through our sales team. Contact us directly to check availability and place orders for the components you need."
  },
  {
    id: 3,
    question: "How do I know if parts are compatible?",
    answer: "You can download the app, ARsemble, which features an AI-powered compatibility checker that analyzes your component selections in real-time. It checks for socket compatibility, power requirements, form factor constraints, and performance bottlenecks, giving you instant feedback with detailed explanations."
  },
  {
    id: 4,
    question: "Do I need special hardware to use ARsemble?",
    answer: "You'll need an Android device that supports ARCore (Google's AR platform). Most modern Android phones from 2018+ support ARCore. The app will check compatibility when you install it and guide you through the setup process."
  },
  {
    id: 5,
    question: "Is ARsemble really free?",
    answer: "Yes! ARsemble is completely free with no ads, in-app purchases, or hidden fees. Our goal is to help people learn about PC building and make informed decisions about their hardware purchases."
  }
];

export const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  
  // Animation hooks
  const sectionHeader = useScrollFadeIn();
  const ctaSection = useScrollSlideIn('up', 200);

  const toggleItem = (id: number) => {
    setOpenItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section id="faqs" className="py-20 bg-gradient-to-br from-card/30 via-background to-muted/10">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div 
          ref={sectionHeader.elementRef}
          className={`text-center mb-12 ${sectionHeader.animationClass}`}
          style={sectionHeader.style}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 gradient-text">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Get answers to common questions about our services, products, and the ARsemble app.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const faqAnimation = useScrollSlideIn('up', index * 100);
            return (
              <Card 
                key={faq.id}
                ref={faqAnimation.elementRef}
                className={`card-hover bg-card/80 backdrop-blur-sm border-border/50 ${faqAnimation.animationClass}`}
                style={faqAnimation.style}
              >
              <CardContent className="p-0">
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/20 transition-all duration-300 rounded-lg"
                >
                  <h3 className="text-lg font-heading font-semibold text-foreground pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openItems.includes(faq.id) ? (
                      <ChevronUp className="w-5 h-5 text-primary transition-transform duration-300" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground transition-transform duration-300" />
                    )}
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-out ${
                    openItems.includes(faq.id) 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6">
                    <div className="w-full h-px bg-gradient-to-r from-primary/50 to-accent/50 mb-4" />
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div 
          ref={ctaSection.elementRef}
          className={`text-center mt-12 ${ctaSection.animationClass}`}
          style={ctaSection.style}
        >
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-heading font-bold mb-4 gradient-text">
                Still Have Questions?
              </h3>
              <p className="text-muted-foreground mb-6">
                Our expert team is here to help you find the perfect components for your build.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="text-center">
                  <p className="font-medium text-foreground">Visit Our Store</p>
                  <p className="text-sm text-muted-foreground">Get hands-on assistance</p>
                </div>
                <div className="text-center">
                  <p className="font-medium text-foreground">Call Our Experts</p>
                  <p className="text-sm text-muted-foreground">Professional guidance</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};