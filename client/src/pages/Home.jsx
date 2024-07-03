import  { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../action/Productaction';
import { useAuth } from '../store/auth';

function ProductList() {
  const productState = useSelector((state) => state.products);
  
  const dispatch = useDispatch();
  const { API } = useAuth();
  const { products, loading, error } = productState;

  useEffect(() => {
    dispatch(getAllProducts(API));
  }, [dispatch, API]);

  return (
    <div className='mt-5'>
      Popular products
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </>
    </div>
  );
}

export default ProductList;
