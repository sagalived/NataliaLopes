import React from 'react';
import { HeartHandshake, Brain, Shield, Heart, Sparkles, Compass, Lightbulb, Users, MessageCircle } from 'lucide-react';
import { THERAPIST_PROFILE, SERVICES_DATA } from '../data/initialData';

export const AboutSection: React.FC = () => {
  const whatsappUrl = `https://wa.me/${THERAPIST_PROFILE.whatsapp}?text=${encodeURIComponent(
    'Olá Dra. Natália, gostaria de mais informações sobre o processo psicanalítico.'
  )}`;

  const specialties = [
    {
      icon: Brain,
      title: 'Psicanálise Clínica',
      desc: 'Investigação do inconsciente, compreensão dos lapsos, repetições de padrões e ressignificação de conteúdos represados.'
    },
    {
      icon: Sparkles,
      title: 'Ansiedade & Síndrome de Burnout',
      desc: 'Manejo de pensamentos acelerados, crises de pânico, palpitações e sobrecarga gerada pelo estresse corporativo ou acadêmico.'
    },
    {
      icon: Heart,
      title: 'Saúde Mental da Mulher',
      desc: 'Acolhimento de demandas femininas, como maternidade, pressão social por perfeição, fases de transição e fortalecimento da autoestima.'
    },
    {
      icon: Compass,
      title: 'Autoconhecimento & Limites',
      desc: 'Desenvolvimento de autonomia psíquica, aprendizado de como impor limites sem culpa e alinhamento com seus reais desejos.'
    },
    {
      icon: HeartHandshake,
      title: 'Luto & Perdas Significativas',
      desc: 'Suporte humanizado para travessia de momentos de separação conjugal, falecimento de entes queridos ou transições de vida.'
    },
    {
      icon: Shield,
      title: 'Sigilo & Ética Profissional',
      desc: 'Compromisso rigoroso com as normas do Conselho Federal de Psicologia (CFP), garantindo ambiente confidencial e protegido.'
    }
  ];

  return (
    <section id="sobre" className="py-16 lg:py-24 bg-[#fffdfa] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-bold text-[#b06d53] uppercase tracking-widest px-3 py-1 bg-[#eedfd2] rounded-full inline-block">
            Sobre a Profissional & Abordagem
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#3e2f28]">
            Uma escuta qualificada para o seu momento de vida
          </h2>
          <p className="text-base text-[#7a6859] leading-relaxed">
            A dor e o sofrimento emocional não precisam ser carregados em solitude. A psicoterapia oferece as ferramentas para transformar o que angustia em palavra e autoconhecimento.
          </p>
        </div>

        {/* Bio Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
          
          <div className="lg:col-span-5">
            <div className="bg-[#f5eee6] p-8 rounded-3xl border border-[#e8ded1] space-y-6 shadow-sm">
              <div className="flex items-center gap-4 border-b border-[#e8ded1] pb-6">
                <div className="w-16 h-16 rounded-2xl bg-[#3e2f28] text-[#fbf8f3] font-serif text-2xl font-bold flex items-center justify-center shrink-0">
                  NL
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#3e2f28]">Dra. Natália Lopes</h3>
                  <p className="text-sm font-semibold text-[#b06d53]">Psicanalista & Psicóloga Clínica</p>
                  <p className="text-xs text-[#7a6859]">CRP 11/25965</p>
                </div>
              </div>

              <p className="text-sm text-[#524338] leading-relaxed italic">
                "{THERAPIST_PROFILE.bio}"
              </p>

              <div className="pt-2 space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#7a6859]">Atuação & Metodologia:</h4>
                <div className="flex flex-wrap gap-2">
                  {THERAPIST_PROFILE.approaches.map((app, i) => (
                    <span key={i} className="text-xs font-medium px-2.5 py-1 rounded-lg bg-[#ffffff] text-[#3e2f28] border border-[#d9c7b6]">
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3 rounded-xl font-semibold text-sm bg-[#3e2f28] text-[#fbf8f3] hover:bg-[#2b201a] transition-all"
              >
                Iniciar Processo via WhatsApp
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#3e2f28]">
              Como funciona o trabalho analítico?
            </h3>
            <p className="text-base text-[#524338] leading-relaxed">
              O processo de análise não busca enquadrar o indivíduo em rótulos pré-determinados, mas sim compreender a história singular de cada pessoa. Na Psicanálise, você é encorajado(a) a falar livremente sobre seus pensamentos, sonhos, medos e desejos.
            </p>
            <p className="text-base text-[#524338] leading-relaxed">
              A partir da aliança terapêutica e da escuta atenta dos sintomas, construímos juntos um caminho para que você possa entender o que está por trás da ansiedade, da insônia, das angústias repetitivas e das dificuldades nos relacionamentos.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-[#fbf8f3] border border-[#e8ded1]">
                <div className="w-10 h-10 rounded-xl bg-[#b06d53]/10 text-[#b06d53] flex items-center justify-center mb-3 font-bold">
                  01
                </div>
                <h4 className="font-serif font-bold text-[#3e2f28] text-base mb-1">Acolhimento Inicial</h4>
                <p className="text-xs text-[#7a6859]">Compreensão da queixa principal, escuta das demandas urgentes e apresentação do enquadre terapêutico.</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#fbf8f3] border border-[#e8ded1]">
                <div className="w-10 h-10 rounded-xl bg-[#5e7060]/10 text-[#5e7060] flex items-center justify-center mb-3 font-bold">
                  02
                </div>
                <h4 className="font-serif font-bold text-[#3e2f28] text-base mb-1">Elaboração Contínua</h4>
                <p className="text-xs text-[#7a6859]">Sessões semanais regulares onde construímos autonomia emocional e ressignificação de conflitos.</p>
              </div>
            </div>
          </div>

        </div>

        {/* Specialties Grid */}
        <div className="pt-8">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
            <h3 className="font-serif text-2xl font-bold text-[#3e2f28]">Principais Áreas de Atendimento</h3>
            <p className="text-sm text-[#7a6859]">
              Suporte especializado voltado para as diferentes etapas da vida emocional adulta.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#fbf8f3] border border-[#e8ded1] hover:border-[#b06d53]/40 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#eedfd2] text-[#b06d53] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-[#3e2f28] mb-2 group-hover:text-[#b06d53] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-[#524338] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Services / Modalities Banner */}
        <div className="mt-16 bg-[#3e2f28] text-[#fbf8f3] rounded-3xl p-8 lg:p-12 shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-80 h-80 bg-[#b06d53]/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eedfd2]/20 text-[#d9a288] text-xs font-semibold">
                <span>Atendimentos Online</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#fbf8f3]">
                Pronto(a) para dar o primeiro passo em direção ao seu bem-estar psíquico?
              </h3>
              <p className="text-sm sm:text-base text-[#e8ded1] leading-relaxed">
                {THERAPIST_PROFILE.onlineServiceInfo}
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl font-bold text-base bg-[#b06d53] text-[#fbf8f3] hover:bg-[#965840] transition-all shadow-lg hover:shadow-xl w-full sm:w-auto text-center flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5 fill-[#25d366]/20" />
                <span>Falar com a Natália</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
