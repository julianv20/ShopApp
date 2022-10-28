import axios from 'axios';
import { useEffect, useState } from 'react';

export const useGetProducts = (api) => {
  const [products, setProducts] = useState([]);
  const handleProducts = async () => {
    const response = await axios(api);
    return response.data;
  };
  useEffect(() => {
    handleProducts().then((product) => setProducts(product));
  }, []);
  return products;
};
