
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ProductFilter = ({ onFilterChange, products }) => {
  const [filters, setFilters] = useState({
    need: 'all',
    cost: 'all',
    complexity: 'all',
    climate: 'all',
    certification: 'all'
  });

  const filterOptions = {
    need: [
      { value: 'all', label: 'All Needs' },
      { value: 'emergency', label: 'Emergency' },
      { value: 'medium-term', label: 'Medium-term' },
      { value: 'long-term', label: 'Long-term' }
    ],
    cost: [
      { value: 'all', label: 'All Costs' },
      { value: 'low', label: '<$1K' },
      { value: 'medium', label: '$1K-$10K' },
      { value: 'high', label: '$10K+' }
    ],
    complexity: [
      { value: 'all', label: 'All Complexity' },
      { value: 'minimal', label: 'Minimal Training' },
      { value: 'moderate', label: 'Moderate Training' },
      { value: 'advanced', label: 'Advanced Training' }
    ],
    climate: [
      { value: 'all', label: 'All Climate' },
      { value: 'heat-stable', label: 'Heat-stable' },
      { value: 'cold-chain', label: 'Cold-chain' },
      { value: 'all-weather', label: 'All-weather' }
    ],
    certification: [
      { value: 'all', label: 'All Certifications' },
      { value: 'WHO', label: 'WHO Prequalified' },
      { value: 'FDA', label: 'FDA/CE Approved' },
      { value: 'other', label: 'Other Standards' }
    ]
  };

  const applyFilters = (newFilters) => {
    let filtered = [...products];

    // Apply cost filter
    if (newFilters.cost !== 'all') {
      filtered = filtered.filter(product => {
        if (newFilters.cost === 'low') return product.cost < 1000;
        if (newFilters.cost === 'medium') return product.cost >= 1000 && product.cost <= 10000;
        if (newFilters.cost === 'high') return product.cost > 10000;
        return true;
      });
    }

    // Apply complexity filter
    if (newFilters.complexity !== 'all') {
      filtered = filtered.filter(product => product.trainingRequired === newFilters.complexity);
    }

    // Apply certification filter
    if (newFilters.certification !== 'all') {
      filtered = filtered.filter(product => 
        product.certifications.includes(newFilters.certification)
      );
    }

    onFilterChange(filtered);
  };

  const updateFilter = (filterType, value) => {
    const newFilters = { ...filters, [filterType]: value };
    setFilters(newFilters);
    applyFilters(newFilters);
  };

  const clearFilters = () => {
    const clearedFilters = {
      need: 'all',
      cost: 'all',
      complexity: 'all',
      climate: 'all',
      certification: 'all'
    };
    setFilters(clearedFilters);
    onFilterChange(products);
  };

  return (
    <Card className="bg-slate-800 border-slate-700 mb-8">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-white">Advanced Filters</CardTitle>
          <Button variant="outline" size="sm" onClick={clearFilters}>
            Clear All
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-5 gap-4">
          {Object.entries(filterOptions).map(([filterType, options]) => (
            <div key={filterType} className="space-y-2">
              <label className="text-sm font-medium text-gray-300 capitalize">
                {filterType === 'need' ? 'By Need' : 
                 filterType === 'cost' ? 'By Cost' :
                 filterType === 'complexity' ? 'Training' :
                 filterType === 'climate' ? 'Climate' :
                 'Certification'}
              </label>
              <div className="space-y-1">
                {options.map((option) => (
                  <Button
                    key={option.value}
                    variant={filters[filterType] === option.value ? "default" : "ghost"}
                    size="sm"
                    className={`w-full justify-start text-xs ${
                      filters[filterType] === option.value
                        ? 'bg-teal-600 hover:bg-teal-700'
                        : 'text-gray-300 hover:bg-slate-700'
                    }`}
                    onClick={() => updateFilter(filterType, option.value)}
                  >
                    {option.label}
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductFilter;
