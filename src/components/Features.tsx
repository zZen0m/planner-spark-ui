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
    title: "ÖNORM-konforme Berechnung",
    description: "Automatisierte Wirtschaftlichkeitsberechnung nach aktuellen österreichischen Normen."
  },
  {
    icon: Settings,
    title: "Variantenvergleich",
    description: "Vergleichen Sie verschiedene Anlagenvarianten und finden Sie die optimale Lösung."
  },
  {
    icon: BarChart3,
    title: "Detaillierte Auswertungen",
    description: "Umfassende Reports mit Amortisationszeit, NPV und allen relevanten Kennzahlen."
  },
  {
    icon: Shield,
    title: "Rechtssicherheit",
    description: "Vollständige Konformität mit ÖNORM B 1801-1 und anderen relevanten Standards."
  },
  {
    icon: Users,
    title: "Projektmanagement",
    description: "Verwalten Sie mehrere Projekte und arbeiten Sie mit Ihrem Team zusammen."
  },
  {
    icon: Clock,
    title: "Effizienzsteigerung",
    description: "Bis zu 70% weniger Zeitaufwand durch automatisierte Berechnungen und Vorlagen."
  }
];

export function Features() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-foreground">
            Präzise{" "}
            <span className="text-primary">Wirtschaftlichkeitsberechnung</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Alle Funktionen für professionelle Wirtschaftlichkeitsberechnungen 
            nach österreichischen Normen in einer Software vereint.
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