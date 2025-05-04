import { useTranslation } from 'react-i18next';
import { Facebook, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  const { t } = useTranslation();

  const serviceLinks = [
    { href: '#about', label: t('footer.links.about') },
    { href: '#tax-refund', label: t('footer.links.taxRefund') },
    { href: '#process', label: t('footer.links.process') },
    { href: '#calculator', label: t('footer.links.calculator') },
    { href: '#faq', label: t('footer.links.faq') }
  ];

  const companyLinks = [
    { href: '#', label: t('footer.company.privacy') },
    { href: '#', label: t('footer.company.terms') }
  ];

  return (
    <footer className="bg-[#333333] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.brandName')}</h3>
            <p className="text-white text-opacity-70 mb-4">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-primary transition-colors duration-200">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors duration-200">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors duration-200">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">{t('footer.serviceTitle')}</h3>
            <ul className="space-y-2 text-white text-opacity-70">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-primary transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">{t('footer.contactTitle')}</h3>
            <ul className="space-y-2 text-white text-opacity-70">
              <li>{t('footer.contact.phone')}: 02-123-4567</li>
              <li>{t('footer.contact.email')}: info@japanpension.kr</li>
              <li>{t('footer.contact.kakao')}: JapanPension</li>
              <li>{t('footer.contact.hours')}: {t('footer.contact.hoursValue')}</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">{t('footer.companyTitle')}</h3>
            <ul className="space-y-2 text-white text-opacity-70">
              <li>{t('footer.company.name')}: {t('footer.company.nameValue')}</li>
              <li>{t('footer.company.representative')}: {t('footer.company.representativeValue')}</li>
              <li>{t('footer.company.businessNumber')}: 123-45-67890</li>
              <li>{t('footer.company.address')}: {t('footer.company.addressValue')}</li>
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-primary transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white border-opacity-20 mt-8 pt-8 text-center text-white text-opacity-70">
          <p>&copy; 2023 {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
