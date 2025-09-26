import { motion } from 'motion/react';
import { Code, Mail, Phone, MapPin, MessageCircle, Github, Linkedin, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-background to-primary/5 border-t border-border/50">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                NomadCodes
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Создаём инновационные цифровые решения для бизнеса будущего. 
              Работаем удаленно по всему миру.
            </p>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>info@nomadcodes.kz</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+7 (7172) 730-730</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Республика Казахстан, г. Астана, район Нура, проспект Туран, дом 59/3</span>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="mb-4" hidden={true}>Следите за нами</h3>
            <div className="flex gap-2" hidden={true}>
              <a 
                href="#" 
                className="w-8 h-8 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-primary" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors"
              >
                <Github className="w-4 h-4 text-primary" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-primary/10 hover:bg-primary/20 rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4 text-primary" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="pt-8 border-t border-border/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <span>© {currentYear} NomadCodes. Создано с</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>для цифрового будущего</span>
            </div>
            
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Условия использования
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}