import { Card, CardContent } from "@/components/ui/card";
import { 
  Zap, 
  Settings, 
  BarChart3, 
  Shield, 
  Users, 
  Clock 
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Automatisierte Berechnungen",
    description: "Präzise Berechnungen für Heizlast, Kühllast und Rohrnetzoptimierung in Echtzeit."
  },
  {
    icon: Settings,
    title: "CAD-Integration",
    description: "Nahtlose Integration mit gängigen CAD-Systemen für effiziente Arbeitsabläufe."
  },
  {
    icon: BarChart3,
    title: "Intelligente Analytics",
    description: "Umfassende Projektanalysen und KPIs für optimierte Planungsentscheidungen."
  },
  {
    icon: Shield,
    title: "Norm-Konformität",
    description: "Automatische Prüfung gegen DIN-, VDI- und EnEV-Normen für rechtssichere Planung."
  },
  {
    icon: Users,
    title: "Team-Kollaboration",
    description: "Echtzeit-Zusammenarbeit mit Kollegen, Auftraggebern und Fachplanern."
  },
  {
    icon: Clock,
    title: "Zeitersparnis",
    description: "Bis zu 60% weniger Planungszeit durch intelligente Automatisierung und Vorlagen."
  }
];

export function Features() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-foreground">
            Funktionen für moderne{" "}
            <span className="text-primary">Haustechnik-Planung</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Unsere SaaS-Plattform bietet alle Tools, die Sie für effiziente und 
            präzise Planung von haustechnischen Anlagen benötigen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-xl text-foreground">
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
  );
}