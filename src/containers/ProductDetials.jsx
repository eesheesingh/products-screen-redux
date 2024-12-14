import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/actions/cartActions';

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.products);
  const product = products.find((prod) => prod.id === parseInt(id));

  if (!product) {
    return <div className="text-center">Loading...</div>;
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product.id));
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full md:w-1/2 h-64 object-cover" 
        />
        <div className="p-4 md:p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
            <p className="text-gray-700 text-lg mb-4">${product.price.toFixed(2)}</p>
            <div className="flex items-center mb-4">
              <span className="text-yellow-500">
                {'★'.repeat(Math.floor(product.rating.rate))}
                {'☆'.repeat(5 - Math.floor(product.rating.rate))}
              </span>
              <span className="text-gray-500 ml-2">({product.rating.count} ratings)</span>
            </div>
            <p className="text-gray-600">{product.description}</p>
          </div>
          <div className="flex space-x-4 mt-4">
            <button 
              onClick={handleAddToCart} 
              className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
            >
              Add to Cart
            </button>
            <button 
              onClick={handleRemoveFromCart} 
              className="px-4 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 transition-colors"
            >
              Remove from Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
