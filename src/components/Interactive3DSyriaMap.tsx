
import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
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
  deploymentPhase?: number;
  timeline?: string;
  priority?: string;
  facilities?: string[];
  equipment?: string[];
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
  const [selectedGovernorate, setSelectedGovernorate] = useState<GovernorateData | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  const crisisData: GovernorateData[] = [
    {
      name: "Damascus",
      population: 2500000,
      hospitals: { functional: 28, destroyed: 15, percentage: 65 },
      workforce: { remaining: 55, displaced: 45 },
      diseaseOutbreaks: [],
      height: "medium",
      color: "#F59E0B",
      coordinates: { x: 35, y: 60 }
    },
    {
      name: "Aleppo",
      population: 4600000,
      hospitals: { functional: 12, destroyed: 38, percentage: 24 },
      workforce: { remaining: 30, displaced: 70 },
      diseaseOutbreaks: ["cholera", "measles"],
      height: "low",
      color: "#EF4444",
      coordinates: { x: 25, y: 20 }
    },
    {
      name: "Homs",
      population: 1800000,
      hospitals: { functional: 8, destroyed: 22, percentage: 27 },
      workforce: { remaining: 25, displaced: 75 },
      diseaseOutbreaks: ["cholera"],
      height: "low",
      color: "#EF4444",
      coordinates: { x: 30, y: 45 }
    },
    {
      name: "Hama",
      population: 1750000,
      hospitals: { functional: 10, destroyed: 18, percentage: 36 },
      workforce: { remaining: 35, displaced: 65 },
      diseaseOutbreaks: [],
      height: "low",
      color: "#EF4444",
      coordinates: { x: 28, y: 38 }
    },
    {
      name: "Latakia",
      population: 1300000,
      hospitals: { functional: 15, destroyed: 8, percentage: 65 },
      workforce: { remaining: 60, displaced: 40 },
      diseaseOutbreaks: [],
      height: "medium",
      color: "#F59E0B",
      coordinates: { x: 15, y: 35 }
    },
    {
      name: "Tartus",
      population: 900000,
      hospitals: { functional: 12, destroyed: 5, percentage: 71 },
      workforce: { remaining: 65, displaced: 35 },
      diseaseOutbreaks: [],
      height: "medium",
      color: "#F59E0B",
      coordinates: { x: 18, y: 42 }
    },
    {
      name: "Daraa",
      population: 1200000,
      hospitals: { functional: 5, destroyed: 25, percentage: 17 },
      workforce: { remaining: 20, displaced: 80 },
      diseaseOutbreaks: ["cholera", "measles"],
      height: "low",
      color: "#EF4444",
      coordinates: { x: 40, y: 75 }
    },
    {
      name: "As-Suwayda",
      population: 500000,
      hospitals: { functional: 8, destroyed: 4, percentage: 67 },
      workforce: { remaining: 55, displaced: 45 },
      diseaseOutbreaks: [],
      height: "medium",
      color: "#F59E0B",
      coordinates: { x: 45, y: 70 }
    },
    {
      name: "Quneitra",
      population: 100000,
      hospitals: { functional: 1, destroyed: 8, percentage: 11 },
      workforce: { remaining: 15, displaced: 85 },
      diseaseOutbreaks: ["measles"],
      height: "low",
      color: "#EF4444",
      coordinates: { x: 38, y: 68 }
    },
    {
      name: "Deir ez-Zor",
      population: 1500000,
      hospitals: { functional: 4, destroyed: 20, percentage: 17 },
      workforce: { remaining: 20, displaced: 80 },
      diseaseOutbreaks: ["cholera", "polio"],
      height: "low",
      color: "#EF4444",
      coordinates: { x: 65, y: 40 }
    },
    {
      name: "Ar-Raqqa",
      population: 1000000,
      hospitals: { functional: 3, destroyed: 18, percentage: 14 },
      workforce: { remaining: 18, displaced: 82 },
      diseaseOutbreaks: ["cholera", "measles"],
      height: "low",
      color: "#EF4444",
      coordinates: { x: 55, y: 30 }
    },
    {
      name: "Al-Hasakah",
      population: 1600000,
      hospitals: { functional: 7, destroyed: 15, percentage: 32 },
      workforce: { remaining: 30, displaced: 70 },
      diseaseOutbreaks: ["cholera"],
      height: "low",
      color: "#EF4444",
      coordinates: { x: 70, y: 20 }
    },
    {
      name: "Idlib",
      population: 1500000,
      hospitals: { functional: 6, destroyed: 24, percentage: 20 },
      workforce: { remaining: 22, displaced: 78 },
      diseaseOutbreaks: ["cholera", "measles", "polio"],
      height: "low",
      color: "#EF4444",
      coordinates: { x: 20, y: 25 }
    },
    {
      name: "Rural Damascus",
      population: 3000000,
      hospitals: { functional: 18, destroyed: 35, percentage: 34 },
      workforce: { remaining: 32, displaced: 68 },
      diseaseOutbreaks: ["cholera"],
      height: "low",
      color: "#EF4444",
      coordinates: { x: 42, y: 55 }
    }
  ];

  const deploymentData: GovernorateData[] = [
    {
      name: "Damascus",
      population: 2500000,
      hospitals: { functional: 28, destroyed: 15, percentage: 65 },
      workforce: { remaining: 55, displaced: 45 },
      diseaseOutbreaks: [],
      height: "high",
      color: "#10B981",
      coordinates: { x: 35, y: 60 },
      deploymentPhase: 1,
      timeline: "Months 1-6",
      priority: "critical",
      facilities: ["Main Technical Service Center", "Training Facility"],
      equipment: ["Diagnostic equipment", "Emergency response kits"]
    },
    {
      name: "Aleppo",
      population: 4600000,
      hospitals: { functional: 12, destroyed: 38, percentage: 24 },
      workforce: { remaining: 30, displaced: 70 },
      diseaseOutbreaks: ["cholera", "measles"],
      height: "high",
      color: "#10B981",
      coordinates: { x: 25, y: 20 },
      deploymentPhase: 1,
      timeline: "Months 1-6",
      priority: "critical",
      facilities: ["Emergency Response Center", "Mobile clinics"],
      equipment: ["Basic medical equipment", "Infectious disease kits"]
    },
    {
      name: "Homs",
      population: 1800000,
      hospitals: { functional: 8, destroyed: 22, percentage: 27 },
      workforce: { remaining: 25, displaced: 75 },
      diseaseOutbreaks: ["cholera"],
      height: "medium",
      color: "#3B82F6",
      coordinates: { x: 30, y: 45 },
      deploymentPhase: 2,
      timeline: "Months 7-18",
      priority: "high",
      facilities: ["Regional Health Center", "Supply Distribution Hub"],
      equipment: ["Medical supplies", "Diagnostic tools"]
    },
    {
      name: "Hama",
      population: 1750000,
      hospitals: { functional: 10, destroyed: 18, percentage: 36 },
      workforce: { remaining: 35, displaced: 65 },
      diseaseOutbreaks: [],
      height: "medium",
      color: "#3B82F6",
      coordinates: { x: 28, y: 38 },
      deploymentPhase: 2,
      timeline: "Months 7-18",
      priority: "high",
      facilities: ["District Medical Center"],
      equipment: ["Basic medical equipment"]
    },
    {
      name: "Latakia",
      population: 1300000,
      hospitals: { functional: 15, destroyed: 8, percentage: 65 },
      workforce: { remaining: 60, displaced: 40 },
      diseaseOutbreaks: [],
      height: "medium",
      color: "#3B82F6",
      coordinates: { x: 15, y: 35 },
      deploymentPhase: 2,
      timeline: "Months 7-18",
      priority: "medium",
      facilities: ["Coastal Medical Complex"],
      equipment: ["Specialized equipment"]
    },
    {
      name: "Tartus",
      population: 900000,
      hospitals: { functional: 12, destroyed: 5, percentage: 71 },
      workforce: { remaining: 65, displaced: 35 },
      diseaseOutbreaks: [],
      height: "medium",
      color: "#3B82F6",
      coordinates: { x: 18, y: 42 },
      deploymentPhase: 2,
      timeline: "Months 7-18",
      priority: "medium",
      facilities: ["Port Medical Station"],
      equipment: ["Emergency supplies"]
    },
    {
      name: "Daraa",
      population: 1200000,
      hospitals: { functional: 5, destroyed: 25, percentage: 17 },
      workforce: { remaining: 20, displaced: 80 },
      diseaseOutbreaks: ["cholera", "measles"],
      height: "medium",
      color: "#10B981",
      coordinates: { x: 40, y: 75 },
      deploymentPhase: 1,
      timeline: "Months 1-6",
      priority: "critical",
      facilities: ["Border Medical Center"],
      equipment: ["Emergency response kits", "Infectious disease supplies"]
    },
    {
      name: "As-Suwayda",
      population: 500000,
      hospitals: { functional: 8, destroyed: 4, percentage: 67 },
      workforce: { remaining: 55, displaced: 45 },
      diseaseOutbreaks: [],
      height: "medium",
      color: "#F59E0B",
      coordinates: { x: 45, y: 70 },
      deploymentPhase: 3,
      timeline: "Months 19-36",
      priority: "medium",
      facilities: ["Regional Clinic"],
      equipment: ["Basic medical supplies"]
    },
    {
      name: "Quneitra",
      population: 100000,
      hospitals: { functional: 1, destroyed: 8, percentage: 11 },
      workforce: { remaining: 15, displaced: 85 },
      diseaseOutbreaks: ["measles"],
      height: "medium",
      color: "#F59E0B",
      coordinates: { x: 38, y: 68 },
      deploymentPhase: 3,
      timeline: "Months 19-36",
      priority: "low",
      facilities: ["Mobile Medical Unit"],
      equipment: ["Basic supplies"]
    },
    {
      name: "Deir ez-Zor",
      population: 1500000,
      hospitals: { functional: 4, destroyed: 20, percentage: 17 },
      workforce: { remaining: 20, displaced: 80 },
      diseaseOutbreaks: ["cholera", "polio"],
      height: "medium",
      color: "#10B981",
      coordinates: { x: 65, y: 40 },
      deploymentPhase: 1,
      timeline: "Months 1-6",
      priority: "critical",
      facilities: ["Emergency Medical Station"],
      equipment: ["Emergency kits", "Disease control supplies"]
    },
    {
      name: "Ar-Raqqa",
      population: 1000000,
      hospitals: { functional: 3, destroyed: 18, percentage: 14 },
      workforce: { remaining: 18, displaced: 82 },
      diseaseOutbreaks: ["cholera", "measles"],
      height: "medium",
      color: "#3B82F6",
      coordinates: { x: 55, y: 30 },
      deploymentPhase: 2,
      timeline: "Months 7-18",
      priority: "high",
      facilities: ["Reconstruction Medical Center"],
      equipment: ["Medical equipment", "Disease prevention supplies"]
    },
    {
      name: "Al-Hasakah",
      population: 1600000,
      hospitals: { functional: 7, destroyed: 15, percentage: 32 },
      workforce: { remaining: 30, displaced: 70 },
      diseaseOutbreaks: ["cholera"],
      height: "medium",
      color: "#3B82F6",
      coordinates: { x: 70, y: 20 },
      deploymentPhase: 2,
      timeline: "Months 7-18",
      priority: "high",
      facilities: ["Border Health Station"],
      equipment: ["Medical supplies", "Diagnostic equipment"]
    },
    {
      name: "Idlib",
      population: 1500000,
      hospitals: { functional: 6, destroyed: 24, percentage: 20 },
      workforce: { remaining: 22, displaced: 78 },
      diseaseOutbreaks: ["cholera", "measles", "polio"],
      height: "high",
      color: "#10B981",
      coordinates: { x: 20, y: 25 },
      deploymentPhase: 1,
      timeline: "Months 1-6",
      priority: "critical",
      facilities: ["Emergency Medical Station", "Mobile Clinic Network"],
      equipment: ["Emergency response kits", "Disease control supplies"]
    },
    {
      name: "Rural Damascus",
      population: 3000000,
      hospitals: { functional: 18, destroyed: 35, percentage: 34 },
      workforce: { remaining: 32, displaced: 68 },
      diseaseOutbreaks: ["cholera"],
      height: "medium",
      color: "#3B82F6",
      coordinates: { x: 42, y: 55 },
      deploymentPhase: 2,
      timeline: "Months 7-18",
      priority: "high",
      facilities: ["Rural Medical Network"],
      equipment: ["Medical equipment", "Emergency supplies"]
    }
  ];

  const getCurrentData = () => {
    return selectedLayer === 'crisis' ? crisisData : deploymentData;
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
          Syria Healthcare Ecosystem - Current Crisis & Deployment Strategy
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
            variant={selectedLayer === 'deployment' ? 'default' : 'outline'}
            onClick={() => setSelectedLayer('deployment')}
            className="bg-blue-600 hover:bg-blue-700"
          >
            Deployment Strategy
          </Button>
        </div>
        
      </CardHeader>
      
      <CardContent>
        {/* 3D Map Visualization - Responsive */}
        <div 
          ref={mapRef}
          className="relative bg-slate-900 rounded-lg p-4 md:p-8 mb-6 h-auto min-h-[400px] md:h-96 overflow-hidden pb-32 md:pb-0"
          style={{
            background: 'linear-gradient(45deg, #1e293b 0%, #334155 100%)',
            perspective: '1000px'
          }}
        >
          {/* Syria Map Background */}
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full bg-gradient-to-br from-slate-600 to-slate-800 rounded-lg"></div>
          </div>
          
          {/* Governorate 3D Blocks - Improved Layout */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 p-4">
            {getCurrentData().map((governorate, index) => (
              <div
                key={governorate.name}
                className="relative transition-all duration-300 cursor-pointer group"
                onClick={() => {
                  setSelectedGovernorate(governorate);
                  onGovernorateClick?.(governorate.name);
                }}
              >
                <div
                  className={`w-full ${getHeightClass(governorate.height)} rounded transition-all duration-300 
                    group-hover:scale-105 group-hover:z-10 group-hover:shadow-lg`}
                  style={{ 
                    backgroundColor: governorate.color,
                    transform: 'translateZ(0) rotateX(45deg)',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <div className="absolute -top-6 left-0 right-0 text-center text-xs text-white font-medium truncate px-1">
                    {governorate.name}
                  </div>
                  {selectedLayer === 'deployment' && governorate.deploymentPhase && (
                    <div className="absolute -bottom-4 left-0 right-0 text-center text-xs text-white bg-slate-700 px-1 rounded mx-auto w-max">
                      Phase {governorate.deploymentPhase}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Crisis Message - Bottom Positioned */}
          {selectedLayer === 'crisis' && (
            <div className="absolute bottom-4 left-0 w-full text-center text-red-400 text-xs md:text-sm font-bold animate-pulse z-20 px-4">
              DELAYED DEPLOYMENT = 47 MORE LIVES AT RISK DAILY
            </div>
          )}

          {/* Deployment Strategy Legend - Final Positioning */}
          {selectedLayer === 'deployment' && (
            <div className="absolute bottom-4 right-4 md:bottom-4 md:right-4 md:top-auto bg-slate-800 p-3 rounded text-xs text-white z-20">
              <div className="font-bold mb-2">Deployment Phases:</div>
              <div className="flex items-center mb-1">
                <div className="w-3 h-3 bg-green-500 rounded mr-2"></div>
                Phase 1: Months 1-6
              </div>
              <div className="flex items-center mb-1">
                <div className="w-3 h-3 bg-blue-500 rounded mr-2"></div>
                Phase 2: Months 7-18
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-orange-500 rounded mr-2"></div>
                Phase 3: Months 19-36
              </div>
            </div>
          )}
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
              
              {selectedLayer === 'deployment' && selectedGovernorate.deploymentPhase && (
                <div className="mt-4 p-3 bg-slate-600 rounded">
                  <div className="text-sm font-medium text-green-400 mb-2">
                    Deployment Phase {selectedGovernorate.deploymentPhase}: {selectedGovernorate.timeline}
                  </div>
                  <div className="text-sm text-gray-300 mb-2">
                    Priority: <span className="text-white font-medium">{selectedGovernorate.priority}</span>
                  </div>
                  {selectedGovernorate.facilities && (
                    <div className="mb-2">
                      <div className="text-sm text-gray-400 mb-2">Planned Facilities:</div>
                      <div className="flex flex-wrap gap-1">
                        {selectedGovernorate.facilities.map((facility, index) => (
                          <Badge key={index} variant="outline" className="text-xs border-green-400 text-green-400">
                            {facility}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  {selectedGovernorate.equipment && (
                    <div>
                      <div className="text-sm text-gray-400 mb-2">Equipment:</div>
                      <div className="flex flex-wrap gap-1">
                        {selectedGovernorate.equipment.map((equipment, index) => (
                          <Badge key={index} variant="outline" className="text-xs border-blue-400 text-blue-400">
                            {equipment}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

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
