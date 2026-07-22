import React, { useState } from 'react';
import { BookOpen, Search, Clock, Tag, User, ArrowRight, Share2, Calendar, Sparkles } from 'lucide-react';
import { INITIAL_BLOG_POSTS, THERAPIST_PROFILE } from '../data/initialData';
import { BlogPost } from '../types';

export const BlogSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const categories = [
    'Todos',
    'Ansiedade',
    'Psicanálise',
    'Saúde da Mulher',
    'Autoconhecimento',
    'Relacionamentos'
  ];

  const filteredPosts = INITIAL_BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === 'Todos' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="blog" className="py-16 lg:py-24 bg-[#fbf8f3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-bold text-[#b06d53] uppercase tracking-widest px-3 py-1 bg-[#eedfd2] rounded-full inline-block">
            Blog de Saúde Mental & Psicanálise
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#3e2f28]">
            Reflexões e Artigos Informativos
          </h2>
          <p className="text-base text-[#7a6859] leading-relaxed">
            Conteúdos desenvolvidos pela Dra. Natália Lopes para auxiliar na compreensão das emoções, desenvolvimento do autoconhecimento e cuidado psíquico.
          </p>
        </div>

        {/* Filter and Search Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#3e2f28] text-[#fbf8f3] shadow-sm'
                    : 'bg-[#fffdfa] text-[#524338] border border-[#e8ded1] hover:bg-[#eedfd2]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#7a6859] absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Pesquisar por tema ou palavra..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#fffdfa] border border-[#d9c7b6] text-xs text-[#3e2f28] focus:outline-none focus:ring-2 focus:ring-[#b06d53]"
            />
          </div>

        </div>

        {/* Blog Posts Grid */}
        {filteredPosts.length === 0 ? (
          <div className="p-12 text-center bg-[#fffdfa] rounded-3xl border border-[#e8ded1] text-[#7a6859] space-y-2">
            <p className="font-serif text-lg font-bold text-[#3e2f28]">Nenhum artigo encontrado</p>
            <p className="text-xs">Tente buscar por outros termos ou selecionar outra categoria.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className="bg-[#fffdfa] rounded-3xl border border-[#e8ded1] overflow-hidden hover:shadow-lg transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  {/* Thumbnail */}
                  <div className="relative h-48 overflow-hidden bg-[#f5eee6]">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute top-3 left-3 bg-[#3e2f28]/90 backdrop-blur-sm text-[#fbf8f3] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3 text-xs text-[#7a6859]">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#b06d53]" />
                        {post.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#b06d53]" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-[#3e2f28] group-hover:text-[#b06d53] transition-colors leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-xs text-[#524338] leading-relaxed line-clamp-3">
                      {post.summary}
                    </p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="px-6 pb-6 pt-2 flex items-center justify-between text-xs font-bold text-[#b06d53] group-hover:translate-x-1 transition-transform">
                  <span>Ler artigo completo</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </article>
            ))}
          </div>
        )}

      </div>

      {/* Full Article Reader Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#fffdfa] rounded-3xl max-w-3xl w-full p-6 sm:p-10 max-h-[90vh] overflow-y-auto shadow-2xl relative space-y-6">
            
            {/* Close button */}
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#eedfd2] text-[#3e2f28] font-bold flex items-center justify-center hover:bg-[#e4d2c2]"
            >
              ✕
            </button>

            {/* Post Header */}
            <div className="space-y-4">
              <span className="text-xs font-bold text-[#b06d53] uppercase tracking-widest px-3 py-1 bg-[#eedfd2] rounded-full inline-block">
                {selectedPost.category}
              </span>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#3e2f28] leading-tight">
                {selectedPost.title}
              </h2>

              <div className="flex items-center gap-4 text-xs text-[#7a6859] border-b border-[#e8ded1] pb-4">
                <span className="font-bold text-[#3e2f28]">{selectedPost.author}</span>
                <span>•</span>
                <span>{selectedPost.date}</span>
                <span>•</span>
                <span>{selectedPost.readTime}</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="rounded-2xl overflow-hidden h-64 sm:h-80">
              <img
                src={selectedPost.imageUrl}
                alt={selectedPost.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Article Content Paragraphs */}
            <div className="space-y-4 text-sm text-[#3e2f28] leading-relaxed">
              {selectedPost.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-[#e8ded1]">
              {selectedPost.tags.map((tag, idx) => (
                <span key={idx} className="text-xs px-3 py-1 rounded-lg bg-[#f5eee6] text-[#7a6859] font-medium">
                  #{tag}
                </span>
              ))}
            </div>

            {/* In-Article Call to Action */}
            <div className="bg-[#f5eee6] p-6 rounded-2xl border border-[#e8ded1] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="font-serif text-lg font-bold text-[#3e2f28]">
                  Precisa de apoio para trabalhar estas questões?
                </h4>
                <p className="text-xs text-[#7a6859]">
                  Entre em contato diretamente com a Dra. Natália Lopes e inicie seu acompanhamento.
                </p>
              </div>

              <a
                href={`https://wa.me/${THERAPIST_PROFILE.whatsapp}?text=${encodeURIComponent(
                  `Olá Dra. Natália, li seu artigo "${selectedPost.title}" e gostaria de informações sobre seu atendimento.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl font-bold text-xs bg-[#3e2f28] text-[#fbf8f3] hover:bg-[#2b201a] shrink-0 text-center"
              >
                Falar no WhatsApp
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
