
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Zap,
  Brain,
  Settings,
  Smartphone,
  BarChart3,
  Users,
  ArrowRight,
  ShieldCheck,
  Trophy,
  Sparkles,
  TrendingUp,
  Clock
} from "lucide-react";

import HeroSection from "../components/home/HeroSection";
// PartnersSection removed
import ServicesGrid from "../components/home/ServicesGrid";
import StatsSection from "../components/home/StatsSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import CTASection from "../components/home/CTASection";

const services = [
  {
    icon: Settings,
    title: "Equipamentos e Manutenção",
    description: "Instalação, configuração e manutenção de equipamentos tecnológicos com suporte especializado.",
    features: ["Suporte 24/7", "Manutenção Preventiva", "Garantia Estendida"]
  },
  {
    icon: BarChart3,
    title: "Análise de Dados e Dashboards",
    description: "Transforme seus dados em insights acionáveis com dashboards inteligentes e relatórios personalizados.",
    features: ["Dashboards Personalizados", "Relatórios Automáticos", "Insights em Tempo Real"]
  },
  {
    icon: Smartphone,
    title: "ERP, CRM e PDV",
    description: "Implementação e configuração de sistemas integrados para otimizar sua gestão empresarial.",
    features: ["Integração Completa", "Treinamento Incluído", "Suporte Contínuo"]
  },
  {
    icon: Brain,
    title: "Desenvolvimento de Apps e Sites",
    description: "Soluções digitais sob medida para web e mobile com tecnologias de ponta.",
    features: ["Design Responsivo", "Tecnologia Moderna", "SEO Otimizado"]
  },
  {
    icon: Users,
    title: "Treinamento e Consultoria",
    description: "Capacitação de equipes e consultoria estratégica para transformação digital.",
    features: ["Treinamento Personalizado", "Consultoria Especializada", "Acompanhamento Contínuo"]
  },
  {
    icon: Zap,
    title: "Consultoria Financeira",
    description: "Otimização de processos financeiros e controle de estoque com soluções inteligentes.",
    features: ["Controle Financeiro", "Gestão de Estoque", "Relatórios Gerenciais"]
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      {/* PartnersSection removed */}

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-600/20 text-blue-400 border-blue-600/20">
              Nossos Serviços
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Soluções Completas</span> para seu Negócio
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Oferecemos um portfólio completo de serviços tecnológicos,
              desde consultoria até implementação e suporte contínuo.
            </p>
          </div>

          <ServicesGrid services={services} />
        </div>
      </section>

      <StatsSection />

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-purple-600/20 text-purple-400 border-purple-600/20">
                Nossos Diferenciais
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Por que a <span className="gradient-text">Octopuzz</span> é a Escolha Certa?
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Não somos apenas fornecedores de tecnologia. Somos seus parceiros estratégicos,
                obcecados por entregar resultados que realmente impulsionam seu negócio.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  {
                    icon: TrendingUp,
                    text: "<strong>ROI Comprovado:</strong> Nossas soluções geram em média 300% de retorno sobre o investimento."
                  },
                  {
                    icon: Clock,
                    text: "<strong>Implementação Rápida:</strong> Projetos entregues em tempo recorde, sem burocracia."
                  },
                  {
                    icon: Zap,
                    text: "<strong>Tecnologia de Ponta:</strong> Usamos as ferramentas mais avançadas para garantir sua vantagem competitiva."
                  },
                  {
                    icon: ShieldCheck,
                    text: "<strong>Suporte Obcecado:</strong> Somos parceiros dedicados ao seu sucesso, disponíveis 24/7."
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <item.icon className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <span
                      className="text-gray-300"
                      dangerouslySetInnerHTML={{ __html: item.text }}
                    />
                  </motion.div>
                ))}
              </div>

              <Link to={createPageUrl("About")}>
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Conheça Nossa Metodologia
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-square relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-3xl"></div>
                <div className="relative glass-effect rounded-3xl p-8 h-full flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-6 w-full">
                    {[
                      { icon: Trophy, label: "Projetos Entregues", value: "150+" },
                      { icon: Users, label: "Clientes Satisfeitos", value: "80+" },
                      { icon: Sparkles, label: "Avaliação Média", value: "4.9/5" },
                      { icon: TrendingUp, label: "Anos de Mercado", value: "10+" }
                    ].map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="text-center p-4 rounded-xl bg-slate-800/50"
                      >
                        <stat.icon className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                        <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                        <div className="text-sm text-gray-400">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <CTASection />
    </div>
  );
}