
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Factory, Plane, Calendar, Truck, Globe } from 'lucide-react';

const SyriaHealthcareFuture = () => {
  const [activeVision, setActiveVision] = useState('reconstruction');

  const transformationPhases = {
    reconstruction: {
      name: "Healthcare Reconstruction",
      timeline: "Years 1-2",
      description: "Foundation: Equipment deployment & service infrastructure",
      keyOutcomes: [
        "95% hospital functionality restored",
        "Technical service center operational",
        "Healthcare workforce return programs"
      ],
      economicImpact: "Healthcare access restored",
      color: "#EF4444",
      icon: Calendar
    },
    manufacturing: {
      name: "Manufacturing Attraction",
      timeline: "Years 3-5",
      description: "Transformation: Convincing manufacturers to establish Syria operations",
      expertise: "Proven manufacturer relocation experience from LATAM",
      keyOutcomes: [
        "Chinese medical equipment manufacturers establish local operations",
        "First pharmaceutical production facilities",
        "Job creation in high-value manufacturing"
      ],
      economicImpact: "Syria becomes healthcare equipment exporter",
      ascenBioExperience: "Following our LATAM biotechnology park strategy",
      color: "#F59E0B",
      icon: Factory
    },
    leadership: {
      name: "Regional Medical Hub",
      timeline: "Years 4-6",
      description: "Leadership: Syria as Middle East healthcare destination",
      keyOutcomes: [
        "World-class medical facilities operational",
        "Regional medical tourism industry",
        "Healthcare innovation & research centers",
        "Medical education exports to region"
      ],
      economicImpact: "Healthcare as primary economic engine",
      marketPosition: "Syria leading Middle East healthcare innovation",
      color: "#10B981",
      icon: Plane
    }
  };

  const manufacturingCredentials = [
    {
      achievement: "Biotechnology Park Development",
      location: "Latin America",
      status: "In progress",
      partnerships: "Government & university support secured",
      goal: "Continent's largest biotechnology park"
    },
    {
      achievement: "Chinese Manufacturer Relations",
      scope: "140+ direct relationships",
      capability: "Convincing companies to establish international operations",
      syrianApplication: "Same strategy applicable for Syria manufacturing base"
    },
      {
        title: "Embassy Partnership Model",
        description: "Received support from the Buenos Aires Chinese embassy to recognize our technical center as official for Chinese Brands in Latin America",
        icon: <Globe className="h-8 w-8 text-teal-400" />
      }
  ];

  const medicalTourismProjections = {
    year3Revenue: "Estimated $50M medical tourism revenue",
    year5Revenue: "Projected $200M+ annual medical tourism",
    jobCreation: "15,000+ direct & indirect healthcare jobs",
    regionalPosition: "Top 3 Middle East medical destinations"
  };

  const currentPhase = transformationPhases[activeVision];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Syria's Healthcare Future
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          From Recovery to Regional Leadership - Complete Economic Ecosystem Development
        </p>
      </div>

      {/* Vision Navigation */}
      <div className="grid md:grid-cols-3 gap-4 mb-12">
        {Object.entries(transformationPhases).map(([key, phase]) => {
          const IconComponent = phase.icon;
          return (
            <Button
              key={key}
              variant={activeVision === key ? "default" : "outline"}
              className={`h-24 p-4 transition-all duration-300 ${
                activeVision === key 
                  ? 'text-white border-2' 
                  : 'bg-slate-800 border-slate-600 text-gray-300 hover:bg-slate-700'
              }`}
              style={{ 
                backgroundColor: activeVision === key ? phase.color : undefined,
                borderColor: activeVision === key ? phase.color : undefined
              }}
              onClick={() => setActiveVision(key)}
            >
              <div className="text-center">
                <IconComponent className="w-6 h-6 mx-auto mb-2" />
                <div className="font-bold text-sm mb-1">{phase.name}</div>
                <div className="text-xs opacity-80">{phase.timeline}</div>
              </div>
            </Button>
          );
        })}
      </div>

      {/* Active Vision Content */}
      <Card className="bg-slate-800 border-slate-700 mb-12">
        <CardHeader>
          <CardTitle className="text-white text-2xl flex items-center gap-3">
            <currentPhase.icon className="w-8 h-8" style={{ color: currentPhase.color }} />
            {currentPhase.name}
          </CardTitle>
          <p className="text-gray-300">{currentPhase.description}</p>
          <Badge style={{ backgroundColor: currentPhase.color }} className="w-fit">
            {currentPhase.timeline}
          </Badge>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Key Outcomes</h4>
              <div className="space-y-3">
                {currentPhase.keyOutcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span 
                      className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: currentPhase.color }}
                    ></span>
                    <span className="text-gray-300">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Economic Impact</h4>
              <div className="p-4 bg-slate-700 rounded-lg">
                <p className="text-lg font-bold mb-2" style={{ color: currentPhase.color }}>
                  {currentPhase.economicImpact}
                </p>
                {currentPhase.ascenBioExperience && (
                  <p className="text-sm text-gray-300 mb-2">{currentPhase.ascenBioExperience}</p>
                )}
                {currentPhase.marketPosition && (
                  <p className="text-sm text-green-300">{currentPhase.marketPosition}</p>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Manufacturing Attraction Expertise */}
      {activeVision === 'manufacturing' && (
        <Card className="bg-slate-800 border-slate-700 mb-12">
          <CardHeader>
            <CardTitle className="text-white text-xl">Proven Manufacturer Relocation Experience</CardTitle>
            <p className="text-gray-300">AscenBio's Manufacturing Attraction Strategy</p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {manufacturingCredentials.map((credential, index) => (
                <div key={index} className="p-4 bg-slate-700 rounded-lg">
                  {credential.title ? (
                    <>
                      <h5 className="text-orange-400 font-semibold mb-3">{credential.title}</h5>
                      <p className="text-sm text-gray-300">{credential.description}</p>
                    </>
                  ) : (
                    <>
                      <h5 className="text-orange-400 font-semibold mb-3">{credential.achievement}</h5>
                      <div className="space-y-2 text-sm text-gray-300">
                        {credential.location && <p><strong>Location:</strong> {credential.location}</p>}
                        {credential.scope && <p><strong>Scope:</strong> {credential.scope}</p>}
                        {credential.status && <p><strong>Status:</strong> {credential.status}</p>}
                        {credential.capability && <p><strong>Capability:</strong> {credential.capability}</p>}
                        {credential.syrianApplication && (
                          <p className="text-teal-300 font-medium">{credential.syrianApplication}</p>
                        )}
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Medical Tourism Vision */}
      {activeVision === 'leadership' && (
        <Card className="bg-slate-800 border-slate-700 mb-12">
          <CardHeader>
            <CardTitle className="text-white text-xl">Syria: Future Regional Medical Destination</CardTitle>
            <p className="text-gray-300">Healthcare Excellence Attracts Regional Patients</p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h5 className="text-blue-400 font-semibold mb-4">Development Stages</h5>
                <div className="space-y-4">
                  <div className="p-3 bg-slate-700 rounded">
                    <div className="font-medium text-white">Foundation (Years 2-3)</div>
                    <div className="text-sm text-gray-300">World-class infrastructure establishment</div>
                  </div>
                  <div className="p-3 bg-slate-700 rounded">
                    <div className="font-medium text-white">Regional Recognition (Years 3-4)</div>
                    <div className="text-sm text-gray-300">Attracting regional patients</div>
                  </div>
                  <div className="p-3 bg-slate-700 rounded">
                    <div className="font-medium text-white">Economic Engine (Years 4+)</div>
                    <div className="text-sm text-gray-300">Healthcare as primary economic driver</div>
                  </div>
                </div>
              </div>
              <div>
                <h5 className="text-green-400 font-semibold mb-4">Economic Projections</h5>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-slate-700 rounded">
                    <div className="text-lg font-bold text-teal-400">$50M</div>
                    <div className="text-xs text-gray-400">Year 3 Revenue</div>
                  </div>
                  <div className="text-center p-3 bg-slate-700 rounded">
                    <div className="text-lg font-bold text-green-400">$200M+</div>
                    <div className="text-xs text-gray-400">Year 5 Revenue</div>
                  </div>
                  <div className="text-center p-3 bg-slate-700 rounded">
                    <div className="text-lg font-bold text-blue-400">15,000+</div>
                    <div className="text-xs text-gray-400">Healthcare Jobs</div>
                  </div>
                  <div className="text-center p-3 bg-slate-700 rounded">
                    <div className="text-lg font-bold text-orange-400">Top 3</div>
                    <div className="text-xs text-gray-400">Regional Position</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SyriaHealthcareFuture;
