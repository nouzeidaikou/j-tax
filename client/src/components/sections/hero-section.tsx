import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import mainImage from '../../assets/main.jpeg';

export function HeroSection() {
  const { t } = useTranslation();

  return (
    <section id="home" className="bg-gradient-to-r from-primary to-secondary text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              {t('hero.title1')} <br className="hidden md:block" />
              <span className="text-[#F5F5F5]">{t('hero.title2')}</span> {t('hero.title3')}
            </h1>
            <p className="text-lg md:text-xl mb-6">
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#calculator" className="bg-white text-primary hover:bg-[#F5F5F5] hover:text-secondary font-bold py-3 px-6 rounded-lg transition duration-300 text-center">
                {t('hero.calculateBtn')}
              </a>
              <a href="https://forms.gle/7tQ5xaLqSQPFXsVV7" target="_blank" rel="noopener noreferrer" className="bg-transparent hover:bg-white hover:text-primary text-white font-bold py-3 px-6 rounded-lg border-2 border-white transition duration-300 text-center">
                {t('hero.applyBtn')}
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center items-center">
            <div className="w-full max-w-lg rounded-lg shadow-lg overflow-hidden">
              <img 
                src={mainImage} 
                alt="일본 연금 상담 서비스" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
