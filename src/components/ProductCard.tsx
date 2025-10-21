import { useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Product } from '@/data/products';
import { Eye, ShoppingCart, ZoomIn, ZoomOut } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [imageZoom, setImageZoom] = useState(1);

  const handleZoomIn = () => setImageZoom(prev => Math.min(prev + 0.25, 3));
  const handleZoomOut = () => setImageZoom(prev => Math.max(prev - 0.25, 1));

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      // Smooth scroll to the footer contact section
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If not on the homepage, navigate to it and target #contact
      window.location.href = '/#contact';
    }
  };

  return (
    <>
      <Card className="card-hover group overflow-hidden bg-card/90 backdrop-blur-sm border-border/50">
        {/* Product Image */}
        <div 
          className="relative overflow-hidden bg-gradient-to-br from-muted/50 to-muted/20 cursor-pointer"
          onClick={() => setIsImageOpen(true)}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Quick View Button */}
          <Button
            size="sm"
            variant="secondary"
            onClick={(e) => {
              e.stopPropagation();
              setIsImageOpen(true);
            }}
            className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
          >
            <Eye className="w-4 h-4" />
          </Button>
        </div>

        <CardContent className="p-4 space-y-3">
          {/* Brand Badge */}
          <Badge variant="outline" className="text-xs border-primary/30 text-primary">
            {product.brand}
          </Badge>

          {/* Product Name */}
          <h3 className="font-heading font-semibold text-lg text-foreground group-hover:text-primary transition-colors duration-300">
            {product.name}
          </h3>

          {/* Model */}
          <p className="text-sm text-muted-foreground font-medium">
            Model: {product.model}
          </p>

          {/* Specifications */}
          <div className="space-y-1">
            {product.specs.slice(0, 3).map((spec, index) => (
              <div key={index} className="flex items-center text-xs text-muted-foreground">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
                {spec}
              </div>
            ))}
            {product.specs.length > 3 && (
              <div className="text-xs text-primary font-medium">
                +{product.specs.length - 3} more specs
              </div>
            )}
          </div>
        </CardContent>

        <CardFooter className="p-4 pt-0 flex items-center justify-between">
          {/* Price */}
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-primary font-heading">
              ₱{product.price}
            </span>
            <span className="text-xs text-muted-foreground">Best Price</span>
          </div>

          {/*  Contact Button (Scrolls to Footer) */}
          <Button 
            size="sm" 
            onClick={handleContactClick}
            className="glow-button bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Contact
          </Button>
        </CardFooter>
      </Card>

      {/* Image Zoom Dialog */}
      <Dialog open={isImageOpen} onOpenChange={setIsImageOpen}>
        <DialogContent className="max-w-4xl p-0">
          <div className="relative bg-card">
            <div className="overflow-auto max-h-[80vh] p-4">
              <img
                src={product.image}
                alt={product.name}
                style={{ transform: `scale(${imageZoom})`, transition: 'transform 0.2s' }}
                className="w-full h-auto"
              />
            </div>
            <div className="absolute bottom-4 right-4 flex gap-2">
              <Button
                size="icon"
                variant="secondary"
                onClick={handleZoomOut}
                disabled={imageZoom <= 1}
              >
                <ZoomOut className="w-4 h-4" />
              </Button>
              <Button
                size="icon"
                variant="secondary"
                onClick={handleZoomIn}
                disabled={imageZoom >= 3}
              >
                <ZoomIn className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
