
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const StatsTicker = () => {
  const [animatedStats, setAnimatedStats] = useState({
    population: 0,
    hospitals: 0,
    workforce: 0,
    funding: 0
  });

  const targetStats = {
    population: 16.7,
    hospitals: 57,
    workforce: 70,
    funding: 11
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const interval = duration / steps;

    const timer = setInterval(() => {
      setAnimatedStats(prev => ({
        population: Math.min(prev.population + targetStats.population / steps, targetStats.population),
        hospitals: Math.min(prev.hospitals + targetStats.hospitals / steps, targetStats.hospitals),
        workforce: Math.min(prev.workforce + targetStats.workforce / steps, targetStats.workforce),
        funding: Math.min(prev.funding + targetStats.funding / steps, targetStats.funding)
      }));
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      value: `${animatedStats.population.toFixed(1)}M`,
      label: 'Syrians Need Assistance',
      color: 'text-red-400'
    },
    {
      value: `${Math.round(animatedStats.hospitals)}%`,
      label: 'Hospitals Non-Functional',
      color: 'text-orange-400'
    },
    {
      value: `${Math.round(animatedStats.workforce)}%`,
      label: 'Healthcare Workforce Displaced',
      color: 'text-yellow-400'
    },
    {
      value: `${Math.round(animatedStats.funding)}%`,
      label: 'Funding Gap ($2B Total)',
      color: 'text-blue-400'
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
            <div className="text-sm text-gray-300 leading-tight">
              {stat.label}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StatsTicker;
