
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const AscenBioSolutionSection = () => {
  const [activePillar, setActivePillar] = useState('manufacturing');

  const pillars = {
    manufacturing: {
      title: 'Manufacturing Network Access',
      description: 'Direct relationships with leading manufacturers for immediate equipment access',
      features: [
        'Global supplier network with verified manufacturers',
        'Volume purchasing advantages reducing costs by 30-40%',
        'Quality assurance through established partnerships',
        'Weeks vs months deployment timeline'
      ],
      metrics: {
        suppliers: '250+',
        countries: '45',
        costSaving: '35%',
        deploymentTime: '2-3 weeks'
      }
    },
    technical: {
      title: 'Technical Service Excellence',
      description: 'Comprehensive technical support ensuring long-term operational success',
      features: [
        '5-year local capacity building progression',
        'Comprehensive training program development',
        'Equipment lifecycle management',
        'Maintenance and support network establishment'
      ],
      metrics: {
        trainingPrograms: '50+',
        retention: '85%',
        uptime: '95%',
        satisfaction: '92%'
      }
    },
    human: {
      title: 'Human Capital Solutions',
      description: 'University partnerships and professional development for sustainable healthcare systems',
      features: [
        'University partnership network across 15+ countries',
        'Professional development pathways',
        'International exchange programs',
        'Retention strategy implementation'
      ],
      metrics: {
        universities: '15+',
        professionals: '2,500+',
        retention: '78%',
        programs: '25'
      }
    }
  };

  const speedComparison = [
    { process: 'Equipment Sourcing', ascenbio: '2-3 weeks', traditional: '3-6 months' },
    { process: 'Quality Verification', ascenbio: '1 week', traditional: '4-8 weeks' },
    { process: 'Training Setup', ascenbio: '2 weeks', traditional: '6-12 months' },
    { process: 'Deployment', ascenbio: '1 week', traditional: '2-4 weeks' }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          The AscenBio Solution
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Three interconnected pillars that deliver immediate impact and long-term sustainability
        </p>
      </div>

      {/* Three Pillars Interactive Display */}
      <div className="mb-16">
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {Object.entries(pillars).map(([key, pillar]) => (
            <Button
              key={key}
              variant={activePillar === key ? "default" : "outline"}
              className={`h-auto p-6 flex flex-col items-center text-center transition-all duration-300 ${
                activePillar === key 
                  ? 'bg-teal-600 hover:bg-teal-700 text-white border-teal-600' 
                  : 'bg-slate-800 border-slate-600 text-gray-300 hover:bg-slate-700'
              }`}
              onClick={() => setActivePillar(key)}
            >
              <div className="text-lg font-bold mb-2">{pillar.title}</div>
              <div className="text-sm opacity-80">{pillar.description}</div>
            </Button>
          ))}
        </div>

        {/* Active Pillar Details */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white text-2xl">{pillars[activePillar].title}</CardTitle>
            <p className="text-gray-300">{pillars[activePillar].description}</p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Key Features</h4>
                <ul className="space-y-2">
                  {pillars[activePillar].features.map((feature, index) => (
                    <li key={index} className="flex items-start text-gray-300">
                      <span className="w-2 h-2 bg-teal-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Performance Metrics</h4>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(pillars[activePillar].metrics).map(([key, value]) => (
                    <div key={key} className="bg-slate-700 p-3 rounded-lg text-center">
                      <div className="text-xl font-bold text-teal-400">{value}</div>
                      <div className="text-xs text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Speed Advantage Visualizer */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white text-2xl text-center">Speed Advantage Comparison</CardTitle>
          <p className="text-gray-300 text-center">See how AscenBio's established relationships accelerate deployment</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {speedComparison.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium">{item.process}</span>
                  <div className="flex gap-4 text-sm">
                    <Badge className="bg-teal-600">{item.ascenbio}</Badge>
                    <Badge variant="outline" className="border-red-400 text-red-400">{item.traditional}</Badge>
                  </div>
                </div>
                <div className="relative h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div className="absolute left-0 top-0 h-full bg-teal-400 rounded-full" style={{width: '25%'}}></div>
                  <div className="absolute right-0 top-0 h-full bg-red-400 rounded-full" style={{width: '75%'}}></div>
                </div>
                <div className="flex justify-between text-xs text-gray-400">
                  <span>AscenBio</span>
                  <span>Traditional Contractors</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AscenBioSolutionSection;
