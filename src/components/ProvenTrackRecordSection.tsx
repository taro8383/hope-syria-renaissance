
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ProvenTrackRecordSection = () => {
  const successStories = [
    {
      title: 'Colombia Healthcare Network Expansion',
      challenge: 'Rural healthcare access in conflict-affected regions',
      solution: 'Mobile clinic deployment with university training partnerships',
      outcome: '300% increase in rural healthcare coverage, 95% staff retention',
      metrics: {
        coverage: '300%',
        retention: '95%',
        facilities: '45',
        timeline: '18 months'
      }
    },
    {
      title: 'Mexico Emergency Response System',
      challenge: 'Earthquake response healthcare infrastructure rebuilding',
      solution: 'Rapid deployment modular facilities with local capacity building',
      outcome: 'Full healthcare services restored 70% faster than projected',
      metrics: {
        deployment: '70% faster',
        facilities: '28',
        trained: '450',
        timeline: '12 months'
      }
    },
    {
      title: 'Peru Remote Area Healthcare',
      challenge: 'Amazonian region medical equipment supply chain',
      solution: 'Climate-resilient equipment with comprehensive technical support',
      outcome: 'Zero equipment failure, 100% operational uptime achieved',
      metrics: {
        uptime: '100%',
        coverage: '250km',
        communities: '85',
        timeline: '24 months'
      }
    }
  ];

  const capabilities = [
    {
      category: 'Logistics Mastery',
      examples: [
        'Complex supply chain navigation in challenging terrain',
        'Multi-modal transportation coordination',
        'Crisis-resilient distribution networks',
        'Real-time inventory management systems'
      ]
    },
    {
      category: 'Partnership Building',
      examples: [
        'University collaboration frameworks',
        'Government relationship development',
        'Community engagement protocols',
        'Professional network establishment'
      ]
    },
    {
      category: 'Localization Expertise',
      examples: [
        'Cultural adaptation methodologies',
        'Regulatory compliance navigation',
        'Local workforce development',
        'Sustainable operation frameworks'
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Proven Track Record
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          20 years of healthcare system building across Latin America's most challenging markets
        </p>
      </div>

      {/* Bioproductos Latam Success Stories */}
      <div className="mb-16">
        <h3 className="text-3xl font-bold text-white mb-8 text-center">Latin America Success Stories</h3>
        <div className="grid lg:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
            <Card key={index} className="bg-slate-800 border-slate-700 hover:bg-slate-700 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white text-lg">{story.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
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
                <div className="grid grid-cols-2 gap-2 pt-4">
                  {Object.entries(story.metrics).map(([key, value]) => (
                    <div key={key} className="bg-slate-900 p-2 rounded text-center">
                      <div className="text-teal-400 font-bold">{value}</div>
                      <div className="text-xs text-gray-400 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Capability Showcase */}
      <div className="grid md:grid-cols-3 gap-8">
        {capabilities.map((capability, index) => (
          <Card key={index} className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white text-xl text-center">{capability.category}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {capability.examples.map((example, exampleIndex) => (
                  <li key={exampleIndex} className="flex items-start text-gray-300">
                    <span className="w-2 h-2 bg-teal-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span className="text-sm">{example}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProvenTrackRecordSection;
