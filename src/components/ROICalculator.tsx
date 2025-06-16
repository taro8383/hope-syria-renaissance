
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Heart, Users, Building, TrendingUp, Download } from 'lucide-react';

const ROICalculator = () => {
  const [investment, setInvestment] = useState([200000000]); // $200M
  const [timeline, setTimeline] = useState([36]); // 36 months

  const calculateOutputs = () => {
    const investmentMillion = investment[0] / 1000000;
    const timelineFactor = 60 / timeline[0];
    
    return {
      livesSaved: Math.floor(investmentMillion * 2.5 * timelineFactor),
      healthcareWorkers: Math.floor(investmentMillion * 1.2),
      facilities: Math.floor((investment[0] / 10000000) * 3),
      economicImpact: investment[0] * 3.2
    };
  };

  const outputs = calculateOutputs();

  const presetScenarios = [
    { name: 'Emergency Response', investment: 50000000, timeline: 12 },
    { name: 'Comprehensive Rebuild', investment: 400000000, timeline: 48 },
    { name: 'Full Transformation', investment: 800000000, timeline: 60 }
  ];

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      notation: 'compact',
      maximumFractionDigits: 1
    }).format(value);
  };

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      notation: 'compact',
      maximumFractionDigits: 1
    }).format(value);
  };

  return (
    <Card className="bg-slate-800 border-slate-700 mb-12">
      <CardHeader>
        <CardTitle className="text-white text-2xl text-center">Calculate Your Reconstruction Impact</CardTitle>
        <p className="text-gray-300 text-center">Adjust parameters to see projected outcomes</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {/* Preset Scenarios */}
          <div>
            <h4 className="text-white font-medium mb-4">Quick Scenarios:</h4>
            <div className="grid md:grid-cols-3 gap-3">
              {presetScenarios.map((scenario) => (
                <Button
                  key={scenario.name}
                  variant="outline"
                  className="bg-slate-700 border-slate-600 text-white hover:bg-slate-600"
                  onClick={() => {
                    setInvestment([scenario.investment]);
                    setTimeline([scenario.timeline]);
                  }}
                >
                  {scenario.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Investment Slider */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-white font-medium">Initial Investment:</span>
              <span className="text-2xl font-bold text-teal-400">{formatCurrency(investment[0])}</span>
            </div>
            <Slider
              value={investment}
              onValueChange={setInvestment}
              max={800000000}
              min={50000000}
              step={10000000}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-400">
              <span>$50M</span>
              <span>$400M</span>
              <span>$800M</span>
            </div>
          </div>

          {/* Timeline Slider */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-white font-medium">Implementation Timeline:</span>
              <span className="text-2xl font-bold text-blue-400">{timeline[0]} months</span>
            </div>
            <Slider
              value={timeline}
              onValueChange={setTimeline}
              max={60}
              min={12}
              step={6}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-400">
              <span>12 months</span>
              <span>36 months</span>
              <span>60 months</span>
            </div>
          </div>

          {/* Output Metrics */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-700 p-4 rounded-lg text-center">
              <Heart className="w-8 h-8 text-red-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-red-400">{formatNumber(outputs.livesSaved)}</div>
              <div className="text-sm text-gray-300">Lives Saved Annually</div>
            </div>
            
            <div className="bg-slate-700 p-4 rounded-lg text-center">
              <Users className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-400">{formatNumber(outputs.healthcareWorkers)}</div>
              <div className="text-sm text-gray-300">Healthcare Workers Trained</div>
            </div>
            
            <div className="bg-slate-700 p-4 rounded-lg text-center">
              <Building className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-400">{outputs.facilities}</div>
              <div className="text-sm text-gray-300">Facilities Operational</div>
            </div>
            
            <div className="bg-slate-700 p-4 rounded-lg text-center">
              <TrendingUp className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-yellow-400">{formatCurrency(outputs.economicImpact)}</div>
              <div className="text-sm text-gray-300">Economic Impact (5 years)</div>
            </div>
          </div>

          {/* Export Button */}
          <div className="text-center">
            <Button className="bg-teal-600 hover:bg-teal-700 text-white">
              <Download className="w-4 h-4 mr-2" />
              Export Impact Projections
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ROICalculator;
