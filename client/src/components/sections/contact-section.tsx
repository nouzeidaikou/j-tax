import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation } from '@tanstack/react-query';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { insertConsultationSchema } from '@shared/schema';
import { z } from 'zod';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { 
  Phone,
  Mail,
  MapPin,
  Check
} from 'lucide-react';

export function ContactSection() {
  const { t } = useTranslation();
  const { toast } = useToast();

  // Extend the schema with validation
  const contactFormSchema = insertConsultationSchema.extend({
    agree: z.literal(true, {
      errorMap: () => ({ message: t('contact.form.agreeRequired') }),
    }),
  });

  type ContactFormValues = z.infer<typeof contactFormSchema>;

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      workPeriod: '',
      message: '',
      agree: false,
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: Omit<ContactFormValues, 'agree'>) => {
      return apiRequest('POST', '/api/consultations', data);
    },
    onSuccess: () => {
      toast({
        title: t('contact.form.successTitle'),
        description: t('contact.form.successMessage'),
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: t('contact.form.errorTitle'),
        description: error instanceof Error ? error.message : t('contact.form.errorMessage'),
        variant: 'destructive',
      });
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    // Remove the agree field as it's only for form validation, not the API
    const { agree, ...submitData } = data;
    mutation.mutate(submitData);
  };

  const features = [
    'contact.features.free',
    'contact.features.combined',
    'contact.features.documents',
    'contact.features.dedicated',
    'contact.features.updates'
  ];

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">{t('contact.title')}</h2>
          <p className="text-lg text-[#A9A9A9] max-w-2xl mx-auto">
            {t('contact.description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-[#F5F5F5]">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">{t('contact.form.title')}</h3>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="block text-[#A9A9A9] font-medium mb-2">
                    {t('contact.form.name')}
                  </Label>
                  <Input
                    id="name"
                    placeholder={t('contact.form.namePlaceholder')}
                    className="w-full p-3 border border-[#A9A9A9] rounded-lg focus:ring-2 focus:ring-primary"
                    {...form.register('name')}
                  />
                  {form.formState.errors.name && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.name.message}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="email" className="block text-[#A9A9A9] font-medium mb-2">
                    {t('contact.form.email')}
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={t('contact.form.emailPlaceholder')}
                    className="w-full p-3 border border-[#A9A9A9] rounded-lg focus:ring-2 focus:ring-primary"
                    {...form.register('email')}
                  />
                  {form.formState.errors.email && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="phone" className="block text-[#A9A9A9] font-medium mb-2">
                    {t('contact.form.phone')}
                  </Label>
                  <Input
                    id="phone"
                    placeholder={t('contact.form.phonePlaceholder')}
                    className="w-full p-3 border border-[#A9A9A9] rounded-lg focus:ring-2 focus:ring-primary"
                    {...form.register('phone')}
                  />
                  {form.formState.errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.phone.message}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="workPeriod" className="block text-[#A9A9A9] font-medium mb-2">
                    {t('contact.form.workPeriod')}
                  </Label>
                  <Input
                    id="workPeriod"
                    placeholder={t('contact.form.workPeriodPlaceholder')}
                    className="w-full p-3 border border-[#A9A9A9] rounded-lg focus:ring-2 focus:ring-primary"
                    {...form.register('workPeriod')}
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="block text-[#A9A9A9] font-medium mb-2">
                    {t('contact.form.message')}
                  </Label>
                  <Textarea
                    id="message"
                    rows={4}
                    placeholder={t('contact.form.messagePlaceholder')}
                    className="w-full p-3 border border-[#A9A9A9] rounded-lg focus:ring-2 focus:ring-primary"
                    {...form.register('message')}
                  />
                </div>
                
                <div className="flex items-start">
                  <Checkbox 
                    id="agree" 
                    className="mt-1 h-4 w-4 text-primary rounded"
                    {...form.register('agree')}
                  />
                  <Label 
                    htmlFor="agree" 
                    className="ml-2 text-sm text-[#A9A9A9]"
                  >
                    {t('contact.form.agreement')}
                  </Label>
                </div>
                {form.formState.errors.agree && (
                  <p className="text-red-500 text-sm">{form.formState.errors.agree.message}</p>
                )}
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-secondary text-white font-bold py-3 px-4 rounded-lg transition duration-300"
                  disabled={mutation.isPending}
                >
                  {mutation.isPending ? t('contact.form.submitting') : t('contact.form.submit')}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div>
            <Card className="bg-white border border-[#F5F5F5] mb-8">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">{t('contact.info.title')}</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-primary mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">{t('contact.info.phone')}</p>
                      <p className="text-[#A9A9A9]">02-123-4567 ({t('contact.info.hours')})</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-primary mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">{t('contact.info.email')}</p>
                      <p className="text-[#A9A9A9]">info@japanpension.kr</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-primary mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground">{t('contact.info.office')}</p>
                      <p className="text-[#A9A9A9]">{t('contact.info.address')}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-lg p-6 md:p-8">
              <h3 className="text-xl font-bold mb-4">{t('contact.features.title')}</h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 mr-2 mt-0.5" />
                    <span>{t(feature)}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <a href="#" className="block bg-white text-primary hover:bg-[#F5F5F5] hover:text-secondary font-bold py-3 px-4 rounded-lg text-center transition duration-300">
                  {t('contact.kakaoBtn')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
