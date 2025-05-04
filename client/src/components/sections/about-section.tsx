import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Check } from 'lucide-react';

export function AboutSection() {
  const { t } = useTranslation();

  const eligibilityCriteria = [
    'about.eligibility.foreigner',
    'about.eligibility.sixMonths',
    'about.eligibility.noJapanAddress',
    'about.eligibility.noPensionRights',
    'about.eligibility.twoYears'
  ];

  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">{t('about.title')}</h2>
          <p className="text-lg text-[#A9A9A9] max-w-2xl mx-auto">
            {t('about.description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <svg 
              viewBox="0 0 700 500" 
              xmlns="http://www.w3.org/2000/svg"
              className="rounded-lg shadow-lg w-full"
            >
              {/* 배경 */}
              <rect width="100%" height="100%" fill="#f7f7f7" />
              <rect width="100%" height="100%" fill="#f0f8ff" opacity="0.6" />
              
              {/* 연금수첩 */}
              <g transform="translate(250, 100)">
                {/* 수첩 커버 */}
                <rect x="0" y="0" width="200" height="280" rx="5" fill="#003366" />
                <rect x="10" y="10" width="180" height="260" rx="3" fill="#004080" />
                
                {/* 수첩 표지 제목 */}
                <text x="100" y="50" textAnchor="middle" fontFamily="Arial" fontSize="20" fontWeight="bold" fill="white">年金手帳</text>
                <text x="100" y="80" textAnchor="middle" fontFamily="Arial" fontSize="16" fill="white">연금수첩</text>
                
                {/* 일본 국기 심볼 */}
                <circle cx="100" cy="130" r="30" fill="white" />
                <circle cx="100" cy="130" r="20" fill="#bc002d" />
                
                {/* 정부 마크 */}
                <path d="M70,180 L130,180 L130,220 L70,220 Z" fill="#ffdb58" opacity="0.8" />
                <text x="100" y="205" textAnchor="middle" fontFamily="Arial" fontSize="12" fill="#003366">日本厚生年金</text>
                
                {/* 수첩 페이지 표현 */}
                <rect x="190" y="20" width="10" height="240" rx="1" fill="#e0e0e0" />
                <rect x="195" y="25" width="3" height="230" fill="#d0d0d0" />
              </g>
              
              {/* 엔화 지폐 */}
              <g transform="translate(350, 250) rotate(15)">
                <rect x="0" y="0" width="220" height="100" rx="5" fill="#b2d8b2" />
                <rect x="5" y="5" width="210" height="90" rx="3" fill="#97c397" />
                <circle cx="50" cy="50" r="35" fill="#e0f0e0" />
                <text x="160" y="60" textAnchor="end" fontFamily="Arial" fontSize="40" fontWeight="bold" fill="#004d00">¥</text>
                <text x="180" y="60" textAnchor="end" fontFamily="Arial" fontSize="30" fontWeight="bold" fill="#004d00">10000</text>
              </g>
              
              {/* 동전들 */}
              <circle cx="200" cy="350" r="30" fill="#e6e6e6" stroke="#c0c0c0" strokeWidth="3" />
              <circle cx="200" cy="350" r="25" fill="#f0f0f0" />
              <text x="200" y="355" textAnchor="middle" fontFamily="Arial" fontSize="14" fontWeight="bold" fill="#444">¥100</text>
              
              <circle cx="160" cy="380" r="25" fill="#ffd700" stroke="#daa520" strokeWidth="2" />
              <text x="160" y="385" textAnchor="middle" fontFamily="Arial" fontSize="12" fontWeight="bold" fill="#aa6c39">¥500</text>
              
              <circle cx="230" cy="390" r="20" fill="#e6e6e6" stroke="#c0c0c0" strokeWidth="2" />
              <text x="230" y="395" textAnchor="middle" fontFamily="Arial" fontSize="10" fontWeight="bold" fill="#444">¥50</text>
              
              {/* 타이틀 텍스트 */}
              <text x="350" y="50" textAnchor="middle" fontFamily="Arial" fontSize="24" fontWeight="bold" fill="#003366">일본 연금 반환금과 엔화</text>
            </svg>
          </div>
          <div className="space-y-6">
            <Card className="bg-[#F5F5F5] border-l-4 border-primary">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{t('about.eligibilityTitle')}</h3>
                <ul className="space-y-2 text-[#A9A9A9]">
                  {eligibilityCriteria.map((criteria, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-1" />
                      <span>{t(criteria)}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">{t('about.notesTitle')}</h3>
              <p className="text-[#A9A9A9] mb-4">
                {t('about.note1')}
              </p>
              <p className="text-[#A9A9A9]">
                {t('about.note2')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
