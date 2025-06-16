
import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Building, Heart, Users, TrendingDown } from 'lucide-react';

interface GovernorateData {
  name: string;
  hospitals: { functional: number; destroyed: number; percentage: number };
  population: number;
  workforce: { remaining: number; displaced: number };
  diseaseOutbreaks: string[];
  height: 'low' | 'medium' | 'high';
  color: string;
  coordinates: { x: number; y: number };
}

interface Interactive3DSyriaMapProps {
  currentLayer?: string;
  animationMode?: boolean;
  onGovernorateClick?: (governorate: string) => void;
  persuasionElements?: any;
}

const Interactive3DSyriaMap = ({ 
  currentLayer = 'crisis',
  animationMode = false,
  onGovernorateClick,
  persuasionElements 
}: Interactive3DSyriaMapProps) => {
  const [selectedLayer, setSelectedLayer] = useState(currentLayer);
  const [timelinePosition, setTimelinePosition] = useState([0]);
  const [selectedGovernorate, setSelectedGovernorate] = useState<GovernorateData | null>(null);
  const [isTransforming, setIsTransforming] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);

  const governorateData: GovernorateData[] = [
    {
      name: "Aleppo",
      hospitals: { functional: 12, destroyed: 38, percentage: 24 },
      population: 4600000,
      workforce: { remaining: 30, displaced: 70 },
      diseaseOutbreaks: ["cholera", "measles"],
      height: "low",
      color: "#EF4444",
      coordinates: { x: 25, y: 20 }
    },
    {
      name: "Damascus",
      hospitals: { functional: 28, destroyed: 15, percentage: 65 },
      population: 2500000,
      workforce: { remaining: 55, displaced: 45 },
      diseaseOutbreaks: [],
      height: "medium",
      color: "#F59E0B",
      coordinates: { x: 35, y: 60 }
    },
    {
      name: "Homs",
      hospitals: { functional: 8, destroyed: 25, percentage: 24 },
      population: 1800000,
      workforce: { remaining: 25, displaced: 75 },
      diseaseOutbreaks: ["cholera"],
      height: "low",
      color: "#EF4444",
      coordinates: { x: 30, y: 45 }
    },
    {
      name: "Latakia",
      hospitals: { functional: 15, destroyed: 8, percentage: 65 },
      population: 1200000,
      workforce: { remaining: 60, displaced: 40 },
      diseaseOutbreaks: [],
      height: "medium",
      color: "#F59E0B",
      coordinates: { x: 15, y: 35 }
    },
    {
      name: "Idlib",
      hospitals: { functional: 3, destroyed: 42, percentage: 7 },
      population: 3000000,
      workforce: { remaining: 15, displaced: 85 },
      diseaseOutbreaks: ["cholera", "measles", "hepatitis"],
      height: "low",
      color: "#DC2626",
      coordinates: { x: 20, y: 25 }
    }
  ];

  const getReconstructedData = (governorate: GovernorateData) => ({
    ...governorate,
    hospitals: { ...governorate.hospitals, functional: 95, percentage: 95 },
    workforce: { remaining: 85, displaced: 15 },
    diseaseOutbreaks: [],
    height: "high" as const,
    color: "#10B981"
  });

  const handleVisionMode = () => {
    setIsTransforming(true);
    setTimeout(() => {
      setSelectedLayer('reconstruction');
      setIsTransforming(false);
    }, 2000);
  };

  const getCurrentData = () => {
    return selectedLayer === 'reconstruction' 
      ? governorateData.map(getReconstructedData)
      : governorateData;
  };

  const getHeightClass = (height: string) => {
    switch(height) {
      case 'low': return 'h-8';
      case 'medium': return 'h-16';
      case 'high': return 'h-24';
      default: return 'h-8';
    }
  };

  return (
    <Card className="bg-slate-800 border-slate-700">
      <CardHeader>
        <CardTitle className="text-white text-2xl text-center">
          Syria Healthcare Ecosystem - Current Crisis & Reconstruction Vision
        </CardTitle>
        <div className="flex justify-center gap-4 mb-4">
          <Button
            variant={selectedLayer === 'crisis' ? 'default' : 'outline'}
            onClick={() => setSelectedLayer('crisis')}
            className="bg-red-600 hover:bg-red-700"
          >
            Current Crisis
          </Button>
          <Button
            variant={selectedLayer === 'reconstruction' ? 'default' : 'outline'}
            onClick={() => setSelectedLayer('reconstruction')}
            className="bg-green-600 hover:bg-green-700"
          >
            Post-Reconstruction
          </Button>
          <Button
            onClick={handleVisionMode}
            className="bg-teal-600 hover:bg-teal-700"
            disabled={isTransforming}
          >
            {isTransforming ? 'Transforming...' : 'Vision Mode'}
          </Button>
        </div>
        
        {/* Persuasion Elements */}
        <div className="grid md:grid-cols-3 gap-2 mb-4">
          <Badge variant="outline" className="text-teal-400 border-teal-400 justify-center">
            THE ONLY PARTNER WITH DIRECT CHINESE MANUFACTURER ACCESS
          </Badge>
          <Badge variant="outline" className="text-blue-400 border-blue-400 justify-center">
            TRUSTED BY 140+ MANUFACTURERS
          </Badge>
          <Badge variant="outline" className="text-green-400 border-green-400 justify-center">
            RECOGNIZED BY WHO SUPPLIERS
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent>
        {/* 3D Map Visualization */}
        <div 
          ref={mapRef}
          className="relative bg-slate-900 rounded-lg p-8 mb-6 h-96 overflow-hidden"
          style={{
            background: 'linear-gradient(45deg, #1e293b 0%, #334155 100%)',
            perspective: '1000px'
          }}
        >
          {/* Syria Map Background */}
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full bg-gradient-to-br from-slate-600 to-slate-800 rounded-lg"></div>
          </div>
          
          {/* Governorate 3D Blocks */}
          {getCurrentData().map((governorate, index) => (
            <div
              key={governorate.name}
              className={`absolute transition-all duration-1000 cursor-pointer transform hover:scale-110 ${
                isTransforming ? 'animate-pulse' : ''
              }`}
              style={{
                left: `${governorate.coordinates.x}%`,
                top: `${governorate.coordinates.y}%`,
                transform: 'translateZ(0) rotateX(45deg)',
                transformStyle: 'preserve-3d'
              }}
              onClick={() => {
                setSelectedGovernorate(governorate);
                onGovernorateClick?.(governorate.name);
              }}
            >
              <div
                className={`w-12 ${getHeightClass(governorate.height)} rounded transition-all duration-1000`}
                style={{ backgroundColor: governorate.color }}
              >
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs text-white font-medium whitespace-nowrap">
                  {governorate.name}
                </div>
              </div>
            </div>
          ))}
          
          {/* Crisis Overlay Messages */}
          {selectedLayer === 'crisis' && (
            <div className="absolute top-4 left-4 text-red-400 text-sm font-bold animate-pulse">
              DELAYED DEPLOYMENT = 47 MORE LIVES AT RISK DAILY
            </div>
          )}
        </div>
        
        {/* Timeline Scrubber */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-white font-medium">Reconstruction Timeline:</span>
            <span className="text-teal-400 font-bold">{timelinePosition[0]} months</span>
          </div>
          <Slider
            value={timelinePosition}
            onValueChange={setTimelinePosition}
            max={60}
            min={0}
            step={1}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-400 mt-2">
            <span>Crisis State</span>
            <span>Phase 1: Emergency</span>
            <span>Phase 2: Rebuilding</span>
            <span>Full Recovery</span>
          </div>
        </div>
        
        {/* Selected Governorate Details */}
        {selectedGovernorate && (
          <Card className="bg-slate-700 border-slate-600">
            <CardHeader>
              <CardTitle className="text-white text-lg">{selectedGovernorate.name} Governorate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center">
                  <Building className="w-6 h-6 mx-auto mb-2" style={{ color: selectedGovernorate.color }} />
                  <div className="text-lg font-bold text-white">{selectedGovernorate.hospitals.percentage}%</div>
                  <div className="text-xs text-gray-400">Hospitals Functional</div>
                </div>
                <div className="text-center">
                  <Users className="w-6 h-6 mx-auto mb-2" style={{ color: selectedGovernorate.color }} />
                  <div className="text-lg font-bold text-white">{selectedGovernorate.workforce.remaining}%</div>
                  <div className="text-xs text-gray-400">Healthcare Workers</div>
                </div>
                <div className="text-center">
                  <Heart className="w-6 h-6 mx-auto mb-2" style={{ color: selectedGovernorate.color }} />
                  <div className="text-lg font-bold text-white">{(selectedGovernorate.population / 1000000).toFixed(1)}M</div>
                  <div className="text-xs text-gray-400">Population</div>
                </div>
                <div className="text-center">
                  <TrendingDown className="w-6 h-6 mx-auto mb-2" style={{ color: selectedGovernorate.color }} />
                  <div className="text-lg font-bold text-white">{selectedGovernorate.diseaseOutbreaks.length}</div>
                  <div className="text-xs text-gray-400">Active Outbreaks</div>
                </div>
              </div>
              
              {selectedGovernorate.diseaseOutbreaks.length > 0 && (
                <div className="mt-4">
                  <div className="text-sm text-red-400 font-medium mb-2">Active Disease Outbreaks:</div>
                  <div className="flex gap-2">
                    {selectedGovernorate.diseaseOutbreaks.map(disease => (
                      <Badge key={disease} variant="destructive" className="text-xs">
                        {disease}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </CardContent>
    </Card>
  );
};

export default Interactive3DSyriaMap;
