import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export function Hero() {
  return (
    <section className="relative bg-gradient-hero min-h-screen flex items-center">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary font-medium text-sm rounded-full">
                Neue Version verfügbar
              </div>
              <h1 className="font-heading font-bold text-5xl lg:text-6xl leading-tight text-foreground">
                Haustechnik-Planung{" "}
                <span className="text-primary">neu definiert</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Revolutionieren Sie Ihre HLKS-Projekte mit unserer intuitiven 
                SaaS-Plattform. Vom Entwurf bis zur Ausführung – alles in einem System.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6 shadow-medium">
                Kostenlos testen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 border-2 hover:bg-accent"
              >
                <Play className="mr-2 h-5 w-5" />
                Demo ansehen
              </Button>
            </div>

            <div className="flex items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Keine Kreditkarte erforderlich
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                14 Tage kostenlos
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-strong">
              <img 
                src={heroImage} 
                alt="PlanTech Pro Interface - Moderne Haustechnik-Planungssoftware"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-card border shadow-soft rounded-xl p-4 max-w-xs">
              <div className="text-sm font-medium text-foreground">Projekt Status</div>
              <div className="text-xs text-muted-foreground mt-1">98% Fertigstellung</div>
              <div className="w-full bg-accent rounded-full h-2 mt-2">
                <div className="bg-primary h-2 rounded-full" style={{width: '98%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}