
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Users, Building, TrendingDown } from 'lucide-react';

interface CounterData {
  name: string;
  dailyRate?: number;
  monthlyRate?: number;
  weeklyRate?: number;
  quarterlyRate?: number;
  startTime: number;
  icon: string;
  color: string;
  urgencyMessage: string;
}

interface CrisisUrgencyTimerProps {
  position?: 'hero' | 'sticky' | 'cta';
  showDetails?: boolean;
  persuasionLevel?: 'high' | 'medium' | 'low';
}

const CrisisUrgencyTimer = ({ 
  position = 'hero',
  showDetails = true,
  persuasionLevel = 'high' 
}: CrisisUrgencyTimerProps) => {
  const [counters, setCounters] = useState<{ [key: string]: number }>({});
  const [isRunning, setIsRunning] = useState(true);
  const [startTime] = useState(Date.now());

  const counterData: CounterData[] = [
    {
      name: "Lives at Risk",
      dailyRate: 47,
      startTime: Date.now(),
      icon: "heart",
      color: "#EF4444",
      urgencyMessage: "Immediate partnership could prevent this"
    },
    {
      name: "Healthcare Workers Lost",
      monthlyRate: 125,
      startTime: Date.now(),
      icon: "users",
      color: "#F59E0B",
      urgencyMessage: "Professional retention programs available NOW"
    },
    {
      name: "Facilities Deteriorating",
      weeklyRate: 3,
      startTime: Date.now(),
      icon: "building",
      color: "#EF4444",
      urgencyMessage: "Immediate infrastructure support ready"
    },
    {
      name: "Manufacturing Capacity Decreasing",
      quarterlyRate: 5,
      startTime: Date.now(),
      icon: "trending-down",
      color: "#DC2626",
      urgencyMessage: "140+ suppliers at maximum capacity NOW"
    }
  ];

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      const currentTime = Date.now();
      const elapsedSeconds = (currentTime - startTime) / 1000;
      
      const newCounters = {};
      counterData.forEach(counter => {
        let value = 0;
        
        if (counter.dailyRate) {
          const perSecond = counter.dailyRate / (24 * 60 * 60);
          value = Math.floor(elapsedSeconds * perSecond);
        } else if (counter.monthlyRate) {
          const perSecond = counter.monthlyRate / (30 * 24 * 60 * 60);
          value = Math.floor(elapsedSeconds * perSecond);
        } else if (counter.weeklyRate) {
          const perSecond = counter.weeklyRate / (7 * 24 * 60 * 60);
          value = Math.floor(elapsedSeconds * perSecond);
        } else if (counter.quarterlyRate) {
          const perSecond = counter.quarterlyRate / (90 * 24 * 60 * 60);
          value = Math.floor(elapsedSeconds * perSecond * 100) / 100; // For percentage
        }
        
        newCounters[counter.name] = value;
      });
      
      setCounters(newCounters);
    }, 100);

    return () => clearInterval(interval);
  }, [isRunning, startTime]);

  const formatNumber = (value: number, isPercentage = false) => {
    if (isPercentage) {
      return `${value.toFixed(2)}%`;
    }
    return new Intl.NumberFormat('en-US').format(Math.floor(value));
  };

  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'heart': return <Heart className="w-6 h-6" />;
      case 'users': return <Users className="w-6 h-6" />;
      case 'building': return <Building className="w-6 h-6" />;
      case 'trending-down': return <TrendingDown className="w-6 h-6" />;
      default: return <Heart className="w-6 h-6" />;
    }
  };

  const getElapsedTime = () => {
    const elapsed = (Date.now() - startTime) / 1000;
    const days = Math.floor(elapsed / (24 * 60 * 60));
    const hours = Math.floor((elapsed % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((elapsed % (60 * 60)) / 60);
    
    if (days > 0) return `${days}d ${hours}h ${minutes}m`;
    if (hours > 0) return `${hours}h ${minutes}m`;
    return `${minutes}m`;
  };

  if (position === 'sticky') {
    return (
      <div className="fixed top-0 left-0 right-0 bg-red-600 text-white p-2 z-50 text-center text-sm font-bold animate-pulse">
        CRISIS ONGOING: {formatNumber(counters["Lives at Risk"] || 0)} lives at risk since you arrived • 
        OPTIMAL DEPLOYMENT WINDOW: NEXT 18 MONTHS
      </div>
    );
  }

  if (!showDetails) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {counterData.map((counter) => (
          <div key={counter.name} className="text-center">
            <div 
              className="text-xl font-bold animate-pulse"
              style={{ color: counter.color }}
            >
              {formatNumber(counters[counter.name] || 0, counter.name.includes('Capacity'))}
            </div>
            <div className="text-xs text-gray-400">{counter.name}</div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <Card className="bg-slate-800 border-red-600 border-2">
      <CardHeader className="pb-4">
        <CardTitle className="text-white text-xl text-center">
          Every Moment Without Action
        </CardTitle>
        <p className="text-red-400 text-center font-medium">The Human Cost of Delay</p>
        <div className="text-center text-sm text-gray-400">
          Time since page load: {getElapsedTime()}
        </div>
        
        {/* Optimal Window Warning */}
        <div className="bg-red-900 border border-red-600 p-3 rounded-lg text-center">
          <div className="text-red-300 font-bold text-sm mb-1">
            OPTIMAL DEPLOYMENT WINDOW: NEXT 18 MONTHS
          </div>
          <div className="text-red-400 text-xs">
            WITHOUT IMMEDIATE ACTION: Syria loses 125 healthcare workers monthly
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="grid md:grid-cols-2 gap-6">
          {counterData.map((counter) => (
            <div 
              key={counter.name} 
              className="bg-slate-700 p-4 rounded-lg border-l-4 animate-pulse"
              style={{ borderLeftColor: counter.color }}
            >
              <div className="flex items-center mb-3">
                <div style={{ color: counter.color }}>
                  {getIcon(counter.icon)}
                </div>
                <div className="ml-3">
                  <div className="text-white font-medium text-sm">{counter.name}</div>
                </div>
              </div>
              
              <div 
                className="text-3xl font-bold mb-2 transition-all duration-300"
                style={{ color: counter.color }}
              >
                {formatNumber(counters[counter.name] || 0, counter.name.includes('Capacity'))}
              </div>
              
              <div className="text-xs text-gray-400 mb-2">
                {counter.dailyRate && `+${counter.dailyRate}/day`}
                {counter.monthlyRate && `+${counter.monthlyRate}/month`}
                {counter.weeklyRate && `+${counter.weeklyRate}/week`}
                {counter.quarterlyRate && `+${counter.quarterlyRate}%/quarter`}
              </div>
              
              <div className="text-xs text-red-300 font-medium">
                {counter.urgencyMessage}
              </div>
            </div>
          ))}
        </div>
        
        {/* Control Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <Button
            onClick={() => setIsRunning(!isRunning)}
            variant="outline"
            size="sm"
            className="bg-slate-700 border-slate-600 text-white hover:bg-slate-600"
          >
            {isRunning ? 'Pause Crisis Timer' : 'Resume Crisis Timer'}
          </Button>
        </div>
        
        {/* Loss Aversion Triggers */}
        <div className="mt-6 space-y-2">
          <div className="text-red-400 text-sm font-bold text-center">
            EXCLUSIVE OPPORTUNITY: The only partner with direct Chinese manufacturer access
          </div>
          <div className="text-orange-400 text-xs text-center">
            MANUFACTURING DELAY: Capacity decreases 5% per quarter without action
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CrisisUrgencyTimer;
