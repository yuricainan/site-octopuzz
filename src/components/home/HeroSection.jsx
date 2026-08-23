import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowRight, Play, Zap, Shield, Users } from "lucide-react";
import AutomationDemo from "./AutomationDemo";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl aurora-blob aurora-blob-1"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl aurora-blob aurora-blob-2"></div>
        <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-cyan-600/20 rounded-full blur-3xl aurora-blob aurora-blob-3"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 bg-blue-600/20 text-blue-400 border-blue-600/20">
              ⚡ IA + Automação para Resultados Reais
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Multiplique suas Vendas com a <span className="gradient-text">IA + Automação</span> da Octopuzz
            </h1>

            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Nossas soluções de IA e automação são desenhadas para otimizar processos, reduzir custos e acelerar seu crescimento. Resultados visíveis em poucas semanas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <Link to={createPageUrl("Contact")}>
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8">
                  Fale com um Especialista Hoje
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>

              <Link to={createPageUrl("Contact")}>
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-gray-600 text-gray-300 hover:bg-gray-800">
                  <Play className="mr-2 h-5 w-5" />
                  Agendar Demonstração Gratuita
                </Button>
              </Link>
            </div>
            <p className="text-sm text-yellow-400 mb-12">🚨 Vagas limitadas para novos projetos este mês.</p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-500" />
                <span>Soluções Seguras</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-yellow-500" />
                <span>Implementação Rápida</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-500" />
                <span>Suporte Especializado</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <AutomationDemo />
          </motion.div>
        </div>
      </div>
    </section>
  );
}