import { useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Download, Smartphone, HardDrive, Cpu, CheckCircle2, AlertCircle, Star } from 'lucide-react';

const systemRequirements = [
  { icon: Smartphone, title: "ARCore Support", description: "Android device with ARCore compatibility" },
  { icon: HardDrive, title: "Storage", description: "Minimum 500MB free space" },
  { icon: Cpu, title: "OS Version", description: "Android 7.0 (API level 24) or higher" },
];

const features = [
  { icon: CheckCircle2, title: "Real Time Compatibility Checker", description: "Instant analysis of component compatibility with detailed feedback" },
  { icon: Star, title: "3D AR Visualization", description: "See components in augmented reality before you buy" },
  { icon: CheckCircle2, title: "Learning Module", description: "Curated videos and tutorials to help you understand PC building concepts" },
  { icon: Star, title: "Expert Recommendations", description: "AI-powered suggestions for optimal builds based on your needs" },
];

const BuildPC = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const handleDownload = () => {
    // In a real app, this would trigger the APK download
    alert("APK download would start here. This is a demo version.");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-card/30 to-background relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="container mx-auto px-4 text-center relative">
            <div className="max-w-4xl mx-auto fade-in-up">
              <Badge variant="outline" className="mb-6 text-primary border-primary/30">
                Android Exclusive
              </Badge>
              <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 gradient-text">
                Build A PC with ARsemble
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                Experience the future of PC building with our revolutionary AR app. 
                Visualize components in 3D, check compatibility instantly, and build with confidence.
              </p>
              <Button 
                onClick={handleDownload}
                size="lg"
                className="btn-hero text-xl px-10 py-6 group"
              >
                <Download className="mr-3 w-6 h-6" />
                Download ARsemble APK
                <div className="ml-3 text-sm bg-accent/20 px-2 py-1 rounded">FREE</div>
              </Button>
            </div>
          </div>
        </section>

        {/* System Requirements */}
        <section className="py-20 bg-gradient-to-br from-muted/10 to-card/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 fade-in-up">
              <h2 className="text-4xl font-heading font-bold mb-4 gradient-text">
                System Requirements
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Ensure your Android device meets these requirements for the best ARsemble experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {systemRequirements.map((req, index) => (
                <Card 
                  key={index} 
                  className="card-hover bg-card/80 backdrop-blur-sm border-border/50 text-center slide-in-left"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <req.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl font-heading">{req.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{req.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Compatibility Note */}
            <Card className="max-w-3xl mx-auto mt-12 bg-gradient-to-r from-accent/10 to-primary/10 border-accent/20">
              <CardContent className="p-8 text-center">
                <AlertCircle className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-heading font-bold mb-4">Device Compatibility</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Most Android devices from 2018+ support ARCore. The app will automatically check 
                  your device compatibility during installation and guide you through the setup process 
                  if any adjustments are needed.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* App Features */}
        <section className="py-20 bg-gradient-to-br from-background to-card/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 fade-in-up">
              <h2 className="text-4xl font-heading font-bold mb-4 gradient-text">
                Why Choose ARsemble?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Revolutionary features that make PC building accessible, educational, and fun for everyone.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {features.map((feature, index) => (
                <Card 
                  key={index} 
                  className="card-hover bg-card/90 backdrop-blur-sm border-border/50 bounce-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <CardContent className="p-8 flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-semibold mb-3 text-foreground">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Download CTA */}
        <section className="py-20 bg-gradient-to-br from-card/20 via-background to-muted/10">
          <div className="container mx-auto px-4 text-center">
            <Card className="max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
              <CardContent className="p-12">
                <div className="fade-in-up">
                  <h2 className="text-4xl font-heading font-bold mb-6 gradient-text">
                    Ready to Build Your Dream PC?
                  </h2>
                  <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                    Download ARsemble now and experience the most advanced PC building tool available. 
                    Completely free, no ads, no hidden costs.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button 
                      onClick={handleDownload}
                      size="lg"
                      className="btn-hero text-lg px-8 py-4 group"
                    >
                      <Download className="mr-3 w-5 h-5" />
                      Download APK
                    </Button>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      <span>Virus-free & Safe</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default BuildPC;