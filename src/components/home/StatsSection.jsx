import React from "react";
import { motion } from "framer-motion";
import StatRing from "@/components/StatRing";

const stats = [
  { number: "150+", label: "Projetos Concluídos", description: "Soluções entregues com excelência", ringPercent: 65 },
  { number: "80+", label: "Clientes Satisfeitos", description: "Empresas que confiam em nosso trabalho", ringPercent: 80 },
  { number: "99%", label: "Taxa de Sucesso", description: "Projetos entregues dentro do prazo", ringPercent: 99 },
  { number: "24/7", label: "Suporte Disponível", description: "Atendimento quando você precisar", ringPercent: 100 }
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
            >
              <StatRing
                value={stat.number}
                label={stat.label}
                description={stat.description}
                ringPercent={stat.ringPercent}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}