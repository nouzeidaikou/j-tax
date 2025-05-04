import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  ClipboardList, 
  FileText,
  ScrollText 
} from 'lucide-react';

export function ProcessSection() {
  const { t } = useTranslation();

  const steps = [
    {
      number: 1,
      title: 'process.steps.step1.title',
      description: 'process.steps.step1.description'
    },
    {
      number: 2,
      title: 'process.steps.step2.title',
      description: 'process.steps.step2.description'
    },
    {
      number: 3,
      title: 'process.steps.step3.title',
      description: 'process.steps.step3.description'
    },
    {
      number: 4,
      title: 'process.steps.step4.title',
      description: 'process.steps.step4.description'
    },
    {
      number: 5,
      title: 'process.steps.step5.title',
      description: 'process.steps.step5.description'
    }
  ];

  const lumpSumDocuments = [
    'process.documents.lumpSum.form',
    'process.documents.lumpSum.passport',
    'process.documents.lumpSum.pensionBook',
    'process.documents.lumpSum.noAddress',
    'process.documents.lumpSum.bankAccount'
  ];

  const taxRefundDocuments = [
    'process.documents.taxRefund.form',
    'process.documents.taxRefund.residence',
    'process.documents.taxRefund.statement',
    'process.documents.taxRefund.authorization',
    'process.documents.taxRefund.bankAccount'
  ];

  return (
    <section id="process" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">{t('process.title')}</h2>
          <p className="text-lg text-[#A9A9A9] max-w-2xl mx-auto">
            {t('process.description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <svg 
              viewBox="0 0 700 500" 
              xmlns="http://www.w3.org/2000/svg"
              className="rounded-lg shadow-lg w-full"
            >
              <rect width="100%" height="100%" fill="#f8f9fa" />
              
              {/* Document stack */}
              <rect x="180" y="120" width="340" height="260" rx="5" fill="#e9ecef" />
              <rect x="200" y="100" width="340" height="260" rx="5" fill="#f8f9fa" stroke="#4682B4" strokeWidth="2" />
              <rect x="220" y="80" width="340" height="260" rx="5" fill="white" stroke="#1E90FF" strokeWidth="2" />
              
              {/* Document contents */}
              <line x1="250" y1="130" x2="530" y2="130" stroke="#1E90FF" strokeWidth="2" />
              <line x1="250" y1="160" x2="530" y2="160" stroke="#1E90FF" strokeWidth="1" />
              <line x1="250" y1="190" x2="530" y2="190" stroke="#1E90FF" strokeWidth="1" />
              <line x1="250" y1="220" x2="530" y2="220" stroke="#1E90FF" strokeWidth="1" />
              <line x1="250" y1="250" x2="430" y2="250" stroke="#1E90FF" strokeWidth="1" />
              
              {/* Stamp/seal */}
              <circle cx="500" cy="240" r="40" fill="#1E90FF" opacity="0.2" />
              <circle cx="500" cy="240" r="30" fill="none" stroke="#1E90FF" strokeWidth="2" />
              <text x="480" y="245" fontFamily="Arial" fontSize="16" fill="#1E90FF">承認</text>
              
              {/* Pen */}
              <rect x="400" y="300" width="100" height="10" rx="5" fill="#4682B4" />
              <polygon points="500,305 530,315 530,295" fill="#4682B4" />
            </svg>
          </div>
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-foreground">{t('process.applicationTitle')}</h3>
            
            <div className="relative">
              {steps.map((step, index) => (
                <div className="flex" key={index}>
                  <div className="flex flex-col items-center mr-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold">
                      {step.number}
                    </div>
                    {index < steps.length - 1 && <div className="h-full w-0.5 bg-primary"></div>}
                  </div>
                  <div className={index < steps.length - 1 ? "pb-8" : ""}>
                    <h4 className="text-lg font-bold text-foreground mb-2">{t(step.title)}</h4>
                    <p className="text-[#A9A9A9]">
                      {t(step.description)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <Card className="bg-[#F5F5F5] rounded-lg">
          <CardContent className="p-6 md:p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">{t('process.documentsTitle')}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold text-foreground mb-4 flex items-center">
                  <ClipboardList className="h-6 w-6 text-primary mr-2" />
                  {t('process.lumpSumDocsTitle')}
                </h4>
                <ul className="space-y-3">
                  {lumpSumDocuments.map((doc, index) => (
                    <li key={index} className="flex items-center p-3 bg-white rounded shadow-sm">
                      <Checkbox id={`lumpsum-${index}`} className="h-5 w-5 text-primary rounded" />
                      <label htmlFor={`lumpsum-${index}`} className="ml-3 text-[#A9A9A9]">
                        {t(doc)}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-foreground mb-4 flex items-center">
                  <ScrollText className="h-6 w-6 text-primary mr-2" />
                  {t('process.taxRefundDocsTitle')}
                </h4>
                <ul className="space-y-3">
                  {taxRefundDocuments.map((doc, index) => (
                    <li key={index} className="flex items-center p-3 bg-white rounded shadow-sm">
                      <Checkbox id={`taxrefund-${index}`} className="h-5 w-5 text-primary rounded" />
                      <label htmlFor={`taxrefund-${index}`} className="ml-3 text-[#A9A9A9]">
                        {t(doc)}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
