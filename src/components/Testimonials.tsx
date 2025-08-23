import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ing. Andreas Huber",
    role: "Geschäftsführer, Huber Haustechnik GmbH, Wien",
    content: "Permatec hat unsere Wirtschaftlichkeitsberechnungen revolutioniert. Die ÖNORM-Konformität gibt uns absolute Rechtssicherheit bei allen Projekten.",
    rating: 5
  },
  {
    name: "DI Maria Schönberger",
    role: "Projektleiterin, TGA-Planung Salzburg",
    content: "Endlich eine österreichische Lösung, die alle unsere Normen berücksichtigt. Die Berechnungen sind präzise und die Reports professionell.",
    rating: 5
  },
  {
    name: "Franz Gruber",
    role: "Technischer Leiter, Alpen Energie Technik, Innsbruck",
    content: "Die Variantenvergleiche sparen uns enorm viel Zeit. Unsere Kunden bekommen schneller die optimale Lösung für ihre Anlagen.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-foreground">
            Was unsere Kunden sagen
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Über 200+ österreichische Unternehmen vertrauen bereits auf Permatec
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-0 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  
                  <div className="relative">
                    <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary/20" />
                    <p className="text-muted-foreground leading-relaxed italic pl-6">
                      "{testimonial.content}"
                    </p>
                  </div>
                  
                  <div className="border-t pt-6">
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}