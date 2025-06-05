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
  Map, 
  Phone, 
  Mail, 
  Clock,
  CheckCircle,
  ArrowRight,
  BadgeCheck,
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
    <section id="contato" className="py-16 md:py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <ContactForm />
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
      className="text-center mb-16"
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="w-20 h-1 bg-[#E30613] mx-auto mb-8"></div>
      <h2 className="font-garamond text-4xl md:text-5xl text-azul-profundo dark:text-white mb-6 leading-tight">
        {t('contact.title', 'Entre em Contato')}
      </h2>
      <p className="text-lg text-cinza-titanio dark:text-prata/90 max-w-3xl mx-auto leading-relaxed">
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
      // In a real implementation, you would send this data to an API
      // For now, we'll just simulate a successful submission
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
      className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 md:p-8 border border-slate-200 dark:border-slate-700"
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h3 className="font-garamond text-2xl md:text-3xl text-azul-profundo dark:text-white mb-6">
        {t('contact.form.request_quote', 'Solicite um Orçamento')}
      </h3>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <FormField
              control={form.control}
              name="nome"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-azul-profundo dark:text-slate-300 font-medium">{t('contact.form.name', 'Nome')}*</FormLabel>
                  <FormControl>
                    <Input 
                      {...field} 
                      className="bg-slate-50 dark:bg-slate-700 border-slate-300 dark:border-slate-600 focus:border-[#E30613] dark:focus:border-[#E30613] focus:ring-1 focus:ring-[#E30613]/20 text-azul-profundo dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all" 
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
                  <FormLabel className="text-azul-profundo dark:text-slate-300 font-medium">{t('contact.form.company', 'Empresa')}*</FormLabel>
                  <FormControl>
                    <Input 
                      {...field} 
                      className="bg-slate-50 dark:bg-slate-700 border-slate-300 dark:border-slate-600 focus:border-[#E30613] dark:focus:border-[#E30613] focus:ring-1 focus:ring-[#E30613]/20 text-azul-profundo dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all" 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-azul-profundo dark:text-slate-300 font-medium">{t('contact.form.email', 'E-mail')}*</FormLabel>
                  <FormControl>
                    <Input 
                      {...field} 
                      type="email"
                      className="bg-slate-50 dark:bg-slate-700 border-slate-300 dark:border-slate-600 focus:border-[#E30613] dark:focus:border-[#E30613] focus:ring-1 focus:ring-[#E30613]/20 text-azul-profundo dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all" 
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
                  <FormLabel className="text-azul-profundo dark:text-slate-300 font-medium">{t('contact.form.phone', 'Telefone')}*</FormLabel>
                  <FormControl>
                    <Input 
                      {...field} 
                      type="tel"
                      className="bg-slate-50 dark:bg-slate-700 border-slate-300 dark:border-slate-600 focus:border-[#E30613] dark:focus:border-[#E30613] focus:ring-1 focus:ring-[#E30613]/20 text-azul-profundo dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all" 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="modelo"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-azul-profundo dark:text-slate-300 font-medium">{t('contact.form.pump_model', 'Modelo de Bomba')}</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger className="bg-slate-50 dark:bg-slate-700 border-slate-300 dark:border-slate-600 focus:border-[#E30613] dark:focus:border-[#E30613] focus:ring-1 focus:ring-[#E30613]/20 text-azul-profundo dark:text-white">
                      <SelectValue placeholder={t('contact.form.select_model', 'Selecione um modelo')} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="selecione">{t('contact.form.select_model', 'Selecione um modelo')}</SelectItem>
                    <SelectItem value="FBCN">{t('contact.form.model_fbcn', 'Série FBCN Normalizada')}</SelectItem>
                    <SelectItem value="FBOT">{t('contact.form.model_fbot', 'Série FBOT Óleo Térmico')}</SelectItem>
                    <SelectItem value="FBE">{t('contact.form.model_fbe', 'Engrenagem Externa FBE')}</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <FormField
              control={form.control}
              name="vazao"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-azul-profundo dark:text-slate-300 font-medium">{t('contact.form.flow_rate', 'Vazão (m³/h)')}</FormLabel>
                  <FormControl>
                    <Input 
                      {...field} 
                      className="bg-slate-50 dark:bg-slate-700 border-slate-300 dark:border-slate-600 focus:border-[#E30613] dark:focus:border-[#E30613] focus:ring-1 focus:ring-[#E30613]/20 text-azul-profundo dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all" 
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
                  <FormLabel className="text-azul-profundo dark:text-slate-300 font-medium">{t('contact.form.head', 'Altura Manométrica (m)')}</FormLabel>
                  <FormControl>
                    <Input 
                      {...field} 
                      className="bg-slate-50 dark:bg-slate-700 border-slate-300 dark:border-slate-600 focus:border-[#E30613] dark:focus:border-[#E30613] focus:ring-1 focus:ring-[#E30613]/20 text-azul-profundo dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all" 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <FormField
              control={form.control}
              name="fluido"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-azul-profundo dark:text-slate-300 font-medium">{t('contact.form.fluid', 'Fluido Bombeado')}</FormLabel>
                  <FormControl>
                    <Input 
                      {...field} 
                      className="bg-slate-50 dark:bg-slate-700 border-slate-300 dark:border-slate-600 focus:border-[#E30613] dark:focus:border-[#E30613] focus:ring-1 focus:ring-[#E30613]/20 text-azul-profundo dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all" 
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
                  <FormLabel className="text-azul-profundo dark:text-slate-300 font-medium">{t('contact.form.temperature', 'Temperatura (°C)')}</FormLabel>
                  <FormControl>
                    <Input 
                      {...field} 
                      className="bg-slate-50 dark:bg-slate-700 border-slate-300 dark:border-slate-600 focus:border-[#E30613] dark:focus:border-[#E30613] focus:ring-1 focus:ring-[#E30613]/20 text-azul-profundo dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 transition-all" 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          
          <FormField
            control={form.control}
            name="mensagem"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-azul-profundo dark:text-slate-300 font-medium">{t('contact.form.additional_info', 'Informações Adicionais')}</FormLabel>
                <FormControl>
                  <Textarea 
                    {...field} 
                    rows={4}
                    className="bg-slate-50 dark:bg-slate-700 border-slate-300 dark:border-slate-600 focus:border-[#E30613] dark:focus:border-[#E30613] focus:ring-1 focus:ring-[#E30613]/20 text-azul-profundo dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 resize-none transition-all" 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
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
                    {t('contact.form.privacy_consent', 'Concordo com a')} <a href="/privacidade" className="text-azul-profundo dark:text-[#E30613] underline hover:text-[#E30613] dark:hover:text-[#c60411]">{t('contact.form.privacy_policy', 'Política de Privacidade')}</a> {t('contact.form.data_consent', 'e autorizo o tratamento dos meus dados pessoais para contato comercial.')}
                  </FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          
          <Button
            type="submit"
            className="w-full bg-[#E30613] hover:bg-[#c60411] text-white font-medium py-3 px-8 rounded-md transition-all duration-200 shadow-md hover:shadow-lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? t('contact.form.sending', 'Enviando...') : t('contact.form.submit', 'Enviar Solicitação')}
          </Button>
        </form>
      </Form>
    </motion.div>
  );
};

const ContactInfo = () => {
  const { ref, isVisible } = useScrollAnimation();
  const { t } = useLanguage();

  const infoItems = [
    {
      icon: <Map className="text-white" />,
      title: t('contact.info.address', 'Endereço'),
      content: "Av. Adolpho João Traldi, 80 - Jacaré, Cabreúva - SP, 13318-000"
    },
    {
      icon: <Phone className="text-white" />,
      title: t('contact.info.phone', 'Telefone'),
      content: contactInfo.phones
    },
    {
      icon: <Mail className="text-white" />,
      title: t('contact.info.email', 'E-mail'),
      content: contactInfo.emails
    },
    {
      icon: <Clock className="text-white" />,
      title: t('contact.info.hours', 'Horário de Atendimento'),
      content: contactInfo.hours
    }
  ];

  return (
    <div>
      <motion.div
        ref={ref}
        className="bg-azul-profundo dark:bg-slate-800 rounded-lg shadow-lg p-6 md:p-8 mb-8"
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        <h3 className="font-garamond text-2xl text-white mb-6">
          {t('contact.info.title', 'Informações de Contato')}
        </h3>
        
        <div className="space-y-6">
          {infoItems.map((item, index) => (
            <div key={index} className="flex items-start">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">{item.title}</h4>
                {typeof item.content === 'string' ? (
                  <p className="text-white/80 text-sm">{item.content}</p>
                ) : Array.isArray(item.content) ? (
                  item.content.map((line: string, i: number) => (
                    <p key={i} className="text-white/80 text-sm">{line}</p>
                  ))
                ) : (
                  <p className="text-white/80 text-sm">{String(item.content)}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ContactSection;