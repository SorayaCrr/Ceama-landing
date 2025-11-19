import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import communicationIcon from "@/assets/communication-icon.jpg";
import mathIcon from "@/assets/math-icon.jpg";
import physicsIcon from "@/assets/physics-icon.jpg";
import coursesBg from "@/assets/courses-bg.jpg";

export const Courses = () => {
  return (
    <section id="cursos" className="py-20 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={coursesBg}
          alt="Cursos background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-warm opacity-80"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nuestros Cursos
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Programas diseñados especialmente para que aprendas de forma
            divertida y efectiva
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Communication Course */}
          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/95 backdrop-blur-sm">
            <div className="h-48 overflow-hidden bg-gradient-to-br from-education-orange to-education-yellow">
              <img
                src={communicationIcon}
                alt="Curso de Comunicación"
                className="w-full h-full object-cover opacity-90"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">
                Comunicación
              </CardTitle>
              <CardDescription className="text-base">
                Aprende a leer, escribir y expresarte mejor
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Mejora tu lectura, escritura y forma de hablar de manera divertida y práctica.
              </p>
              <ul className="space-y-2">
                {[
                  "Lectura comprensiva y entretenida",
                  "Redacción de textos sencillos",
                  "Expresión oral con confianza",
                  "Ortografía y gramática básica",
                  "Cuentos y narraciones",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-education-primary shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Mathematics Course */}
          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/95 backdrop-blur-sm">
            <div className="h-48 overflow-hidden bg-gradient-to-br from-education-primary to-education-teal">
              <img
                src={mathIcon}
                alt="Curso de Matemática"
                className="w-full h-full object-cover opacity-90"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">
                Matemática
              </CardTitle>
              <CardDescription className="text-base">
                Aprende matemáticas de forma divertida
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Resuelve problemas matemáticos con técnicas sencillas y juegos entretenidos.
              </p>
              <ul className="space-y-2">
                {[
                  "Operaciones básicas y mental",
                  "Problemas de razonamiento lógico",
                  "Geometría con figuras y formas",
                  "Juegos matemáticos",
                  "Fracciones y números decimales",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-education-secondary shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Physics Course */}
          <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/95 backdrop-blur-sm">
            <div className="h-48 overflow-hidden bg-gradient-to-br from-education-purple to-education-coral">
              <img
                src={physicsIcon}
                alt="Curso de Física"
                className="w-full h-full object-cover opacity-90"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">
                Física
              </CardTitle>
              <CardDescription className="text-base">
                Descubre cómo funciona el mundo que te rodea
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Explora la ciencia de manera práctica con experimentos simples y conceptos básicos.
              </p>
              <ul className="space-y-2">
                {[
                  "Fuerzas y movimiento",
                  "Energía y sus formas",
                  "Luz y sonido",
                  "Experimentos sencillos",
                  "Máquinas simples",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-education-accent shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
