import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Calendar as CalendarIcon,
  Clock,
  Sparkles,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  ShieldAlert,
  ArrowRight,
  Send,
  RotateCcw,
  Heart,
  Info
} from 'lucide-react';
import { Button } from '../components/common/Button';
import { SectionTitle } from '../components/common/SectionTitle';
import { Reveal } from '../components/common/Reveal';
import {
  SERVICES_CATALOG,
  BOOKING_ADDONS,
  FAQS,
  VISIT_GUIDELINES,
  BRAND_INFO
} from '../data/constants';
import { BookingFormData, PetSpecies, PetSize } from '../types';
import {
  calculateBookingTotal,
  calculateBookingDuration,
  formatCurrency,
  generateWhatsAppBookingUrl,
  validateBookingStep
} from '../utils/booking';

export const ServicesPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState<'todos' | 'banho-tosa' | 'grooming-spa' | 'veterinaria'>('todos');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Formulário Stepper
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const [formData, setFormData] = useState<BookingFormData>({
    serviceId: SERVICES_CATALOG[0].id,
    addons: [],
    petName: '',
    species: 'dog',
    breed: '',
    size: 'pequeno',
    petAge: '',
    healthNotes: '',
    selectedDate: '',
    selectedTime: '',
    tutorName: '',
    tutorPhone: '',
    tutorEmail: '',
    specialInstructions: '',
  });

  const formSectionRef = useRef<HTMLDivElement>(null);

  // Lê searchParams para pré-seleção ou scroll direto
  useEffect(() => {
    const serviceParam = searchParams.get('serviceId');
    const catParam = searchParams.get('cat');
    const shouldBook = searchParams.get('agendar');

    if (catParam && ['banho-tosa', 'grooming-spa', 'veterinaria'].includes(catParam)) {
      setActiveCategory(catParam as any);
    }

    if (serviceParam) {
      const exists = SERVICES_CATALOG.find((s) => s.id === serviceParam);
      if (exists) {
        setFormData((prev) => ({ ...prev, serviceId: exists.id }));
      }
    }

    if (shouldBook && formSectionRef.current) {
      setTimeout(() => {
        formSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  }, [searchParams]);

  // Filtra serviços
  const filteredServices = SERVICES_CATALOG.filter((service) => {
    if (activeCategory === 'todos') return true;
    return service.category === activeCategory;
  });

  const selectedService = SERVICES_CATALOG.find((s) => s.id === formData.serviceId) || SERVICES_CATALOG[0];

  const handleSelectServiceAndScroll = (serviceId: string) => {
    setFormData((prev) => ({ ...prev, serviceId }));
    formSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleToggleAddon = (addonId: string) => {
    setFormData((prev) => {
      const exists = prev.addons.includes(addonId);
      const addons = exists ? prev.addons.filter((id) => id !== addonId) : [...prev.addons, addonId];
      return { ...prev, addons };
    });
  };

  const handleNextStep = () => {
    const { isValid, errors } = validateBookingStep(currentStep, formData);
    if (!isValid) {
      setFormErrors(errors);
      return;
    }
    setFormErrors({});
    if (currentStep < 5) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setFormErrors({});
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleConfirmBooking = () => {
    setIsSubmitted(true);
  };

  // Horários disponíveis simulados
  const availableTimeSlots = [
    '09:00', '10:00', '11:15', '14:00', '15:30', '16:45', '18:00'
  ];

  // Gera datas para os próximos 10 dias úteis
  const availableDates = Array.from({ length: 8 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i + 1);
    if (date.getDay() === 0) {
      date.setDate(date.getDate() + 1); // Pula domingo
    }
    return date.toISOString().split('T')[0];
  });

  const totalCalculated = calculateBookingTotal(
    selectedService.startingPrice,
    formData.addons,
    BOOKING_ADDONS
  );

  const totalDuration = calculateBookingDuration(
    selectedService.durationMinutes,
    formData.addons,
    BOOKING_ADDONS
  );

  const { url: whatsappUrl } = generateWhatsAppBookingUrl(formData, selectedService, BOOKING_ADDONS);

  return (
    <div className="py-12 sm:py-20 bg-[#FAF6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* =========================================================================
            1. CABEÇALHO DA PÁGINA
            ========================================================================= */}
        <section className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-[#9F5E48]/15 text-[#9F5E48] uppercase tracking-wider">
            Menu de Cuidados & Estética
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#442F2D] tracking-tight">
            Serviços & Agendamentos
          </h1>
          <p className="text-base sm:text-lg text-[#442F2D]/80 leading-relaxed font-normal">
            Escolha o tratamento ideal para o bem-estar do seu pet ou monte uma experiência personalizada
            de spa com supervisão veterinária contínua.
          </p>
        </section>

        {/* =========================================================================
            2. CATÁLOGO COM FILTROS / ABAS
            ========================================================================= */}
        <section className="space-y-12">
          {/* Abas de Categoria */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {[
              { id: 'todos', label: 'Todos os Serviços' },
              { id: 'banho-tosa', label: 'Banho & Tosa' },
              { id: 'grooming-spa', label: 'Grooming & Spa' },
              { id: 'veterinaria', label: 'Cuidados Veterinários' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === tab.id
                    ? 'bg-[#9F5E48] text-[#FFFFFF] shadow-md'
                    : 'bg-[#FFFFFF] text-[#442F2D] hover:bg-[#F3DABE]/50 border border-[#C8C1B5]/40'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Grid de Cards de Serviço */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <Reveal key={service.id} delay={index * 0.1}>
                <div className="h-full rounded-3xl bg-[#FFFFFF] border border-[#C8C1B5]/30 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                  <div>
                    {/* Imagem do Serviço */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#F5EFEB]">
                      <img
                        src={service.imageUrl}
                        alt={service.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        loading="lazy"
                      />
                      {service.badge && (
                        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#FAF6F0]/95 backdrop-blur-xs text-xs font-semibold text-[#9F5E48]">
                          {service.badge}
                        </div>
                      )}
                      <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-[#442F2D]/80 backdrop-blur-xs text-xs font-medium text-[#F3DABE] flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{service.durationMinutes} min</span>
                      </div>
                    </div>

                    {/* Conteúdo */}
                    <div className="p-6 sm:p-7 space-y-4">
                      <h3 className="font-display text-xl font-bold text-[#442F2D] leading-snug">
                        {service.name}
                      </h3>
                      <p className="text-sm text-[#442F2D]/75 leading-relaxed font-normal">
                        {service.shortDescription}
                      </p>

                      <ul className="space-y-2 pt-2 border-t border-[#F5EFEB]">
                        {service.benefits.slice(0, 3).map((b, i) => (
                          <li key={i} className="flex items-start space-x-2 text-xs text-[#442F2D]/85">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#9F5E48] shrink-0 mt-0.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Preço e Botão */}
                  <div className="p-6 sm:p-7 pt-0 border-t border-[#F5EFEB] mt-4 flex items-center justify-between gap-3">
                    <div>
                      <span className="text-xs text-[#442F2D]/60 block">A partir de</span>
                      <span className="font-display text-lg font-bold text-[#9F5E48]">
                        {service.priceNote}
                      </span>
                    </div>
                    <Button
                      variant={formData.serviceId === service.id ? 'primary' : 'outline'}
                      size="sm"
                      onClick={() => handleSelectServiceAndScroll(service.id)}
                    >
                      {formData.serviceId === service.id ? 'Selecionado' : 'Agendar'}
                    </Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* =========================================================================
            3. FORMULÁRIO DE AGENDAMENTO EM ETAPAS (STEPPER)
            ========================================================================= */}
        <section
          ref={formSectionRef}
          id="agendamento"
          className="scroll-mt-24 rounded-[40px] bg-[#FFFFFF] border border-[#C8C1B5]/40 shadow-xl overflow-hidden p-6 sm:p-10 lg:p-12 relative"
        >
          <div className="max-w-4xl mx-auto space-y-8">
            <SectionTitle
              badge="Reserva Online Direta"
              title="Agendamento Inteligente"
              subtitle="Personalize a experiência do seu pet em poucos passos e receba a confirmação detalhada."
              align="center"
            />

            {/* Stepper Progress Bar */}
            <div className="relative pt-4">
              <div className="flex items-center justify-between relative z-10">
                {[
                  { step: 1, label: 'Serviço' },
                  { step: 2, label: 'Dados do Pet' },
                  { step: 3, label: 'Data & Hora' },
                  { step: 4, label: 'Tutor' },
                  { step: 5, label: 'Confirmação' },
                ].map((s) => (
                  <div key={s.step} className="flex flex-col items-center">
                    <button
                      type="button"
                      onClick={() => {
                        if (s.step < currentStep) setCurrentStep(s.step);
                      }}
                      className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center font-display font-bold text-sm sm:text-base transition-all ${
                        currentStep === s.step
                          ? 'bg-[#9F5E48] text-[#FFFFFF] ring-4 ring-[#9F5E48]/20'
                          : currentStep > s.step
                          ? 'bg-[#442F2D] text-[#FFFFFF]'
                          : 'bg-[#F5EFEB] text-[#442F2D]/50 border border-[#C8C1B5]/30'
                      }`}
                    >
                      {currentStep > s.step ? '✓' : s.step}
                    </button>
                    <span className="text-[11px] sm:text-xs font-medium text-[#442F2D]/80 mt-2 text-center hidden sm:block">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Linha de progresso no fundo */}
              <div className="absolute top-8 sm:top-9 left-4 right-4 h-1 bg-[#F5EFEB] -z-0">
                <div
                  className="h-full bg-[#9F5E48] transition-all duration-300"
                  style={{ width: `${((currentStep - 1) / 4) * 100}%` }}
                />
              </div>
            </div>

            {/* Mensagem de Erros globais do Step */}
            {Object.keys(formErrors).length > 0 && (
              <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-sm flex items-start gap-2 animate-fade-in">
                <ShieldAlert className="w-5 h-5 shrink-0 mt-0.5 text-rose-600" />
                <div>
                  <p className="font-semibold">Atenção aos seguintes campos:</p>
                  <ul className="list-disc list-inside mt-1 space-y-0.5 text-xs sm:text-sm">
                    {Object.values(formErrors).map((err, i) => (
                      <li key={i}>{err}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* CONTEÚDO DAS ETAPAS */}
            {!isSubmitted ? (
              <div className="pt-6">
                {/* ETAPA 1: SERVIÇO & ADICIONAIS */}
                {currentStep === 1 && (
                  <div className="space-y-8 animate-fade-in">
                    <div>
                      <label className="block text-sm font-bold text-[#442F2D] mb-3">
                        1. Selecione o serviço principal desejado:
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {SERVICES_CATALOG.map((serv) => (
                          <div
                            key={serv.id}
                            onClick={() => {
                              setFormData((prev) => ({ ...prev, serviceId: serv.id }));
                              setFormErrors({});
                            }}
                            className={`cursor-pointer p-4 rounded-2xl border transition-all ${
                              formData.serviceId === serv.id
                                ? 'bg-[#F3DABE]/30 border-[#9F5E48] ring-2 ring-[#9F5E48]/20'
                                : 'bg-[#FAF6F0]/60 border-[#C8C1B5]/40 hover:bg-[#FAF6F0]'
                            }`}
                          >
                            <p className="font-bold text-sm text-[#442F2D]">{serv.name}</p>
                            <p className="text-xs text-[#442F2D]/60 mt-1">{serv.durationMinutes} min</p>
                            <p className="text-xs font-bold text-[#9F5E48] mt-2">{serv.priceNote}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Adicionais / Spa Experience */}
                    <div className="pt-6 border-t border-[#F5EFEB]">
                      <label className="block text-sm font-bold text-[#442F2D] mb-1">
                        2. Opcionais de Spa & Cuidado Personalizado:
                      </label>
                      <p className="text-xs text-[#442F2D]/70 mb-4">
                        Adicione pequenos mimos para relaxar ainda mais seu pet durante a sessão.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {BOOKING_ADDONS.map((addon) => {
                          const isSelected = formData.addons.includes(addon.id);
                          return (
                            <div
                              key={addon.id}
                              onClick={() => handleToggleAddon(addon.id)}
                              className={`cursor-pointer p-4 rounded-2xl border transition-all flex items-start justify-between gap-3 ${
                                isSelected
                                  ? 'bg-[#9F5E48]/10 border-[#9F5E48]'
                                  : 'bg-[#FFFFFF] border-[#C8C1B5]/30 hover:border-[#9F5E48]/40'
                              }`}
                            >
                              <div className="space-y-1">
                                <p className="text-sm font-semibold text-[#442F2D]">{addon.name}</p>
                                <p className="text-xs text-[#442F2D]/60">{addon.description}</p>
                                <p className="text-xs font-bold text-[#9F5E48]">+{formatCurrency(addon.price)} ({addon.durationMinutes} min)</p>
                              </div>
                              <input
                                type="checkbox"
                                checked={isSelected}
                                onChange={() => {}}
                                className="w-5 h-5 accent-[#9F5E48] rounded-md mt-1 cursor-pointer pointer-events-none"
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {/* ETAPA 2: DADOS DO PET */}
                {currentStep === 2 && (
                  <div className="space-y-6 animate-fade-in">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Nome do Pet */}
                      <div>
                        <label className="block text-sm font-semibold text-[#442F2D] mb-2">
                          Nome do Pet *
                        </label>
                        <input
                          type="text"
                          value={formData.petName}
                          onChange={(e) => setFormData({ ...formData, petName: e.target.value })}
                          placeholder="Ex: Bento, Pipoca, Luna"
                          className="w-full px-4 py-3 rounded-2xl bg-[#FAF6F0] border border-[#C8C1B5]/50 focus:outline-none focus:ring-2 focus:ring-[#9F5E48] text-sm text-[#442F2D]"
                        />
                      </div>

                      {/* Espécie */}
                      <div>
                        <label className="block text-sm font-semibold text-[#442F2D] mb-2">
                          Espécie *
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          <button
                            type="button"
                            onClick={() => setFormData({ ...formData, species: 'dog' })}
                            className={`py-3 px-4 rounded-2xl text-sm font-semibold border text-center transition-all ${
                              formData.species === 'dog'
                                ? 'bg-[#9F5E48] text-[#FFFFFF] border-[#9F5E48]'
                                : 'bg-[#FAF6F0] text-[#442F2D] border-[#C8C1B5]/50'
                            }`}
                          >
                            🐶 Cão
                          </button>
                          <button
                            type="button"
                            onClick={() => setFormData({ ...formData, species: 'cat' })}
                            className={`py-3 px-4 rounded-2xl text-sm font-semibold border text-center transition-all ${
                              formData.species === 'cat'
                                ? 'bg-[#9F5E48] text-[#FFFFFF] border-[#9F5E48]'
                                : 'bg-[#FAF6F0] text-[#442F2D] border-[#C8C1B5]/50'
                            }`}
                          >
                            🐱 Gato (Sala Exclusiva)
                          </button>
                        </div>
                      </div>

                      {/* Raça */}
                      <div>
                        <label className="block text-sm font-semibold text-[#442F2D] mb-2">
                          Raça *
                        </label>
                        <input
                          type="text"
                          value={formData.breed}
                          onChange={(e) => setFormData({ ...formData, breed: e.target.value })}
                          placeholder="Ex: Golden Retriever, Maltês, SRD..."
                          className="w-full px-4 py-3 rounded-2xl bg-[#FAF6F0] border border-[#C8C1B5]/50 focus:outline-none focus:ring-2 focus:ring-[#9F5E48] text-sm text-[#442F2D]"
                        />
                      </div>

                      {/* Porte */}
                      <div>
                        <label className="block text-sm font-semibold text-[#442F2D] mb-2">
                          Porte do Animal *
                        </label>
                        <select
                          value={formData.size}
                          onChange={(e) => setFormData({ ...formData, size: e.target.value as PetSize })}
                          className="w-full px-4 py-3 rounded-2xl bg-[#FAF6F0] border border-[#C8C1B5]/50 focus:outline-none focus:ring-2 focus:ring-[#9F5E48] text-sm text-[#442F2D]"
                        >
                          <option value="pequeno">Pequeno (até 10kg)</option>
                          <option value="medio">Médio (10kg a 25kg)</option>
                          <option value="grande">Grande (25kg a 45kg)</option>
                          <option value="gigante">Gigante (mais de 45kg)</option>
                        </select>
                      </div>

                      {/* Idade */}
                      <div>
                        <label className="block text-sm font-semibold text-[#442F2D] mb-2">
                          Idade aproximada
                        </label>
                        <input
                          type="text"
                          value={formData.petAge}
                          onChange={(e) => setFormData({ ...formData, petAge: e.target.value })}
                          placeholder="Ex: 3 anos, 8 meses, idoso..."
                          className="w-full px-4 py-3 rounded-2xl bg-[#FAF6F0] border border-[#C8C1B5]/50 focus:outline-none focus:ring-2 focus:ring-[#9F5E48] text-sm text-[#442F2D]"
                        />
                      </div>
                    </div>

                    {/* Observações de saúde e comportamento */}
                    <div>
                      <label className="block text-sm font-semibold text-[#442F2D] mb-2">
                        Observações de saúde, pele ou comportamento
                      </label>
                      <textarea
                        rows={3}
                        value={formData.healthNotes}
                        onChange={(e) => setFormData({ ...formData, healthNotes: e.target.value })}
                        placeholder="Ex: Tem medo de secador forte, pele sensível na barriga, operou a pata esquerda recentemente..."
                        className="w-full px-4 py-3 rounded-2xl bg-[#FAF6F0] border border-[#C8C1B5]/50 focus:outline-none focus:ring-2 focus:ring-[#9F5E48] text-sm text-[#442F2D]"
                      />
                    </div>
                  </div>
                )}

                {/* ETAPA 3: DATA E HORÁRIO */}
                {currentStep === 3 && (
                  <div className="space-y-6 animate-fade-in">
                    <div>
                      <label className="block text-sm font-semibold text-[#442F2D] mb-3">
                        Escolha o dia de sua preferência:
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {availableDates.map((dStr) => {
                          const dateObj = new Date(dStr + 'T12:00:00');
                          const weekdayName = dateObj.toLocaleDateString('pt-BR', { weekday: 'short' });
                          const dayMonth = dateObj.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' });
                          const isSelected = formData.selectedDate === dStr;

                          return (
                            <button
                              key={dStr}
                              type="button"
                              onClick={() => {
                                setFormData({ ...formData, selectedDate: dStr });
                                setFormErrors({});
                              }}
                              className={`p-3.5 rounded-2xl border text-center transition-all ${
                                isSelected
                                  ? 'bg-[#9F5E48] text-[#FFFFFF] border-[#9F5E48] shadow-md'
                                  : 'bg-[#FAF6F0] text-[#442F2D] border-[#C8C1B5]/40 hover:bg-[#F3DABE]/40'
                              }`}
                            >
                              <span className="block text-xs uppercase font-medium tracking-wider opacity-80">
                                {weekdayName}
                              </span>
                              <span className="block text-base font-bold mt-1">
                                {dayMonth}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-[#F5EFEB]">
                      <label className="block text-sm font-semibold text-[#442F2D] mb-3">
                        Horários disponíveis para o dia selecionado:
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
                        {availableTimeSlots.map((time) => {
                          const isSelected = formData.selectedTime === time;
                          return (
                            <button
                              key={time}
                              type="button"
                              onClick={() => {
                                setFormData({ ...formData, selectedTime: time });
                                setFormErrors({});
                              }}
                              className={`py-2.5 px-3 rounded-xl border text-sm font-semibold transition-all ${
                                isSelected
                                  ? 'bg-[#442F2D] text-[#FFFFFF] border-[#442F2D] shadow-xs'
                                  : 'bg-[#FFFFFF] text-[#442F2D] border-[#C8C1B5]/40 hover:border-[#9F5E48]'
                              }`}
                            >
                              {time}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {/* ETAPA 4: DADOS DO TUTOR */}
                {currentStep === 4 && (
                  <div className="space-y-6 animate-fade-in">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="sm:col-span-2">
                        <label className="block text-sm font-semibold text-[#442F2D] mb-2">
                          Nome Completo do Tutor *
                        </label>
                        <input
                          type="text"
                          value={formData.tutorName}
                          onChange={(e) => setFormData({ ...formData, tutorName: e.target.value })}
                          placeholder="Ex: Mariana Ferreira de Souza"
                          className="w-full px-4 py-3 rounded-2xl bg-[#FAF6F0] border border-[#C8C1B5]/50 focus:outline-none focus:ring-2 focus:ring-[#9F5E48] text-sm text-[#442F2D]"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-[#442F2D] mb-2">
                          WhatsApp / Telefone com DDD *
                        </label>
                        <input
                          type="tel"
                          value={formData.tutorPhone}
                          onChange={(e) => setFormData({ ...formData, tutorPhone: e.target.value })}
                          placeholder="Ex: (11) 98888-7777"
                          className="w-full px-4 py-3 rounded-2xl bg-[#FAF6F0] border border-[#C8C1B5]/50 focus:outline-none focus:ring-2 focus:ring-[#9F5E48] text-sm text-[#442F2D]"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-[#442F2D] mb-2">
                          E-mail para Confirmação *
                        </label>
                        <input
                          type="email"
                          value={formData.tutorEmail}
                          onChange={(e) => setFormData({ ...formData, tutorEmail: e.target.value })}
                          placeholder="Ex: mariana@email.com"
                          className="w-full px-4 py-3 rounded-2xl bg-[#FAF6F0] border border-[#C8C1B5]/50 focus:outline-none focus:ring-2 focus:ring-[#9F5E48] text-sm text-[#442F2D]"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* ETAPA 5: RESUMO E CONFIRMAÇÃO */}
                {currentStep === 5 && (
                  <div className="space-y-6 animate-fade-in">
                    <div className="p-6 rounded-3xl bg-[#FAF6F0] border border-[#F3DABE] space-y-4">
                      <div className="flex items-center justify-between pb-4 border-b border-[#C8C1B5]/30">
                        <div>
                          <p className="text-xs uppercase font-semibold text-[#9F5E48]">Serviço Principal</p>
                          <h4 className="font-display text-lg font-bold text-[#442F2D]">{selectedService.name}</h4>
                        </div>
                        <p className="font-display text-lg font-bold text-[#9F5E48]">
                          {formatCurrency(selectedService.startingPrice)}
                        </p>
                      </div>

                      {formData.addons.length > 0 && (
                        <div className="pb-4 border-b border-[#C8C1B5]/30 space-y-2">
                          <p className="text-xs uppercase font-semibold text-[#442F2D]/70">Adicionais de Spa:</p>
                          {formData.addons.map((addonId) => {
                            const addon = BOOKING_ADDONS.find((a) => a.id === addonId);
                            if (!addon) return null;
                            return (
                              <div key={addon.id} className="flex justify-between text-sm">
                                <span>+ {addon.name}</span>
                                <span className="font-semibold text-[#442F2D]">{formatCurrency(addon.price)}</span>
                              </div>
                            );
                          })}
                        </div>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-[#442F2D]/90 pt-2">
                        <div>
                          <p className="font-bold text-[#442F2D]">Pet:</p>
                          <p>{formData.petName} ({formData.species === 'dog' ? 'Cão' : 'Gato'} • {formData.breed} • Porte {formData.size})</p>
                        </div>
                        <div>
                          <p className="font-bold text-[#442F2D]">Data & Horário:</p>
                          <p>{formData.selectedDate} às {formData.selectedTime}</p>
                        </div>
                        <div>
                          <p className="font-bold text-[#442F2D]">Tutor(a):</p>
                          <p>{formData.tutorName} • {formData.tutorPhone}</p>
                        </div>
                        <div>
                          <p className="font-bold text-[#442F2D]">Duração Estimada:</p>
                          <p>{totalDuration} minutos</p>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-[#C8C1B5]/40 flex items-center justify-between">
                        <span className="font-display text-base font-bold text-[#442F2D]">Valor Total Estimado:</span>
                        <span className="font-display text-2xl font-bold text-[#9F5E48]">
                          a partir de {formatCurrency(totalCalculated)}
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* BARRAS DE NAVEGAÇÃO DO FORMULÁRIO */}
                <div className="pt-8 border-t border-[#F5EFEB] flex items-center justify-between gap-4">
                  {currentStep > 1 ? (
                    <Button variant="outline" size="md" onClick={handlePrevStep}>
                      Voltar
                    </Button>
                  ) : <div />}

                  {currentStep < 5 ? (
                    <Button variant="primary" size="md" onClick={handleNextStep} icon={<ChevronRight className="w-4 h-4" />}>
                      Próxima Etapa
                    </Button>
                  ) : (
                    <Button
                      variant="primary"
                      size="lg"
                      onClick={handleConfirmBooking}
                      icon={<CheckCircle2 className="w-5 h-5" />}
                    >
                      Confirmar Solicitação de Agendamento
                    </Button>
                  )}
                </div>
              </div>
            ) : (
              /* ESTADO DE SUCESSO ELEGANTE */
              <div className="py-12 text-center space-y-6 animate-fade-in">
                <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-display text-3xl font-bold text-[#442F2D]">
                  Agendamento Pré-Confirmado com Sucesso!
                </h3>
                <p className="text-base text-[#442F2D]/80 max-w-lg mx-auto leading-relaxed">
                  Recebemos os dados do <strong>{formData.petName}</strong> para o dia <strong>{formData.selectedDate}</strong> às <strong>{formData.selectedTime}</strong>. Nossa equipe entrará em contato via WhatsApp para confirmar todos os detalhes.
                </p>

                {/* Botão de Enviar Resumo pelo WhatsApp conforme requerido no item 6 */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <Button
                      variant="primary"
                      size="lg"
                      className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-[#FFFFFF]"
                      icon={<Send className="w-4 h-4" />}
                    >
                      Enviar Resumo pelo WhatsApp
                    </Button>
                  </a>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => {
                      setIsSubmitted(false);
                      setCurrentStep(1);
                    }}
                    icon={<RotateCcw className="w-4 h-4" />}
                  >
                    Fazer Outro Agendamento
                  </Button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* =========================================================================
            4. BLOCO DE INFORMAÇÕES IMPORTANTES
            ========================================================================= */}
        <section className="rounded-3xl bg-[#F5EFEB] p-8 sm:p-12 border border-[#C8C1B5]/30">
          <SectionTitle
            badge="Antes da Sua Visita"
            title="Informações Importantes para os Tutores"
            subtitle="Regras de segurança e preparação que garantem a harmonia e saúde coletiva de todos os nossos pequenos hóspedes."
            align="center"
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VISIT_GUIDELINES.map((guide, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#FFFFFF] border border-[#C8C1B5]/25 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-[#F3DABE]/60 text-[#9F5E48] flex items-center justify-center mb-4">
                  <Info className="w-5 h-5" />
                </div>
                <h4 className="font-display text-base font-bold text-[#442F2D] mb-2">{guide.title}</h4>
                <p className="text-xs sm:text-sm text-[#442F2D]/75 leading-relaxed">{guide.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            5. FAQ EM ACCORDION
            ========================================================================= */}
        <section className="max-w-4xl mx-auto space-y-10">
          <SectionTitle
            badge="Dúvidas Frequentes"
            title="Tudo o que você precisa saber"
            subtitle="Respostas claras e transparentes sobre nossa metodologia, produtos e políticas de atendimento."
            align="center"
          />

          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-[#FFFFFF] border border-[#C8C1B5]/30 overflow-hidden shadow-xs transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-[#9F5E48]"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-base sm:text-lg font-bold text-[#442F2D]">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#9F5E48] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 text-sm text-[#442F2D]/80 leading-relaxed animate-fade-in border-t border-[#F5EFEB] pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
};
