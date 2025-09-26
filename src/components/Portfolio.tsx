import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'FinTech Dashboard',
    description: 'Современная панель управления для финансовых операций с реалтайм аналитикой и интегрированными системами безопасности.',
    image: 'https://images.unsplash.com/photo-1665470909939-959569b20021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTg3ODM4NjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    technologies: ['React', 'TypeScript', 'D3.js', 'Node.js'],
    category: 'Веб-приложение',
    year: '2024'
  },
  {
    id: 2,
    title: 'MobileFirst App',
    description: 'Кроссплатформенное мобильное приложение для управления задачами с интеграцией ИИ и синхронизацией в облаке.',
    image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzU4ODU0NzU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    technologies: ['React Native', 'Firebase', 'TensorFlow', 'GraphQL'],
    category: 'Мобильное приложение',
    year: '2024'
  },
  {
    id: 3,
    title: 'E-Commerce Platform',
    description: 'Полнофункциональная платформа электронной коммерции с персонализированными рекомендациями и интегрированными платежами.',
    image: 'https://images.unsplash.com/photo-1694599048261-a1de00f0117e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc1ODgwOTk3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis'],
    category: 'E-Commerce',
    year: '2023'
  },
  {
    id: 4,
    title: 'AI Analytics System',
    description: 'Система машинного обучения для анализа больших данных с интерактивными визуализациями и предиктивной аналитикой.',
    image: 'https://images.unsplash.com/photo-1757310998648-f8aaa5572e8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMG1hY2hpbmUlMjBsZWFybmluZyUyMGludGVyZmFjZXxlbnwxfHx8fDE3NTg4NzMyNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    technologies: ['Python', 'TensorFlow', 'React', 'FastAPI'],
    category: 'ИИ решение',
    year: '2024'
  }
];

const categories = ['Все', 'Веб-приложение', 'Мобильное приложение', 'E-Commerce', 'ИИ решение'];

interface PortfolioProps {
  onNavigateToProjects?: () => void;
}

export function Portfolio({ onNavigateToProjects }: PortfolioProps) {
  return (
    <section className="py-24 bg-gradient-to-b from-accent/10 to-background">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Наши работы
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Примеры успешных проектов, которые мы создали для наших клиентов. 
            От стартапов до крупных корпораций — каждое решение уникально.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Badge 
                  variant={index === 0 ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary/10 transition-colors px-4 py-2"
                >
                  {category}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg">
                <div className="relative overflow-hidden">
                  <ImageWithFallback 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Overlay buttons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" variant="secondary" className="bg-white/90 text-black hover:bg-white">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Просмотр
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-white/90 text-black hover:bg-white">
                      <Github className="w-4 h-4 mr-2" />
                      Код
                    </Button>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary/90 text-white">
                      {project.category}
                    </Badge>
                  </div>

                  {/* Year badge */}
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-white/90 text-black border-white/20">
                      {project.year}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl mb-3">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <Button variant="ghost" className="w-full justify-between group/btn">
                    Подробнее о проекте
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-primary/5 to-accent/10 rounded-2xl p-8 border border-primary/10">
            <h3 className="text-2xl mb-4">Хотите увидеть больше?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              У нас есть множество других интересных проектов. Свяжитесь с нами, 
              чтобы обсудить ваши идеи и посмотреть релевантные кейсы.
            </p>
            <div className="flex justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-primary/80"
                onClick={onNavigateToProjects}
              >
                Посмотреть все проекты
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}