import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

function handleTiltMove(e) {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const px = (e.clientX - rect.left) / rect.width - 0.5;
  const py = (e.clientY - rect.top) / rect.height - 0.5;
  card.style.transform = `rotateY(${px * 10}deg) rotateX(${-py * 10}deg)`;
}

function handleTiltLeave(e) {
  e.currentTarget.style.transform = "rotateY(0deg) rotateX(0deg)";
}

const testimonials = [
  {
    name: "Carlos Silva",
    company: "TechCorp Ltda",
    role: "CEO",
    rating: 5,
    text: "A Octopuzz transformou completamente nossa operação. A implementação do ERP foi perfeita e o suporte é excepcional. Recomendo sem hesitar!",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
  },
  {
    name: "Maria Santos",
    company: "Inovare Solutions",
    role: "CTO",
    rating: 5,
    text: "Equipe altamente qualificada e comprometida. Nosso dashboard de BI ficou incrível e nos trouxe insights valiosos para o negócio.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5b5?w=80&h=80&fit=crop&crop=face"
  },
  {
    name: "Roberto Lima",
    company: "Crescer Varejo",
    role: "Diretor",
    rating: 5,
    text: "Projeto de automação entregue no prazo e dentro do orçamento. Triplicamos nossa produtividade em apenas 3 meses. Parceria de longo prazo!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-600/20 text-green-400 border-green-600/20">
            Depoimentos
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            O que nossos <span className="gradient-text">Clientes</span> dizem
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Histórias reais de sucesso e transformação digital que comprovam a qualidade dos nossos serviços.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              style={{ perspective: "800px" }}
            >
              <Card
                className="service-card tilt-card h-full hover:border-blue-500/40 transition-all duration-300"
                onMouseMove={handleTiltMove}
                onMouseLeave={handleTiltLeave}
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Quote className="h-8 w-8 text-blue-400 mr-3" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-300 mb-8 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>

                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 border-2 border-blue-500/30"
                    />
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role} • {testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}