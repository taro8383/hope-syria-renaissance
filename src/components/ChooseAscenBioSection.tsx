
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ChooseAscenBioSection = () => {
  const [selectedPackage, setSelectedPackage] = useState('immediate');

  const comparisonAspects = [
    {
      aspect: 'Approach',
      ascenbio: 'System rebuilding',
      traditional: 'Product selling',
      advantage: 'Comprehensive solutions'
    },
    {
      aspect: 'Timeline',
      ascenbio: 'Immediate deployment',
      traditional: '2-3 year relationship building',
      advantage: '90% faster start'
    },
    {
      aspect: 'Sustainability',
      ascenbio: 'Local capacity building',
      traditional: 'Temporary solutions',
      advantage: 'Long-term independence'
    },
    {
      aspect: 'Experience',
      ascenbio: 'Proven in challenging markets',
      traditional: 'Starting from scratch',
      advantage: 'Battle-tested expertise'
    }
  ];

  const partnershipPackages = {
    immediate: {
      title: 'Immediate Response Partnership',
      duration: '0-12 months',
      description: 'Emergency deployment with rapid capacity building',
      deliverables: [
        'Mobile clinic deployment within 2 weeks',
        'Essential equipment supply chain establishment',
        'Emergency training program implementation',
        'Basic technical support network setup'
      ],
      outcomes: [
        'Immediate healthcare service restoration',
        '500+ healthcare workers trained',
        '50+ facilities operational',
        'Supply chain resilience established'
      ]
    },
    building: {
      title: 'System Building Partnership',
      duration: '12-36 months',
      description: 'Infrastructure development with comprehensive capacity building',
      deliverables: [
        'Permanent facility construction and equipment',
        'University partnership establishment',
        'Advanced training program development',
        'Quality assurance system implementation'
      ],
      outcomes: [
        'Sustainable healthcare infrastructure',
        '2,000+ professionals trained',
        '200+ facilities fully operational',
        'Local manufacturing capabilities'
      ]
    },
    sustainability: {
      title: 'Sustainability Partnership',
      duration: '36-60 months',
      description: 'Self-sufficiency transition with ongoing support',
      deliverables: [
        'Complete technology transfer',
        'Local leadership development',
        'Financial sustainability frameworks',
        'Quality monitoring systems'
      ],
      outcomes: [
        '80% financial self-sufficiency',
        'Local expertise independence',
        'Regional healthcare hub status',
        'Exportable healthcare model'
      ]
    }
  };

  const processPhases = [
    {
      phase: 'Discovery Phase',
      duration: '2-4 weeks',
      description: 'Comprehensive needs assessment and partnership framework development',
      activities: ['Stakeholder meetings', 'Infrastructure assessment', 'Capability mapping', 'Partnership agreement']
    },
    {
      phase: 'Rapid Deployment',
      duration: '4-8 weeks',
      description: 'Immediate impact initiatives and emergency response',
      activities: ['Equipment deployment', 'Staff mobilization', 'Training initiation', 'Supply chain activation']
    },
    {
      phase: 'Capacity Building',
      duration: '12-24 months',
      description: 'Local workforce development and infrastructure establishment',
      activities: ['University partnerships', 'Training programs', 'Facility construction', 'System integration']
    },
    {
      phase: 'Sustainability Transition',
      duration: '24-48 months',
      description: 'Independence pathway and self-sufficiency development',
      activities: ['Technology transfer', 'Local leadership', 'Financial independence', 'Quality assurance']
    },
    {
      phase: 'Ongoing Partnership',
      duration: 'Continuous',
      description: 'Continuous support and knowledge sharing',
      activities: ['Technical consultation', 'Advanced training', 'Innovation sharing', 'Network expansion']
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Choose AscenBio
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Partner with proven healthcare system builders, not just product suppliers
        </p>
      </div>

      {/* Partnership Comparison Widget */}
      <div className="mb-16">
        <h3 className="text-3xl font-bold text-white mb-8 text-center">Partnership Model Comparison</h3>
        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-4 gap-6">
              {comparisonAspects.map((aspect, index) => (
                <div key={index} className="text-center">
                  <h4 className="text-lg font-semibold text-white mb-4">{aspect.aspect}</h4>
                  <div className="space-y-4">
                    <div className="p-3 bg-teal-900/50 rounded-lg border border-teal-600">
                      <Badge className="bg-teal-600 mb-2">AscenBio</Badge>
                      <p className="text-sm text-gray-300">{aspect.ascenbio}</p>
                    </div>
                    <div className="p-3 bg-red-900/50 rounded-lg border border-red-600">
                      <Badge variant="outline" className="border-red-400 text-red-400 mb-2">Traditional</Badge>
                      <p className="text-sm text-gray-300">{aspect.traditional}</p>
                    </div>
                    <div className="text-sm font-semibold text-green-400">
                      {aspect.advantage}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Partnership Packages */}
      <div className="mb-16">
        <h3 className="text-3xl font-bold text-white mb-8 text-center">Partnership Packages</h3>
        
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {Object.entries(partnershipPackages).map(([key, pkg]) => (
            <Button
              key={key}
              variant={selectedPackage === key ? "default" : "outline"}
              className={`h-auto p-4 text-center transition-all duration-300 ${
                selectedPackage === key 
                  ? 'bg-teal-600 hover:bg-teal-700 text-white border-teal-600' 
                  : 'bg-slate-800 border-slate-600 text-gray-300 hover:bg-slate-700'
              }`}
              onClick={() => setSelectedPackage(key)}
            >
              <div className="text-sm font-bold">{pkg.title}</div>
              <div className="text-xs opacity-80">{pkg.duration}</div>
            </Button>
          ))}
        </div>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white text-2xl">{partnershipPackages[selectedPackage].title}</CardTitle>
            <p className="text-gray-300">{partnershipPackages[selectedPackage].description}</p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-4">Key Deliverables</h4>
                <ul className="space-y-2">
                  {partnershipPackages[selectedPackage].deliverables.map((deliverable, index) => (
                    <li key={index} className="flex items-start text-gray-300">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {deliverable}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-green-400 mb-4">Expected Outcomes</h4>
                <ul className="space-y-2">
                  {partnershipPackages[selectedPackage].outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start text-gray-300">
                      <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Partnership Process Timeline */}
      <div className="mb-16">
        <h3 className="text-3xl font-bold text-white mb-8 text-center">Partnership Process</h3>
        <div className="space-y-6">
          {processPhases.map((phase, index) => (
            <Card key={index} className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="text-xl font-semibold text-white">{phase.phase}</h4>
                      <Badge variant="outline" className="border-blue-400 text-blue-400 w-fit">
                        {phase.duration}
                      </Badge>
                    </div>
                    <p className="text-gray-300 mb-4">{phase.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {phase.activities.map((activity, actIndex) => (
                        <Badge key={actIndex} className="bg-slate-700 text-gray-300">
                          {activity}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-white mb-6">Start Your Partnership</h3>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white">
            Request Partnership Proposal
          </Button>
          <Button variant="outline" size="lg" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
            Schedule Capability Presentation
          </Button>
          <Button variant="outline" size="lg" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-white">
            Discuss Syria-Specific Solutions
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChooseAscenBioSection;
