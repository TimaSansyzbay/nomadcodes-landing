import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { Smartphone, Globe, Brain, Database } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Веб-разработка',
    description: 'Современные веб-приложения с использованием React, Next.js и передовых технологий',
    features: ['Responsive дизайн', 'SEO оптимизация', 'Высокая производительность']
  },
  {
    icon: Smartphone,
    title: 'Мобильная разработка',
    description: 'Нативные и кроссплатформенные мобильные приложения для iOS и Android',
    features: ['React Native', 'Flutter', 'PWA решения']
  },
  {
    icon: Brain,
    title: 'ИИ и машинное обучение',
    description: 'Интеграция искусственного интеллекта для автоматизации бизнес-процессов',
    features: ['Чат-боты', 'Анализ данных', 'Автоматизация']
  },
  {
    icon: Database,
    title: 'Backend разработка',
    description: 'Масштабируемые серверные решения и API для ваших проектов',
    features: ['Микросервисы', 'REST API']
  }
];

export function Services() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-accent/10">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Наши услуги
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Полный спектр IT-услуг для создания и развития вашего цифрового бизнеса
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20 bg-gradient-to-br from-background to-accent/5">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl mb-2">{service.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}