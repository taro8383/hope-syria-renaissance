
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import Interactive3DSyriaMap from '@/components/Interactive3DSyriaMap';

import { HEALTH_STATS, SOURCES } from '@/data/healthStats';

const CrisisSection = () => {
  const crisisData = [
    {
      title: 'Healthcare Infrastructure Damage',
      metrics: [
        { label: 'Hospitals Destroyed', value: HEALTH_STATS.hospitals.destroyed, total: 100, color: 'bg-red-500' },
        { label: 'Hospitals Damaged', value: HEALTH_STATS.hospitals.damaged, total: 100, color: 'bg-orange-500' },
        { label: 'Hospitals Functional', value: HEALTH_STATS.hospitals.functional, total: 100, color: 'bg-yellow-500' }
      ]
    },
    {
      title: 'Human Resources Crisis (vs Pre-War)',
      metrics: [
        { label: 'Doctors Remaining', value: HEALTH_STATS.workers.doctors.current, total: HEALTH_STATS.workers.doctors.preWar, color: 'bg-blue-500' },
        { label: 'Nurses Remaining', value: HEALTH_STATS.workers.nurses.current, total: HEALTH_STATS.workers.nurses.preWar, color: 'bg-purple-500' },
        { label: 'Specialists Remaining', value: HEALTH_STATS.workers.specialists.current, total: HEALTH_STATS.workers.specialists.preWar, color: 'bg-pink-500' }
      ]
    },
    {
      title: 'Disease Outbreak Risk',
      metrics: [
        { label: 'Vaccination Coverage', value: 65, total: 100, color: 'bg-green-500' },
        { label: 'Water Sanitation Access', value: 35, total: 100, color: 'bg-teal-500' },
        { label: 'Nutritional Support Coverage', value: 25, total: 100, color: 'bg-indigo-500' }
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          The Healthcare Crisis
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Over a decade of conflict has devastated Syria's healthcare system, leaving millions without access to essential medical services
        </p>
      </div>

      {/* 3D Interactive Syria Map */}
      <div className="mb-16">
        <Interactive3DSyriaMap />
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {crisisData.map((section, index) => (
          <Card key={index} className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white text-xl">{section.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {section.metrics.map((metric, metricIndex) => (
                <div key={metricIndex}>
                  <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-300">{metric.label}</span>
                  <span className="text-sm font-medium text-white">
                    {metric.label.includes('Destroyed') ? HEALTH_STATS.hospitals.destroyed :
                     metric.label.includes('Damaged') ? HEALTH_STATS.hospitals.damaged :
                     metric.label.includes('Functional') ? HEALTH_STATS.hospitals.functional :
                     metric.value}%
                  </span>
                  </div>
                  <Progress 
                    value={metric.value} 
                    className="h-2"
                  />
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Timeline Component */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white text-2xl text-center">Crisis Timeline: 2011-2024</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-teal-400"></div>
            {[
              { year: '2011', event: 'Conflict begins - Healthcare system starts deteriorating' },
              { year: '2013', event: '60% of hospitals damaged or destroyed' },
              { year: '2016', event: 'Mass exodus of healthcare workers begins' },
              { year: '2020', event: 'COVID-19 overwhelms remaining capacity' },
              { year: '2024', event: 'Current state: System requires complete reconstruction' }
            ].map((item, index) => (
              <div key={index} className="relative flex items-center mb-8 last:mb-0">
                <div className="absolute left-2 w-4 h-4 bg-teal-400 rounded-full border-4 border-slate-800"></div>
                <div className="ml-12">
                  <div className="text-teal-400 font-bold text-lg">{item.year}</div>
                  <div className="text-gray-300">{item.event}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CrisisSection;
