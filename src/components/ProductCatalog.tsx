
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ProductFilter from '@/components/ProductFilter';
import { products } from '@/data/productData';

const ProductCatalog = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products', icon: '🏥' },
    { id: 'Diagnostic Tools', name: 'Diagnostic Tools', icon: '🔬' },
    { id: 'Emergency Triage & Trauma Assessment', name: 'Emergency/Trauma', icon: '🚑' },
    { id: 'Maternal & Neonatal Care', name: 'Maternal', icon: '👶' },
    { id: 'Infectious Disease Surveillance & Treatment', name: 'Infectious Disease', icon: '🦠' },
    { id: 'General Consumables & Infection Control', name: 'Consumables', icon: '🧤' },
    { id: 'Climate-Resilient & Supportive Equipment', name: 'Climate-Resilient', icon: '☀️' },
    { id: 'Rehabilitation & Prosthetics', name: 'Rehabilitation', icon: '🦾' },
    { id: 'Chronic Disease Management', name: 'Chronic Disease', icon: '💊' },
    { id: 'Scalable/Modular Systems', name: 'Scalable Systems', icon: '🏗️' },
    { id: 'Climate-Resilient Infrastructure', name: 'Infrastructure', icon: '⚡' }
  ];

  const getClimateRatingColor = (rating) => {
    if (rating >= 4) return 'text-green-400';
    if (rating >= 3) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getClimateRatingStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Product Catalog (Showing {filteredProducts.length} items)
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Recommended healthcare products for urgent stocking on crisis zones and developing healthcare systems
        </p>
      </div>

      {/* Category Navigation Wheel */}
      <div className="mb-12">
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4 max-w-6xl mx-auto">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              className={`min-h-[5rem] flex flex-col items-center justify-center py-2 transition-all duration-300 ${
                selectedCategory === category.id 
                  ? 'bg-teal-600 hover:bg-teal-700 text-white' 
                  : 'bg-slate-800 border-slate-600 text-gray-300 hover:bg-slate-700'
              }`}
              onClick={() => {
                setSelectedCategory(category.id);
                if (category.id === 'all') {
                  setFilteredProducts(products);
                } else {
                  setFilteredProducts(products.filter(p => p.category === category.id));
                }
              }}
            >
              <span className="text-lg mb-1">{category.icon}</span>
              <span 
                className="text-center leading-tight px-1 hyphens-auto break-word"
                style={{ fontSize: 'clamp(0.65rem, 1.5vw, 0.75rem)' }}
                title={category.name}
              >
                {category.name}
              </span>
            </Button>
          ))}
        </div>
      </div>

      {/* Search and Filter */}
      <div className="mb-8">
        <div className="relative max-w-2xl mx-auto mb-4">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-3 rounded-lg bg-slate-800 border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
            onChange={(e) => {
              const searchTerm = e.target.value.toLowerCase();
              setFilteredProducts(
                products.filter(product => {
                  const matchesName = product.name.toLowerCase().includes(searchTerm);
                  const matchesManufacturer = product.manufacturer.toLowerCase().includes(searchTerm);
                  const matchesCertification = product.certifications.some(
                    cert => cert.toLowerCase().includes(searchTerm)
                  );
                  return matchesName || matchesManufacturer || matchesCertification;
                })
              );
              setCurrentPage(1);
            }}
          />
          <div className="absolute right-3 top-3 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
        <div className="flex gap-4 max-w-4xl mx-auto">
          <ProductFilter onFilterChange={(filtered) => {
            setFilteredProducts(filtered);
            setCurrentPage(1);
          }} products={products} />
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {currentProducts.map((product) => (
          <Card key={product.id} className="bg-slate-800 border-slate-700 hover:bg-slate-700 transition-all duration-300">
            <CardHeader>
              <div className="mb-2">
                <CardTitle className="text-white text-lg leading-tight">{product.name}</CardTitle>
              </div>
                <Badge variant="secondary" className="text-xs">
                  {product.category}
                </Badge>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Manufacturer:</span>
                  <a href={product.website} target="_blank" rel="noopener noreferrer" className="text-sm text-teal-400 hover:underline">
                    {product.manufacturer}
                  </a>
                </div>

                {/* Temperature Requirements */}
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Temperature:</span>
                  <span className="text-sm text-white">
                    {product.temperature}
                  </span>
                </div>

                {/* Training Requirements */}
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Training:</span>
                  <span className="text-sm text-white">
                    {product.training}
                  </span>
                </div>

                {/* Certifications */}
                <div className="flex gap-1 flex-wrap">
                  {product.certifications.map((cert, index) => (
                    <Badge key={index} variant="outline" className="text-xs border-green-400 text-green-400">
                      {cert}
                    </Badge>
                  ))}
                </div>

                {/* Removed Add to Kit button per request */}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2 mb-12">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 rounded-md ${
              currentPage === i + 1
                ? 'bg-teal-600 text-white'
                : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* Certification Explanations */}
      <div className="mt-12 p-6 bg-slate-800 rounded-lg max-w-4xl mx-auto">
        <h3 className="text-xl font-semibold text-white mb-4">Certification Explanations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Badge variant="outline" className="text-xs border-green-400 text-green-400 mb-1">WHO Prequalified</Badge>
            <p className="text-sm text-gray-300">Meets World Health Organization quality standards</p>
          </div>
          <div>
            <Badge variant="outline" className="text-xs border-green-400 text-green-400 mb-1">CE</Badge>
            <p className="text-sm text-gray-300">European conformity marking for products sold in EEA</p>
          </div>
          <div>
            <Badge variant="outline" className="text-xs border-green-400 text-green-400 mb-1">FDA</Badge>
            <p className="text-sm text-gray-300">Approved by US Food and Drug Administration</p>
          </div>
          <div>
            <Badge variant="outline" className="text-xs border-green-400 text-green-400 mb-1">UNICEF</Badge>
            <p className="text-sm text-gray-300">Approved for procurement by UNICEF</p>
          </div>
          <div>
            <Badge variant="outline" className="text-xs border-green-400 text-green-400 mb-1">NGO</Badge>
            <p className="text-sm text-gray-300">Approved by major humanitarian organizations</p>
          </div>
          <div>
            <Badge variant="outline" className="text-xs border-green-400 text-green-400 mb-1">Experience</Badge>
            <p className="text-sm text-gray-300">Field-tested in humanitarian operations</p>
          </div>
        </div>
      </div>

      {/* Manufacturer Breakdown */}
      <div className="mt-12 p-6 bg-slate-800 rounded-lg max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-white mb-6">MANUFACTURER BREAKDOWN</h3>
        
        <div className="mb-8">
          <h4 className="text-lg font-semibold text-white mb-4">Total Unique Manufacturers: 72</h4>
          
          <h4 className="text-lg font-semibold text-white mb-2">Top Manufacturers by Product Count:</h4>
          <ul className="space-y-2">
            <li className="text-gray-300"><span className="font-medium text-teal-400">1. Guangzhou Wondfo Biotech Co., Ltd. / Wondfo Biotech</span> - 18 products (25.0%)</li>
            <li className="text-gray-300"><span className="font-medium text-teal-400">2. Winner Medical Co., Ltd.</span> - 8 products (11.1%)</li>
            <li className="text-gray-300"><span className="font-medium text-teal-400">3. Zhejiang Huahai Pharmaceutical Co., Ltd.</span> - 7 products (9.7%)</li>
            <li className="text-gray-300"><span className="font-medium text-teal-400">4. Jiangsu Zhengkang Medical Apparatus Co., Ltd.</span> - 6 products (8.3%)</li>
            <li className="text-gray-300"><span className="font-medium text-teal-400">5. Mindray Biomedical Electronics Co., Ltd.</span> - 4 products (5.6%)</li>
            <li className="text-gray-300"><span className="font-medium text-teal-400">6. Shinva Medical Instrument Co., Ltd.</span> - 4 products (5.6%)</li>
            <li className="text-gray-300"><span className="font-medium text-teal-400">7. Beijing Institute of Biological Products Co., Ltd. (BIBP)</span> - 4 products (5.6%)</li>
            <li className="text-gray-300"><span className="font-medium text-teal-400">8. Jiangsu Yuyue Medical Equipment & Supply Co., Ltd.</span> - 3 products (4.2%)</li>
            <li className="text-gray-300"><span className="font-medium text-teal-400">9. Baoding Med-Joy Medical Equipment Co., Ltd.</span> - 3 products (4.2%)</li>
            <li className="text-gray-300"><span className="font-medium text-teal-400">10. Tencent Healthcare Technology (Shenzhen) Co., Ltd.</span> - 3 products (4.2%)</li>
          </ul>
          <p className="text-gray-400 mt-2">Remaining 62 manufacturers - 1-2 products each (21.5%)</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Certification Distribution:</h4>
            <ul className="space-y-2 text-gray-300">
              <li>WHO Prequalified: <span className="text-teal-400">28.4%</span> of products</li>
              <li>CE Certified: <span className="text-teal-400">95.6%</span> of products</li>
              <li>FDA Approved: <span className="text-teal-400">22.4%</span> of products</li>
              <li>UNICEF Supply: <span className="text-teal-400">45.2%</span> of products</li>
              <li>NGO Experience: <span className="text-teal-400">78.9%</span> of products</li>
              <li>Humanitarian Experience: <span className="text-teal-400">89.3%</span> of products</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Training Requirements:</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Minimal Training: <span className="text-teal-400">52.6%</span> of products</li>
              <li>Moderate Training: <span className="text-teal-400">31.6%</span> of products</li>
              <li>Advanced Training: <span className="text-teal-400">15.8%</span> of products</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Temperature Requirements:</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Heat Stable: <span className="text-teal-400">84.2%</span> of products</li>
              <li>Cold Chain Required: <span className="text-teal-400">15.8%</span> of products</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCatalog;
