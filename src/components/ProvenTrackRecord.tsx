
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const ProvenTrackRecord = () => {
  const [expandedCase, setExpandedCase] = useState(null);

  const bioproductosSuccess = [
    {
      id: 'colombia-rural',
      country: 'Colombia',
      region: 'Rural Departments',
      challenge: 'Isolated communities with no healthcare access',
      solution: 'Mobile clinic network with satellite communication',
      timeline: '18 months',
      metrics: {
        peopleServed: '125,000',
        facilitiesEstablished: '45',
        localJobsCreated: '230',
        costReduction: '40%'
      },
      logistics: 'Complex mountain terrain navigation, seasonal weather challenges',
      image: new URL("../../assets/images/Afganistan.jpg", import.meta.url).href
    },
    {
      id: 'venezuela-crisis',
      country: 'Venezuela',
      region: 'Border Regions',
      challenge: 'Mass migration health crisis and supply shortages',
      solution: 'Emergency response hubs with cross-border coordination',
      timeline: '12 months',
      metrics: {
        peopleServed: '200,000',
        facilitiesEstablished: '30',
        localJobsCreated: '180',
        costReduction: '35%'
      },
      logistics: 'Political instability navigation, currency fluctuation management',
      image: new URL("../../assets/images/Liberia.jpeg", import.meta.url).href
    },
    {
      id: 'peru-amazon',
      country: 'Peru',
      region: 'Amazon Basin',
      challenge: 'Remote indigenous communities healthcare gaps',
      solution: 'River-based mobile clinics with cultural adaptation',
      timeline: '24 months',
      metrics: {
        peopleServed: '80,000',
        facilitiesEstablished: '25',
        localJobsCreated: '150',
        costReduction: '45%'
      },
      logistics: 'River transportation, seasonal flooding, indigenous protocols',
      image: new URL("../../assets/images/Yemen.jpg", import.meta.url).href
    }
  ];

  const partnershipBuilding = [
    {
      institution: 'Universidad Nacional de Colombia',
      type: 'Medical School Partnership',
      program: 'Rural Healthcare Specialization',
      graduates: '450+',
      retention: '82%',
      impact: 'Reduced rural doctor shortage by 35%'
    },
    {
      institution: 'Instituto Tecnológico de México',
      type: 'Technical Training Center',
      program: 'Medical Equipment Technician Certification',
      graduates: '320+',
      retention: '88%',
      impact: 'Local maintenance capacity increased 60%'
    },
    {
      institution: 'Universidad de Chile',
      type: 'Research Collaboration',
      program: 'Digital Health Innovation Lab',
      graduates: '200+',
      retention: '91%',
      impact: 'Developed 15 locally-adapted health technologies'
    }
  ];

  const localizationExpertise = [
    {
      country: 'Mexico',
      challenge: 'Cultural resistance to modern medical practices',
      approach: 'Traditional healer integration and community leader engagement',
      outcome: '75% increase in healthcare utilization',
      timeline: '8 months'
    },
    {
      country: 'Guatemala',
      challenge: 'Language barriers in indigenous communities',
      approach: 'Multilingual training programs and visual communication tools',
      outcome: '90% improvement in treatment compliance',
      timeline: '12 months'
    },
    {
      country: 'Ecuador',
      challenge: 'Geographic isolation and transportation barriers',
      approach: 'Community health worker network and telemedicine integration',
      outcome: '300% increase in preventive care access',
      timeline: '15 months'
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Proven Track Record
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Real results from challenging markets demonstrate our capability to deliver sustainable healthcare solutions
        </p>
      </div>

      {/* Bioproductos Latam Success Stories */}
      <div className="mb-16">
        <h3 className="text-3xl font-bold text-white mb-8 text-center">Bioproductos Latam Success Stories</h3>
        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
          {bioproductosSuccess.map((case_study, index) => (
            <Card key={case_study.id} className="bg-slate-800 border-slate-700 overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img 
                    src={case_study.image} 
                    alt={case_study.country}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-white">{case_study.country}</h4>
                      <p className="text-teal-400">{case_study.region}</p>
                    </div>
                    <Badge variant="outline" className="border-green-400 text-green-400">
                      {case_study.timeline}
                    </Badge>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-red-400 mb-1">Challenge:</h5>
                      <p className="text-sm text-gray-300">{case_study.challenge}</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-blue-400 mb-1">Solution:</h5>
                      <p className="text-sm text-gray-300">{case_study.solution}</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-yellow-400 mb-1">Logistics Mastery:</h5>
                      <p className="text-sm text-gray-300">{case_study.logistics}</p>
                    </div>

                    {expandedCase === case_study.id && (
                      <div className="bg-slate-700 p-4 rounded-lg">
                        <h5 className="font-semibold text-green-400 mb-3">Key Metrics:</h5>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-gray-400">People Served: </span>
                            <span className="text-white font-semibold">{case_study.metrics.peopleServed}</span>
                          </div>
                          <div>
                            <span className="text-gray-400">Facilities: </span>
                            <span className="text-white font-semibold">{case_study.metrics.facilitiesEstablished}</span>
                          </div>
                          <div>
                            <span className="text-gray-400">Local Jobs: </span>
                            <span className="text-white font-semibold">{case_study.metrics.localJobsCreated}</span>
                          </div>
                          <div>
                            <span className="text-gray-400">Cost Reduction: </span>
                            <span className="text-white font-semibold">{case_study.metrics.costReduction}</span>
                          </div>
                        </div>
                      </div>
                    )}

                    <Button
                      variant="outline"
                      size="sm"
                      className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white"
                      onClick={() => setExpandedCase(expandedCase === case_study.id ? null : case_study.id)}
                    >
                      {expandedCase === case_study.id ? 'Show Less' : 'View Metrics'}
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Partnership Building Evidence */}
      <div className="mb-16">
        <h3 className="text-3xl font-bold text-white mb-8 text-center">Local Partnership Building</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {partnershipBuilding.map((partnership, index) => (
            <Card key={index} className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-lg">{partnership.institution}</CardTitle>
                <Badge variant="secondary" className="w-fit">{partnership.type}</Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <span className="text-gray-400 text-sm">Program: </span>
                    <span className="text-white text-sm">{partnership.program}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <span className="text-gray-400">Graduates: </span>
                      <span className="text-teal-400 font-semibold">{partnership.graduates}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Retention: </span>
                      <span className="text-green-400 font-semibold">{partnership.retention}</span>
                    </div>
                  </div>
                  <div className="bg-slate-700 p-3 rounded">
                    <span className="text-gray-400 text-xs">Impact: </span>
                    <span className="text-white text-xs">{partnership.impact}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Localization Expertise */}
      <div>
        <h3 className="text-3xl font-bold text-white mb-8 text-center">Cultural Adaptation Expertise</h3>
        <div className="grid md:grid-cols-1 gap-6">
          {localizationExpertise.map((case_study, index) => (
            <Card key={index} className="bg-slate-800 border-slate-700">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-lg font-bold text-white">{case_study.country}</h4>
                  <Badge variant="outline" className="border-blue-400 text-blue-400">
                    {case_study.timeline}
                  </Badge>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h5 className="font-semibold text-red-400 mb-2">Cultural Challenge</h5>
                    <p className="text-sm text-gray-300">{case_study.challenge}</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-blue-400 mb-2">Our Approach</h5>
                    <p className="text-sm text-gray-300">{case_study.approach}</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-green-400 mb-2">Outcome</h5>
                    <p className="text-sm text-gray-300">{case_study.outcome}</p>
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

export default ProvenTrackRecord;
