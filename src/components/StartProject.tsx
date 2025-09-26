import { motion } from 'motion/react';
import { useState } from 'react';
import { IMaskInput } from 'react-imask';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { 
  Rocket, 
  MessageSquare, 
  Code, 
  CheckCircle, 
  ArrowRight,
  Calendar,
  Target,
  Zap
} from 'lucide-react';

const processSteps = [
  {
    icon: MessageSquare,
    title: 'Консультация',
    description: 'Обсуждаем ваши идеи и требования',
    duration: '1-2 дня'
  },
  {
    icon: Target,
    title: 'Планирование',
    description: 'Создаем техническое задание и план проекта',
    duration: '3-5 дней'
  },
  {
    icon: Code,
    title: 'Разработка',
    description: 'Итеративная разработка с регулярными демо',
    duration: '2-12 недель'
  },
  {
    icon: CheckCircle,
    title: 'Запуск',
    description: 'Тестирование, деплой и передача проекта',
    duration: '1-2 недели'
  }
];

export function StartProject() {
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<null | { type: 'success' | 'error'; message: string }>(null);
  const [phone, setPhone] = useState('');

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setResult(null);

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);

      const accessKey = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;
      if (!accessKey) {
        setResult({ type: 'error', message: 'Email service is not configured. Please set VITE_WEB3FORMS_KEY.' });
        setSubmitting(false);
        return;
      }

      // validate phone if provided
      const phoneStr = (formData.get('phone') as string) || '';
      const phoneOk = phoneStr === '' || /^\+7 7\d{2} \d{3} \d{2} \d{2}$/.test(phoneStr);
      if (!phoneOk) {
        setResult({ type: 'error', message: 'Пожалуйста, введите телефон в формате +7 7xx xxx xx xx' });
        setSubmitting(false);
        return;
      }

      formData.append('access_key', accessKey);
      formData.append('subject', 'Новое обращение на NomadCodes');
      // Set the primary recipient. Web3Forms will deliver to addresses configured in dashboard; this helps ensure correct delivery.
      formData.append('to', 'info@nomadcodes.kz');
      // Helpful fields for the email
      const name = (formData.get('name') as string) || '';
      const email = (formData.get('email') as string) || '';
      const phone = (formData.get('phone') as string) || '';
      const project = (formData.get('project') as string) || '';
      const details = (formData.get('details') as string) || '';

      formData.append('from_name', name);
      formData.append('from_email', email);
      formData.append('reply_to', email);

      // Compose a Russian email body including phone and other fields
      const composed = `
Новая заявка на проект

Имя: ${name}
Email: ${email}
Телефон: ${phone}
Проект: ${project}

Сообщение:
${details}
`;
      formData.append('message', composed);

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      const json = await res.json();

      if (json.success) {
        setResult({ type: 'success', message: 'Спасибо! Мы свяжемся с вами в ближайшее время.' });
        form.reset();
        setPhone('');
      } else {
        setResult({ type: 'error', message: 'Не удалось отправить форму. Попробуйте позже.' });
      }
    } catch (err) {
      setResult({ type: 'error', message: 'Произошла ошибка при отправке. Попробуйте позже.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Начните свой проект
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            От идеи до запуска — мы сопровождаем ваш проект на каждом этапе. 
            Прозрачный процесс, фиксированные сроки, гарантированный результат.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Process Steps */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl mb-8">Как мы работаем</h3>
            
            <div className="space-y-6">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    className="flex gap-4"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center relative">
                        <Icon className="w-6 h-6 text-primary" />
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm">
                          {index + 1}
                        </div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4>{step.title}</h4>
                        <Badge variant="outline" className="text-xs">
                          {step.duration}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div 
              className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-accent/10 rounded-xl border border-primary/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <Zap className="w-5 h-5 text-primary" />
                <h4>Гарантии качества</h4>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Соблюдение сроков или компенсация
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Полное сопровождение и профессиональная поддержки
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Исходный код и полная документация
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Project Types & Quick Form */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >

            {/* Quick Start Form */}
            <Card className="border-primary/20">
              <CardContent className="p-6">
                <h4 className="text-xl mb-4">Быстрый старт</h4>
                <p className="text-muted-foreground text-sm mb-6">
                  Расскажите нам о своей идее, и мы свяжемся с вами
                </p>
                
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input 
                      name="name"
                      placeholder="Ваше имя" 
                      className="bg-input-background border-border/50"
                    />
                    <Input 
                      type="email" 
                      name="email"
                      placeholder="Email" 
                      className="bg-input-background border-border/50"
                    />
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <IMaskInput
                      mask={'+7 700 000 00 00'}
                      value={phone}
                      onAccept={(val: string) => setPhone(val)}
                      inputMode="tel"
                      type="tel"
                      name="phone"
                      placeholder="+7 7xx xxx xx xx"
                      data-slot="input"
                      className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-input-background border-border/50"
                    />
                    <Input 
                      name="project"
                      placeholder="Название проекта/компании" 
                      className="bg-input-background border-border/50"
                    />
                  </div>
                  
                  <Textarea 
                    name="details"
                    placeholder="Кратко опишите вашу идею..." 
                    rows={3}
                    className="bg-input-background border-border/50 resize-none"
                  />
                  
                  <div className="flex flex-col gap-3">
                    <Button 
                      type="submit" 
                      className="w-full group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                      disabled={submitting}
                    >
                      <Rocket className="mr-2 w-4 h-4" />
                      {submitting ? 'Отправка...' : 'Начать проект'}
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    
                    {result && (
                      <div
                        className={
                          result.type === 'success'
                            ? 'text-sm text-green-600'
                            : 'text-sm text-red-600'
                        }
                      >
                        {result.message}
                      </div>
                    )}

                    <Button 
                      type="button"
                      variant="outline" 
                      className="w-full border-primary/20"
                      onClick={scrollToContact}
                    >
                      <Calendar className="mr-2 w-4 h-4" />
                      Забронировать консультацию
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}