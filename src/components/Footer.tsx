import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Youtube 
} from "lucide-react";

const footerLinks = {
  product: [
    { name: "Features", href: "#" },
    { name: "Preise", href: "/preise" },
    { name: "Demo", href: "#" },
    { name: "Integrationen", href: "#" }
  ],
  company: [
    { name: "Über uns", href: "#" },
    { name: "Karriere", href: "#" },
    { name: "Presse", href: "#" },
    { name: "Partner", href: "#" }
  ],
  resources: [
    { name: "Dokumentation", href: "#" },
    { name: "Support", href: "/support" },
    { name: "Webinare", href: "#" },
    { name: "Blog", href: "#" }
  ],
  legal: [
    { name: "Datenschutz", href: "/datenschutz" },
    { name: "AGB", href: "/agb" },
    { name: "Impressum", href: "/impressum" },
    { name: "Cookies", href: "/cookies" }
  ]
};

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" }
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Company info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <h3 className="font-heading font-bold text-2xl">Permatec e.U.</h3>
              <p className="text-background/70 leading-relaxed">
                Professionelle Wirtschaftlichkeitsberechnung für haustechnische Anlagen 
                nach ÖNORM. Entwickelt in Österreich für österreichische Anforderungen.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-background/70">
                <Mail className="h-5 w-5" />
                <span>office@permatec.at</span>
              </div>
              <div className="flex items-center gap-3 text-background/70">
                <Phone className="h-5 w-5" />
                <span>+43 (0) 1 234 567 89</span>
              </div>
              <div className="flex items-center gap-3 text-background/70">
                <MapPin className="h-5 w-5" />
                <span>Wien, Österreich</span>
              </div>
            </div>
            
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className="text-background/70 hover:text-background hover:bg-background/10"
                  asChild
                >
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
          
          {/* Links */}
          <div className="space-y-6">
            <h4 className="font-heading font-semibold text-lg">Produkt</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-6">
            <h4 className="font-heading font-semibold text-lg">Unternehmen</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-6">
            <h4 className="font-heading font-semibold text-lg">Ressourcen</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <Separator className="my-12 bg-background/20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-background/70 text-sm">
            © 2024 Permatec e.U. Alle Rechte vorbehalten.
          </p>
          
          <div className="flex gap-6">
            {footerLinks.legal.map((link, index) => (
              <a 
                key={index}
                href={link.href}
                className="text-background/70 hover:text-background text-sm transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}