
import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Shield, Zap } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10"></div>
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <Badge className="mb-6 bg-orange-600/20 text-orange-400 border-orange-600/20">
            🚨 Vagas Limitadas para Novos Projetos
          </Badge>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Sua Concorrência já está Usando IA. <span className="gradient-text">E você?</span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Não fique para trás. Agende uma consultoria gratuita e descubra o plano exato para
            automatizar suas operações e multiplicar seu faturamento.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to={createPageUrl("Contact")}>
              <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4">
                Garantir Minha Automação Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>

            <Link to={createPageUrl("Services")}>
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-gray-600 text-gray-300 hover:bg-gray-800 text-lg px-8 py-4">
                Ver Todas as Soluções
              </Button>
            </Link>
          </div>

          {/* Urgency Indicators */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center p-6 glass-effect rounded-2xl"
            >
              <Clock className="h-12 w-12 text-orange-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Implementação Rápida</h3>
              <p className="text-sm text-gray-400 text-center">
                Primeiros resultados em até 30 dias
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center p-6 glass-effect rounded-2xl"
            >
              <Shield className="h-12 w-12 text-green-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Garantia de Resultado</h3>
              <p className="text-sm text-gray-400 text-center">
                Ou devolvemos seu investimento
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center p-6 glass-effect rounded-2xl"
            >
              <Zap className="h-12 w-12 text-yellow-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Suporte Premium</h3>
              <p className="text-sm text-gray-400 text-center">
                Atendimento especializado 24/7
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}