
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const StatsTicker = () => {
  const [animatedStats, setAnimatedStats] = useState({
    manufacturers: 0,
    deployment: 0,
    partnerships: 0,
    markets: 0
  });

  const targetStats = {
    manufacturers: 500,
    deployment: 75,
    partnerships: 25,
    markets: 15
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    const timer = setInterval(() => {
      setAnimatedStats(prev => ({
        manufacturers: Math.min(prev.manufacturers + targetStats.manufacturers / steps, targetStats.manufacturers),
        deployment: Math.min(prev.deployment + targetStats.deployment / steps, targetStats.deployment),
        partnerships: Math.min(prev.partnerships + targetStats.partnerships / steps, targetStats.partnerships),
        markets: Math.min(prev.markets + targetStats.markets / steps, targetStats.markets)
      }));
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      value: `${Math.round(animatedStats.manufacturers)}+`,
      label: 'Direct Manufacturer Relationships',
      description: 'Immediate Equipment Access',
      color: 'text-teal-400'
    },
    {
      value: `${Math.round(animatedStats.deployment)}%`,
      label: 'Faster Deployment',
      description: 'Weeks Not Months',
      color: 'text-blue-400'
    },
    {
      value: `${Math.round(animatedStats.partnerships)}+`,
      label: 'University Partnerships',
      description: 'Sustainable Local Capacity',
      color: 'text-green-400'
    },
    {
      value: `${Math.round(animatedStats.markets)}+`,
      label: 'Challenging Markets',
      description: 'Crisis-Resilient Logistics',
      color: 'text-orange-400'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
      {stats.map((stat, index) => (
        <Card key={index} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
          <CardContent className="p-6 text-center">
            <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
              {stat.value}
            </div>
            <div className="text-sm text-white font-medium mb-1">
              {stat.label}
            </div>
            <div className="text-xs text-gray-400 leading-tight">
              {stat.description}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StatsTicker;
