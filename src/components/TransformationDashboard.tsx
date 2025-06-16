
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowDown } from 'lucide-react';

interface Metric {
  name: string;
  before: { value: number; total?: number; percentage?: number };
  after: { value: number; total?: number; percentage?: number };
  unit: string;
  icon: string;
  improvementType: 'increase' | 'decrease';
}

const TransformationDashboard = () => {
  const [showAfter, setShowAfter] = useState(false);
  const [animatedValues, setAnimatedValues] = useState<{ [key: string]: number }>({});

  const metrics: Metric[] = [
    {
      name: "Functional Hospitals",
      before: { value: 43, total: 100, percentage: 43 },
      after: { value: 95, total: 100, percentage: 95 },
      unit: "%",
      icon: "🏥",
      improvementType: "increase"
    },
    {
      name: "Healthcare Workers",
      before: { value: 30, total: 100, percentage: 30 },
      after: { value: 85, total: 100, percentage: 85 },
      unit: "%", 
      icon: "👨‍⚕️",
      improvementType: "increase"
    },
    {
      name: "Child Mortality Rate",
      before: { value: 8.7 },
      after: { value: 3.2 },
      unit: "per 1,000",
      icon: "👶",
      improvementType: "decrease"
    },
    {
      name: "Disease Outbreak Response",
      before: { value: 25, total: 100, percentage: 25 },
      after: { value: 90, total: 100, percentage: 90 },
      unit: "%",
      icon: "🛡️",
      improvementType: "increase"
    }
  ];

  useEffect(() => {
    const initialValues = {};
    metrics.forEach(metric => {
      initialValues[metric.name] = showAfter ? metric.after.value : metric.before.value;
    });
    setAnimatedValues(initialValues);

    if (showAfter) {
      const timeout = setTimeout(() => {
        const targetValues = {};
        metrics.forEach(metric => {
          targetValues[metric.name] = metric.after.value;
        });
        
        // Animate to target values
        const animationDuration = 2000;
        const steps = 60;
        const stepDuration = animationDuration / steps;
        
        metrics.forEach(metric => {
          const startValue = metric.before.value;
          const endValue = metric.after.value;
          const difference = endValue - startValue;
          
          for (let i = 0; i <= steps; i++) {
            setTimeout(() => {
              setAnimatedValues(prev => ({
                ...prev,
                [metric.name]: startValue + (difference * i / steps)
              }));
            }, i * stepDuration);
          }
        });
      }, 500);
      
      return () => clearTimeout(timeout);
    }
  }, [showAfter]);

  const getImprovementPercentage = (metric: Metric) => {
    if (metric.improvementType === 'increase') {
      return ((metric.after.value - metric.before.value) / metric.before.value * 100).toFixed(0);
    } else {
      return ((metric.before.value - metric.after.value) / metric.before.value * 100).toFixed(0);
    }
  };

  return (
    <Card className="bg-slate-800 border-slate-700 mb-12">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="text-white text-2xl">Syria Healthcare Transformation</CardTitle>
            <p className="text-gray-300">Current Crisis vs Post-Reconstruction</p>
          </div>
          <Button
            onClick={() => setShowAfter(!showAfter)}
            className={`${
              showAfter 
                ? 'bg-green-600 hover:bg-green-700' 
                : 'bg-red-600 hover:bg-red-700'
            } text-white`}
          >
            {showAfter ? 'Show Before' : 'Show After'}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-8">
          {metrics.map((metric) => (
            <div key={metric.name} className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{metric.icon}</span>
                <h4 className="text-white font-semibold">{metric.name}</h4>
              </div>
              
              {/* Progress Bar or Value Display */}
              {metric.before.percentage !== undefined ? (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className={showAfter ? 'text-green-400' : 'text-red-400'}>
                      {animatedValues[metric.name]?.toFixed(0) || metric.before.value}%
                    </span>
                    <span className="text-gray-400">
                      {showAfter ? 'Post-Reconstruction' : 'Current Crisis'}
                    </span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-4">
                    <div 
                      className={`h-4 rounded-full transition-all duration-2000 ${
                        showAfter ? 'bg-green-500' : 'bg-red-500'
                      }`}
                      style={{ 
                        width: `${animatedValues[metric.name] || metric.before.value}%` 
                      }}
                    />
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <div className={`text-3xl font-bold ${
                    showAfter ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {animatedValues[metric.name]?.toFixed(1) || metric.before.value}
                  </div>
                  <div className="text-sm text-gray-400">{metric.unit}</div>
                </div>
              )}
              
              {/* Improvement Indicator */}
              <div className="flex items-center justify-center gap-2 text-sm">
                {metric.improvementType === 'increase' ? (
                  <ArrowRight className="w-4 h-4 text-green-400" />
                ) : (
                  <ArrowDown className="w-4 h-4 text-green-400" />
                )}
                <span className="text-green-400 font-semibold">
                  {getImprovementPercentage(metric)}% improvement
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Summary */}
        <div className="mt-8 p-6 bg-gradient-to-r from-slate-700 to-slate-600 rounded-lg">
          <div className="text-center">
            <h4 className="text-white text-lg font-semibold mb-2">
              Transformation Impact Summary
            </h4>
            <p className="text-gray-300">
              AscenBio's comprehensive approach delivers measurable improvements across all critical healthcare metrics,
              transforming Syria from crisis to sustainable healthcare delivery.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TransformationDashboard;
