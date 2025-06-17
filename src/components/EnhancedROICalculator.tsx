
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Factory, Plane, Truck, Calendar } from 'lucide-react';

const EnhancedROICalculator = () => {
  const [investment, setInvestment] = useState([200]);
  const [timeline, setTimeline] = useState([36]);

  const calculateMetrics = (investmentValue: number, timelineValue: number) => {
    return {
      manufacturingJobs: Math.floor((investmentValue / 1000000) * 0.8 * (timelineValue / 12)),
      medicalTourismRevenue: investmentValue * 0.4,
      exportPotential: investmentValue * 0.25 * (timelineValue / 36),
      regionalHubTimeline: Math.max(48, 60 - (investmentValue / 20000000))
    };
  };

  const metrics = calculateMetrics(investment[0] * 1000000, timeline[0]);

  const formatCurrency = (value: number) => {
    if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(1)}M`;
    }
    return `$${(value / 1000).toFixed(0)}K`;
  };

  return (
    <Card className="bg-slate-800 border-slate-700">
      <CardHeader>
        <CardTitle className="text-white text-2xl text-center">
          Economic Transformation Calculator
        </CardTitle>
        <p className="text-gray-300 text-center">
          Calculate the economic impact of Syria's healthcare transformation
        </p>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* Investment Slider */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <label className="text-white font-medium">Investment Amount</label>
            <span className="text-teal-400 font-bold text-xl">${investment[0]}M</span>
          </div>
          <Slider
            value={investment}
            onValueChange={setInvestment}
            max={800}
            min={100}
            step={25}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-400 mt-2">
            <span>$100M</span>
            <span>$400M</span>
            <span>$800M</span>
          </div>
        </div>

        {/* Timeline Slider */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <label className="text-white font-medium">Implementation Timeline</label>
            <span className="text-teal-400 font-bold text-xl">{timeline[0]} months</span>
          </div>
          <Slider
            value={timeline}
            onValueChange={setTimeline}
            max={60}
            min={24}
            step={6}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-400 mt-2">
            <span>24 months</span>
            <span>42 months</span>
            <span>60 months</span>
          </div>
        </div>

        {/* Economic Impact Metrics */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Manufacturing Impact</h4>
            
            <div className="flex items-center gap-3 p-4 bg-slate-700 rounded-lg">
              <Factory className="w-8 h-8 text-purple-400" />
              <div>
                <div className="text-2xl font-bold text-purple-400">
                  {metrics.manufacturingJobs.toLocaleString()}
                </div>
                <div className="text-sm text-gray-300">Manufacturing Jobs Created</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-slate-700 rounded-lg">
              <Truck className="w-8 h-8 text-green-400" />
              <div>
                <div className="text-2xl font-bold text-green-400">
                  {formatCurrency(metrics.exportPotential)}
                </div>
                <div className="text-sm text-gray-300">Annual Export Potential</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Tourism & Leadership</h4>
            
            <div className="flex items-center gap-3 p-4 bg-slate-700 rounded-lg">
              <Plane className="w-8 h-8 text-cyan-400" />
              <div>
                <div className="text-2xl font-bold text-cyan-400">
                  {formatCurrency(metrics.medicalTourismRevenue)}
                </div>
                <div className="text-sm text-gray-300">Medical Tourism Revenue (Year 5)</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-slate-700 rounded-lg">
              <Calendar className="w-8 h-8 text-orange-400" />
              <div>
                <div className="text-2xl font-bold text-orange-400">
                  {Math.round(metrics.regionalHubTimeline)}
                </div>
                <div className="text-sm text-gray-300">Regional Medical Hub Timeline (months)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Economic Summary */}
        <div className="p-6 bg-gradient-to-r from-slate-700 to-slate-600 rounded-lg">
          <h4 className="text-white text-lg font-semibold mb-4 text-center">
            Total Economic Transformation Impact
          </h4>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-teal-400">
                {formatCurrency(metrics.medicalTourismRevenue + metrics.exportPotential)}
              </div>
              <div className="text-sm text-gray-300">Combined Annual Revenue</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400">
                {(metrics.manufacturingJobs + 15000).toLocaleString()}
              </div>
              <div className="text-sm text-gray-300">Total Jobs Created</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400">
                {Math.round((metrics.medicalTourismRevenue + metrics.exportPotential) / (investment[0] * 1000000) * 100)}%
              </div>
              <div className="text-sm text-gray-300">Annual ROI</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EnhancedROICalculator;
