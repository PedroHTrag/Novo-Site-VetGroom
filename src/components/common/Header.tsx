import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fecha menu mobile ao mudar de rota
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: '/', label: 'Início' },
    { to: '/servicos', label: 'Serviços' },
    { to: '/sobre', label: 'Sobre' },
    { to: '/contato', label: 'Contato' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF6F0]/95 backdrop-blur-md shadow-sm border-b border-[#C8C1B5]/50 py-3'
          : 'bg-[#FAF6F0] border-b border-[#C8C1B5]/40 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between min-h-10">
          <nav className="hidden md:flex items-center gap-8" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-xs lg:text-sm font-medium tracking-wide transition-colors ${
                    isActive ? 'text-[#9F5E48]' : 'text-[#442F2D]/80 hover:text-[#9F5E48]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="md:absolute md:left-1/2 md:-translate-x-1/2">
            <Link
              to="/"
              className="group flex items-center focus:outline-none focus:ring-2 focus:ring-[#9F5E48] rounded-lg"
              aria-label="VetGroom - Página Inicial"
            >
              <img
                src={`${import.meta.env.BASE_URL}assets/aistudio/Logo_Vetgroom-01_f9de814f.svg`}
                alt="VetGroom - Onde a saúde encontra carinho e estilo"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden ml-auto p-2 text-[#442F2D] hover:text-[#9F5E48] rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#9F5E48]"
            aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <nav className="md:hidden absolute left-0 right-0 top-full bg-[#FAF6F0] border-t border-[#C8C1B5]/50 px-5 py-4 shadow-lg" aria-label="Navegação mobile">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-3 py-3 text-sm font-medium ${
                    isActive ? 'text-[#9F5E48]' : 'text-[#442F2D] hover:text-[#9F5E48]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};
