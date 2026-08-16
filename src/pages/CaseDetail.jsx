
import React, { useState, useEffect } from "react";
import { Case } from "@/entities/Case";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  CheckCircle,
  Quote,
  ExternalLink,
  Clock,
  TrendingUp,
  Target,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { format } from "date-fns"; // Added import for format

export default function CaseDetail() {
  const [caseData, setCaseData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadCaseData();
  }, []);

  const loadCaseData = async () => {
    try {
      // Extrair slug da URL
      const urlParams = new URLSearchParams(window.location.search);
      const slug = urlParams.get('case');

      if (!slug) {
        setError("Case não encontrado");
        setIsLoading(false);
        return;
      }

      const cases = await Case.filter({ slug: slug });

      if (cases.length === 0) {
        setError("Case não encontrado");
      } else {
        setCaseData(cases[0]);
      }
    } catch (error) {
      console.error("Erro ao carregar case:", error);
      setError("Erro ao carregar dados do case");
    }

    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-400">Carregando case...</p>
        </div>
      </div>
    );
  }

  if (error || !caseData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Case não encontrado</h2>
          <p className="text-gray-400 mb-8">{error}</p>
          <Link to={createPageUrl("Cases")}>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar aos Cases
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link to={createPageUrl("Cases")}>
            <Button variant="outline" className="mb-8 border-gray-600 text-gray-300 hover:bg-gray-800">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar aos Cases
            </Button>
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Badge className="mb-4 bg-blue-600/20 text-blue-400 border-blue-600/20">
                {caseData.category}
              </Badge>

              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">{caseData.title}</span>
              </h1>

              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                {caseData.full_description || caseData.description}
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-sm font-medium text-gray-400 mb-1">Cliente</h3>
                  <p className="text-white font-semibold">{caseData.client_name}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-400 mb-1">Setor</h3>
                  <p className="text-white font-semibold">{caseData.industry}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-400 mb-1">Duração</h3>
                  <p className="text-white font-semibold flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {caseData.duration}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-400 mb-1">Projeto</h3>
                  <p className="text-white font-semibold">{format(new Date(caseData.created_date), "MMM yyyy")}</p>
                </div>
              </div>

              {caseData.technologies && caseData.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {caseData.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="bg-slate-800 text-gray-300">
                      {tech}
                    </Badge>
                  ))}
                </div>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative"
            >
              {caseData.image_url && (
                <div className="aspect-video rounded-2xl overflow-hidden">
                  <img
                    src={caseData.image_url}
                    alt={caseData.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results */}
      {caseData.results && caseData.results.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="gradient-text">Resultados</span> Alcançados
              </h2>
              <p className="text-xl text-gray-400">
                Impacto real e mensurável no negócio do cliente
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {caseData.results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="service-card h-full text-center">
                    <CardContent className="p-8">
                      <TrendingUp className="h-12 w-12 text-green-500 mx-auto mb-4" />
                      <div className="text-4xl font-bold gradient-text mb-2">
                        {result.value}
                      </div>
                      <div className="text-lg font-semibold text-white mb-2">
                        {result.metric}
                      </div>
                      <div className="text-sm text-gray-400">
                        {result.description}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Challenge & Solution */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {caseData.challenge && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <Card className="service-card h-full">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center mb-6">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-6">O Desafio</h3>
                    <p className="text-gray-400 leading-relaxed">
                      {caseData.challenge}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {caseData.solution && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <Card className="service-card h-full">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-green-600 rounded-2xl flex items-center justify-center mb-6">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-6">A Solução</h3>
                    <p className="text-gray-400 leading-relaxed">
                      {caseData.solution}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {caseData.testimonial && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <Card className="service-card">
                <CardContent className="p-12 text-center">
                  <Quote className="h-12 w-12 text-blue-400 mx-auto mb-8" />
                  <p className="text-xl text-gray-300 leading-relaxed mb-8 italic">
                    "{caseData.testimonial.text}"
                  </p>
                  <div className="flex items-center justify-center">
                    {caseData.testimonial.avatar && (
                      <img
                        src={caseData.testimonial.avatar}
                        alt={caseData.testimonial.author}
                        className="w-16 h-16 rounded-full mr-4 border-2 border-blue-500/30"
                      />
                    )}
                    <div className="text-left">
                      <div className="font-semibold text-white text-lg">
                        {caseData.testimonial.author}
                      </div>
                      <div className="text-gray-400">
                        {caseData.testimonial.position}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glass-effect rounded-3xl p-12"
          >
            <Zap className="h-16 w-16 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pronto para seu <span className="gradient-text">Próximo Sucesso</span>?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Vamos conversar sobre como podemos transformar seu negócio
              com soluções personalizadas como esta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl("Contact")}>
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8">
                  Iniciar Meu Projeto
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to={createPageUrl("Cases")}>
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-gray-600 text-gray-300 hover:bg-gray-800 text-lg px-8">
                  Ver Outros Cases
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
