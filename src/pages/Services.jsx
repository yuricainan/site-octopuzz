
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Settings,
  BarChart3,
  Smartphone,
  Brain,
  Users,
  Zap,
  ArrowRight,
  CheckCircle,
  Star
} from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

const services = [
  {
    icon: Settings,
    title: "Equipamentos e Manutenção",
    description: "Instalação, configuração e manutenção preventiva de equipamentos tecnológicos com suporte especializado 24/7.",
    features: [
      "Instalação e configuração completa",
      "Manutenção preventiva programada",
      "Suporte técnico 24/7",
      "Garantia estendida incluída",
      "Monitoramento remoto",
      "Substituição emergencial"
    ],
    price: "A partir de R$ 299/mês",
    popular: false
  },
  {
    icon: BarChart3,
    title: "Análise de Dados e Dashboards",
    description: "Transforme seus dados em insights acionáveis com dashboards inteligentes, relatórios automatizados e análises preditivas.",
    features: [
      "Dashboards personalizados",
      "Relatórios automatizados",
      "Análise preditiva com IA",
      "Integração com múltiplas fontes",
      "Visualizações interativas",
      "Alertas em tempo real"
    ],
    price: "A partir de R$ 599/mês",
    popular: true
  },
  {
    icon: Smartphone,
    title: "ERP, CRM e PDV",
    description: "Implementação e configuração de sistemas integrados de gestão empresarial para otimizar todos os processos do seu negócio.",
    features: [
      "Implementação completa",
      "Integração entre sistemas",
      "Treinamento da equipe",
      "Migração de dados",
      "Customizações específicas",
      "Suporte contínuo"
    ],
    price: "A partir de R$ 899/mês",
    popular: false
  },
  {
    icon: Brain,
    title: "Desenvolvimento de Apps e Sites",
    description: "Soluções digitais sob medida para web e mobile com tecnologias de ponta, design responsivo e otimização para conversão.",
    features: [
      "Desenvolvimento web e mobile",
      "Design responsivo",
      "SEO otimizado",
      "Integração com APIs",
      "Manutenção inclusa",
      "Hospedagem e domínio"
    ],
    price: "A partir de R$ 2.999 (projeto)",
    popular: false
  },
  {
    icon: Users,
    title: "Treinamento e Consultoria",
    description: "Capacitação de equipes e consultoria estratégica para transformação digital com metodologias comprovadas.",
    features: [
      "Consultoria estratégica",
      "Treinamento personalizado",
      "Workshops práticos",
      "Metodologias ágeis",
      "Certificações",
      "Acompanhamento contínuo"
    ],
    price: "A partir de R$ 199/hora",
    popular: false
  },
  {
    icon: Zap,
    title: "Consultoria Financeira e Estoque",
    description: "Otimização de processos financeiros, controle de estoque inteligente e relatórios gerenciais avançados.",
    features: [
      "Análise financeira completa",
      "Controle de estoque automático",
      "Relatórios gerenciais",
      "Fluxo de caixa inteligente",
      "Indicadores de performance",
      "Projeções financeiras"
    ],
    price: "A partir de R$ 399/mês",
    popular: false
  }
];

const processSteps = [
  {
    step: "01",
    title: "Análise Inicial",
    description: "Reunião para entender suas necessidades e objetivos específicos."
  },
  {
    step: "02",
    title: "Proposta Personalizada",
    description: "Desenvolvimento de solução sob medida com cronograma e investimento."
  },
  {
    step: "03",
    title: "Implementação",
    description: "Execução do projeto com metodologia ágil e acompanhamento constante."
  },
  {
    step: "04",
    title: "Suporte Contínuo",
    description: "Manutenção, atualizações e suporte especializado a longo prazo."
  }
];

export default function Services() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl aurora-blob aurora-blob-1"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl aurora-blob aurora-blob-2"></div>
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <Badge className="mb-6 bg-blue-600/20 text-blue-400 border-blue-600/20">
            Nossos Serviços
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Soluções</span> Sob Medida
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Portfólio completo de serviços tecnológicos para transformar
            e acelerar o crescimento do seu negócio.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="h-full"
              >
                <Card className={`service-card h-full relative ${
                  service.popular ? 'border-yellow-500/40' : ''
                }`}>
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                        <Star className="w-3 h-3 mr-1" />
                        Mais Popular
                      </Badge>
                    </div>
                  )}

                  <CardContent className="p-8 h-full flex flex-col">
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-4">
                        <service.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-white">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed mb-6">
                        {service.description}
                      </p>
                    </div>

                    <div className="flex-grow">
                      <ul className="space-y-3 mb-6">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t border-slate-700 pt-6 mt-auto">
                      <div className="text-2xl font-bold gradient-text mb-4">
                        {service.price}
                      </div>
                      <Link to={createPageUrl("Contact")}>
                        <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                          Quero Este Serviço
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Como <span className="gradient-text">Trabalhamos</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Nossa metodologia comprovada garante resultados excepcionais em todos os projetos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold text-white">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glass-effect rounded-3xl p-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pronto para <span className="gradient-text">Começar</span>?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Solicite uma demonstração gratuita e descubra como podemos
              transformar seu negócio com tecnologia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl("Contact")}>
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8">
                  Solicitar Demonstração
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-gray-600 text-gray-300 hover:bg-gray-800 text-lg px-8">
                Falar com Especialista
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}