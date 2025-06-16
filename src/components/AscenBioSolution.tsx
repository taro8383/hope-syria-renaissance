
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const AscenBioSolution = () => {
  const [activePillar, setActivePillar] = useState('manufacturing');

  const manufacturingData = [
    { 
      region: 'Asia-Pacific', 
      suppliers: 180, 
      specialties: ['Diagnostics', 'Medical Devices', 'Pharmaceuticals'],
      deploymentTime: '2-3 weeks'
    },
    { 
      region: 'Europe', 
      suppliers: 125, 
      specialties: ['Advanced Equipment', 'Digital Health', 'Biotechnology'],
      deploymentTime: '3-4 weeks'
    },
    { 
      region: 'Americas', 
      suppliers: 95, 
      specialties: ['Emergency Equipment', 'Consumables', 'Infrastructure'],
      deploymentTime: '2-3 weeks'
    },
    { 
      region: 'Middle East', 
      suppliers: 60, 
      specialties: ['Regional Adaptation', 'Climate Solutions', 'Local Support'],
      deploymentTime: '1-2 weeks'
    }
  ];

  const trainingPrograms = [
    {
      level: 'Basic Technician',
      duration: '3 months',
      capacity: '50 people/cycle',
      certification: 'AscenBio Certified',
      retention: '85%'
    },
    {
      level: 'Advanced Specialist',
      duration: '6 months', 
      capacity: '25 people/cycle',
      certification: 'International Standard',
      retention: '92%'
    },
    {
      level: 'Trainer Certification',
      duration: '12 months',
      capacity: '10 people/cycle',
      certification: 'Master Trainer',
      retention: '98%'
    }
  ];

  const universityPartnerships = [
    {
      university: 'Universidad Nacional Colombia',
      programs: ['Medical Engineering', 'Healthcare Management'],
      students: 200,
      research: 'Medical Device Innovation'
    },
    {
      university: 'Instituto Tecnológico Mexico',
      programs: ['Biomedical Technology', 'Public Health'],
      students: 150,
      research: 'Rural Healthcare Delivery'
    },
    {
      university: 'Universidad de Chile',
      programs: ['Healthcare Systems', 'Medical Informatics'],
      students: 180,
      research: 'Digital Health Solutions'
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          The AscenBio Solution
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Three pillars of excellence that transform healthcare reconstruction from product supply to system building
        </p>
      </div>

      <Tabs value={activePillar} onValueChange={setActivePillar} className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-slate-800 mb-8">
          <TabsTrigger value="manufacturing" className="text-sm">Manufacturing Network</TabsTrigger>
          <TabsTrigger value="technical" className="text-sm">Technical Excellence</TabsTrigger>
          <TabsTrigger value="human-capital" className="text-sm">Human Capital</TabsTrigger>
        </TabsList>

        <TabsContent value="manufacturing" className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-xl">Global Supplier Network</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {manufacturingData.map((region, index) => (
                    <div key={index} className="border-l-4 border-teal-400 pl-4">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold text-white">{region.region}</h4>
                        <span className="text-teal-400 font-bold">{region.suppliers} suppliers</span>
                      </div>
                      <div className="text-sm text-gray-300 mb-2">
                        Deployment: <span className="text-green-400">{region.deploymentTime}</span>
                      </div>
                      <div className="flex gap-2 flex-wrap">
                        {region.specialties.map((specialty, i) => (
                          <span key={i} className="text-xs bg-slate-700 text-gray-300 px-2 py-1 rounded">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-xl">Speed Advantage</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-teal-400 mb-2">75%</div>
                    <div className="text-gray-300">Faster Deployment</div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-gray-300">AscenBio Network</span>
                        <span className="text-sm text-teal-400">2-4 weeks</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div className="bg-teal-400 h-2 rounded-full" style={{width: '25%'}}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-gray-300">Traditional Procurement</span>
                        <span className="text-sm text-red-400">6-12 months</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div className="bg-red-400 h-2 rounded-full" style={{width: '100%'}}></div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-700 p-4 rounded-lg">
                    <h5 className="font-semibold text-white mb-2">Volume Purchasing Benefits</h5>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• 15-25% cost reduction through bulk purchasing</li>
                      <li>• Priority allocation during supply constraints</li>
                      <li>• Customized packaging and logistics</li>
                      <li>• Extended warranty and support terms</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="technical" className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-xl">Training Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {trainingPrograms.map((program, index) => (
                    <div key={index} className="bg-slate-700 p-4 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-semibold text-white">{program.level}</h4>
                        <span className="text-green-400 font-bold">{program.retention} retention</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
                        <div>Duration: {program.duration}</div>
                        <div>Capacity: {program.capacity}</div>
                        <div className="col-span-2">Certification: {program.certification}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-xl">Sustainability Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { year: 'Year 1', milestone: 'Emergency equipment deployment + basic training', progress: 100 },
                    { year: 'Year 2', milestone: 'Advanced technician certification programs', progress: 80 },
                    { year: 'Year 3', milestone: 'Local maintenance and repair capabilities', progress: 60 },
                    { year: 'Year 4', milestone: 'Trainer certification and knowledge transfer', progress: 40 },
                    { year: 'Year 5', milestone: 'Full local operational independence', progress: 20 }
                  ].map((item, index) => (
                    <div key={index} className="relative">
                      <div className="flex items-center mb-2">
                        <div className="w-16 h-8 bg-teal-600 rounded flex items-center justify-center text-white text-xs font-bold mr-4">
                          {item.year}
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-white">{item.milestone}</div>
                          <div className="w-full bg-slate-700 rounded-full h-1 mt-1">
                            <div 
                              className="bg-teal-400 h-1 rounded-full transition-all duration-1000" 
                              style={{width: `${item.progress}%`}}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="human-capital" className="space-y-8">
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white text-xl">University Partnership Network</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {universityPartnerships.map((partnership, index) => (
                  <div key={index} className="bg-slate-700 p-4 rounded-lg">
                    <h4 className="font-semibold text-white mb-3">{partnership.university}</h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="text-gray-400">Students: </span>
                        <span className="text-teal-400 font-semibold">{partnership.students}</span>
                      </div>
                      <div>
                        <span className="text-gray-400">Research: </span>
                        <span className="text-white">{partnership.research}</span>
                      </div>
                      <div className="mt-3">
                        <span className="text-gray-400 text-xs">Programs:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {partnership.programs.map((program, i) => (
                            <span key={i} className="text-xs bg-slate-800 text-gray-300 px-2 py-1 rounded">
                              {program}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 bg-gradient-to-r from-teal-900/50 to-blue-900/50 p-6 rounded-lg">
                <h4 className="font-semibold text-white mb-4">Professional Development Programs</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-teal-400 font-medium mb-2">Returning Professionals</h5>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Certification renewal and upgrading</li>
                      <li>• Latest technology familiarization</li>
                      <li>• Leadership and management training</li>
                      <li>• International collaboration opportunities</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-blue-400 font-medium mb-2">Retention Strategies</h5>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Competitive compensation packages</li>
                      <li>• Housing and family support</li>
                      <li>• Career advancement pathways</li>
                      <li>• International exchange programs</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AscenBioSolution;
