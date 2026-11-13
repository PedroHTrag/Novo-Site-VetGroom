import { ServiceItem, AddonItem, TeamMember, Testimonial, FAQItem } from '../types';

/**
 * ============================================================================
 * VETGROOM - CENTRAL DE CONSTANTES E DADOS DA MARCA
 * ============================================================================
 * Todos os dados pendentes de definição pelo cliente estão claramente marcados
 * com a etiqueta [PLACEHOLDER] para fácil substituição.
 */

export const BRAND_INFO = {
  name: 'VetGroom',
  tagline: 'onde a saúde encontra carinho e estilo',
  headline: 'O cuidado que seu pet merece, com excelência médica e carinho genuíno.',
  subheadline: 'Unimos estética avançada (grooming) e cuidados veterinários integrados em um ambiente acolhedor, calmo e livre de estresse.',
  
  // Contatos e Localização [PLACEHOLDER]
  contact: {
    whatsapp: '[PLACEHOLDER: +55 (11) 99999-8888]',
    whatsappRaw: '5511999998888', // Apenas dígitos para o link wa.me
    phone: '[PLACEHOLDER: (11) 3456-7890]',
    email: '[PLACEHOLDER: contato@vetgroom.com.br]',
    address: '[PLACEHOLDER: Alameda dos Pets, 1200 - Jardins, São Paulo - SP]',
    city: 'São Paulo - SP',
    zipCode: '01400-000',
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1456950215754!2d-46.6644!3d-23.563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzQ2LjgiUyA0NsKwMzknNTEuOCJX!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr',
    instagram: '@vetgroom.estudio',
    instagramUrl: 'https://instagram.com/[PLACEHOLDER_INSTAGRAM]',
  },

  // Horários de Funcionamento
  schedule: {
    weekdays: 'Segunda a Sexta: 08h30 às 19h00',
    saturday: 'Sábados: 08h30 às 18h00',
    sunday: 'Domingos e Feriados: Fechado (Plantão emergencial sob aviso prévio)',
    openingHour: 8.5,
    closingHourWeekday: 19,
    closingHourSaturday: 18,
  },

  // Credenciais e Métricas [EXEMPLO / PLACEHOLDER]
  stats: [
    { label: 'Pets atendidos com carinho', value: 4800, suffix: '+', note: 'em mais de 5 anos' },
    { label: 'Avaliação média dos tutores', value: 4.9, suffix: ' / 5.0', note: 'Mais de 650 reviews verificadas' },
    { label: 'Manejo Fear-Free & Anti-stress', value: 100, suffix: '%', note: 'Protocolos sem sedação ou traumas' },
    { label: 'Especialistas certificados', value: 12, suffix: '', note: 'Veterinários e Master Groomers' },
  ]
};

// 4 Diferenciais da Marca (Conforme BrandBook)
export const BRAND_DIFFERENTIALS = [
  {
    id: 'sem-estresse',
    title: 'Manejo Sem Estresse (Fear-Free)',
    description: 'Protocolos de adaptação sensorial com aromaterapia, música terapêutica e respeito ao tempo individual de cada pet.',
    iconName: 'HeartHandshake',
  },
  {
    id: 'corpo-clinico',
    title: 'Supervisão Veterinária Contínua',
    description: 'Cada banho e tosa conta com triagem clínica prévia de pele, ouvidos, pelagem e sinais vitais por médicos veterinários.',
    iconName: 'Stethoscope',
  },
  {
    id: 'produtos-nobres',
    title: 'Cosméticos Naturais & Hipoalergênicos',
    description: 'Fórmulas botânicas biodegradáveis, livres de sulfatos pesados, parabenos e fragrâncias artificiais agressivas.',
    iconName: 'Sparkles',
  },
  {
    id: 'ambiente-seguro',
    title: 'Ambiente Acústico e Climatizado',
    description: 'Suítes individuais de tosa com isolamento de ruídos, secadores silenciosos e esterilização de ar por luz UV-C.',
    iconName: 'ShieldCheck',
  },
];

// Catálogo Completo de Serviços
export const SERVICES_CATALOG: ServiceItem[] = [
  // Banho & Tosa
  {
    id: 'banho-terapeutico',
    name: 'Banho Terapêutico & Hidratação Botânica',
    category: 'banho-tosa',
    shortDescription: 'Higienização profunda com cosméticos biocompatíveis, hidratação profunda e massagem relaxante.',
    fullDescription: 'Indicado para cães e gatos de todas as raças. Inclui corte de unhas, limpeza auricular cuidadosa, escovação dos dentes (com escova do pet), secagem silenciosa e finalização com bálsamo nutritivo.',
    durationMinutes: 75,
    startingPrice: 120,
    priceNote: 'a partir de R$ [120,00 - PLACEHOLDER]',
    badge: 'Mais Procurado',
    imageUrl: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=900&q=80',
    benefits: [
      'Xampu hipoalergênico com extrato de camomila e aveia coloidal',
      'Secadores com motor silencioso e temperatura controlada',
      'Inspeção prévia dermatológica por médico veterinário',
      'Toalhas individuais 100% esterilizadas e lacradas'
    ]
  },
  {
    id: 'tosa-tesoura-raca',
    name: 'Tosa Artística na Tesoura (Padrão Oficial)',
    category: 'banho-tosa',
    shortDescription: 'Escultura manual personalizada valorizando as linhas morfológicas da raça ou estilo asiático (Asian Fusion).',
    fullDescription: 'Executada por Master Groomers premiados. A tesoura proporciona um acabamento suave, sem marcas mecânicas, respeitando a textura e proteção natural do pelo.',
    durationMinutes: 120,
    startingPrice: 190,
    priceNote: 'a partir de R$ [190,00 - PLACEHOLDER]',
    badge: 'Especialidade da Casa',
    imageUrl: 'https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=900&q=80',
    benefits: [
      'Acabamento 100% tesourado sem marcas de lâmina',
      'Harmonização facial e contorno das patas',
      'Preservação da camada de proteção térmica da pelagem',
      'Ideal para Spitz, Poodle, Maltês, Shih-tzu e Bichon'
    ]
  },
  {
    id: 'tosa-higienica-premium',
    name: 'Tosa Higiênica & Cuidado Sanitário',
    category: 'banho-tosa',
    shortDescription: 'Manutenção criteriosa de áreas sensíveis, almofadinhas plantares, unhas e desbaste preventivo.',
    fullDescription: 'Focada em bem-estar e saúde preventiva, mantendo o pet limpo e evitando o acúmulo de sujidades ou umidade nas regiões propensas a dermatites.',
    durationMinutes: 50,
    startingPrice: 75,
    priceNote: 'a partir de R$ [75,00 - PLACEHOLDER]',
    imageUrl: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=900&q=80',
    benefits: [
      'Alívio e limpeza das almofadas plantares (coxins)',
      'Aparação perianal e genital com lâmina cirúrgica segura',
      'Lixamento delicado de unhas evitando pontas ásperas',
      'Limpeza dos canais auditivos com solução calmante'
    ]
  },

  // Grooming Estético & Spa
  {
    id: 'spa-ozonio-argila',
    name: 'Spa com Ofurô de Ozônio & Argiloterapia',
    category: 'grooming-spa',
    shortDescription: 'Imersão em água ozonizada com microbolhas desintoxicantes, perfeita para alívio muscular e renovação dérmica.',
    fullDescription: 'O ozônio possui ação bactericida, fungicida e cicatrizante comprovada. Combinado com máscara de argila branca purificante, restaura o manto hidrolipídico e relaxa profundamente o animal.',
    durationMinutes: 90,
    startingPrice: 210,
    priceNote: 'a partir de R$ [210,00 - PLACEHOLDER]',
    badge: 'Experiência Signature',
    imageUrl: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=80',
    benefits: [
      'Combate dermatites atópicas e foliculites',
      'Estimula a microcirculação periférica e alívio articular',
      'Desintoxicação profunda com argila branca dermatológica',
      'Aromaterapia com lavanda francesa para alívio de estresse'
    ]
  },
  {
    id: 'cauterizacao-reconstrucao',
    name: 'Cauterização Molecular de Pelagem',
    category: 'grooming-spa',
    shortDescription: 'Tratamento intensivo de reposição de queratina vegetal e aminoácidos essenciais para pelos ressecados.',
    fullDescription: 'Devolve o brilho espelhado, sela as cutículas abertas e previne a formação recorrente de nós doloridos.',
    durationMinutes: 60,
    startingPrice: 150,
    priceNote: 'a partir de R$ [150,00 - PLACEHOLDER]',
    imageUrl: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=900&q=80',
    benefits: [
      'Recuperação de pelagens danificadas por nós ou calor',
      'Brilho e maciez duradoura por até 3 semanas',
      'Efeito antiestático que repele poeira e nós',
      'Toque aveludado sem pesar a raiz'
    ]
  },
  {
    id: 'grooming-felino-exclusivo',
    name: 'Cat Grooming Especializado (Sem Água ou Imersão Leve)',
    category: 'grooming-spa',
    shortDescription: 'Atendimento exclusivo para gatos em sala privativa, com difusor de feromônios e manejo sem contenção forçada.',
    fullDescription: 'Gatos demandam técnica específica, tosa higiênica precisa e remoção de subpelo sem desencadear estresse adrenal. Nossos groomers são certificados pela Cat Friendly Practice.',
    durationMinutes: 70,
    startingPrice: 180,
    priceNote: 'a partir de R$ [180,00 - PLACEHOLDER]',
    badge: 'Sala Exclusiva para Gatos',
    imageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=900&q=80',
    benefits: [
      'Sala silenciosa com ambientação contínua de Feliway',
      'Técnicas de escovação sem tração dolorosa da pele',
      'Zero contato visual ou sonoro com cães',
      'Opção de banho a seco com espuma botânica probiótica'
    ]
  },

  // Cuidados Veterinários
  {
    id: 'consulta-clinica-geral',
    name: 'Consulta Clínica Geral & Exame Físico Completo',
    category: 'veterinaria',
    shortDescription: 'Avaliação detalhada de saúde, ausculta cardiopulmonar, palpação abdominal e aconselhamento nutricional.',
    fullDescription: 'Abordagem preventiva e acolhedora com tempo estendido (45 a 60 minutos) para esclarecer todas as dúvidas dos tutores com tranquilidade.',
    durationMinutes: 60,
    startingPrice: 220,
    priceNote: 'a partir de R$ [220,00 - PLACEHOLDER]',
    badge: 'Saúde Integral',
    imageUrl: 'https://images.unsplash.com/photo-1628009368231-7bb3cfc38291?auto=format&fit=crop&w=900&q=80',
    benefits: [
      'Consulta estendida sem pressa ou fila de espera',
      'Emissão de prontuário digital completo enviado ao tutor',
      'Aferição de pressão arterial e triagem oftalmológica básica',
      'Suporte via canal direto de WhatsApp pós-consulta'
    ]
  },
  {
    id: 'protocolo-vacinal-importado',
    name: 'Imunização & Protocolo Vacinal Ético',
    category: 'veterinaria',
    shortDescription: 'Aplicação de vacinas éticas importadas (V8/V10, Antirrábica, Gripe, Giárdia e FeLV) com armazenamento rigoroso.',
    fullDescription: 'Vacinas conservadas em câmara fria monitorada 24h com bateria de contingência. Cada dose acompanha exame clínico prévio para atestar aptidão imunológica.',
    durationMinutes: 30,
    startingPrice: 110,
    priceNote: 'a partir de R$ [110,00 - PLACEHOLDER]',
    imageUrl: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=900&q=80',
    benefits: [
      'Exame clínico pré-vacinal incluso sem custo adicional',
      'Lote e validade registrados na caderneta física e digital',
      'Lembrete automático para reforços anuais',
      'Uso de agulhas ultra-finas e distração positiva'
    ]
  },
  {
    id: 'checkup-dermatologico-preventivo',
    name: 'Check-up Dermatológico & Tricograma',
    category: 'veterinaria',
    shortDescription: 'Investigação aprofundada de alergias, coceiras, descamações, fungos e parasitas na pele e nos pelos.',
    fullDescription: 'Realizado com dermatoscopia e citologia imediata para diagnósticos precoces de dermatite atópica ou intolerâncias alimentares.',
    durationMinutes: 45,
    startingPrice: 250,
    priceNote: 'a partir de R$ [250,00 - PLACEHOLDER]',
    imageUrl: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=900&q=80',
    benefits: [
      'Exame de citologia de pele com resultado rápido',
      'Análise microscópica da haste do pelo (tricograma)',
      'Protocolos terapêuticos integrados ao banho dermatológico',
      'Orientações dietéticas preventivas'
    ]
  }
];

// Opcionais / Adicionais para Agendamento
export const BOOKING_ADDONS: AddonItem[] = [
  {
    id: 'hidratacao-ozonio',
    name: 'Máscara de Hidratação Ozonizada',
    price: 45,
    durationMinutes: 15,
    description: 'Ação desintoxicante e restauração do brilho natural da pelagem.'
  },
  {
    id: 'corte-unhas-lixamento',
    name: 'Lixamento Diamantado de Unhas',
    price: 30,
    durationMinutes: 10,
    description: 'Arredonda as pontas para evitar arranhões em pisos e tutores.'
  },
  {
    id: 'escovacao-dental',
    name: 'Higienização Bucal Enzimática',
    price: 35,
    durationMinutes: 10,
    description: 'Gel enzimático que combate o tártaro inicial e renova o hálito.'
  },
  {
    id: 'desembolamento-suave',
    name: 'Desembolo Cuidadoso com Fluído Nutritivo',
    price: 60,
    durationMinutes: 30,
    description: 'Técnica sem dor para desfazer nós sem raspar a pelagem.'
  }
];

// Como Funciona o Atendimento (Step-by-Step da Home)
export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Agendamento Flexível',
    description: 'Escolha o serviço, informe as necessidades do seu pet e reserve seu horário com facilidade online ou pelo WhatsApp.',
  },
  {
    step: '02',
    title: 'Acolhimento & Triagem',
    description: 'Ao chegar, seu pet passa por uma avaliação carinhosa de pele, orelhas e humor antes de qualquer procedimento.',
  },
  {
    step: '03',
    title: 'Cuidado Individualizado',
    description: 'Atendimento calmo em suíte exclusiva, com produtos botânicos selecionados e pausas para relaxamento se necessário.',
  },
  {
    step: '04',
    title: 'Retirada & Relatório',
    description: 'Você recebe seu pet renovado, feliz e um boletim completo com observações de saúde veterinária da sessão.',
  },
];

// Equipe [EXEMPLO / PLACEHOLDER]
export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'dra-helena',
    name: '[Dra. Helena Martins - PLACEHOLDER]',
    role: 'Médica Veterinária Responsável',
    specialty: 'Dermatologia & Medicina Integrativa',
    crmv: 'CRMV-SP 38.412 [PLACEHOLDER]',
    bio: 'Mais de 11 anos de experiência dedicada à dermatologia clínica de cães e gatos, com foco em manejo preventivo e bem-estar integral.',
    photoUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
    isExample: true,
  },
  {
    id: 'ricardo-silva',
    name: '[Ricardo Silva - PLACEHOLDER]',
    role: 'Master Groomer & Especialista em Tesoura',
    specialty: 'Asian Fusion & Tosas Oficiais de Raça',
    bio: 'Certificado internacionalmente em escultura canina, dedica-se ao respeito à anatomia e pelagem de cada animal há mais de 9 anos.',
    photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    isExample: true,
  },
  {
    id: 'dra-camila',
    name: '[Dra. Camila Nogueira - PLACEHOLDER]',
    role: 'Veterinária Clínica & Cat Friendly Practice',
    specialty: 'Clínica de Felinos & Comportamento',
    crmv: 'CRMV-SP 44.901 [PLACEHOLDER]',
    bio: 'Especialista em comportamento e atendimento livre de estresse (Fear-Free) para felinos e filhotes com sensibilidade sensorial.',
    photoUrl: 'https://images.unsplash.com/photo-1594824813589-73f15c1e1c75?auto=format&fit=crop&w=800&q=80',
    isExample: true,
  },
  {
    id: 'lucas-mendes',
    name: '[Lucas Mendes - PLACEHOLDER]',
    role: 'Spa & Aromaterapeuta Animal',
    specialty: 'Hidroterapia, Ozonioterapia & Massagem Relaxante',
    bio: 'Pioneiro em protocolos de banhos terapêuticos e banheiras de ozônio para alívio muscular de cães idosos e atópicos.',
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    isExample: true,
  },
];

// Depoimentos de Tutores [EXEMPLO]
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'dep-1',
    tutorName: '[Mariana Vasconcelos - TUTORA]',
    petName: 'Bento',
    petBreed: 'Golden Retriever',
    comment: 'O Bento sempre teve pavor de secador em outros pet shops. Na VetGroom foi a primeira vez que ele voltou calmo, cheiroso e abanando o rabo. O relatório veterinário entregue ao final me deixou super segura.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    isExample: true,
  },
  {
    id: 'dep-2',
    tutorName: '[Carlos Eduardo - TUTOR]',
    petName: 'Luna',
    petBreed: 'Spitz Alemão',
    comment: 'A tosa na tesoura da Luna ficou impecável, parecendo capa de revista. Mas o que mais me conquistou foi a Dra. Helena ter identificado uma otite bem no início durante a triagem do banho.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    isExample: true,
  },
  {
    id: 'dep-3',
    tutorName: '[Patrícia Alencar - TUTORA]',
    petName: 'Oliver',
    petBreed: 'Gato Persa',
    comment: 'A sala exclusiva para gatos faz toda a diferença. O Oliver não ouviu um único latido e foi atendido com feromônios calmantes. Não troco a VetGroom por nenhum outro lugar!',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    isExample: true,
  },
];

// Perguntas Frequentes (FAQ)
export const FAQS: FAQItem[] = [
  {
    question: 'Como funciona o atendimento sem estresse (Fear-Free)?',
    answer: 'Nossos profissionais são treinados em linguagem corporal canina e felina. Não utilizamos contenções mecânicas forçadas nem sedativos químicos. Respeitamos pausas quando o pet se mostra agitado, utilizamos aromaterapia relaxante e reforço positivo com petiscos naturais.'
  },
  {
    question: 'Quais documentos ou vacinas são necessários para o atendimento?',
    answer: 'Para a segurança coletiva de todos os pets em nosso estúdio, exigimos a carteirinha de vacinação em dia com as doses de V8/V10 (para cães), Quádrupla/Quíntupla (para gatos) e Raiva, além de controle antipulgas e carrapatos recente.'
  },
  {
    question: 'Vocês atendem gatos em ambientes separados de cães?',
    answer: 'Sim! Possuímos uma suíte felina totalmente isolada acústica e visualmente da área dos cães, equipada com difusor ambiental de feromônio Feliway, iluminação suave e profissionais com certificação Cat Friendly.'
  },
  {
    question: 'O que devo levar no dia do atendimento?',
    answer: 'Recomendamos trazer a carteirinha de vacinação (caso seja a primeira visita), coleira/guia segura (ou caixa de transporte para gatos), a escova de dentes do seu pet caso queira escovação dental, e qualquer medicamento tópico prescrito caso ele utilize fórmula específica.'
  },
  {
    question: 'Qual é a política de cancelamento ou reagendamento?',
    answer: 'Como nossos horários são dedicados e com vagas limitadas para garantir o atendimento calmo, solicitamos aviso prévio de pelo menos 24 horas para reagendamentos ou cancelamentos sem taxa.'
  },
  {
    question: 'O que está incluso no relatório veterinário entregue pós-banho?',
    answer: 'Em cada atendimento nosso corpo clínico avalia conduto auditivo, presença de ectoparasitas, estado das mucosas, saúde da pele e dentes. Ao final, você recebe um checklist digital com notas e orientações preventivas.'
  }
];

// Informações Importantes para Tutores (Antes da Visita)
export const VISIT_GUIDELINES = [
  {
    title: 'Vacinação em Dia',
    description: 'Carteirinha com vacinas éticas atualizadas para proteção mútua de todos os hóspedes.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Horário de Chegada',
    description: 'Pedimos pontualidade de 10 minutos de antecedência para a triagem inicial sem pressa.',
    icon: 'Clock'
  },
  {
    title: 'Alimentação Prévia',
    description: 'Evite refeições pesadas até 1h30 antes do banho para prevenir desconfortos gástricos.',
    icon: 'Coffee'
  },
  {
    title: 'Transporte Seguro',
    description: 'Cães sempre de coleira e guia; gatos obrigatoriamente em caixa de transporte ventilada.',
    icon: 'Car'
  }
];

// Estrutura e Espaço da VetGroom (Galeria do Espaço / Sobre)
export const SPACE_GALLERY = [
  {
    title: 'Suíte de Grooming Acústica',
    subtitle: 'Cabines individuais com isolamento sonoro e banheiras ergonômicas.',
    imageUrl: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Ofurô de Ozonioterapia',
    subtitle: 'Banheira em cedro japonês com hidromassagem terapêutica e microbolhas.',
    imageUrl: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Consultório Veterinário Integrado',
    subtitle: 'Ambiente clínico humanizado com piso antiderrapante e equipamentos modernos.',
    imageUrl: 'https://images.unsplash.com/photo-1628009368231-7bb3cfc38291?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Lounge dos Tutores',
    subtitle: 'Cafeteria artesanal, vista panorâmica das baias de tosa e Wi-Fi de alta velocidade.',
    imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
  },
];
