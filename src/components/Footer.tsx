import React from 'react';
import { MessageCircle, Instagram, Mail, ShieldCheck, Heart } from 'lucide-react';
import { THERAPIST_PROFILE } from '../data/initialData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenEHR: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenEHR }) => {
  return (
    <footer className="bg-[#3e2f28] text-[#fbf8f3] pt-16 pb-12 border-t border-[#2b201a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid md:grid-cols-12 gap-8 items-start">
          
          {/* Col 1: Brand & Credentials */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#b06d53] text-[#fbf8f3] font-serif font-bold text-lg flex items-center justify-center">
                NL
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold">Natália Lopes</h3>
                <p className="text-xs text-[#d9a288]">Psicanalista & Psicóloga Clínica • CRP {THERAPIST_PROFILE.crp}</p>
              </div>
            </div>

            <p className="text-xs text-[#e8ded1] leading-relaxed max-w-sm">
              Um espaço ético e acolhedor dedicado ao cuidado psíquico, alívio da ansiedade e desenvolvimento do autoconhecimento através da escuta psicanalítica.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={`https://wa.me/${THERAPIST_PROFILE.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#25d366]/20 text-[#25d366] flex items-center justify-center hover:bg-[#25d366]/30 transition-all"
                title="WhatsApp"
              >
                <MessageCircle className="w-5 h-5 fill-[#25d366]/20" />
              </a>

              <a
                href={`https://instagram.com/${THERAPIST_PROFILE.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#e1306c]/20 text-[#e1306c] flex items-center justify-center hover:bg-[#e1306c]/30 transition-all"
                title="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>

              <a
                href={`mailto:${THERAPIST_PROFILE.email}`}
                className="w-9 h-9 rounded-xl bg-[#4285f4]/20 text-[#4285f4] flex items-center justify-center hover:bg-[#4285f4]/30 transition-all"
                title="E-mail"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-[#d9a288]">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs text-[#e8ded1]">
              <li>
                <button onClick={() => onNavigate('inicio')} className="hover:text-[#d9a288] transition-colors">
                  Início
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('sobre')} className="hover:text-[#d9a288] transition-colors">
                  Sobre & Abordagem
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('blog')} className="hover:text-[#d9a288] transition-colors">
                  Blog de Saúde Mental
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contato')} className="hover:text-[#d9a288] transition-colors">
                  Contato e Dúvidas
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Secure EHR Portal link & Ethics */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-[#d9a288]">
              Área Restrita & Ética
            </h4>
            <p className="text-xs text-[#e8ded1] leading-relaxed">
              Prontuário eletrônico de acesso restrito à profissional para registro de anamnese e evoluções clínicas.
            </p>

            <button
              onClick={onOpenEHR}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-[#2b201a] text-[#fbf8f3] border border-[#524338] hover:bg-[#1a1310] transition-all"
            >
              <ShieldCheck className="w-4 h-4 text-[#d9a288]" />
              <span>Acessar Prontuário Eletrônico</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#2b201a] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#e8ded1]/80">
          <p>© {new Date().getFullYear()} Dra. Natália Lopes - Psicanalista & Psicóloga Clínica (CRP 11/25965). Todos os direitos reservados.</p>
          <div className="flex items-center gap-1">
            <span>Desenvolvido com</span>
            <Heart className="w-3.5 h-3.5 text-[#b06d53] fill-[#b06d53]" />
            <span>para o cuidado com a Saúde Mental</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
