import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Mail, Phone, MapPin, Send, MessageCircle, FileText, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Support = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    category: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Nachricht gesendet",
      description: "Vielen Dank für Ihre Anfrage. Wir melden uns innerhalb von 24 Stunden bei Ihnen.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      subject: "",
      category: "",
      message: ""
    });
  };

  const supportCategories = [
    { icon: MessageCircle, title: "Allgemeine Fragen", description: "Fragen zu Funktionen und Nutzung" },
    { icon: Settings, title: "Technischer Support", description: "Hilfe bei technischen Problemen" },
    { icon: FileText, title: "Abrechnungsfragen", description: "Fragen zu Rechnungen und Tarifen" }
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
              Wir sind für Sie da
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Haben Sie Fragen zu unserer Software oder benötigen Sie Unterstützung? 
              Unser Support-Team hilft Ihnen gerne weiter.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {supportCategories.map((category, index) => (
              <Card key={index} className="text-center hover:shadow-medium transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-heading">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-heading flex items-center gap-2">
                  <Send className="h-6 w-6 text-primary" />
                  Kontaktformular
                </CardTitle>
                <CardDescription>
                  Senden Sie uns Ihre Anfrage und wir melden uns schnellstmöglich bei Ihnen.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ihr vollständiger Name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-Mail *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="ihre.email@beispiel.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">Unternehmen</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Ihr Unternehmen (optional)"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="category">Kategorie *</Label>
                    <Select
                      required
                      value={formData.category}
                      onValueChange={(value) => setFormData({ ...formData, category: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Wählen Sie eine Kategorie" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">Allgemeine Fragen</SelectItem>
                        <SelectItem value="technical">Technischer Support</SelectItem>
                        <SelectItem value="billing">Abrechnungsfragen</SelectItem>
                        <SelectItem value="feature">Feature-Anfrage</SelectItem>
                        <SelectItem value="demo">Demo-Anfrage</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Betreff *</Label>
                    <Input
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Kurze Beschreibung Ihres Anliegens"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Nachricht *</Label>
                    <Textarea
                      id="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Beschreiben Sie Ihr Anliegen so detailliert wie möglich..."
                      className="resize-none"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" size="lg">
                    <Send className="mr-2 h-4 w-4" />
                    Nachricht senden
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-heading">Direkter Kontakt</CardTitle>
                  <CardDescription>
                    Sie können uns auch direkt kontaktieren
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">E-Mail</h3>
                      <p className="text-muted-foreground mb-2">office@permatec.at</p>
                      <p className="text-sm text-muted-foreground">
                        Antwort innerhalb von 24 Stunden
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Telefon</h3>
                      <p className="text-muted-foreground mb-2">+43 (0) 1 234 567 89</p>
                      <p className="text-sm text-muted-foreground">
                        Mo-Fr: 9:00 - 17:00 Uhr
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-full">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Adresse</h3>
                      <p className="text-muted-foreground">
                        Permatec e.U.<br/>
                        Musterstraße 123<br/>
                        1010 Wien<br/>
                        Österreich
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-heading">Support-Zeiten</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Montag - Freitag</span>
                      <span className="font-medium text-foreground">9:00 - 17:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Samstag - Sonntag</span>
                      <span className="font-medium text-foreground">Geschlossen</span>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-accent/50 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Notfälle:</strong> Bei dringenden technischen Problemen außerhalb 
                      der Geschätszeiten senden Sie uns eine E-Mail mit "DRINGEND" im Betreff.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;