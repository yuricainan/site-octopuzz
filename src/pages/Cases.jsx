import React, { useState, useEffect } from "react";
import { Case } from "@/entities/Case";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  TrendingUp,
  Clock,
  Users,
  Target,
  Award,
  Zap,
  Shield
} from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const achievements = [
  {
    icon: Target,
    number: "150+",
    label: "Projetos Entregues",
    description: "Soluções implementadas com sucesso"
  },
  {
    icon: Users,
    number: "80+",
    label: "Clientes Satisfeitos",
    description: "Empresas que confiam em nosso trabalho"
  },
  {
    icon: Award,
    number: "99%",
    label: "Taxa de Sucesso",
    description: "Projetos concluídos dentro do prazo"
  },
  {
    icon: TrendingUp,
    number: "300%",
    label: "ROI Médio",
    description: "Retorno sobre investimento dos clientes"
  }
];

export default function Cases() {
  const [cases, setCases] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadCases();
  }, []);

  const loadCases = async () => {
    try {
      const fetchedCases = await Case.list("-created_date");
      setCases(fetchedCases);
    } catch (error) {
      console.error("Erro ao carregar cases:", error);
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <Badge className="mb-6 bg-green-600/20 text-green-400 border-green-600/20">
            Cases de Sucesso
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Resultados</span> Reais
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Conheça histórias de transformação digital que geraram impacto
            real nos negócios de nossos clientes.
          </p>
        </div>
      </section>

      {/* Achievement Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <Card className="service-card h-full">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <achievement.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-4xl font-bold gradient-text mb-2">
                      {achievement.number}
                    </div>
                    <div className="text-xl font-semibold text-white mb-2">
                      {achievement.label}
                    </div>
                    <div className="text-sm text-gray-400">
                      {achievement.description}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Projetos que <span className="gradient-text">Transformaram</span> Negócios
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Cada projeto é uma oportunidade de criar soluções inovadoras que
              geram resultados mensuráveis e impacto duradouro.
            </p>
          </div>

          {isLoading ? (
            <div className="space-y-16">
              {Array(3).fill(0).map((_, i) => (
                <Card key={i} className="service-card overflow-hidden animate-pulse">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="aspect-video lg:aspect-auto bg-slate-700"></div>
                    <div className="p-8 lg:p-12">
                      <div className="h-6 bg-slate-700 rounded mb-4"></div>
                      <div className="h-8 bg-slate-700 rounded mb-4"></div>
                      <div className="h-24 bg-slate-700 rounded mb-6"></div>
                      <div className="grid grid-cols-3 gap-6 mb-8">
                        {Array(3).fill(0).map((_, j) => (
                          <div key={j} className="h-20 bg-slate-700 rounded"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : cases.length === 0 ? (
            <div className="text-center py-16">
              <Target className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">
                Em breve, novos cases!
              </h3>
              <p className="text-gray-400 mb-8">
                Estamos preparando histórias incríveis de transformação digital.
              </p>
              <Link to={createPageUrl("Contact")}>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Seja Nosso Próximo Case
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          ) : (
            <div className="space-y-16">
              {cases.map((caseStudy, index) => (
                <motion.div
                  key={caseStudy.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className="service-card overflow-hidden">
                    <div className={`grid lg:grid-cols-2 gap-0 ${
                      index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                    }`}>
                      <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                        <img
                          src={caseStudy.image_url || "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop"}
                          alt={caseStudy.title}
                          className="w-full h-full object-cover min-h-[400px]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
                      </div>

                      <CardContent className={`p-8 lg:p-12 flex flex-col justify-center ${
                        index % 2 === 1 ? 'lg:col-start-1' : ''
                      }`}>
                        <div className="mb-6">
                          <Badge className="mb-4 bg-blue-600/20 text-blue-400 border-blue-600/20">
                            {caseStudy.category}
                          </Badge>
                          <h3 className="text-3xl font-bold text-white mb-4">
                            {caseStudy.title}
                          </h3>
                          <p className="text-gray-400 leading-relaxed mb-6">
                            {caseStudy.description}
                          </p>

                          {caseStudy.technologies && caseStudy.technologies.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-6">
                              {caseStudy.technologies.slice(0, 3).map((tech, idx) => (
                                <Badge key={idx} variant="secondary" className="bg-slate-800 text-gray-300">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          )}
                        </div>

                        {caseStudy.results && caseStudy.results.length > 0 && (
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                            {caseStudy.results.slice(0, 3).map((result, idx) => (
                              <div key={idx} className="text-center p-4 glass-effect rounded-xl">
                                <TrendingUp className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                                <div className="text-2xl font-bold gradient-text">{result.value}</div>
                                <div className="text-sm text-gray-400">{result.metric}</div>
                              </div>
                            ))}
                          </div>
                        )}

                        <div className="flex items-center justify-between">
                          <div className="text-sm text-gray-400">
                            <Clock className="inline h-4 w-4 mr-1" />
                            Duração: {caseStudy.duration}
                          </div>
                          <Link to={createPageUrl("CaseDetail") + `?case=${caseStudy.slug}`}>
                            <Button variant="outline" className="border-blue-600 text-blue-400 hover:bg-blue-600/20">
                              Ver Detalhes
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Por que Nossos <span className="gradient-text">Projetos</span> Funcionam
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Nossa metodologia comprovada combina expertise técnica com
                visão estratégica de negócios para garantir resultados excepcionais.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Zap,
                    title: "Implementação Ágil",
                    description: "Metodologia ágil com entregas rápidas e feedback contínuo"
                  },
                  {
                    icon: Target,
                    title: "Foco em ROI",
                    description: "Cada solução é desenvolvida com foco no retorno do investimento"
                  },
                  {
                    icon: Shield,
                    title: "Suporte Contínuo",
                    description: "Acompanhamento e suporte especializado após a implementação"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <Card className="service-card p-8">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6 text-center">
                    Seu Projeto Pode ser o <span className="gradient-text">Próximo Sucesso</span>
                  </h3>
                  <p className="text-gray-400 text-center mb-8">
                    Agende uma consultoria gratuita e descubra como podemos
                    transformar seu negócio.
                  </p>
                  <Link to={createPageUrl("Contact")}>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg py-3">
                      Iniciar Meu Projeto
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
