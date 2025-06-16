
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const SolutionSection = () => {
  const successStories = [
    {
      country: 'Liberia',
      challenge: 'Post-Ebola healthcare reconstruction',
      solution: 'Modular healthcare facilities with integrated supply chains',
      outcome: '400% increase in healthcare capacity within 18 months',
      image: 'https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?w=400&h=250&fit=crop'
    },
    {
      country: 'Yemen',
      challenge: 'Conflict zone medical supply delivery',
      solution: 'Climate-resilient mobile clinics and drone delivery',
      outcome: 'Reached 2.5M people in previously inaccessible areas',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop'
    },
    {
      country: 'Afghanistan',
      challenge: 'Maternal healthcare in remote regions',
      solution: 'Solar-powered birthing centers with telemedicine',
      outcome: '60% reduction in maternal mortality rates',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop'
    }
  ];

  const capabilities = [
    {
      title: 'Modular Construction',
      description: 'Rapid deployment healthcare facilities designed for conflict zones',
      features: ['30-day deployment', 'Climate resilient', 'Expandable design']
    },
    {
      title: 'AI Diagnostics',
      description: 'Advanced diagnostic capabilities for resource-limited settings',
      features: ['Remote consultation', 'Automated screening', 'Multi-language support']
    },
    {
      title: 'Cold Chain Solutions',
      description: 'Solar-powered vaccine and medicine storage systems',
      features: ['Off-grid operation', 'Temperature monitoring', 'IoT integration']
    },
    {
      title: 'Pharmaceutical Production',
      description: 'Local manufacturing capabilities for essential medicines',
      features: ['WHO-certified', 'Cost reduction', 'Supply security']
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Proven Solutions
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Leveraging Chinese healthcare innovation and international partnerships to rebuild healthcare systems worldwide
        </p>
      </div>

      {/* Success Stories */}
      <div className="mb-20">
        <h3 className="text-3xl font-bold text-white mb-8 text-center">Global Success Stories</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <Card key={index} className="bg-slate-800 border-slate-700 overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <div className="aspect-video relative">
                <img 
                  src={story.image} 
                  alt={story.country}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h4 className="text-xl font-bold text-white">{story.country}</h4>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-red-400 mb-1">Challenge:</h5>
                    <p className="text-sm text-gray-300">{story.challenge}</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-blue-400 mb-1">Solution:</h5>
                    <p className="text-sm text-gray-300">{story.solution}</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-green-400 mb-1">Outcome:</h5>
                    <p className="text-sm text-gray-300">{story.outcome}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Technology Capabilities */}
      <div>
        <h3 className="text-3xl font-bold text-white mb-8 text-center">Technology Capabilities</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((capability, index) => (
            <Card key={index} className="bg-slate-800 border-slate-700 hover:bg-slate-700 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="text-white text-lg">{capability.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4 text-sm">{capability.description}</p>
                <ul className="space-y-1">
                  {capability.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-teal-400 text-sm flex items-center">
                      <span className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SolutionSection;
