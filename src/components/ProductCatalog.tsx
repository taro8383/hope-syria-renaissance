
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ProductFilter from '@/components/ProductFilter';
import { productData } from '@/data/productData';

const ProductCatalog = () => {
  const [filteredProducts, setFilteredProducts] = useState(productData);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState([]);

  const categories = [
    { id: 'all', name: 'All Products', icon: '🏥' },
    { id: 'diagnostic', name: 'Diagnostic Tools', icon: '🔬' },
    { id: 'maternal', name: 'Maternal Care', icon: '👶' },
    { id: 'infectious', name: 'Infectious Disease', icon: '🦠' },
    { id: 'consumables', name: 'General Supplies', icon: '🧤' },
    { id: 'climate', name: 'Climate Equipment', icon: '☀️' },
    { id: 'rehabilitation', name: 'Rehabilitation', icon: '🦾' },
    { id: 'chronic', name: 'Chronic Disease', icon: '💊' },
    { id: 'modular', name: 'Modular Systems', icon: '🏗️' },
    { id: 'infrastructure', name: 'Infrastructure', icon: '⚡' }
  ];

  const addToCart = (product) => {
    setCart(prev => [...prev, product]);
    console.log('Added to cart:', product.name);
  };

  const getClimateRatingColor = (rating) => {
    if (rating >= 4) return 'text-green-400';
    if (rating >= 3) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getClimateRatingStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Product Catalog
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Comprehensive healthcare solutions designed for crisis zones and developing healthcare systems
        </p>
      </div>

      {/* Category Navigation Wheel */}
      <div className="mb-12">
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4 max-w-6xl mx-auto">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              className={`h-20 flex flex-col items-center justify-center text-xs transition-all duration-300 ${
                selectedCategory === category.id 
                  ? 'bg-teal-600 hover:bg-teal-700 text-white' 
                  : 'bg-slate-800 border-slate-600 text-gray-300 hover:bg-slate-700'
              }`}
              onClick={() => {
                setSelectedCategory(category.id);
                if (category.id === 'all') {
                  setFilteredProducts(productData);
                } else {
                  setFilteredProducts(productData.filter(p => p.category === category.id));
                }
              }}
            >
              <span className="text-lg mb-1">{category.icon}</span>
              <span className="text-center leading-tight">{category.name}</span>
            </Button>
          ))}
        </div>
      </div>

      {/* Product Filter */}
      <ProductFilter onFilterChange={setFilteredProducts} products={productData} />

      {/* Product Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {filteredProducts.map((product) => (
          <Card key={product.id} className="bg-slate-800 border-slate-700 hover:bg-slate-700 transition-all duration-300">
            <CardHeader>
              <div className="flex justify-between items-start mb-2">
                <CardTitle className="text-white text-lg leading-tight">{product.name}</CardTitle>
                <Badge variant="outline" className="border-teal-400 text-teal-400">
                  ${product.cost}
                </Badge>
              </div>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="secondary" className="text-xs">
                  {product.category}
                </Badge>
                <Badge variant="outline" className="text-xs">
                  {product.deploymentTime}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-300 text-sm">{product.description}</p>
                
                {/* Climate Resilience Rating */}
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Climate Resilience:</span>
                  <span className={`text-sm ${getClimateRatingColor(product.climateResilience)}`}>
                    {getClimateRatingStars(product.climateResilience)}
                  </span>
                </div>

                {/* Conflict Zone Rating */}
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Conflict Zone Rating:</span>
                  <span className={`text-sm ${getClimateRatingColor(product.conflictZoneRating)}`}>
                    {getClimateRatingStars(product.conflictZoneRating)}
                  </span>
                </div>

                {/* Training Required */}
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Training:</span>
                  <Badge variant="outline" className="text-xs">
                    {product.trainingRequired}
                  </Badge>
                </div>

                {/* Certifications */}
                <div className="flex gap-1 flex-wrap">
                  {product.certifications.map((cert, index) => (
                    <Badge key={index} variant="outline" className="text-xs border-green-400 text-green-400">
                      {cert}
                    </Badge>
                  ))}
                </div>

                {/* Supplier Info */}
                <div className="text-xs text-gray-400">
                  Supplier: {product.supplier.name} ({product.supplier.location})
                </div>

                <Button 
                  onClick={() => addToCart(product)}
                  className="w-full bg-teal-600 hover:bg-teal-700"
                >
                  Add to Kit
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Cart Summary */}
      {cart.length > 0 && (
        <Card className="bg-slate-800 border-slate-700 sticky bottom-4">
          <CardContent className="p-4">
            <div className="flex justify-between items-center">
              <span className="text-white">
                Cart: {cart.length} items - Total: ${cart.reduce((sum, item) => sum + item.cost, 0).toLocaleString()}
              </span>
              <Button className="bg-teal-600 hover:bg-teal-700">
                Build Complete Kit
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ProductCatalog;
