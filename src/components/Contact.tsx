import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      content: "+51 999 999 999",
      link: "tel:+51999999999",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@ceama.edu.pe",
      link: "mailto:info@ceama.edu.pe",
    },
    {
      icon: MapPin,
      title: "Dirección",
      content: "Av. Universitaria 123, Lima, Perú",
      link: "#",
    },
    {
      icon: Clock,
      title: "Horario",
      content: "Lun - Sáb: 8:00 AM - 8:00 PM",
      link: "#",
    },
  ];

  return (
    <section id="contacto" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contáctanos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes preguntas? Estamos aquí para ayudarte.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {contactInfo.map((info, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {info.title}
                    </h3>
                    {info.link && info.link !== "#" ? (
                      <a
                        href={info.link}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-muted-foreground text-sm">{info.content}</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
