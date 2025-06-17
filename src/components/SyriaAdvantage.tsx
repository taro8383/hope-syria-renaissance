
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';

const SyriaAdvantage = () => {
  const [investment, setInvestment] = useState([400]);

  const calculateROI = (investmentValue: number) => {
    return {
      peopleServed: Math.round(investmentValue * 25000), // 25,000 people per $1M
      facilitiesOperational: Math.round(investmentValue * 0.25), // 0.25 facilities per $1M
      healthcareWorkers: Math.round(investmentValue * 12.5), // 12.5 workers per $1M
      roiMultiplier: (2.5 + (investmentValue / 1000)).toFixed(1)
    };
  };

  const roi = calculateROI(investment[0]);

  const advantages = [
    {
      title: "Geographic Strategic Position",
      description: "Syria's location makes it ideal for regional healthcare hub development",
      metrics: {
        label: "Regional Market Access",
        value: "400M people",
        color: "text-blue-400"
      },
      details: [
        "Central position in Middle East",
        "Access to regional markets",
        "Strategic trade route location",
        "Proximity to major population centers"
      ]
    },
    {
      title: "Skilled Workforce Availability",
      description: "Syria has educated population ready for healthcare sector employment",
      metrics: {
        label: "Potential Healthcare Workers",
        value: "50,000+",
        color: "text-green-400"
      },
      details: [
        "Highly educated displaced professionals",
        "Medical training infrastructure exists",
        "Multilingual capabilities",
        "Strong work ethic and dedication"
      ]
    },
    {
      title: "Infrastructure Foundation",
      description: "Existing infrastructure can be rapidly rehabilitated and expanded",
      metrics: {
        label: "Rehabilitation Potential",
        value: "75%",
        color: "text-purple-400"
      },
      details: [
        "Existing hospital framework",
        "Educational institutions present",
        "Transportation networks available",
        "Communication infrastructure intact"
      ]
    },
    {
      title: "Government Reconstruction Commitment",
      description: "Strong government support for healthcare sector development",
      metrics: {
        label: "Reconstruction Priority",
        value: "#1",
        color: "text-orange-400"
      },
      details: [
        "Healthcare as top reconstruction priority",
        "Policy support for international partnerships",
        "Regulatory framework development",
        "Investment incentives available"
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          The Syria Advantage
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Why Syria represents the ideal opportunity for healthcare ecosystem development
        </p>
      </div>

      {/* Advantages Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {advantages.map((advantage, index) => (
          <Card key={index} className="bg-slate-800 border-slate-700">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-white text-xl">{advantage.title}</CardTitle>
                <Badge variant="outline" className="border-teal-400 text-teal-400">
                  Advantage #{index + 1}
                </Badge>
              </div>
              <p className="text-gray-300">{advantage.description}</p>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mb-4">
                <div className="text-center">
                  <div className={`text-3xl font-bold ${advantage.metrics.color}`}>
                    {advantage.metrics.value}
                  </div>
                  <div className="text-sm text-gray-400">{advantage.metrics.label}</div>
                </div>
              </div>
              <div className="space-y-2">
                {advantage.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-300 text-sm">{detail}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Basic ROI Calculator */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white text-2xl text-center">Investment Impact Calculator</CardTitle>
          <p className="text-gray-300 text-center">See the projected impact of healthcare investment in Syria</p>
        </CardHeader>
        <CardContent className="space-y-8">
          <div>
            <div className="flex justify-between items-center mb-4">
              <label className="text-white font-medium">Investment Amount</label>
              <span className="text-teal-400 font-bold text-xl">${investment[0]}M</span>
            </div>
            <Slider
              value={investment}
              onValueChange={setInvestment}
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
              <div className="text-2xl font-bold text-blue-400">{roi.peopleServed.toLocaleString()}</div>
              <div className="text-sm text-gray-300">People Served</div>
            </div>
            <div className="bg-slate-700 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-green-400">{roi.facilitiesOperational}</div>
              <div className="text-sm text-gray-300">Facilities Operational</div>
            </div>
            <div className="bg-slate-700 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-purple-400">{roi.healthcareWorkers.toLocaleString()}</div>
              <div className="text-sm text-gray-300">Healthcare Workers</div>
            </div>
            <div className="bg-slate-700 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-orange-400">{roi.roiMultiplier}x</div>
              <div className="text-sm text-gray-300">ROI Multiplier</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SyriaAdvantage;
