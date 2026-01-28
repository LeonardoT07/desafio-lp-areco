import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Como integra', href: '#pillars' },
    { name: 'Visibilidade', href: '#visibility' },
    { name: 'Setores', href: '#sectors' },
    { name: 'IBS/CBS', href: '#reform' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-md py-2' : 'bg-slate-900 py-4 shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <img 
              src="https://arcfiles.areco.com.br/areco/logos/VSat/VSat4.0-1.png" 
              alt="VSat 4.0 Logo" 
              className="h-10 w-auto"
            />
          </div>

          <nav className="hidden lg:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-300 hover:text-white font-medium transition-colors text-sm"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex">
            <Button size="sm" onClick={() => window.location.href='#contact'}>
              Agendar demonstração
            </Button>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-300 hover:text-white p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-slate-900 border-b border-slate-800 shadow-lg p-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-300 font-medium py-2 px-4 hover:bg-slate-800 rounded-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button fullWidth onClick={() => {
            window.location.href='#contact';
            setIsMobileMenuOpen(false);
          }}>
            Agendar demonstração
          </Button>
        </div>
      )}
    </header>
  );
};