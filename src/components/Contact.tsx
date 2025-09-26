import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Mail, Phone, MapPin, MessageCircle, Github, Linkedin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Готовы обсудить ваш проект? Мы всегда открыты для новых идей и интересных задач
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <h3 className="text-2xl mb-6">Контактная информация</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <div>info@nomadcodes.kz</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Телефон</div>
                    <div>+7 (7172) 730-730</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Локация</div>
                    <div>Республика Казахстан, г. Астана, район Нура, проспект Туран, дом 59/3</div>
                  </div>
                </div>
              </div>
            </div>

            <div hidden={true}>
              <h4 className="mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="border-primary/20 hover:bg-primary/10">
                  <MessageCircle className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="border-primary/20 hover:bg-primary/10">
                  <Github className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="border-primary/20 hover:bg-primary/10">
                  <Linkedin className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}