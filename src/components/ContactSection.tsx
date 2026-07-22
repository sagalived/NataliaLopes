import React, { useState } from 'react';
import { MessageCircle, Instagram, Mail, ShieldCheck, ChevronDown, Send, MapPin, Phone } from 'lucide-react';
import { THERAPIST_PROFILE, FAQ_ITEMS } from '../data/initialData';

export const ContactSection: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [messageName, setMessageName] = useState('');
  const [messageText, setMessageText] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageName || !messageText) return;

    const fullMessage = `Olá Dra. Natália Lopes! Meu nome é ${messageName}.\n\n*Mensagem enviada do site:* ${messageText}`;
    const url = `https://wa.me/${THERAPIST_PROFILE.whatsapp}?text=${encodeURIComponent(fullMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contato" className="py-16 lg:py-24 bg-[#fffdfa] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold text-[#b06d53] uppercase tracking-widest px-3 py-1 bg-[#eedfd2] rounded-full inline-block">
            Canais de Atendimento & Contato
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#3e2f28]">
            Fale Diretamente com a Dra. Natália Lopes
          </h2>
          <p className="text-base text-[#7a6859]">
            Tire suas dúvidas sobre consultas, horários disponíveis ou reembolso do seu plano de saúde.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left Column: Direct Contact Info & Quick WhatsApp Message Form */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Professional Info Box mirroring the business card */}
            <div className="bg-[#f5eee6] p-8 rounded-3xl border border-[#e8ded1] space-y-6">
              <div className="space-y-1">
                <h3 className="font-serif text-2xl font-bold text-[#3e2f28]">Natália Lopes</h3>
                <p className="text-sm font-semibold text-[#b06d53]">Psicanalista | Psicóloga Clínica</p>
                <p className="text-xs font-bold text-[#7a6859]">CRP: {THERAPIST_PROFILE.crp}</p>
              </div>

              <div className="space-y-4 pt-2">
                
                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${THERAPIST_PROFILE.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-[#fffdfa] border border-[#e8ded1] hover:border-[#25d366] transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#25d366]/10 text-[#25d366] flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 fill-[#25d366]/20" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-[#7a6859] uppercase">WhatsApp Profissional</span>
                    <span className="block text-sm font-bold text-[#3e2f28] group-hover:text-[#25d366]">{THERAPIST_PROFILE.whatsappFormatted}</span>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href={`https://instagram.com/${THERAPIST_PROFILE.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-[#fffdfa] border border-[#e8ded1] hover:border-[#e1306c] transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#e1306c]/10 text-[#e1306c] flex items-center justify-center shrink-0">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-[#7a6859] uppercase">Instagram</span>
                    <span className="block text-sm font-bold text-[#3e2f28] group-hover:text-[#e1306c]">{THERAPIST_PROFILE.instagram}</span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${THERAPIST_PROFILE.email}`}
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-[#fffdfa] border border-[#e8ded1] hover:border-[#4285f4] transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#4285f4]/10 text-[#4285f4] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-xs font-bold text-[#7a6859] uppercase">E-mail para Contato</span>
                    <span className="block text-sm font-bold text-[#3e2f28] group-hover:text-[#4285f4] truncate">{THERAPIST_PROFILE.email}</span>
                  </div>
                </a>

              </div>

              <div className="p-4 rounded-xl bg-[#eedfd2]/50 text-xs text-[#524338] space-y-1">
                <strong className="block text-[#3e2f28]">Atendimento Online em Todo o Brasil</strong>
                <p>Plataforma privada, segura e flexível para você realizar suas sessões com tranquilidade.</p>
              </div>
            </div>

            {/* Quick Direct Message Form */}
            <div className="bg-[#fbf8f3] p-6 rounded-3xl border border-[#e8ded1] space-y-4">
              <h4 className="font-serif text-lg font-bold text-[#3e2f28]">
                Enviar Mensagem Rápida
              </h4>

              <form onSubmit={handleSendMessage} className="space-y-3 text-xs">
                <div>
                  <label className="block font-bold text-[#7a6859] mb-1">Seu Nome</label>
                  <input
                    type="text"
                    required
                    placeholder="Digite seu nome"
                    value={messageName}
                    onChange={(e) => setMessageName(e.target.value)}
                    className="w-full p-3 rounded-xl bg-[#fffdfa] border border-[#d9c7b6] text-[#3e2f28]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#7a6859] mb-1">Mensagem ou Dúvida</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Como posso te ajudar?"
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    className="w-full p-3 rounded-xl bg-[#fffdfa] border border-[#d9c7b6] text-[#3e2f28]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[#3e2f28] text-[#fbf8f3] font-bold text-xs flex items-center justify-center gap-2 hover:bg-[#2b201a]"
                >
                  <Send className="w-4 h-4 text-[#d9a288]" />
                  <span>Enviar direto no WhatsApp</span>
                </button>
              </form>
            </div>

          </div>

          {/* Right Column: FAQ Accordion */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-1">
              <h3 className="font-serif text-2xl font-bold text-[#3e2f28]">
                Perguntas Frequentes (FAQ)
              </h3>
              <p className="text-xs text-[#7a6859]">
                Respostas claras para as principais dúvidas sobre processo terapêutico, reembolso e sigilo.
              </p>
            </div>

            <div className="space-y-3">
              {FAQ_ITEMS.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="bg-[#fbf8f3] rounded-2xl border border-[#e8ded1] overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full p-5 text-left font-serif font-bold text-base text-[#3e2f28] flex items-center justify-between gap-4 hover:text-[#b06d53]"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#b06d53] shrink-0 transition-transform ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 text-xs text-[#524338] leading-relaxed border-t border-[#e8ded1]/50 pt-3 animate-fadeIn">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Crisis hotline notice as per CFP guidelines */}
            <div className="p-4 rounded-2xl bg-[#eedfd2]/40 border border-[#d9c7b6] text-xs text-[#524338] space-y-1">
              <strong className="block text-[#3e2f28] font-serif">⚠️ Em caso de Crise ou Emergência Psiquiátrica:</strong>
              <p>
                A psicoterapia online não é indicada para atendimento imediato de crises graves. Caso esteja enfrentando uma emergência emocional, ligue gratuitamente para o <strong>CVV (Centro de Valorização da Vida) no número 188</strong> ou procure o pronto-socorro mais próximo.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
