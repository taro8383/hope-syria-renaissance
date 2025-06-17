
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ChooseAscenBioSection = () => {
  const comparisonAspects = [
    {
      aspect: 'Approach',
      ascenbio: 'System rebuilding',
      traditional: 'Product selling',
      advantage: 'Comprehensive solutions'
    },
    {
      aspect: 'Timeline',
      ascenbio: 'Immediate deployment',
      traditional: '2-3 year relationship building',
      advantage: '90% faster start'
    },
    {
      aspect: 'Sustainability',
      ascenbio: 'Local capacity building',
      traditional: 'Temporary solutions',
      advantage: 'Long-term independence'
    },
    {
      aspect: 'Experience',
      ascenbio: 'Proven in challenging markets',
      traditional: 'Starting from scratch',
      advantage: 'Battle-tested expertise'
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Choose AscenBio
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Partner with proven healthcare system builders, not just product suppliers
        </p>
      </div>

      {/* Partnership Comparison Widget */}
      <div className="mb-16">
        <h3 className="text-3xl font-bold text-white mb-8 text-center">Partnership Model Comparison</h3>
        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-4 gap-6">
              {comparisonAspects.map((aspect, index) => (
                <div key={index} className="text-center">
                  <h4 className="text-lg font-semibold text-white mb-4">{aspect.aspect}</h4>
                  <div className="space-y-4">
                    <div className="p-3 bg-teal-900/50 rounded-lg border border-teal-600">
                      <Badge className="bg-teal-600 mb-2">AscenBio</Badge>
                      <p className="text-sm text-gray-300">{aspect.ascenbio}</p>
                    </div>
                    <div className="p-3 bg-red-900/50 rounded-lg border border-red-600">
                      <Badge variant="outline" className="border-red-400 text-red-400 mb-2">Traditional</Badge>
                      <p className="text-sm text-gray-300">{aspect.traditional}</p>
                    </div>
                    <div className="text-sm font-semibold text-green-400">
                      {aspect.advantage}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Contact Section */}
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-white mb-6">Start Your Partnership</h3>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Partner with AscenBio for comprehensive healthcare ecosystem development.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white">
            Download the Full Report
          </Button>
          <Button variant="outline" size="lg" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
            Schedule Capability Presentation
          </Button>
          <Button variant="outline" size="lg" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-white">
            Discuss Syria-Specific Solutions
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChooseAscenBioSection;
