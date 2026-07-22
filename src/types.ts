export interface TherapistProfile {
  name: string;
  title: string;
  crp: string;
  whatsapp: string;
  whatsappFormatted: string;
  instagram: string;
  email: string;
  photoUrl: string;
  bio: string;
  approaches: string[];
  onlineServiceInfo: string;
}

export interface Service {
  id: string;
  title: string;
  duration: string;
  description: string;
  modality: 'Online' | 'Presencial' | 'Ambos';
  price?: string;
  recommendedFor: string[];
}

export interface Appointment {
  id: string;
  patientName: string;
  patientPhone: string;
  patientEmail: string;
  serviceId: string;
  serviceTitle: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:MM
  modality: 'Online' | 'Presencial';
  status: 'Pendente' | 'Confirmado' | 'Concluído' | 'Cancelado';
  notes?: string;
  createdAt: string;
  meetLink?: string;
}

export interface SessionNote {
  id: string;
  sessionNumber: number;
  date: string;
  complaintSummary: string; // Queixa/Tema principal
  clinicalEvolution: string; // Evolução e observações psicanalíticas
  interventions: string; // Intervenções / Recomendações
  confidentialNotes?: string; // Anotações sigilosas da psicóloga
  paymentStatus: 'Pago' | 'Pendente' | 'Isento';
  paymentMethod?: 'Pix' | 'Cartão' | 'Transferência' | 'Dinheiro';
  value: number;
}

export interface Patient {
  id: string;
  fullName: string;
  cpf: string;
  birthDate: string;
  phone: string;
  email: string;
  occupation: string;
  emergencyContactName: string;
  emergencyContactPhone: string;
  maritalStatus?: string;
  startDate: string;
  medicalHistory?: string;
  medications?: string;
  status: 'Ativo' | 'Em Pausa' | 'Alta' | 'Desistente';
  sessions: SessionNote[];
  tags: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string[]; // Parágrafos do artigo
  category: 'Psicanálise' | 'Ansiedade' | 'Autoconhecimento' | 'Saúde da Mulher' | 'Relacionamentos' | 'Luto';
  author: string;
  date: string;
  readTime: string;
  imageUrl: string;
  tags: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface ReceiptData {
  id: string;
  patientName: string;
  patientCPF: string;
  date: string;
  amount: number;
  description: string;
  therapistName: string;
  therapistCRP: string;
}
