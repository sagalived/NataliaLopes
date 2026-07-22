import { TherapistProfile, Service, BlogPost, Patient, Appointment, FAQItem } from '../types';
import nataliaPhoto from '../assets/images/natalia_lopes_portrait_1784683396512.jpg';

export const THERAPIST_PROFILE: TherapistProfile = {
  name: 'Natália Lopes',
  title: 'Psicanalista | Psicóloga Clínica',
  crp: '11/25965',
  whatsapp: '5585991286201',
  whatsappFormatted: '(85) 99128-6201',
  instagram: '@natalialopespsi',
  email: 'psicnatalialopes@gmail.com',
  photoUrl: nataliaPhoto,
  bio: 'Atuo com foco na escuta psicanalítica e acolhimento clínico singular, construindo um espaço seguro e livre de julgamentos para que você possa ressignificar suas dores, reconhecer seus desejos e desenvolver maior autonomia sobre sua história.',
  approaches: [
    'Psicanálise Clínica',
    'Psicoterapia Individual (Adultos e Adolescentes)',
    'Manejo de Ansiedade, Síndrome de Burnout e Crises de Pânico',
    'Conflitos Emocionais, Luto e Transições de Vida',
    'Saúde Mental da Mulher & Maternidade'
  ],
  onlineServiceInfo: 'Atendimentos online realizados via videochamada segura (Google Meet/Zoom), permitindo flexibilidade, conforto e total confidencialidade em qualquer lugar do Brasil e no exterior.'
};

export const SERVICES_DATA: Service[] = [
  {
    id: 'psicanalise-individual',
    title: 'Sessão de Psicanálise Online',
    duration: '50 minutos',
    description: 'Espaço semanal focado na livre associação de ideias, investigação do inconsciente, compreensão de repetições sintomáticas e fortalecimento do sujeito.',
    modality: 'Online',
    price: 'Sob Consulta',
    recommendedFor: [
      'Autoconhecimento profundo',
      'Ansiedade e angústia persistente',
      'Dificuldades em relacionamentos',
      'Sentimento de vazio ou estagnação'
    ]
  },
  {
    id: 'primeira-consulta',
    title: 'Primeira Consulta de Avaliação',
    duration: '50 minutos',
    description: 'Encontro inicial para acolhimento da queixa, esclarecimento de dúvidas sobre a metodologia de trabalho, escuta inicial das demandas e alinhamento do contrato terapêutico.',
    modality: 'Online',
    price: 'Sob Consulta',
    recommendedFor: [
      'Quem nunca fez terapia antes',
      'Avaliação de demandas urgentes',
      'Compreensão do formato dos atendimentos'
    ]
  },
  {
    id: 'plantao-orientacao',
    title: 'Orientação & Acolhimento em Crise',
    duration: '50 minutos',
    description: 'Atendimento pontual para manejo de momentos de transição aguda, tomadas de decisão complexas, luto recente ou momentos de sobrecarga emocional intensa.',
    modality: 'Online',
    price: 'Sob Consulta',
    recommendedFor: [
      'Momentos de perda ou luto recente',
      'Mudanças repentinas na carreira ou família',
      'Crises pontuais de estresse ou pânico'
    ]
  }
];

export const INITIAL_BLOG_POSTS: BlogPost[] = [
  {
    id: 'compreendendo-a-ansiedade',
    title: 'Compreendendo a Ansiedade: Quando o Corpo Fala o que a Mente Não Consegue Dizer',
    slug: 'compreendendo-a-ansiedade',
    summary: 'A ansiedade não é apenas uma preocupação excessiva; ela se manifesta no corpo através de palpitações, insônia e tensão. Saiba como a psicanálise auxilia no acolhimento dos gatilhos emocionais.',
    category: 'Ansiedade',
    author: 'Dra. Natália Lopes (CRP 11/25965)',
    date: '18 Julho 2026',
    readTime: '4 min de leitura',
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop',
    tags: ['Ansiedade', 'Psicanálise', 'Saúde Mental', 'Autocuidado'],
    content: [
      'Vivemos em uma sociedade marcada pela pressa e pelo excesso de estímulos. Em meio a prazos, expectativas e exigências sociais, a ansiedade surge com frequência como um sinal de alerta emitido pela nossa psique.',
      'Muitas vezes, a ansiedade começa de forma sutil: um aperto no peito, uma inquietação inexplicável antes de dormir, a dificuldade em se concentrar no presente. Com o tempo, quando esses afetos não encontram um canal de elaboração verbal, o corpo passa a somatizar.',
      'Na abordagem psicanalítica, não buscamos apenas "eliminar" o sintoma ansioso como se fosse um defeito a ser calado. Pelo contrário: escutamos a ansiedade como um sintoma que traz uma mensagem sobre aquilo que não pôde ser dito ou elaborado consciente.',
      'Ao criar um espaço de fala livre e sem julgamentos, a pessoa começa a nomear seus medos, reconhecer seus limites e encontrar novas formas de se posicionar diante das pressões da vida. O sintoma perde a força na medida em que a palavra ganha espaço.'
    ]
  },
  {
    id: 'por-que-fazer-psicanalise',
    title: 'Por que iniciar a Psicanálise? O Valor de Dar Voz ao Inconsciente',
    slug: 'por-que-fazer-psicanalise',
    summary: 'Descubra como o processo psicanalítico permite identificar padrões repetitivos e ressignificar histórias do passado para viver com mais liberdade no presente.',
    category: 'Psicanálise',
    author: 'Dra. Natália Lopes (CRP 11/25965)',
    date: '10 Julho 2026',
    readTime: '5 min de leitura',
    imageUrl: 'https://images.unsplash.com/photo-1499209974431-9dac3ada00d7?q=80&w=800&auto=format&fit=crop',
    tags: ['Psicanálise', 'Inconsciente', 'Autoconhecimento'],
    content: [
      'Muitas vezes nos pegamos repetindo os mesmos comportamentos, mesmo sabendo que eles nos trazem sofrimento. Relacionamentos com a mesma dinâmica dolorosa, autocrítica severa, medo constante de decepcionar os outros... Por que é tão difícil mudar?',
      'Sigmund Freud descobriu que grande parte das nossas motivações e escolhas é regida pelo inconsciente — um reservatório de memórias, desejos recalcados e experiências infantis que continuam operando em nossa vida adulta.',
      'A psicanálise oferece um ambiente protegido e ético onde a regra de ouro é a associação livre: falar o que vier à mente, sem filtros ou preocupação com a lógica perfeita. É nesse dizer espontâneo que emergem as chaves de leitura da própria história.',
      'Iniciar a psicanálise não significa encontrar respostas prontas ou fórmulas mágicas, mas sim construir ferramentas internas para suportar a própria singularidade e fazer escolhas mais alinhadas com quem você realmente é.'
    ]
  },
  {
    id: 'saude-mental-da-mulher-e-sobrecarga',
    title: 'Síndrome da Mulher Exausta: A Necessidade de Impor Limites Sem Culpa',
    slug: 'saude-mental-da-mulher-e-sobrecarga',
    summary: 'A jornada dupla ou tripla, a carga mental invisível e a pressão por ser impecável em todos os papéis. Como a psicoterapia apoia mulheres na reconexão com seus próprios desejos.',
    category: 'Saúde da Mulher',
    author: 'Dra. Natália Lopes (CRP 11/25965)',
    date: '02 Julho 2026',
    readTime: '6 min de leitura',
    imageUrl: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=800&auto=format&fit=crop',
    tags: ['Saúde da Mulher', 'Burnout', 'Autoestima', 'Limites'],
    content: [
      'A sociedade contemporânea costuma exigir que as mulheres sejam profissionais impecáveis, mães dedicadas, parceiras presentes e mantenham uma postura impecável diante das adversidades. No entanto, o custo emocional dessa cobrança é alto.',
      'A "carga mental invisível" refere-se ao constante trabalho de planejar, lembrar, organizar e prever as necessidades da família e do ambiente de trabalho. Isso gera um estado prolongado de alerta emocional e exaustão física.',
      'Dizer "não" para as demandas externas muitas vezes ativa um forte sentimento de culpa nas mulheres, como se cuidar de si fosse um ato de egoísmo. Na análise clínica, desconstruímos essa fantasia.',
      'Cuidar de si e impor limites saudáveis é um ato necessário de preservação da saúde física e mental. O espaço terapêutico permite que a mulher reconheça seus próprios limites e resgate seu espaço de desejo autêntico.'
    ]
  },
  {
    id: 'atendimento-psicologico-online-guia',
    title: 'Atendimento Psicológico Online: Segurança, Sigilo e Eficácia Clínica',
    slug: 'atendimento-psicologico-online-guia',
    summary: 'Entenda como funciona a terapia online regulamentada pelo CFP, os requisitos de privacidade e por que essa modalidade oferece a mesma qualidade do consultório presencial.',
    category: 'Autoconhecimento',
    author: 'Dra. Natália Lopes (CRP 11/25965)',
    date: '25 Junho 2026',
    readTime: '4 min de leitura',
    imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
    tags: ['Terapia Online', 'CFP', 'Privacidade', 'Atendimento'],
    content: [
      'Com o avanço das tecnologias e a regulamentação do Conselho Federal de Psicologia (CFP), o atendimento psicológico online consolidou-se como uma alternativa prática, segura e comprovadamente eficaz.',
      'Para quem tem rotinas intensas, viaja com frequência ou mora em localidades com pouca oferta de profissionais especializados, a sessão online elimina barreira geográfica e o tempo gasto no trânsito.',
      'É fundamental assegurar um ambiente privado durante a sessão — um local onde você se sinta à vontade para falar abertamente sem ser interrompido(a). Do lado da profissional, utilizo plataformas criptografadas e fones de ouvido para total sigilo.',
      'A aliança terapêutica — que é o vínculo de confiança entre paciente e psicóloga — constrói-se com a mesma força através da tela, garantindo a profundidade e a ética do processo psicanalítico.'
    ]
  }
];

export const INITIAL_PATIENTS: Patient[] = [
  {
    id: 'pat-101',
    fullName: 'Mariana Alencar Silva',
    cpf: '341.892.012-45',
    birthDate: '1992-05-14',
    phone: '(85) 98844-1234',
    email: 'mariana.alencar@email.com',
    occupation: 'Arquiteta e Urbanista',
    emergencyContactName: 'Carlos Silva (Esposo)',
    emergencyContactPhone: '(85) 98811-9988',
    maritalStatus: 'Casada',
    startDate: '2025-08-10',
    medicalHistory: 'Sem histórico de internações. Queixa de insônia e ansiedade em picos de trabalho.',
    medications: 'Nenhuma medicação contínua.',
    status: 'Ativo',
    tags: ['Ansiedade', 'Burnout', 'Psicanálise'],
    sessions: [
      {
        id: 'sn-01',
        sessionNumber: 1,
        date: '2025-08-10',
        complaintSummary: 'Primeira consulta de avaliação. Relata sobrecarga no escritório de arquitetura e crises de taquicardia à noite.',
        clinicalEvolution: 'Paciente cooperativa, articulada. Demonstra auto-cobrança elevada e dificuldades em delegar tarefas. Alinhado o contrato terapêutico e freqüência semanal.',
        interventions: 'Escuta inicial acolhedora, pontuação sobre os episódios de insônia e associação com a exigência de perfeição.',
        confidentialNotes: 'Aprofundar relação com a figura paterna nas próximas sessões.',
        paymentStatus: 'Pago',
        paymentMethod: 'Pix',
        value: 180
      },
      {
        id: 'sn-02',
        sessionNumber: 2,
        date: '2025-08-17',
        complaintSummary: 'Trabalhou sobre um episódio de divergência com cliente durante a semana.',
        clinicalEvolution: 'Paciente expressou alívio ao falar abertamente sobre o medo de ser julgada como incompetente. Começa a perceber padrões de validação externa.',
        interventions: 'Associação livre conduzida em torno do medo do erro.',
        confidentialNotes: 'Boa resposta às intervenções de sustentação.',
        paymentStatus: 'Pago',
        paymentMethod: 'Pix',
        value: 180
      }
    ]
  },
  {
    id: 'pat-102',
    fullName: 'Lucas Fernandes Santos',
    cpf: '812.449.103-99',
    birthDate: '1988-11-22',
    phone: '(85) 99762-5521',
    email: 'lucas.santos.dev@email.com',
    occupation: 'Engenheiro de Software',
    emergencyContactName: 'Clara Santos (Irmã)',
    emergencyContactPhone: '(85) 99100-3322',
    maritalStatus: 'Solteiro',
    startDate: '2025-10-05',
    medicalHistory: 'Início de acompanhamento por recomendação médica após episódio de pânico.',
    medications: 'Sertralina 50mg (Acompanhamento psiquiátrico paralelo).',
    status: 'Ativo',
    tags: ['Pânico', 'Luto', 'Homem Adulto'],
    sessions: [
      {
        id: 'sn-03',
        sessionNumber: 1,
        date: '2025-10-05',
        complaintSummary: 'Queixa principal: Luto não elaborado do avô e sintomatologia de pânico no trabalho remoto.',
        clinicalEvolution: 'Paciente demonstra rigidez afetiva inicial, com momentos de choro ao mencionar a perda familiar.',
        interventions: 'Validação dos sentimentos de tristeza e acolhimento da dor do luto.',
        confidentialNotes: 'Acompanhar adesão à medicação em conjunto com o psiquiatra assistente.',
        paymentStatus: 'Pago',
        paymentMethod: 'Pix',
        value: 180
      }
    ]
  },
  {
    id: 'pat-103',
    fullName: 'Camila Rocha Nogueira',
    cpf: '512.981.330-12',
    birthDate: '1995-03-30',
    phone: '(85) 98112-0044',
    email: 'camila.rocha@email.com',
    occupation: 'Professora Universitária',
    emergencyContactName: 'Aline Rocha (Mãe)',
    emergencyContactPhone: '(85) 98776-5432',
    maritalStatus: 'Divorciada',
    startDate: '2026-01-15',
    medicalHistory: 'Sem alergias ou comorbidades relatadas.',
    medications: 'Nenhuma.',
    status: 'Ativo',
    tags: ['Relacionamentos', 'Autoconhecimento', 'Mulheres'],
    sessions: [
      {
        id: 'sn-04',
        sessionNumber: 1,
        date: '2026-01-15',
        complaintSummary: 'Busca terapia pós-divórcio e reorganização da rotina de vida.',
        clinicalEvolution: 'Relata busca por autoconhecimento e reconstrução de projetos pessoais.',
        interventions: 'Trabalho focado na ressignificação da perda conjugal e resgate do desejo autônomo.',
        confidentialNotes: 'Boa aliança terapêutica estabelecida.',
        paymentStatus: 'Pago',
        paymentMethod: 'Transferência',
        value: 180
      }
    ]
  }
];

export const INITIAL_APPOINTMENTS: Appointment[] = [
  {
    id: 'apt-201',
    patientName: 'Fernanda Vasconcelos',
    patientPhone: '(85) 99234-8899',
    patientEmail: 'fernanda.vasc@gmail.com',
    serviceId: 'primeira-consulta',
    serviceTitle: 'Primeira Consulta de Avaliação',
    date: '2026-07-22',
    time: '14:00',
    modality: 'Online',
    status: 'Confirmado',
    notes: 'Gostaria de falar sobre ansiedade no trabalho e rotina de sono.',
    createdAt: '2026-07-20T10:15:00Z',
    meetLink: 'https://meet.google.com/psi-nat-lopes'
  },
  {
    id: 'apt-202',
    patientName: 'Mariana Alencar Silva',
    patientPhone: '(85) 98844-1234',
    patientEmail: 'mariana.alencar@email.com',
    serviceId: 'psicanalise-individual',
    serviceTitle: 'Sessão de Psicanálise Online',
    date: '2026-07-22',
    time: '15:30',
    modality: 'Online',
    status: 'Confirmado',
    notes: 'Sessão semanal de acompanhamento.',
    createdAt: '2026-07-15T09:00:00Z',
    meetLink: 'https://meet.google.com/psi-nat-lopes'
  },
  {
    id: 'apt-203',
    patientName: 'Gabriel Mendes',
    patientPhone: '(85) 98711-4433',
    patientEmail: 'gabriel.mendes@email.com',
    serviceId: 'plantao-orientacao',
    serviceTitle: 'Orientação & Acolhimento em Crise',
    date: '2026-07-23',
    time: '10:00',
    modality: 'Online',
    status: 'Pendente',
    notes: 'Acolhimento após mudança profissional recente.',
    createdAt: '2026-07-21T16:30:00Z'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    category: 'Geral',
    question: 'Como funciona o atendimento psicológico online?',
    answer: 'A consulta online é realizada por videochamada através de plataformas criptografadas e seguras (Google Meet ou Zoom). O paciente precisa apenas de uma conexão estável de internet, um ambiente privado e fones de ouvido para garantir total sigilo das informações.'
  },
  {
    category: 'Geral',
    question: 'Qual é o valor da consulta e forma de pagamento?',
    answer: 'Os valores das sessões seguem as diretrizes éticas da profissão e são informados previamente no primeiro contato. O pagamento pode ser feito via Pix ou transferência bancária antes de cada sessão ou em pacotes mensais alinhados previamente.'
  },
  {
    category: 'Plano de Saúde',
    question: 'Vocês emitem recibo para reembolso do Plano de Saúde?',
    answer: 'Sim! Ao final de cada sessão ou mês, é emitido um Recibo de Prestação de Serviços de Psicologia com todos os dados profissionais necessários (Nome Completo, CPF e registro CRP 11/25965). Esse recibo é aceito pela maioria dos planos de saúde para reembolso de consultas e também para declaração de Imposto de Renda.'
  },
  {
    category: 'Psicanálise',
    question: 'Qual a diferença entre Psicologia Clínica e Psicanálise?',
    answer: 'A Psicologia Clínica abrange diversas teorias da mente e do comportamento humano. A Psicanálise, especificamente, investiga os processos inconscientes, os lapsos, os sintomas repetitivos e a história singular do sujeito através da escuta atenta da fala livre, permitindo descobertas profundas sobre quem você é.'
  },
  {
    category: 'Sigilo',
    question: 'Como é garantido o sigilo das informações?',
    answer: 'O sigilo profissional é um dever ético fundamental regulamentado pelo Código de Ética do Psicólogo (CFP). Todas as informações compartilhadas durante as sessões, dados de prontuário e registros são estritamente confidenciais e protegidos por leis de privacidade (LGPD).'
  }
];
