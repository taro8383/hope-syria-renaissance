
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import PhasedTechnicalServiceStrategy from '@/components/PhasedTechnicalServiceStrategy';

const AscenBioSolutionSection = () => {
  const solutionPillars = [
    {
      title: "Direct Supply Chain",
      description: "Immediate access to 140+ Chinese manufacturers without intermediaries",
      features: [
        "Direct manufacturer relationships",
        "Bulk purchasing power",
        "Quality assurance programs",
        "Rapid deployment capability"
      ],
      metrics: {
        suppliers: "140+",
        timeAdvantage: "75% faster",
        costSavings: "40-60%",
        qualityScore: "98%+"
      }
    },
    {
      title: "Technical Service Excellence",
      description: "Proven technical service strategy with Chinese Embassy endorsement",
      component: "PhasedTechnicalServiceStrategy"
    },
    {
      title: "Proven Track Record",
      description: "15+ years building healthcare systems in challenging markets",
      features: [
        "Healthcare system reconstruction",
        "Government partnership experience",
        "Crisis zone deployment expertise",
        "Sustainable capacity building"
      ],
      metrics: {
        suppliers: "15+ years",
        timeAdvantage: "Proven approach",
        costSavings: "System-wide",
        qualityScore: "Excellence"
      }
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          The AscenBio Solution
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Comprehensive healthcare ecosystem reconstruction through proven expertise and strategic partnerships
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 mb-16">
        {solutionPillars.map((pillar, index) => (
          <Card key={index} className="bg-slate-800 border-slate-700 h-full">
            <CardHeader>
              <CardTitle className="text-white text-xl">{pillar.title}</CardTitle>
              <p className="text-gray-300">{pillar.description}</p>
            </CardHeader>
            <CardContent>
              {pillar.component === "PhasedTechnicalServiceStrategy" ? (
                <div className="mt-4">
                  <Badge className="bg-red-600 mb-4">Embassy Endorsed</Badge>
                  <p className="text-sm text-gray-300 mb-4">
                    Three-phase technical service strategy with Chinese Embassy support
                  </p>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-teal-400">Phase 1</div>
                    <div className="text-sm text-gray-400">Syria Technical Center</div>
                  </div>
                </div>
              ) : (
                <>
                  {pillar.features && (
                    <div className="space-y-3 mb-6">
                      {pillar.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {pillar.metrics && (
                    <div className="grid grid-cols-2 gap-3">
                      {Object.entries(pillar.metrics).map(([key, value]) => (
                        <div key={key} className="text-center p-3 bg-slate-700 rounded">
                          <div className="text-lg font-bold text-teal-400">{value}</div>
                          <div className="text-xs text-gray-400 capitalize">
                            {key.replace(/([A-Z])/g, ' $1')}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Technical Service Strategy Component */}
      <PhasedTechnicalServiceStrategy />
    </div>
  );
};

export default AscenBioSolutionSection;
