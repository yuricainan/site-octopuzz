import React from "react";
import { motion } from "framer-motion";

const stats = [
  { number: "150+", label: "Projetos Concluídos", description: "Soluções entregues com excelência" },
  { number: "80+", label: "Clientes Satisfeitos", description: "Empresas que confiam em nosso trabalho" },
  { number: "99%", label: "Taxa de Sucesso", description: "Projetos entregues dentro do prazo" },
  { number: "24/7", label: "Suporte Disponível", description: "Atendimento quando você precisar" }
];

export default function StatsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Números que <span className="gradient-text">Comprovam</span> nossa Excelência
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Mais de uma década de experiência transformando ideias em soluções tecnológicas de impacto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-8 glass-effect rounded-3xl hover:border-blue-500/40 transition-all duration-300"
            >
              <div className="text-5xl md:text-6xl font-bold gradient-text mb-4">
                {stat.number}
              </div>
              <div className="text-xl font-semibold text-white mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-gray-400">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}