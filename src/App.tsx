import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { ProjectsPage } from './components/ProjectsPage';
import { Features } from './components/Features';
import { StartProject } from './components/StartProject';
import { Footer } from './components/Footer';
import { Contact } from './components/Contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'projects'>('home');

  const navigateToHome = () => setCurrentPage('home');

  if (currentPage === 'projects') {
    return <ProjectsPage onNavigateHome={navigateToHome} />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="services">
          <Services />
        </section>
        
        <section id="about">
          <Features />
        </section>
        
        <section id="start-project">
          <StartProject />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}