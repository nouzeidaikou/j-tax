import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

export function TestimonialsSection() {
  const { t } = useTranslation();

  const testimonials = [
    {
      rating: 5,
      text: 'testimonials.testimonial1.text',
      name: 'testimonials.testimonial1.name',
      location: 'testimonials.testimonial1.location',
      initial: '김'
    },
    {
      rating: 5,
      text: 'testimonials.testimonial2.text',
      name: 'testimonials.testimonial2.name',
      location: 'testimonials.testimonial2.location',
      initial: '박'
    },
    {
      rating: 5,
      text: 'testimonials.testimonial3.text',
      name: 'testimonials.testimonial3.name',
      location: 'testimonials.testimonial3.location',
      initial: '이'
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t('testimonials.title')}</h2>
          <p className="text-lg max-w-2xl mx-auto text-white text-opacity-80">
            {t('testimonials.description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white rounded-lg shadow-lg text-foreground">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-[#A9A9A9] mb-6">
                  "{t(testimonial.text)}"
                </p>
                <div className="flex items-center">
                  <div className="mr-4">
                    <div className={`w-12 h-12 ${index % 2 === 0 ? 'bg-primary' : 'bg-secondary'} rounded-full flex items-center justify-center text-white text-xl font-bold`}>
                      {testimonial.initial}
                    </div>
                  </div>
                  <div>
                    <p className="font-bold">{t(testimonial.name)}</p>
                    <p className="text-sm text-[#A9A9A9]">{t(testimonial.location)}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
