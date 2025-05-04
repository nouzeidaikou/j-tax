import { useState } from 'react';
import { Link } from 'wouter';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { LanguageToggle } from '@/components/ui/language-toggle';
import { Menu, X } from 'lucide-react';

export function Header() {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const navItems = [
    { href: '#home', label: t('nav.home') },
    { href: '#about', label: t('nav.about') },
    { href: '#tax-refund', label: t('nav.taxRefund') },
    { href: '#process', label: t('nav.process') },
    { href: '#testimonials', label: t('nav.testimonials') },
    { href: '#faq', label: t('nav.faq') },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <span className="text-primary font-bold text-2xl">{t('header.brandName1')}</span>
          <span className="text-secondary font-medium ml-1 text-lg">{t('header.brandName2')}</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <a 
              key={item.href}
              href={item.href} 
              className="text-foreground hover:text-primary font-medium"
            >
              {item.label}
            </a>
          ))}
          <LanguageToggle />
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <LanguageToggle />
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={toggleMobileMenu} 
            className="text-foreground focus:outline-none ml-2"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
        
        {/* Contact Button (Desktop) */}
        <a href="#contact" className="hidden md:block">
          <Button className="bg-primary hover:bg-secondary text-white font-bold transition duration-300">
            {t('header.contactBtn')}
          </Button>
        </a>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 right-0 left-0 bg-white shadow-md py-2 px-4 z-50">
          {navItems.map((item) => (
            <a 
              key={item.href}
              href={item.href} 
              className="block py-2 text-foreground hover:text-primary"
              onClick={closeMobileMenu}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#contact" 
            className="block py-2 mt-2 text-center bg-primary hover:bg-secondary text-white font-bold rounded"
            onClick={closeMobileMenu}
          >
            {t('header.contactBtn')}
          </a>
        </div>
      )}
    </header>
  );
}
