
import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Pause, RotateCcw } from 'lucide-react';

interface Counter {
  name: string;
  targetDaily?: number;
  targetWeekly?: number;
  icon: string;
  color: string;
  timeframe: 'daily' | 'weekly';
}

interface LiveImpactCounterProps {
  showControls?: boolean;
  autoStart?: boolean;
  compact?: boolean;
}

const LiveImpactCounter = ({ 
  showControls = true, 
  autoStart = true,
  compact = false 
}: LiveImpactCounterProps) => {
  const [isRunning, setIsRunning] = useState(autoStart);
  const [speed, setSpeed] = useState(1);
  const [counters, setCounters] = useState<{ [key: string]: number }>({});
  const [startTime, setStartTime] = useState(Date.now());

  const counterData: Counter[] = [
    {
      name: "Lives Saved",
      targetDaily: 47,
      icon: "❤️",
      color: "#EF4444",
      timeframe: "daily"
    },
    {
      name: "Healthcare Workers Trained",
      targetDaily: 12,
      icon: "🎓",
      color: "#10B981", 
      timeframe: "daily"
    },
    {
      name: "Facilities Made Operational", 
      targetWeekly: 2,
      icon: "🏥",
      color: "#3B82F6",
      timeframe: "weekly"
    },
    {
      name: "Medical Equipment Deployed",
      targetDaily: 23,
      icon: "🏥", 
      color: "#F59E0B",
      timeframe: "daily"
    }
  ];

  const reset = () => {
    const initialCounters = {};
    counterData.forEach(counter => {
      initialCounters[counter.name] = 0;
    });
    setCounters(initialCounters);
    setStartTime(Date.now());
  };

  useEffect(() => {
    reset();
  }, []);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setCounters(prev => {
        const newCounters = { ...prev };
        const currentTime = Date.now();
        const elapsedSeconds = (currentTime - startTime) / 1000 * speed;
        
        counterData.forEach(counter => {
          if (counter.targetDaily) {
            // Daily targets: increment based on seconds elapsed
            const perSecond = counter.targetDaily / (24 * 60 * 60);
            newCounters[counter.name] = Math.floor(elapsedSeconds * perSecond);
          } else if (counter.targetWeekly) {
            // Weekly targets: increment based on seconds elapsed
            const perSecond = counter.targetWeekly / (7 * 24 * 60 * 60);
            newCounters[counter.name] = Math.floor(elapsedSeconds * perSecond);
          }
        });
        
        return newCounters;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isRunning, speed, startTime]);

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('en-US').format(value);
  };

  const getTimeDisplay = () => {
    const elapsed = (Date.now() - startTime) / 1000 * speed;
    const days = Math.floor(elapsed / (24 * 60 * 60));
    const hours = Math.floor((elapsed % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((elapsed % (60 * 60)) / 60);
    
    if (days > 0) return `${days}d ${hours}h ${minutes}m`;
    if (hours > 0) return `${hours}h ${minutes}m`;
    return `${minutes}m`;
  };

  if (compact) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {counterData.map((counter) => (
          <div key={counter.name} className="text-center">
            <div className="text-2xl mb-1">{counter.icon}</div>
            <div 
              className="text-2xl font-bold mb-1"
              style={{ color: counter.color }}
            >
              {formatNumber(counters[counter.name] || 0)}
            </div>
            <div className="text-xs text-gray-400">{counter.name}</div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <Card className="bg-slate-800 border-slate-700">
      <CardContent className="p-6">
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-white mb-2">Live Impact Simulation</h3>
          <p className="text-gray-300">What AscenBio partnership delivers</p>
          <div className="text-sm text-teal-400 mt-2">
            Simulation time elapsed: {getTimeDisplay()}
          </div>
        </div>

        {showControls && (
          <div className="flex items-center justify-center gap-4 mb-6">
            <Button
              onClick={() => setIsRunning(!isRunning)}
              variant="outline"
              size="sm"
              className="bg-slate-700 border-slate-600 text-white hover:bg-slate-600"
            >
              {isRunning ? <Pause size={16} /> : <Play size={16} />}
              {isRunning ? 'Pause' : 'Play'}
            </Button>
            <Button
              onClick={reset}
              variant="outline"
              size="sm"
              className="bg-slate-700 border-slate-600 text-white hover:bg-slate-600"
            >
              <RotateCcw size={16} />
              Reset
            </Button>
            <div className="flex gap-2">
              {[1, 5, 10, 100].map(speedOption => (
                <Button
                  key={speedOption}
                  onClick={() => setSpeed(speedOption)}
                  variant={speed === speedOption ? "default" : "outline"}
                  size="sm"
                  className={`${
                    speed === speedOption 
                      ? 'bg-teal-600 hover:bg-teal-700' 
                      : 'bg-slate-700 border-slate-600 text-white hover:bg-slate-600'
                  }`}
                >
                  {speedOption}x
                </Button>
              ))}
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {counterData.map((counter) => (
            <div key={counter.name} className="text-center space-y-2">
              <div className="text-3xl">{counter.icon}</div>
              <div 
                className="text-3xl font-bold transition-all duration-300"
                style={{ color: counter.color }}
              >
                {formatNumber(counters[counter.name] || 0)}
              </div>
              <div className="text-sm text-gray-300">{counter.name}</div>
              <div className="text-xs text-gray-500">
                {counter.timeframe === 'daily' 
                  ? `Target: ${counter.targetDaily}/day`
                  : `Target: ${counter.targetWeekly}/week`
                }
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default LiveImpactCounter;
