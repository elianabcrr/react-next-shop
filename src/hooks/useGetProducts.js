import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]); //guardar la informacion que llamamos mediante useEffects
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(API);
      const filteredProducts = response.data.filter((product) => {
        return product.images.length > 0;
      });
      setProducts(filteredProducts);
    };
    fetchData();
    // construir las peticiones
  }, [API]);
  return products;
};
export default useGetProducts;
