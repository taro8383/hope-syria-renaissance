
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import SpeedComparisonChart from '@/components/SpeedComparisonChart';

const AscenBioSolution = () => {
  const [activePillar, setActivePillar] = useState('manufacturing');

  const pillars = {
    manufacturing: {
      title: 'Manufacturing Network Access',
      description: 'Direct relationships with 140+ Chinese manufacturers for immediate equipment access',
      features: [
        'Speed comparison: AscenBio (weeks) vs Traditional (months)',
        'Volume purchasing advantages through established relationships',
        'Quality assurance from certified manufacturer partnerships',
        'Immediate access to essential medical equipment'
      ],
    metrics: {
        suppliers: '140+',
        timeAdvantage: '75% faster',
        costSavings: '20-30%',
        qualityScore: '98%'
    }
    },
    technical: {
      title: 'Technical Service Excellence',
      description: 'Comprehensive support systems for sustainable healthcare delivery',
      features: [
        '5-year local capacity building progression',
        'Interactive technician development pathways',
        'Equipment lifecycle maintenance support',
        'Skills transfer and retention strategies'
      ],
      metrics: {
        retention: '85%',
        sustainability: '5 years',
        training: '90%',
        support: '24/7'
      }
    },
    human: {
      title: 'Human Capital Solutions',
      description: 'Building sustainable local healthcare workforce and capacity',
      features: [
        'University partnership network development',
        'Professional development career paths',
        'International exchange programs',
        'Community healthcare program implementation'
      ],
      metrics: {
        partnerships: '25+',
        professionals: '500+',
        retention: '80%',
        communities: '100+'
      }
    }
  };

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          The AscenBio Advantage
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          AscenBio brings system-building expertise from challenging markets across Latin America to Syria's healthcare reconstruction
        </p>
      </div>

      {/* Three Pillar Navigation */}
      <div className="grid md:grid-cols-3 gap-4 mb-12">
        {Object.entries(pillars).map(([key, pillar]) => (
          <Button
            key={key}
            variant={activePillar === key ? "default" : "outline"}
            className={`h-20 p-4 text-center transition-all duration-300 ${
              activePillar === key 
                ? 'bg-teal-600 hover:bg-teal-700 text-white border-teal-600' 
                : 'bg-slate-800 border-slate-600 text-gray-300 hover:bg-slate-700'
            }`}
            onClick={() => setActivePillar(key)}
          >
            <div>
              <div className="font-bold text-sm mb-1">{pillar.title}</div>
              <div className="text-xs opacity-80">{pillar.description.substring(0, 50)}...</div>
            </div>
          </Button>
        ))}
      </div>

      {/* Active Pillar Content */}
      <Card className="bg-slate-800 border-slate-700 mb-12">
        <CardHeader>
          <CardTitle className="text-white text-2xl">{pillars[activePillar as keyof typeof pillars].title}</CardTitle>
          <p className="text-gray-300">{pillars[activePillar as keyof typeof pillars].description}</p>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-4">Key Features</h4>
              <ul className="space-y-2">
                {pillars[activePillar as keyof typeof pillars].features.map((feature, index) => (
                  <li key={index} className="flex items-start text-gray-300">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-green-400 mb-4">Performance Metrics</h4>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(pillars[activePillar as keyof typeof pillars].metrics).map(([key, value]) => (
                  <div key={key} className="bg-slate-700 p-3 rounded text-center">
                    <div className="text-lg font-bold text-teal-400">{value}</div>
                    <div className="text-xs text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Speed Comparison Chart - Only show for Manufacturing pillar */}
      {activePillar === 'manufacturing' && <SpeedComparisonChart />}

      {/* Supplier Network Visualization */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white text-xl">140+ Chinese Manufacturer Network</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-400 mb-2">140+</div>
              <div className="text-sm text-gray-300">Direct Manufacturer Relationships</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">75%</div>
              <div className="text-sm text-gray-300">Faster Deployment</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">20-30%</div>
              <div className="text-sm text-gray-300">Cost Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">98%</div>
              <div className="text-sm text-gray-300">Quality Certification Rate</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AscenBioSolution;
