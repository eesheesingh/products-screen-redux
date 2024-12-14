import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/actions/productActions';
import ProductComponent from './ProductComponent';

const ProductListing = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 p-4">
      {products.map((product) => (
        <ProductComponent key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductListing;
