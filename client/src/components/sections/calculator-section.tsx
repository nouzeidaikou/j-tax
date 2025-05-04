import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function CalculatorSection() {
  const { t } = useTranslation();
  const [averageSalary, setAverageSalary] = useState<string>('');
  const [paymentMonths, setPaymentMonths] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);
  const [showResult, setShowResult] = useState<boolean>(false);

  const calculateRefund = () => {
    if (!averageSalary || !paymentMonths) {
      alert(t('calculator.errors.missingInputs'));
      return;
    }
    
    // Convert input to numbers
    const salary = parseFloat(averageSalary);
    const months = parseInt(paymentMonths);
    
    // Validate input
    if (isNaN(salary) || isNaN(months) || salary <= 0 || months <= 0) {
      alert(t('calculator.errors.invalidInputs'));
      return;
    }
    
    // Determine the payment rate
    let rate = 0;
    if (months >= 6 && months < 12) {
      rate = 0.5;
    } else if (months >= 12 && months < 18) {
      rate = 1.1;
    } else if (months >= 18 && months < 24) {
      rate = 1.6;
    } else if (months >= 24 && months < 30) {
      rate = 2.2;
    } else if (months >= 30 && months < 36) {
      rate = 2.7;
    } else if (months >= 36 && months < 42) {
      rate = 3.3;
    } else if (months >= 42 && months < 48) {
      rate = 3.8;
    } else if (months >= 48 && months < 54) {
      rate = 4.4;
    } else if (months >= 54 && months < 60) {
      rate = 4.9;
    } else if (months >= 60) {
      rate = 5.5;
    } else {
      alert(t('calculator.errors.minimumMonths'));
      return;
    }
    
    // Calculate the refund
    const calculatedResult = Math.round(salary * rate);
    setResult(calculatedResult);
    setShowResult(true);
  };

  const paymentRates = [
    { range: '6~12', months: 6, rate: 0.5 },
    { range: '12~18', months: 12, rate: 1.1 },
    { range: '18~24', months: 18, rate: 1.6 },
    { range: '24~30', months: 24, rate: 2.2 },
    { range: '30~36', months: 30, rate: 2.7 },
    { range: '36~42', months: 36, rate: 3.3 },
    { range: '42~48', months: 42, rate: 3.8 },
    { range: '48~54', months: 48, rate: 4.4 },
    { range: '54~60', months: 54, rate: 4.9 },
    { range: '60+', months: 60, rate: 5.5 },
  ];

  return (
    <section id="calculator" className="py-16 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-foreground mb-4">{t('calculator.title')}</h2>
          <p className="text-lg text-[#A9A9A9] max-w-2xl mx-auto">
            {t('calculator.description')}
          </p>
        </div>
        
        <Card className="max-w-3xl mx-auto bg-white shadow-lg">
          <CardContent className="p-6 md:p-8">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="averageSalary" className="block text-[#A9A9A9] font-medium mb-2">
                    {t('calculator.averageSalary')} (¥)
                  </Label>
                  <Input
                    type="number"
                    id="averageSalary"
                    value={averageSalary}
                    onChange={(e) => setAverageSalary(e.target.value)}
                    placeholder={t('calculator.salaryPlaceholder')}
                    className="w-full p-3 border border-[#A9A9A9] rounded-lg focus:ring-2 focus:ring-primary"
                  />
                  <p className="text-sm text-[#A9A9A9] mt-1">{t('calculator.salaryHelp')}</p>
                </div>
                <div>
                  <Label htmlFor="paymentMonths" className="block text-[#A9A9A9] font-medium mb-2">
                    {t('calculator.paymentMonths')}
                  </Label>
                  <Input
                    type="number"
                    id="paymentMonths"
                    value={paymentMonths}
                    onChange={(e) => setPaymentMonths(e.target.value)}
                    placeholder={t('calculator.monthsPlaceholder')}
                    className="w-full p-3 border border-[#A9A9A9] rounded-lg focus:ring-2 focus:ring-primary"
                  />
                  <p className="text-sm text-[#A9A9A9] mt-1">{t('calculator.monthsHelp')}</p>
                </div>
              </div>
              
              <div className="text-center">
                <Button 
                  onClick={calculateRefund}
                  className="bg-primary hover:bg-secondary text-white font-bold py-3 px-8 rounded-lg transition duration-300"
                >
                  {t('calculator.calculateBtn')}
                </Button>
              </div>
              
              {showResult && (
                <div className="mt-8 p-6 bg-[#F5F5F5] rounded-lg border-l-4 border-primary">
                  <h3 className="text-xl font-bold text-foreground mb-2">{t('calculator.resultTitle')}</h3>
                  <p className="text-3xl font-bold text-primary">
                    {result?.toLocaleString()} {t('calculator.currency')}
                  </p>
                  <p className="text-[#A9A9A9] mt-2">{t('calculator.disclaimer')}</p>
                  <div className="mt-4">
                    <a href="https://forms.gle/7tQ5xaLqSQPFXsVV7" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-secondary font-medium flex items-center">
                      <span>지금 바로 신청하기</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              )}
            </div>
            
            <div className="mt-8">
              <h3 className="text-lg font-bold text-foreground mb-4">{t('calculator.rateTableTitle')}</h3>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader className="bg-primary text-white">
                    <TableRow>
                      <TableHead className="text-left border">{t('calculator.table.period')}</TableHead>
                      <TableHead className="text-left border">{t('calculator.table.months')}</TableHead>
                      <TableHead className="text-left border">{t('calculator.table.rate')}</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {paymentRates.map((row, index) => (
                      <TableRow key={index} className={index % 2 === 0 ? "bg-[#F5F5F5]" : ""}>
                        <TableCell className="py-2 px-4 border">
                          {t('calculator.table.monthRange', { range: row.range })}
                        </TableCell>
                        <TableCell className="py-2 px-4 border">{row.months}</TableCell>
                        <TableCell className="py-2 px-4 border">{row.rate}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
