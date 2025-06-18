import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProductFilter = ({ onFilterChange, products }) => {
  const filterOptions = {
    training: [
      { value: 'all', label: 'All Training' },
      { value: 'Minimal', label: 'Minimal' },
      { value: 'Moderate', label: 'Moderate' },
      { value: 'Advanced', label: 'Advanced' }
    ],
    temperature: [
      { value: 'all', label: 'All Temperatures' },
      { value: 'Heat stable', label: 'Heat stable' },
      { value: 'Cold chain required', label: 'Cold chain' }
    ],
    certification: [
      { value: 'all', label: 'All Certifications' },
      { value: 'WHO Prequalified', label: 'WHO Prequalified' },
      { value: 'CE', label: 'CE Marked' },
      { value: 'FDA', label: 'FDA Approved' },
      { value: 'UNICEF', label: 'UNICEF Approved' },
      { value: 'NGO', label: 'NGO Recommended' },
      { value: 'Experience', label: 'Field Experience' }
    ]
  };

  const [activeFilters, setActiveFilters] = useState({
    training: 'all',
    temperature: 'all',
    certification: 'all'
  });

  const applyFilters = (filterType, value) => {
    setActiveFilters(prev => ({...prev, [filterType]: value}));
    
    let filtered = [...products];
    if (value !== 'all') {
      filtered = filtered.filter(product => {
        if (filterType === 'training') return product.training === value;
        if (filterType === 'temperature') return product.temperature === value;
        if (filterType === 'certification') return product.certifications.includes(value);
        return true;
      });
    }
    onFilterChange(filtered);
  };

  const clearAllFilters = () => {
    onFilterChange(products);
  };

  return (
    <Card className="bg-slate-800 border-slate-700">
      <CardHeader className="flex justify-between items-center">
        <CardTitle className="text-white">Filters</CardTitle>
        <Button 
          variant="ghost" 
          onClick={clearAllFilters}
          className="text-teal-400 hover:text-teal-300 hover:bg-slate-700"
        >
          Clear All
        </Button>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">

        {/* Training Filter */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300 capitalize truncate">Training</label>
          <div className="space-y-1">
            {filterOptions.training.map((option) => (
              <button
                key={option.value}
                onClick={() => applyFilters('training', option.value)}
                className={`inline-flex items-center gap-2 font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 rounded-md px-3 w-full justify-start text-xs truncate ${
                  activeFilters.training === option.value 
                    ? 'text-primary-foreground bg-teal-600 hover:bg-teal-700' 
                    : 'text-gray-300 hover:bg-slate-700'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Temperature Filter */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300 capitalize truncate">Temperature</label>
          <div className="space-y-1">
            {filterOptions.temperature.map((option) => (
              <button
                key={option.value}
                onClick={() => applyFilters('temperature', option.value)}
                className={`inline-flex items-center gap-2 font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 rounded-md px-3 w-full justify-start text-xs truncate ${
                  activeFilters.temperature === option.value 
                    ? 'text-primary-foreground bg-teal-600 hover:bg-teal-700' 
                    : 'text-gray-300 hover:bg-slate-700'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Certification Filter */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-300 capitalize truncate">Certification</label>
          <div className="space-y-1">
            {filterOptions.certification.map((option) => (
              <button
                key={option.value}
                onClick={() => applyFilters('certification', option.value)}
                className={`inline-flex items-center gap-2 font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 rounded-md px-3 w-full justify-start text-xs truncate ${
                  activeFilters.certification === option.value 
                    ? 'text-primary-foreground bg-teal-600 hover:bg-teal-700' 
                    : 'text-gray-300 hover:bg-slate-700'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductFilter;
