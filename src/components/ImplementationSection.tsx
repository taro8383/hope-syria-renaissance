
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';

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

      {/* Implementation Approach */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white text-2xl text-center">Implementation Approach</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300 text-center">
            Phased deployment strategy across Syria's 14 governorates, beginning with critical healthcare infrastructure in Damascus and Aleppo.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ImplementationSection;
