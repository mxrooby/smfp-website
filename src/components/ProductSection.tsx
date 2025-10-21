import { useState } from 'react';
import { ProductCard } from './ProductCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useScrollFadeIn, useScrollSlideIn, useScrollScale } from '@/hooks/useScrollAnimation';
import { products, productCategories, getProductsByCategory } from '@/data/products';

interface ProductSectionProps {
  searchQuery?: string;
}

export const ProductSection = ({ searchQuery = '' }: ProductSectionProps) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [visibleProducts, setVisibleProducts] = useState(8);
  
  // Animation hooks
  const sectionHeader = useScrollFadeIn();
  const categoryFilter = useScrollSlideIn('left', 100);
  const statsGrid = useScrollSlideIn('up', 200);

  let filteredProducts = selectedCategory === 'all' 
    ? products 
    : getProductsByCategory(selectedCategory);

  // Apply search filter if search query exists
  if (searchQuery.trim()) {
    const query = searchQuery.toLowerCase();
    filteredProducts = filteredProducts.filter(product => 
      product.name.toLowerCase().includes(query) ||
      product.brand.toLowerCase().includes(query) ||
      product.model.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      product.specs.some(spec => spec.toLowerCase().includes(query))
    );
  }

  const displayedProducts = filteredProducts.slice(0, visibleProducts);

  const loadMore = () => {
    setVisibleProducts(prev => prev + 8);
  };

  // Smooth scroll helper to bring products into view
  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-background via-card/50 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div 
          ref={sectionHeader.elementRef}
          className={`text-center mb-12 ${sectionHeader.animationClass}`}
          style={sectionHeader.style}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 gradient-text">
            Premium Components
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover our extensive collection of high-performance PC components from trusted brands. 
            Each component is carefully selected for quality, performance, and compatibility.
          </p>
        </div>

        {/* Category Filter */}
        <div 
          ref={categoryFilter.elementRef}
          className={`flex flex-wrap justify-center gap-3 mb-12 ${categoryFilter.animationClass}`}
          style={categoryFilter.style}
        >
          <Button
            variant={selectedCategory === 'all' ? 'default' : 'outline'}
            onClick={() => {
              setSelectedCategory('all');
              scrollToProducts();
            }}
            className={selectedCategory === 'all' ? 'glow-button' : 'hover:border-primary'}
          >
            All Products
          </Button>
          {productCategories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? 'default' : 'outline'}
              onClick={() => {
                setSelectedCategory(category.id);
                scrollToProducts();
              }}
              className={`${
                selectedCategory === category.id ? 'glow-button' : 'hover:border-primary'
              } flex items-center gap-2`}
            >
              <span>{category.icon}</span>
              {category.name}
            </Button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="product-grid mb-12">
          {displayedProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleProducts < filteredProducts.length && (
          <div className="text-center">
            <Button
              onClick={loadMore}
              size="lg"
              variant="outline"
              className="glow-button border-primary hover:bg-primary hover:text-primary-foreground"
            >
              Load More Products
            </Button>
          </div>
        )}

        {/* Category Stats */}
        <div 
          ref={statsGrid.elementRef}
          className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 ${statsGrid.animationClass}`}
          style={statsGrid.style}
        >
          {productCategories.map((category) => {
            const categoryCount = getProductsByCategory(category.id).length;
            return (
              <div
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id);
                  scrollToProducts();
                }}
                className="text-center p-6 bg-card/50 rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300 card-hover cursor-pointer"
              >
                <div className="text-3xl mb-2">{category.icon}</div>
                <h3 className="font-heading font-semibold text-lg mb-1">{category.name}</h3>
                <Badge variant="secondary">{categoryCount} Products</Badge>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
