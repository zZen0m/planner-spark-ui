import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Shield, BarChart, Target, Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookieSettings = () => {
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  });
  const [lastUpdated, setLastUpdated] = useState<string>("");
  const { toast } = useToast();

  useEffect(() => {
    // Load existing preferences
    const stored = localStorage.getItem('cookie-consent');
    const dateStored = localStorage.getItem('cookie-consent-date');
    
    if (stored) {
      setPreferences(JSON.parse(stored));
    }
    if (dateStored) {
      setLastUpdated(new Date(dateStored).toLocaleString('de-AT'));
    }
  }, []);

  const handleSavePreferences = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    
    // Remove cookies based on preferences
    if (!preferences.analytics) {
      document.cookie = '_ga=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      document.cookie = '_ga_*=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    }
    if (!preferences.marketing) {
      document.cookie = '_fbp=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    }

    setLastUpdated(new Date().toLocaleString('de-AT'));
    
    toast({
      title: "Cookie-Einstellungen gespeichert",
      description: "Ihre Präferenzen wurden erfolgreich aktualisiert.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="font-heading font-bold text-3xl mb-2 text-foreground">Cookie-Einstellungen</h1>
        <p className="text-muted-foreground">
          Verwalten Sie Ihre Cookie-Präferenzen. Sie können diese Einstellungen jederzeit ändern.
        </p>
        {lastUpdated && (
          <p className="text-sm text-muted-foreground mt-2">
            Zuletzt aktualisiert: {lastUpdated}
          </p>
        )}
      </div>

      <div className="space-y-6">
        {/* Necessary Cookies */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <CardTitle className="text-lg">Technisch notwendige Cookies</CardTitle>
              <span className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded">
                Erforderlich
              </span>
            </div>
            <CardDescription>
              Diese Cookies sind für das Funktionieren der Website unerlässlich.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2 mb-4">
              <Checkbox
                id="necessary"
                checked={true}
                disabled={true}
              />
              <label htmlFor="necessary" className="text-sm font-medium">
                Immer aktiv
              </label>
            </div>
            <div className="text-sm text-muted-foreground space-y-2">
              <p>
                Diese Cookies ermöglichen grundlegende Funktionen wie Seitennavigation und Zugriff auf sichere Bereiche. 
                Die Website kann ohne diese Cookies nicht ordnungsgemäß funktionieren.
              </p>
              <div className="bg-accent/30 p-3 rounded text-xs">
                <p><strong>Zweck:</strong> Session-Management, Sicherheit, Funktionalität</p>
                <p><strong>Speicherdauer:</strong> Session bis 1 Jahr</p>
                <p><strong>Rechtsgrundlage:</strong> Berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO)</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Analytics Cookies */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <BarChart className="h-5 w-5 text-primary" />
              <CardTitle className="text-lg">Analyse-Cookies</CardTitle>
            </div>
            <CardDescription>
              Diese Cookies helfen uns, die Nutzung unserer Website zu verstehen.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2 mb-4">
              <Checkbox
                id="analytics"
                checked={preferences.analytics}
                onCheckedChange={(checked) =>
                  setPreferences({ ...preferences, analytics: checked as boolean })
                }
              />
              <label htmlFor="analytics" className="text-sm font-medium">
                Analyse-Cookies zulassen
              </label>
            </div>
            <div className="text-sm text-muted-foreground space-y-2">
              <p>
                Diese Cookies sammeln Informationen darüber, wie Sie unsere Website nutzen, 
                welche Seiten Sie besuchen und welche Links Sie anklicken. Alle Daten sind anonymisiert.
              </p>
              <div className="bg-accent/30 p-3 rounded text-xs">
                <p><strong>Zweck:</strong> Website-Analyse, Verbesserung der Nutzererfahrung</p>
                <p><strong>Anbieter:</strong> Google Analytics</p>
                <p><strong>Speicherdauer:</strong> 2 Jahre</p>
                <p><strong>Rechtsgrundlage:</strong> Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Marketing Cookies */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              <CardTitle className="text-lg">Marketing-Cookies</CardTitle>
            </div>
            <CardDescription>
              Diese Cookies werden für Werbezwecke verwendet.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2 mb-4">
              <Checkbox
                id="marketing"
                checked={preferences.marketing}
                onCheckedChange={(checked) =>
                  setPreferences({ ...preferences, marketing: checked as boolean })
                }
              />
              <label htmlFor="marketing" className="text-sm font-medium">
                Marketing-Cookies zulassen
              </label>
            </div>
            <div className="text-sm text-muted-foreground space-y-2">
              <p>
                Diese Cookies werden verwendet, um Ihnen relevante Werbung anzuzeigen und 
                die Effektivität unserer Werbekampagnen zu messen. Sie helfen uns auch dabei, 
                Ihnen personalisierte Inhalte zu präsentieren.
              </p>
              <div className="bg-accent/30 p-3 rounded text-xs">
                <p><strong>Zweck:</strong> Personalisierte Werbung, Remarketing</p>
                <p><strong>Anbieter:</strong> Facebook, Google Ads</p>
                <p><strong>Speicherdauer:</strong> 1 Jahr</p>
                <p><strong>Rechtsgrundlage:</strong> Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t">
        <Button onClick={handleSavePreferences} className="flex-1">
          <Save className="h-4 w-4 mr-2" />
          Einstellungen speichern
        </Button>
        <Button
          variant="outline"
          onClick={() => setPreferences({ necessary: true, analytics: false, marketing: false })}
        >
          Nur notwendige Cookies
        </Button>
        <Button
          variant="outline"
          onClick={() => setPreferences({ necessary: true, analytics: true, marketing: true })}
        >
          Alle Cookies akzeptieren
        </Button>
      </div>

      <div className="bg-accent/30 p-4 rounded-lg">
        <h3 className="font-medium mb-2">Wichtige Hinweise</h3>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• Sie können Ihre Einstellungen jederzeit über diese Seite ändern</li>
          <li>• Das Deaktivieren bestimmter Cookies kann die Funktionalität der Website beeinträchtigen</li>
          <li>• Ihre Einstellungen werden in Ihrem Browser gespeichert</li>
          <li>• Bei Fragen wenden Sie sich an: office@permatec.at</li>
        </ul>
      </div>
    </div>
  );
};

export default CookieSettings;