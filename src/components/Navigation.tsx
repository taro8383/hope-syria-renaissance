
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
}

const Navigation = ({ activeSection }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { id: 'crisis', label: 'The Crisis' },
    { id: 'ascenbio-solution', label: 'AscenBio Solution' },
    { id: 'solution', label: 'The Solution' },
    { id: 'track-record', label: 'Proven Track Record' },
    { id: 'catalog', label: 'Product Catalog' },
    { id: 'syria-advantage', label: 'Syria Advantage' },
    { id: 'implementation', label: 'Implementation' },
    { id: 'impact', label: 'Impact' },
    { id: 'choose-ascenbio', label: 'Choose AscenBio' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div 
            className="text-xl font-bold text-teal-400 cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            AscenBio Healthcare Solutions
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-xs font-medium transition-colors hover:text-teal-400 ${
                  activeSection === item.id ? 'text-teal-400' : 'text-gray-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-700">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left py-2 px-4 text-sm font-medium transition-colors hover:text-teal-400 ${
                  activeSection === item.id ? 'text-teal-400' : 'text-gray-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
