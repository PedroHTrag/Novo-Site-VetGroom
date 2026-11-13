import React from 'react';
import { Link } from 'react-router-dom';
import {
  Heart,
  Eye,
  Award,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowRight,
  Smile,
  VolumeX,
  Stethoscope,
  Scissors
} from 'lucide-react';
import { Button } from '../components/common/Button';
import { SectionTitle } from '../components/common/SectionTitle';
import { Reveal } from '../components/common/Reveal';
import {
  BRAND_INFO,
  TEAM_MEMBERS,
  SPACE_GALLERY
} from '../data/constants';

export const AboutPage: React.FC = () => {
  return (
    <div className="overflow-hidden bg-[#FAF6F0] py-12 sm:py-20 space-y-24 sm:space-y-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 sm:space-y-32">
        {/* =========================================================================
            1. HERO EDITORIAL COM A HISTÓRIA DA MARCA
            ========================================================================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6">
            <Reveal direction="down">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-[#9F5E48]/15 text-[#9F5E48] uppercase tracking-wider">
                Sobre a VetGroom
              </span>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#442F2D] tracking-tight leading-[1.12]">
                Onde o carinho materno encontra o rigor da medicina veterinária.
              </h1>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <div className="space-y-4 text-base sm:text-lg text-[#442F2D]/80 leading-relaxed font-normal">
                <p>
                  A VetGroom nasceu de um incômodo real: por que a grande maioria dos pet shops tradicionais
                  ainda submete cães e gatos a ambientes barulhentos, secadores agressivos e contenções mecânicas
                  que geram pânico e estresse crônico?
                </p>
                <p>
                  Em resposta, unimos médicos veterinários e master groomers em torno de um único propósito:
                  transformar o banho, a tosa e o check-up clínico em momentos de profundo relaxamento, vínculo
                  e restauração da saúde dermatológica dos pets.
                </p>
              </div>
            </Reveal>
            <Reveal direction="up" delay={0.3}>
              <div className="pt-2 flex flex-wrap gap-4">
                <Link to="/servicos?agendar=true">
                  <Button variant="primary" size="lg" icon={<Calendar className="w-5 h-5" />}>
                    Agendar Experiência
                  </Button>
                </Link>
                <Link to="/contato">
                  <Button variant="outline" size="lg">
                    Conhecer Nossas Instalações
                  </Button>
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal direction="left" delay={0.2}>
              <div className="relative">
                <div className="rounded-[40px] overflow-hidden shadow-2xl border-4 border-[#FFFFFF] aspect-[4/5] bg-[#F5EFEB]">
                  <img
                    src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1000&q=80"
                    alt="Cão relaxado em banheira de hidromassagem terapêutica"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 p-6 rounded-3xl bg-[#FFFFFF] shadow-xl border border-[#F3DABE] max-w-xs hidden sm:block">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#9F5E48] text-[#FFFFFF] flex items-center justify-center">
                      <Heart className="w-5 h-5 fill-current" />
                    </div>
                    <div>
                      <p className="font-display font-bold text-sm text-[#442F2D]">Zero Sedação</p>
                      <p className="text-xs text-[#442F2D]/70">Respeito ao tempo de cada pet</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* =========================================================================
            2. MISSÃO, VISÃO E VALORES (COMPOSIÇÃO NÃO CONVENCIONAL)
            ========================================================================= */}
        <section className="space-y-12">
          <SectionTitle
            badge="Pilares Institucionais"
            title="Nossa Razão de Existir"
            subtitle="Valores extraídos diretamente do BrandBook 2025-2026, traduzidos em cada atendimento diário."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Missão */}
            <div className="rounded-[36px] bg-[#FFFFFF] border border-[#C8C1B5]/30 p-8 sm:p-10 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#9F5E48]/15 text-[#9F5E48] flex items-center justify-center mb-6">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#442F2D] mb-4">Missão</h3>
                <p className="text-sm sm:text-base text-[#442F2D]/80 leading-relaxed font-normal">
                  Proporcionar cuidados veterinários e estéticos de excelência para pets, promovendo seu
                  bem-estar e fortalecendo o vínculo com seus tutores através de serviços profissionais,
                  carinhosos e de alta qualidade.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#F5EFEB] text-xs font-semibold uppercase tracking-wider text-[#9F5E48]">
                Excelência & Afeto
              </div>
            </div>

            {/* Visão */}
            <div className="rounded-[36px] bg-[#442F2D] text-[#F3DABE] p-8 sm:p-10 shadow-xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FFFFFF]/10 text-[#F3DABE] flex items-center justify-center mb-6">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#FFFFFF] mb-4">Visão</h3>
                <p className="text-sm sm:text-base text-[#F3DABE]/80 leading-relaxed font-normal">
                  Ser reconhecida como referência em cuidados integrados para pets, unindo saúde e estética em
                  um ambiente acolhedor, tornando-se a primeira escolha dos tutores que buscam o melhor para seus animais.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-[#FFFFFF]/10 text-xs font-semibold uppercase tracking-wider text-[#F3DABE]">
                Referência de Alto Padrão
              </div>
            </div>

            {/* Valores */}
            <div className="rounded-[36px] bg-[#F3DABE]/40 border border-[#F3DABE] p-8 sm:p-10 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#9F5E48] text-[#FFFFFF] flex items-center justify-center mb-6">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#442F2D] mb-4">Valores</h3>
                <ul className="space-y-3 text-sm sm:text-base text-[#442F2D]/90">
                  <li className="flex items-start gap-2">
                    <span className="text-[#9F5E48] font-bold">🐾 Amor aos Animais:</span>
                    <span>Respeito individual absoluto.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#9F5E48] font-bold">✨ Excelência:</span>
                    <span>Qualidade intransigente em produtos.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#9F5E48] font-bold">🩺 Profissionalismo:</span>
                    <span>Equipe qualificada e atualizada.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#9F5E48] font-bold">🤝 Confiança:</span>
                    <span>Transparência em todas as relações.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-4 border-t border-[#F3DABE] text-xs font-semibold uppercase tracking-wider text-[#442F2D]">
                Compromisso Ético
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            3. FILOSOFIA DE CUIDADO (FEAR-FREE & BEM-ESTAR ANIMAL)
            ========================================================================= */}
        <section className="rounded-[40px] bg-[#FFFFFF] border border-[#C8C1B5]/30 p-8 sm:p-14 lg:p-16 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-[#9F5E48]/15 text-[#9F5E48] uppercase tracking-wider">
                Manejo Fear-Free
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#442F2D] tracking-tight leading-tight">
                Um conceito inovador: estética sem medo, dor ou ansiedade.
              </h2>
              <p className="text-base text-[#442F2D]/80 leading-relaxed font-normal">
                Na VetGroom, compreendemos profundamente a etologia canina e felina. Antes de ligar qualquer
                secador ou iniciar o corte, realizamos a adaptação sensorial do animal com reforço positivo.
              </p>
              <div className="space-y-3 pt-2">
                {[
                  'Secadores acústicos silenciosos com regulagem de decibéis',
                  'Toalhas aquecidas e higienizadas individualmente em autoclave',
                  'Aromaterapia terapêutica com lavanda pura e camomila',
                  'Zero gaiolas ou caixas de espera coletivas fechadas',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-sm text-[#442F2D]/90">
                    <CheckCircle2 className="w-4 h-4 text-[#9F5E48] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="rounded-3xl overflow-hidden aspect-[4/5] bg-[#F5EFEB]">
                <img
                  src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=600&q=80"
                  alt="Banho tranquilo com espuma cremosa"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-3xl overflow-hidden aspect-[4/5] bg-[#F5EFEB] mt-8">
                <img
                  src="https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=600&q=80"
                  alt="Finalização delicada na tesoura"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            4. NÚMEROS / CREDENCIAIS (CONTADORES ANIMADOS)
            ========================================================================= */}
        <section className="rounded-3xl bg-[#442F2D] text-[#FFFFFF] p-10 sm:p-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-[#FFFFFF]/10">
            {BRAND_INFO.stats.map((stat, i) => (
              <div key={i} className={`space-y-2 ${i > 0 ? 'pt-6 lg:pt-0' : ''}`}>
                <p className="font-display text-4xl sm:text-5xl font-extrabold text-[#F3DABE]">
                  {stat.value}{stat.suffix}
                </p>
                <p className="text-sm font-semibold text-[#FFFFFF]">{stat.label}</p>
                <p className="text-xs text-[#F3DABE]/70">{stat.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            5. EQUIPE CLÍNICA & GROOMERS (DADOS DE EXEMPLO MARCADOS)
            ========================================================================= */}
        <section className="space-y-12">
          <SectionTitle
            badge="Corpo Técnico"
            title="Especialistas Apaixonados por Vidas"
            subtitle="Conheça os médicos veterinários e master groomers que cuidarão do seu pet com amor e precisão cirúrgica. [DADOS DE EXEMPLO]"
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member, index) => (
              <Reveal key={member.id} delay={index * 0.1}>
                <div className="rounded-3xl bg-[#FFFFFF] border border-[#C8C1B5]/30 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full">
                  <div>
                    <div className="relative aspect-square overflow-hidden bg-[#F5EFEB]">
                      <img
                        src={member.photoUrl}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-[#FAF6F0]/90 text-[10px] font-bold text-[#9F5E48]">
                        EXEMPLO
                      </div>
                    </div>
                    <div className="p-6 space-y-2">
                      <h3 className="font-display text-lg font-bold text-[#442F2D] leading-tight">
                        {member.name}
                      </h3>
                      <p className="text-xs font-semibold text-[#9F5E48]">{member.role}</p>
                      {member.crmv && (
                        <p className="text-[11px] text-[#442F2D]/60 font-mono">{member.crmv}</p>
                      )}
                      <p className="text-xs text-[#442F2D]/75 leading-relaxed pt-2">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                  <div className="p-6 pt-0">
                    <span className="inline-block text-[11px] font-medium px-3 py-1 rounded-full bg-[#F3DABE]/40 text-[#442F2D]">
                      {member.specialty}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* =========================================================================
            6. ESTRUTURA E AMBIENTE (GALERIA DO ESPAÇO)
            ========================================================================= */}
        <section className="space-y-12">
          <SectionTitle
            badge="Tour Virtual"
            title="Nossa Estrutura"
            subtitle="Conforto hospitalar com a elegância de um spa boutique."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SPACE_GALLERY.map((space, idx) => (
              <div key={idx} className="group rounded-3xl overflow-hidden bg-[#FFFFFF] border border-[#C8C1B5]/30 shadow-xs">
                <div className="aspect-[4/3] overflow-hidden bg-[#F5EFEB]">
                  <img
                    src={space.imageUrl}
                    alt={space.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-display text-base font-bold text-[#442F2D]">{space.title}</h4>
                  <p className="text-xs text-[#442F2D]/70 mt-1 leading-relaxed">{space.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            7. CTA FINAL DA PÁGINA SOBRE
            ========================================================================= */}
        <section className="rounded-3xl bg-[#F3DABE]/50 p-10 sm:p-14 text-center space-y-6 border border-[#F3DABE]">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#442F2D]">
            Deseja nos fazer uma visita antes de agendar?
          </h2>
          <p className="text-base text-[#442F2D]/80 max-w-xl mx-auto">
            Será um prazer receber você e seu companheiro para um café e uma apresentação detalhada da nossa suíte acústica.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <Link to="/servicos?agendar=true">
              <Button variant="primary" size="lg" icon={<Calendar className="w-5 h-5" />}>
                Agendar Horário Online
              </Button>
            </Link>
            <Link to="/contato">
              <Button variant="outline" size="lg">
                Fale Conosco
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};
