import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const AGB = () => {
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
          
          <h1 className="font-heading font-bold text-4xl mb-8 text-foreground">Allgemeine Geschäftsbedingungen</h1>
          
          <div className="prose prose-gray max-w-none space-y-6">
            <section>
              <h2 className="font-heading font-semibold text-2xl mb-4 text-foreground">§ 1 Geltungsbereich</h2>
              <div className="bg-card p-6 rounded-lg border">
                <p className="text-muted-foreground">
                  Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen der Permatec e.U. 
                  und ihren Kunden bezüglich der Nutzung der Software zur Wirtschaftlichkeitsberechnung haustechnischer Anlagen.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-2xl mb-4 text-foreground">§ 2 Vertragsgegenstand</h2>
              <div className="bg-card p-6 rounded-lg border">
                <p className="text-muted-foreground mb-4">
                  Gegenstand des Vertrages ist die zeitlich begrenzte Überlassung der Software zur Nutzung über das Internet (SaaS - Software as a Service).
                </p>
                <p className="text-muted-foreground">
                  Die Software ermöglicht die Erstellung von Wirtschaftlichkeitsberechnungen für haustechnische Anlagen nach österreichischen Normen (ÖNORM).
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-2xl mb-4 text-foreground">§ 3 Leistungsumfang</h2>
              <div className="bg-card p-6 rounded-lg border space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">3.1 Funktionalitäten</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>ÖNORM-konforme Wirtschaftlichkeitsberechnung</li>
                    <li>Automatisierte Berechnungen und Reporterstellung</li>
                    <li>Datenverwaltung und -speicherung</li>
                    <li>Export-Funktionen</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">3.2 Verfügbarkeit</h3>
                  <p className="text-muted-foreground">
                    Wir bemühen uns um eine Verfügbarkeit der Software von 99,5% pro Kalenderjahr. 
                    Geplante Wartungsarbeiten werden rechtzeitig angekündigt.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-2xl mb-4 text-foreground">§ 4 Preise und Zahlungsbedingungen</h2>
              <div className="bg-card p-6 rounded-lg border space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">4.1 Preise</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Monatliches Abonnement: 49,00 € zzgl. USt. pro Benutzer und Monat</li>
                    <li>Jährliches Abonnement: 490,00 € zzgl. USt. pro Benutzer und Jahr</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">4.2 Zahlungsmodalitäten</h3>
                  <p className="text-muted-foreground">
                    Die Rechnungsstellung erfolgt monatlich im Voraus bzw. jährlich im Voraus. 
                    Die Zahlung ist innerhalb von 14 Tagen nach Rechnungsdatum fällig.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-2xl mb-4 text-foreground">§ 5 Laufzeit und Kündigung</h2>
              <div className="bg-card p-6 rounded-lg border space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">5.1 Vertragslaufzeit</h3>
                  <p className="text-muted-foreground">
                    Der Vertrag wird je nach gewähltem Abonnement für die Dauer von einem Monat oder einem Jahr geschlossen 
                    und verlängert sich automatisch um den gleichen Zeitraum.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">5.2 Kündigung</h3>
                  <p className="text-muted-foreground">
                    Beide Parteien können den Vertrag mit einer Frist von 30 Tagen zum Ende der jeweiligen Laufzeit kündigen.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-2xl mb-4 text-foreground">§ 6 Gewährleistung und Haftung</h2>
              <div className="bg-card p-6 rounded-lg border">
                <p className="text-muted-foreground mb-4">
                  Wir gewährleisten die vertragsgemäße Bereitstellung der Software. Bei Mängeln werden wir diese 
                  nach Möglichkeit zeitnah beheben.
                </p>
                <p className="text-muted-foreground">
                  Die Haftung beschränkt sich auf Vorsatz und grobe Fahrlässigkeit. Eine Haftung für entgangenen 
                  Gewinn oder Folgeschäden ist ausgeschlossen.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-2xl mb-4 text-foreground">§ 7 Schlussbestimmungen</h2>
              <div className="bg-card p-6 rounded-lg border">
                <p className="text-muted-foreground mb-4">
                  Es gilt österreichisches Recht unter Ausschluss der UN-Kaufrechtskonvention.
                </p>
                <p className="text-muted-foreground">
                  Gerichtsstand für alle Streitigkeiten ist Wien, Österreich.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AGB;