import React, { useState } from 'react';
import { MessageCircle, ShieldCheck, Menu, X } from 'lucide-react';
import { THERAPIST_PROFILE } from '../data/initialData';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
  onOpenEHR: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onNavigate,
  activeSection,
  onOpenEHR,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'inicio', label: 'Início' },
    { id: 'sobre', label: 'Sobre & Abordagem' },
    { id: 'blog', label: 'Blog Saúde Mental' },
    { id: 'contato', label: 'Contato' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  const whatsappUrl = `https://wa.me/${THERAPIST_PROFILE.whatsapp}?text=${encodeURIComponent(
    'Olá Dra. Natália, gostaria de informações sobre seu atendimento psicanalítico.'
  )}`;

  return (
    <header className="sticky top-0 z-40 bg-[#fbf8f3]/95 backdrop-blur-md border-b border-[#e8ded1] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo & Professional Designation */}
        <button
          onClick={() => handleNavClick('inicio')}
          className="text-left flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-11 h-11 rounded-full bg-[#3e2f28] text-[#fbf8f3] flex items-center justify-center font-serif text-xl font-bold border border-[#b06d53]/30 shadow-sm group-hover:scale-105 transition-transform">
            NL
          </div>
          <div>
            <span className="block font-serif text-xl font-bold text-[#3e2f28] leading-tight tracking-tight group-hover:text-[#b06d53] transition-colors">
              Natália Lopes
            </span>
            <span className="block text-xs font-medium text-[#7a6859]">
              Psicanalista & Psicóloga Clínica • CRP {THERAPIST_PROFILE.crp}
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#524338]">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`transition-colors py-1 relative ${
                activeSection === item.id
                  ? 'text-[#b06d53] font-semibold'
                  : 'hover:text-[#b06d53]'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#b06d53] rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {/* Secure EHR Portal Access */}
          <button
            onClick={onOpenEHR}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-[#3e2f28] bg-[#eedfd2] hover:bg-[#e4d2c2] border border-[#d9c7b6] transition-all"
            title="Acesso ao Prontuário Eletrônico do Paciente"
          >
            <ShieldCheck className="w-4 h-4 text-[#b06d53]" />
            <span>Prontuário Seguro</span>
          </button>

          {/* Direct WhatsApp button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-[#1ebe5d] bg-[#25d366]/10 hover:bg-[#25d366]/20 border border-[#25d366]/30 transition-all"
            title="WhatsApp Profissional"
          >
            <MessageCircle className="w-4 h-4 fill-[#25d366]/20 text-[#25d366]" />
            <span>Contato via WhatsApp</span>
          </a>
        </div>

        {/* Mobile menu toggle button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenEHR}
            className="p-2 rounded-lg text-[#3e2f28] bg-[#eedfd2] border border-[#d9c7b6]"
            title="Prontuário Eletrônico"
          >
            <ShieldCheck className="w-5 h-5 text-[#b06d53]" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#3e2f28] hover:bg-[#f5eee6] focus:outline-none"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#fbf8f3] border-b border-[#e8ded1] px-4 pt-2 pb-6 space-y-3 animate-fadeIn">
          <div className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  activeSection === item.id
                    ? 'bg-[#eedfd2] text-[#b06d53] font-semibold'
                    : 'text-[#524338] hover:bg-[#f5eee6]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-[#e8ded1] space-y-2.5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-base font-semibold text-[#1ebe5d] bg-[#25d366]/10 border border-[#25d366]/30"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp: {THERAPIST_PROFILE.whatsappFormatted}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
