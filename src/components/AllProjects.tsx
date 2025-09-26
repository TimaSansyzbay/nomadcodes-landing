import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { 
  ExternalLink, 
  Github, 
  ArrowRight, 
  Filter, 
  Search,
  Calendar,
  Heart,
  Eye
} from 'lucide-react';

const allProjects = [
  {
    id: 1,
    title: 'FinTech Dashboard',
    description: 'Современная панель управления для финансовых операций с реалтайм аналитикой и интегрированными системами безопасности.',
    image: 'https://images.unsplash.com/photo-1665470909939-959569b20021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTg3ODM4NjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    technologies: ['React', 'TypeScript', 'D3.js', 'Node.js'],
    category: 'Веб-приложение',
    year: '2024',
    status: 'Запущен',
    likes: 127,
    views: 2341
  },
  {
    id: 2,
    title: 'MobileFirst App',
    description: 'Кроссплатформенное мобильное приложение для управления задачами с интеграцией ИИ и синхронизацией в облаке.',
    image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzU4ODU0NzU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    technologies: ['React Native', 'Firebase', 'TensorFlow', 'GraphQL'],
    category: 'Мобильное приложение',
    year: '2024',
    status: 'Запущен',
    likes: 89,
    views: 1876
  },
  {
    id: 3,
    title: 'E-Commerce Platform',
    description: 'Полнофункциональная платформа электронной коммерции с персонализированными рекомендациями и интегрированными платежами.',
    image: 'https://images.unsplash.com/photo-1694599048261-a1de00f0117e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc1ODgwOTk3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis'],
    category: 'E-Commerce',
    year: '2023',
    status: 'Запущен',
    likes: 156,
    views: 3214
  },
  {
    id: 4,
    title: 'AI Analytics System',
    description: 'Система машинного обучения для анализа больших данных с интерактивными визуализациями и предиктивной аналитикой.',
    image: 'https://images.unsplash.com/photo-1757310998648-f8aaa5572e8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMG1hY2hpbmUlMjBsZWFybmluZyUyMGludGVyZmFjZXxlbnwxfHx8fDE3NTg4NzMyNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    technologies: ['Python', 'TensorFlow', 'React', 'FastAPI'],
    category: 'ИИ решение',
    year: '2024',
    status: 'Запущен',
    likes: 203,
    views: 4567
  },
  {
    id: 5,
    title: 'CryptoTrader Pro',
    description: 'Профессиональная платформа для торговли криптовалютами с продвинутой аналитикой и алгоритмическими стратегиями.',
    image: 'https://images.unsplash.com/photo-1748609664795-11546ad62000?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwY3J5cHRvY3VycmVuY3klMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU4ODczNTA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    technologies: ['Vue.js', 'WebSocket', 'Blockchain', 'Node.js'],
    category: 'Веб-приложение',
    year: '2024',
    status: 'В разработке',
    likes: 92,
    views: 1653
  },
  {
    id: 6,
    title: 'Social Connect',
    description: 'Инновационная социальная платформа с уникальными функциями взаимодействия и персонализированным контентом.',
    image: 'https://images.unsplash.com/photo-1694878981815-d643689e51fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGFwcCUyMGludGVyZmFjZXxlbnwxfHx8fDE3NTg4NDAxMTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    technologies: ['React', 'Express', 'MongoDB', 'Socket.io'],
    category: 'Мобильное приложение',
    year: '2023',
    status: 'Запущен',
    likes: 178,
    views: 2987
  },
  {
    id: 7,
    title: 'FitTracker Pro',
    description: 'Комплексное приложение для отслеживания фитнеса с ИИ-тренером и персонализированными программами тренировок.',
    image: 'https://images.unsplash.com/photo-1591311630200-ffa9120a540f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhY2tpbmclMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzU4ODczNTExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    technologies: ['Flutter', 'Firebase', 'ML Kit', 'HealthKit'],
    category: 'Мобильное приложение',
    year: '2024',
    status: 'Запущен',
    likes: 134,
    views: 2456
  },
  {
    id: 8,
    title: 'LogiFlow System',
    description: 'Автоматизированная система управления логистикой с отслеживанием грузов в реальном времени.',
    image: 'https://images.unsplash.com/photo-1758609554326-ebf110a4c142?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjBtYW5hZ2VtZW50JTIwc3lzdGVtfGVufDF8fHx8MTc1ODc5NzMzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    technologies: ['Angular', 'Spring Boot', 'PostgreSQL', 'Docker'],
    category: 'Веб-приложение',
    year: '2023',
    status: 'Запущен',
    likes: 87,
    views: 1432
  },
  {
    id: 9,
    title: 'PropTech Platform',
    description: 'Современная платформа для недвижимости с виртуальными турами и ИИ-оценкой стоимости объектов.',
    image: 'https://images.unsplash.com/photo-1558864865-073885c66cee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwcGxhdGZvcm0lMjB3ZWJzaXRlfGVufDF8fHx8MTc1ODg3MzUxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    technologies: ['React', 'Three.js', 'Django', 'PostgreSQL'],
    category: 'Веб-приложение',
    year: '2024',
    status: 'В разработке',
    likes: 76,
    views: 1234
  },
  {
    id: 10,
    title: 'EduSmart Platform',
    description: 'Интеллектуальная образовательная платформа с адаптивным обучением и геймификацией.',
    image: 'https://images.unsplash.com/photo-1588912914078-2fe5224fd8b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBsZWFybmluZyUyMHBsYXRmb3JtfGVufDF8fHx8MTc1ODg3MzUxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    technologies: ['Next.js', 'Supabase', 'Stripe', 'Tailwind'],
    category: 'Веб-приложение',
    year: '2023',
    status: 'Запущен',
    likes: 145,
    views: 2876
  }
];

const categories = ['Все', 'Веб-приложение', 'Мобильное приложение', 'E-Commerce', 'ИИ решение'];
const years = ['Все', '2024', '2023'];
const statuses = ['Все', 'Запущен', 'В разработке'];

export function AllProjects() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Все проекты
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Полная коллекция наших работ — от стартапов до корпоративных решений. 
            Каждый проект отражает наш опыт и стремление к инновациям.
          </p>
        </motion.div>

        {/* Filters and Search */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-card border border-border/50 rounded-xl p-6">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input 
                    placeholder="Поиск проектов..." 
                    className="pl-10 bg-input-background border-border/50"
                  />
                </div>
              </div>

              {/* Filter Dropdowns */}
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Фильтры:</span>
                </div>
                
                <select className="px-3 py-2 rounded-lg border border-border/50 bg-input-background text-sm">
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>

                <select className="px-3 py-2 rounded-lg border border-border/50 bg-input-background text-sm">
                  {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>

                <select className="px-3 py-2 rounded-lg border border-border/50 bg-input-background text-sm">
                  {statuses.map(status => (
                    <option key={status} value={status}>{status}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {allProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index % 6) * 0.1 }}
            >
              <Card className="group overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg h-full">
                <div className="relative overflow-hidden">
                  <ImageWithFallback 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Overlay buttons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" variant="secondary" className="bg-white/90 text-black hover:bg-white">
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Просмотр
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-white/90 text-black hover:bg-white">
                      <Github className="w-3 h-3 mr-1" />
                      Код
                    </Button>
                  </div>

                  {/* Status badge */}
                  <div className="absolute top-3 left-3">
                    <Badge className={`text-xs ${
                      project.status === 'Запущен' 
                        ? 'bg-green-500/90 text-white' 
                        : 'bg-orange-500/90 text-white'
                    }`}>
                      {project.status}
                    </Badge>
                  </div>

                  {/* Category and Year */}
                  <div className="absolute top-3 right-3 flex flex-col gap-1">
                    <Badge variant="outline" className="bg-white/90 text-black border-white/20 text-xs">
                      {project.category}
                    </Badge>
                    <Badge variant="outline" className="bg-white/90 text-black border-white/20 text-xs">
                      {project.year}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-5 flex flex-col h-full">
                  <div className="flex-1">
                    <h3 className="text-lg mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs px-2 py-1">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs px-2 py-1">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Project Stats */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Heart className="w-3 h-3" />
                        <span>{project.likes}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        <span>{project.views}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{project.year}</span>
                    </div>
                  </div>

                  <Button variant="ghost" size="sm" className="w-full justify-between group/btn text-xs">
                    Подробнее о проекте
                    <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Button variant="outline" size="lg" className="border-primary/20">
            Загрузить еще проекты
          </Button>
        </motion.div>

        {/* Statistics */}
        <motion.div 
          className="mt-16 bg-gradient-to-r from-primary/5 to-accent/10 rounded-2xl p-8 border border-primary/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl text-center mb-8">Статистика проектов</h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Завершенных проектов</div>
            </div>
            <div>
              <div className="text-3xl text-primary mb-2">15</div>
              <div className="text-sm text-muted-foreground">Активных проектов</div>
            </div>
            <div>
              <div className="text-3xl text-primary mb-2">1.2M+</div>
              <div className="text-sm text-muted-foreground">Пользователей</div>
            </div>
            <div>
              <div className="text-3xl text-primary mb-2">99%</div>
              <div className="text-sm text-muted-foreground">Довольных клиентов</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}