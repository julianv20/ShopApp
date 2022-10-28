import React, { useEffect, useState } from 'react';
import ProductItem from '../components/ProductItem';
import '../styles/ProductList.scss';
import { useGetProducts } from '../hooks/useGetProducts';

const ProductList = () => {
  const api = `https://api.escuelajs.co/api/v1/products?limit=20&offset=1`;
  const products = useGetProducts(api);

  return (
    <section className="main-container">
      <div className="ProductList">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
