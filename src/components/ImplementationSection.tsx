
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import Interactive3DSyriaMap from '@/components/Interactive3DSyriaMap';

const ImplementationSection = () => {
  const [timelineMonth, setTimelineMonth] = useState([0]);

  const phases = [
    {
      phase: 'Phase 1: Emergency Response',
      duration: '0-6 months',
      description: 'Immediate deployment of mobile clinics and essential supplies',
      deliverables: [
        '50 mobile healthcare units deployed',
        'Emergency medical supplies distributed',
        '500 healthcare workers trained',
        'Primary healthcare services restored'
      ],
      investment: '$150M'
    },
    {
      phase: 'Phase 2: Infrastructure Rebuilding',
      duration: '6-24 months',
      description: 'Construction of permanent healthcare facilities and supply chains',
      deliverables: [
        '200 primary healthcare centers built',
        '20 district hospitals reconstructed',
        'Medical supply manufacturing established',
        'Healthcare information system deployed'
      ],
      investment: '$400M'
    },
    {
      phase: 'Phase 3: System Integration',
      duration: '24-60 months',
      description: 'Full healthcare system integration and capacity building',
      deliverables: [
        'Complete healthcare network operational',
        '5,000 healthcare workers trained',
        'Self-sustaining supply chains established',
        'Quality assurance systems implemented'
      ],
      investment: '$250M'
    }
  ];

  const riskMitigations = [
    {
      risk: 'Security Concerns',
      level: 'High',
      mitigation: 'Partnership with local authorities, secure compound designs, emergency evacuation protocols',
      color: 'border-red-400'
    },
    {
      risk: 'Supply Chain Disruption',
      level: 'Medium',
      mitigation: 'Multiple supplier networks, local stockpiling, alternative transportation routes',
      color: 'border-yellow-400'
    },
    {
      risk: 'Staff Retention',
      level: 'Medium',
      mitigation: 'Competitive compensation, career development, housing support',
      color: 'border-yellow-400'
    },
    {
      risk: 'Regulatory Changes',
      level: 'Low',
      mitigation: 'Government partnerships, legal framework agreements, compliance monitoring',
      color: 'border-green-400'
    }
  ];

  const getTimelineData = (month) => {
    if (month <= 6) return phases[0];
    if (month <= 24) return phases[1];
    return phases[2];
  };

  const currentPhase = getTimelineData(timelineMonth[0]);

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Implementation Roadmap
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          A comprehensive 60-month plan to rebuild Syria's healthcare system through three strategic phases
        </p>
      </div>

      {/* 3D Implementation Planning Map */}
      <div className="mb-12">
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white text-2xl text-center">3D Reconstruction Planning Interface</CardTitle>
            <p className="text-gray-300 text-center">Visualize deployment strategy across Syrian governorates</p>
          </CardHeader>
          <CardContent>
            <Interactive3DSyriaMap 
              currentLayer="deployment"
              persuasionElements={{
                exclusiveAccess: true,
                manufacturerCount: "140+",
                urgencyLevel: "high"
              }}
            />
          </CardContent>
        </Card>
      </div>

      {/* Interactive Timeline */}
      <Card className="bg-slate-800 border-slate-700 mb-12">
        <CardHeader>
          <CardTitle className="text-white text-2xl text-center">Interactive Timeline</CardTitle>
          <p className="text-gray-300 text-center">Drag the slider to explore different phases</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="px-4">
              <Slider
                value={timelineMonth}
                onValueChange={setTimelineMonth}
                max={60}
                min={0}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-400 mt-2">
                <span>Month 0</span>
                <span>Month 30</span>
                <span>Month 60</span>
              </div>
            </div>
            
            <div className="bg-slate-700 p-6 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-white">{currentPhase.phase}</h3>
                <span className="text-teal-400 font-bold">{currentPhase.investment}</span>
              </div>
              <p className="text-gray-300 mb-4">{currentPhase.description}</p>
              <div className="grid md:grid-cols-2 gap-4">
                {currentPhase.deliverables.map((deliverable, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-300">
                    <span className="w-2 h-2 bg-teal-400 rounded-full mr-3"></span>
                    {deliverable}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Phase Overview */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {phases.map((phase, index) => (
          <Card key={index} className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white text-lg">{phase.phase}</CardTitle>
              <p className="text-teal-400 font-semibold">{phase.duration}</p>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4 text-sm">{phase.description}</p>
              <div className="space-y-2">
                {phase.deliverables.map((deliverable, deliverableIndex) => (
                  <div key={deliverableIndex} className="flex items-start text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                    {deliverable}
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-slate-600">
                <div className="text-xl font-bold text-teal-400">{phase.investment}</div>
                <div className="text-xs text-gray-400">Investment Required</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Risk Management */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white text-2xl text-center">Risk Management Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {riskMitigations.map((risk, index) => (
              <div key={index} className={`border-l-4 ${risk.color} pl-4`}>
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold text-white">{risk.risk}</h4>
                  <span className={`text-xs px-2 py-1 rounded ${
                    risk.level === 'High' ? 'bg-red-900 text-red-300' :
                    risk.level === 'Medium' ? 'bg-yellow-900 text-yellow-300' :
                    'bg-green-900 text-green-300'
                  }`}>
                    {risk.level} Risk
                  </span>
                </div>
                <p className="text-sm text-gray-300">{risk.mitigation}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ImplementationSection;
