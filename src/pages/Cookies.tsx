import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Cookies = () => {
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
          
          <h1 className="font-heading font-bold text-4xl mb-8 text-foreground">Cookie-Richtlinie</h1>
          
          <div className="prose prose-gray max-w-none space-y-6">
            <section>
              <h2 className="font-heading font-semibold text-2xl mb-4 text-foreground">Was sind Cookies?</h2>
              <div className="bg-card p-6 rounded-lg border">
                <p className="text-muted-foreground">
                  Cookies sind kleine Textdateien, die auf Ihrem Computer oder mobilen Gerät gespeichert werden, 
                  wenn Sie eine Website besuchen. Sie ermöglichen es der Website, Ihre Aktionen und Präferenzen 
                  über einen bestimmten Zeitraum zu speichern.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-2xl mb-4 text-foreground">Welche Cookies verwenden wir?</h2>
              <div className="space-y-4">
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="font-semibold text-lg mb-3 text-foreground">1. Technisch notwendige Cookies</h3>
                  <p className="text-muted-foreground mb-4">
                    Diese Cookies sind für das Funktionieren der Website unerlässlich. Sie ermöglichen grundlegende 
                    Funktionen wie Seitennavigation und Zugriff auf sichere Bereiche der Website.
                  </p>
                  <div className="bg-accent/50 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Zweck:</strong> Session-Management, Sicherheit, Funktionalität<br/>
                      <strong>Speicherdauer:</strong> Session oder 1 Jahr<br/>
                      <strong>Rechtsgrundlage:</strong> Berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO)
                    </p>
                  </div>
                </div>

                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="font-semibold text-lg mb-3 text-foreground">2. Analyse-Cookies</h3>
                  <p className="text-muted-foreground mb-4">
                    Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren, 
                    indem sie Informationen anonym sammeln und weiterleiten.
                  </p>
                  <div className="bg-accent/50 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Zweck:</strong> Website-Analyse, Verbesserung der Nutzererfahrung<br/>
                      <strong>Speicherdauer:</strong> 2 Jahre<br/>
                      <strong>Rechtsgrundlage:</strong> Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)
                    </p>
                  </div>
                </div>

                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="font-semibold text-lg mb-3 text-foreground">3. Marketing-Cookies</h3>
                  <p className="text-muted-foreground mb-4">
                    Diese Cookies werden verwendet, um Besuchern auf Webseiten zu folgen. 
                    Die Absicht ist, Anzeigen zu zeigen, die relevant und ansprechend für den einzelnen Benutzer sind.
                  </p>
                  <div className="bg-accent/50 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Zweck:</strong> Personalisierte Werbung, Remarketing<br/>
                      <strong>Speicherdauer:</strong> 1 Jahr<br/>
                      <strong>Rechtsgrundlage:</strong> Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-2xl mb-4 text-foreground">Cookie-Einstellungen verwalten</h2>
              <div className="bg-card p-6 rounded-lg border space-y-4">
                <p className="text-muted-foreground">
                  Sie können Ihre Cookie-Einstellungen jederzeit über die folgenden Möglichkeiten anpassen:
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Über das Cookie-Banner beim ersten Besuch</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Über die Cookie-Einstellungen in Ihrem Browser</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Durch Kontaktaufnahme mit uns: office@permatec.at</span>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-2xl mb-4 text-foreground">Browser-Einstellungen</h2>
              <div className="bg-card p-6 rounded-lg border">
                <p className="text-muted-foreground mb-4">
                  Die meisten Webbrowser akzeptieren Cookies automatisch. Sie können Ihren Browser jedoch so konfigurieren, 
                  dass er Cookies ablehnt oder Sie benachrichtigt, wenn Cookies gesendet werden.
                </p>
                
                <div className="bg-accent/50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Hinweis:</strong> Das Deaktivieren bestimmter Cookies kann die Funktionalität 
                    unserer Website beeinträchtigen.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-heading font-semibold text-2xl mb-4 text-foreground">Kontakt</h2>
              <div className="bg-card p-6 rounded-lg border">
                <p className="text-muted-foreground mb-2">
                  Bei Fragen zu unserer Cookie-Richtlinie können Sie uns kontaktieren:
                </p>
                <div className="space-y-1">
                  <p className="font-semibold text-foreground">Permatec e.U.</p>
                  <p className="text-muted-foreground">E-Mail: office@permatec.at</p>
                  <p className="text-muted-foreground">Telefon: +43 (0) 1 234 567 89</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cookies;