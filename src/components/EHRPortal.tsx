import React, { useState } from 'react';
import { Shield, Lock, Search, Plus, UserCheck, Calendar, FileText, DollarSign, Printer, Download, Check, AlertCircle, Eye, EyeOff, UserPlus, ArrowLeft, Clock, MessageSquare, Tag, KeyRound, ExternalLink } from 'lucide-react';
import { Patient, SessionNote, Appointment, ReceiptData } from '../types';
import { THERAPIST_PROFILE } from '../data/initialData';

interface EHRPortalProps {
  isOpen: boolean;
  onClose: () => void;
  patients: Patient[];
  onUpdatePatients: (patients: Patient[]) => void;
  appointments: Appointment[];
  onUpdateAppointments: (appointments: Appointment[]) => void;
}

export const EHRPortal: React.FC<EHRPortalProps> = ({
  isOpen,
  onClose,
  patients,
  onUpdatePatients,
  appointments,
  onUpdateAppointments,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState(false);

  // Active view inside EHR
  const [activeTab, setActiveTab] = useState<'dashboard' | 'patients' | 'appointments'>('dashboard');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPatientId, setSelectedPatientId] = useState<string | null>(null);

  // New Patient Form state
  const [showNewPatientModal, setShowNewPatientModal] = useState(false);
  const [newPatientData, setNewPatientData] = useState({
    fullName: '',
    cpf: '',
    birthDate: '',
    phone: '',
    email: '',
    occupation: '',
    emergencyContactName: '',
    emergencyContactPhone: '',
    medicalHistory: '',
    medications: '',
    tags: 'Psicanálise, Ansiedade'
  });

  // New Session Note Form state
  const [showNewSessionModal, setShowNewSessionModal] = useState(false);
  const [newSessionData, setNewSessionData] = useState({
    date: new Date().toISOString().split('T')[0],
    complaintSummary: '',
    clinicalEvolution: '',
    interventions: '',
    confidentialNotes: '',
    paymentStatus: 'Pago' as 'Pago' | 'Pendente' | 'Isento',
    paymentMethod: 'Pix' as 'Pix' | 'Cartão' | 'Transferência',
    value: 180
  });

  // Receipt Modal state
  const [activeReceipt, setActiveReceipt] = useState<ReceiptData | null>(null);
  const [showConfidentialNotes, setShowConfidentialNotes] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput === 'psi123' || pinInput === '1234') {
      setIsAuthenticated(true);
      setPinError(false);
    } else {
      setPinError(true);
    }
  };

  const filteredPatients = patients.filter(
    (p) =>
      p.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.cpf.includes(searchQuery) ||
      p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const selectedPatient = patients.find((p) => p.id === selectedPatientId) || null;

  const handleCreatePatient = (e: React.FormEvent) => {
    e.preventDefault();
    const newPat: Patient = {
      id: `pat-${Date.now()}`,
      fullName: newPatientData.fullName,
      cpf: newPatientData.cpf,
      birthDate: newPatientData.birthDate,
      phone: newPatientData.phone,
      email: newPatientData.email,
      occupation: newPatientData.occupation,
      emergencyContactName: newPatientData.emergencyContactName,
      emergencyContactPhone: newPatientData.emergencyContactPhone,
      startDate: new Date().toISOString().split('T')[0],
      medicalHistory: newPatientData.medicalHistory,
      medications: newPatientData.medications,
      status: 'Ativo',
      tags: newPatientData.tags.split(',').map((t) => t.trim()).filter(Boolean),
      sessions: []
    };

    const updated = [newPat, ...patients];
    onUpdatePatients(updated);
    setSelectedPatientId(newPat.id);
    setShowNewPatientModal(false);
    setNewPatientData({
      fullName: '',
      cpf: '',
      birthDate: '',
      phone: '',
      email: '',
      occupation: '',
      emergencyContactName: '',
      emergencyContactPhone: '',
      medicalHistory: '',
      medications: '',
      tags: 'Psicanálise, Ansiedade'
    });
  };

  const handleAddSessionNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPatient) return;

    const sessionNum = selectedPatient.sessions.length + 1;
    const newNote: SessionNote = {
      id: `sn-${Date.now()}`,
      sessionNumber: sessionNum,
      date: newSessionData.date,
      complaintSummary: newSessionData.complaintSummary,
      clinicalEvolution: newSessionData.clinicalEvolution,
      interventions: newSessionData.interventions,
      confidentialNotes: newSessionData.confidentialNotes,
      paymentStatus: newSessionData.paymentStatus,
      paymentMethod: newSessionData.paymentMethod,
      value: Number(newSessionData.value)
    };

    const updatedPatients = patients.map((p) => {
      if (p.id === selectedPatient.id) {
        return {
          ...p,
          sessions: [newNote, ...p.sessions]
        };
      }
      return p;
    });

    onUpdatePatients(updatedPatients);
    setShowNewSessionModal(false);
    setNewSessionData({
      date: new Date().toISOString().split('T')[0],
      complaintSummary: '',
      clinicalEvolution: '',
      interventions: '',
      confidentialNotes: '',
      paymentStatus: 'Pago',
      paymentMethod: 'Pix',
      value: 180
    });
  };

  const handleGenerateReceipt = (session: SessionNote, patient: Patient) => {
    const receipt: ReceiptData = {
      id: `REC-${Date.now().toString().slice(-6)}`,
      patientName: patient.fullName,
      patientCPF: patient.cpf,
      date: session.date,
      amount: session.value,
      description: `Sessão de Psicoterapia / Psicanálise Individual (Sessão Nº ${session.sessionNumber})`,
      therapistName: THERAPIST_PROFILE.name,
      therapistCRP: THERAPIST_PROFILE.crp
    };
    setActiveReceipt(receipt);
  };

  const handleUpdateAppointmentStatus = (id: string, newStatus: Appointment['status']) => {
    const updated = appointments.map((a) => (a.id === id ? { ...a, status: newStatus } : a));
    onUpdateAppointments(updated);
  };

  const totalRevenue = patients.reduce((acc, p) => {
    return acc + p.sessions.reduce((sAcc, s) => (s.paymentStatus === 'Pago' ? sAcc + s.value : sAcc), 0);
  }, 0);

  return (
    <div className="fixed inset-0 z-50 bg-[#1e1713]/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
      <div className="bg-[#fbf8f3] rounded-3xl max-w-6xl w-full max-h-[95vh] h-full flex flex-col shadow-2xl border border-[#e8ded1] overflow-hidden relative">
        
        {/* Top EHR Header Bar */}
        <div className="bg-[#3e2f28] text-[#fbf8f3] px-6 py-4 flex items-center justify-between border-b border-[#2b201a]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#b06d53] text-white flex items-center justify-center">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-serif text-lg font-bold">Prontuário Eletrônico do Paciente</h2>
                <span className="text-[10px] bg-[#25d366]/20 text-[#25d366] px-2 py-0.5 rounded font-mono font-bold">
                  SIGILO CFP / LGPD
                </span>
              </div>
              <p className="text-xs text-[#e8ded1]">
                Portal Restrito • Dra. Natália Lopes (CRP {THERAPIST_PROFILE.crp})
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="px-3.5 py-1.5 rounded-xl bg-[#2b201a] text-xs font-semibold hover:bg-[#1a1310] text-[#e8ded1] transition-all"
          >
            Sair do Prontuário
          </button>
        </div>

        {/* PIN Authentication View */}
        {!isAuthenticated ? (
          <div className="flex-1 flex items-center justify-center p-6 bg-[#f5eee6]">
            <div className="max-w-md w-full bg-[#fffdfa] p-8 rounded-3xl border border-[#e8ded1] shadow-lg text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#eedfd2] text-[#b06d53] flex items-center justify-center mx-auto">
                <Lock className="w-8 h-8" />
              </div>

              <div className="space-y-1">
                <h3 className="font-serif text-2xl font-bold text-[#3e2f28]">Acesso Restrito ao Prontuário</h3>
                <p className="text-xs text-[#7a6859]">
                  Digite a senha/PIN da psicóloga para acessar as fichas clínicas confidenciais.
                </p>
                <p className="text-[11px] font-mono text-[#b06d53] pt-1">
                  (Senha de demonstração: <strong className="underline">psi123</strong>)
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div className="relative">
                  <KeyRound className="w-5 h-5 text-[#7a6859] absolute left-3.5 top-3.5" />
                  <input
                    type="password"
                    placeholder="PIN de acesso (psi123)"
                    value={pinInput}
                    onChange={(e) => setPinInput(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#fbf8f3] border border-[#d9c7b6] text-[#3e2f28] font-bold tracking-widest text-center focus:outline-none focus:ring-2 focus:ring-[#b06d53]"
                  />
                </div>

                {pinError && (
                  <p className="text-xs font-semibold text-red-600 flex items-center justify-center gap-1">
                    <AlertCircle className="w-4 h-4" /> PIN incorreto. Use 'psi123' para acessar.
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#3e2f28] text-[#fbf8f3] font-bold text-sm hover:bg-[#2b201a] transition-all shadow-md"
                >
                  Autenticar e Entrar
                </button>
              </form>

              <div className="p-3 rounded-xl bg-[#eedfd2]/40 text-[11px] text-[#524338] text-left leading-relaxed">
                <strong>Aviso de Sigilo Profissional:</strong> Acesso regulamentado pelo Código de Ética Profissional do Psicólogo (Resolução CFP nº 001/2009 e Lei 13.709/2018 - LGPD).
              </div>
            </div>
          </div>
        ) : (
          /* Main Authenticated EHR Interface */
          <div className="flex-1 flex flex-col md:flex-row overflow-hidden bg-[#fbf8f3]">
            
            {/* EHR Sidebar Menu */}
            <div className="w-full md:w-64 bg-[#f5eee6] border-r border-[#e8ded1] p-4 flex flex-col gap-2 shrink-0">
              <button
                onClick={() => {
                  setActiveTab('dashboard');
                  setSelectedPatientId(null);
                }}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === 'dashboard' && !selectedPatientId
                    ? 'bg-[#3e2f28] text-[#fbf8f3]'
                    : 'text-[#524338] hover:bg-[#eedfd2]'
                }`}
              >
                <Calendar className="w-4 h-4" />
                <span>Painel Inicial</span>
              </button>

              <button
                onClick={() => {
                  setActiveTab('patients');
                  setSelectedPatientId(null);
                }}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === 'patients' || selectedPatientId
                    ? 'bg-[#3e2f28] text-[#fbf8f3]'
                    : 'text-[#524338] hover:bg-[#eedfd2]'
                }`}
              >
                <UserCheck className="w-4 h-4" />
                <span>Fichas dos Pacientes</span>
                <span className="ml-auto text-xs px-2 py-0.5 rounded-full bg-[#b06d53] text-[#fbf8f3]">
                  {patients.length}
                </span>
              </button>

              <button
                onClick={() => {
                  setActiveTab('appointments');
                  setSelectedPatientId(null);
                }}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === 'appointments'
                    ? 'bg-[#3e2f28] text-[#fbf8f3]'
                    : 'text-[#524338] hover:bg-[#eedfd2]'
                }`}
              >
                <Clock className="w-4 h-4" />
                <span>Solicitações de Agenda</span>
                <span className="ml-auto text-xs px-2 py-0.5 rounded-full bg-[#5e7060] text-[#fbf8f3]">
                  {appointments.length}
                </span>
              </button>

              <div className="mt-auto pt-4 border-t border-[#e8ded1]">
                <button
                  onClick={() => setShowNewPatientModal(true)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold bg-[#b06d53] text-white hover:bg-[#965840] transition-all shadow-sm"
                >
                  <UserPlus className="w-4 h-4" />
                  <span>Cadastrar Novo Paciente</span>
                </button>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 p-6 overflow-y-auto">
              
              {/* VIEW 1: Patient Details (Ficha Clínica & Evoluções) */}
              {selectedPatient ? (
                <div className="space-y-6">
                  {/* Back button */}
                  <button
                    onClick={() => setSelectedPatientId(null)}
                    className="flex items-center gap-2 text-xs font-bold text-[#b06d53] hover:underline"
                  >
                    <ArrowLeft className="w-4 h-4" /> Voltar para lista de pacientes
                  </button>

                  {/* Patient Profile Card */}
                  <div className="bg-[#fffdfa] p-6 rounded-2xl border border-[#e8ded1] shadow-sm space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#e8ded1] pb-4">
                      <div>
                        <div className="flex items-center gap-3">
                          <h3 className="font-serif text-2xl font-bold text-[#3e2f28]">
                            {selectedPatient.fullName}
                          </h3>
                          <span className="text-xs px-2.5 py-1 rounded-full bg-[#5e7060]/15 text-[#5e7060] font-bold">
                            {selectedPatient.status}
                          </span>
                        </div>
                        <p className="text-xs text-[#7a6859] mt-1">
                          CPF: {selectedPatient.cpf} • Início do acompanhamento: {selectedPatient.startDate}
                        </p>
                      </div>

                      <button
                        onClick={() => setShowNewSessionModal(true)}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-[#3e2f28] text-[#fbf8f3] hover:bg-[#2b201a]"
                      >
                        <Plus className="w-4 h-4 text-[#b06d53]" />
                        <span>Registrar Nova Sessão</span>
                      </button>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-4 text-xs text-[#524338]">
                      <div>
                        <strong className="block text-[#7a6859]">Telefone / WhatsApp:</strong>
                        <span>{selectedPatient.phone}</span>
                      </div>
                      <div>
                        <strong className="block text-[#7a6859]">E-mail:</strong>
                        <span>{selectedPatient.email}</span>
                      </div>
                      <div>
                        <strong className="block text-[#7a6859]">Profissão:</strong>
                        <span>{selectedPatient.occupation}</span>
                      </div>
                      <div>
                        <strong className="block text-[#7a6859]">Contato de Emergência:</strong>
                        <span>{selectedPatient.emergencyContactName} ({selectedPatient.emergencyContactPhone})</span>
                      </div>
                      <div className="sm:col-span-2">
                        <strong className="block text-[#7a6859]">Medicações em uso:</strong>
                        <span>{selectedPatient.medications || 'Nenhuma medicação relatada'}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {selectedPatient.tags.map((tag, idx) => (
                        <span key={idx} className="text-[11px] px-2.5 py-0.5 rounded bg-[#eedfd2] text-[#3e2f28] font-medium">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Session History */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h4 className="font-serif text-lg font-bold text-[#3e2f28] flex items-center gap-2">
                        <FileText className="w-5 h-5 text-[#b06d53]" />
                        Histórico de Evolução Clínica ({selectedPatient.sessions.length} sessões)
                      </h4>

                      <button
                        onClick={() => setShowConfidentialNotes(!showConfidentialNotes)}
                        className="flex items-center gap-1.5 text-xs font-semibold text-[#b06d53] hover:underline"
                      >
                        {showConfidentialNotes ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        <span>{showConfidentialNotes ? 'Ocultar Anotações Sigilosas' : 'Exibir Anotações Sigilosas'}</span>
                      </button>
                    </div>

                    {selectedPatient.sessions.length === 0 ? (
                      <div className="p-8 text-center bg-[#fffdfa] rounded-2xl border border-[#e8ded1] text-xs text-[#7a6859]">
                        Nenhuma evolução registrada ainda. Clique em "Registrar Nova Sessão" para iniciar o prontuário.
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {selectedPatient.sessions.map((session) => (
                          <div key={session.id} className="p-5 bg-[#fffdfa] rounded-2xl border border-[#e8ded1] space-y-3">
                            <div className="flex items-center justify-between border-b border-[#e8ded1] pb-2">
                              <div className="flex items-center gap-2">
                                <span className="font-bold text-sm text-[#3e2f28]">
                                  Sessão Nº {session.sessionNumber}
                                </span>
                                <span className="text-xs text-[#7a6859]">({session.date})</span>
                              </div>

                              <div className="flex items-center gap-2">
                                <span className="text-xs font-bold text-[#5e7060] bg-[#5e7060]/10 px-2 py-0.5 rounded">
                                  R$ {session.value} • {session.paymentStatus} ({session.paymentMethod})
                                </span>

                                <button
                                  onClick={() => handleGenerateReceipt(session, selectedPatient)}
                                  className="flex items-center gap-1 text-xs font-bold text-[#3e2f28] bg-[#eedfd2] hover:bg-[#e4d2c2] px-2.5 py-1 rounded"
                                >
                                  <Printer className="w-3.5 h-3.5" />
                                  <span>Recibo</span>
                                </button>
                              </div>
                            </div>

                            <div className="space-y-2 text-xs text-[#524338]">
                              <div>
                                <strong className="text-[#b06d53] block">Queixa / Tema Principal:</strong>
                                <p className="mt-0.5 text-[#3e2f28]">{session.complaintSummary}</p>
                              </div>

                              <div>
                                <strong className="text-[#3e2f28] block">Evolução Clínica & Observações Psicanalíticas:</strong>
                                <p className="mt-0.5 whitespace-pre-line leading-relaxed">{session.clinicalEvolution}</p>
                              </div>

                              {session.interventions && (
                                <div>
                                  <strong className="text-[#7a6859] block">Intervenções e Recomendações:</strong>
                                  <p className="mt-0.5">{session.interventions}</p>
                                </div>
                              )}

                              {showConfidentialNotes && session.confidentialNotes && (
                                <div className="p-3 rounded-xl bg-[#eedfd2]/60 border border-[#b06d53]/30 text-xs text-[#3e2f28]">
                                  <strong className="text-[#b06d53] block font-mono">🔒 ANOTAÇÃO SIGILOSA DA PSICÓLOGA:</strong>
                                  <p className="mt-1 italic">{session.confidentialNotes}</p>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ) : activeTab === 'dashboard' ? (
                /* VIEW 2: Dashboard Overview */
                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#3e2f28]">
                      Bem-vinda, Dra. Natália Lopes
                    </h3>
                    <p className="text-xs text-[#7a6859]">
                      Acompanhamento da rotina clínica e agendamentos online dos pacientes.
                    </p>
                  </div>

                  {/* Summary Cards */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="p-4 rounded-2xl bg-[#fffdfa] border border-[#e8ded1]">
                      <span className="text-xs font-semibold text-[#7a6859] block">Pacientes Ativos</span>
                      <span className="font-serif text-3xl font-bold text-[#3e2f28] mt-1 block">
                        {patients.length}
                      </span>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#fffdfa] border border-[#e8ded1]">
                      <span className="text-xs font-semibold text-[#7a6859] block">Solicitações Pendentes</span>
                      <span className="font-serif text-3xl font-bold text-[#b06d53] mt-1 block">
                        {appointments.filter((a) => a.status === 'Pendente').length}
                      </span>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#fffdfa] border border-[#e8ded1]">
                      <span className="text-xs font-semibold text-[#7a6859] block">Consultas Confirmadas</span>
                      <span className="font-serif text-3xl font-bold text-[#5e7060] mt-1 block">
                        {appointments.filter((a) => a.status === 'Confirmado').length}
                      </span>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#fffdfa] border border-[#e8ded1]">
                      <span className="text-xs font-semibold text-[#7a6859] block">Receita Registrada</span>
                      <span className="font-serif text-2xl font-bold text-[#3e2f28] mt-1 block">
                        R$ {totalRevenue}
                      </span>
                    </div>
                  </div>

                  {/* Recent Appointments Table */}
                  <div className="bg-[#fffdfa] p-5 rounded-2xl border border-[#e8ded1] space-y-4">
                    <h4 className="font-serif text-lg font-bold text-[#3e2f28]">
                      Próximos Agendamentos Solicitados
                    </h4>

                    {appointments.length === 0 ? (
                      <p className="text-xs text-[#7a6859]">Nenhum agendamento pendente no momento.</p>
                    ) : (
                      <div className="divide-y divide-[#e8ded1]">
                        {appointments.map((apt) => (
                          <div key={apt.id} className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                            <div>
                              <strong className="text-sm text-[#3e2f28] block">{apt.patientName}</strong>
                              <span className="text-[#7a6859]">
                                {apt.serviceTitle} • {apt.date} às {apt.time}
                              </span>
                              <span className="block text-[11px] text-[#7a6859]">
                                WhatsApp: {apt.patientPhone} | Email: {apt.patientEmail}
                              </span>
                            </div>

                            <div className="flex items-center gap-2">
                              <span
                                className={`px-2 py-1 rounded font-bold ${
                                  apt.status === 'Confirmado'
                                    ? 'bg-[#25d366]/15 text-[#25d366]'
                                    : 'bg-[#eedfd2] text-[#b06d53]'
                                }`}
                              >
                                {apt.status}
                              </span>

                              {apt.status === 'Pendente' && (
                                <button
                                  onClick={() => handleUpdateAppointmentStatus(apt.id, 'Confirmado')}
                                  className="px-2.5 py-1 rounded bg-[#3e2f28] text-white text-[11px] font-semibold"
                                >
                                  Confirmar
                                </button>
                              )}

                              {apt.meetLink && (
                                <a
                                  href={apt.meetLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-1.5 rounded bg-[#4285f4]/10 text-[#4285f4] hover:bg-[#4285f4]/20"
                                  title="Abrir Link da Videochamada"
                                >
                                  <ExternalLink className="w-4 h-4" />
                                </a>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ) : activeTab === 'patients' ? (
                /* VIEW 3: Patients List */
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <h3 className="font-serif text-xl font-bold text-[#3e2f28]">
                      Fichas dos Pacientes
                    </h3>

                    {/* Search bar */}
                    <div className="relative max-w-xs w-full">
                      <Search className="w-4 h-4 text-[#7a6859] absolute left-3 top-3" />
                      <input
                        type="text"
                        placeholder="Buscar por nome, CPF ou tag..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 rounded-xl bg-[#fffdfa] border border-[#d9c7b6] text-xs text-[#3e2f28] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredPatients.map((patient) => (
                      <div
                        key={patient.id}
                        onClick={() => setSelectedPatientId(patient.id)}
                        className="p-5 bg-[#fffdfa] rounded-2xl border border-[#e8ded1] hover:border-[#b06d53] cursor-pointer transition-all shadow-sm space-y-3"
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-serif font-bold text-base text-[#3e2f28]">
                              {patient.fullName}
                            </h4>
                            <p className="text-xs text-[#7a6859]">CPF: {patient.cpf}</p>
                          </div>
                          <span className="text-[10px] px-2 py-0.5 rounded bg-[#eedfd2] font-bold text-[#b06d53]">
                            {patient.sessions.length} sessões
                          </span>
                        </div>

                        <p className="text-xs text-[#524338]">
                          {patient.occupation} • {patient.phone}
                        </p>

                        <div className="flex flex-wrap gap-1">
                          {patient.tags.map((t, idx) => (
                            <span key={idx} className="text-[10px] px-1.5 py-0.5 rounded bg-[#f5eee6] text-[#7a6859]">
                              #{t}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                /* VIEW 4: Appointments List */
                <div className="space-y-4">
                  <h3 className="font-serif text-xl font-bold text-[#3e2f28]">
                    Todas as Solicitações de Agendamento
                  </h3>

                  <div className="bg-[#fffdfa] rounded-2xl border border-[#e8ded1] p-4 divide-y divide-[#e8ded1]">
                    {appointments.map((apt) => (
                      <div key={apt.id} className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                        <div>
                          <strong className="text-sm text-[#3e2f28] block">{apt.patientName}</strong>
                          <span className="text-[#7a6859]">
                            {apt.serviceTitle} • {apt.date} às {apt.time} ({apt.modality})
                          </span>
                          <span className="block text-[#7a6859]">
                            WhatsApp: {apt.patientPhone} | E-mail: {apt.patientEmail}
                          </span>
                          {apt.notes && (
                            <p className="mt-1 italic text-[#b06d53]">Observação: "{apt.notes}"</p>
                          )}
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleUpdateAppointmentStatus(apt.id, 'Confirmado')}
                            className="px-3 py-1.5 rounded bg-[#3e2f28] text-white text-xs font-bold"
                          >
                            Confirmar
                          </button>
                          <button
                            onClick={() => handleUpdateAppointmentStatus(apt.id, 'Cancelado')}
                            className="px-3 py-1.5 rounded bg-[#eedfd2] text-[#3e2f28] text-xs font-bold"
                          >
                            Cancelar
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>
        )}

        {/* Modal: New Patient */}
        {showNewPatientModal && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-[#fffdfa] rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-[#e8ded1] space-y-4 max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between border-b border-[#e8ded1] pb-3">
                <h3 className="font-serif font-bold text-lg text-[#3e2f28]">Cadastrar Novo Paciente</h3>
                <button onClick={() => setShowNewPatientModal(false)} className="text-sm font-bold">✕</button>
              </div>

              <form onSubmit={handleCreatePatient} className="space-y-3 text-xs">
                <div>
                  <label className="block font-bold text-[#7a6859] mb-1">Nome Completo *</label>
                  <input
                    type="text"
                    required
                    value={newPatientData.fullName}
                    onChange={(e) => setNewPatientData({ ...newPatientData, fullName: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-[#fbf8f3] border border-[#d9c7b6]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block font-bold text-[#7a6859] mb-1">CPF *</label>
                    <input
                      type="text"
                      required
                      placeholder="000.000.000-00"
                      value={newPatientData.cpf}
                      onChange={(e) => setNewPatientData({ ...newPatientData, cpf: e.target.value })}
                      className="w-full p-2.5 rounded-xl bg-[#fbf8f3] border border-[#d9c7b6]"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-[#7a6859] mb-1">Data de Nasc.</label>
                    <input
                      type="date"
                      value={newPatientData.birthDate}
                      onChange={(e) => setNewPatientData({ ...newPatientData, birthDate: e.target.value })}
                      className="w-full p-2.5 rounded-xl bg-[#fbf8f3] border border-[#d9c7b6]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block font-bold text-[#7a6859] mb-1">WhatsApp *</label>
                    <input
                      type="text"
                      required
                      value={newPatientData.phone}
                      onChange={(e) => setNewPatientData({ ...newPatientData, phone: e.target.value })}
                      className="w-full p-2.5 rounded-xl bg-[#fbf8f3] border border-[#d9c7b6]"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-[#7a6859] mb-1">E-mail *</label>
                    <input
                      type="email"
                      required
                      value={newPatientData.email}
                      onChange={(e) => setNewPatientData({ ...newPatientData, email: e.target.value })}
                      className="w-full p-2.5 rounded-xl bg-[#fbf8f3] border border-[#d9c7b6]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-[#7a6859] mb-1">Profissão</label>
                  <input
                    type="text"
                    value={newPatientData.occupation}
                    onChange={(e) => setNewPatientData({ ...newPatientData, occupation: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-[#fbf8f3] border border-[#d9c7b6]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block font-bold text-[#7a6859] mb-1">Contato de Emergência</label>
                    <input
                      type="text"
                      placeholder="Nome e relação"
                      value={newPatientData.emergencyContactName}
                      onChange={(e) => setNewPatientData({ ...newPatientData, emergencyContactName: e.target.value })}
                      className="w-full p-2.5 rounded-xl bg-[#fbf8f3] border border-[#d9c7b6]"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-[#7a6859] mb-1">Telefone de Emergência</label>
                    <input
                      type="text"
                      value={newPatientData.emergencyContactPhone}
                      onChange={(e) => setNewPatientData({ ...newPatientData, emergencyContactPhone: e.target.value })}
                      className="w-full p-2.5 rounded-xl bg-[#fbf8f3] border border-[#d9c7b6]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-[#7a6859] mb-1">Tags do Paciente (separadas por vírgula)</label>
                  <input
                    type="text"
                    placeholder="Psicanálise, Ansiedade, Luto"
                    value={newPatientData.tags}
                    onChange={(e) => setNewPatientData({ ...newPatientData, tags: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-[#fbf8f3] border border-[#d9c7b6]"
                  />
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowNewPatientModal(false)}
                    className="px-4 py-2 rounded-xl bg-[#eedfd2] font-semibold"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-[#3e2f28] text-white font-bold"
                  >
                    Salvar Paciente
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Modal: New Session Note */}
        {showNewSessionModal && selectedPatient && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-[#fffdfa] rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-[#e8ded1] space-y-4 max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between border-b border-[#e8ded1] pb-3">
                <div>
                  <h3 className="font-serif font-bold text-lg text-[#3e2f28]">Nova Evolução de Sessão</h3>
                  <p className="text-xs text-[#7a6859]">Paciente: {selectedPatient.fullName}</p>
                </div>
                <button onClick={() => setShowNewSessionModal(false)} className="text-sm font-bold">✕</button>
              </div>

              <form onSubmit={handleAddSessionNote} className="space-y-3 text-xs">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block font-bold text-[#7a6859] mb-1">Data da Sessão</label>
                    <input
                      type="date"
                      required
                      value={newSessionData.date}
                      onChange={(e) => setNewSessionData({ ...newSessionData, date: e.target.value })}
                      className="w-full p-2.5 rounded-xl bg-[#fbf8f3] border border-[#d9c7b6]"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-[#7a6859] mb-1">Valor (R$)</label>
                    <input
                      type="number"
                      required
                      value={newSessionData.value}
                      onChange={(e) => setNewSessionData({ ...newSessionData, value: Number(e.target.value) })}
                      className="w-full p-2.5 rounded-xl bg-[#fbf8f3] border border-[#d9c7b6]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-[#7a6859] mb-1">Queixa Principal / Tema Trago na Sessão</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Discussão sobre limites no ambiente de trabalho e insônia"
                    value={newSessionData.complaintSummary}
                    onChange={(e) => setNewSessionData({ ...newSessionData, complaintSummary: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-[#fbf8f3] border border-[#d9c7b6]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#7a6859] mb-1">Evolução Clínica & Observações Psicanalíticas *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Análise livre, articulação do sintoma, defesas identificadas..."
                    value={newSessionData.clinicalEvolution}
                    onChange={(e) => setNewSessionData({ ...newSessionData, clinicalEvolution: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-[#fbf8f3] border border-[#d9c7b6]"
                  />
                </div>

                <div>
                  <label className="block font-bold text-[#b06d53] mb-1">🔒 Anotação Sigilosa / Hipóteses da Psicóloga (Opcional)</label>
                  <textarea
                    rows={2}
                    placeholder="Anotação de uso exclusivo interno da profissional..."
                    value={newSessionData.confidentialNotes}
                    onChange={(e) => setNewSessionData({ ...newSessionData, confidentialNotes: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-[#eedfd2]/40 border border-[#b06d53]/30"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block font-bold text-[#7a6859] mb-1">Status do Pagamento</label>
                    <select
                      value={newSessionData.paymentStatus}
                      onChange={(e) => setNewSessionData({ ...newSessionData, paymentStatus: e.target.value as any })}
                      className="w-full p-2.5 rounded-xl bg-[#fbf8f3] border border-[#d9c7b6]"
                    >
                      <option value="Pago">Pago</option>
                      <option value="Pendente">Pendente</option>
                      <option value="Isento">Isento</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-[#7a6859] mb-1">Forma de Pagamento</label>
                    <select
                      value={newSessionData.paymentMethod}
                      onChange={(e) => setNewSessionData({ ...newSessionData, paymentMethod: e.target.value as any })}
                      className="w-full p-2.5 rounded-xl bg-[#fbf8f3] border border-[#d9c7b6]"
                    >
                      <option value="Pix">Pix</option>
                      <option value="Cartão">Cartão</option>
                      <option value="Transferência">Transferência</option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowNewSessionModal(false)}
                    className="px-4 py-2 rounded-xl bg-[#eedfd2] font-semibold"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-[#3e2f28] text-white font-bold"
                  >
                    Salvar Evolução
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Modal: Receipt View */}
        {activeReceipt && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-[#d9c7b6] space-y-4">
              <div className="text-center space-y-1 border-b pb-4">
                <h3 className="font-serif text-xl font-bold text-[#3e2f28]">RECIBO DE PSICOLOGIA</h3>
                <p className="text-xs text-[#7a6859]">Comprovante de Prestação de Serviço para Reembolso</p>
                <p className="text-[10px] font-mono text-[#b06d53]">{activeReceipt.id}</p>
              </div>

              <div className="space-y-2 text-xs text-[#3e2f28] leading-relaxed">
                <p>Recebi de <strong>{activeReceipt.patientName}</strong> (CPF: {activeReceipt.patientCPF}) a quantia de <strong>R$ {activeReceipt.amount},00</strong> referente a:</p>
                <p className="p-3 bg-[#fbf8f3] rounded-xl border italic">{activeReceipt.description}</p>
                <p><strong>Data de Emissão:</strong> {activeReceipt.date}</p>
              </div>

              <div className="border-t pt-4 text-center space-y-1 text-xs">
                <p className="font-bold text-[#3e2f28]">{activeReceipt.therapistName}</p>
                <p className="text-[#7a6859]">Psicanalista & Psicóloga Clínica</p>
                <p className="text-[#b06d53] font-bold">CRP: {activeReceipt.therapistCRP}</p>
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => window.print()}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#3e2f28] text-white font-bold text-xs"
                >
                  <Printer className="w-4 h-4" />
                  <span>Imprimir / Salvar PDF</span>
                </button>
                <button
                  onClick={() => setActiveReceipt(null)}
                  className="px-4 py-2.5 rounded-xl bg-[#eedfd2] text-xs font-bold"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
