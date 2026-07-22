import React from 'react';
import { MessageCircle, Instagram, Mail, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { THERAPIST_PROFILE } from '../data/initialData';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const whatsappUrl = `https://wa.me/${THERAPIST_PROFILE.whatsapp}?text=${encodeURIComponent(
    'Olá Dra. Natália, vi seu site e gostaria de informações sobre o atendimento psicanalítico.'
  )}`;

  return (
    <section id="inicio" className="relative overflow-hidden bg-[#fbf8f3] py-12 lg:py-20">
      {/* Soft Organic Background Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#f2e6d8]/60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-[#e8ded1]/50 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Online badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#eedfd2] border border-[#d9c7b6] text-xs font-semibold text-[#804832]">
              <span className="w-2 h-2 rounded-full bg-[#25d366] animate-pulse" />
              <span>Atendimentos Online em todo o Brasil e Exterior</span>
            </div>

            {/* Title & Headline */}
            <div className="space-y-3">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#3e2f28] leading-[1.15] tracking-tight">
                Natália Lopes
              </h1>
              <p className="font-sans text-xl sm:text-2xl font-medium text-[#b06d53]">
                Psicanalista | Psicóloga Clínica – CRP: {THERAPIST_PROFILE.crp}
              </p>
              <h2 className="text-lg sm:text-xl text-[#524338] leading-relaxed pt-2">
                Um espaço seguro de escuta acolhedora, sigilo e autoconhecimento. Psicoterapia individual focada no alívio do sofrimento psíquico e no fortalecimento emocional.
              </h2>
            </div>

            {/* Quick Benefits Bullet List */}
            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              {[
                'Sessões online no conforto de casa',
                'Escuta psicanalítica sem julgamentos',
                'Tratamento para ansiedade e depressão',
                'Emissão de recibo para reembolso'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm font-medium text-[#524338]">
                  <CheckCircle2 className="w-4 h-4 text-[#b06d53] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-[#fbf8f3] bg-[#3e2f28] hover:bg-[#2b201a] shadow-md hover:shadow-lg transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-[#25d366]/20 text-[#25d366]" />
                <span>Falar no WhatsApp</span>
              </a>

              <button
                onClick={() => onNavigate('sobre')}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-[#524338] bg-[#eedfd2] hover:bg-[#e4d2c2] border border-[#d9c7b6] transition-all"
              >
                <span>Conheça a Abordagem</span>
              </button>
            </div>

            {/* Direct Contact Banner Cards mirroring the user's card */}
            <div className="pt-6 border-t border-[#e8ded1] grid sm:grid-cols-3 gap-3">
              
              {/* WhatsApp Card */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-[#fffdfa] border border-[#e8ded1] hover:border-[#25d366]/50 hover:shadow-sm transition-all"
              >
                <div className="w-9 h-9 rounded-lg bg-[#25d366]/10 text-[#25d366] flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[11px] font-semibold text-[#7a6859] uppercase tracking-wider">WhatsApp</span>
                  <span className="block text-xs font-bold text-[#3e2f28] truncate">{THERAPIST_PROFILE.whatsappFormatted}</span>
                </div>
              </a>

              {/* Instagram Card */}
              <a
                href={`https://instagram.com/${THERAPIST_PROFILE.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-[#fffdfa] border border-[#e8ded1] hover:border-[#b06d53]/50 hover:shadow-sm transition-all"
              >
                <div className="w-9 h-9 rounded-lg bg-[#e1306c]/10 text-[#e1306c] flex items-center justify-center shrink-0">
                  <Instagram className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[11px] font-semibold text-[#7a6859] uppercase tracking-wider">Instagram</span>
                  <span className="block text-xs font-bold text-[#3e2f28] truncate">{THERAPIST_PROFILE.instagram}</span>
                </div>
              </a>

              {/* Email Card */}
              <a
                href={`mailto:${THERAPIST_PROFILE.email}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-[#fffdfa] border border-[#e8ded1] hover:border-[#4285f4]/50 hover:shadow-sm transition-all"
              >
                <div className="w-9 h-9 rounded-lg bg-[#4285f4]/10 text-[#4285f4] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[11px] font-semibold text-[#7a6859] uppercase tracking-wider">E-mail</span>
                  <span className="block text-xs font-bold text-[#3e2f28] truncate">{THERAPIST_PROFILE.email}</span>
                </div>
              </a>

            </div>

          </div>

          {/* Right Column: Framed Portrait Card based on uploaded image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative max-w-md w-full">
              
              {/* Card Container styled like the uploaded business card */}
              <div className="bg-[#f5eee6] p-8 rounded-3xl border border-[#e0d3c5] shadow-xl relative overflow-hidden text-center space-y-6">
                
                {/* Decorative background curves */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#eedfd2] rounded-bl-full pointer-events-none opacity-60" />
                <div className="absolute bottom-0 left-0 w-28 h-28 bg-[#e4d2c2] rounded-tr-full pointer-events-none opacity-60" />

                {/* Circular Portrait with golden nude ring */}
                <div className="relative inline-block mx-auto">
                  <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full p-2 bg-gradient-to-tr from-[#d9a288] via-[#e2c1b0] to-[#b06d53] shadow-md">
                    <img
                      src={THERAPIST_PROFILE.photoUrl}
                      alt="Dra. Natália Lopes - Psicanalista e Psicóloga Clínica"
                      className="w-full h-full object-cover rounded-full"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute -bottom-2 right-2 bg-[#3e2f28] text-[#fbf8f3] text-[11px] font-bold px-3 py-1 rounded-full shadow border border-[#e8ded1]">
                    CRP 11/25965
                  </div>
                </div>

                {/* Name & Title as in card */}
                <div className="space-y-1 relative z-10">
                  <h3 className="font-serif text-3xl font-bold text-[#3e2f28]">
                    Natália Lopes
                  </h3>
                  <p className="text-sm font-semibold text-[#7a6859]">
                    Psicanalista | Psicóloga Clínica
                  </p>
                  <div className="pt-2 flex items-center justify-center gap-2 text-xs font-bold text-[#804832] uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#804832]" />
                    Atendimentos Online
                    <span className="w-1.5 h-1.5 rounded-full bg-[#804832]" />
                  </div>
                </div>

                {/* Direct Action Badge List */}
                <div className="space-y-2 pt-2 relative z-10">
                  <div className="p-3 bg-[#ffffff]/80 backdrop-blur-sm rounded-xl border border-[#e0d3c5] flex items-center justify-between text-xs text-[#3e2f28] font-medium">
                    <span className="text-[#7a6859]">Modalidade:</span>
                    <span className="font-bold text-[#b06d53]">Google Meet / Zoom</span>
                  </div>
                  <div className="p-3 bg-[#ffffff]/80 backdrop-blur-sm rounded-xl border border-[#e0d3c5] flex items-center justify-between text-xs text-[#3e2f28] font-medium">
                    <span className="text-[#7a6859]">Sigilo e Privacidade:</span>
                    <span className="font-bold text-[#5e7060] flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Garantidos (CFP)
                    </span>
                  </div>
                </div>

                {/* Bottom CTA inside card */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 rounded-xl font-bold text-sm bg-[#3e2f28] text-[#fbf8f3] hover:bg-[#2b201a] transition-all shadow-sm text-center"
                >
                  Entrar em Contato no WhatsApp
                </a>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
