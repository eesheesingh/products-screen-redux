import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';

const ProductComponent = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="relative flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
      {/* Product Image */}
      <Link to={`/product/${product.id}`} className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
        <img
          className="object-cover"
          src={product.image}
          alt={product.title}
        />
        {product.discount && (
          <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
            {product.discount}% OFF
          </span>
        )}
      </Link>

      {/* Product Details */}
      <div className="mt-4 px-5 pb-5">
        <Link to={`/product/${product.id}`}>
          <h5 className="text-xl tracking-tight text-slate-900 truncate">
            {product.title}
          </h5>
        </Link>

        {/* Price and Discount */}
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-slate-900 line-through ml-2">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </p>

          {/* Rating */}
          <div className="flex items-center">
            <span className="text-yellow-500">
              {'★'.repeat(Math.floor(product.rating.rate))}
              {'☆'.repeat(5 - Math.floor(product.rating.rate))}
            </span>
            <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
              {product.rating.rate.toFixed(1)}
            </span>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="flex items-center justify-center w-full rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductComponent;
