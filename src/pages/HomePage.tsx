import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  ArrowRight,
  HeartHandshake,
  Stethoscope,
  Sparkles,
  ShieldCheck,
  Star,
  CheckCircle2,
  Clock,
  ChevronRight,
  Scissors
} from 'lucide-react';
import { Button } from '../components/common/Button';
import { SectionTitle } from '../components/common/SectionTitle';
import { OrganicWave } from '../components/common/OrganicWave';
import { Marquee } from '../components/common/Marquee';
import { Reveal } from '../components/common/Reveal';
import {
  BRAND_INFO,
  BRAND_DIFFERENTIALS,
  SERVICES_CATALOG,
  HOW_IT_WORKS_STEPS,
  TESTIMONIALS
} from '../data/constants';

export const HomePage: React.FC = () => {
  const [activeBeforeAfter, setActiveBeforeAfter] = useState<'after' | 'before'>('after');

  const featuredServices = SERVICES_CATALOG.slice(0, 3);

  // Ícones dinâmicos para os diferenciais
  const getDifferentialIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-[#9F5E48]" />;
      case 'Stethoscope':
        return <Stethoscope className="w-6 h-6 text-[#9F5E48]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#9F5E48]" />;
      case 'ShieldCheck':
      default:
        return <ShieldCheck className="w-6 h-6 text-[#9F5E48]" />;
    }
  };

  return (
    <div className="overflow-hidden">
      {/* =========================================================================
          1. HERO SECTION - COMPOSIÇÃO EDITORIAL LIMPA
          ========================================================================= */}
      <section className="relative overflow-hidden bg-[#F3DABE] pt-5 sm:pt-8 lg:pt-12 pb-20 sm:pb-28 lg:pb-48">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 lg:gap-16 items-center">
            <Reveal direction="right" delay={0.1} className="order-2 md:order-1">
              <div className="relative mx-auto h-[280px] w-full max-w-sm sm:h-[340px] sm:max-w-md md:h-auto md:aspect-[4/5] md:max-w-lg">
                <img
                  src={`${import.meta.env.BASE_URL}assets/vetgroom-hero-dog.png`}
                  alt="Cão olhando para cima com expressão alegre"
                  className="absolute bottom-[-24%] left-1/2 h-[120%] w-auto max-w-none -translate-x-1/2 object-contain object-bottom md:bottom-[-40%]"
                  fetchPriority="high"
                />
              </div>
            </Reveal>

            <Reveal direction="left" delay={0.15} className="order-1 md:order-2">
              <div className="mx-auto max-w-xl space-y-4 sm:space-y-5 lg:space-y-6 lg:py-8">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9F5E48]">
                  Grooming e cuidado veterinário
                </p>
                <h1 className="font-display text-3xl sm:text-4xl lg:text-6xl font-semibold leading-[1.08] tracking-tight text-[#442F2D]">
                  Mais carinho em cada cuidado do seu pet.
                </h1>
                <p className="max-w-lg text-base sm:text-lg leading-relaxed text-[#442F2D]/80">
                  Um espaço acolhedor para banho, tosa e bem-estar, com atenção ao tempo e às necessidades de cada pet.
                </p>

                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 pt-1 text-xs sm:text-sm font-medium text-[#442F2D]/80">
                  <span>Banho & cuidado</span>
                  <span aria-hidden="true" className="text-[#9F5E48]">•</span>
                  <span>Tosa com carinho</span>
                  <span aria-hidden="true" className="text-[#9F5E48]">•</span>
                  <span>Bem-estar pet</span>
                </div>

                <Link
                  to="/servicos"
                  className="inline-flex items-center justify-center rounded-full bg-[#442F2D] px-7 py-3.5 text-sm font-semibold text-[#FAF6F0] transition-colors hover:bg-[#9F5E48] focus:outline-none focus:ring-2 focus:ring-[#442F2D] focus:ring-offset-2 focus:ring-offset-[#F3DABE]"
                >
                  Conheça nossos serviços
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </Reveal>
            </div>
          </div>

        <div className="absolute bottom-0 left-0 right-0 z-10">
          <OrganicWave fillColor="#FAF6F0" position="bottom" variant="smooth-curve" />
        </div>
      </section>

      {/* =========================================================================
          2. FAIXA DE DIFERENCIAIS (4 ITENS CONFORME BRANDBOOK)
          ========================================================================= */}
      <section className="py-24 sm:py-32 bg-[#FAF6F0] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Padrão VetGroom"
            title="Por que escolher nosso estúdio?"
            subtitle="Concebido por médicos veterinários e master groomers para eliminar o estresse e elevar a saúde do seu pet a outro patamar."
            align="center"
          />

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {BRAND_DIFFERENTIALS.map((diff, index) => (
              <Reveal key={diff.id} delay={index * 0.15}>
                <div className="group h-full p-8 rounded-3xl bg-[#FFFFFF] border border-[#C8C1B5]/30 hover:border-[#9F5E48]/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-[#F3DABE]/50 group-hover:bg-[#9F5E48] text-[#9F5E48] group-hover:text-[#FFFFFF] flex items-center justify-center transition-colors duration-300 mb-6">
                      {getDifferentialIcon(diff.iconName)}
                    </div>
                    <h3 className="font-display text-xl font-bold text-[#442F2D] mb-3 leading-snug">
                      {diff.title}
                    </h3>
                    <p className="text-sm text-[#442F2D]/75 leading-relaxed font-normal">
                      {diff.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#F5EFEB] flex items-center text-xs font-semibold text-[#9F5E48] group-hover:translate-x-1 transition-transform">
                    <span>Saber mais</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-1" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee de Valores e Especialidades da Marca */}
      <Marquee theme="bege" />

      {/* =========================================================================
          3. SERVIÇOS EM DESTAQUE (COMPOSIÇÃO ASSIMÉTRICA EDITORIAL)
          ========================================================================= */}
      <section className="py-24 sm:py-32 bg-[#F5EFEB]/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <SectionTitle
              badge="Cuidados Selecionados"
              title="Especialidades em Destaque"
              subtitle="Combinamos higiene com bem-estar e cuidados clínicos contínuos."
              align="left"
            />
            <Link to="/servicos" className="shrink-0">
              <Button variant="outline" size="md" icon={<ArrowRight className="w-4 h-4" />}>
                Ver Todo o Catálogo
              </Button>
            </Link>
          </div>

          {/* Grid com Composição Variada (Não idêntica) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Serviço 1 - Card Grande com Destaque */}
            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <div className="h-full rounded-[36px] bg-[#FFFFFF] border border-[#C8C1B5]/30 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between p-8 sm:p-10">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-[#9F5E48] text-[#FFFFFF]">
                        {featuredServices[0].badge || 'Destaque'}
                      </span>
                      <span className="text-xs text-[#442F2D]/60 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {featuredServices[0].durationMinutes} min
                      </span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#442F2D] mb-4">
                      {featuredServices[0].name}
                    </h3>
                    <p className="text-base text-[#442F2D]/80 leading-relaxed mb-6">
                      {featuredServices[0].fullDescription}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {featuredServices[0].benefits.map((b, i) => (
                        <div key={i} className="flex items-start space-x-2 text-xs sm:text-sm text-[#442F2D]/90">
                          <CheckCircle2 className="w-4 h-4 text-[#9F5E48] shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-[#F5EFEB] flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <span className="text-xs text-[#442F2D]/60 uppercase tracking-wider block">Investimento</span>
                      <span className="font-display text-xl sm:text-2xl font-bold text-[#9F5E48]">
                        {featuredServices[0].priceNote}
                      </span>
                    </div>
                    <Link to={`/servicos?serviceId=${featuredServices[0].id}&agendar=true`}>
                      <Button variant="primary" size="md">
                        Agendar Este Serviço
                      </Button>
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Coluna com 2 Serviços Menores */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              {featuredServices.slice(1, 3).map((service, index) => (
                <Reveal key={service.id} delay={0.2 + index * 0.15}>
                  <div className="rounded-[32px] bg-[#FFFFFF] border border-[#C8C1B5]/30 p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#F3DABE]/50 text-[#442F2D]">
                          {service.badge || 'Exclusivo'}
                        </span>
                        <span className="text-xs text-[#442F2D]/60 flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {service.durationMinutes} min
                        </span>
                      </div>
                      <h3 className="font-display text-xl font-bold text-[#442F2D] mb-2">
                        {service.name}
                      </h3>
                      <p className="text-sm text-[#442F2D]/75 leading-relaxed mb-4">
                        {service.shortDescription}
                      </p>
                    </div>
                    <div className="pt-4 border-t border-[#F5EFEB] flex items-center justify-between">
                      <span className="text-sm font-bold text-[#9F5E48]">{service.priceNote}</span>
                      <Link to={`/servicos?serviceId=${service.id}&agendar=true`}>
                        <Button variant="outline" size="sm">
                          Agendar
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. COMO FUNCIONA (PASSO A PASSO EDITORIAL 01-04)
          ========================================================================= */}
      <section className="py-24 sm:py-32 bg-[#FAF6F0] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Experiência Sem Complicações"
            title="Como Funciona o Atendimento"
            subtitle="Cada etapa é planejada para que você e seu companheiro de quatro patas se sintam acolhidos, seguros e informados."
            align="center"
          />

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {HOW_IT_WORKS_STEPS.map((step, index) => (
              <Reveal key={step.step} delay={index * 0.15}>
                <div className="relative p-8 rounded-3xl bg-[#FFFFFF] border border-[#C8C1B5]/30 shadow-xs hover:shadow-md transition-all duration-300">
                  <span className="font-display text-5xl font-extrabold text-[#F3DABE] block mb-4">
                    {step.step}
                  </span>
                  <h3 className="font-display text-xl font-bold text-[#442F2D] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#442F2D]/75 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link to="/servicos?agendar=true">
              <Button variant="primary" size="lg" icon={<Calendar className="w-5 h-5" />}>
                Reservar Horário Agora
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. SOBRE RESUMIDO - HISTÓRIA & PROPÓSITO
          ========================================================================= */}
      <section className="py-24 sm:py-32 bg-[#F3DABE]/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Foto Editorial com Moldura Assimetrica */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <Reveal direction="right">
                <div className="relative">
                  <div className="rounded-[40px] overflow-hidden shadow-2xl border-4 border-[#FFFFFF] aspect-[4/5]">
                    <img
                      src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=900&q=80"
                      alt="Profissional da VetGroom interagindo carinhosamente com pet"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 p-6 rounded-3xl bg-[#442F2D] text-[#F3DABE] shadow-xl max-w-xs hidden sm:block">
                    <p className="font-display text-3xl font-bold text-[#FFFFFF]">Fear-Free</p>
                    <p className="text-xs text-[#F3DABE]/80 mt-1">
                      Certificação internacional para manejo sem estresse e sem traumas.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Texto */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <Reveal direction="left">
                <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-[#9F5E48]/15 text-[#9F5E48] uppercase tracking-wider">
                  Nossa Essência
                </span>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#442F2D] tracking-tight leading-tight mt-3">
                  Acreditamos que todo pet merece um cuidado tão refinado quanto o seu amor por ele.
                </h2>
                <p className="text-base sm:text-lg text-[#442F2D]/85 leading-relaxed font-normal">
                  A VetGroom nasceu para romper com o modelo ruidoso e apressado dos pet shops convencionais.
                  Aqui, cada cão e gato tem seu tempo respeitado em suítes com conforto acústico, produtos
                  botânicos hipoalergênicos e a presença constante de veterinários qualificados.
                </p>
                <div className="pt-2 flex flex-wrap gap-4">
                  <Link to="/sobre">
                    <Button variant="dark" size="md" icon={<ArrowRight className="w-4 h-4" />}>
                      Conhecer Nossa História & Equipe
                    </Button>
                  </Link>
                  <Link to="/contato">
                    <Button variant="outline" size="md">
                      Agendar uma Visita ao Espaço
                    </Button>
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. GALERIA & MOSAICO ANTES E DEPOIS
          ========================================================================= */}
      <section className="py-24 sm:py-32 bg-[#FAF6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
            <SectionTitle
              badge="Transformações com Carinho"
              title="Galeria & Resultados"
              subtitle="Veja o acabamento impecável proporcionado por nossos Master Groomers."
              align="left"
            />
            {/* Toggle Antes / Depois interativo */}
            <div className="inline-flex p-1 rounded-full bg-[#F3DABE]/50 border border-[#C8C1B5]/30">
              <button
                type="button"
                onClick={() => setActiveBeforeAfter('after')}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeBeforeAfter === 'after'
                    ? 'bg-[#9F5E48] text-[#FFFFFF] shadow-sm'
                    : 'text-[#442F2D] hover:text-[#9F5E48]'
                }`}
              >
                Resultado Final
              </button>
              <button
                type="button"
                onClick={() => setActiveBeforeAfter('before')}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeBeforeAfter === 'before'
                    ? 'bg-[#9F5E48] text-[#FFFFFF] shadow-sm'
                    : 'text-[#442F2D] hover:text-[#9F5E48]'
                }`}
              >
                Chegada do Pet
              </button>
            </div>
          </div>

          {/* Mosaico de Fotos em proporções elegantes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Spitz Alemão (Asian Fusion)',
                tag: 'Tosa na Tesoura',
                afterImg: 'https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=800&q=80',
                beforeImg: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=800&q=80',
              },
              {
                title: 'Golden Retriever',
                tag: 'Banho Terapêutico & Ozônio',
                afterImg: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=80',
                beforeImg: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=800&q=80',
              },
              {
                title: 'Gato Persa',
                tag: 'Cat Grooming Delicado',
                afterImg: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=800&q=80',
                beforeImg: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=800&q=80',
              },
            ].map((item, index) => (
              <Reveal key={index} delay={index * 0.15}>
                <div className="group rounded-3xl overflow-hidden bg-[#FFFFFF] border border-[#C8C1B5]/30 shadow-xs hover:shadow-xl transition-all duration-300">
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#F5EFEB]">
                    <img
                      src={activeBeforeAfter === 'after' ? item.afterImg : item.beforeImg}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#FAF6F0]/90 backdrop-blur-xs text-xs font-semibold text-[#442F2D]">
                      {item.tag}
                    </div>
                  </div>
                  <div className="p-5 flex items-center justify-between">
                    <div>
                      <h3 className="font-display text-base font-bold text-[#442F2D]">{item.title}</h3>
                      <p className="text-xs text-[#442F2D]/60 mt-0.5">
                        {activeBeforeAfter === 'after' ? 'Pós-atendimento com ozônio' : 'Antes da higienização'}
                      </p>
                    </div>
                    <span className="text-xs font-semibold text-[#9F5E48]">100% Tesourado</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. DEPOIMENTOS DE TUTORES (MARCADOS COM [EXEMPLO])
          ========================================================================= */}
      <section className="py-24 sm:py-32 bg-[#F5EFEB]/60 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Experiências Reais"
            title="O que os tutores dizem sobre nós"
            subtitle="A confiança e o carinho construídos em cada atendimento. [CONTEÚDOS DE EXEMPLO]"
            align="center"
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((test, index) => (
              <Reveal key={test.id} delay={index * 0.15}>
                <div className="h-full rounded-3xl bg-[#FFFFFF] border border-[#C8C1B5]/30 p-8 shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(test.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                      ))}
                    </div>
                    <p className="text-sm text-[#442F2D]/85 leading-relaxed italic mb-6">
                      "{test.comment}"
                    </p>
                  </div>
                  <div className="flex items-center space-x-3 pt-4 border-t border-[#F5EFEB]">
                    <img
                      src={test.avatarUrl}
                      alt={test.tutorName}
                      className="w-11 h-11 rounded-full object-cover border border-[#9F5E48]/30"
                    />
                    <div>
                      <p className="text-sm font-bold text-[#442F2D]">{test.tutorName}</p>
                      <p className="text-xs text-[#442F2D]/60">Tutor(a) do {test.petName} ({test.petBreed})</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          8. CTA FINAL DE ALTO IMPACTO COM FUNDO NOBRE
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#442F2D] text-[#FFFFFF] relative overflow-hidden">
        {/* Curva orgânica sutil de topo */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#FFFFFF]/10 border border-[#FFFFFF]/15 text-xs font-semibold tracking-wider uppercase text-[#F3DABE]">
            Cuidado Premium para Seu Melhor Amigo
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight max-w-3xl mx-auto text-[#FFFFFF]">
            Pronto para proporcionar uma experiência livre de estresse ao seu pet?
          </h2>
          <p className="text-base sm:text-lg text-[#F3DABE]/80 max-w-2xl mx-auto leading-relaxed">
            Reserve seu horário online em menos de 2 minutos ou fale diretamente com a nossa equipe de atendimento no WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link to="/servicos?agendar=true">
              <Button
                variant="secondary"
                size="lg"
                icon={<Calendar className="w-5 h-5" />}
              >
                Agendar Horário Online
              </Button>
            </Link>
            <a
              href={`https://wa.me/${BRAND_INFO.contact.whatsappRaw}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
                className="border-[#F3DABE] text-[#F3DABE] hover:bg-[#F3DABE]/10"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Falar pelo WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
