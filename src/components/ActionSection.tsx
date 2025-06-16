
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';

const ActionSection = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    message: ''
  });

  const investmentPackages = [
    {
      id: 'emergency',
      name: 'Emergency Response Package',
      amount: '$150M',
      duration: '6 months',
      focus: 'Immediate crisis response and mobile healthcare deployment',
      outcomes: [
        '50 mobile healthcare units',
        'Emergency medical supply distribution',
        '500 healthcare workers trained',
        'Primary healthcare service restoration'
      ],
      roi: '4.2x',
      color: 'border-red-400'
    },
    {
      id: 'comprehensive',
      name: 'Comprehensive Reconstruction',
      amount: '$400M',
      duration: '24 months',
      focus: 'Complete healthcare infrastructure rebuilding with supply chains',
      outcomes: [
        '200 primary healthcare centers',
        '20 district hospitals reconstructed',
        'Medical manufacturing facilities',
        'Healthcare information systems'
      ],
      roi: '5.8x',
      color: 'border-blue-400'
    },
    {
      id: 'integration',
      name: 'System Integration Package',
      amount: '$250M',
      duration: '36 months',
      focus: 'Advanced integration, technology deployment, and sustainability',
      outcomes: [
        'Complete network integration',
        '5,000 healthcare workers trained',
        'Self-sustaining supply chains',
        'Quality assurance implementation'
      ],
      roi: '6.5x',
      color: 'border-green-400'
    }
  ];

  const partnerOpportunities = [
    {
      type: 'Lead Investor',
      commitment: '$100M+',
      benefits: 'Strategic oversight, priority supplier status, government partnership access',
      slots: '3 available'
    },
    {
      type: 'Technology Partner',
      commitment: '$25M+',
      benefits: 'Technology licensing, training programs, market expansion rights',
      slots: '8 available'
    },
    {
      type: 'Implementation Partner',
      commitment: '$10M+',
      benefits: 'Regional contracts, local partnership opportunities, facility management',
      slots: '15 available'
    },
    {
      type: 'Supply Chain Partner',
      commitment: '$5M+',
      benefits: 'Preferred supplier status, long-term contracts, quality certifications',
      slots: '25 available'
    }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { ...formData, selectedPackage });
    // Handle form submission logic here
  };

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Take Action
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Join the coalition rebuilding Syria's healthcare system. Choose your investment level and partnership type.
        </p>
      </div>

      {/* Investment Packages */}
      <div className="mb-16">
        <h3 className="text-3xl font-bold text-white mb-8 text-center">Investment Packages</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {investmentPackages.map((pkg) => (
            <Card 
              key={pkg.id} 
              className={`bg-slate-800 border-2 cursor-pointer transition-all duration-300 hover:scale-105 ${
                selectedPackage === pkg.id ? pkg.color : 'border-slate-700'
              }`}
              onClick={() => setSelectedPackage(pkg.id)}
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-white text-lg">{pkg.name}</CardTitle>
                  <Badge variant="outline" className="text-teal-400 border-teal-400">
                    {pkg.roi} ROI
                  </Badge>
                </div>
                <div className="text-2xl font-bold text-teal-400">{pkg.amount}</div>
                <div className="text-sm text-gray-400">{pkg.duration} • {pkg.focus}</div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {pkg.outcomes.map((outcome, index) => (
                    <div key={index} className="flex items-start text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                      {outcome}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Partner Opportunities */}
      <div className="mb-16">
        <h3 className="text-3xl font-bold text-white mb-8 text-center">Partnership Opportunities</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partnerOpportunities.map((opportunity, index) => (
            <Card key={index} className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white text-lg">{opportunity.type}</CardTitle>
                <div className="text-xl font-bold text-teal-400">{opportunity.commitment}</div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-300 mb-4">{opportunity.benefits}</p>
                <Badge variant="outline" className="text-green-400 border-green-400">
                  {opportunity.slots}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white text-2xl">Get Involved</CardTitle>
            <p className="text-gray-300">Submit your information to receive a detailed investment proposal</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="bg-slate-700 border-slate-600 text-white"
                />
                <Input
                  placeholder="Organization"
                  value={formData.organization}
                  onChange={(e) => handleInputChange('organization', e.target.value)}
                  className="bg-slate-700 border-slate-600 text-white"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="bg-slate-700 border-slate-600 text-white"
                />
                <Input
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="bg-slate-700 border-slate-600 text-white"
                />
              </div>
              <Textarea
                placeholder="Tell us about your investment interests and goals..."
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                className="bg-slate-700 border-slate-600 text-white min-h-[100px]"
              />
              <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700">
                Request Investment Proposal
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white text-2xl">Next Steps</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 flex-shrink-0">
                  1
                </div>
                <div>
                  <div className="text-white font-medium">Initial Consultation</div>
                  <div className="text-sm text-gray-400">30-minute discovery call to discuss your investment goals and partnership preferences</div>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 flex-shrink-0">
                  2
                </div>
                <div>
                  <div className="text-white font-medium">Detailed Proposal</div>
                  <div className="text-sm text-gray-400">Custom investment package with financial projections, implementation timeline, and partnership agreements</div>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 flex-shrink-0">
                  3
                </div>
                <div>
                  <div className="text-white font-medium">Partnership Agreement</div>
                  <div className="text-sm text-gray-400">Legal framework finalization and investment commitment process</div>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4 flex-shrink-0">
                  4
                </div>
                <div>
                  <div className="text-white font-medium">Implementation Launch</div>
                  <div className="text-sm text-gray-400">Project kickoff with immediate deployment of selected healthcare solutions</div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-gradient-to-r from-teal-900/50 to-blue-900/50 rounded-lg">
              <div className="text-center">
                <div className="text-white font-semibold mb-2">Fast-Track Opportunity</div>
                <div className="text-sm text-gray-300">
                  First 10 lead investors receive priority partnership status and 15% cost reduction
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ActionSection;
