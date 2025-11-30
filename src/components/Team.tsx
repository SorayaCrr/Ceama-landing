import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, Users } from "lucide-react";
import teacherProfile from "@/assets/teacher-profile.jpg";
import kahootVerified from "@/assets/kahoot-verified.png";
import teacherDiana from "@/assets/teacher-diana.png";
import teacherLiliana from "@/assets/teacher-liliana.png";
import teacherGiovanna from "@/assets/teacher-giovanna.png";

export const Team = () => {
  return (
    <section id="conocenos" className="py-20 bg-gradient-to-br from-education-teal/20 to-education-purple/20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Conócenos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nuestro equipo docente altamente calificado
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Teacher Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={teacherProfile}
                  alt="Profesor CEAMA"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Kahoot Badge Overlay */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-xl">
                <img
                  src={kahootVerified}
                  alt="Kahoot Verified Creator"
                  className="w-20 h-20 object-contain"
                />
              </div>
            </div>

            {/* Teacher Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-foreground mb-2">
                  [Nombre del Profesor]
                </h3>
                <p className="text-xl text-muted-foreground mb-4">
                  Director y Profesor Principal
                </p>
              </div>

              <Card className="bg-gradient-to-br from-education-teal to-education-primary border-0">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src={kahootVerified}
                      alt="Kahoot Verified"
                      className="w-12 h-12"
                    />
                    <div>
                      <h4 className="text-white font-bold text-lg">
                        Kahoot! Verified Creator
                      </h4>
                      <p className="text-white/90 text-sm">
                        Creador verificado oficial
                      </p>
                    </div>
                  </div>
                  <p className="text-white/90">
                    Reconocido por Kahoot! por crear contenido educativo de alta calidad 
                    e innovador que impacta positivamente en el aprendizaje de estudiantes.
                  </p>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 gap-4">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 flex items-start gap-3">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-education-orange to-education-yellow flex-shrink-0">
                      <BookOpen className="h-6 w-6 text-white" />
                    </div>
                    <div>
                <h5 className="font-semibold text-foreground mb-1">
                  Más de 25 años de experiencia
                </h5>
                <p className="text-sm text-muted-foreground">
                  Especializado en matemática para nivel primaria y secundaria - Colegio San José Obrero
                </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 flex items-start gap-3">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-education-purple to-education-coral flex-shrink-0">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-foreground mb-1">
                        Metodología Innovadora
                      </h5>
                      <p className="text-sm text-muted-foreground">
                        Aplicando técnicas pedagógicas modernas y tecnología educativa
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 flex items-start gap-3">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-education-teal to-education-secondary flex-shrink-0">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-foreground mb-1">
                        Compromiso con el estudiante
                      </h5>
                      <p className="text-sm text-muted-foreground">
                        Enfoque personalizado para el éxito de cada alumno
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Additional Teachers Section */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-center text-foreground mb-8">
              Nuestro Equipo Docente
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Teacher 1 */}
              <Card className="hover:shadow-xl transition-all">
                <CardContent className="p-6 text-center">
                  <div className="flex flex-col items-center">
                    <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-education-teal shadow-lg">
                      <img
                        src={teacherLiliana}
                        alt="Liliana Alvarez Chavez"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-xl font-bold text-foreground mb-2">
                      Liliana Alvarez Chavez
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Docente especialista 1ro. y 2do. grado primaria
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Colegio Rafael Narvaez Cadenillas
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Teacher 2 */}
              <Card className="hover:shadow-xl transition-all">
                <CardContent className="p-6 text-center">
                  <div className="flex flex-col items-center">
                    <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-education-purple shadow-lg">
                      <img
                        src={teacherDiana}
                        alt="Diana Castillo Miñano"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-xl font-bold text-foreground mb-2">
                      Diana Castillo Miñano
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Docente especialista en el área de Comunicación
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Colegio Rafael Narvaez Cadenillas
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Teacher 3 */}
              <Card className="hover:shadow-xl transition-all">
                <CardContent className="p-6 text-center">
                  <div className="flex flex-col items-center">
                    <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-education-coral shadow-lg">
                      <img
                        src={teacherGiovanna}
                        alt="Giovanna Tejada Suarez"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="text-xl font-bold text-foreground mb-2">
                      Giovanna Tejada Suarez
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      Docente especialista en primaria
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Colegio Rafael Narvaez Cadenillas
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
