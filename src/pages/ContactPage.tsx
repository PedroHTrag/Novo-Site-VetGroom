import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Send,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { Button } from '../components/common/Button';
import { SectionTitle } from '../components/common/SectionTitle';
import { BRAND_INFO, FAQS } from '../data/constants';
import { isStoreOpenNow } from '../utils/booking';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Agendamento e Dúvidas Gerais',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSent, setIsSent] = useState(false);
  const storeStatus = isStoreOpenNow();

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};

    if (!formData.name.trim()) errors.name = 'Por favor, informe seu nome.';
    if (!formData.email.trim() || !formData.email.includes('@')) errors.email = 'Informe um e-mail válido.';
    if (!formData.phone.trim()) errors.phone = 'Informe seu telefone ou WhatsApp.';
    if (!formData.message.trim() || formData.message.length < 10) errors.message = 'Sua mensagem deve conter ao menos 10 caracteres.';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setIsSent(true);
  };

  return (
    <div className="py-12 sm:py-20 bg-[#FAF6F0] space-y-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* =========================================================================
            1. CABEÇALHO DA PÁGINA
            ========================================================================= */}
        <section className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold bg-[#9F5E48]/15 text-[#9F5E48] uppercase tracking-wider">
            Canais de Atendimento
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#442F2D] tracking-tight">
            Fale com a VetGroom
          </h1>
          <p className="text-base sm:text-lg text-[#442F2D]/80 leading-relaxed font-normal">
            Estamos sempre à disposição para tirar dúvidas, orientar sobre cuidados prévios ou agendar
            a visita do seu pet. Escolha o canal de sua preferência.
          </p>
        </section>

        {/* =========================================================================
            2. CARDS DE CONTATO (4 CARDS COM PLACEHOLDERS MARCADOS)
            ========================================================================= */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* WhatsApp */}
          <div className="p-8 rounded-3xl bg-[#FFFFFF] border border-[#C8C1B5]/30 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#9F5E48]/15 text-[#9F5E48] flex items-center justify-center mb-6">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-[#442F2D] mb-1">WhatsApp Oficial</h3>
              <p className="text-xs text-[#442F2D]/70 mb-4">Atendimento humanizado rápido</p>
              <p className="text-sm font-semibold text-[#442F2D]">{BRAND_INFO.contact.whatsapp}</p>
            </div>
            <a
              href={`https://wa.me/${BRAND_INFO.contact.whatsappRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center text-xs font-bold text-[#9F5E48] hover:underline"
            >
              <span>Abrir conversa</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1" />
            </a>
          </div>

          {/* Telefone Fixo */}
          <div className="p-8 rounded-3xl bg-[#FFFFFF] border border-[#C8C1B5]/30 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#F3DABE]/50 text-[#442F2D] flex items-center justify-center mb-6">
                <Phone className="w-6 h-6 text-[#9F5E48]" />
              </div>
              <h3 className="font-display text-lg font-bold text-[#442F2D] mb-1">Telefone Fixo</h3>
              <p className="text-xs text-[#442F2D]/70 mb-4">Recepção do estúdio</p>
              <p className="text-sm font-semibold text-[#442F2D]">{BRAND_INFO.contact.phone}</p>
            </div>
            <a
              href="tel:1134567890"
              className="mt-6 inline-flex items-center text-xs font-bold text-[#9F5E48] hover:underline"
            >
              <span>Ligar agora</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1" />
            </a>
          </div>

          {/* E-mail */}
          <div className="p-8 rounded-3xl bg-[#FFFFFF] border border-[#C8C1B5]/30 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#9F5E48]/15 text-[#9F5E48] flex items-center justify-center mb-6">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-[#442F2D] mb-1">E-mail Clínico</h3>
              <p className="text-xs text-[#442F2D]/70 mb-4">Para laudos e parcerias</p>
              <p className="text-xs sm:text-sm font-semibold text-[#442F2D] break-all">{BRAND_INFO.contact.email}</p>
            </div>
            <a
              href={`mailto:${BRAND_INFO.contact.email}`}
              className="mt-6 inline-flex items-center text-xs font-bold text-[#9F5E48] hover:underline"
            >
              <span>Enviar e-mail</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1" />
            </a>
          </div>

          {/* Endereço */}
          <div className="p-8 rounded-3xl bg-[#FFFFFF] border border-[#C8C1B5]/30 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#442F2D] text-[#F3DABE] flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-[#442F2D] mb-1">Endereço</h3>
              <p className="text-xs text-[#442F2D]/70 mb-4">Estacionamento com manobrista</p>
              <p className="text-xs sm:text-sm font-semibold text-[#442F2D] leading-snug">{BRAND_INFO.contact.address}</p>
            </div>
            <a
              href="#mapa"
              className="mt-6 inline-flex items-center text-xs font-bold text-[#9F5E48] hover:underline"
            >
              <span>Ver no mapa</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </a>
          </div>
        </section>

        {/* =========================================================================
            3. HORÁRIO DE FUNCIONAMENTO & FORMULÁRIO DE CONTATO
            ========================================================================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Horários e Informações Locais */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-[#442F2D] text-[#F3DABE] space-y-6 shadow-xl">
              <div className="flex items-center space-x-3">
                <span
                  className={`w-3 h-3 rounded-full ${
                    storeStatus.isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'
                  }`}
                />
                <span className="font-display font-bold text-base text-[#FFFFFF]">
                  {storeStatus.isOpen ? 'Estúdio Aberto' : 'Estúdio Fechado'}
                </span>
                <span className="text-xs text-[#F3DABE]/80">({storeStatus.nextStatus})</span>
              </div>

              <h3 className="font-display text-2xl font-bold text-[#FFFFFF]">
                Horários de Atendimento
              </h3>

              <div className="space-y-4 text-sm divide-y divide-[#FFFFFF]/10 pt-2">
                <div className="flex justify-between pt-3">
                  <span className="text-[#F3DABE]/80">Segunda a Sexta:</span>
                  <span className="font-semibold text-[#FFFFFF]">08h30 às 19h00</span>
                </div>
                <div className="flex justify-between pt-3">
                  <span className="text-[#F3DABE]/80">Sábados:</span>
                  <span className="font-semibold text-[#FFFFFF]">08h30 às 18h00</span>
                </div>
                <div className="flex justify-between pt-3">
                  <span className="text-[#F3DABE]/80">Domingos e Feriados:</span>
                  <span className="text-[#C8C1B5]/70 italic">Fechado para visitas</span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#FFFFFF]/10 text-xs text-[#F3DABE]/80">
                * Atendimento veterinário com hora marcada para evitar cruzamento de pets no lounge.
              </div>
            </div>

            {/* Redes Sociais */}
            <div className="p-8 rounded-3xl bg-[#FFFFFF] border border-[#C8C1B5]/30 space-y-4 shadow-xs">
              <h3 className="font-display text-lg font-bold text-[#442F2D]">
                Acompanhe o Dia a Dia da Nossa Matilha
              </h3>
              <p className="text-xs sm:text-sm text-[#442F2D]/75 leading-relaxed">
                Postamos diariamente nos stories os momentos de relaxamento no ofurô, tosas antes/depois e dicas de dermatologia veterinária.
              </p>
              <div className="pt-2 flex items-center space-x-3">
                <a
                  href={BRAND_INFO.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#9F5E48] text-[#FFFFFF] text-xs font-semibold hover:bg-[#864c39] transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  <span>{BRAND_INFO.contact.instagram}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Formulário de Mensagem */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-[36px] bg-[#FFFFFF] border border-[#C8C1B5]/40 shadow-lg">
            {!isSent ? (
              <form onSubmit={handleSendMessage} className="space-y-6">
                <div>
                  <h3 className="font-display text-2xl font-bold text-[#442F2D]">Envie uma Mensagem</h3>
                  <p className="text-sm text-[#442F2D]/70 mt-1">
                    Responderemos o mais rápido possível por e-mail ou WhatsApp.
                  </p>
                </div>

                {Object.keys(formErrors).length > 0 && (
                  <div className="p-4 rounded-2xl bg-rose-50 text-rose-800 text-xs sm:text-sm border border-rose-200 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>Por favor, preencha todos os campos obrigatórios corretamente.</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-[#442F2D] uppercase tracking-wider mb-2">
                      Seu Nome Completo *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ex: Ana Paula Ribeiro"
                      className="w-full px-4 py-3 rounded-2xl bg-[#FAF6F0] border border-[#C8C1B5]/50 focus:outline-none focus:ring-2 focus:ring-[#9F5E48] text-sm text-[#442F2D]"
                    />
                    {formErrors.name && <p className="text-rose-600 text-xs mt-1">{formErrors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#442F2D] uppercase tracking-wider mb-2">
                      WhatsApp ou Celular *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(11) 98888-8888"
                      className="w-full px-4 py-3 rounded-2xl bg-[#FAF6F0] border border-[#C8C1B5]/50 focus:outline-none focus:ring-2 focus:ring-[#9F5E48] text-sm text-[#442F2D]"
                    />
                    {formErrors.phone && <p className="text-rose-600 text-xs mt-1">{formErrors.phone}</p>}
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-[#442F2D] uppercase tracking-wider mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="anapaula@gmail.com"
                      className="w-full px-4 py-3 rounded-2xl bg-[#FAF6F0] border border-[#C8C1B5]/50 focus:outline-none focus:ring-2 focus:ring-[#9F5E48] text-sm text-[#442F2D]"
                    />
                    {formErrors.email && <p className="text-rose-600 text-xs mt-1">{formErrors.email}</p>}
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-[#442F2D] uppercase tracking-wider mb-2">
                      Assunto
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-[#FAF6F0] border border-[#C8C1B5]/50 focus:outline-none focus:ring-2 focus:ring-[#9F5E48] text-sm text-[#442F2D]"
                    >
                      <option value="Agendamento e Dúvidas Gerais">Dúvida sobre Agendamentos</option>
                      <option value="Cuidados com Gatos (Cat Friendly)">Atendimento para Felinos</option>
                      <option value="Check-up Dermatológico">Consulta Clínica ou Dermatológica</option>
                      <option value="Parcerias e Outros">Outros Assuntos</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-[#442F2D] uppercase tracking-wider mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Conte-nos como podemos ajudar você e seu pet..."
                      className="w-full px-4 py-3 rounded-2xl bg-[#FAF6F0] border border-[#C8C1B5]/50 focus:outline-none focus:ring-2 focus:ring-[#9F5E48] text-sm text-[#442F2D]"
                    />
                    {formErrors.message && <p className="text-rose-600 text-xs mt-1">{formErrors.message}</p>}
                  </div>
                </div>

                <Button variant="primary" size="lg" type="submit" className="w-full" icon={<Send className="w-4 h-4" />}>
                  Enviar Mensagem
                </Button>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#442F2D]">Mensagem Enviada!</h3>
                <p className="text-sm text-[#442F2D]/80 max-w-md mx-auto">
                  Obrigado pelo contato, <strong>{formData.name}</strong>. Nossa equipe entrará em contato em breve através do número <strong>{formData.phone}</strong>.
                </p>
                <div className="pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setIsSent(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        subject: 'Agendamento e Dúvidas Gerais',
                        message: '',
                      });
                    }}
                  >
                    Enviar Outra Mensagem
                  </Button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* =========================================================================
            4. MAPA INCORPORADO (PLACEHOLDER [ENDEREÇO])
            ========================================================================= */}
        <section id="mapa" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-display text-2xl font-bold text-[#442F2D]">
                Como Chegar ao Nosso Estúdio
              </h3>
              <p className="text-xs sm:text-sm text-[#442F2D]/70 mt-1">
                Localização privilegiada: {BRAND_INFO.contact.address}
              </p>
            </div>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#9F5E48] hover:underline"
            >
              <span>Abrir no Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="rounded-[36px] overflow-hidden border border-[#C8C1B5]/40 shadow-md h-80 sm:h-96 relative bg-[#F5EFEB]">
            <iframe
              src={BRAND_INFO.contact.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              title="Localização da VetGroom"
              className="w-full h-full filter grayscale-[30%] contrast-[1.05]"
            />
            {/* Banner Overlay indicativo */}
            <div className="absolute bottom-4 left-4 p-4 rounded-2xl bg-[#FFFFFF]/90 backdrop-blur-md shadow-lg border border-[#F3DABE] text-xs max-w-xs text-[#442F2D]">
              <p className="font-bold text-[#9F5E48]">VetGroom Estúdio</p>
              <p className="mt-0.5 text-[#442F2D]/80">{BRAND_INFO.contact.address}</p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            5. MINI-FAQ COM LINK PARA AGENDAMENTO
            ========================================================================= */}
        <section className="rounded-3xl bg-[#F5EFEB] p-8 sm:p-12 border border-[#C8C1B5]/30">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs font-semibold text-[#9F5E48] uppercase tracking-wider">
                Precisa de auxílio imediato?
              </span>
              <h3 className="font-display text-2xl font-bold text-[#442F2D]">
                Tem dúvidas sobre vacinação ou preparação do pet?
              </h3>
              <p className="text-sm text-[#442F2D]/75">
                Consulte nossa seção completa de perguntas frequentes na página de serviços ou faça um agendamento direto.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link to="/servicos">
                <Button variant="outline" size="md">
                  Ver FAQ Completo
                </Button>
              </Link>
              <Link to="/servicos?agendar=true">
                <Button variant="primary" size="md" icon={<ArrowRight className="w-4 h-4" />}>
                  Ir para Agendamento
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
