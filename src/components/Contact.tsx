import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import contactBg from "@/assets/contact-bg.jpg";

export const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      info: "+51 987 654 321",
      color: "from-education-orange to-education-yellow",
    },
    {
      icon: Mail,
      title: "Correo Electrónico",
      info: "info@ceama.edu.pe",
      color: "from-education-primary to-education-teal",
    },
    {
      icon: MapPin,
      title: "Dirección",
      info: "Av. Educación 123, Lima, Perú",
      color: "from-education-purple to-education-coral",
    },
    {
      icon: Clock,
      title: "Horario de Atención",
      info: "Lunes a Sábado: 8:00 AM - 8:00 PM",
      color: "from-education-teal to-education-secondary",
    },
  ];

  return (
    <section id="contacto" className="py-20 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={contactBg}
          alt="Contacto background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-warm opacity-85"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contáctanos
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Estamos aquí para responder todas tus preguntas y ayudarte a
            comenzar tu camino hacia el éxito académico
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {contactInfo.map((contact, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/95 backdrop-blur-sm"
            >
              <CardContent className="p-6 flex items-start space-x-4">
                <div
                  className={`flex-shrink-0 inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br ${contact.color}`}
                >
                  <contact.icon className="h-7 w-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {contact.title}
                  </h3>
                  <p className="text-muted-foreground">{contact.info}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-white/95 backdrop-blur-sm rounded-lg p-6 shadow-xl">
            <h3 className="text-xl font-bold text-foreground mb-2">
              ¿Listo para comenzar?
            </h3>
            <p className="text-muted-foreground">
              Contáctanos hoy mismo y únete a nuestra comunidad educativa
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
