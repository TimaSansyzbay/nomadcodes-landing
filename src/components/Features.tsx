import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { CheckCircle, Users, Clock, Target } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Команда экспертов',
    description: 'Опытные разработчики'
  },
  {
    icon: Clock,
    title: 'Быстрое выполнение',
    description: 'Соблюдаем сроки и поставляем результат вовремя'
  },
  {
    icon: Target,
    title: 'Индивидуальный подход',
    description: 'Каждое решение создается под конкретные задачи клиента'
  },
  {
    icon: CheckCircle,
    title: 'Качество гарантировано',
    description: 'Тестирование, code review и долгосрочная поддержка'
  }
];

export function Features() {
  return (
    <section className="py-24 bg-gradient-to-b from-accent/10 to-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <h2 className="text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Почему выбирают нас
              </h2>
              <p className="text-xl text-muted-foreground">
                Мы не просто пишем код — мы создаем цифровые решения, 
                которые трансформируют бизнесы и меняют индустрии.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    className="flex gap-4"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div 
              className="mt-12 p-6 bg-gradient-to-r from-primary/5 to-accent/10 rounded-xl border border-primary/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="grid grid-cols-1 gap-4 text-center">
                <div>
                  <div className="text-2xl text-primary mb-1">100%</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right content - Images */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid gap-4">
              <div className="relative rounded-xl overflow-hidden">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1477865300989-86ba6d4adcab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdGVjaG5vbG9neSUyMHRlYW18ZW58MXx8fHwxNzU4ODcyOTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Команда разработчиков"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              </div>
              
              <div className="relative rounded-xl overflow-hidden">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1753715613457-63127ec40824?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBwcm9ncmFtbWluZyUyMHNldHVwfGVufDF8fHx8MTc1ODg3MjkyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Современная разработка"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/30 to-transparent" />
              </div>
            </div>

            {/* Floating stat card */}
            <motion.div 
              className="absolute top-8 right-8 bg-background/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-border"
              animate={{ 
                y: [-5, 5, -5],
                rotate: [0, 1, 0, -1, 0]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="text-center">
                <div className="text-lg text-primary mb-1">Профессиональная</div>
                <div className="text-xs text-muted-foreground">Поддержка</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}