
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowDown } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import Navigation from '@/components/Navigation';
import CrisisSection from '@/components/CrisisSection';
import AscenBioSolution from '@/components/AscenBioSolution';
import SolutionSection from '@/components/SolutionSection';
import ProductCatalog from '@/components/ProductCatalog';
import SyriaAdvantage from '@/components/SyriaAdvantage';
import ImplementationSection from '@/components/ImplementationSection';
import ImpactSection from '@/components/ImpactSection';
import ChooseAscenBio from '@/components/ChooseAscenBio';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'hero', 'crisis', 'ascenbio-solution', 'solution', 
        'catalog', 'syria-advantage', 'implementation', 'impact', 'choose-ascenbio'
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      <Navigation activeSection={activeSection} />
      
      <section id="hero">
        <HeroSection />
      </section>

      <section id="crisis" className="py-20">
        <CrisisSection />
      </section>

      <section id="ascenbio-solution" className="py-20 bg-slate-800">
        <AscenBioSolution />
      </section>

      <section id="solution" className="py-20">
        <SolutionSection />
      </section>

      <section id="catalog" className="py-20 bg-slate-800">
        <ProductCatalog />
      </section>

      <section id="syria-advantage" className="py-20">
        <SyriaAdvantage />
      </section>

      <section id="implementation" className="py-20 bg-slate-800">
        <ImplementationSection />
      </section>

      <section id="impact" className="py-20">
        <ImpactSection />
      </section>

      <section id="choose-ascenbio" className="py-20 bg-gradient-to-r from-blue-900 to-teal-900">
        <ChooseAscenBio />
      </section>
    </div>
  );
};

export default Index;
