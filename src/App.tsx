import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { EHRPortal } from './components/EHRPortal';
import { BlogSection } from './components/BlogSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

import { INITIAL_PATIENTS, INITIAL_APPOINTMENTS } from './data/initialData';
import { Patient, Appointment } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('inicio');
  const [isEHROpen, setIsEHROpen] = useState<boolean>(false);

  // Persistent Local State for Patients and Appointments
  const [patients, setPatients] = useState<Patient[]>(() => {
    const saved = localStorage.getItem('natalia_patients_v1');
    return saved ? JSON.parse(saved) : INITIAL_PATIENTS;
  });

  const [appointments, setAppointments] = useState<Appointment[]>(() => {
    const saved = localStorage.getItem('natalia_appointments_v1');
    return saved ? JSON.parse(saved) : INITIAL_APPOINTMENTS;
  });

  useEffect(() => {
    localStorage.setItem('natalia_patients_v1', JSON.stringify(patients));
  }, [patients]);

  useEffect(() => {
    localStorage.setItem('natalia_appointments_v1', JSON.stringify(appointments));
  }, [appointments]);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#fbf8f3] text-[#3e2f28] font-sans antialiased selection:bg-[#eedfd2] selection:text-[#b06d53]">
      
      {/* Navbar */}
      <Navbar
        onNavigate={handleNavigate}
        activeSection={activeSection}
        onOpenEHR={() => setIsEHROpen(true)}
      />

      {/* Main Sections */}
      <main>
        {/* Hero Section */}
        <Hero
          onNavigate={handleNavigate}
        />

        {/* About & Approach Section */}
        <AboutSection />

        {/* Integrated Mental Health Blog Section */}
        <BlogSection />

        {/* Contact & FAQ Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenEHR={() => setIsEHROpen(true)}
      />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* EHR Portal Modal (Prontuário Eletrônico Seguro) */}
      <EHRPortal
        isOpen={isEHROpen}
        onClose={() => setIsEHROpen(false)}
        patients={patients}
        onUpdatePatients={setPatients}
        appointments={appointments}
        onUpdateAppointments={setAppointments}
      />

    </div>
  );
}
