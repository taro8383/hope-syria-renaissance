
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Factory, Calendar, Truck, Plane } from 'lucide-react';

const PhasedTechnicalServiceStrategy = () => {
  const [activePhase, setActivePhase] = useState(1);

  const phases = [
    {
      phaseNumber: 1,
      title: "SYRIA TECHNICAL SERVICE CENTER",
      timeline: "Months 1-12",
      description: "Immediate installation & repair capability",
      features: [
        "Physical installation & repair facility in Syria",
        "Chinese Embassy endorsed operations",
        "Proven LATAM model replication",
        "6-month deployment timeline",
        "Important: Only realistic solution for Phase 1"
      ],
      embassySupport: {
        title: "Official Chinese Brand Technical Service",
        subtitle: "Embassy Endorsed Partner",
        credential: "Following successful Chinese Embassy support in Argentina",
        badge: "embassyEndorsedFlag"
      },
      facilityVisualization: "3D mockup of proposed Syria technical center",
      color: "#EF4444"
    },
    {
      phaseNumber: 2,
      title: "LOCAL WORKFORCE DEVELOPMENT",
      timeline: "Months 6-24",
      description: "Knowledge transfer & gradual independence",
      features: [
        "AscenBio technician training programs",
        "Syrian workforce skill development",
        "Maintenance knowledge transfer systems",
        "Equipment lifecycle management training"
      ],
      localCapacityBuilding: "Progressive Syrian technician certification",
      color: "#F59E0B"
    },
    {
      phaseNumber: 3,
      title: "SELF-SUFFICIENT OPERATIONS",
      timeline: "Months 18-36",
      description: "Full Syrian-led technical capability",
      features: [
        "Complete local technical capability",
        "Ongoing manufacturer support systems",
        "Syrian-led operations management",
        "Regional technical hub potential"
      ],
      sustainability: "Full independence with manufacturer backing",
      color: "#10B981"
    }
  ];

  const currentPhase = phases.find(p => p.phaseNumber === activePhase);

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-white mb-4">Technical Service Excellence - Proven 3-Phase Approach</h3>
        <p className="text-gray-300">Immediate deployment to long-term sustainability</p>
      </div>

      {/* Phase Navigation */}
      <div className="grid md:grid-cols-3 gap-4">
        {phases.map((phase) => (
          <Button
            key={phase.phaseNumber}
            variant={activePhase === phase.phaseNumber ? "default" : "outline"}
            className={`h-24 p-4 transition-all duration-300 ${
              activePhase === phase.phaseNumber 
                ? 'text-white border-2' 
                : 'bg-slate-800 border-slate-600 text-gray-300 hover:bg-slate-700'
            }`}
            style={{ 
              backgroundColor: activePhase === phase.phaseNumber ? phase.color : undefined,
              borderColor: activePhase === phase.phaseNumber ? phase.color : undefined
            }}
            onClick={() => setActivePhase(phase.phaseNumber)}
          >
            <div className="text-center">
              <div className="font-bold text-sm mb-1">Phase {phase.phaseNumber}</div>
              <div className="text-xs">{phase.title}</div>
              <div className="text-xs opacity-80">{phase.timeline}</div>
            </div>
          </Button>
        ))}
      </div>

      {/* Active Phase Content */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-white text-2xl flex items-center gap-3">
                <span 
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold"
                  style={{ backgroundColor: currentPhase?.color }}
                >
                  {currentPhase?.phaseNumber}
                </span>
                {currentPhase?.title}
              </CardTitle>
              <p className="text-gray-300 mt-2">{currentPhase?.description}</p>
              <p className="text-sm" style={{ color: currentPhase?.color }}>{currentPhase?.timeline}</p>
            </div>
            {currentPhase?.phaseNumber === 1 && (
              <Badge className="bg-red-600 text-white">URGENT</Badge>
            )}
          </div>
        </CardHeader>
        <CardContent>
          {/* Embassy Support for Phase 1 */}
          {currentPhase?.phaseNumber === 1 && (
            <div className="mb-6 p-4 bg-gradient-to-r from-red-900/50 to-yellow-900/50 rounded-lg border border-yellow-600">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-8 bg-red-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">🇨🇳</span>
                </div>
                <div>
                  <h4 className="text-yellow-400 font-bold">{currentPhase.embassySupport.title}</h4>
                  <p className="text-yellow-300 text-sm">{currentPhase.embassySupport.subtitle}</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm">{currentPhase.embassySupport.credential}</p>
            </div>
          )}

          {/* Phase Features */}
          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-white mb-4">Phase Deliverables</h4>
            {currentPhase?.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <span 
                  className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                  style={{ backgroundColor: currentPhase.color }}
                ></span>
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>

          {/* Additional Phase-specific Content */}
          {currentPhase?.localCapacityBuilding && (
            <div className="mt-6 p-4 bg-slate-700 rounded-lg">
              <h5 className="text-orange-400 font-semibold mb-2">Capacity Building Focus:</h5>
              <p className="text-gray-300 text-sm">{currentPhase.localCapacityBuilding}</p>
            </div>
          )}

          {currentPhase?.sustainability && (
            <div className="mt-6 p-4 bg-slate-700 rounded-lg">
              <h5 className="text-green-400 font-semibold mb-2">Sustainability Outcome:</h5>
              <p className="text-gray-300 text-sm">{currentPhase.sustainability}</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* LATAM Success Story */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Proven Model: LATAM Technical Service Success</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-teal-400 mb-2">15+</div>
              <div className="text-sm text-gray-300">Technical Service Centers Operational</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400 mb-2">95%</div>
              <div className="text-sm text-gray-300">Equipment Uptime Achievement</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400 mb-2">3 Years</div>
              <div className="text-sm text-gray-300">Average Timeline to Local Independence</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PhasedTechnicalServiceStrategy;
