import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Instagram, Heart, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { BRAND_INFO } from '../../data/constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#442F2D] text-[#F3DABE] pt-16 sm:pt-20 pb-12 border-t border-[#322120]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-16 border-b border-[#FFFFFF]/10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="inline-block" aria-label="VetGroom Home">
              {/* Logo Vetgroom-04 com preenchimento bege suave (#f3dabe) para fundo escuro */}
              <img
                src={`${import.meta.env.BASE_URL}assets/aistudio/Logo_Vetgroom-04_e87d7458.svg`}
                alt="VetGroom - Onde a saúde encontra carinho e estilo"
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed text-[#F3DABE]/80 max-w-sm">
              Estúdio de grooming de alto padrão e cuidados veterinários integrados.
              Proporcionamos bem-estar animal autêntico, conforto acústico e atendimento sem estresse.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={BRAND_INFO.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#FFFFFF]/10 hover:bg-[#9F5E48] text-[#F3DABE] hover:text-[#FFFFFF] flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#F3DABE]"
                aria-label="Instagram VetGroom"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={`https://wa.me/${BRAND_INFO.contact.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#FFFFFF]/10 hover:bg-[#9F5E48] text-[#F3DABE] hover:text-[#FFFFFF] flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#F3DABE]"
                aria-label="WhatsApp VetGroom"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 text-xs text-[#F3DABE]">
              <ShieldCheck className="w-4 h-4 text-[#9F5E48]" />
              <span>Certificação Fear-Free & Cat Friendly Practice</span>
            </div>
          </div>

          {/* Navegação Rápida */}
          <div className="space-y-4">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-[#FFFFFF]">
              Navegação
            </h3>
            <ul className="space-y-2.5 text-sm text-[#F3DABE]/80">
              <li>
                <Link to="/" className="hover:text-[#FFFFFF] transition-colors flex items-center gap-1 group">
                  <span>Home</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="hover:text-[#FFFFFF] transition-colors flex items-center gap-1 group">
                  <span>Serviços & Catálogo</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/servicos?agendar=true" className="hover:text-[#FFFFFF] transition-colors flex items-center gap-1 group text-[#FFFFFF] font-medium">
                  <span>Agendamento Online</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="hover:text-[#FFFFFF] transition-colors flex items-center gap-1 group">
                  <span>Nossa História & Equipe</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/contato" className="hover:text-[#FFFFFF] transition-colors flex items-center gap-1 group">
                  <span>Fale Conosco & Localização</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Serviços em Destaque */}
          <div className="space-y-4">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-[#FFFFFF]">
              Especialidades
            </h3>
            <ul className="space-y-2.5 text-sm text-[#F3DABE]/80">
              <li>
                <Link to="/servicos?cat=banho-tosa" className="hover:text-[#FFFFFF] transition-colors">
                  Banho Terapêutico & Hidratação
                </Link>
              </li>
              <li>
                <Link to="/servicos?cat=banho-tosa" className="hover:text-[#FFFFFF] transition-colors">
                  Tosa na Tesoura & Asian Fusion
                </Link>
              </li>
              <li>
                <Link to="/servicos?cat=grooming-spa" className="hover:text-[#FFFFFF] transition-colors">
                  Ofurô com Ozônio & Argiloterapia
                </Link>
              </li>
              <li>
                <Link to="/servicos?cat=grooming-spa" className="hover:text-[#FFFFFF] transition-colors">
                  Cat Grooming em Sala Exclusiva
                </Link>
              </li>
              <li>
                <Link to="/servicos?cat=veterinaria" className="hover:text-[#FFFFFF] transition-colors">
                  Medicina Preventiva & Vacinação
                </Link>
              </li>
            </ul>
          </div>

          {/* Contatos & Horários */}
          <div className="space-y-4">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-[#FFFFFF]">
              Atendimento
            </h3>
            <div className="space-y-3 text-sm text-[#F3DABE]/80">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#9F5E48] shrink-0 mt-0.5" />
                <span>{BRAND_INFO.contact.address}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#9F5E48] shrink-0" />
                <span>{BRAND_INFO.contact.whatsapp}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-[#9F5E48] shrink-0" />
                <span>{BRAND_INFO.contact.email}</span>
              </div>
              <div className="flex items-start space-x-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#9F5E48] shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <p>{BRAND_INFO.schedule.weekdays}</p>
                  <p>{BRAND_INFO.schedule.saturday}</p>
                  <p className="text-[#C8C1B5]/60">{BRAND_INFO.schedule.sunday}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F3DABE]/60">
          <p>© {new Date().getFullYear()} VetGroom. Todos os direitos reservados. Cuidados veterinários e estética pet de alto padrão.</p>
          <div className="flex items-center space-x-1 text-[#F3DABE]/80">
            <span>Desenvolvido com</span>
            <Heart className="w-3.5 h-3.5 text-[#9F5E48] fill-[#9F5E48]" />
            <span>para quem ama pets incondicionalmente</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
