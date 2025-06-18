
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import TransformationDashboard from '@/components/TransformationDashboard';
import { HEALTH_STATS, SOURCES } from '@/data/healthStats';

const ImpactSection = () => {
  const [investmentAmount, setInvestmentAmount] = useState([400]);

  const calculateImpact = (investment) => {
    return {
      livesSaved: HEALTH_STATS.projections.livesSaved(investment),
      facilitiesOperational: HEALTH_STATS.projections.facilities(investment),
      healthcareWorkers: Math.round(investment * 12.5), // 12.5 workers per $1M
      peopleServed: Math.round(investment * 25000), // 25,000 people per $1M
      jobsCreated: Math.round(investment * 150), // 150 jobs per $1M
      gdpImpact: (investment * 0.008).toFixed(1), // 0.8% GDP impact per $100M
      roiMultiplier: HEALTH_STATS.projections.roiMultiplier(investment)
    };
  };

  const impact = calculateImpact(investmentAmount[0]);

  const sustainabilityMilestones = [
    { year: 'Year 1', milestone: 'Emergency response established', funding: '100% International' },
    { year: 'Year 2', milestone: 'Local capacity building begins', funding: '80% International, 20% Local' },
    { year: 'Year 3', milestone: 'Revenue generation starts', funding: '60% International, 40% Local' },
    { year: 'Year 4', milestone: 'Self-sustaining operations', funding: '40% International, 60% Local' },
    { year: 'Year 5', milestone: 'Full financial independence', funding: '20% International, 80% Local' }
  ];

  const economicMetrics = [
    {
      title: 'Healthcare Sector GDP',
      before: '0.8%',
      after: '4.2%',
      change: '+425%'
    },
    {
      title: 'Medical Tourism Revenue',
      before: '$0M',
      after: '$180M',
      change: '+∞%'
    },
    {
      title: 'Pharmaceutical Production',
      before: '5%',
      after: '78%',
      change: '+1460%'
    },
    {
      title: 'Health Insurance Coverage',
      before: '12%',
      after: '85%',
      change: '+608%'
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Projected Impact
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Explore the transformative potential of healthcare investment in Syria
        </p>
      </div>

      {/* Before/After Transformation Dashboard */}
      <TransformationDashboard />

      {/* ROI Calculator */}
      <Card className="bg-slate-800 border-slate-700 mb-12">
        <CardHeader>
          <CardTitle className="text-white text-2xl text-center">ROI Calculator</CardTitle>
          <p className="text-gray-300 text-center">Adjust investment amount to see projected outcomes</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-white">Investment Amount:</span>
                <span className="text-2xl font-bold text-teal-400">${investmentAmount[0]}M</span>
              </div>
              <Slider
                value={investmentAmount}
                onValueChange={setInvestmentAmount}
                max={800}
                min={50}
                step={25}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-400 mt-2">
                <span>$50M</span>
                <span>$400M</span>
                <span>$800M</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-slate-700 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-green-400">{impact.livesSaved.toLocaleString()}</div>
                <div className="text-sm text-gray-300">Lives Saved</div>
              </div>
              <div className="bg-slate-700 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-400">{impact.facilitiesOperational}</div>
                <div className="text-sm text-gray-300">Facilities Operational</div>
              </div>
              <div className="bg-slate-700 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-purple-400">{impact.healthcareWorkers.toLocaleString()}</div>
                <div className="text-sm text-gray-300">Healthcare Workers</div>
              </div>
              <div className="bg-slate-700 p-4 rounded-lg text-center">
                <div className="text-2xl font-bold text-teal-400">{impact.peopleServed.toLocaleString()}</div>
                <div className="text-sm text-gray-300">People Served</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-teal-900/50 to-blue-900/50 p-6 rounded-lg">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">
                  {impact.roiMultiplier}x ROI
                </div>
                <div className="text-gray-300 mb-4">
                  Every $1 invested returns ${impact.roiMultiplier} in economic and social value
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-teal-400 font-semibold">{impact.jobsCreated.toLocaleString()}</span>
                    <span className="text-gray-300"> jobs created</span>
                  </div>
                  <div>
                    <span className="text-blue-400 font-semibold">{impact.gdpImpact}%</span>
                    <span className="text-gray-300"> GDP impact</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Economic Impact */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white text-xl">Economic Transformation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {economicMetrics.map((metric, index) => (
                <div key={index} className="flex justify-between items-center">
                  <div>
                    <div className="text-white font-medium">{metric.title}</div>
                    <div className="text-sm text-gray-400">Before → After</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-300">{metric.before} → {metric.after}</div>
                    <div className="text-green-400 font-semibold">{metric.change}</div>
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
              {sustainabilityMilestones.map((milestone, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 flex-shrink-0">
                    {milestone.year.split(' ')[1]}
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-medium">{milestone.milestone}</div>
                    <div className="text-sm text-gray-400">{milestone.funding}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Success Metrics Dashboard */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white text-2xl text-center">Success Metrics Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">95%</div>
              <div className="text-white font-medium mb-1">Healthcare Coverage</div>
              <div className="text-sm text-gray-400">Population with access to basic healthcare</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">80%</div>
              <div className="text-white font-medium mb-1">Self-Funding</div>
              <div className="text-sm text-gray-400">Operational sustainability by year 5</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">75%</div>
              <div className="text-white font-medium mb-1">Local Employment</div>
              <div className="text-sm text-gray-400">Healthcare workers hired locally</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="text-xs text-gray-500 mt-8 text-center">
        Projections based on {SOURCES.WHO} and {SOURCES.WORLD_BANK} models
      </div>
    </div>
  );
};

export default ImpactSection;
