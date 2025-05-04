import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  const { t } = useTranslation();

  const faqs = [
    {
      question: 'faq.questions.q1',
      answer: 'faq.answers.a1'
    },
    {
      question: 'faq.questions.q2',
      answer: 'faq.answers.a2'
    },
    {
      question: 'faq.questions.q3',
      answer: 'faq.answers.a3'
    },
    {
      question: 'faq.questions.q4',
      answer: 'faq.answers.a4'
    },
    {
      question: 'faq.questions.q5',
      answer: 'faq.answers.a5'
    }
  ];

  return (
    <section id="faq" className="py-16 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">{t('faq.title')}</h2>
          <p className="text-lg text-[#A9A9A9] max-w-2xl mx-auto">
            {t('faq.description')}
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index}
                value={`faq-${index}`} 
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <AccordionTrigger className="w-full px-6 py-4 text-left font-bold hover:bg-[#F5F5F5] transition-colors duration-200">
                  {t(faq.question)}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-[#A9A9A9] border-t">
                  {t(faq.answer)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-8 text-center">
            <p className="text-[#A9A9A9] mb-4">{t('faq.moreQuestions')}</p>
            <a href="#contact" className="text-primary hover:text-secondary font-medium">
              {t('faq.contactLink')} →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
