import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Product } from '../types';
import ProductCard from '../components/ProductCard';
import { Filter, SlidersHorizontal } from 'lucide-react';

export default function Shop() {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);

  const category = searchParams.get('category');
  const sort = searchParams.get('sort') || 'newest';

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let productsQuery = collection(db, 'products');
        
        if (category) {
          productsQuery = query(productsQuery, where('category', '==', category));
        }

        const snapshot = await getDocs(productsQuery);
        let fetchedProducts = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Product[];

        // Sort products
        switch (sort) {
          case 'price-low':
            fetchedProducts.sort((a, b) => a.price - b.price);
            break;
          case 'price-high':
            fetchedProducts.sort((a, b) => b.price - a.price);
            break;
          case 'newest':
          default:
            // Assuming products have a createdAt field
            fetchedProducts.sort((a, b) => b.createdAt - a.createdAt);
        }

        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category, sort]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Shop</h1>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
        >
          <SlidersHorizontal className="h-5 w-5" />
          <span>Filters</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        {showFilters && (
          <div className="col-span-1 space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <label key={cat.value} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={category === cat.value}
                      onChange={() => {
                        const params = new URLSearchParams(searchParams);
                        if (category === cat.value) {
                          params.delete('category');
                        } else {
                          params.set('category', cat.value);
                        }
                        window.history.pushState({}, '', `?${params.toString()}`);
                      }}
                      className="rounded border-gray-300"
                    />
                    <span>{cat.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Sort By</h3>
              <select
                value={sort}
                onChange={(e) => {
                  const params = new URLSearchParams(searchParams);
                  params.set('sort', e.target.value);
                  window.history.pushState({}, '', `?${params.toString()}`);
                }}
                className="w-full rounded-md border-gray-300"
              >
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        )}

        {/* Products Grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ${showFilters ? 'md:col-span-3' : 'md:col-span-4'}`}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

const categories = [
  { label: "Women's Fashion", value: 'women' },
  { label: "Men's Fashion", value: 'men' },
  { label: 'Accessories', value: 'accessories' },
  { label: 'Shoes', value: 'shoes' },
  { label: 'Jewelry', value: 'jewelry' },
];