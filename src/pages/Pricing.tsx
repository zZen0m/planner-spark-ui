import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Check, Users, Calendar, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const features = [
    "ÖNORM-konforme Wirtschaftlichkeitsberechnung",
    "Automatisierte Berechnungen und Reports",
    "Datenverwaltung und Export-Funktionen", 
    "E-Mail Support",
    "Regelmäßige Updates",
    "Sichere Cloud-Speicherung",
    "Multi-Projekt-Verwaltung",
    "PDF-Export der Berechnungen"
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <Link to="/">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Zurück zur Startseite
            </Button>
          </Link>
          
          <div className="text-center mb-16">
            <h1 className="font-heading font-bold text-4xl lg:text-5xl mb-6 text-foreground">
              Einfache, transparente Preise
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Wählen Sie das Preismodell, das am besten zu Ihrem Unternehmen passt. 
              Alle Pläne beinhalten den vollen Funktionsumfang.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Monthly Plan */}
            <Card className="relative border-2 hover:shadow-strong transition-all duration-300">
              <CardHeader className="text-center pb-8">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Calendar className="h-5 w-5 text-primary" />
                  <CardTitle className="text-2xl font-heading">Monatlich</CardTitle>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-foreground">49€</div>
                  <div className="text-muted-foreground">zzgl. USt. pro Benutzer/Monat</div>
                </div>
                <CardDescription className="text-base">
                  Flexible monatliche Abrechnung
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-6">
                  <Button className="w-full text-lg py-6" size="lg">
                    <CreditCard className="mr-2 h-5 w-5" />
                    Monatlich starten
                  </Button>
                </div>
                
                <div className="text-center text-sm text-muted-foreground">
                  Jederzeit kündbar • 14 Tage kostenlos testen
                </div>
              </CardContent>
            </Card>

            {/* Yearly Plan */}
            <Card className="relative border-2 border-primary hover:shadow-strong transition-all duration-300">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground px-4 py-1">
                  2 Monate gratis
                </Badge>
              </div>
              
              <CardHeader className="text-center pb-8 pt-8">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Users className="h-5 w-5 text-primary" />
                  <CardTitle className="text-2xl font-heading">Jährlich</CardTitle>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-foreground">490€</div>
                  <div className="text-muted-foreground">zzgl. USt. pro Benutzer/Jahr</div>
                  <div className="text-sm text-primary font-medium">
                    Entspricht 40,83€/Monat
                  </div>
                </div>
                <CardDescription className="text-base">
                  Bester Wert für kontinuierliche Nutzung
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-6">
                  <Button variant="default" className="w-full text-lg py-6" size="lg">
                    <CreditCard className="mr-2 h-5 w-5" />
                    Jährlich sparen
                  </Button>
                </div>
                
                <div className="text-center text-sm text-muted-foreground">
                  Ersparnis von 98€ pro Jahr • 14 Tage kostenlos testen
                </div>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Section */}
          <div className="mt-20 max-w-4xl mx-auto">
            <h2 className="font-heading font-bold text-3xl text-center mb-12 text-foreground">
              Häufige Fragen zu den Preisen
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="font-semibold text-lg mb-3 text-foreground">
                  Kann ich jederzeit wechseln?
                </h3>
                <p className="text-muted-foreground">
                  Ja, Sie können jederzeit zwischen monatlicher und jährlicher Abrechnung wechseln. 
                  Änderungen werden bei der nächsten Abrechnung wirksam.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="font-semibold text-lg mb-3 text-foreground">
                  Gibt es eine kostenlose Testphase?
                </h3>
                <p className="text-muted-foreground">
                  Ja, alle neuen Kunden erhalten 14 Tage kostenlosen Zugang zu allen Funktionen. 
                  Keine Kreditkarte erforderlich.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="font-semibold text-lg mb-3 text-foreground">
                  Wie funktioniert die Abrechnung?
                </h3>
                <p className="text-muted-foreground">
                  Die Abrechnung erfolgt automatisch per Kreditkarte oder SEPA-Lastschrift. 
                  Sie erhalten immer eine detaillierte Rechnung per E-Mail.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="font-semibold text-lg mb-3 text-foreground">
                  Kann ich jederzeit kündigen?
                </h3>
                <p className="text-muted-foreground">
                  Ja, Sie können Ihr Abonnement jederzeit mit einer Frist von 30 Tagen kündigen. 
                  Bei jährlichen Plänen zum Ende der Laufzeit.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="bg-card p-8 rounded-xl border">
              <h3 className="font-heading font-bold text-2xl mb-4 text-foreground">
                Noch Fragen zu den Preisen?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Unser Team steht Ihnen gerne zur Verfügung und hilft Ihnen bei der Auswahl 
                des richtigen Tarifs für Ihr Unternehmen.
              </p>
              <Link to="/support">
                <Button variant="outline" size="lg">
                  Kontakt aufnehmen
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;