import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Datenschutz = () => {
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
          
          <h1 className="font-heading font-bold text-4xl mb-8 text-foreground">Datenschutzerklärung</h1>
          
          <div className="prose prose-gray max-w-none space-y-6">
            <section>
              <h2 className="font-heading font-semibold text-2xl mb-4 text-foreground">1. Datenschutz auf einen Blick</h2>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="font-semibold text-lg mb-3 text-foreground">Allgemeine Hinweise</h3>
                <p className="text-muted-foreground mb-4">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten 
                  passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie 
                  persönlich identifiziert werden können.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-2xl mb-4 text-foreground">2. Verantwortliche Stelle</h2>
              <div className="bg-card p-6 rounded-lg border">
                <p className="text-muted-foreground mb-2">
                  Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                </p>
                <div className="space-y-1">
                  <p className="font-semibold text-foreground">Permatec e.U.</p>
                  <p className="text-muted-foreground">Musterstraße 123</p>
                  <p className="text-muted-foreground">1010 Wien, Österreich</p>
                  <p className="text-muted-foreground">Telefon: +43 (0) 1 234 567 89</p>
                  <p className="text-muted-foreground">E-Mail: office@permatec.at</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-2xl mb-4 text-foreground">3. Datenerfassung auf dieser Website</h2>
              <div className="bg-card p-6 rounded-lg border space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Server-Log-Dateien</h3>
                  <p className="text-muted-foreground">
                    Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, 
                    die Ihr Browser automatisch an uns übermittelt. Dies sind: Browsertyp und Browserversion, verwendetes 
                    Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage und IP-Adresse.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Kontaktformular</h3>
                  <p className="text-muted-foreground">
                    Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular 
                    inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall 
                    von Anschlussfragen bei uns gespeichert.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-2xl mb-4 text-foreground">4. Ihre Rechte</h2>
              <div className="bg-card p-6 rounded-lg border">
                <p className="text-muted-foreground mb-4">Sie haben jederzeit das Recht:</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>unentgeltlich Auskunft über Ihre gespeicherten personenbezogenen Daten zu erhalten</li>
                  <li>Berichtigung unrichtiger personenbezogener Daten zu verlangen</li>
                  <li>Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen</li>
                  <li>Einschränkung der Datenverarbeitung zu verlangen</li>
                  <li>Widerspruch gegen die Verarbeitung Ihrer Daten einzulegen</li>
                  <li>Datenübertragbarkeit zu verlangen</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-2xl mb-4 text-foreground">5. Kontakt</h2>
              <div className="bg-card p-6 rounded-lg border">
                <p className="text-muted-foreground">
                  Bei Fragen zum Datenschutz können Sie sich jederzeit an uns wenden:
                </p>
                <p className="text-foreground font-medium mt-2">office@permatec.at</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;