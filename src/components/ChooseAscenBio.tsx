
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ChooseAscenBio = () => {
  const [selectedPackage, setSelectedPackage] = useState('immediate');
  const [currentPhase, setCurrentPhase] = useState(1);

  const partnershipComparison = {
    ascenBio: {
      approach: 'System rebuilding',
      timeline: 'Immediate deployment',
      focus: 'Sustainable capacity',
      experience: 'Proven experience',
      advantage: '15+ challenging markets'
    },
    traditional: {
      approach: 'Product selling',
      timeline: '2-3 year relationship building',
      focus: 'Temporary solutions',
      experience: 'Starting from scratch',
      advantage: 'Generic approaches'
    }
  };

  const partnershipPackages = [
    {
      id: 'immediate',
      name: 'Immediate Response Partnership',
      duration: '6-12 months',
      investment: '$75-150M',
      description: 'Emergency deployment with rapid training programs',
      keyDeliverables: [
        'Mobile clinic deployment within 4 weeks',
        'Emergency medical supplies distribution',
        'Basic technician training (200+ people)',
        'Telemedicine network establishment',
        'Supply chain emergency protocols'
      ],
      outcomes: {
        peopleServed: '500,000+',
        facilitiesOperational: '50+',
        trainedStaff: '200+',
        timeToImpact: '4 weeks'
      }
    },
    {
      id: 'system-building',
      name: 'System Building Partnership',
      duration: '2-3 years',
      investment: '$300-500M',
      description: 'Infrastructure development with comprehensive capacity building',
      keyDeliverables: [
        'Permanent facility construction (100+ centers)',
        'University partnership establishment',
        'Advanced training programs (1000+ people)',
        'Local manufacturing capability development',
        'Quality assurance system implementation'
      ],
      outcomes: {
        peopleServed: '2M+',
        facilitiesOperational: '100+',
        trainedStaff: '1000+',
        timeToImpact: '6 months'
      }
    },
    {
      id: 'sustainability',
      name: 'Sustainability Partnership',
      duration: '3-5 years',
      investment: '$150-250M',
      description: 'Self-sufficiency transition with ongoing support',
      keyDeliverables: [
        'Revenue generation system implementation',
        'Local leadership development',
        'International partnership facilitation',
        'Technology transfer completion',
        'Ongoing technical support network'
      ],
      outcomes: {
        peopleServed: '3M+',
        facilitiesOperational: '150+',
        trainedStaff: '1500+',
        timeToImpact: '12 months'
      }
    }
  ];

  const processPhases = [
    {
      phase: 1,
      name: 'Discovery Phase',
      duration: '4-6 weeks',
      activities: [
        'Comprehensive needs assessment',
        'Stakeholder mapping and engagement',
        'Infrastructure damage evaluation',
        'Local capacity assessment',
        'Partnership framework development'
      ],
      deliverables: 'Detailed implementation roadmap and partnership proposal'
    },
    {
      phase: 2,
      name: 'Rapid Deployment',
      duration: '8-12 weeks',
      activities: [
        'Emergency equipment deployment',
        'Mobile clinic network establishment',
        'Immediate training program launch',
        'Supply chain activation',
        'Quality assurance system setup'
      ],
      deliverables: 'Operational emergency healthcare network'
    },
    {
      phase: 3,
      name: 'Capacity Building',
      duration: '12-18 months',
      activities: [
        'Permanent facility construction',
        'Advanced training program implementation',
        'University partnership activation',
        'Local workforce development',
        'Technology transfer initiation'
      ],
      deliverables: 'Self-sustaining healthcare system foundation'
    },
    {
      phase: 4,
      name: 'Sustainability Transition',
      duration: '18-36 months',
      activities: [
        'Revenue generation system implementation',
        'Local leadership transition',
        'International partnership facilitation',
        'Quality certification achievement',
        'Operational independence preparation'
      ],
      deliverables: 'Financially sustainable healthcare system'
    },
    {
      phase: 5,
      name: 'Ongoing Partnership',
      duration: 'Ongoing',
      activities: [
        'Technical support and consultation',
        'Quality assurance monitoring',
        'Continuous improvement support',
        'International collaboration facilitation',
        'Emergency response backup'
      ],
      deliverables: 'Long-term partnership and support network'
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Choose AscenBio
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Partner with proven expertise for sustainable healthcare system reconstruction
        </p>
      </div>

      {/* Partnership Comparison Tool */}
      <Card className="bg-slate-800 border-slate-700 mb-12">
        <CardHeader>
          <CardTitle className="text-white text-2xl text-center">Partnership Model Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-teal-900/50 to-blue-900/50 p-6 rounded-lg border border-teal-500">
              <h3 className="text-xl font-bold text-teal-400 mb-4 text-center">AscenBio Model</h3>
              <div className="space-y-3">
                {Object.entries(partnershipComparison.ascenBio).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span className="text-gray-300 capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                    <span className="text-white font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-slate-700/50 p-6 rounded-lg border border-slate-600">
              <h3 className="text-xl font-bold text-red-400 mb-4 text-center">Traditional Contractors</h3>
              <div className="space-y-3">
                {Object.entries(partnershipComparison.traditional).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span className="text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                    <span className="text-gray-300">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Partnership Packages */}
      <div className="mb-12">
        <h3 className="text-3xl font-bold text-white mb-8 text-center">Partnership Packages</h3>
        
        <div className="grid grid-cols-3 gap-4 mb-8">
          {partnershipPackages.map((pkg) => (
            <Button
              key={pkg.id}
              variant={selectedPackage === pkg.id ? "default" : "outline"}
              className={`h-16 ${
                selectedPackage === pkg.id 
                  ? 'bg-teal-600 hover:bg-teal-700 text-white' 
                  : 'bg-slate-800 border-slate-600 text-gray-300 hover:bg-slate-700'
              }`}
              onClick={() => setSelectedPackage(pkg.id)}
            >
              <span className="text-center text-sm">{pkg.name}</span>
            </Button>
          ))}
        </div>

        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-6">
            {partnershipPackages.filter(pkg => pkg.id === selectedPackage).map((pkg) => (
              <div key={pkg.id} className="space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2">{pkg.name}</h4>
                    <p className="text-gray-300">{pkg.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-teal-400">{pkg.investment}</div>
                    <div className="text-sm text-gray-400">{pkg.duration}</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-blue-400 mb-3">Key Deliverables:</h5>
                    <ul className="space-y-1">
                      {pkg.keyDeliverables.map((deliverable, index) => (
                        <li key={index} className="text-sm text-gray-300 flex items-start">
                          <span className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-green-400 mb-3">Expected Outcomes:</h5>
                    <div className="grid grid-cols-2 gap-3">
                      {Object.entries(pkg.outcomes).map(([key, value]) => (
                        <div key={key} className="bg-slate-700 p-3 rounded text-center">
                          <div className="text-lg font-bold text-teal-400">{value}</div>
                          <div className="text-xs text-gray-400 capitalize">
                            {key.replace(/([A-Z])/g, ' $1')}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Partnership Process Timeline */}
      <div className="mb-12">
        <h3 className="text-3xl font-bold text-white mb-8 text-center">Partnership Process Timeline</h3>
        
        <div className="flex justify-center mb-8">
          <div className="flex space-x-4">
            {processPhases.map((phase) => (
              <Button
                key={phase.phase}
                variant={currentPhase === phase.phase ? "default" : "outline"}
                className={`w-12 h-12 rounded-full ${
                  currentPhase === phase.phase 
                    ? 'bg-teal-600 hover:bg-teal-700 text-white' 
                    : 'bg-slate-800 border-slate-600 text-gray-300 hover:bg-slate-700'
                }`}
                onClick={() => setCurrentPhase(phase.phase)}
              >
                {phase.phase}
              </Button>
            ))}
          </div>
        </div>

        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-6">
            {processPhases.filter(phase => phase.phase === currentPhase).map((phase) => (
              <div key={phase.phase} className="space-y-4">
                <div className="flex justify-between items-center">
                  <h4 className="text-xl font-bold text-white">{phase.name}</h4>
                  <Badge variant="outline" className="border-teal-400 text-teal-400">
                    {phase.duration}
                  </Badge>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-blue-400 mb-2">Key Activities:</h5>
                    <ul className="space-y-1">
                      {phase.activities.map((activity, index) => (
                        <li key={index} className="text-sm text-gray-300 flex items-start">
                          <span className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-green-400 mb-2">Deliverables:</h5>
                    <p className="text-sm text-gray-300">{phase.deliverables}</p>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Contact Forms */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white text-lg">Request Partnership Proposal</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input placeholder="Organization Name" className="bg-slate-700 border-slate-600 text-white" />
            <Input placeholder="Contact Email" className="bg-slate-700 border-slate-600 text-white" />
            <Textarea placeholder="Specific Requirements" className="bg-slate-700 border-slate-600 text-white" />
            <Button className="w-full bg-teal-600 hover:bg-teal-700">
              Request Proposal
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white text-lg">Schedule Capability Presentation</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input placeholder="Preferred Date" type="date" className="bg-slate-700 border-slate-600 text-white" />
            <Input placeholder="Number of Attendees" className="bg-slate-700 border-slate-600 text-white" />
            <Textarea placeholder="Presentation Focus Areas" className="bg-slate-700 border-slate-600 text-white" />
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Schedule Presentation
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white text-lg">Discuss Syria-Specific Solutions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input placeholder="Your Role/Title" className="bg-slate-700 border-slate-600 text-white" />
            <Input placeholder="Priority Challenges" className="bg-slate-700 border-slate-600 text-white" />
            <Textarea placeholder="Specific Syria Context" className="bg-slate-700 border-slate-600 text-white" />
            <Button className="w-full bg-green-600 hover:bg-green-700">
              Schedule Consultation
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ChooseAscenBio;
