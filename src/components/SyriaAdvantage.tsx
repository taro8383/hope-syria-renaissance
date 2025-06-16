
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ROICalculator from '@/components/ROICalculator';

const SyriaAdvantage = () => {
  const [selectedChallenge, setSelectedChallenge] = useState('infrastructure');

  const challengeSolutions = {
    infrastructure: {
      challenge: 'Destroyed healthcare infrastructure across 14 governorates',
      ascenBioSolution: 'Modular construction expertise with rapid deployment capability',
      advantage: 'Pre-established relationships with manufacturers enable 75% faster deployment',
      timeline: 'Operational facilities in 4-6 weeks vs. 6-12 months traditional approach'
    },
    workforce: {
      challenge: '70% of healthcare workforce displaced or emigrated',
      ascenBioSolution: 'Comprehensive training programs with university partnerships',
      advantage: 'Established retention strategies from challenging markets (85-98% retention rates)',
      timeline: 'Certified technicians in 3-6 months, full operational teams in 12 months'
    },
    supply: {
      challenge: 'Unreliable supply chains and equipment maintenance gaps',
      ascenBioSolution: 'Direct manufacturer relationships and local technical service capability',
      advantage: '140+ supplier network provides redundancy and negotiation power',
      timeline: 'Emergency supplies within weeks, sustained supply chains within 6 months'
    },
    sustainability: {
      challenge: 'Long-term operational and financial sustainability concerns',
      ascenBioSolution: 'University partnerships and knowledge transfer programs for self-sufficiency',
      advantage: 'Demonstrated 5-year transition pathway to 80% local funding and operation',
      timeline: 'Revenue generation starts Year 2, 80% self-sufficiency by Year 5'
    }
  };

  const competitiveComparison = [
    {
      factor: 'Deployment Speed',
      ascenBio: '4-6 weeks',
      traditional: '6-12 months',
      advantage: '75% faster'
    },
    {
      factor: 'Supplier Access',
      ascenBio: '140+ direct relationships',
      traditional: 'Limited distributor network',
      advantage: 'Better pricing & availability'
    },
    {
      factor: 'Local Experience',
      ascenBio: '15+ challenging markets',
      traditional: 'Starting from scratch',
      advantage: 'Crisis-resilient systems'
    },
    {
      factor: 'Training Retention',
      ascenBio: '85-98% retention rates',
      traditional: 'Unknown track record',
      advantage: 'Sustainable workforce development'
    },
    {
      factor: 'Cultural Adaptation',
      ascenBio: 'Localization expertise',
      traditional: 'Generic international approach',
      advantage: 'Higher acceptance & utilization'
    }
  ];

  const riskMitigation = [
    {
      risk: 'Political Instability',
      level: 'High',
      ascenBioMitigation: 'Experience in Venezuela, Colombia conflict zones - established protocols for operating in unstable environments',
      traditionalApproach: 'Limited experience with political risks',
      advantage: 'Crisis management protocols'
    },
    {
      risk: 'Supply Disruption',
      level: 'Medium',
      ascenBioMitigation: 'Multiple supplier networks across regions - inventory pre-positioning strategies',
      traditionalApproach: 'Single-source dependencies',
      advantage: '3x supply chain redundancy'
    },
    {
      risk: 'Staff Turnover',
      level: 'Medium',
      ascenBioMitigation: 'Comprehensive retention programs with 85-98% success rates',
      traditionalApproach: 'Standard employment packages',
      advantage: '40% better retention rates'
    },
    {
      risk: 'Technology Adoption',
      level: 'Low',
      ascenBioMitigation: 'Cultural adaptation expertise with community engagement protocols',
      traditionalApproach: 'One-size-fits-all deployment',
      advantage: '60% higher adoption rates'
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Syria Advantage
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Your Challenge is Our Specialty - Direct application of expertise to Syria's unique reconstruction needs
        </p>
      </div>

      {/* ROI Calculator */}
      <ROICalculator />

      {/* Challenge-Solution Matching Tool */}
      <Card className="bg-slate-800 border-slate-700 mb-12">
        <CardHeader>
          <CardTitle className="text-white text-2xl text-center">Challenge-Solution Matching</CardTitle>
          <p className="text-gray-300 text-center">Select a challenge to see how AscenBio's approach applies</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {Object.keys(challengeSolutions).map((key) => (
              <Button
                key={key}
                variant={selectedChallenge === key ? "default" : "outline"}
                className={`h-16 ${
                  selectedChallenge === key 
                    ? 'bg-teal-600 hover:bg-teal-700 text-white' 
                    : 'bg-slate-700 border-slate-600 text-gray-300 hover:bg-slate-600'
                }`}
                onClick={() => setSelectedChallenge(key)}
              >
                <span className="text-center text-sm capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
              </Button>
            ))}
          </div>

          <div className="bg-slate-700 p-6 rounded-lg">
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-red-400 mb-2">Syria's Challenge:</h4>
                <p className="text-gray-300">{challengeSolutions[selectedChallenge].challenge}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-blue-400 mb-2">AscenBio Solution:</h4>
                <p className="text-gray-300">{challengeSolutions[selectedChallenge].ascenBioSolution}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-teal-400 mb-2">Our Advantage:</h4>
                <p className="text-gray-300">{challengeSolutions[selectedChallenge].advantage}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-green-400 mb-2">Timeline:</h4>
                <p className="text-gray-300">{challengeSolutions[selectedChallenge].timeline}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Competitive Advantage Comparison */}
      <div className="mb-12">
        <h3 className="text-3xl font-bold text-white mb-8 text-center">Competitive Advantage Analysis</h3>
        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-600">
                    <th className="text-left p-4 text-white">Factor</th>
                    <th className="text-left p-4 text-teal-400">AscenBio</th>
                    <th className="text-left p-4 text-red-400">Traditional Contractors</th>
                    <th className="text-left p-4 text-green-400">Our Advantage</th>
                  </tr>
                </thead>
                <tbody>
                  {competitiveComparison.map((comparison, index) => (
                    <tr key={index} className="border-b border-slate-700 hover:bg-slate-700/50">
                      <td className="p-4 text-white font-medium">{comparison.factor}</td>
                      <td className="p-4 text-teal-300">{comparison.ascenBio}</td>
                      <td className="p-4 text-gray-400">{comparison.traditional}</td>
                      <td className="p-4 text-green-300">{comparison.advantage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Risk Mitigation Matrix */}
      <div>
        <h3 className="text-3xl font-bold text-white mb-8 text-center">Risk Mitigation Advantage</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {riskMitigation.map((risk, index) => (
            <Card key={index} className="bg-slate-800 border-slate-700">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="text-white text-lg">{risk.risk}</CardTitle>
                  <Badge 
                    variant="outline" 
                    className={`${
                      risk.level === 'High' ? 'border-red-400 text-red-400' :
                      risk.level === 'Medium' ? 'border-yellow-400 text-yellow-400' :
                      'border-green-400 text-green-400'
                    }`}
                  >
                    {risk.level} Risk
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-teal-400 mb-2">AscenBio Approach:</h5>
                    <p className="text-sm text-gray-300">{risk.ascenBioMitigation}</p>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-gray-400 mb-2">Traditional Approach:</h5>
                    <p className="text-sm text-gray-400">{risk.traditionalApproach}</p>
                  </div>
                  
                  <div className="bg-slate-700 p-3 rounded">
                    <h5 className="font-semibold text-green-400 text-sm mb-1">Our Advantage:</h5>
                    <p className="text-sm text-green-300">{risk.advantage}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SyriaAdvantage;
