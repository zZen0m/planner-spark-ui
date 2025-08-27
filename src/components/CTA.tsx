import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ArrowRight, CheckCircle, Info } from "lucide-react";

const benefits = [
  "14 Tage kostenlos testen",
  "Keine Kreditkarte erforderlich",
  "Vollzugriff auf alle Features",
  "Persönlicher Onboarding-Support"
];

export function CTA() {
  return (
    <section className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h2 className="font-heading font-bold text-4xl lg:text-5xl text-foreground">
              Bereit für professionelle{" "}
              <span className="text-primary">Wirtschaftlichkeitsberechnung?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Schließen Sie sich über 200+ österreichischen Unternehmen an, die bereits mit 
              Permatec präzise und normkonforme Berechnungen erstellen.
            </p>
          </div>

          <div className="bg-card rounded-2xl shadow-strong p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="font-heading font-semibold text-2xl text-foreground">
                  Kostenlos starten
                </h3>
                
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Label htmlFor="cta-email">E-Mail</Label>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Info className="h-4 w-4 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Wir benötigen Ihre E-Mail für den Testzugang.</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                    <Input
                      id="cta-email"
                      type="email"
                      placeholder="Ihre E-Mail-Adresse"
                      className="border-2"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Label htmlFor="cta-company">Firmenname</Label>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Info className="h-4 w-4 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Name Ihres Unternehmens.</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                    <Input
                      id="cta-company"
                      type="text"
                      placeholder="Firmenname"
                      className="border-2"
                    />
                  </div>
                </div>

                <Button className="w-full shadow-medium">
                  Jetzt kostenlos testen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                
                <p className="text-sm text-muted-foreground">
                  Mit der Anmeldung stimmen Sie unseren{" "}
                  <a href="#" className="text-primary hover:underline">AGB</a>{" "}
                  und der{" "}
                  <a href="#" className="text-primary hover:underline">Datenschutzerklärung</a>{" "}
                  zu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}