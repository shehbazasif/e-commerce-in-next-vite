import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { addToCart } from '../store/slices/cartSlice';
import toast from 'react-hot-toast';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const dispatch = useDispatch();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(addToCart(product));
    toast.success('Added to cart');
  };

  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 mb-4">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
        {product.sale?.isOnSale && (
          <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 text-sm font-medium rounded">
            SALE
          </div>
        )}
      </div>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
          <div className="mt-1">
            {product.sale?.isOnSale ? (
              <div className="flex items-center space-x-2">
                <span className="text-lg font-medium text-red-600">
                  ${product.sale.salePrice}
                </span>
                <span className="text-sm text-gray-500 line-through">
                  ${product.price}
                </span>
              </div>
            ) : (
              <span className="text-lg font-medium text-gray-900">
                ${product.price}
              </span>
            )}
          </div>
        </div>
        <button
          onClick={handleAddToCart}
          className="p-2 rounded-full bg-black text-white hover:bg-gray-800 transition-colors"
        >
          <ShoppingCart className="h-5 w-5" />
        </button>
      </div>
    </Link>
  );
}