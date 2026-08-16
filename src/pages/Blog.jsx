import React, { useState, useEffect } from "react";
import { BlogPost } from "@/entities/BlogPost";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import {
  Search,
  Calendar,
  Clock,
  ArrowRight,
  BookOpen,
  TrendingUp,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { format } from "date-fns";

const categories = [
  { value: "all", label: "Todos os Posts", color: "bg-gray-600" },
  { value: "automacao", label: "Automação", color: "bg-blue-600" },
  { value: "inteligencia-artificial", label: "Inteligência Artificial", color: "bg-purple-600" },
  { value: "transformacao-digital", label: "Transformação Digital", color: "bg-green-600" },
  { value: "tecnologia", label: "Tecnologia", color: "bg-orange-600" }
];

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadPosts();
  }, []);

  useEffect(() => {
    filterPosts();
  }, [posts, selectedCategory, searchTerm]);

  const loadPosts = async () => {
    try {
      const fetchedPosts = await BlogPost.filter({ published: true }, "-created_date");
      setPosts(fetchedPosts);
    } catch (error) {
      console.error("Erro ao carregar posts:", error);
    }
    setIsLoading(false);
  };

  const filterPosts = () => {
    let filtered = posts;

    if (selectedCategory !== "all") {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredPosts(filtered);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <Badge className="mb-6 bg-blue-600/20 text-blue-400 border-blue-600/20">
            Blog Octopuzz
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Insights</span> em Tecnologia
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Artigos, tendências e novidades sobre automação, inteligência artificial
            e transformação digital para o seu negócio.
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 mb-12">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Buscar artigos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-slate-800/50 border-slate-700 text-white"
                />
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant={selectedCategory === category.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.value)}
                  className={`${
                    selectedCategory === category.value
                      ? `${category.color} hover:${category.color}/80`
                      : "border-gray-600 text-gray-300 hover:bg-gray-800"
                  }`}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array(6).fill(0).map((_, i) => (
                <Card key={i} className="service-card animate-pulse">
                  <div className="aspect-video bg-slate-700 rounded-t-lg"></div>
                  <CardContent className="p-6">
                    <div className="h-4 bg-slate-700 rounded mb-4"></div>
                    <div className="h-6 bg-slate-700 rounded mb-4"></div>
                    <div className="h-16 bg-slate-700 rounded"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">
                {posts.length === 0 ? "Em breve, novos artigos!" : "Nenhum artigo encontrado"}
              </h3>
              <p className="text-gray-400 mb-8">
                {posts.length === 0
                  ? "Estamos preparando conteúdo exclusivo sobre tecnologia e inovação."
                  : "Tente ajustar os filtros ou termo de busca."
                }
              </p>
              {posts.length === 0 && (
                <Link to={createPageUrl("Contact")}>
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Fale Conosco
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              )}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="service-card h-full group hover:border-blue-500/40 transition-all duration-300">
                    {post.image_url && (
                      <div className="aspect-video overflow-hidden rounded-t-lg">
                        <img
                          src={post.image_url}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}

                    <CardContent className="p-6 h-full flex flex-col">
                      <div className="mb-4">
                        <Badge
                          className={`${
                            categories.find(c => c.value === post.category)?.color || "bg-gray-600"
                          } text-white mb-3`}
                        >
                          {categories.find(c => c.value === post.category)?.label || "Tecnologia"}
                        </Badge>

                        <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-blue-400 transition-colors duration-300">
                          {post.title}
                        </h3>

                        {post.excerpt && (
                          <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                            {post.excerpt}
                          </p>
                        )}
                      </div>

                      <div className="mt-auto">
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {format(new Date(post.created_date), "d MMM yyyy")}
                            </div>
                            {post.reading_time && (
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                {post.reading_time} min
                              </div>
                            )}
                          </div>
                        </div>

                        <Button
                          variant="ghost"
                          className="w-full justify-between text-blue-400 hover:text-white hover:bg-blue-600/20 group-hover:bg-blue-600/20 p-0"
                        >
                          Ler Artigo
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glass-effect rounded-3xl p-12"
          >
            <TrendingUp className="h-16 w-16 text-blue-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Fique por <span className="gradient-text">Dentro</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Receba insights exclusivos sobre tecnologia, automação e transformação digital
              diretamente em seu e-mail.
            </p>
            <Link to={createPageUrl("Contact")}>
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8">
                <Zap className="mr-2 h-5 w-5" />
                Falar com Especialista
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
