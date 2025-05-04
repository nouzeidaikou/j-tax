import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, FileText } from 'lucide-react';

export function TaxRefundSection() {
  const { t } = useTranslation();

  // 직접 텍스트를 사용해 자격과 서류 정보 정의
  const eligibilityCriteria = ['탈퇴일시금 환급절차를 종료하신 분'];

  const requiredDocuments = [
    '탈퇴일시금지급결정통지서',
    '여권사본',
    '납세관리인 신청서'
  ];

  return (
    <section id="tax-refund" className="py-16 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">{t('taxRefund.title')}</h2>
          <p className="text-lg text-[#A9A9A9] max-w-2xl mx-auto">
            {t('taxRefund.description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white shadow-lg md:col-span-2">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">{t('taxRefund.processTitle')}</h3>
              <p className="text-[#A9A9A9] mb-6">
                {t('taxRefund.processDescription')}
              </p>
              
              <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-6 mb-6">
                <div className="text-center p-4 bg-[#F5F5F5] rounded-lg w-full md:w-1/2">
                  <p className="text-[#A9A9A9] mb-2">{t('taxRefund.lumpSum')}</p>
                  <p className="text-2xl font-bold text-foreground mb-2">1,000,000{t('calculator.currency')}</p>
                  <p className="text-sm text-[#A9A9A9]">{t('taxRefund.exampleAmount')}</p>
                </div>
                <div className="text-center">
                  <ArrowRight className="h-8 w-8 mx-auto text-primary" />
                </div>
                <div className="text-center p-4 bg-[#F5F5F5] rounded-lg w-full md:w-1/2">
                  <p className="text-[#A9A9A9] mb-2">{t('taxRefund.withholdingAmount')} (20.42%)</p>
                  <p className="text-2xl font-bold text-foreground mb-2">204,200{t('calculator.currency')}</p>
                  <p className="text-sm text-[#A9A9A9]">{t('taxRefund.afterWithholding')}: 795,800{t('calculator.currency')}</p>
                </div>
              </div>
              
              <div className="p-4 bg-primary bg-opacity-10 rounded-lg">
                <h4 className="text-lg font-bold text-primary mb-2">{t('taxRefund.refundableAmount')}</h4>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-[#A9A9A9]">{t('taxRefund.withholding')}:</p>
                    <p className="text-[#A9A9A9]">{t('taxRefund.taxableAmount')} (10%):</p>
                    <p className="font-bold text-foreground">{t('taxRefund.refundableAmount')}:</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[#A9A9A9]">204,200{t('calculator.currency')}</p>
                    <p className="text-[#A9A9A9]">100,000{t('calculator.currency')}</p>
                    <p className="font-bold text-primary">104,200{t('calculator.currency')}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">{t('taxRefund.eligibilityTitle')}</h3>
              <ul className="space-y-4">
                {eligibilityCriteria.map((criteria, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                    <span className="text-[#A9A9A9]">{criteria}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <h4 className="font-bold text-foreground mb-2">{t('taxRefund.documentsTitle')}</h4>
                <ul className="space-y-2 text-[#A9A9A9]">
                  {requiredDocuments.map((document, index) => (
                    <li key={index} className="flex items-start">
                      <FileText className="h-5 w-5 text-secondary mr-2" />
                      <span>{document}</span>
                    </li>
                  ))}
                </ul>
                
                <a href="https://forms.gle/7tQ5xaLqSQPFXsVV7" target="_blank" rel="noopener noreferrer" className="block mt-6">
                  <Button className="w-full bg-primary hover:bg-secondary text-white font-bold transition duration-300">
                    지금 바로 신청하기
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
