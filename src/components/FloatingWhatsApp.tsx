import React from 'react';
import { MessageCircle } from 'lucide-react';
import { THERAPIST_PROFILE } from '../data/initialData';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = `https://wa.me/${THERAPIST_PROFILE.whatsapp}?text=${encodeURIComponent(
    'Olá Dra. Natália! Vi seu site e gostaria de agendar uma consulta online.'
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-[#25d366] text-white p-3.5 sm:p-4 rounded-full shadow-2xl hover:scale-110 hover:bg-[#1ebe5d] transition-all flex items-center gap-2 group ring-4 ring-[#25d366]/20"
      aria-label="Falar no WhatsApp"
      title="Falar com a Dra. Natália Lopes no WhatsApp"
    >
      <MessageCircle className="w-6 h-6 fill-white" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap text-xs font-bold pl-0 group-hover:pl-1">
        Agendar via WhatsApp
      </span>
    </a>
  );
};
