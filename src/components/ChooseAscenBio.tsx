
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ChooseAscenBio = () => {
  const partnershipComparison = {
    ascenBio: {
      approach: 'System rebuilding',
      timeline: 'Immediate deployment',
      focus: 'Sustainable capacity',
      experience: 'Proven in +5 challenging markets',
      advantage: 'Battle-tested expertise'
    },
    traditional: {
      approach: 'Product selling',
      timeline: '2-3 year relationship building',
      focus: 'Temporary solutions',
      experience: 'Starting from scratch',
      advantage: 'Generic approaches'
    }
  };

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Choose AscenBio
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Your Strategic Healthcare Reconstruction Partner
        </p>
      </div>

      {/* Partnership Comparison Tool */}
      <Card className="bg-slate-800 border-slate-700 mb-12">
        <CardHeader>
          <CardTitle className="text-white text-2xl text-center">Why Choose AscenBio</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-teal-900/50 to-blue-900/50 p-6 rounded-lg border border-teal-500">
              <h3 className="text-xl font-bold text-teal-400 mb-4 text-center">AscenBio Model</h3>
              <div className="space-y-3">
                {Object.entries(partnershipComparison.ascenBio).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span className="text-gray-300 capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                    <span className="text-white font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-slate-700/50 p-6 rounded-lg border border-slate-600">
              <h3 className="text-xl font-bold text-red-400 mb-4 text-center">Traditional Contractors</h3>
              <div className="space-y-3">
                {Object.entries(partnershipComparison.traditional).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span className="text-gray-400 capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                    <span className="text-gray-300">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Download Section */}
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-white mb-6">Learn more</h3>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Discover how we can transform Syrian Healthcare together.
        </p>
        <a 
          href="/assets/docs/Syria Healthcare System Reconstruction.pdf" 
          download="Syria Healthcare System Reconstruction.pdf"
          className="inline-block"
        >
          <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-12 py-4 text-lg">
            Download the Full Report
          </Button>
        </a>
        <p className="text-gray-400 mt-4">Comprehensive implementation plan</p>
      </div>
    </div>
  );
};

export default ChooseAscenBio;
