import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { X, Settings, Shield, BarChart, Target } from "lucide-react";
import { Link } from "react-router-dom";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true, can't be disabled
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const newPreferences = { necessary: true, analytics: true, marketing: true };
    savePreferences(newPreferences);
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    const newPreferences = { necessary: true, analytics: false, marketing: false };
    savePreferences(newPreferences);
    setShowBanner(false);
  };

  const handleSaveSettings = () => {
    savePreferences(preferences);
    setShowBanner(false);
    setShowSettings(false);
  };

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem('cookie-consent', JSON.stringify(prefs));
    localStorage.setItem('cookie-consent-date', new Date().toISOString());
    
    // Here you would typically also set/remove actual cookies based on preferences
    if (!prefs.analytics) {
      // Remove analytics cookies
      document.cookie = '_ga=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      document.cookie = '_ga_*=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    }
    if (!prefs.marketing) {
      // Remove marketing cookies
      document.cookie = '_fbp=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    }
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-card border-t shadow-lg">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">Cookie-Einstellungen</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                Wir verwenden Cookies, um Ihnen die bestmögliche Nutzererfahrung zu bieten. 
                Technisch notwendige Cookies sind zur Funktion der Website erforderlich.
              </p>
              <p className="text-xs text-muted-foreground">
                Weitere Informationen finden Sie in unserer{" "}
                <Link to="/datenschutz" className="text-primary hover:underline">
                  Datenschutzerklärung
                </Link>{" "}
                und{" "}
                <Link to="/cookies" className="text-primary hover:underline">
                  Cookie-Richtlinie
                </Link>
                .
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowSettings(!showSettings)}
                className="text-xs"
              >
                <Settings className="h-4 w-4 mr-1" />
                Einstellungen
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleRejectAll}
                className="text-xs"
              >
                Nur Notwendige
              </Button>
              <Button
                size="sm"
                onClick={handleAcceptAll}
                className="text-xs"
              >
                Alle akzeptieren
              </Button>
            </div>
          </div>

          {/* Cookie Settings Panel */}
          {showSettings && (
            <Card className="mt-4">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Cookie-Einstellungen</CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowSettings(false)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <CardDescription>
                  Wählen Sie, welche Cookies Sie zulassen möchten. Sie können diese Einstellungen jederzeit ändern.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Necessary Cookies */}
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="necessary"
                    checked={true}
                    disabled={true}
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-primary" />
                      <label htmlFor="necessary" className="font-medium text-foreground">
                        Technisch notwendige Cookies
                      </label>
                      <span className="text-xs bg-accent text-accent-foreground px-2 py-1 rounded">
                        Erforderlich
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Diese Cookies sind für das Funktionieren der Website unerlässlich und können nicht deaktiviert werden.
                      Sie speichern Ihre Cookie-Präferenzen und ermöglichen grundlegende Funktionen.
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      <strong>Speicherdauer:</strong> Session bis 1 Jahr | 
                      <strong> Rechtsgrundlage:</strong> Berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO)
                    </p>
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="analytics"
                    checked={preferences.analytics}
                    onCheckedChange={(checked) =>
                      setPreferences({ ...preferences, analytics: checked as boolean })
                    }
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <BarChart className="h-4 w-4 text-primary" />
                      <label htmlFor="analytics" className="font-medium text-foreground">
                        Analyse-Cookies
                      </label>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Diese Cookies helfen uns zu verstehen, wie Besucher mit unserer Website interagieren, 
                      indem sie Informationen anonym sammeln und weiterleiten.
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      <strong>Speicherdauer:</strong> 2 Jahre | 
                      <strong> Rechtsgrundlage:</strong> Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)
                    </p>
                  </div>
                </div>

                {/* Marketing Cookies */}
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="marketing"
                    checked={preferences.marketing}
                    onCheckedChange={(checked) =>
                      setPreferences({ ...preferences, marketing: checked as boolean })
                    }
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <Target className="h-4 w-4 text-primary" />
                      <label htmlFor="marketing" className="font-medium text-foreground">
                        Marketing-Cookies
                      </label>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Diese Cookies werden verwendet, um Ihnen relevante Werbung anzuzeigen und 
                      die Effektivität unserer Werbekampagnen zu messen.
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      <strong>Speicherdauer:</strong> 1 Jahr | 
                      <strong> Rechtsgrundlage:</strong> Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)
                    </p>
                  </div>
                </div>

                <div className="flex justify-end gap-2 pt-4 border-t">
                  <Button variant="outline" onClick={handleRejectAll}>
                    Nur Notwendige
                  </Button>
                  <Button onClick={handleSaveSettings}>
                    Einstellungen speichern
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </>
  );
};

export default CookieConsent;