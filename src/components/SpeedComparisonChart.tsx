
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Pause, RotateCcw } from 'lucide-react';

interface SpeedData {
  name: string;
  ascenBio: { time: number; unit: string; color: string };
  traditional: { time: number; unit: string; color: string };
}

const SpeedComparisonChart = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState<{ [key: string]: { ascenBio: number; traditional: number } }>({});
  const [animationSpeed, setAnimationSpeed] = useState(1);

  const categories: SpeedData[] = [
    {
      name: "Diagnostic Equipment",
      ascenBio: { time: 4, unit: "weeks", color: "#10B981" },
      traditional: { time: 8, unit: "months", color: "#EF4444" }
    },
    {
      name: "Modular Clinics", 
      ascenBio: { time: 2, unit: "months", color: "#10B981" },
      traditional: { time: 12, unit: "months", color: "#EF4444" }
    },
    {
      name: "Medical Equipment",
      ascenBio: { time: 4, unit: "weeks", color: "#10B981" },
      traditional: { time: 6, unit: "months", color: "#EF4444" }
    },
    {
      name: "Training Programs",
      ascenBio: { time: 1, unit: "months", color: "#10B981" },
      traditional: { time: 8, unit: "months", color: "#EF4444" }
    }
  ];

  const reset = () => {
    setIsPlaying(false);
    const initialProgress = {};
    categories.forEach(category => {
      initialProgress[category.name] = { ascenBio: 0, traditional: 0 };
    });
    setProgress(initialProgress);
  };

  useEffect(() => {
    reset();
  }, []);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = { ...prev };
        categories.forEach(category => {
          if (newProgress[category.name]) {
            // AscenBio progresses faster (weeks vs months)
            const ascenBioSpeed = 100 / (category.ascenBio.time * animationSpeed);
            const traditionalSpeed = 100 / (category.traditional.time * 4 * animationSpeed); // Convert months to weeks equivalent
            
            newProgress[category.name].ascenBio = Math.min(100, newProgress[category.name].ascenBio + ascenBioSpeed);
            newProgress[category.name].traditional = Math.min(100, newProgress[category.name].traditional + traditionalSpeed);
          }
        });
        return newProgress;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isPlaying, animationSpeed]);

  return (
    <Card className="bg-slate-800 border-slate-700 mb-8">
      <CardHeader>
        <CardTitle className="text-white text-xl">Deployment Speed Comparison</CardTitle>
        <p className="text-gray-300">AscenBio vs Traditional Procurement</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Controls */}
          <div className="flex items-center gap-4 mb-6">
            <Button
              onClick={() => setIsPlaying(!isPlaying)}
              variant="outline"
              size="sm"
              className="bg-slate-700 border-slate-600 text-white hover:bg-slate-600"
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
              {isPlaying ? 'Pause' : 'Play'}
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
              {[1, 2, 3].map(speed => (
                <Button
                  key={speed}
                  onClick={() => setAnimationSpeed(speed)}
                  variant={animationSpeed === speed ? "default" : "outline"}
                  size="sm"
                  className={`${
                    animationSpeed === speed 
                      ? 'bg-teal-600 hover:bg-teal-700' 
                      : 'bg-slate-700 border-slate-600 text-white hover:bg-slate-600'
                  }`}
                >
                  {speed}x
                </Button>
              ))}
            </div>
          </div>

          {/* Racing Bars */}
          <div className="space-y-6">
            {categories.map((category) => (
              <div key={category.name} className="space-y-3">
                <h4 className="text-white font-medium">{category.name}</h4>
                
                {/* AscenBio Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-green-400">AscenBio</span>
                    <span className="text-green-400">{category.ascenBio.time} {category.ascenBio.unit}</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-3">
                    <div 
                      className="bg-green-500 h-3 rounded-full transition-all duration-100 relative"
                      style={{ width: `${progress[category.name]?.ascenBio || 0}%` }}
                    >
                      {progress[category.name]?.ascenBio >= 100 && (
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-400 rounded-full animate-pulse" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Traditional Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-red-400">Traditional</span>
                    <span className="text-red-400">{category.traditional.time} {category.traditional.unit}</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-3">
                    <div 
                      className="bg-red-500 h-3 rounded-full transition-all duration-100"
                      style={{ width: `${progress[category.name]?.traditional || 0}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SpeedComparisonChart;
