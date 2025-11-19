import { Card, CardContent } from "@/components/ui/card";
import { Award, CheckCircle2, Users, Trophy } from "lucide-react";
import kahootVerified from "@/assets/kahoot-verified.png";
import certificationsBg from "@/assets/certifications-bg.jpg";

export const Certifications = () => {
  const certifications = [
    {
      title: "Kahoot Verified Creator",
      description:
        "Nuestros profesores son creadores verificados de Kahoot, reconocidos por crear contenido educativo de alta calidad.",
      badge: kahootVerified,
    },
    {
      title: "Experiencia Docente",
      description:
        "Equipo con más de 10 años de experiencia en enseñanza de matemática y comunicación.",
      icon: Users,
    },
    {
      title: "Metodología Certificada",
      description:
        "Aplicamos técnicas pedagógicas avaladas y probadas que garantizan resultados efectivos.",
      icon: CheckCircle2,
    },
    {
      title: "Reconocimiento Académico",
      description:
        "Premiados por excelencia en formación académica y metodología innovadora.",
      icon: Trophy,
    },
  ];

  return (
    <section id="certificaciones" className="py-20 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={certificationsBg}
          alt="Certificaciones background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-teal opacity-85"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Certificaciones y Reconocimientos
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Respaldados por certificaciones profesionales y reconocimientos en
            excelencia educativa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/95 backdrop-blur-sm"
            >
              <CardContent className="pt-6 space-y-4">
                {cert.badge ? (
                  <div className="flex justify-center">
                    <img
                      src={cert.badge}
                      alt={cert.title}
                      className="h-20 w-20 object-contain"
                    />
                  </div>
                ) : (
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-education-teal to-education-primary">
                    {cert.icon && <cert.icon className="h-8 w-8 text-white" />}
                  </div>
                )}
                <h3 className="text-xl font-semibold text-foreground">
                  {cert.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {cert.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
