import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Video, Gamepad2, BookText, Sparkles } from "lucide-react";
import techtoolsBg from "@/assets/techtools-bg.jpg";

export const TechTools = () => {
  const tools = [
    {
      icon: Brain,
      name: "Kahoot",
      description:
        "Cuestionarios interactivos que hacen del aprendizaje una experiencia divertida y competitiva.",
      color: "from-education-coral to-education-orange",
    },
    {
      icon: Sparkles,
      name: "Quizizz",
      description:
        "Evaluaciones gamificadas que motivan a los estudiantes a mejorar constantemente.",
      color: "from-education-purple to-education-primary",
    },
    {
      icon: Video,
      name: "Videos Dinámicos",
      description:
        "Contenido multimedia educativo diseñado para captar la atención y facilitar el aprendizaje.",
      color: "from-education-teal to-education-secondary",
    },
    {
      icon: BookText,
      name: "Materiales Físicos",
      description:
        "Libros de trabajo, fichas y recursos tangibles para complementar el aprendizaje digital.",
      color: "from-education-orange to-education-yellow",
    },
    {
      icon: Gamepad2,
      name: "Juegos Educativos",
      description:
        "Actividades lúdicas que refuerzan conceptos de manera práctica y entretenida.",
      color: "from-education-primary to-education-coral",
    },
  ];

  return (
    <section id="herramientas" className="py-20 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={techtoolsBg}
          alt="Herramientas tecnológicas background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-coral opacity-85"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Herramientas Tecnológicas
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Utilizamos las mejores herramientas educativas para hacer el
            aprendizaje más efectivo y divertido
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {tools.map((tool, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-white/95 backdrop-blur-sm">
                      <CardContent className="p-6 space-y-4">
                        <div
                          className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${tool.color}`}
                        >
                          <tool.icon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground">
                          {tool.name}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {tool.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex bg-white/90 hover:bg-white" />
            <CarouselNext className="hidden md:flex bg-white/90 hover:bg-white" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
