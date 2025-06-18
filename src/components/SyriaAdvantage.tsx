
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SyriaAdvantage = () => {

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

    </div>
  );
};

export default SyriaAdvantage;
