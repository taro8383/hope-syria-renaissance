
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const SyriaAdvantageSection = () => {
  const [selectedChallenge, setSelectedChallenge] = useState('security');

  const challenges = {
    security: {
      title: 'Security & Safety Concerns',
      syriaSpecific: 'Ongoing security risks, need for secure compound designs',
      ascenBioSolution: 'Proven experience in Colombia conflict zones, security protocol expertise',
      advantage: 'Immediate deployment with battle-tested security frameworks'
    },
    logistics: {
      title: 'Complex Supply Chain',
      syriaSpecific: 'Damaged infrastructure, multiple border crossings, regulatory complexity',
      ascenBioSolution: 'Multi-modal transportation mastery from Amazonian Peru operations',
      advantage: 'Crisis-resilient logistics networks already established'
    },
    workforce: {
      title: 'Healthcare Workforce Shortage',
      syriaSpecific: '70% of healthcare workers displaced, need for rapid training',
      ascenBioSolution: '15+ university partnerships, proven retention strategies',
      advantage: 'Accelerated training programs with established methodologies'
    },
    cultural: {
      title: 'Cultural & Regulatory Adaptation',
      syriaSpecific: 'Complex regulatory environment, cultural sensitivity requirements',
      ascenBioSolution: '20 years of localization across diverse Latin American markets',
      advantage: 'Cultural adaptation frameworks ready for Middle Eastern context'
    }
  };

  const competitiveAdvantages = [
    {
      aspect: 'Deployment Speed',
      ascenbio: 'Immediate (existing relationships)',
      competitors: '2-3 years (relationship building)',
      advantage: '95% faster'
    },
    {
      aspect: 'Cost Efficiency',
      ascenbio: 'Volume purchasing power',
      competitors: 'Standard retail pricing',
      advantage: '30-40% savings'
    },
    {
      aspect: 'Technical Support',
      ascenbio: 'Comprehensive service network',
      competitors: 'Limited local support',
      advantage: 'Full lifecycle coverage'
    },
    {
      aspect: 'Sustainability',
      ascenbio: 'Local capacity building focus',
      competitors: 'Dependency-creating models',
      advantage: '80% local self-sufficiency'
    }
  ];

  const riskMitigations = [
    {
      risk: 'Supply Chain Disruption',
      ascenBioApproach: 'Multiple supplier networks, strategic stockpiling, alternative routes',
      traditionalRisk: 'Single-source dependencies, limited contingency planning'
    },
    {
      risk: 'Staff Retention',
      ascenBioApproach: 'Proven retention strategies, career development, community integration',
      traditionalRisk: 'High turnover, limited professional development'
    },
    {
      risk: 'Equipment Maintenance',
      ascenBioApproach: 'Local technical training, spare parts network, remote diagnostics',
      traditionalRisk: 'External dependency, expensive service calls'
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Syria Advantage
        </h2>
        <p className="text-2xl text-teal-400 mb-6 font-semibold">
          "Your Challenge is Our Specialty"
        </p>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Every challenge Syria presents is one we've successfully navigated in Latin America's most demanding markets
        </p>
      </div>

      {/* Challenge-Solution Matching Tool */}
      <div className="mb-16">
        <h3 className="text-3xl font-bold text-white mb-8 text-center">Challenge-Solution Matching</h3>
        
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          {Object.entries(challenges).map(([key, challenge]) => (
            <Button
              key={key}
              variant={selectedChallenge === key ? "default" : "outline"}
              className={`h-auto p-4 text-center transition-all duration-300 ${
                selectedChallenge === key 
                  ? 'bg-teal-600 hover:bg-teal-700 text-white border-teal-600' 
                  : 'bg-slate-800 border-slate-600 text-gray-300 hover:bg-slate-700'
              }`}
              onClick={() => setSelectedChallenge(key)}
            >
              <div className="text-sm font-bold">{challenge.title}</div>
            </Button>
          ))}
        </div>

        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-red-400 mb-3">Syria Challenge</h4>
                <p className="text-gray-300">{challenges[selectedChallenge].syriaSpecific}</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-3">AscenBio Solution</h4>
                <p className="text-gray-300">{challenges[selectedChallenge].ascenBioSolution}</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-green-400 mb-3">Your Advantage</h4>
                <p className="text-gray-300">{challenges[selectedChallenge].advantage}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Competitive Advantage Comparison */}
      <div className="mb-16">
        <h3 className="text-3xl font-bold text-white mb-8 text-center">AscenBio vs Traditional Contractors</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {competitiveAdvantages.map((advantage, index) => (
            <Card key={index} className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-lg text-center">{advantage.aspect}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <Badge className="bg-teal-600 mb-2">AscenBio</Badge>
                  <p className="text-sm text-gray-300">{advantage.ascenbio}</p>
                </div>
                <div className="text-center">
                  <Badge variant="outline" className="border-red-400 text-red-400 mb-2">Competitors</Badge>
                  <p className="text-sm text-gray-300">{advantage.competitors}</p>
                </div>
                <div className="text-center pt-2 border-t border-slate-600">
                  <div className="text-xl font-bold text-green-400">{advantage.advantage}</div>
                  <div className="text-xs text-gray-400">Advantage</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Risk Mitigation Matrix */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white text-2xl text-center">Risk Mitigation Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {riskMitigations.map((risk, index) => (
              <div key={index} className="grid md:grid-cols-3 gap-6 p-6 bg-slate-700 rounded-lg">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">{risk.risk}</h4>
                </div>
                <div>
                  <h5 className="font-semibold text-green-400 mb-2">AscenBio Approach</h5>
                  <p className="text-sm text-gray-300">{risk.ascenBioApproach}</p>
                </div>
                <div>
                  <h5 className="font-semibold text-red-400 mb-2">Traditional Risk</h5>
                  <p className="text-sm text-gray-300">{risk.traditionalRisk}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SyriaAdvantageSection;
