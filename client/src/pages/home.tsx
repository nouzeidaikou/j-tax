import { useEffect } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero-section';
import { CalculatorSection } from '@/components/sections/calculator-section';
import { AboutSection } from '@/components/sections/about-section';
import { TaxRefundSection } from '@/components/sections/tax-refund-section';
import { ProcessSection } from '@/components/sections/process-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { FAQSection } from '@/components/sections/faq-section';
import { ContactSection } from '@/components/sections/contact-section';

export default function Home() {
  useEffect(() => {
    // Set meta tags for SEO
    document.title = '일본연금대행 | 일본 후생연금 탈퇴일시금 신청 전문';
    
    // Create meta description element
    const metaDescription = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    metaDescription.setAttribute('content', '일본 후생연금 탈퇴일시금 및 소득세 환급 전문 대행 서비스. 일본에서 한국으로 귀국한 분들을 위한 연금 환급 계산 및 신청 대행.');
    
    // Create meta keywords element
    const metaKeywords = document.querySelector('meta[name="keywords"]') || document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    metaKeywords.setAttribute('content', '일본 후생연금 탈퇴일시금, 일본 연금 환급, 일본 소득세 환급, 탈퇴일시금 대행, 연금 환급 신청');
    
    // Add meta tags to head if they don't exist
    if (!document.querySelector('meta[name="description"]')) {
      document.head.appendChild(metaDescription);
    }
    if (!document.querySelector('meta[name="keywords"]')) {
      document.head.appendChild(metaKeywords);
    }
    
    // Add structured data for SEO
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      'name': '일본 후생연금 탈퇴일시금 신청 대행',
      'description': '일본 후생연금 탈퇴일시금 및 소득세 환급 전문 대행 서비스',
      'provider': {
        '@type': 'Organization',
        'name': '일본연금대행',
        'telephone': '02-123-4567',
        'email': 'info@japanpension.kr',
        'address': {
          '@type': 'PostalAddress',
          'addressCountry': 'KR',
          'addressLocality': '서울특별시 강남구',
          'streetAddress': '테헤란로 123, 4층'
        }
      },
      'areaServed': {
        '@type': 'Country',
        'name': '대한민국'
      },
      'serviceType': '연금 환급 신청 대행'
    };
    
    const scriptElement = document.createElement('script');
    scriptElement.type = 'application/ld+json';
    scriptElement.text = JSON.stringify(structuredData);
    
    if (!document.querySelector('script[type="application/ld+json"]')) {
      document.head.appendChild(scriptElement);
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (!targetId || targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Adjust for header height
          behavior: 'smooth'
        });
      });
    });
    
    // Cleanup
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function (e) {});
      });
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <CalculatorSection />
        <AboutSection />
        <TaxRefundSection />
        <ProcessSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
