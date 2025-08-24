import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Impressum = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <Link to="/">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Zurück zur Startseite
            </Button>
          </Link>
          
          <h1 className="font-heading font-bold text-4xl mb-8 text-foreground">Impressum</h1>
          
          <div className="prose prose-gray max-w-none space-y-6">
            <section>
              <h2 className="font-heading font-semibold text-2xl mb-4 text-foreground">Angaben gemäß § 5 TMG</h2>
              <div className="bg-card p-6 rounded-lg border space-y-2">
                <p className="font-semibold text-foreground">Permatec e.U.</p>
                <p className="text-muted-foreground">Musterstraße 123</p>
                <p className="text-muted-foreground">1010 Wien</p>
                <p className="text-muted-foreground">Österreich</p>
              </div>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-2xl mb-4 text-foreground">Kontakt</h2>
              <div className="bg-card p-6 rounded-lg border space-y-2">
                <p className="text-muted-foreground">Telefon: +43 (0) 1 234 567 89</p>
                <p className="text-muted-foreground">E-Mail: office@permatec.at</p>
              </div>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-2xl mb-4 text-foreground">Umsatzsteuer-ID</h2>
              <div className="bg-card p-6 rounded-lg border">
                <p className="text-muted-foreground">Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
                <p className="font-medium text-foreground">ATU12345678</p>
              </div>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-2xl mb-4 text-foreground">EU-Streitschlichtung</h2>
              <div className="bg-card p-6 rounded-lg border">
                <p className="text-muted-foreground">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                  <a href="https://ec.europa.eu/consumers/odr/" className="text-primary hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                    https://ec.europa.eu/consumers/odr/
                  </a>
                </p>
                <p className="text-muted-foreground mt-2">Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
              </div>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-2xl mb-4 text-foreground">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
              <div className="bg-card p-6 rounded-lg border">
                <p className="text-muted-foreground">Permatec e.U.</p>
                <p className="text-muted-foreground">Musterstraße 123</p>
                <p className="text-muted-foreground">1010 Wien, Österreich</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impressum;