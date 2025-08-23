import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Michael Weber",
    role: "Geschäftsführer, TGA Weber & Partner",
    content: "PlanTech Pro hat unsere Planungseffizienz um 65% gesteigert. Die automatisierten Berechnungen und Norm-Prüfungen sparen uns täglich mehrere Stunden.",
    rating: 5
  },
  {
    name: "Sarah Müller",
    role: "Projektleiterin HLKS, Ingenieurbüro Müller",
    content: "Die CAD-Integration ist hervorragend. Endlich können wir nahtlos zwischen verschiedenen Tools wechseln, ohne Daten zu verlieren.",
    rating: 5
  },
  {
    name: "Thomas Schmidt",
    role: "Leiter Haustechnik, BauTech Solutions",
    content: "Seit der Einführung von PlanTech Pro haben sich unsere Projektlaufzeiten halbiert. Die Kollaborations-Features sind genial.",
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
            Über 500+ Ingenieurbüros vertrauen bereits auf PlanTech Pro
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