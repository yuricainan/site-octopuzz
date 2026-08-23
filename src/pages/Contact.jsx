
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Contact as ContactEntity } from "@/entities/Contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Zap,
  Shield,
  Users
} from "lucide-react";

const services = [
  { value: "equipamentos_manutencao", label: "Equipamentos e Manutenção" },
  { value: "analise_dados_dashboards", label: "Análise de Dados e Dashboards" },
  { value: "erp_crm_pdv", label: "ERP, CRM e PDV" },
  { value: "desenvolvimento_apps_sites", label: "Desenvolvimento de Apps e Sites" },
  { value: "treinamento_consultoria", label: "Treinamento e Consultoria" },
  { value: "consultoria_financeira", label: "Consultoria Financeira" },
  { value: "outro", label: "Outro" }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await ContactEntity.create(formData);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: ""
      });
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
    }

    setIsSubmitting(false);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl aurora-blob aurora-blob-1"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl aurora-blob aurora-blob-2"></div>
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <Badge className="mb-6 bg-green-600/20 text-green-400 border-green-600/20">
            🚨 Consultoria Gratuita • Resposta em até 24h
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Vamos <span className="gradient-text">Conversar</span>?
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Pronto para transformar seu negócio? Nossa equipe de especialistas está
            aguardando para criar a solução perfeita para sua empresa.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-yellow-500" />
              <span>Resposta Rápida</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-green-500" />
              <span>Consultoria Gratuita</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-blue-500" />
              <span>Equipe Especializada</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Card className="service-card">
                <CardContent className="p-8">
                  {submitted ? (
                    <div className="text-center py-12">
                      <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
                      <h3 className="text-2xl font-bold text-white mb-4">
                        Mensagem Enviada com Sucesso!
                      </h3>
                      <p className="text-gray-400 mb-6">
                        Obrigado pelo seu interesse. Nossa equipe entrará em contato
                        em até 24 horas para agendar sua consultoria gratuita.
                      </p>
                      <Button
                        onClick={() => setSubmitted(false)}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      >
                        Enviar Nova Mensagem
                      </Button>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-3xl font-bold text-white mb-8">
                        Solicite sua <span className="gradient-text">Demonstração Gratuita</span>
                      </h2>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                              Nome Completo *
                            </label>
                            <Input
                              required
                              value={formData.name}
                              onChange={(e) => handleInputChange('name', e.target.value)}
                              placeholder="Seu nome completo"
                              className="bg-slate-800/50 border-slate-700 text-white"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                              Email *
                            </label>
                            <Input
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) => handleInputChange('email', e.target.value)}
                              placeholder="seu@email.com"
                              className="bg-slate-800/50 border-slate-700 text-white"
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                              Telefone
                            </label>
                            <Input
                              value={formData.phone}
                              onChange={(e) => handleInputChange('phone', e.target.value)}
                              placeholder="(85) 9 8501-1755"
                              className="bg-slate-800/50 border-slate-700 text-white"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                              Empresa
                            </label>
                            <Input
                              value={formData.company}
                              onChange={(e) => handleInputChange('company', e.target.value)}
                              placeholder="Nome da sua empresa"
                              className="bg-slate-800/50 border-slate-700 text-white"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Serviço de Interesse *
                          </label>
                          <Select
                            required
                            value={formData.service}
                            onValueChange={(value) => handleInputChange('service', value)}
                          >
                            <SelectTrigger className="bg-slate-800/50 border-slate-700 text-white">
                              <SelectValue placeholder="Selecione um serviço" />
                            </SelectTrigger>
                            <SelectContent>
                              {services.map((service) => (
                                <SelectItem key={service.value} value={service.value}>
                                  {service.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Descreva seu Projeto
                          </label>
                          <Textarea
                            value={formData.message}
                            onChange={(e) => handleInputChange('message', e.target.value)}
                            placeholder="Conte-nos mais sobre suas necessidades e objetivos..."
                            className="bg-slate-800/50 border-slate-700 text-white h-32"
                          />
                        </div>

                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg py-3"
                        >
                          {isSubmitting ? (
                            "Enviando..."
                          ) : (
                            <>
                              <Send className="mr-2 h-5 w-5" />
                              Enviar Solicitação
                            </>
                          )}
                        </Button>

                        <p className="text-xs text-gray-500 text-center">
                          Ao enviar, você concorda com nossa{" "}
                          <Link to={createPageUrl("Privacidade")} className="text-blue-400 hover:text-blue-300">
                            Política de Privacidade
                          </Link>.
                        </p>
                      </form>
                    </>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Entre em <span className="gradient-text">Contato</span>
                </h3>
                <p className="text-gray-400 mb-8">
                  Nossa equipe está sempre disponível para ajudar você a encontrar
                  a melhor solução tecnológica para seu negócio.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="service-card">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Telefone</h4>
                      <p className="text-gray-400">(85) 9 8501-1755</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="service-card">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Email</h4>
                      <p className="text-gray-400">contato@octopuzz.com.br</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="service-card">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Localização</h4>
                      <p className="text-gray-400">Fortaleza - CE, Brasil</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="service-card">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Horário</h4>
                      <p className="text-gray-400">Seg - Sex: 8h às 18h</p>
                      <p className="text-gray-400">Suporte 24/7 disponível</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* CTA Box */}
              <Card className="service-card border-green-500/40">
                <CardContent className="p-8 text-center">
                  <CheckCircle className="h-12 w-12 text-green-400 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-white mb-4">
                    🚀 Garantia de Resposta em 24h
                  </h4>
                  <p className="text-gray-400 text-sm mb-6">
                    Nossa equipe comercial entrará em contato em até 24 horas
                    para agendar sua demonstração gratuita.
                  </p>
                  <div className="text-sm text-green-400 font-medium">
                    ✅ Consultoria gratuita inclusa
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
