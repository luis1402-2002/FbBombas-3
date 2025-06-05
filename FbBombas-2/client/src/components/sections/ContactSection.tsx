import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../../hooks/use-scroll-animation";
import { useLanguage } from "@/contexts/LanguageContext";
import { contactInfo } from "../../data/servicesData";
import { ContactFormValues } from "../../types";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  Building2,
  User,
  FileText,
  Gauge,
  Thermometer,
  Droplets
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  nome: z.string().min(3, { message: "Nome deve ter pelo menos 3 caracteres" }),
  empresa: z.string().min(2, { message: "Empresa é obrigatória" }),
  email: z.string().email({ message: "Email inválido" }),
  telefone: z.string().min(8, { message: "Telefone inválido" }),
  modelo: z.string().optional(),
  vazao: z.string().optional(),
  altura: z.string().optional(),
  fluido: z.string().optional(),
  temperatura: z.string().optional(),
  mensagem: z.string().optional(),
  consentimento: z.boolean().refine(val => val === true, {
    message: "Você deve concordar com a política de privacidade"
  })
});

const ContactSection = () => {
  const { t } = useLanguage();
  
  return (
    <section id="contato" className="relative pt-12 pb-8 sm:pt-16 sm:pb-10 md:pt-20 md:pb-12 lg:pt-24 lg:pb-16">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader />
        
        <div className="mt-12 md:mt-16">
          {/* Form First */}
          <div className="mb-12 md:mb-16">
            <ContactForm />
          </div>
          
          {/* Contact Info Below */}
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};

const SectionHeader = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      className="text-center max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="w-20 h-1 bg-[#E30613] mx-auto mb-8"></div>
      <h2 className="font-garamond text-4xl md:text-5xl text-azul-profundo dark:text-white mb-6 leading-tight">
        {t('contact.title', 'Entre em Contato')}
      </h2>
      <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
        {t('contact.subtitle', 'Estamos prontos para atender suas necessidades')}
      </p>
    </motion.div>
  );
};

const ContactForm = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { t } = useLanguage();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      nome: "",
      empresa: "",
      email: "",
      telefone: "",
      modelo: "",
      vazao: "",
      altura: "",
      fluido: "",
      temperatura: "",
      mensagem: "",
      consentimento: false
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: t('contact.form.success_title', 'Formulário enviado com sucesso!'),
        description: t('contact.form.success_message', 'Em breve entraremos em contato.'),
        variant: "default",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Erro ao enviar formulário",
        description: "Por favor, tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      ref={ref}
      className="max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700/50 p-6 sm:p-8 md:p-10">
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Personal Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <FormField
                control={form.control}
                name="nome"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2 text-slate-700 dark:text-slate-200 font-medium">
                      <User className="h-4 w-4 text-[#E30613]" />
                      {t('contact.form.name', 'Nome')}*
                    </FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        className="bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-600 focus:border-[#E30613] dark:focus:border-[#E30613] focus:ring-2 focus:ring-[#E30613]/20 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all rounded-lg" 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="empresa"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2 text-slate-700 dark:text-slate-200 font-medium">
                      <Building2 className="h-4 w-4 text-[#E30613]" />
                      {t('contact.form.company', 'Empresa')}*
                    </FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        className="bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-600 focus:border-[#E30613] dark:focus:border-[#E30613] focus:ring-2 focus:ring-[#E30613]/20 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all rounded-lg" 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2 text-slate-700 dark:text-slate-200 font-medium">
                      <Mail className="h-4 w-4 text-[#E30613]" />
                      {t('contact.form.email', 'E-mail')}*
                    </FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        type="email"
                        className="bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-600 focus:border-[#E30613] dark:focus:border-[#E30613] focus:ring-2 focus:ring-[#E30613]/20 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all rounded-lg" 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="telefone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2 text-slate-700 dark:text-slate-200 font-medium">
                      <Phone className="h-4 w-4 text-[#E30613]" />
                      {t('contact.form.phone', 'Telefone')}*
                    </FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        type="tel"
                        className="bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-600 focus:border-[#E30613] dark:focus:border-[#E30613] focus:ring-2 focus:ring-[#E30613]/20 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all rounded-lg" 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            {/* Technical Specs Section */}
            <div className="border-t border-slate-200 dark:border-slate-700 pt-6">
              <h4 className="text-lg font-semibold text-slate-700 dark:text-slate-200 mb-4">
                {t('contact.form.technical_specs', 'Especificações Técnicas')}
              </h4>
              
              <div className="space-y-5">
                <FormField
                  control={form.control}
                  name="modelo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 text-slate-700 dark:text-slate-200 font-medium">
                        <FileText className="h-4 w-4 text-[#E30613]" />
                        {t('contact.form.pump_model', 'Modelo de Bomba')}
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-600 focus:border-[#E30613] dark:focus:border-[#E30613] focus:ring-2 focus:ring-[#E30613]/20 text-slate-900 dark:text-white rounded-lg">
                            <SelectValue placeholder={t('contact.form.select_model', 'Selecione um modelo')} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="FBCN">{t('contact.form.model_fbcn', 'Série FBCN Normalizada')}</SelectItem>
                          <SelectItem value="FBOT">{t('contact.form.model_fbot', 'Série FBOT Óleo Térmico')}</SelectItem>
                          <SelectItem value="FBE">{t('contact.form.model_fbe', 'Engrenagem Externa FBE')}</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="vazao"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2 text-slate-700 dark:text-slate-200 font-medium">
                          <Gauge className="h-4 w-4 text-[#E30613]" />
                          {t('contact.form.flow_rate', 'Vazão (m³/h)')}
                        </FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            className="bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-600 focus:border-[#E30613] dark:focus:border-[#E30613] focus:ring-2 focus:ring-[#E30613]/20 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all rounded-lg" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="altura"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2 text-slate-700 dark:text-slate-200 font-medium">
                          <Gauge className="h-4 w-4 text-[#E30613]" />
                          {t('contact.form.head', 'Altura Manométrica (m)')}
                        </FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            className="bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-600 focus:border-[#E30613] dark:focus:border-[#E30613] focus:ring-2 focus:ring-[#E30613]/20 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all rounded-lg" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="fluido"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2 text-slate-700 dark:text-slate-200 font-medium">
                          <Droplets className="h-4 w-4 text-[#E30613]" />
                          {t('contact.form.fluid', 'Fluido Bombeado')}
                        </FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            className="bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-600 focus:border-[#E30613] dark:focus:border-[#E30613] focus:ring-2 focus:ring-[#E30613]/20 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all rounded-lg" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="temperatura"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2 text-slate-700 dark:text-slate-200 font-medium">
                          <Thermometer className="h-4 w-4 text-[#E30613]" />
                          {t('contact.form.temperature', 'Temperatura (°C)')}
                        </FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            className="bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-600 focus:border-[#E30613] dark:focus:border-[#E30613] focus:ring-2 focus:ring-[#E30613]/20 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all rounded-lg" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
            
            {/* Message */}
            <FormField
              control={form.control}
              name="mensagem"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-slate-700 dark:text-slate-200 font-medium">
                    {t('contact.form.additional_info', 'Informações Adicionais')}
                  </FormLabel>
                  <FormControl>
                    <Textarea 
                      {...field} 
                      rows={4}
                      className="bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-600 focus:border-[#E30613] dark:focus:border-[#E30613] focus:ring-2 focus:ring-[#E30613]/20 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 resize-none transition-all rounded-lg" 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {/* Consent */}
            <FormField
              control={form.control}
              name="consentimento"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="mt-1 border-slate-400 dark:border-slate-600 data-[state=checked]:bg-[#E30613] data-[state=checked]:border-[#E30613]"
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-slate-600 dark:text-slate-400 text-sm font-normal">
                      {t('contact.form.privacy_consent', 'Concordo com a')} <a href="/privacidade" className="text-[#E30613] underline hover:text-[#c60411]">{t('contact.form.privacy_policy', 'Política de Privacidade')}</a> {t('contact.form.data_consent', 'e autorizo o tratamento dos meus dados pessoais para contato comercial.')}
                    </FormLabel>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            
            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-[#E30613] to-[#c60411] hover:from-[#c60411] hover:to-[#a6030f] text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>{t('contact.form.sending', 'Enviando...')}</>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  {t('contact.form.submit', 'Enviar Solicitação')}
                </>
              )}
            </Button>
          </form>
        </Form>
      </div>
    </motion.div>
  );
};

const ContactInfo = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useLanguage();

  const infoItems = [
    {
      icon: MapPin,
      title: t('contact.info.address', 'Endereço'),
      content: "Av. Adolpho João Traldi, 80 - Jacaré, Cabreúva - SP, 13318-000",
      link: "https://maps.google.com/?q=Av.+Adolpho+João+Traldi,+80+-+Jacaré,+Cabreúva+-+SP",
      linkType: "external"
    },
    {
      icon: Phone,
      title: t('contact.info.phone', 'Telefone'),
      content: contactInfo.phones,
      links: contactInfo.phones.map((phone: string) => ({
        text: phone,
        href: `tel:${phone.replace(/\D/g, '')}`
      }))
    },
    {
      icon: Mail,
      title: t('contact.info.email', 'E-mail'),
      content: contactInfo.emails,
      links: contactInfo.emails.map((email: string) => ({
        text: email,
        href: `mailto:${email}`
      }))
    },
    {
      icon: Clock,
      title: t('contact.info.hours', 'Horário de Atendimento'),
      content: contactInfo.hours
    }
  ];

  return (
    <motion.div
      ref={ref}
      className="max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
    >
      <div className="bg-azul-profundo dark:bg-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10">
        <h3 className="font-garamond text-2xl md:text-3xl text-white text-center mb-8">
          {t('contact.info.title', 'Informações de Contato')}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {infoItems.map((item, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                <item.icon className="h-6 w-6 text-white" />
              </div>
              
              <div className="flex-1">
                <h4 className="font-semibold text-white mb-2">
                  {item.title}
                </h4>
                
                <div className="text-white/90">
                  {item.link ? (
                    <a 
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors duration-200 underline decoration-white/30 hover:decoration-white"
                    >
                      {item.content}
                    </a>
                  ) : item.links ? (
                    <div className="space-y-1">
                      {item.links.map((link: any, i: number) => (
                        <a
                          key={i}
                          href={link.href}
                          className="block hover:text-white transition-colors duration-200 underline decoration-white/30 hover:decoration-white"
                        >
                          {link.text}
                        </a>
                      ))}
                    </div>
                  ) : typeof item.content === 'string' ? (
                    <p className="leading-relaxed">{item.content}</p>
                  ) : Array.isArray(item.content) ? (
                    <div className="space-y-1">
                      {item.content.map((line: string, i: number) => (
                        <p key={i} className="leading-relaxed">{line}</p>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ContactSection;