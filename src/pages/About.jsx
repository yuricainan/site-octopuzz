import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Target,
  Award,
  Lightbulb,
  Heart,
  Rocket,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const values = [
  {
    icon: Target,
    title: "Foco em Resultados",
    description: "Cada solução é desenvolvida com o objetivo claro de gerar valor real para nossos clientes."
  },
  {
    icon: Lightbulb,
    title: "Inovação Constante",
    description: "Mantemos-nos sempre atualizados com as mais recentes tecnologias e tendências do mercado."
  },
  {
    icon: Heart,
    title: "Relacionamento Duradouro",
    description: "Construímos parcerias sólidas e de longo prazo baseadas na confiança mútua."
  },
  {
    icon: Award,
    title: "Excelência Técnica",
    description: "Nossa equipe possui certificações e experiência comprovada em todas as tecnologias que utilizamos."
  }
];

const timeline = [
  {
    year: "2014",
    title: "Fundação da Octopuzz",
    description: "Iniciamos nossa jornada com foco em consultoria tecnológica em Fortaleza."
  },
  {
    year: "2016",
    title: "Expansão de Serviços",
    description: "Ampliamos nosso portfólio incluindo desenvolvimento de software e análise de dados."
  },
  {
    year: "2018",
    title: "Foco em IA",
    description: "Começamos a especialização em inteligência artificial e automação de processos."
  },
  {
    year: "2020",
    title: "Transformação Digital",
    description: "Lideramos projetos de transformação digital durante a pandemia."
  },
  {
    year: "2024",
    title: "Presente",
    description: "Mais de 150 projetos entregues e posição de referência no mercado regional."
  }
];

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-blue-600/20 text-blue-400 border-blue-600/20">
              Sobre a Octopuzz
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Nossa <span className="gradient-text">História</span> de Inovação
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Há mais de uma década transformando ideias em soluções tecnológicas
              que fazem a diferença no mundo real.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Transformamos <span className="gradient-text">Complexo</span> em Simples
              </h2>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                A Octopuzz nasceu da necessidade de democratizar o acesso a tecnologias
                avançadas para empresas de todos os portes. Acreditamos que toda organização
                merece ter acesso às melhores ferramentas tecnológicas, independentemente
                do seu tamanho ou setor.
              </p>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Nossa missão é ser o parceiro tecnológico que você pode confiar,
                oferecendo soluções personalizadas que realmente fazem a diferença
                no seu dia a dia empresarial.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="glass-effect rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">10+</div>
                  <div className="text-sm text-gray-400">Anos de Mercado</div>
                </div>
                <div className="glass-effect rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold gradient-text mb-2">150+</div>
                  <div className="text-sm text-gray-400">Projetos Entregues</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="aspect-square relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-3xl"></div>
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/0f94d6b59_logo.png"
                  alt="Octopuzz"
                  className="relative w-full h-full object-contain filter drop-shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nossos <span className="gradient-text">Valores</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Princípios que norteiam cada projeto e decisão em nossa empresa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="service-card h-full text-center hover:border-blue-500/40 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                    <p className="text-gray-400">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nossa <span className="gradient-text">Trajetória</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Uma década de crescimento, aprendizado e conquistas.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <Card className="service-card">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold gradient-text mb-2">{item.year}</div>
                        <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                        <p className="text-gray-400 text-sm">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-slate-900"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glass-effect rounded-3xl p-12"
          >
            <Rocket className="h-16 w-16 text-blue-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Vamos <span className="gradient-text">Construir</span> o Futuro Juntos?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Junte-se a mais de 80 empresas que já transformaram seus negócios com a Octopuzz.
            </p>
            <Link to={createPageUrl("Contact")}>
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8">
                Iniciar Meu Projeto
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}